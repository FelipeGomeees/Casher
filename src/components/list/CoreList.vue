<script setup lang="ts">
    import { ShoppingCartIcon } from '@heroicons/vue/24/outline';

    type listItem = {
        title?: String,
        value?: String,
        description?: String,
    }

    const props = defineProps({
        items: {
            type: Array<listItem>,
            required: true,
        }
    })
</script>

<template>
    <span class="options-container">
        <div class="item-wrapper">
            <div :class="{ 'item': true, 'last-item': index === props.items.length - 1}" v-for="(item, index) in props.items" :key="index">
                <div class="icon-wrapper">
                    <ShoppingCartIcon class="icon"/>
                </div>
                
                <div class="item-content">
                    <div class="item-content-header">
                        <b>{{item.title}}</b>
                        <p>{{item.value}}</p>
                    </div>
                    <p>{{item.description}}</p>
                </div>
            </div>
        </div>
    </span>
</template>

<style scoped>
    .options-container {
        border-radius: 8px;
    }
    .item {
        height: 80px;
        border-bottom: 1px solid rgb(187, 187, 187);
        flex-shrink: 0;
        padding: 5px;
        display: flex;
        align-items: center;
    }

    .last-item {
        border: none;
    }

    .item-wrapper {
        border: 1px solid rgb(187, 187, 187);
        border-radius: 8px;
    }

    .item-content {
        flex: 4;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        padding: 5px;
    }

    .item-content-header {
        display: flex;
        justify-content: space-between;
    }

    .icon-wrapper {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon {
        color: rgb(53, 53, 53);
        background-color: rgb(216, 216, 216);
        padding: 15px;
        border-radius: 100%;
        width: 30px;
        height: 30px;
    }
</style>