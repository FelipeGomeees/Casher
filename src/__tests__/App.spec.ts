import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App', () => {
  it('renders router view', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          RouterView: {
            template: '<div data-test="router-view">Mocked View</div>'
          }
        }
      }
    })

    expect(wrapper.find('[data-test="router-view"]').exists()).toBe(true)
  })
})