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
        padding: var(--icon-sm);

        width: 20px;
        height: 20px;
        background-color: var(--color-grey-400);
    }
</style>