import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import PerfectScrollbarComponent from '../src/PerfectScrollbar.vue'

describe('PerfectScrollbarComponent', () => {
  let wrapper: ReturnType<typeof mount<typeof PerfectScrollbarComponent>>

  beforeEach(() => {
    wrapper = mount(PerfectScrollbarComponent, {
      props: {
        tag: 'section',
        options: {
          maxScrollbarLength: 50,
        },
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('mount instance', async () => {
    expect(wrapper.vm.ps).toBeTruthy()
    expect(wrapper.vm.ps?.element).toBeDefined()
  })

  it('render correct element', async () => {
    expect(wrapper.vm.ps?.element.tagName).toBe('SECTION')
  })

  it('has proper options', async () => {
    expect(wrapper.vm.ps?.settings.maxScrollbarLength).toBe(50)
  })

  it('create perfect-scrollbar instance', async () => {
    wrapper.unmount()
    expect(wrapper.vm.ps).toBeNull()
  })

  it('react on options change', async () => {
    await wrapper.setProps({ options: { wheelSpeed: 2 } })
    expect(wrapper.vm.ps?.settings.wheelSpeed).toBe(2)
  })
})
