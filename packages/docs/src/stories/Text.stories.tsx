import { Text, TextProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Text', // Nome do Component (da historia)
  component: Text, // Component
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci atque, maxime consequuntur laudantium quia. Reiciendis totam expedita doloribus ullam, porro nobis eligendi maxime! Molestiae modi ex perspiciatis unde repellendus.',
  }, // args: Quando passado dentro do elemento Meta, ele fica de forma default para todas as variações do component
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
