<script setup lang="ts">
    import { CoreSection, CoreSurfaceStack } from '@/components/core';
    import { LayoutPage } from '@/components/layout';
    
    import { useMovimentacaoStore } from '@/stores/movimentacao/movimentacao';
    import { onMounted } from 'vue';

    import MovimentacaoHeader from './MovimentacaoHeader.vue';
    import CoreIconButton from '@/components/core/iconbutton/CoreIconButton.vue';
    import { CreditCardIcon, MapPinIcon, HomeModernIcon, TagIcon, CalendarIcon } from '@heroicons/vue/24/outline';
  
    const movimentacaoStore = useMovimentacaoStore()

    onMounted(() => {
        movimentacaoStore.fetchMovimentacao()
    })
</script>

<template>
    <LayoutPage>
        <template #header>
            <MovimentacaoHeader class="coolheader"/>
        </template>
        <template #page>
            <CoreSection>
                <CoreSurfaceStack class="movimentacao-view__pagamento">
                    <CoreIconButton :icon="CreditCardIcon"/>
                    <div>
                        <b>Pagamento</b>
                        <br/>
                        <span>PIX • 255.255.255-07</span>
                    </div>
                </CoreSurfaceStack>
            </CoreSection>
            <CoreSection>
                <CoreSurfaceStack>
                    <div>
                        <b>Detalhes da Movimentação</b>
                    </div>
                    <div class="movimentacao-view__description-item">
                        <MapPinIcon class="movimentacao-view__description"/>
                        Localização
                    </div>
                    <div class="movimentacao-view__description-item">
                        <HomeModernIcon class="movimentacao-view__description"/>
                        Estabelecimento
                    </div>
                    <div class="movimentacao-view__description-item">
                        <TagIcon class="movimentacao-view__description"/>
                        Categoria
                    </div>
                    <div class="movimentacao-view__description-item">
                        <CalendarIcon class="movimentacao-view__description"/>
                        Recorrente
                    </div>
                </CoreSurfaceStack>
            </CoreSection>
        </template>
    </LayoutPage>
</template>

<style scoped>
    .movimentacao-view__pagamento {
        display: flex;
        align-items: center;
        padding-inline: var(--padding-md);
        margin-top: var(--padding-lg);
    }
    .movimentacao-view__description-item {
        display: flex;
        align-items: center;
        gap: var(--gap-md);
    }
    .movimentacao-view__description {
        color: var(--color-primary);
        height: var(--icon-lx);
    }
    /* ... */
    .flex-between {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>