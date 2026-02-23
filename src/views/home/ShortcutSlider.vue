<script setup lang="ts">
    import { BanknotesIcon } from '@heroicons/vue/24/outline';
    import { CreditCardIcon } from '@heroicons/vue/24/outline';
    import { ChartPieIcon } from '@heroicons/vue/24/outline';
    import { FlagIcon } from '@heroicons/vue/24/outline';
</script>

<template>
    <span class="options-container">
        <a class="options" href="/extrato">
            <BanknotesIcon class="icon"/>
            <b>Extrato Financeiro</b>
        </a>
        <div class="options">
            <CreditCardIcon class="icon"/>
            <b>Método de Pagamentos</b>
        </div>
        <div class="options">
            <ChartPieIcon class="icon"/>
            <b>Estatísticas</b>
        </div>
        <div class="options">
            <FlagIcon class="icon"/>
            <b>Metas</b>
        </div>
    </span>
</template>

<style scoped>
    .options-container {
        display: flex;
        overflow: scroll;
        scroll-behavior: smooth;
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
    }

    .icon {
        color: var(--color-primary);
        width: 30%;
        height: 30%;
    }
</style>