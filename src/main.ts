import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueApexCharts from 'vue3-apexcharts'

import App from './App.vue'
import router from './router'

import '@/assets/styles/global.css'
import '@/assets/styles/tokens.css'

if (true) {
  const { worker } = await import('./mocks/browser')
  await worker.start()
}

const app = createApp(App)

app.use(VueApexCharts);
app.use(createPinia())
app.use(router)

app.mount('#app')
