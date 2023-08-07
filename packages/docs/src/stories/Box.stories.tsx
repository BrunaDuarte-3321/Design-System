import { Box, BoxProps, Text } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Surfaces/Box', // Nome do Component (da historia)
  component: Box, // Component

  args: {
    children: (
      <>
        <Text>Testando elemento Box</Text>
      </>
    ),
  }, // args: Quando passado dentro do elemento Meta, ele fica de forma default para todas as variações do component
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
