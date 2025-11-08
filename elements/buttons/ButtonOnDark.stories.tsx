import type { Meta, StoryObj } from '@storybook/react'
import { ButtonOnDark } from './ButtonOnDark'
import { EnvelopeIcon, PlusIcon } from '@heroicons/react/20/solid'

const meta: Meta<typeof ButtonOnDark> = {
  title: 'Elements/ButtonOnDark',
  component: ButtonOnDark,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-gray-900 p-8">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ButtonOnDark>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
}

export const Soft: Story = {
  args: {
    variant: 'soft',
    children: 'Button',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button',
  },
}

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    children: 'Button',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Button',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Button',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Button',
  },
}

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: 'Button',
  },
}

export const RoundedSmall: Story = {
  args: {
    rounded: 'sm',
    children: 'Button',
  },
}

export const RoundedMedium: Story = {
  args: {
    rounded: 'md',
    children: 'Button',
  },
}

export const RoundedLarge: Story = {
  args: {
    rounded: 'lg',
    children: 'Button',
  },
}

export const RoundedFull: Story = {
  args: {
    rounded: 'full',
    children: 'Button',
  },
}

export const WithLeadingIcon: Story = {
  args: {
    leadingIcon: <EnvelopeIcon />,
    children: 'Button',
  },
}

export const WithTrailingIcon: Story = {
  args: {
    trailingIcon: <PlusIcon />,
    children: 'Button',
  },
}

export const WithBothIcons: Story = {
  args: {
    leadingIcon: <EnvelopeIcon />,
    trailingIcon: <PlusIcon />,
    children: 'Button',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <ButtonOnDark variant="primary">Primary</ButtonOnDark>
        <ButtonOnDark variant="secondary">Secondary</ButtonOnDark>
        <ButtonOnDark variant="soft">Soft</ButtonOnDark>
        <ButtonOnDark variant="ghost">Ghost</ButtonOnDark>
      </div>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-2">
      <ButtonOnDark size="xs">XS</ButtonOnDark>
      <ButtonOnDark size="sm">Small</ButtonOnDark>
      <ButtonOnDark size="md">Medium</ButtonOnDark>
      <ButtonOnDark size="lg">Large</ButtonOnDark>
      <ButtonOnDark size="xl">XL</ButtonOnDark>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Button',
  },
}
