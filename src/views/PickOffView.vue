<script setup>
import Pin from '@/components/Pin.vue'
import PickOff from '@/components/PickOff.vue'
import {onMounted} from 'vue'
import {useState, states} from '@/store'
import {showBackButton} from "@/helpers/helper";

onMounted(() => {
  const {setState} = useState()

  setState(states.PICK_OFF)
})
</script>
<template>
  <PickOff/>
  <Pin/>
</template>
