import { defineNuxtPlugin } from '#app'
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PerfectScrollbarPlugin)
})
