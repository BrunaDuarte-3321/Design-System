import { Heading, HeadingProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Heading', // Nome do Component (da historia)
  component: Heading, // Component
  args: {
    children: 'Custom Title',
  }, // args: Quando passado dentro do elemento Meta, ele fica de forma default para todas as variações do component
  tags: ['autodocs'],
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    document: {
      description: {
        story:
          'por Padrão Heading smepre será um `h2`, mas podemos alterar isso com a props vla bla bal',
      },
    },
  },
}
