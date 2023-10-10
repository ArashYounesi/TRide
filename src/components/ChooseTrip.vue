<template>
  <BottomDrawer>
    <div class="container w-full h-full where-to-go pt-5 px-0">
      <div class="flex flex-row justify-center p-5">
        <h4 class="font-bold text-sm block">Choose Trip</h4>
      </div>
      <div class="w-full no-scrollbar p-3 grid gap-2.5 grid-cols-3">
        <button
            class="trip-type rounded-3xl relative pt-6 p-3 flex flex-col justify-center items-center shadow-xl"
            v-for="item in tripTypes"
            :key="item"
            :class="{ active: item.isActive }"
            @click="setActive(item)"
        >
          <component :is="item.icon" class="w-6 h-6 icon"/>
          <span class="title font-bold text-sm pt-2 pb-1">{{ item.title }}</span>
          <span class="text-xs pb-3 text-gray-400">{{ item.nearbie }} nearbie</span>
          <span
              class="price w-full block flex flex-row justify-center items-center h-10 text-gray-800 bg-gray-200 rounded-3xl"
          >
            <sup class="text-xs font-semibold">$</sup>
            <span class="text-xl font-bold">{{ priceParts(item.price)[0] }}</span>
            <sup class="text-xs font-semibold">{{ priceParts(item.price)[1] }}</sup>
          </span>
        </button>
      </div>

      <div class="p-3 pt-6">
        <Button @click="request()">Request</Button>
      </div>
    </div>
  </BottomDrawer>
</template>

<script setup>
import {reactive} from 'vue'
import BottomDrawer from '@/components/BottomDrawer.vue'
import {useRouter} from 'vue-router'
import Car from '@/components/icons/Car.vue'
import HeliCopter from '@/components/icons/HeliCopter.vue'
import Bike from '@/components/icons/Bike.vue'
import Button from '@/components/Button.vue'
import _ from 'lodash'

const router = useRouter()
const tripTypes = reactive([
  {
    title: 'Bike',
    nearbie: 5,
    icon: Bike,
    price: 6.53,
    isActive: false
  },
  {
    title: 'Standard',
    nearbie: 4,
    icon: Car,
    price: 9.92,
    isActive: true
  },
  {
    title: 'Helicopter',
    nearbie: 1,
    icon: HeliCopter,
    price: 16.73,
    isActive: false
  }
])

function setActive(tripType) {
  tripTypes.forEach(function (item) {
    item.isActive = false
  })
  tripType.isActive = true
}

function priceParts(price) {
  return _.split(price, '.')
}

function request() {
  router.push({
    name: 'arriving'
  })
}
</script>
