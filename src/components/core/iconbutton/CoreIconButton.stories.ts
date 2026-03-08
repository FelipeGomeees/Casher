import type { Meta, StoryObj } from '@storybook/vue3'
import CoreIconButton from './CoreIconButton.vue'

const meta: Meta<typeof CoreIconButton> = {
  title: 'Core/CoreIconButton',
  component: CoreIconButton,
  tags: ['autodocs'],

  argTypes: {
    label: {
      control: 'text',
    },
    error: {
      control: 'text'
    },
    type: {
      control: 'select',
      options: [,'number','password']
    },
  }
}

export default meta 

type Story = StoryObj<typeof CoreIconButton>

export const Primary: Story = {
  render: (args) => ({
    components: { CoreIconButton },
    setup() {
      return { args }
    },
    template: `
      <CoreIconButton v-bind="args">
        Click me
      </CoreIconButton>
    `
  })
}