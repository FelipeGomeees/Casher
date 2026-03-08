<script setup lang="ts">
import { computed } from 'vue'
import ApexCharts from 'vue3-apexcharts'
import type { ApexOptions } from 'apexcharts';

const props = defineProps<{
  data: {
    categorias: string[],
    valores: number[],
  },
}>()

const chartOptions = computed<ApexOptions>(() => ({
  chart: {
    type: 'donut',
    fontFamily: 'SN Pro, sans-serif',
  },
  animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 120
      },
      dynamicAnimation: {
        enabled: true,
        speed: 500
      }
  },
  labels: props.data.categorias,
  legend: {
    position: 'right',
    fontSize: '14px'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 2
  },
  colors: [
    'var(--color-purple-500)',
    'var(--color-purple-400)',
    'var(--color-purple-300)',
    'var(--color-grey-500)',
    'var(--color-grey-600)'
  ],
  plotOptions: {
    pie: {
      donut: {
        size: '70%',
        labels: {
          show: true,
          total: {
            show: true,
            label: '',
            formatter: () => {
              const total = props.data.valores.reduce((a, b) => a + b, 0)
              return `R$ ${total.toFixed(2)}`
            }
          }
        }
      }
    }
  }
}))
</script>

<template>
  <div class="chart-card">
    <ApexCharts
        v-if="props.data.valores.length"
        type="donut"
        height="300"
        :options="chartOptions"
        :series="props.data.valores"
    />
  </div>
</template>

<style scoped>
.chart-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: var(--padding-lg);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.chart-title {
  font-size: var(--font-size-lg);
  margin-bottom: var(--margin-labelx2);
  color: var(--color-grey-600);
}
</style>