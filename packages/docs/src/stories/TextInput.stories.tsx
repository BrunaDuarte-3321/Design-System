import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Text Input', // Nome do Component (da historia)
  component: TextInput, // Component
  args: {}, // args: Quando passado dentro do elemento Meta, ele fica de forma default para todas as variações do component
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <Text size="sm">Username</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'type your name',
  },
}
export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/text',
  },
}
export const Disabled: StoryObj<TextInputProps> = {
  args: {},
}
