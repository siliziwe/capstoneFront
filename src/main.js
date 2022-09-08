import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from 'bootstrap'

createApp(App).use(bootstrap).use(store).use(router).mount('#app')
