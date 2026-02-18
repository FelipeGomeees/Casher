<script setup lang="ts">

    const props = defineProps({
        label: String,
        link: String,
    })
</script>

<template>
    <section class="section">
       <span class="section-label">
            <b>{{props.label}}</b>
            <a></a>
        </span>
        <div class="padding-wrapper">
            <slot>
            </slot>
        </div>
    </section>
</template>

<style scoped>
    .section {
        margin-inline: 10px;
    }
    .padding-wrapper {
        padding-top: 20px;
        padding-bottom: 40px;
        padding-inline: 5px;
    }
    .section-label {
        display: flex;
        justify-content: space-between;
    }
</style>