import { createApp } from 'vue'
import "../scss/style.scss"
import { router } from "./router.js"
import App from './App.vue'

createApp(App).use(router).mount('#app');