<script setup lang="ts">
    /* Aqui vai os props de coluna */
</script>

<template>
    <div class="form-section__grid">
        <slot></slot>
    </div>
</template>

<style scoped>
    .form-section__grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px 24px;
    }

    @media (max-width: 768px) {
        .form-section__grid {
            grid-template-columns: 1fr;
        }

        .form-helper-text {
            grid-column: span 1;
        }
    }
</style>