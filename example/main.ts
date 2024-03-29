import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { PerfectScrollbarPlugin } from '../src'
createApp(App).use(PerfectScrollbarPlugin).mount('#app')
