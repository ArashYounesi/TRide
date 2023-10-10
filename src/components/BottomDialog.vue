<template>
  <div class="bottom-dialog container absolute p-3 bottom-0">
    <div class="relative w-full h-full shadow rounded-3xl">
      <Notch/>
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import Notch from '@/components/Notch.vue'
</script>
