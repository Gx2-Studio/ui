import type { Meta, StoryObj } from '@storybook/react'
import { PageHeading } from './PageHeading'
import {
  PlusIcon,
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon,
  MapPinIcon,
  BriefcaseIcon,
  CheckIcon
} from '@heroicons/react/20/solid'

const meta: Meta<typeof PageHeading> = {
  title: 'Headings/PageHeading',
  component: PageHeading,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PageHeading>

export const Simple: Story = {
  args: {
    variant: 'simple',
    title: 'Projects',
  },
}

export const WithActions: Story = {
  args: {
    variant: 'with-actions',
    title: 'Projects',
    actions: [
      {
        label: 'Share',
        type: 'button',
        variant: 'secondary',
        onClick: () => console.log('Share clicked'),
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

export const WithMetaAndActions: Story = {
  args: {
    variant: 'with-meta-and-actions',
    title: 'Back End Developer',
    meta: [
      { icon: BriefcaseIcon, value: 'Full-time' },
      { icon: MapPinIcon, value: 'Remote' },
      { icon: CalendarIcon, value: 'Closing on January 9, 2020' },
    ],
    actions: [
      {
        label: 'Edit',
        type: 'button',
        variant: 'secondary',
        onClick: () => console.log('Edit clicked'),
      },
      {
        label: 'Publish',
        type: 'button',
        variant: 'primary',
        icon: CheckIcon,
        onClick: () => console.log('Publish clicked'),
      },
    ],
  },
}

export const WithAvatarAndActions: Story = {
  args: {
    variant: 'with-avatar-and-actions',
    title: 'Ricardo Cooper',
    subtitle: 'Product Designer',
    avatar: {
      src: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      alt: 'Ricardo Cooper',
    },
    actions: [
      {
        label: 'Message',
        type: 'button',
        variant: 'secondary',
        icon: EnvelopeIcon,
        onClick: () => console.log('Message clicked'),
      },
      {
        label: 'Call',
        type: 'button',
        variant: 'secondary',
        icon: PhoneIcon,
        onClick: () => console.log('Call clicked'),
      },
    ],
  },
}

export const WithLogoMetaAndActions: Story = {
  args: {
    variant: 'with-logo-meta-and-actions',
    title: 'Acme Corporation',
    subtitle: 'Technology Company',
    logo: {
      src: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
      alt: 'Acme Corporation',
    },
    meta: [
      { icon: MapPinIcon, value: 'San Francisco, CA' },
      { icon: CalendarIcon, value: 'Founded 2010' },
    ],
    actions: [
      {
        label: 'Visit Website',
        type: 'link',
        variant: 'secondary',
        href: '#',
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

export const WithActionsAndBreadcrumbs: Story = {
  args: {
    variant: 'with-actions-and-breadcrumbs',
    title: 'Project Details',
    breadcrumbs: [
      { label: 'Projects', href: '/projects' },
      { label: 'Engineering', href: '/projects/engineering' },
      { label: 'Project Details', current: true },
    ],
    actions: [
      {
        label: 'Edit',
        type: 'button',
        variant: 'secondary',
        onClick: () => console.log('Edit clicked'),
      },
      {
        label: 'Publish',
        type: 'button',
        variant: 'primary',
        icon: CheckIcon,
        onClick: () => console.log('Publish clicked'),
      },
    ],
  },
}

export const WithMetaActionsAndBreadcrumbs: Story = {
  args: {
    variant: 'with-meta-actions-and-breadcrumbs',
    title: 'Senior Product Designer',
    breadcrumbs: [
      { label: 'Jobs', href: '/jobs' },
      { label: 'Engineering', href: '/jobs/engineering' },
      { label: 'Senior Product Designer', current: true },
    ],
    meta: [
      { icon: BriefcaseIcon, value: 'Full-time' },
      { icon: MapPinIcon, value: 'San Francisco' },
      { icon: CalendarIcon, value: 'Posted 2 days ago' },
    ],
    actions: [
      {
        label: 'Save',
        type: 'button',
        variant: 'secondary',
        onClick: () => console.log('Save clicked'),
      },
      {
        label: 'Apply Now',
        type: 'button',
        variant: 'primary',
        onClick: () => console.log('Apply clicked'),
      },
    ],
  },
}

export const DarkTheme: Story = {
  args: {
    variant: 'with-meta-and-actions',
    title: 'Dashboard Overview',
    theme: 'dark',
    meta: [
      { icon: CalendarIcon, value: 'Last updated 2 hours ago' },
      { icon: MapPinIcon, value: 'Global' },
    ],
    actions: [
      {
        label: 'Export',
        type: 'button',
        variant: 'secondary',
        onClick: () => console.log('Export clicked'),
      },
      {
        label: 'Create Report',
        type: 'button',
        variant: 'primary',
        icon: PlusIcon,
        onClick: () => console.log('Create clicked'),
      },
    ],
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const WithSubtitle: Story = {
  args: {
    variant: 'with-actions',
    title: 'Analytics Dashboard',
    subtitle: 'Track your performance metrics and insights',
    actions: [
      {
        label: 'Download Report',
        type: 'button',
        variant: 'secondary',
        onClick: () => console.log('Download clicked'),
      },
      {
        label: 'Add Widget',
        type: 'button',
        variant: 'primary',
        icon: PlusIcon,
        onClick: () => console.log('Add clicked'),
      },
    ],
  },
}

export const WithHiddenMobileActions: Story = {
  args: {
    variant: 'with-actions',
    title: 'Team Settings',
    actions: [
      {
        label: 'Export',
        type: 'button',
        variant: 'secondary',
        hideOnMobile: true,
        onClick: () => console.log('Export clicked'),
      },
      {
        label: 'Archive',
        type: 'button',
        variant: 'secondary',
        hideOnMobile: true,
        onClick: () => console.log('Archive clicked'),
      },
      {
        label: 'Save',
        type: 'button',
        variant: 'primary',
        onClick: () => console.log('Save clicked'),
      },
    ],
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">Simple</h3>
        <PageHeading variant="simple" title="Projects" />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">With Actions</h3>
        <PageHeading
          variant="with-actions"
          title="Projects"
          actions={[
            {
              label: 'Share',
              type: 'button',
              variant: 'secondary',
              onClick: () => console.log('Share clicked'),
            },
            {
              label: 'Create',
              type: 'button',
              variant: 'primary',
              icon: PlusIcon,
              onClick: () => console.log('Create clicked'),
            },
          ]}
        />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">With Meta and Actions</h3>
        <PageHeading
          variant="with-meta-and-actions"
          title="Back End Developer"
          meta={[
            { icon: BriefcaseIcon, value: 'Full-time' },
            { icon: MapPinIcon, value: 'Remote' },
            { icon: CalendarIcon, value: 'Closing on January 9, 2020' },
          ]}
          actions={[
            {
              label: 'Edit',
              type: 'button',
              variant: 'secondary',
              onClick: () => console.log('Edit clicked'),
            },
            {
              label: 'Publish',
              type: 'button',
              variant: 'primary',
              onClick: () => console.log('Publish clicked'),
            },
          ]}
        />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">With Avatar and Actions</h3>
        <PageHeading
          variant="with-avatar-and-actions"
          title="Ricardo Cooper"
          subtitle="Product Designer"
          avatar={{
            src: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
            alt: 'Ricardo Cooper',
          }}
          actions={[
            {
              label: 'Message',
              type: 'button',
              variant: 'secondary',
              onClick: () => console.log('Message clicked'),
            },
            {
              label: 'Call',
              type: 'button',
              variant: 'secondary',
              onClick: () => console.log('Call clicked'),
            },
          ]}
        />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">With Breadcrumbs</h3>
        <PageHeading
          variant="with-actions-and-breadcrumbs"
          title="Project Details"
          breadcrumbs={[
            { label: 'Projects', href: '/projects' },
            { label: 'Engineering', href: '/projects/engineering' },
            { label: 'Project Details', current: true },
          ]}
          actions={[
            {
              label: 'Edit',
              type: 'button',
              variant: 'secondary',
              onClick: () => console.log('Edit clicked'),
            },
            {
              label: 'Publish',
              type: 'button',
              variant: 'primary',
              onClick: () => console.log('Publish clicked'),
            },
          ]}
        />
      </div>
    </div>
  ),
}

export const RealWorldJobPosting: Story = {
  render: () => (
    <div className="space-y-8">
      <PageHeading
        variant="with-meta-actions-and-breadcrumbs"
        title="Senior Frontend Engineer"
        breadcrumbs={[
          { label: 'Careers', href: '/careers' },
          { label: 'Engineering', href: '/careers/engineering' },
          { label: 'Senior Frontend Engineer', current: true },
        ]}
        meta={[
          { icon: BriefcaseIcon, value: 'Full-time' },
          { icon: MapPinIcon, value: 'San Francisco, CA' },
          { icon: CalendarIcon, value: 'Posted 3 days ago' },
        ]}
        actions={[
          {
            label: 'Save Job',
            type: 'button',
            variant: 'secondary',
            onClick: () => console.log('Save clicked'),
          },
          {
            label: 'Apply Now',
            type: 'button',
            variant: 'primary',
            onClick: () => console.log('Apply clicked'),
          },
        ]}
      />
      <div className="prose max-w-none">
        <p className="text-gray-600">
          Job description content would appear here...
        </p>
      </div>
    </div>
  ),
}
