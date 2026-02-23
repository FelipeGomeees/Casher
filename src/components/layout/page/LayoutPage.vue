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
        background-color: var(--color-thirdiary);
        padding-top: var(--padding-md);
        position: sticky;
        top: 0;
        min-height: var(--header-height);
        z-index: 1000;
    }
</style>