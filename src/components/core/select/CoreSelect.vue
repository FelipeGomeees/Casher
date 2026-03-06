<script setup lang="ts">
import { ref, computed, useAttrs } from 'vue'

const model = defineModel<string>({ required: true })

const props = defineProps<{
  label?: string
  error?: string
  options: string[]
}>()

const attrs = useAttrs()

const isFocused = ref(false)

const isFloating = computed(() => {
  return isFocused.value || !!model.value
})
</script>

<template>
  <div class="select">
    <div
      class="select__wrapper"
      :class="{ 'select__wrapper--focused': isFocused }"
    >
      <select
        v-model="model"
        class="select__field"
        @focus="isFocused = true"
        @blur="isFocused = false"
        v-bind="attrs"
      >
        <option value="" disabled hidden></option>

        <option
          v-for="(option, index) in props.options"
          :key="index"
          :value="option"
        >
          {{ option }}
        </option>
      </select>

      <label
        v-if="props.label"
        class="select__label"
        :class="{ 'select__label--floating': isFloating }"
      >
        {{ props.label }}
      </label>
    </div>

    <span v-if="props.error" class="select__error">
      {{ props.error }}
    </span>
  </div>
</template>

<style scoped>
.select__wrapper {
  position: relative;
  border: var(--border-width-md) solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 16px 12px 2px 12px;
  transition: border-color 0.2s ease;
  background: white;
}

.select__wrapper--focused {
  border-color: var(--color-primary);
}

.select__field {
  width: 100%;
  border: none;
  background: transparent;
  font-size: 16px;
  appearance: none;
  cursor: pointer;
}

.select__field:focus {
  outline: none;
}

.select__label {
  position: absolute;
  left: 12px;
  top: 10px;
  font-size: 16px;
  color: #666;
  pointer-events: none;
  transition: all 0.2s ease;
}

.select__label--floating {
  top: 2px;
  font-size: 12px;
}

.select__error {
  font-size: 12px;
  color: var(--color-danger, red);
  margin-top: 4px;
  display: block;
}
</style>