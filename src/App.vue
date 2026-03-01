<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()

const transitionName = computed(() => {
  return route.meta.transition || 'pop-forward'
})
</script>

<template>
    <Transition :name="transitionName" mode="out-in">
      <div class="route-viewport" :key="route.fullPath">
        <RouterView></RouterView>
      </div>
    </Transition>
</template>

<style>
    * {
      font-family: "SN Pro", sans-serif;
    }
    .route-viewport {
      position: fixed;
      inset: 0;
      overflow-y: auto;
      background: var(--color-background);
    }
    .pop-forward-enter-active,
    .pop-forward-leave-active {
      transition: all 0.2s ease;
    }

    .pop-forward-enter-from {
      opacity: 0;
      transform: scale(0.97);
    }

    .pop-forward-leave-to {
      opacity: 0;
      transform: scale(1.03);
    }
    

    .pop-back-enter-active,
    .pop-back-leave-active {
      transition: all 0.2s ease;
    }

    .pop-back-enter-from {
      opacity: 0;
      transform: scale(1.03);
    }

    .pop-back-leave-to {
      opacity: 0;
      transform: scale(0.97);
    }
</style>
