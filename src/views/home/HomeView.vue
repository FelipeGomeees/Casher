<script setup lang="ts">
    import ShortcutSlider from './ShortcutSlider.vue';
    import CoreSection from '@/components/section/CoreSection.vue';
    import HomeHeader from './HomeHeader.vue';
    import CoreList from '@/components/list/CoreList.vue';
    import PaymentCard from './PaymentCard.vue';

    import { useExtratoStore } from '@/stores/extratoStore';
    import { computed, onMounted } from 'vue';

    const extratoStore = useExtratoStore()

    onMounted(() => {
        extratoStore.fetchExtrato()
    })

    const items = computed(() => {
        return extratoStore.transacoes.map((item) => {
            return {
                value: 'R$' + item.valor,
                ...item
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
        <CoreList :items="items"/>
    </CoreSection>
</template>

<style>
</style>