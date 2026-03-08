<script setup lang="ts">
import { computed, type Component } from 'vue';

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost'
  active?: boolean
  disabled?: boolean
  icon?: Component
}>(), {
  variant: 'primary',
  active: false,
  disabled: false
})

const classes = computed(() => [
  'core-button',
  `core-button--${props.variant}`,
  {
    'is-active': props.active,
    'is-disabled': props.disabled
  }
])
</script>

<template>
  <button
    :class="classes"
    :disabled="disabled"
  >
    <div class="button__content-wrapper">
        <slot />
        <div class="button__icon">
            <component :is="icon"/>
        </div>
    </div>
  </button>
</template>

<style scoped>
    .core-button {
        cursor: pointer;
        border: none;
        padding-inline: var(--padding-md);
        padding-block: var(--padding-sm);
        border-radius: var(--radius-lg);
        font: inherit;
        transition: all 0.2s ease;
    }

    .core-button--primary {
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);
        color: #fff;
    }

    .core-button--secondary {
        background-color: var(--color-grey-300);
        border: 1px solid var(--color-primary);
        color: var(--color-primary);
        box-sizing: border-box;
    }

    .core-button--ghost {
        background: transparent;
        color: var(--color-primary);
    }

    .core-button.is-active {
        background-color: var(--color-thirdiary);
        color: var(--color-primary);
    }

    .core-button:not(.is-disabled):hover {
        opacity: 0.85;
    }


    .core-button.is-disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .button__icon {
        height: 22px;
        width: 22px;
        margin-left: 4px;
    }

    .button__content-wrapper {
        display: flex;

    }
</style>