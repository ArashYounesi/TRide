<script setup>
import {onMounted} from 'vue'
import {useState, states} from '@/store'
import WhereToGo from '@/components/WhereToGo.vue'
import {hideBackButton} from "@/helpers/helper";

onMounted(() => {
  const {setState} = useState()

  setState(states.WHERE_TO_GO)
  hideBackButton()
})
</script>
<template>
  <WhereToGo/>
</template>
