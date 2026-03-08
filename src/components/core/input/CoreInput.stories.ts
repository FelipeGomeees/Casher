import type { Meta, StoryObj } from '@storybook/vue3'
import CoreInput from './CoreInput.vue'

const meta: Meta<typeof CoreInput> = {
  title: 'Core/CoreInput',
  component: CoreInput,
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

type Story = StoryObj<typeof CoreInput>

export const Primary: Story = {
  args: {
    label: 'This is a label',
  },
  render: (args) => ({
    components: { CoreInput },
    setup() {
      return { args }
    },
    template: `
      <CoreInput v-bind="args">
        Click me
      </CoreInput>
    `
  })
}