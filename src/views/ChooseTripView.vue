<script setup>
import { onMounted } from 'vue'
import { useState, states } from '@/store'
import ChooseTrip from '@/components/ChooseTrip.vue'

onMounted(() => {
  const { setState } = useState()

  setState(states.CHOOSE_TRIP)
})
</script>
<template>
  <ChooseTrip />
</template>
