<script setup lang="ts">
    import { RouterLink, type RouteLocationAsPath } from 'vue-router'
    import { ChevronLeftIcon } from '@heroicons/vue/24/outline'

    const props = defineProps<{
        to: RouteLocationAsPath
    }>()
</script>

<template>
    <div class="header__container">
        <div class="header__main">
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
        <div class="header__content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style scoped>
    .header__container {
        display: flex;
        flex-direction: column;
        padding-inline: var(--padding-md);    
    }
    .header__main {
        display: flex;
        justify-content: space-between;
    }

     .header__link{
        display: inline-flex;
        align-items: center;
        gap: var(--gap-md);
        white-space: nowrap;
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