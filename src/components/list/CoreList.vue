<script setup lang="ts" generic="T">
    const props = defineProps<{
        items: T[]
    }>()
</script>

<template>
    <ul class="list-container">
        <li 
          class="list-item"
          v-for="(item, index) in props.items" 
          :key="index">
            <slot :item="item" :index="index"></slot>
        </li>
    </ul>
</template>

<style scoped>
    .list-container {
        list-style: none;
        padding: 0;
        margin: 0;

        border: var(--border-width-md) solid var(--border-color);
        border-radius: var(--radius-lg);
    }

    .list-item {
        list-style: none;
        margin: 0;

        border-bottom: var(--border-width-md) solid var(--border-color);
        padding: var(--padding-md);
    }

    .list-item:last-child {
        border: none;
    }
</style>