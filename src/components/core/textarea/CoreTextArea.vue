<script setup lang="ts">
import { ref, computed, useAttrs } from 'vue'

const model = defineModel<string>({ required: true })

const props = defineProps<{
  label?: string
  error?: string
  rows?: number
}>()

const attrs = useAttrs()

const isFocused = ref(false)

const isFloating = computed(() => {
  return isFocused.value || !!model.value
})
</script>

<template>
  <div class="textarea">
    <div
      class="textarea__wrapper"
      :class="{ 'textarea__wrapper--focused': isFocused }"
    >
      <textarea
        v-model="model"
        class="textarea__field"
        :rows="props.rows ?? 4"
        @focus="isFocused = true"
        @blur="isFocused = false"
        v-bind="attrs"
      />

      <label
        v-if="props.label"
        class="textarea__label"
        :class="{ 'textarea__label--floating': isFloating }"
      >
        {{ label }}
      </label>
    </div>

    <span v-if="props.error" class="textarea__error">
      {{ props.error }}
    </span>
  </div>
</template>

<style scoped>
    .textarea__wrapper {
        position: relative;
        border: var(--border-width-md) solid var(--border-color);
        border-radius: var(--radius-md);
        padding: 20px 12px 6px 12px;
        transition: border-color 0.2s ease;
    }

    .textarea__wrapper--focused {
        border-color: var(--color-primary);
    }

    .textarea__field {
        width: 100%;
        border: none;
        background: transparent;
        font-size: 16px;
        resize: none;
        line-height: 1.4;
    }

    .textarea__field:focus {
        outline: none;
        caret-color: var(--color-primary);
    }

    .textarea__label {
        position: absolute;
        left: 12px;
        top: 14px;
        font-size: 16px;
        color: #666;
        pointer-events: none;
        transition: all 0.2s ease;
    }

    .textarea__label--floating {
        top: 4px;
        font-size: 12px;
    }

    .textarea__error {
        display: block;
        margin-top: 4px;
        font-size: 12px;
        color: var(--color-danger);
    }
</style>