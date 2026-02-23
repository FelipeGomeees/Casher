<script setup lang="ts">
    import { inject, computed } from 'vue'
    import type { Ref } from 'vue'

    const props = defineProps<{
      value: string | number
    }>()

    const group = inject<{
      model: Ref<string>
      name: string
    }>('activeGroup')!

    const isChecked = computed(() => 
      group.model.value === props.value
    )
</script>

<template>
    <label class="radio-button">
      <input
      type="radio"
      :name="group.name"
      :value="value"
      v-model="group.model.value"
      />
          <span :class="{ selected: isChecked }">
              <slot />
          </span>
    </label>
</template>

<style scoped>
    .radio-button {
        cursor: pointer;
    }

    .radio-button input {
        display: none;
    }

    .radio-button input:checked + span {
        background-color: var(--color-thirdiary);
        color: var(--color-primary);
    }

    .radio-button span {
        padding-inline: var(--padding-md);
        padding-block: var(--padding-sm);
        border-radius: var(--radius-lg);
        background-color: var(--color-grey-400);
    }
</style>