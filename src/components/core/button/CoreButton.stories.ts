import type { Meta, StoryObj } from '@storybook/vue3'
import CoreButton from './CoreButton.vue'

const meta: Meta<typeof CoreButton> = {
  title: 'Core/CoreButton',
  component: CoreButton,
  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost']
    },
    active: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    icon: {
      control: false
    }
  }
}

export default meta

type Story = StoryObj<typeof CoreButton>

export const Primary: Story = {
  render: (args) => ({
    components: { CoreButton },
    setup() {
      return { args }
    },
    template: `
      <CoreButton v-bind="args">
        Click me
      </CoreButton>
    `
  })
}

export const Secondary: Story = {
  render: (args) => ({
    components: { CoreButton },
    setup() {
      return { args }
    },
    template: `
      <CoreButton v-bind="args" variant="secondary">
        Cancel
      </CoreButton>
    `
  })
}