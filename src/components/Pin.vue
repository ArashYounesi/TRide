<template>
  <div class="pin-wrapper">
    <div class="extra-background"></div>
    <div class="inner bg-button-color">
      <Send class="pin pickup w-4 h-4 text-gray-900" v-if="state === states.PICK_UP" />
      <MapPinIcon class="pin w-5 h-5 text-gray-900" v-if="state === states.PICK_OFF" />
    </div>
  </div>
</template>

<script setup>
import Send from '@/components/icons/Send.vue'
import { MapPinIcon } from '@heroicons/vue/24/solid'
import { state, states } from '@/store'
</script>
