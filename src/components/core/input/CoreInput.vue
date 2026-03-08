<script setup lang="ts">
import { ref, computed, useAttrs } from 'vue'

const model = defineModel<string>({ required: true })

const props = defineProps<{
  label?: string
  error?: string
  type?: undefined | 'number' | 'password'
}>()

const attrs = useAttrs()

const isFocused = ref(false)

const isFloating = computed(() => {
  return isFocused.value || !!model.value
})
</script>

<template>
  <div class="input">
    <div
      class="input__wrapper"
      :class="{ 'input__wrapper--focused': isFocused }"
    >
      <input
        v-model="model"
        :type="props.type ?? 'text'"
        class="input__field"
        @focus="isFocused = true"
        @blur="isFocused = false"
        v-bind="attrs"
      />

      <label
        v-if="props.label"
        class="input__label"
        :class="{ 'input__label--floating': isFloating }"
      >
        {{ props.label }}
      </label>
    </div>

    <span v-if="props.error" class="input__error">
      {{ props.error }}
    </span>
  </div>
</template>

<style scoped>
    .input__wrapper {
        position: relative;
        border: var(--border-width-md) solid var(--border-color);
        border-radius: var(--radius-md);
        padding: 16px 12px 2px 12px;
        transition: border-color 0.2s ease;
    }

    .input__wrapper--focused {
        border-color: var(--color-primary);
    }

    .input__field {
        width: 100%;
        border: none;
        background: transparent;
        font-size: 16px;
    }

    .input__field:focus {
        outline: none;
        caret-color: var(--color-primary);
    }

    .input__label {
        position: absolute;
        left: 12px;
        top: 10px;
        font-size: 16px;
        color: #666;
        pointer-events: none;
        transition: all 0.2s ease;
    }

    .input__label--floating {
        top: 2px;
        font-size: 12px;
    }
</style>