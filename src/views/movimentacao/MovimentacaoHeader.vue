<script setup lang="ts">
    import { CoreIconButton } from '@/components/core';
    import { ShoppingCartIcon } from '@heroicons/vue/24/outline';
    import { LayoutHeader } from '@/components/layout';
    import currencyFormat from '@/utils/currencyFormat';
</script>

<template>
    <LayoutHeader :to="{
        path: '/extrato',
    }">
        <template #title>
            <b>Movimentacao</b>
            <br/>
            <span>26 de Janeiro de 2026 as 14:32</span>
        </template>
        <template #actions>
            
        </template> 
        <template #content>
            <div class="movimentacao-header">
                <div class="movimentacao-header__content">
                    <div>
                        <div>Estabelecimento</div>
                        <h2>Junior Esfihas</h2>
                    </div>
                    <CoreIconButton 
                    :icon="ShoppingCartIcon" 
                    class="movimentacao-header__icon">
                    </CoreIconButton>
                </div>
                <div>Valor</div>
                <h2>{{currencyFormat(6000)}}</h2>
            </div>
        </template>
    </LayoutHeader>
</template>

<style scoped>
    .movimentacao-header {
        padding-block: var(--padding-lg);
    }
    .movimentacao-header__content {
        display: flex;
        justify-content: space-between;
        padding-right: var(--padding-lg);
    }
    .movimentacao-header__icon {
        background-color: var(--color-grey-300);
    }
</style>