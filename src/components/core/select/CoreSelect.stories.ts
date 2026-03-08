import type { Meta, StoryObj } from '@storybook/vue3'
import CoreSelect from './CoreSelect.vue'

const meta: Meta<typeof CoreSelect> = {
  title: 'Core/CoreSelect',
  component: CoreSelect,
  tags: ['autodocs'],

  argTypes: {
    label: {
      control: 'text',
    },
    error: {
      control: 'text'
    },
    options: {
      control: 'object'
    }
  }
}

export default meta 

type Story = StoryObj<typeof CoreSelect>

export const Primary: Story = {
  args: {
    label: 'Select option',
    options: ['Option 1', 'Option 2', 'Option 3'],
  },

  render: (args) => ({
    components: { CoreSelect },
    setup() {
      return { args }
    },
    template: `
      <CoreSelect v-bind="args" />
    `
  })
}