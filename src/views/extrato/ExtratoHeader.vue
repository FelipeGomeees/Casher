<script setup lang="ts">
    import { CoreIconButton } from '@/components/core';
    import { UserCircleIcon, ArrowDownTrayIcon, ChartBarIcon } from '@heroicons/vue/24/outline';
    import { LayoutHeader, LayoutHeaderAction } from '@/components/layout';

</script>

<template>
    <LayoutHeader :to="{
        path: '/',
    }">
        <template #title>
            Extrato
        </template>
        <template #actions>
            <LayoutHeaderAction>
                <CoreIconButton :icon="ArrowDownTrayIcon"/>
            </LayoutHeaderAction>
            <LayoutHeaderAction>
                <CoreIconButton :icon="ChartBarIcon"/>
            </LayoutHeaderAction>
            <LayoutHeaderAction>
                <CoreIconButton :icon="UserCircleIcon"/>
            </LayoutHeaderAction> 
        </template> 
    </LayoutHeader>
</template>