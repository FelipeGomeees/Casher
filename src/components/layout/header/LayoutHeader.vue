<script setup lang="ts">
import { RouterLink, type RouteLocationAsPath } from 'vue-router'
import { ChevronLeftIcon } from '@heroicons/vue/24/outline'

const props = defineProps<{
  to: RouteLocationAsPath
}>()
</script>

<template>
  <div class="default-header__container">
    <RouterLink
      :to="props.to"
      class="default-header__link"
    >
      <ChevronLeftIcon class="icon" />
      <span>
        <slot name="title" />
      </span>
    </RouterLink>

    <ul class="default-header__actions">
      <slot name="actions" />
    </ul>
  </div>
</template>

<style scoped>
    .default-header__container {
        display: flex;
        justify-content: space-between;
        padding-inline: var(--padding-md);

    }
     .default-header__link
      {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        white-space: nowrap;
    }

    .default-header__link:link, .default-header__link:visited, .default-header__link:hover, .default-header__link:active {
      text-decoration: none;
      color: inherit;
    }

    .icon {
        width: 16px;
        height: 16px;
    }
    .default-header__actions {
        list-style: none;
        display: inline-flex;
        gap: var(--padding-lg);
    }
</style>