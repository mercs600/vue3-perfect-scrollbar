import type { App } from 'vue'
import PerfectScrollbar from './PerfectScrollbar.vue'
import type {
  PerfectScrollbarPluginOptions,
  PerfectScrollbarPluginType,
  PerfectScrollbarExpose,
} from './perfect-scrollbar'

const defaultOptions: PerfectScrollbarPluginOptions = {
  componentName: 'PerfectScrollbar',
}

const PerfectScrollbarPlugin: PerfectScrollbarPluginType = {
  install(app: App, options: PerfectScrollbarPluginOptions) {
    const settings = Object.assign(defaultOptions, options)
    app.component(settings.componentName, PerfectScrollbar)
  },
}

export type { PerfectScrollbarExpose }
export { PerfectScrollbar, PerfectScrollbarPlugin }
