<script setup lang="ts">
    import { provide } from 'vue'

    const props = defineProps<{
        name?: string
    }>()

    const model = defineModel<string>()

    const groupName = props.name ?? `group-${Math.random()}`

    provide('activeGroup', {
        model,
        groupName,
    })
</script>

<template>
    <div class="radio-group">
        <slot />
    </div>
</template>

<style scoped>
    .radio-group {
        display: inline-flex;
        gap: var(--padding-lg);
    }
</style>