<!-- Todo: -->
<template>
  <div class="select-addresss container absolute p-3 bottom-0">
    <Notch />
    <div class="p-3 pt-6 bg-color rounded-3xl flex-col items-center justify-start">
      <Source class="p-4" />
      <div class="flex flex-row justify-center items-center relative w-full px-4">
        <span class="line w-full border-b-gray-100"></span>
        <div class="p-1.5 rounded-xl bg-gray-100">
          <Car class="w-5 h-5 button-color" />
        </div>
      </div>
      <Destination />
    </div>
  </div>
</template>

<script setup>
import Notch from '@/components/Notch.vue'
import Car from '@/components/icons/Car.vue'
import Source from '@/components/Source.vue'
import Destination from '@/components/Destination.vue'
</script>
