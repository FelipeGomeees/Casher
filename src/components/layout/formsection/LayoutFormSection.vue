<script setup lang="ts">
    const props = defineProps<{
        label: string,
    }>()
</script>

<template>
    <div class="form-section">
        <h3 class="form-section__title">{{ props.label }}</h3>
        <slot></slot>
    </div>
</template>

<style scoped>
    .form-section {
        display: flex;
        flex-direction: column;
        gap: var(--gap-md);
    }

    .form-section__title {
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-lg);
        text-transform: uppercase;
        letter-spacing: var(--label-spacing);
        color: var(--color-grey-600);
    }

    .form-section + .form-section {
        padding-top: 24px;
    }
</style>