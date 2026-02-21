<script setup lang="ts">
    // import CoreSection from '@/components/section/CoreSection.vue';
    // import CoreList from '@/components/list/CoreList.vue';
    // import { computed } from 'vue';

    // const groupedByDate = computed(() => {
    //     return items.reduce((acc, item) => {
    //         if (!acc[item.date]) {
    //             acc[item.date] = []
    //         }
    //         acc[item.date].push(item)
    //         return acc
    //     }, {} as Record<string, typeof items>)
    // })

    // const formatDate = (date: string) => {
    //     return new Date(date).toLocaleDateString('pt-BR')
    // }

    // const items = [
    // {
    //     title: 'Hello',
    //     value: 'R$ 50.00',
    //     description: 'PIX',
    //     date: '2026-02-18'
    // },
    // {
    //     title: 'Hello',
    //     value: 'R$ 30.00',
    //     description: 'Cartão',
    //     date: '2026-02-18'
    // },
    // {
    //     title: 'Hello',
    //     value: 'R$ 100.00',
    //     description: 'TED',
    //     date: '2026-02-17'
    // },
    //     {
    //     title: 'Hello',
    //     value: 'R$ 100.00',
    //     description: 'TED',
    //     date: '2026-02-16'
    // },
    //     {
    //     title: 'Hello',
    //     value: 'R$ 100.00',
    //     description: 'TED',
    //     date: '2026-02-16'
    // },
    //     {
    //     title: 'Hello',
    //     value: 'R$ 100.00',
    //     description: 'TED',
    //     date: '2026-02-16'
    // },
    // ]

    /*
      <CoreSection label="Extrato">
    <div class="date-section" v-for="(group, date) in groupedByDate" :key="date">
      <b>{{ formatDate(date) }}</b>
      <CoreList :items="group" />
    </div>
  </CoreSection>
    */
</script>

<template>
<div>

</div>
</template>

<style scoped>
    .date-section {
        padding-bottom: 20px;
    }
</style>