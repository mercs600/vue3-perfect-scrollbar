import { createApp } from 'vue'
import App from './App.vue'
import PerfectScrollbar from '../src'
import '../src/style.css'

const app = createApp(App)

app.use(PerfectScrollbar, {
  name: 'scroll'
})

app.mount('#app')
