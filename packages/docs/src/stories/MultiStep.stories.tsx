import { Box, MultiStep, MultiStepProps, Text } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/MultiStep', // Nome do Component (da historia)
  component: MultiStep, // Component
  args: {
    currentStep: 1,
    size: 4,
  }, // args: Quando passado dentro do elemento Meta, ele fica de forma default para todas as variações do component
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}
export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
