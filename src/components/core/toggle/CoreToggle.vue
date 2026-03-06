<script setup lang="ts">
import { useAttrs } from 'vue'

const model = defineModel<boolean>({ required: true })

const props = defineProps<{
  label?: string
  error?: string
  disabled?: boolean
}>()

const attrs = useAttrs()
</script>

<template>
  <div class="toggle-field">
    <label class="toggle">
    <span v-if="props.label" class="toggle__label">
        {{ props.label }}
    </span>

    <input
        type="checkbox"
        class="toggle__input"
        v-model="model"
        :disabled="disabled"
        v-bind="attrs"
    />

    <div class="toggle__wrapper">
        <div class="toggle__thumb" />
    </div>
    </label>

    <span v-if="props.error" class="toggle__error">
      {{ props.error }}
    </span>
  </div>
</template>

<style scoped>
.toggle-field {
  width: 100%;
}

.toggle {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 48px;
  cursor: pointer;
  user-select: none;
}

.toggle__input {
  position: absolute;
  inset: 0;
  opacity: 0;
  margin: 0;
  cursor: pointer;
}

.toggle__wrapper {
  position: relative;
  width: 42px;
  height: 24px;
  background: #d1d5db;
  border-radius: 999px;
  transition: background 0.2s ease;
  flex-shrink: 0;
}

.toggle__thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s ease;
}

.toggle__input:checked + .toggle__wrapper {
  background: var(--color-primary);
}

.toggle__input:checked + .toggle__wrapper .toggle__thumb {
  transform: translateX(18px);
}

.toggle__input:focus-visible + .toggle__wrapper {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.toggle__input:disabled {
  cursor: not-allowed;
}

.toggle__input:disabled + .toggle__wrapper {
  opacity: 0.6;
}

.toggle__input:disabled ~ .toggle__label {
  opacity: 0.6;
  cursor: not-allowed;
}

.toggle__label {
  font-size: 14px;
  transition: color 0.2s ease;
}

.toggle__input:checked ~ .toggle__label {
  color: var(--color-primary);
}

.toggle__error {
  display: block;
  margin-top: 4px;
  font-size: 12px;
  color: var(--color-error);
}
</style>