<script setup lang="ts">
    import { RouterLink, type RouteLocationAsPath } from 'vue-router'
    import { ChevronLeftIcon } from '@heroicons/vue/24/outline'

    const props = defineProps<{
        to: RouteLocationAsPath
    }>()
</script>

<template>
    <div class="header__container">
        <RouterLink
        class="header__link"
        :to="props.to"
        >
            <ChevronLeftIcon class="header__icon" />
            <span>
                <slot name="title" />
            </span>
        </RouterLink>

        <ul class="header__actions">
            <slot name="actions" />
        </ul>
    </div>
</template>

<style scoped>
    .header__container {
        display: flex;
        justify-content: space-between;
        padding-inline: var(--padding-md);
    }

     .header__link{
        display: inline-flex;
        align-items: center;
        gap: var(--gap-md);
        white-space: nowrap;
    }

    .header__link:link, .header__link:visited, .header__link:hover, .header__link:active {
      text-decoration: none;
      color: inherit;
    }

    .header__icon {
        width: var(--icon-md);
        height: var(--icon-md);
    }

    .header__actions {
        list-style: none;
        display: inline-flex;
        gap: var(--padding-lg);
    }
</style>