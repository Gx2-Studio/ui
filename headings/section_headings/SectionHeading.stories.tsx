import type { Meta, StoryObj } from '@storybook/react'
import { SectionHeading } from './SectionHeading'
import { PlusIcon } from '@heroicons/react/20/solid'

const meta: Meta<typeof SectionHeading> = {
  title: '8. Typography/SectionHeading',
  component: SectionHeading,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SectionHeading>

export const Simple: Story = {
  args: {
    variant: 'simple',
    title: 'Team Members',
  },
}

export const WithDescription: Story = {
  args: {
    variant: 'with-description',
    title: 'Team Members',
    description: 'A list of all the users in your account including their name, title, email and role.',
  },
}

export const WithAction: Story = {
  args: {
    variant: 'with-action',
    title: 'Team Members',
    action: {
      label: 'Add Member',
      type: 'button',
      variant: 'primary',
      onClick: () => console.log('Add clicked'),
    },
  },
}

export const WithActions: Story = {
  args: {
    variant: 'with-actions',
    title: 'Team Members',
    description: 'Manage your team members and their account permissions here.',
    actions: [
      {
        label: 'Export',
        type: 'button',
        variant: 'secondary',
        onClick: () => console.log('Export clicked'),
      },
      {
        label: 'Add Member',
        type: 'button',
        variant: 'primary',
        icon: PlusIcon,
        onClick: () => console.log('Add clicked'),
      },
    ],
  },
}

export const WithTabs: Story = {
  args: {
    variant: 'with-tabs',
    title: 'Team Members',
    description: 'Manage your team members and their roles.',
    tabs: [
      { name: 'All Members', href: '#', current: true },
      { name: 'Active', href: '#', current: false },
      { name: 'Inactive', href: '#', current: false },
      { name: 'Pending', href: '#', current: false },
    ],
  },
}

export const WithActionsAndTabs: Story = {
  args: {
    variant: 'with-actions-and-tabs',
    title: 'Projects',
    description: 'View and manage all your projects.',
    actions: [
      {
        label: 'Export',
        type: 'button',
        variant: 'secondary',
        onClick: () => console.log('Export clicked'),
      },
      {
        label: 'New Project',
        type: 'button',
        variant: 'primary',
        icon: PlusIcon,
        onClick: () => console.log('New Project clicked'),
      },
    ],
    tabs: [
      { name: 'All', href: '#', current: true },
      { name: 'In Progress', href: '#', current: false },
      { name: 'Completed', href: '#', current: false },
      { name: 'Archived', href: '#', current: false },
    ],
  },
}

export const WithInlineTabs: Story = {
  args: {
    variant: 'with-inline-tabs',
    title: 'Analytics',
    tabsVariant: 'inline',
    tabs: [
      { name: 'Overview', href: '#', current: true },
      { name: 'Traffic', href: '#', current: false },
      { name: 'Conversions', href: '#', current: false },
      { name: 'Revenue', href: '#', current: false },
    ],
  },
}

export const WithLabel: Story = {
  args: {
    variant: 'with-label',
    label: 'TEAM',
    title: 'Current Members',
    description: 'View all members of your team.',
  },
}

export const WithBadgeAndDropdown: Story = {
  args: {
    variant: 'with-badge-and-dropdown',
    title: 'Active Campaign',
    description: 'Marketing campaign running until end of quarter.',
    badge: {
      text: 'Live',
      variant: 'success',
    },
    action: {
      label: 'Manage',
      type: 'button',
      variant: 'primary',
      onClick: () => console.log('Manage clicked'),
    },
  },
}

export const WithBadgeVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <SectionHeading
        variant="with-badge-and-dropdown"
        title="Default Badge"
        badge={{ text: 'Draft', variant: 'default' }}
      />
      <SectionHeading
        variant="with-badge-and-dropdown"
        title="Success Badge"
        badge={{ text: 'Published', variant: 'success' }}
      />
      <SectionHeading
        variant="with-badge-and-dropdown"
        title="Warning Badge"
        badge={{ text: 'Pending', variant: 'warning' }}
      />
      <SectionHeading
        variant="with-badge-and-dropdown"
        title="Error Badge"
        badge={{ text: 'Failed', variant: 'error' }}
      />
    </div>
  ),
}

