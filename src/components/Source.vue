<template>
  <div class="flex flex-row items-center justify-start pb-0 w-full">
    <div class="pr-4">
      <StopIcon class="rotate-45 button-color w-5 h-5" />
    </div>
    <div class="block w-full">
      <span class="block font-normal text-xs text-gray-400">Where are You?</span>
      <p class="source w-full border-none outline-none text-xs text-color font-bold">
        {{ value() }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { StopIcon } from '@heroicons/vue/24/outline'

const props = defineProps(['value'])

const value = () => {
  if (props.value) return props.value

  return 'Move map to select your location ...'
}
</script>
