import type { Meta, StoryObj } from '@storybook/react'
import { AvatarGroup } from './AvatarGroup'
import { Avatar } from './Avatar'

const meta: Meta<typeof AvatarGroup> = {
  title: '1. Core/AvatarGroup',
  component: AvatarGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AvatarGroup>

const sampleImages = [
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
]

export const Default: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar src={sampleImages[0]} />
      <Avatar src={sampleImages[1]} />
      <Avatar src={sampleImages[2]} />
      <Avatar src={sampleImages[3]} />
    </AvatarGroup>
  ),
}

export const WithOverflow: Story = {
  render: () => (
    <AvatarGroup max={3}>
      {sampleImages.map((src, i) => (
        <Avatar key={i} src={src} />
      ))}
    </AvatarGroup>
  ),
}

export const ExtraSmall: Story = {
  render: () => (
    <AvatarGroup size="xs">
      <Avatar size="xs" src={sampleImages[0]} />
      <Avatar size="xs" src={sampleImages[1]} />
      <Avatar size="xs" src={sampleImages[2]} />
      <Avatar size="xs" src={sampleImages[3]} />
    </AvatarGroup>
  ),
}

export const Small: Story = {
  render: () => (
    <AvatarGroup size="sm">
      <Avatar size="sm" src={sampleImages[0]} />
      <Avatar size="sm" src={sampleImages[1]} />
      <Avatar size="sm" src={sampleImages[2]} />
      <Avatar size="sm" src={sampleImages[3]} />
    </AvatarGroup>
  ),
}

export const Medium: Story = {
  render: () => (
    <AvatarGroup size="md">
      <Avatar size="md" src={sampleImages[0]} />
      <Avatar size="md" src={sampleImages[1]} />
      <Avatar size="md" src={sampleImages[2]} />
      <Avatar size="md" src={sampleImages[3]} />
    </AvatarGroup>
  ),
}

export const Large: Story = {
  render: () => (
    <AvatarGroup size="lg">
      <Avatar size="lg" src={sampleImages[0]} />
      <Avatar size="lg" src={sampleImages[1]} />
      <Avatar size="lg" src={sampleImages[2]} />
      <Avatar size="lg" src={sampleImages[3]} />
    </AvatarGroup>
  ),
}

export const ExtraLarge: Story = {
  render: () => (
    <AvatarGroup size="xl">
      <Avatar size="xl" src={sampleImages[0]} />
      <Avatar size="xl" src={sampleImages[1]} />
      <Avatar size="xl" src={sampleImages[2]} />
      <Avatar size="xl" src={sampleImages[3]} />
    </AvatarGroup>
  ),
}

export const RightToLeft: Story = {
  render: () => (
    <AvatarGroup direction="rtl">
      <Avatar src={sampleImages[0]} />
      <Avatar src={sampleImages[1]} />
      <Avatar src={sampleImages[2]} />
      <Avatar src={sampleImages[3]} />
    </AvatarGroup>
  ),
}

export const WithInitials: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar initials="JD" />
      <Avatar initials="MF" />
      <Avatar initials="SA" />
      <Avatar initials="TW" />
    </AvatarGroup>
  ),
}

export const MaxTwo: Story = {
  render: () => (
    <AvatarGroup max={2}>
      {sampleImages.map((src, i) => (
        <Avatar key={i} src={src} />
      ))}
    </AvatarGroup>
  ),
}

export const MaxFive: Story = {
  render: () => (
    <AvatarGroup max={5}>
      {sampleImages.map((src, i) => (
        <Avatar key={i} src={src} />
      ))}
    </AvatarGroup>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <AvatarGroup size="xs">
        <Avatar size="xs" src={sampleImages[0]} />
        <Avatar size="xs" src={sampleImages[1]} />
        <Avatar size="xs" src={sampleImages[2]} />
      </AvatarGroup>
      <AvatarGroup size="sm">
        <Avatar size="sm" src={sampleImages[0]} />
        <Avatar size="sm" src={sampleImages[1]} />
        <Avatar size="sm" src={sampleImages[2]} />
      </AvatarGroup>
      <AvatarGroup size="md">
        <Avatar size="md" src={sampleImages[0]} />
        <Avatar size="md" src={sampleImages[1]} />
        <Avatar size="md" src={sampleImages[2]} />
      </AvatarGroup>
      <AvatarGroup size="lg">
        <Avatar size="lg" src={sampleImages[0]} />
        <Avatar size="lg" src={sampleImages[1]} />
        <Avatar size="lg" src={sampleImages[2]} />
      </AvatarGroup>
      <AvatarGroup size="xl">
        <Avatar size="xl" src={sampleImages[0]} />
        <Avatar size="xl" src={sampleImages[1]} />
        <Avatar size="xl" src={sampleImages[2]} />
      </AvatarGroup>
    </div>
  ),
}
