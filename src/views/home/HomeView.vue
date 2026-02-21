<script setup lang="ts">
    import ShortcutSlider from './ShortcutSlider.vue';
    import CoreSection from '@/components/section/CoreSection.vue';
    import HomeHeader from './HomeHeader.vue';
    import CoreList from '@/components/list/CoreList.vue';
    import PaymentCard from './PaymentCard.vue';
    import ItemExtrato from '@/components/app/ItemExtrato.vue';

    import { useMovimentacaoStore } from '@/stores/movimentacao';
    import { computed, onMounted } from 'vue';

    import { ShoppingCartIcon } from '@heroicons/vue/24/outline';

    const movimentacaoStore = useMovimentacaoStore()

    onMounted(() => {
        movimentacaoStore.fetchMovimentacao()
    })

    const listItems = computed(() => {
        return movimentacaoStore.transacoes
        .slice(0, 4)
        .map((item) => {
            return {
                title: item.local.toUpperCase(),
                value: item.valor,
                description:  `${item.metodoPagamento} • ${item.data}`,
                icon: ShoppingCartIcon,
            }
        })
    })
</script>

<template>
    <HomeHeader/>

    <CoreSection label="Acesso Rápido">
        <ShortcutSlider/>
    </CoreSection>
    <CoreSection label="Métodos de Pagamento">
        <PaymentCard/>
    </CoreSection>
    <CoreSection label="Ultimos Gastos">
        <CoreList :items="listItems" v-slot="{ item }">
            <ItemExtrato :item="item"/>
        </CoreList>
    </CoreSection>
</template>

<style>
</style>