export const WithSecondaryAction: Story = {
  args: {
    variant: 'with-action',
    title: 'Projects',
    action: {
      label: 'View All',
      type: 'button',
      variant: 'secondary',
      onClick: () => console.log('View All clicked'),
    },
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">Simple</h3>
        <SectionHeading variant="simple" title="Team Members" />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">With Description</h3>
        <SectionHeading
          variant="with-description"
          title="Team Members"
          description="A list of all the users in your account including their name, title, email and role."
        />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">With Action</h3>
        <SectionHeading
          variant="with-action"
          title="Team Members"
          action={{
            label: 'Add Member',
            type: 'button',
            variant: 'primary',
            onClick: () => console.log('Add clicked'),
          }}
        />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">With Actions</h3>
        <SectionHeading
          variant="with-actions"
          title="Team Members"
          description="Manage your team members and their account permissions here."
          actions={[
            {
              label: 'Export',
              type: 'button',
              variant: 'secondary',
              onClick: () => console.log('Export clicked'),
            },
            {
              label: 'Add Member',
              type: 'button',
              variant: 'primary',
              icon: PlusIcon,
              onClick: () => console.log('Add clicked'),
            },
          ]}
        />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">With Tabs</h3>
        <SectionHeading
          variant="with-tabs"
          title="Team Members"
          description="Manage your team members and their roles."
          tabs={[
            { name: 'All Members', href: '#', current: true },
            { name: 'Active', href: '#', current: false },
            { name: 'Inactive', href: '#', current: false },
          ]}
        />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">With Actions and Tabs</h3>
        <SectionHeading
          variant="with-actions-and-tabs"
          title="Projects"
          description="View and manage all your projects."
          actions={[
            {
              label: 'New Project',
              type: 'button',
              variant: 'primary',
              icon: PlusIcon,
              onClick: () => console.log('New Project clicked'),
            },
          ]}
          tabs={[
            { name: 'All', href: '#', current: true },
            { name: 'In Progress', href: '#', current: false },
            { name: 'Completed', href: '#', current: false },
          ]}
        />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">With Inline Tabs</h3>
        <SectionHeading
          variant="with-inline-tabs"
          title="Analytics"
          tabsVariant="inline"
          tabs={[
            { name: 'Overview', href: '#', current: true },
            { name: 'Traffic', href: '#', current: false },
            { name: 'Conversions', href: '#', current: false },
          ]}
        />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">With Label</h3>
        <SectionHeading
          variant="with-label"
          label="TEAM"
          title="Current Members"
          description="View all members of your team."
        />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">With Badge</h3>
        <SectionHeading
          variant="with-badge-and-dropdown"
          title="Active Campaign"
          description="Marketing campaign running until end of quarter."
          badge={{
            text: 'Live',
            variant: 'success',
          }}
          action={{
            label: 'Manage',
            type: 'button',
            variant: 'primary',
            onClick: () => console.log('Manage clicked'),
          }}
        />
      </div>
    </div>
  ),
}

export const RealWorldExample: Story = {
  render: () => (
    <div className="mx-auto max-w-6xl space-y-8">
      <SectionHeading
        variant="with-actions-and-tabs"
        title="Customer Projects"
        description="Track all customer projects and their current status."
        actions={[
          {
            label: 'Export List',
            type: 'button',
            variant: 'secondary',
            onClick: () => console.log('Export clicked'),
          },
          {
            label: 'New Project',
            type: 'button',
            variant: 'primary',
            icon: PlusIcon,
            onClick: () => console.log('New Project clicked'),
          },
        ]}
        tabs={[
          { name: 'All Projects', href: '#', current: true },
          { name: 'In Progress', href: '#', current: false },
          { name: 'Completed', href: '#', current: false },
          { name: 'On Hold', href: '#', current: false },
        ]}
      />
      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <p className="text-sm text-gray-500">Project list would appear here...</p>
      </div>
    </div>
  ),
}
