import type { Meta, StoryObj } from '@storybook/react'
import { CardHeading } from './CardHeading'
import { PlusIcon, PencilIcon, TrashIcon, ShareIcon } from '@heroicons/react/20/solid'

const meta: Meta<typeof CardHeading> = {
  title: 'Headings/CardHeading',
  component: CardHeading,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CardHeading>

export const Simple: Story = {
  args: {
    variant: 'simple',
    title: 'Projects',
  },
}

export const WithDescription: Story = {
  args: {
    variant: 'with-description',
    title: 'Projects',
    description: 'A list of all the projects in your account including their name, status, and progress.',
  },
}

export const WithAction: Story = {
  args: {
    variant: 'with-action',
    title: 'Projects',
    action: {
      label: 'Create',
      type: 'button',
      variant: 'primary',
      icon: PlusIcon,
      onClick: () => console.log('Create clicked'),
    },
  },
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

export const WithDescriptionAndAction: Story = {
  args: {
    variant: 'with-description-and-action',
    title: 'Projects',
    description: 'A list of all the projects in your account including their name, status, and progress.',
    action: {
      label: 'Create Project',
      type: 'button',
      variant: 'primary',
      icon: PlusIcon,
      onClick: () => console.log('Create clicked'),
    },
  },
}

export const WithMultipleActions: Story = {
  args: {
    variant: 'with-description-and-action',
    title: 'Projects',
    description: 'Manage your projects and track their progress.',
    actions: [
      {
        label: 'Export',
        type: 'button',
        variant: 'secondary',
        onClick: () => console.log('Export clicked'),
      },
      {
        label: 'Create',
        type: 'button',
        variant: 'primary',
        icon: PlusIcon,
        onClick: () => console.log('Create clicked'),
      },
    ],
  },
}

export const WithAvatarAndActions: Story = {
  args: {
    variant: 'with-avatar-and-actions',
    title: 'Ricardo Cooper',
    description: 'Product Designer',
    avatar: {
      src: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      alt: 'Ricardo Cooper',
      name: '@ricardo.cooper',
    },
    actions: [
      {
        label: 'Message',
        type: 'button',
        variant: 'secondary',
        onClick: () => console.log('Message clicked'),
      },
      {
        label: 'Follow',
        type: 'button',
        variant: 'primary',
        onClick: () => console.log('Follow clicked'),
      },
    ],
  },
}

export const WithAvatarMetaAndDropdown: Story = {
  args: {
    variant: 'with-avatar-meta-and-dropdown',
    title: 'Ricardo Cooper',
    avatar: {
      src: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      alt: 'Ricardo Cooper',
      name: '@ricardo.cooper',
    },
    meta: [
      { label: 'Role', value: 'Product Designer' },
      { label: 'Team', value: 'Engineering' },
      { label: 'Location', value: 'San Francisco, CA' },
    ],
    dropdownItems: [
      {
        label: 'Edit',
        icon: PencilIcon,
        href: '#',
        onClick: () => console.log('Edit clicked'),
      },
      {
        label: 'Share',
        icon: ShareIcon,
        href: '#',
        onClick: () => console.log('Share clicked'),
      },
      {
        label: 'Delete',
        icon: TrashIcon,
        href: '#',
        onClick: () => console.log('Delete clicked'),
      },
    ],
  },
}

export const WithActionAsLink: Story = {
  args: {
    variant: 'with-action',
    title: 'Projects',
    action: {
      label: 'View All',
      type: 'link',
      variant: 'secondary',
      href: '/projects',
    },
  },
}

export const WithDropdownOnly: Story = {
  args: {
    variant: 'with-avatar-meta-and-dropdown',
    title: 'Settings',
    dropdownItems: [
      {
        label: 'Edit Settings',
        icon: PencilIcon,
        href: '#',
      },
      {
        label: 'Share Link',
        icon: ShareIcon,
        href: '#',
      },
      {
        label: 'Delete',
        icon: TrashIcon,
        href: '#',
      },
    ],
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <CardHeading variant="simple" title="Simple Variant" />
      </div>

      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <CardHeading
          variant="with-description"
          title="With Description"
          description="This variant includes a description below the title."
        />
      </div>

      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <CardHeading
          variant="with-action"
          title="With Action"
          action={{
            label: 'Create',
            type: 'button',
            variant: 'primary',
            icon: PlusIcon,
            onClick: () => console.log('Create clicked'),
          }}
        />
      </div>

      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <CardHeading
          variant="with-description-and-action"
          title="With Description and Action"
          description="This variant combines both description and action button."
          action={{
            label: 'Create',
            type: 'button',
            variant: 'primary',
            icon: PlusIcon,
            onClick: () => console.log('Create clicked'),
          }}
        />
      </div>

      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <CardHeading
          variant="with-avatar-and-actions"
          title="Ricardo Cooper"
          description="Product Designer"
          avatar={{
            src: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
            alt: 'Ricardo Cooper',
            name: '@ricardo.cooper',
          }}
          actions={[
            {
              label: 'Message',
              type: 'button',
              variant: 'secondary',
              onClick: () => console.log('Message clicked'),
            },
            {
              label: 'Follow',
              type: 'button',
              variant: 'primary',
              onClick: () => console.log('Follow clicked'),
            },
          ]}
        />
      </div>

      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <CardHeading
          variant="with-avatar-meta-and-dropdown"
          title="Ricardo Cooper"
          avatar={{
            src: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
            alt: 'Ricardo Cooper',
            name: '@ricardo.cooper',
          }}
          meta={[
            { label: 'Role', value: 'Product Designer' },
            { label: 'Team', value: 'Engineering' },
          ]}
          dropdownItems={[
            { label: 'Edit', icon: PencilIcon, href: '#' },
            { label: 'Share', icon: ShareIcon, href: '#' },
            { label: 'Delete', icon: TrashIcon, href: '#' },
          ]}
        />
      </div>
    </div>
  ),
}

export const RealWorldExample: Story = {
  render: () => (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <CardHeading
          variant="with-description-and-action"
          title="Team Members"
          description="Invite and manage your team members and their roles."
          action={{
            label: 'Invite Member',
            type: 'button',
            variant: 'primary',
            icon: PlusIcon,
            onClick: () => console.log('Invite clicked'),
          }}
        />
        <div className="px-6 py-4">
          <p className="text-sm text-gray-500">Team member list would go here...</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <CardHeading
          variant="with-avatar-and-actions"
          title="John Doe"
          description="Software Engineer"
          avatar={{
            src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            alt: 'John Doe',
            name: '@johndoe',
          }}
          actions={[
            {
              label: 'View Profile',
              type: 'button',
              variant: 'secondary',
              onClick: () => console.log('View Profile clicked'),
            },
            {
              label: 'Send Message',
              type: 'button',
              variant: 'primary',
              onClick: () => console.log('Send Message clicked'),
            },
          ]}
        />
        <div className="px-6 py-4">
          <p className="text-sm text-gray-500">Profile details would go here...</p>
        </div>
      </div>
    </div>
  ),
}
