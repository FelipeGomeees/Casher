<script setup lang="ts">
    defineProps<{
        width?: string
        height?: string
        radius?: string
    }>()
</script>

<template>
    <div
        class="skeleton shimmer"
        :style="{
        width: width || '100%',
        height: height || '1rem',
        }"
    />
</template>

<style scoped>
    .skeleton {
        position: relative;
        overflow: hidden;
        background-color: #e5e7eb;
        border-radius: var(--radius-lg);
    }

    .shimmer::after {
        content: '';
        position: absolute;
        top: 0;
        left: -150%;
        height: 100%;
        width: 150%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
        );
        animation: shimmer 1.4s infinite;
    }

    @keyframes shimmer {
        100% {
            left: 150%;
        }
    }
</style>