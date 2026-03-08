<script setup lang="ts">
    import { onMounted, onUnmounted } from 'vue';

    const props = defineProps<{
        isActive: boolean,
    }>();

    onMounted(() => {

    })

    onUnmounted(() => {

    })
</script>

<template>
    <Teleport to="body">
        <Transition>
            <div v-if="props.isActive" class="dialog">
                <slot></slot>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
    .dialog {
        border-radius: var(--border-radius);
        background-color: #fff;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translate(-50%, -50%);   
        z-index: 999;
    }
</style>