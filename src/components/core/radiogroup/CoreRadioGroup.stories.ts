import type { Meta, StoryObj } from '@storybook/vue3'
import CoreRadioGroup from './CoreRadioGroup.vue'
import { CoreRadioButton } from '..'
import { ref, watch } from 'vue'

const meta: Meta<typeof CoreRadioGroup> = {
  title: 'Core/CoreRadioGroup',
  component: CoreRadioGroup,
  tags: ['autodocs'],

  argTypes: {
    name: {
      control: 'text',
    },
    modelValue: {
      control: 'radio',
      options: ['option1', 'option2', 'option3']
    }
  }
}

export default meta

type Story = StoryObj<typeof CoreRadioGroup>

export const Primary: Story = {
  args: {
    name: 'example',
    modelValue: 'option1'
  },

  render: (args) => ({
    components: { CoreRadioGroup, CoreRadioButton },

    setup() {
      const value = ref(args.modelValue)

      watch(value, (v) => {
        args.modelValue = v
      })

      return { args, value }
    },

    template: `
      <CoreRadioGroup v-model="value" v-bind="args">
        <CoreRadioButton value="option1">
          Option 1
        </CoreRadioButton>

        <CoreRadioButton value="option2">
          Option 2
        </CoreRadioButton>

        <CoreRadioButton value="option3">
          Option 3
        </CoreRadioButton>
      </CoreRadioGroup>
    `
  })
}