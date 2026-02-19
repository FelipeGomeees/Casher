import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CoreList from '@/components/list/CoreList.vue'
import type { ListItem } from '@/components/list/CoreList.vue'

describe('CoreList', () => {
  const baseItems = [
    {
      title: 'Compra 1',
      value: 'R$ 100',
      description: 'Supermercado'
    },
    {
      title: 'Compra 2',
      value: 'R$ 50',
      description: 'Padaria'
    }
  ]

  const factory = (items: ListItem[]) =>
    mount(CoreList, {
      props: { items },
      global: {
        stubs: {
          ShoppingCartIcon: true
        }
      }
    })

  it('renders correct number of items', () => {
    const wrapper = factory(baseItems)

    const renderedItems = wrapper.findAll('.item')
    expect(renderedItems).toHaveLength(2)
  })

  it('renders item content correctly', () => {
    const wrapper = factory(baseItems)

    const firstItem = wrapper.findAll('.item')[0]

    expect(firstItem.text()).toContain('Compra 1')
    expect(firstItem.text()).toContain('R$ 100')
    expect(firstItem.text()).toContain('Supermercado')
  })
})