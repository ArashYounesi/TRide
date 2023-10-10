<template>
  <button
    ref="goToMyLocation"
    class="bg-button-color box-content absolute flex flex-row justify-center items-center rounded-xl p-1.5 right-6 bottom-10 shadow-md"
  >
    <CrossHair class="w-5 h-5" />
  </button>
</template>
<script setup>
import CrossHair from '@/components/icons/CrossHair.vue'
import { onMounted, ref } from 'vue'

const goToMyLocation = ref()

onMounted(() => {
  const bottomDrawerHeight = document.querySelector('.bottom-drawer').offsetHeight

  goToMyLocation.value.style.bottom = bottomDrawerHeight + 16 + 'px'
})
</script>
