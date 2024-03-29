import { describe, it, expect } from 'vitest'
import { createApp } from 'vue'
import { PerfectScrollbarPlugin } from '../src/index' // Adjust the import path accordingly

describe('PerfectScrollbarPlugin', () => {
  it('registers PerfectScrollbar component with the default name', async () => {
    const app = createApp({})
    app.use(PerfectScrollbarPlugin)
    expect(app._context.components['PerfectScrollbar']).toBeDefined()
  })

  it('registers PerfectScrollbar component with a custom name', async () => {
    const app = createApp({})
    const customComponentName = 'CustomScrollbar'
    app.use(PerfectScrollbarPlugin, { componentName: customComponentName })
    expect(app._context.components[customComponentName]).toBeDefined()
  })
})
