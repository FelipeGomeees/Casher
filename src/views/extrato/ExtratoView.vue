<script setup lang="ts">
    import { computed, onMounted, ref } from 'vue';
    import { FunnelIcon, PlusIcon, CheckCircleIcon, ArrowRightCircleIcon } from '@heroicons/vue/24/outline';

    import { CoreList, CoreSection, CoreRadioButton, CoreRadioGroup, CoreIconButton, CoreDialog, CoreButton } from '@/components/core';
    import { LayoutPage } from '@/components/layout';
    import MovimentacaoForm from '../../domain/movimentacao/MovimentacaoForm.vue';
    import ExtratoHeader from './ExtratoHeader.vue';
    import ItemExtrato, { type ListItemExtrato } 
    from '@/components/app/ItemExtrato.vue'

    import { useMovimentacaoStore } from '@/stores/movimentacao/movimentacao'
    import { getCategoryIcon } from '@/utils/categoryIcon'

    const movimentacaoStore = useMovimentacaoStore()

    const isActiveDialogMovimentacao = ref(false);
    const currentFilter = ref<string>('recentes');

    const formMovimentacao = ref();
  
    onMounted(() => {
        movimentacaoStore.fetchMovimentacao()
    })

    const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })


    const formattedValue = computed(() =>
        new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(6000)
    )

    // Isso iria vir formatado de uma api, este codigo não pertence a uma versão final
    const groupedByDate = computed(() => {
      const grouped: Record<string, ListItemExtrato[]> = {}

      movimentacaoStore.transacoes.forEach((item) => {
        const rawDate = new Date(item.data)
        const formattedDate = dateFormatter.format(rawDate)

        if (!grouped[formattedDate]) {
          grouped[formattedDate] = []
        }

        grouped[formattedDate].push({
          title: item.local.toUpperCase(),
          value: item.valor,
          description: `${item.metodoPagamento} • ${item.data}`,
          icon: getCategoryIcon(item.categoria),
        })
      })

      return grouped
    })

    const handleFilterButtonClick = async () => {
        
    }

    const handleAddButtonClick = async () => {
        isActiveDialogMovimentacao.value = !isActiveDialogMovimentacao.value;
    }

    const handleMovimentacaoSubmit = async (action: string) => {
        if (action === 'close') isActiveDialogMovimentacao.value = false;

        movimentacaoStore.submit(formMovimentacao.value);
    }
</script>

<template>
    <LayoutPage>
        <template #header>
            <ExtratoHeader/>
        </template>
        <template #page>
            <CoreSection>
                <div class="flex-between extrato-view__saldo-container">
                    <h3>Saldo Atual</h3>
                    <h3>{{formattedValue}}</h3>
                </div>
                <div class="flex-between">
                    <CoreRadioGroup v-model="currentFilter">
                        <CoreRadioButton value="recentes">Recentes</CoreRadioButton>
                        <CoreRadioButton value="futuros">Futuros</CoreRadioButton>
                        <CoreRadioButton value="todos">Todos</CoreRadioButton>
                    </CoreRadioGroup>
                    <CoreIconButton :icon="FunnelIcon" @click="handleFilterButtonClick"/>
                </div>
            </CoreSection>
            <CoreSection>
                <div
                class="date-section"
                v-for="(items, date) in groupedByDate"
                :key="date"
                >
                    <CoreSection :label="date">
                        <CoreList :items="items" v-slot="{ item }">
                            <ItemExtrato :item="item"/>
                        </CoreList>
                    </CoreSection>
                </div>
            </CoreSection>
            <CoreIconButton 
            :icon="PlusIcon" 
            class="extrato-view__add-button"
            @click="handleAddButtonClick()"/>
            <CoreDialog v-model="isActiveDialogMovimentacao">
                <template #header>
                    <h3>
                        Nova Movimentação
                    </h3>
                </template>
                <template #content>
                    <MovimentacaoForm 
                    class="extrato-view__movimentacao-form"
                    v-model="formMovimentacao"/>
                </template>
                <template #actions>
                    <CoreButton
                    type="submit"
                    variant="secondary"
                    :icon="CheckCircleIcon"
                    @click="handleMovimentacaoSubmit('save')">
                        Salvar
                    </CoreButton>
                    <CoreButton
                    type="submit"
                    variant="primary"
                    :icon="ArrowRightCircleIcon"
                    @click="handleMovimentacaoSubmit('close')">
                        Salvar e Voltar
                    </CoreButton>
                </template>
            </CoreDialog>
        </template>
    </LayoutPage>
</template>

<style scoped>
    .extrato-view__saldo-container {
        margin-block: var(--margin-labelx2);
    }
    /* ... */
    .flex-between {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .extrato-view__add-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: var(--color-secondary);
    }
    .extrato-view__movimentacao-form {
        width: 80vw;
    }
</style>