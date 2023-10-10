<template>
  <div class="flex flex-row items-center justify-start w-full">
    <div class="pr-4">
      <MapPinIcon class="text-gray-400 w-5 h-5 button-color" />
    </div>
    <div class="block w-full">
      <span class="block font-normal text-xs text-gray-400">Pick Off</span>
      <p class="destination w-full border-none outline-none text-xs text-color font-bold">
        {{ value() }}
      </p>
    </div>
  </div>
</template>
<script setup>
import { MapPinIcon } from '@heroicons/vue/24/outline'

const props = defineProps(['value'])
const value = () => {
  if (props.value) return props.value

  return 'Where you go?'
}
</script>
