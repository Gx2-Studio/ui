import type { Meta, StoryObj } from '@storybook/react'
import { EmptyState } from './EmptyState'
import { FolderIcon, PlusIcon, DocumentIcon } from '@heroicons/react/24/outline'

const meta: Meta<typeof EmptyState> = {
  title: 'Feedback/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof EmptyState>

export const Default: Story = {
  args: {
    icon: <FolderIcon />,
    title: 'No projects',
    description: 'Get started by creating a new project.',
  },
}

export const WithSingleAction: Story = {
  args: {
    icon: <DocumentIcon />,
    title: 'No documents',
    description: 'Get started by uploading a document.',
    actions: [
      { label: 'Upload document', onClick: () => alert('Upload clicked'), icon: <PlusIcon className="h-5 w-5" /> },
    ],
  },
}

export const WithMultipleActions: Story = {
  args: {
    icon: <FolderIcon />,
    title: 'No files',
    description: 'Get started by creating a new file or uploading an existing one.',
    actions: [
      { label: 'New file', onClick: () => alert('New file'), variant: 'primary' as const, icon: <PlusIcon className="h-5 w-5" /> },
      { label: 'Upload file', onClick: () => alert('Upload'), variant: 'secondary' as const },
    ],
  },
}

export const SmallSize: Story = {
  args: {
    icon: <FolderIcon />,
    title: 'No items',
    description: 'Start by adding your first item.',
    size: 'sm',
  },
}

export const MediumSize: Story = {
  args: {
    icon: <FolderIcon />,
    title: 'No items',
    description: 'Start by adding your first item.',
    size: 'md',
  },
}

export const LargeSize: Story = {
  args: {
    icon: <FolderIcon />,
    title: 'No items',
    description: 'Start by adding your first item.',
    size: 'lg',
  },
}

export const CardVariant: Story = {
  args: {
    variant: 'card',
    icon: <FolderIcon />,
    title: 'No projects',
    description: 'Get started by creating a new project.',
    actions: [
      { label: 'Create project', onClick: () => alert('Create'), icon: <PlusIcon className="h-5 w-5" /> },
    ],
  },
}

export const DashedVariant: Story = {
  args: {
    variant: 'dashed',
    icon: <PlusIcon />,
    title: 'Add a new item',
    description: 'Click to get started',
    actions: [
      { onClick: () => alert('Clicked') },
    ],
  },
}

export const WithoutIcon: Story = {
  args: {
    title: 'No results',
    description: 'Try adjusting your search or filter to find what you are looking for.',
  },
}

export const WithoutDescription: Story = {
  args: {
    icon: <FolderIcon />,
    title: 'No projects',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <EmptyState size="sm" icon={<FolderIcon />} title="Small" description="This is a small empty state." />
      <EmptyState size="md" icon={<FolderIcon />} title="Medium" description="This is a medium empty state." />
      <EmptyState size="lg" icon={<FolderIcon />} title="Large" description="This is a large empty state." />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <EmptyState
        variant="default"
        icon={<FolderIcon />}
        title="Default variant"
        description="This is the default empty state variant."
        actions={[{ label: 'Action', onClick: () => {} }]}
      />
      <EmptyState
        variant="card"
        icon={<FolderIcon />}
        title="Card variant"
        description="This is the card empty state variant."
        actions={[{ label: 'Action', onClick: () => {} }]}
      />
      <EmptyState
        variant="dashed"
        icon={<PlusIcon />}
        title="Dashed variant"
        description="Click to interact"
        actions={[{ onClick: () => {} }]}
      />
    </div>
  ),
}
