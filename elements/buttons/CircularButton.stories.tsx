import type { Meta, StoryObj } from '@storybook/react'
import { CircularButton } from './CircularButton'
import { PlusIcon, PencilIcon, TrashIcon, ArrowDownIcon } from '@heroicons/react/20/solid'

const meta: Meta<typeof CircularButton> = {
  title: '1. Core/CircularButton',
  component: CircularButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CircularButton>

export const Primary: Story = {
  args: {
    variant: 'primary',
    icon: <PlusIcon />,
    'aria-label': 'Add item',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    icon: <PlusIcon />,
    'aria-label': 'Add item',
  },
}

export const Soft: Story = {
  args: {
    variant: 'soft',
    icon: <PlusIcon />,
    'aria-label': 'Add item',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    icon: <PlusIcon />,
    'aria-label': 'Add item',
  },
}

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    icon: <PlusIcon />,
    'aria-label': 'Add item',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    icon: <PlusIcon />,
    'aria-label': 'Add item',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
    icon: <PlusIcon />,
    'aria-label': 'Add item',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    icon: <PlusIcon />,
    'aria-label': 'Add item',
  },
}

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    icon: <PlusIcon />,
    'aria-label': 'Add item',
  },
}

export const WithDifferentIcons: Story = {
  render: () => (
    <div className="flex gap-4">
      <CircularButton icon={<PlusIcon />} aria-label="Add" />
      <CircularButton icon={<PencilIcon />} aria-label="Edit" />
      <CircularButton icon={<TrashIcon />} aria-label="Delete" variant="secondary" />
      <CircularButton icon={<ArrowDownIcon />} aria-label="Download" variant="soft" />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <CircularButton variant="primary" icon={<PlusIcon />} aria-label="Primary" />
      <CircularButton variant="secondary" icon={<PlusIcon />} aria-label="Secondary" />
      <CircularButton variant="soft" icon={<PlusIcon />} aria-label="Soft" />
      <CircularButton variant="ghost" icon={<PlusIcon />} aria-label="Ghost" />
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <CircularButton size="xs" icon={<PlusIcon />} aria-label="XS" />
      <CircularButton size="sm" icon={<PlusIcon />} aria-label="Small" />
      <CircularButton size="md" icon={<PlusIcon />} aria-label="Medium" />
      <CircularButton size="lg" icon={<PlusIcon />} aria-label="Large" />
      <CircularButton size="xl" icon={<PlusIcon />} aria-label="XL" />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    icon: <PlusIcon />,
    'aria-label': 'Add item',
  },
}
