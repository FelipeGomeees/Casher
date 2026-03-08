import type { Meta, StoryObj } from '@storybook/vue3'
import CoreToggle from './CoreToggle.vue'

const meta: Meta<typeof CoreToggle> = {
  title: 'Core/CoreToggle',
  component: CoreToggle,
  tags: ['autodocs'],

  argTypes: {
    label: {
      control: 'text',
    },
    error: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    }
  }
}

export default meta 

type Story = StoryObj<typeof CoreToggle>

export const Primary: Story = {
  args: {
    label: 'Click me',
    disabled: false,
  },

  render: (args) => ({
    components: { CoreToggle },
    setup() {
      return { args }
    },
    template: `
      <CoreToggle v-bind="args" />
    `
  })
}