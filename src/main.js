import { createApp } from 'vue'
import "../scss/style.scss"
import { router } from "./router.js"
import App from './App.vue'

const app = createApp(App);

app.config.globalProperties.$diceCounter = 4;

app.use(router).mount('#app');