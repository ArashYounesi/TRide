<template>
  <div class="map-layout">
    <div ref="mapContainer" class="flex-1 z-0 top-0 right-0 bottom-0 left-0"></div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import {cars, useMap, source, destination, state, states, useTrip, map} from '@/store'

const accessToken =
    'pk.eyJ1IjoidW5pcWJhcmJlciIsImEiOiJja2hyZHZjYjAxMjdtMnpwNWs3YjVxZDJxIn0.ZDDXOXKiD8rh1ysWk6xUDQ'
mapboxgl.accessToken = accessToken
export default {
  props: ['modelValue'],

  data: () => ({map: null}),

  mounted() {
    const {lng, lat, zoom, bearing, pitch} = this.modelValue

    const {setMap} = useMap()
    const {setSource, setDestination} = useTrip()

    const map = new mapboxgl.Map({
      container: this.$refs.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v12',
      // style: "mapbox://styles/mapbox/navigation-day-v1",
      attributionControl: false,
      center: [lng, lat],
      bearing,
      pitch,
      zoom
    })

    // Add geolocate control to the map.
    map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          // When active the map will receive updates to the device's location as it changes.
          trackUserLocation: true,
          // Draw an arrow next to the location dot to indicate which direction the device is heading.
          showUserHeading: true
        })
    );

    // add markers to map
    cars.forEach(function (car) {
      const {coordinates} = car

      // create a HTML element for each feature
      const el = document.createElement('div')
      el.innerHTML = `<img src="./svg/car.svg" />`
      el.className = 'car-marker'

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el).setLngLat(coordinates).addTo(map)
    })

    const updateLocation = () => {
      this.$emit('update:modelValue', this.getLocation())
    }
    const reverseGeocoding = () => {
      const {lng, lat} = this.map.getCenter()
      fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?types=poi&access_token=${accessToken}`
      )
          .then((response) => response.json())
          .then((data) => {
            const {features} = data
            setAddress(features[0])
          })
    }

    const setAddress = (data) => {
      const addressData = {
        place_name: data.place_name,
        coordinates: data.geometry.coordinates
      }

      switch (state.value) {
        case states.PICK_UP:
          setSource(addressData)
          break
        case states.PICK_OFF:
          setDestination(addressData)
          break
      }
    }

    map.on('move', updateLocation)
    map.on('zoom', updateLocation)
    map.on('rotate', updateLocation)
    map.on('pitch', updateLocation)
    map.on('moveend', () => {
      if (state.value === states.PICK_UP || state.value === states.PICK_OFF) {
        reverseGeocoding()
      }
    })

    this.map = map
    setMap(map)
  },

  unmounted() {
    this.map.remove()
    this.map = null
  },

  watch: {
    modelValue(next) {
      const curr = this.getLocation()
      const map = this.map

      if (curr.lng !== next.lng || curr.lat !== next.lat)
        map.setCenter({lng: next.lng, lat: next.lat})
      if (curr.pitch !== next.pitch) map.setPitch(next.pitch)
      if (curr.bearing !== next.bearing) map.setBearing(next.bearing)
      if (curr.zoom !== next.zoom) map.setZoom(next.zoom)
    }
  },

  methods: {
    getLocation() {
      return {
        ...this.map.getCenter(),
        bearing: this.map.getBearing(),
        pitch: this.map.getPitch(),
        zoom: this.map.getZoom()
      }
    }
  }
}
</script>
