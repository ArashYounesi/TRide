<template>
  <BottomDialog>
    <div class="p-3 pt-5 bg-color rounded-3xl flex flex-col">
      <div class="flex flex-row justify-between p-5">
        <h4 class="flex-c font-bold text-sm block">Arriving</h4>
        <span class="flex-c text-xs text-gray-500 font-medium">7 min</span>
      </div>
      <div class="p-3 flex flex-row justify-between items-center">
        <div class="flex flex-row justify-center items-center">
          <div class="relative">
            <img
                class="shadow rounded-2xl w-12 w-12"
                src="../assets/img/default-avatar.jpg"
                alt="Driver Avatar"
            />
            <span
                class="absolute -right-4 -bottom-2 overflow-hidden w-7 h-7 rounded-2xl border-2 box-content border-white"
            >
              <img
                  class="car-photo"
                  src="../assets/img/Lamborghini.jpg"
                  alt="Car Photo"
              />
            </span>
          </div>
          <div class="flex flex-col pl-6">
            <span class="font-bold text-sm">The Arash</span>
            <span class="mt-1 font-normal text-xs text-gray-500">Lamborghini</span>
          </div>
        </div>
        <div class="flex flex-col justify-center items-start">
          <div class="flex flex-row py-2">
            <StarIcon class="button-color w-4 h-4 mr-1"/>
            <span class="text-xs font-bold">4.7</span>
          </div>
          <div class="text-xs font-semibold bg-gray-200 py-1.5 p-3 rounded-3xl">U 11 345</div>
        </div>
      </div>
      <div class="pt-6 flex flex-row justify-center items-center">
        <Button class="flex-grow" @click="pay()">Pay</Button>
      </div>
    </div>
  </BottomDialog>
</template>

<script setup>
import {useRouter} from 'vue-router'
import {StarIcon} from '@heroicons/vue/24/solid'
import Button from '@/components/Button.vue'
import BottomDialog from '@/components/BottomDialog.vue'
import {_tgWebApp} from "@/helpers/helper";

const router = useRouter()

function cancel() {
  // Todo:
}

function pay() {
  _tgWebApp().showAlert('Dear User, Payment service currently is not available! please try again later')
}
</script>
