<script setup lang="ts">
    import { computed, type Component } from 'vue';

    export type ListItemExtrato  = {
        title?: string,
        value?: number,
        description?: string,
        icon?: Component,
    }

    const props = defineProps<{
        item: ListItemExtrato 
    }>()

    const isPositive = computed(() => {
        return props.item?.value != null && props.item.value > 0
    })

    const formattedValue = computed(() =>
        new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(props.item.value ?? 0)
    )
</script>

<template>
    <div class="item-extrato__container">
        <div class="item-extrato__icon-container">
            <component
                class="item-extrato__icon"
                :is="props.item.icon"
                v-if="props.item.icon"
            />
        </div>

        <div class="item-extrato__content">
            <span class="item-extrato__content-header">
                <b>{{props.item.title ?? ''}}</b>
                <p :class="{ 'positive': isPositive }">{{formattedValue ?? ''}}</p>
            </span>
            <p>{{props.item.description ?? ''}}</p>
        </div>
    </div>
</template>

<style scoped>
    .item-extrato__container {
        flex: 4;
        display: flex;
        height: 100%;
        padding-block: var(--padding-md);
    }

    .icon-wrapper {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .item-extrato__icon-container {
        width: 100%;
        max-width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: var(--padding-md);
    }

    .item-extrato__icon {
        color: var(--color-grey-600);
        background-color: var(--color-thirdiary);
        padding: var(--padding-md);
        border-radius: 100%;
        width: 25px;
        height: 25px;
    }

    .item-extrato__content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .item-extrato__content-header {
        display: flex;
        justify-content: space-between;
    }

    .list-content__header {
        display: flex;
        justify-content: space-between;
        font-size: var(--font-size-bg);
    }

    .positive {
        color: var(--color-primary);
    }
</style>