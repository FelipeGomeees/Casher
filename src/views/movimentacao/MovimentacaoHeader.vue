<script setup lang="ts">
    import { CoreIconButton, CoreSkeleton } from '@/components/core';
    import { ShoppingCartIcon } from '@heroicons/vue/24/outline';
    import { LayoutHeader } from '@/components/layout';
    import currencyFormat from '@/utils/currencyFormat';
    import { useMovimentacaoStore } from '@/stores/movimentacao/movimentacao';

    const movimentacaoStore = useMovimentacaoStore()

</script>

<template>
    <LayoutHeader back>
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
                        <h2 v-if="!movimentacaoStore.loading">
                            {{movimentacaoStore.movimentacaoAtual?.local}}
                        </h2>
                        <CoreSkeleton v-else/>
                    </div>
                    <CoreIconButton 
                    :icon="ShoppingCartIcon" 
                    class="movimentacao-header__icon">
                    </CoreIconButton>
                </div>
                <div>Valor</div>
                <h2 v-if="!movimentacaoStore.loading">{{currencyFormat(movimentacaoStore.movimentacaoAtual?.valor ?? 0)}}</h2>
                <CoreSkeleton v-else/>
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