<script setup lang="ts"></script>

<template>
    <li class="header-action">
        <slot />
    </li>
</template>

<style scoped>
    :deep(.icon-button) {
        background-color: var(--color-thirdiary);
    }
</style>