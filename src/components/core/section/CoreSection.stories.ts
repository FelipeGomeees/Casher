import type { Meta, StoryObj } from '@storybook/vue3'
import CoreSection from './CoreSection.vue'

const meta: Meta<typeof CoreSection> = {
  title: 'Core/CoreSection',
  component: CoreSection,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CoreSection>

export const Primary: Story = {
  args: {
    label: 'Extrato',
    linkLabel: 'Ver tudo',
    to: '/extrato',
    linkComponent: 'a'
  },
  render: (args) => ({
    components: { CoreSection },
    setup() {
      return { args }
    },
    template: `
      <CoreSection v-bind="args">
        <p>Conteúdo da seção</p>
      </CoreSection>
    `
  })
}