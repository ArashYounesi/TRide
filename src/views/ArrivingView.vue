<script setup>
import { states } from '../store/index'
import { onMounted } from 'vue'
import { useState, map, cars } from '@/store'
import Arriving from '@/components/Arriving.vue'

onMounted(() => {
  const { setState } = useState()

  setState(states.ARRIVING)

  map.value.flyTo({ center: cars[0].coordinates, essential: true })
})
</script>
<template>
  <Arriving />
</template>
