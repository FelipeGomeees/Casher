<script setup lang="ts">
</script>

<template>
    <div class="overlay">
        <slot></slot>
    </div>
</template>

<style scoped>
    .overlay {
        position: absolute;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 998;
    }
</style>