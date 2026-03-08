<script setup lang="ts">
    import { onMounted, onUnmounted, useAttrs } from 'vue';
    import { CoreOverlay } from '..';

    const model = defineModel<boolean>()

    const attrs = useAttrs();

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === 'Escape') {
            model.value = false
        }
    }

    onMounted(() => {
        window.addEventListener('keydown', handleKeydown)
    })

    onUnmounted(() => {
        window.removeEventListener('keydown', handleKeydown)
    })
</script>

<template>
    <Teleport to="body">
        <Transition name="dialog-fade">
            <CoreOverlay 
            class="dialog__overlay"
            v-if="model" 
            @click.self="model = false">
                <div 
                class="dialog"
                role="dialog"
                aria-modal="true" 
                v-bind="attrs">
                    <div class="dialog__header">
                        <slot name="header"></slot>
                    </div>
                    <div class="dialog__content">
                        <slot name="content"></slot>
                    </div>
                    <div class="dialog__actions">
                        <slot name="actions"></slot>
                    </div>
                </div>
            </CoreOverlay>
        </Transition>
    </Teleport>
</template>

<style scoped>
    .dialog__overlay {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .dialog {
        border-radius: var(--radius-md);
        background-color: #fff;
        z-index: 999;
        padding: var(--padding-lg);
    }

    .dialog__content {
        padding-block: 24px;
        padding-inline: 12px;
    }

    .dialog-fade-enter-active,
    .dialog-fade-leave-active {
        transition: opacity 0.2s ease;
    }

    .dialog-fade-enter-from,
    .dialog-fade-leave-to {
        opacity: 0;
    }

    .dialog {
        transition: transform 0.2s ease, opacity 0.2s ease;
    }

    .dialog-fade-enter-from .dialog {
        transform: scale(0.96);
        opacity: 0;
    }

    .dialog-fade-enter-to .dialog {
        transform: scale(1);
        opacity: 1;
    }

    .dialog__actions {
        display: flex;
        justify-content: flex-end;
        gap: 12px;
    }
</style>