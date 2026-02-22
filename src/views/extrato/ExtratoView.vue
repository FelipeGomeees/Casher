<script setup lang="ts">
    import { CoreList, CoreSection, CoreRadioButton, CoreRadioGroup } from '@/components/core';

    import { computed, onMounted, ref } from 'vue';
    import { useMovimentacaoStore } from '@/stores/movimentacao';
    import { ShoppingCartIcon } from '@heroicons/vue/24/outline';

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

    const currentFilter = ref<string>('recentes')


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
  <div>
    <CoreSection label="Hístorico de Movimentações">
        <CoreRadioGroup v-model="currentFilter">
          <CoreRadioButton value="recentes">Recentes</CoreRadioButton>
          <CoreRadioButton value="futuros">Futuros</CoreRadioButton>
          <CoreRadioButton value="todos">Todos</CoreRadioButton>
        </CoreRadioGroup>
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
  </div>
</template>

<style scoped>
</style>