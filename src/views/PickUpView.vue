<script setup>
import {states} from '../store/index'
import PickUp from '@/components/PickUp.vue'
import Pin from '@/components/Pin.vue'
import {onMounted} from 'vue'
import {useState} from '@/store'
import {showBackButton} from "@/helpers/helper";

onMounted(() => {
  const {setState} = useState()

  setState(states.PICK_UP)
  showBackButton()
})
</script>
<template>
  <PickUp/>
  <Pin/>
</template>
