<script setup lang="ts">
    import { BanknotesIcon } from '@heroicons/vue/24/outline';
    import { CreditCardIcon } from '@heroicons/vue/24/outline';
    import { ChartPieIcon } from '@heroicons/vue/24/outline';
    import { FlagIcon } from '@heroicons/vue/24/outline';
</script>

<template>
    <span class="options-container">
        <RouterLink class="options" to="/extrato">
            <BanknotesIcon class="icon"/>
            <span>Extrato</span>
        </RouterLink>
        <RouterLink class="options" to="/extrato">
            <CreditCardIcon class="icon"/>
            <span>Método de Pagamentos</span>
        </RouterLink>
        <RouterLink class="options" to="/extrato">
            <ChartPieIcon class="icon"/>
            <span>Estatísticas</span>
        </RouterLink>
        <RouterLink class="options" to="/extrato">
            <FlagIcon class="icon"/>
            <span>Metas</span>
        </RouterLink>
    </span>
</template>

<style scoped>
    .options-container {
        display: flex;
        overflow-x: auto;
        overflow-y: visible;
        scroll-behavior: smooth;
        gap: 8px;
    }
    .options {
        border: 1px solid rgb(187, 187, 187);
        width: 100px;
        height: 100px;
        border-radius: 8px;
        margin-right: 5px;
        flex-shrink: 0;
        padding: 5px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        z-index: 2;
    }

    .icon {
        color: var(--color-primary);
        width: 30%;
        height: 30%;
    }
</style>