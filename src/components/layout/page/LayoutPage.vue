<script setup lang="ts">
    import LayoutHeader from '../header/LayoutHeader.vue';
</script>

<template>
  <div class="layout">
    <header class="layout-page__header">
        <slot name="header">
          <LayoutHeader/>
        </slot>
      <AppHeader />
    </header>

    <main class="layout-page__content">
      <slot name="page"/>
    </main>
  </div>
</template>

<style scoped>
    .layout-page__header {
      background-color: var(--color-secondary);
      padding-top: var(--padding-md);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 60px;
      z-index: 1000;
    }

    .layout-page__content {
      padding-top: 60px;
    }
</style>