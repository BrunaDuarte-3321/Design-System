import { Avatar, AvatarProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Data display/Avatar', // Nome do Component (da historia)
  component: Avatar, // Component
  args: {
    src: 'https://github.com/BrunaDuarte-3321.png',
    alt: 'Foto perfil GitHub Bruna Duarte',
  }, // args: Quando passado dentro do elemento Meta, ele fica de forma default para todas as variações do component
  tags: ['autodocs'],
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
