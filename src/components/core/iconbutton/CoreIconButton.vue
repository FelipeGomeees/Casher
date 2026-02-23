<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  icon: Component
}>()
</script>

<template>
  <div class="icon-button">
    <component :is="icon" />
  </div>
</template>

<style scoped>
.icon-button {
  border-radius: 100%;
  padding: var(--padding-md);

  width: 25px;
  height: 25px;
  background-color: var(--color-grey-400);
}
</style>