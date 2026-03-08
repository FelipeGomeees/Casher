import type { Meta, StoryObj } from '@storybook/vue3'
import CoreTextArea from './CoreTextArea.vue'

const meta: Meta<typeof CoreTextArea> = {
  title: 'Core/CoreTextArea',
  component: CoreTextArea,
  tags: ['autodocs'],

  argTypes: {
    label: {
      control: 'text',
    },
    error: {
      control: 'text',
    },
    rows: {
      control: 'number',
    }
  }
}

export default meta 

type Story = StoryObj<typeof CoreTextArea>

export const Primary: Story = {
  args: {
    label: 'This is a label',
    rows: 5,
  },

  render: (args) => ({
    components: { CoreTextArea },
    setup() {
      return { args }
    },
    template: `
      <CoreTextArea v-bind="args" />
    `
  })
}