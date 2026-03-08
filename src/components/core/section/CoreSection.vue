<script setup lang="ts">
    import { ArrowRightIcon } from '@heroicons/vue/16/solid';
    import { RouterLink } from 'vue-router';

    const props = defineProps<{
        label?: string,
        linkLabel?: string,
    }>()
</script>

<template>
    <section class="section">
        <div class="section__label">
            <b>{{props.label}}</b>
            
            <RouterLink to="/extrato" class="section__label-link">
                <span>{{props.linkLabel}}</span>
                <ArrowRightIcon class="section__icon"
                v-if="props.linkLabel"/>
            </RouterLink>
        </div>
        <div class="section__content">
            <slot>
            </slot>
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