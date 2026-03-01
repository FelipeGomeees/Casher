<script setup lang="ts">
    import { CoreList, CoreSection, CoreSurfaceStack, CoreSkeleton } from '@/components/core';

    import ShortcutSlider from './ShortcutSlider.vue';
    import HomeHeader from './HomeHeader.vue';
    import ItemExtrato from '@/components/app/ItemExtrato.vue';

    import { useMovimentacaoStore } from '@/stores/movimentacao/movimentacao';
    import { computed, onMounted } from 'vue';

    import { ShoppingCartIcon } from '@heroicons/vue/24/outline';
    import DefaultChart from '@/components/charts/DefaultChart.vue';

    const movimentacaoStore = useMovimentacaoStore()

    onMounted(() => {
        movimentacaoStore.fetchMovimentacao()
    })

    const listItems = computed(() => {
        return movimentacaoStore.transacoes
        .slice(0, 4)
        .map((item) => {
            return {
                title: item.local,
                value: item.valor,
                description:  `${item.metodoPagamento} • ${item.data}`,
                icon: ShoppingCartIcon,
            }
        })
    })

    const expenseData = computed(() => {
        const map: Record<string, number> = {}

        movimentacaoStore.transacoes
            .filter(m => m.valor < 0 && m.status === 'confirmado')
            .forEach(m => {
            if (!map[m.categoria]) map[m.categoria] = 0
            map[m.categoria] += Math.abs(m.valor)
            })

            return {
                categorias: Object.keys(map),
                valores: Object.values(map)
            }
    })

</script>

<template> 
    <HomeHeader/>
    <CoreSection label="Acesso Rápido" linkLabel="Ver todos">
        <ShortcutSlider/>
    </CoreSection>
    <CoreSection label="Gastos do MêS" linkLabel="Ver Dashboard">
        <CoreSurfaceStack v-if="!movimentacaoStore.loading">
            <DefaultChart :data="expenseData"/>
        </CoreSurfaceStack>
        <CoreSkeleton height="220px" v-else/>
    </CoreSection>
    <CoreSection label="Ultimos Gastos" linkLabel="Ver mais">
        <div v-if="!movimentacaoStore.loading">
            <CoreList :items="listItems" v-slot="{ item }">
                <ItemExtrato :item="item"/>
            </CoreList>
        </div>
        <div v-else>
            <CoreSkeleton height="100px"/>
            <CoreSkeleton height="100px"/>
            <CoreSkeleton height="100px"/>
            <CoreSkeleton height="100px"/>
        </div>

    </CoreSection>
</template>

<style>
</style>