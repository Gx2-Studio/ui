import type { Meta, StoryObj } from '@storybook/react'
import { StackedList, StackedListItem } from './StackedList'

const meta: Meta<typeof StackedList> = {
  title: '5. Data Display/StackedList',
  component: StackedList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof StackedList>

const sampleItems: StackedListItem[] = [
  {
    id: 1,
    title: 'Leslie Abbott',
    subtitle: 'leslie.abbott@example.com',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    metadata: 'Co-Founder / CEO',
    status: { text: 'Active', online: true },
    href: '#',
  },
  {
    id: 2,
    title: 'Michael Foster',
    subtitle: 'michael.foster@example.com',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    metadata: 'Co-Founder / CTO',
    status: { text: 'Active', online: true },
    href: '#',
  },
  {
    id: 3,
    title: 'Dries Vincent',
    subtitle: 'dries.vincent@example.com',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    metadata: 'Business Relations',
    status: { text: 'Offline', online: false },
    href: '#',
  },
  {
    id: 4,
    title: 'Lindsay Walton',
    subtitle: 'lindsay.walton@example.com',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    metadata: 'Front-end Developer',
    status: { text: 'Active', online: true },
    href: '#',
  },
]

const itemsWithBadges: StackedListItem[] = [
  {
    id: 1,
    title: 'Critical System Error',
    subtitle: 'Production server experiencing issues',
    description: 'The main database server is not responding. Immediate action required.',
    badge: { text: 'Critical', variant: 'error' },
    metadata: '2 mins ago',
    href: '#',
  },
  {
    id: 2,
    title: 'Deployment Successful',
    subtitle: 'Version 2.1.0 deployed to production',
    description: 'All services are running normally. No issues detected.',
    badge: { text: 'Success', variant: 'success' },
    metadata: '15 mins ago',
    href: '#',
  },
  {
    id: 3,
    title: 'Maintenance Scheduled',
    subtitle: 'Database maintenance window',
    description: 'Scheduled downtime for routine maintenance and updates.',
    badge: { text: 'Scheduled', variant: 'warning' },
    metadata: 'Tomorrow at 2am',
    href: '#',
  },
  {
    id: 4,
    title: 'New Feature Request',
    subtitle: 'User authentication enhancement',
    description: 'Request to add two-factor authentication support.',
    badge: { text: 'New', variant: 'info' },
    metadata: '1 hour ago',
    href: '#',
  },
]

const itemsWithActions: StackedListItem[] = [
  {
    id: 1,
    title: 'John Doe',
    subtitle: 'john.doe@example.com',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    metadata: 'Admin',
    actions: (
      <div className="flex gap-2">
        <button className="text-sm text-indigo-600 hover:text-indigo-900">Edit</button>
        <button className="text-sm text-red-600 hover:text-red-900">Delete</button>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Jane Smith',
    subtitle: 'jane.smith@example.com',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    metadata: 'Editor',
    actions: (
      <div className="flex gap-2">
        <button className="text-sm text-indigo-600 hover:text-indigo-900">Edit</button>
        <button className="text-sm text-red-600 hover:text-red-900">Delete</button>
      </div>
    ),
  },
]

export const Simple: Story = {
  args: {
    items: sampleItems,
    variant: 'simple',
    spacing: 'md',
    showDividers: true,
  },
}

export const Card: Story = {
  args: {
    items: sampleItems,
    variant: 'card',
    spacing: 'md',
    showDividers: true,
  },
}

export const Narrow: Story = {
  args: {
    items: sampleItems,
    variant: 'narrow',
    spacing: 'sm',
    showDividers: true,
  },
}

export const FullWidth: Story = {
  args: {
    items: sampleItems,
    variant: 'fullWidth',
    spacing: 'md',
    showDividers: true,
  },
}

export const WithoutDividers: Story = {
  args: {
    items: sampleItems,
    variant: 'simple',
    spacing: 'md',
    showDividers: false,
  },
}

export const SmallAvatar: Story = {
  args: {
    items: sampleItems,
    variant: 'simple',
    avatarSize: 'sm',
    spacing: 'md',
    showDividers: true,
  },
}

export const MediumAvatar: Story = {
  args: {
    items: sampleItems,
    variant: 'simple',
    avatarSize: 'md',
    spacing: 'md',
    showDividers: true,
  },
}

export const LargeAvatar: Story = {
  args: {
    items: sampleItems,
    variant: 'simple',
    avatarSize: 'lg',
    spacing: 'md',
    showDividers: true,
  },
}

export const CompactSpacing: Story = {
  args: {
    items: sampleItems,
    variant: 'simple',
    spacing: 'sm',
    showDividers: true,
  },
}

export const NormalSpacing: Story = {
  args: {
    items: sampleItems,
    variant: 'simple',
    spacing: 'md',
    showDividers: true,
  },
}

export const RelaxedSpacing: Story = {
  args: {
    items: sampleItems,
    variant: 'simple',
    spacing: 'lg',
    showDividers: true,
  },
}

export const WithBadges: Story = {
  args: {
    items: itemsWithBadges,
    variant: 'simple',
    spacing: 'md',
    showDividers: true,
  },
}

export const WithActions: Story = {
  args: {
    items: itemsWithActions,
    variant: 'simple',
    spacing: 'md',
    showDividers: true,
  },
}

export const Clickable: Story = {
  args: {
    items: sampleItems.map(item => ({ ...item, href: '#' })),
    variant: 'simple',
    spacing: 'md',
    showDividers: true,
  },
}

export const WithOnClick: Story = {
  args: {
    items: sampleItems.map(item => ({
      ...item,
      href: undefined,
      onClick: () => alert(`Clicked on ${item.title}`)
    })),
    variant: 'simple',
    spacing: 'md',
    showDividers: true,
  },
}

export const Loading: Story = {
  args: {
    items: [],
    variant: 'simple',
    spacing: 'md',
    showDividers: true,
    loading: true,
  },
}

export const Empty: Story = {
  args: {
    items: [],
    variant: 'simple',
    spacing: 'md',
    showDividers: true,
    loading: false,
    emptyMessage: 'No items found',
  },
}

export const CustomEmptyMessage: Story = {
  args: {
    items: [],
    variant: 'simple',
    spacing: 'md',
    showDividers: true,
    loading: false,
    emptyMessage: 'No team members available. Add your first team member to get started.',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Simple</h3>
        <StackedList items={sampleItems} variant="simple" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Card</h3>
        <StackedList items={sampleItems} variant="card" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Narrow</h3>
        <StackedList items={sampleItems} variant="narrow" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Full Width</h3>
        <StackedList items={sampleItems} variant="fullWidth" />
      </div>
    </div>
  ),
}

export const AllSpacing: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Small Spacing</h3>
        <StackedList items={sampleItems} variant="simple" spacing="sm" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Medium Spacing</h3>
        <StackedList items={sampleItems} variant="simple" spacing="md" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Large Spacing</h3>
        <StackedList items={sampleItems} variant="simple" spacing="lg" />
      </div>
    </div>
  ),
}

export const AllAvatarSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Small Avatar</h3>
        <StackedList items={sampleItems} variant="simple" avatarSize="sm" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Medium Avatar</h3>
        <StackedList items={sampleItems} variant="simple" avatarSize="md" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Large Avatar</h3>
        <StackedList items={sampleItems} variant="simple" avatarSize="lg" />
      </div>
    </div>
  ),
}

export const RealWorldExample: Story = {
  render: () => (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold">Team Members</h2>
          <p className="text-gray-600 mt-1">Manage your team and their account permissions here.</p>
        </div>
        <StackedList items={itemsWithActions} variant="simple" spacing="md" showDividers={true} />
      </div>
    </div>
  ),
}
