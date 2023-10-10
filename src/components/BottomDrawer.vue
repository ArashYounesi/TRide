<template>
  <div class="bottom-drawer bg-color w-full absolute bottom-0 p-0 flex flex-col justify-center items-center">
    <div class="relative w-full h-full shadow">
      <Notch />
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import Notch from '@/components/Notch.vue'
</script>
