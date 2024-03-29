import type { App } from 'vue'
import { default as PerfectScrollbarComponent } from './PerfectScrollbar.vue'
import type PerfectScrollbar from 'perfect-scrollbar'

declare module 'vue' {
  export interface GlobalComponents {
    PerfectScrollbar: typeof PerfectScrollbarComponent
  }
}

export interface PerfectScrollbarExpose {
  ps: PerfectScrollbar | null
}

interface PerfectScrollbarPluginType {
  install(app: App, options?: PerfectScrollbarPluginOptions): void
}

export interface PerfectScrollbarPluginOptions {
  componentName: string
}

export type PerfectScrollbarEmitsKeys =
  | 'scroll'
  | 'ps-scroll-y'
  | 'ps-scroll-x'
  | 'ps-scroll-up'
  | 'ps-scroll-down'
  | 'ps-scroll-left'
  | 'ps-scroll-right'
  | 'ps-y-reach-start'
  | 'ps-y-reach-end'
  | 'ps-x-reach-start'
  | 'ps-x-reach-end'

export type PerfectScrollbarEmits = {
  [EventName in PerfectScrollbarEmitsKeys]: [value: Event]
}
