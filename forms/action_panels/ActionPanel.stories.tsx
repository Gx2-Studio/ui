import type { Meta, StoryObj } from '@storybook/react'
import { ActionPanel } from './ActionPanel'

const meta: Meta<typeof ActionPanel> = {
  title: 'Forms/ActionPanel',
  component: ActionPanel,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ActionPanel>

export const Card: Story = {
  args: {
    variant: 'card',
    title: 'Manage subscription',
    description: 'You are currently on the Pro plan. Downgrade or upgrade your plan at any time.',
    actions: [
      { label: 'Cancel', variant: 'secondary' },
      { label: 'Upgrade', variant: 'primary' },
    ],
  },
}

export const Well: Story = {
  args: {
    variant: 'well',
    title: 'Delete account',
    description: 'Once you delete your account, you will lose all data associated with it.',
    actions: [
      { label: 'Cancel', variant: 'secondary' },
      { label: 'Delete', variant: 'primary' },
    ],
  },
}

export const Simple: Story = {
  args: {
    variant: 'simple',
    title: 'Email notifications',
    description: 'Manage your email notification preferences.',
    actions: [
      { label: 'Cancel', variant: 'secondary' },
      { label: 'Save', variant: 'primary' },
    ],
  },
}

export const ActionsBottom: Story = {
  args: {
    variant: 'card',
    title: 'Profile settings',
    description: 'Update your personal information and preferences.',
    actionPosition: 'bottom',
    actions: [
      { label: 'Cancel', variant: 'secondary' },
      { label: 'Save', variant: 'primary' },
    ],
  },
}

export const ActionsRight: Story = {
  args: {
    variant: 'card',
    title: 'Two-factor authentication',
    description: 'Keep your account secure by enabling two-factor authentication.',
    actionPosition: 'right',
    actions: [
      { label: 'Enable', variant: 'primary' },
    ],
  },
}

export const ActionsTop: Story = {
  args: {
    variant: 'card',
    title: 'Export data',
    description: 'Download a copy of your data in JSON format.',
    actionPosition: 'top',
    actions: [
      { label: 'Export', variant: 'primary' },
    ],
  },
}

export const SingleAction: Story = {
  args: {
    variant: 'card',
    title: 'Connect to Stripe',
    description: 'Connect your Stripe account to start accepting payments.',
    actions: [
      { label: 'Connect', variant: 'primary' },
    ],
  },
}

export const MultipleActions: Story = {
  args: {
    variant: 'card',
    title: 'Review changes',
    description: 'Please review your changes before submitting.',
    actions: [
      { label: 'Discard', variant: 'secondary' },
      { label: 'Save draft', variant: 'secondary' },
      { label: 'Publish', variant: 'primary' },
    ],
  },
}

export const DisabledAction: Story = {
  args: {
    variant: 'card',
    title: 'Complete profile',
    description: 'Fill out all required fields to continue.',
    actions: [
      { label: 'Cancel', variant: 'secondary' },
      { label: 'Continue', variant: 'primary', disabled: true },
    ],
  },
}

export const WithChildren: Story = {
  args: {
    variant: 'card',
    title: 'Privacy settings',
    actions: [
      { label: 'Cancel', variant: 'secondary' },
      { label: 'Save', variant: 'primary' },
    ],
  },
  render: (args) => (
    <ActionPanel {...args}>
      <div className="space-y-3 mt-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Public profile</span>
          <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Show email address</span>
          <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
        </div>
      </div>
    </ActionPanel>
  ),
}

export const NoActions: Story = {
  args: {
    variant: 'card',
    title: 'Information',
    description: 'This is an informational panel with no actions.',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <ActionPanel
        variant="card"
        title="Card variant"
        description="This is the card variant with shadow and rounded corners."
        actions={[
          { label: 'Cancel', variant: 'secondary' },
          { label: 'Save', variant: 'primary' },
        ]}
      />
      <ActionPanel
        variant="well"
        title="Well variant"
        description="This is the well variant with a gray background."
        actions={[
          { label: 'Cancel', variant: 'secondary' },
          { label: 'Save', variant: 'primary' },
        ]}
      />
      <ActionPanel
        variant="simple"
        title="Simple variant"
        description="This is the simple variant with no background."
        actions={[
          { label: 'Cancel', variant: 'secondary' },
          { label: 'Save', variant: 'primary' },
        ]}
      />
    </div>
  ),
}

export const AllActionPositions: Story = {
  render: () => (
    <div className="space-y-6">
      <ActionPanel
        variant="card"
        title="Actions at bottom"
        description="Actions are positioned at the bottom of the panel."
        actionPosition="bottom"
        actions={[
          { label: 'Cancel', variant: 'secondary' },
          { label: 'Save', variant: 'primary' },
        ]}
      />
      <ActionPanel
        variant="card"
        title="Actions on right"
        description="Actions are positioned on the right side of the panel."
        actionPosition="right"
        actions={[
          { label: 'Save', variant: 'primary' },
        ]}
      />
      <ActionPanel
        variant="card"
        title="Actions at top"
        description="Actions are positioned at the top of the panel."
        actionPosition="top"
        actions={[
          { label: 'Save', variant: 'primary' },
        ]}
      />
    </div>
  ),
}
