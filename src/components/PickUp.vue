<template>
  <BottomDialog>
    <div class="p-3 pt-5 bg-color rounded-3xl flex flex-col">
      <Source class="p-4" :value="source.place_name"/>
      <Button class="mt-6 self-center" @click="pickUp">Select</Button>
    </div>
  </BottomDialog>
</template>

<script setup>
import Source from '@/components/Source.vue'
import Button from '@/components/Button.vue'
import {source, map, useTrip} from '@/store'
import mapboxgl from 'mapbox-gl'
import {useRouter} from 'vue-router'
import BottomDialog from '@/components/BottomDialog.vue'

const router = useRouter()
const {setSourceMarker} = useTrip()

function pickUp() {
  addPickUpMarker()
  router.push({
    name: 'pick-off'
  })
}

function addPickUpMarker() {
  const el = document.createElement('div')
  el.innerHTML = `<div class="extra-background"></div>
                    <div class="inner">
                      <svg class="pin pickup w-4 h-4 text-gray-900" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                      </svg>
                  </div>`
  el.className = 'pin-marker'

  const {lng, lat} = map.value.getCenter()
  const coordinates = [lng, lat]
  // make a marker for each feature and add to the map
  const marker = new mapboxgl.Marker(el).setLngLat(coordinates).addTo(map.value)
  setSourceMarker(marker)
}
</script>
