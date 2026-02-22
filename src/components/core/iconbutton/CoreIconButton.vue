<script setup lang="ts">
import type { Component } from 'vue';

const props = defineProps<{
    icon: Component,
}>()
</script>

<template>
    <div class="icon">
        <component
            
            :is="props.icon"
        />
    </div>
</template>

<style scoped>
    .icon {
        background-color: var(--color-grey-400);
        padding: var(--padding-md);
        border-radius: 100%;
        width: 25px;
        height: 25px;
    }
</style>