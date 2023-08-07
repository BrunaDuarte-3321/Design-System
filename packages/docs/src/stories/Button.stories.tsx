import { Button, ButtonProps } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Button', // Nome do Component (da historia)
  component: Button, // Component
  args: {
    children: 'Send',
  }, // args: Quando passado dentro do elemento Meta, ele fica de forma default para todas as variações do component
  argTypes: {
    variant: {
      description: 'tetanddsdsdsdsdsd',
    },

    onClick: {
      action: 'cliquei!!!',
    },
  },
  tags: ['autodocs'],
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  parameters: {
    docs: {
      story: { autoplay: true },
    },
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}
export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
    children: 'Cancel',
  },
}
export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Proximo Passo <ArrowRight weight="bold" />
      </>
    ),
  },
}
export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
    children: 'Cancel',
  },
}
