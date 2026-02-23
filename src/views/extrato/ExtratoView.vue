<script setup lang="ts">
    import { CoreList, CoreSection, CoreRadioButton, CoreRadioGroup, CoreIconButton } from '@/components/core';
    import { LayoutPage } from '@/components/layout';


    import { computed, onMounted, ref } from 'vue';
    import { useMovimentacaoStore } from '@/stores/movimentacao';
    import { ShoppingCartIcon, FunnelIcon } from '@heroicons/vue/24/outline';

    import ExtratoHeader from './ExtratoHeader.vue';

    import ItemExtrato, { type ListItemExtrato } 
      from '@/components/app/ItemExtrato.vue'
  
    const movimentacaoStore = useMovimentacaoStore()

    onMounted(() => {
        movimentacaoStore.fetchMovimentacao()
    })

    const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

    const currentFilter = ref<string>('recentes');

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
          icon: ShoppingCartIcon,
        })
      })

      return grouped
    })
</script>

<template>
  <LayoutPage>
    <template #header>
      <ExtratoHeader/>
    </template>
    <template #page>
      <CoreSection>
        <div class="flex-between extrato-view__saldo-container">
          <h2>Saldo Atual</h2>
          <h2>{{formattedValue}}</h2>
        </div>
        <div class="flex-between">
          <CoreRadioGroup v-model="currentFilter">
            <CoreRadioButton value="recentes">Recentes</CoreRadioButton>
            <CoreRadioButton value="futuros">Futuros</CoreRadioButton>
            <CoreRadioButton value="todos">Todos</CoreRadioButton>
          </CoreRadioGroup>
          <CoreIconButton :icon="FunnelIcon"/>
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
</style>