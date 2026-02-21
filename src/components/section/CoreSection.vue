<script setup lang="ts">
    import { ArrowRightIcon } from '@heroicons/vue/16/solid';

    const props = defineProps({
        label: String,
        linkLabel: String,
    })
</script>

<template>
    <section class="section">
       <span class="section__label">
            <b>{{props.label}}</b>
            <a class="section__label-link">
                <span>{{props.linkLabel}}</span>
                <ArrowRightIcon class="icon"/>
            </a>
        </span>
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
        gap: 4px;
        white-space: nowrap;
        border-bottom: var(--border-width-lg) solid var(--border-color);
    }
    .icon {
        width: 16px;
        height: 16px;
    }
    .section__content {
        margin-bottom: var(--margin-section);
        padding-inline: var(--padding-lg);
    }
</style>