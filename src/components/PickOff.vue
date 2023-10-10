<template>
  <BottomDialog>
    <div class="p-3 pt-5 bg-color rounded-3xl flex flex-col">
      <Destination class="p-4" :value="destination.place_name"/>
      <Button class="mt-6 self-center" @click="pickOff()">Select</Button>
    </div>
  </BottomDialog>
</template>

<script setup>
import Destination from '@/components/Destination.vue'
import Button from '@/components/Button.vue'
import {destination, map, useTrip} from '@/store'
import mapboxgl from 'mapbox-gl'
import {useRouter} from 'vue-router'
import BottomDialog from '@/components/BottomDialog.vue'

const router = useRouter()
const {setDestinationMarker} = useTrip()

function pickOff() {
  addPickUpMarker()
  router.push({
    name: 'choose-trip'
  })
}

function addPickUpMarker() {
  const el = document.createElement('div')
  el.innerHTML = `<div class="extra-background"></div>
                    <div class="inner">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="pin w-5 h-5 text-gray-900"><path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                  </div>`
  el.className = 'pin-marker'

  const {lng, lat} = map.value.getCenter()
  const coordinates = [lng, lat]
  // make a marker for each feature and add to the map
  const marker = new mapboxgl.Marker(el).setLngLat(coordinates).addTo(map.value)
  setDestinationMarker(marker)
}
</script>
