import type { Meta, StoryObj } from '@storybook/react'
import { BadgeOnDark } from './BadgeOnDark'

const meta: Meta<typeof BadgeOnDark> = {
  title: 'Elements/BadgeOnDark',
  component: BadgeOnDark,
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
type Story = StoryObj<typeof BadgeOnDark>

export const FlatGray: Story = {
  args: {
    variant: 'flat',
    color: 'gray',
    children: 'Badge',
  },
}

export const FlatRed: Story = {
  args: {
    variant: 'flat',
    color: 'red',
    children: 'Badge',
  },
}

export const FlatYellow: Story = {
  args: {
    variant: 'flat',
    color: 'yellow',
    children: 'Badge',
  },
}

export const FlatGreen: Story = {
  args: {
    variant: 'flat',
    color: 'green',
    children: 'Badge',
  },
}

export const FlatBlue: Story = {
  args: {
    variant: 'flat',
    color: 'blue',
    children: 'Badge',
  },
}

export const FlatIndigo: Story = {
  args: {
    variant: 'flat',
    color: 'indigo',
    children: 'Badge',
  },
}

export const FlatPurple: Story = {
  args: {
    variant: 'flat',
    color: 'purple',
    children: 'Badge',
  },
}

export const FlatPink: Story = {
  args: {
    variant: 'flat',
    color: 'pink',
    children: 'Badge',
  },
}

export const PillGray: Story = {
  args: {
    variant: 'pill',
    color: 'gray',
    children: 'Badge',
  },
}

export const PillRed: Story = {
  args: {
    variant: 'pill',
    color: 'red',
    children: 'Badge',
  },
}

export const PillGreen: Story = {
  args: {
    variant: 'pill',
    color: 'green',
    children: 'Badge',
  },
}

export const OutlineGray: Story = {
  args: {
    variant: 'outline',
    color: 'gray',
    children: 'Badge',
  },
}

export const OutlineRed: Story = {
  args: {
    variant: 'outline',
    color: 'red',
    children: 'Badge',
  },
}

export const OutlineGreen: Story = {
  args: {
    variant: 'outline',
    color: 'green',
    children: 'Badge',
  },
}

export const WithDot: Story = {
  args: {
    dot: true,
    children: 'Badge',
  },
}

export const Removable: Story = {
  args: {
    removable: true,
    onRemove: () => alert('Badge removed'),
    children: 'Badge',
  },
}

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <BadgeOnDark color="gray">Gray</BadgeOnDark>
      <BadgeOnDark color="red">Red</BadgeOnDark>
      <BadgeOnDark color="yellow">Yellow</BadgeOnDark>
      <BadgeOnDark color="green">Green</BadgeOnDark>
      <BadgeOnDark color="blue">Blue</BadgeOnDark>
      <BadgeOnDark color="indigo">Indigo</BadgeOnDark>
      <BadgeOnDark color="purple">Purple</BadgeOnDark>
      <BadgeOnDark color="pink">Pink</BadgeOnDark>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <BadgeOnDark variant="flat" color="indigo">Flat</BadgeOnDark>
        <BadgeOnDark variant="pill" color="indigo">Pill</BadgeOnDark>
        <BadgeOnDark variant="outline" color="indigo">Outline</BadgeOnDark>
      </div>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <BadgeOnDark size="xs">XS</BadgeOnDark>
      <BadgeOnDark size="sm">Small</BadgeOnDark>
      <BadgeOnDark size="md">Medium</BadgeOnDark>
    </div>
  ),
}
