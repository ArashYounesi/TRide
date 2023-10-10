<template>
  <BottomDrawer>
    <div class="container h-full where-to-go pt-5 px-0">
      <div class="flex flex-row justify-between p-5">
        <h4 class="flex-c font-bold text-sm block">Where to go?</h4>
        <a href="" class="flex-c text-xs text-gray-500 font-medium"></a>  <!-- Todo: Customize-->
      </div>
      <div
          class="destinations pb-6 no-scrollbar overflow-x-scroll pt-8 flex flex-row justify-start items-center"
      >
        <button class="destination rounded-3xl relative p-3 pt-7 pb-4 ml-3 flex flex-col justify-center items-center"
                @click="newTrip()">
          <MapPinIcon class="icon bg-button-color absolute rounded-xl p-1.5 box-content w-5 h-5"/>
          <span class="font-bold text-xs py-1">New Trip</span>
          <span class="description text-gray-500 font-medium">Tap for location</span>
        </button>

        <button
            class="destination rounded-3xl relative p-3 pt-7 pb-4 ml-3 flex flex-col justify-center items-center"
            v-for="item in destinations"
            :key="item"
            @click="flyTo(item)"
        >
          <component :is="item.icon" class="icon absolute rounded-xl p-1.5 box-content w-5 h-5"/>
          <span class="font-bold text-xs py-1">{{ item.title }}</span>
          <span class="description text-gray-500 font-medium">{{ item.description }}</span>
        </button>
      </div>
    </div>
  </BottomDrawer>
</template>

<script setup>
import {reactive} from 'vue'
import BottomDrawer from '@/components/BottomDrawer.vue'
import {MapPinIcon, HomeIcon, HomeModernIcon, BuildingStorefrontIcon, TrophyIcon} from '@heroicons/vue/24/outline'
import {useRouter} from 'vue-router'
import {map} from '@/store'

const router = useRouter()
const destinations = reactive([
  {
    title: 'Home',
    description: '15km, 20min',
    icon: HomeIcon,
    coordinates: [55.2451534, 25.2028245]
  },
  {
    title: 'Store',
    description: '18km, 23min',
    icon: BuildingStorefrontIcon,
    coordinates: [55.282312, 25.221272]
  },
  {
    title: 'Work',
    description: '22km, 30min',
    icon: HomeModernIcon,
    coordinates: [55.404647, 25.322483]
  },
  {
    title: 'Racing',
    description: '30km, 35min',
    icon: TrophyIcon,
    coordinates: [55.2361861, 25.0491125]
  }
])

function newTrip() {
  router.push({
    name: 'pick-up'
  })
}

function flyTo(item) {
  map.value.flyTo({center: item.coordinates, essential: true})
}
</script>
