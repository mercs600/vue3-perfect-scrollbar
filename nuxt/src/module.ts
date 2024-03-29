import { defineNuxtModule, addPlugin, createResolver, addTypeTemplate } from '@nuxt/kit'

export interface ModuleOptions {
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'vue3-perfect-scrollbar',
    configKey: 'perfect-scrollbar'
  },
  defaults: {},
  setup (options, nuxt) {
    addTypeTemplate({
      filename: "types/vue3-perfect-scrollbar.d.ts",
      getContents: () => /* ts */`
      import type { PerfectScrollbar } from 'vue3-perfect-scrollbar'
      declare module 'vue' {
        export interface GlobalComponents {
          PerfectScrollbar: typeof PerfectScrollbar
        }
      }`
    })

    nuxt.options.css.push('vue3-perfect-scrollbar/style.css')
    const resolver = createResolver(import.meta.url)
    addPlugin(resolver.resolve('./runtime/plugin'))
  }
})
