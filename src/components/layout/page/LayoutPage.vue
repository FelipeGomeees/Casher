<script setup lang="ts">
</script>

<template>
    <div class="page">
        <header class="page__header">
            <slot name="header">
            </slot>
        </header>

        <main class="page__content">
            <slot name="page"/>
        </main>
    </div>
</template>

<style scoped>
    .page__header {
        background-color: var(--color-secondary);
        padding-top: var(--padding-md);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: var(--header-height);
        z-index: 1000;
    }

    .page__content {
        padding-top: var(--header-height);
    }
</style>