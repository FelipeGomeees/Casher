<script setup lang="ts">
    import { CoreSection, CoreSkeleton, CoreSurfaceStack } from '@/components/core';
    import { LayoutPage } from '@/components/layout';
    
    import { useMovimentacaoStore } from '@/stores/movimentacao/movimentacao';
    import { onMounted } from 'vue';

    import MovimentacaoHeader from './MovimentacaoHeader.vue';
    import CoreIconButton from '@/components/core/iconbutton/CoreIconButton.vue';
    import { CreditCardIcon, MapPinIcon, HomeModernIcon, TagIcon, CalendarIcon } from '@heroicons/vue/24/outline';
    import { useRoute } from 'vue-router';

    const route = useRoute();
  
    const movimentacaoStore = useMovimentacaoStore()

    onMounted(async () => {
        const id = Number(route.params.id)
        await movimentacaoStore.fetchMovimentacaoById(id);
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
                        <span v-if="!movimentacaoStore.loading">
                            {{movimentacaoStore.movimentacaoAtual?.metodoPagamento}} • 255.255.255-07
                        </span>
                        <CoreSkeleton v-else/>
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
                        <div class="flex-between w-100">
                            <div>
                                Localização
                            </div>
                            <div v-if="!movimentacaoStore.loading">
                                Tupã-SP
                            </div>
                            <CoreSkeleton v-else/>
                        </div>
                    </div>
                    <div class="movimentacao-view__description-item">
                        <HomeModernIcon class="movimentacao-view__description"/>
                        <div class="flex-between w-100">
                            <div>
                                Estabelecimento 
                            </div>
                            <div v-if="!movimentacaoStore.loading">
                                {{ movimentacaoStore.movimentacaoAtual?.local }}
                            </div>
                            <CoreSkeleton v-else/>
                        </div>
                    </div>
                    <div class="movimentacao-view__description-item">
                        <TagIcon class="movimentacao-view__description"/>
                        <div class="flex-between w-100">
                            <div>
                                Categoria 
                            </div>
                            <div v-if="!movimentacaoStore.loading">
                                {{ movimentacaoStore.movimentacaoAtual?.categoria }}
                            </div>
                            <CoreSkeleton v-else/>
                        </div>
                    </div>
                    <div class="movimentacao-view__description-item">
                        <CalendarIcon class="movimentacao-view__description"/>
                        <div class="flex-between w-100">
                            <div>
                                Recorrente
                            </div>
                            <div v-if="!movimentacaoStore.loading">
                                {{ movimentacaoStore.movimentacaoAtual?.recorrente }}
                            </div>
                            <CoreSkeleton v-else/>
                        </div>
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
        gap: var(--gap-sm);
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

    .w-100 {
        width: 100%;
    }
</style>