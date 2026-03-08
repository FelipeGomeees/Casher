<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/16/solid'
import type { Component } from 'vue';
import { RouterLink } from 'vue-router'

const props = withDefaults(defineProps<{
  label?: string
  linkLabel?: string
  to?: string
  linkComponent?: Component | string,
}>(), {
  linkComponent: RouterLink
})

const LinkComponent = props.linkComponent
</script>

<template>
    <section class="section">
    <div class="section__label">
        <b>{{ props.label }}</b>

        <component
        :is="LinkComponent"
        v-bind="LinkComponent === 'a' ? { href: props.to } : { to: props.to }"
        class="section__label-link"
        >
        <span>{{ props.linkLabel }}</span>

        <ArrowRightIcon
            v-if="props.linkLabel"
            class="section__icon"
        />
        </component>

    </div>

    <div class="section__content">
        <slot />
    </div>
    </section>
</template>

<style scoped>
  .section__label {
      display: flex;
      justify-content: space-between;
      padding-inline: var(--padding-lg);
      margin-bottom: var(--margin-label);
  }
  .section__label-link {
      display: inline-flex;
      align-items: center;
      gap: var(--gap-sx);
      white-space: nowrap;
      border-bottom: var(--border-width-lg) solid var(--border-color);
  }
  .section__icon {
      width: var(--icon-md);
      height: var(--icon-md);
  }
  .section__content {
      margin-bottom: var(--margin-section);
      padding-inline: var(--padding-lg);
  }
</style>