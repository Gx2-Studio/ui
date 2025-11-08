import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'
import { Button } from '../../elements/buttons/Button'

const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Alert>

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Successfully saved',
    description: 'Your changes have been saved successfully.',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Attention needed',
    description: 'Please review the information before proceeding.',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'There was an error',
    description: 'Your request could not be completed. Please try again.',
  },
}

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    description: 'This is some useful information for you.',
  },
}

export const WithoutTitle: Story = {
  args: {
    variant: 'success',
    description: 'This alert has no title, only a description.',
  },
}

export const WithoutDescription: Story = {
  args: {
    variant: 'info',
    title: 'Simple alert with title only',
  },
}

export const WithoutIcon: Story = {
  args: {
    variant: 'success',
    title: 'No icon alert',
    description: 'This alert does not have an icon.',
    icon: false,
  },
}

export const Dismissible: Story = {
  args: {
    variant: 'info',
    title: 'Dismissible alert',
    description: 'You can dismiss this alert by clicking the X button.',
    dismissible: true,
    onDismiss: () => alert('Alert dismissed'),
  },
}

export const WithActions: Story = {
  args: {
    variant: 'warning',
    title: 'Update required',
    description: 'A new version is available. Please update your application.',
    actions: (
      <div className="flex gap-2">
        <Button size="sm" variant="soft">Update now</Button>
        <Button size="sm" variant="ghost">Remind me later</Button>
      </div>
    ),
  },
}

export const WithActionsAndDismiss: Story = {
  args: {
    variant: 'error',
    title: 'Payment failed',
    description: 'Your payment could not be processed. Please check your payment method and try again.',
    dismissible: true,
    onDismiss: () => alert('Alert dismissed'),
    actions: (
      <div className="flex gap-2">
        <Button size="sm" variant="primary">Retry payment</Button>
        <Button size="sm" variant="secondary">Contact support</Button>
      </div>
    ),
  },
}

export const LongDescription: Story = {
  args: {
    variant: 'info',
    title: 'Important information',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Sed euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert variant="success" title="Success" description="Operation completed successfully." />
      <Alert variant="warning" title="Warning" description="Please review this information." />
      <Alert variant="error" title="Error" description="An error occurred." />
      <Alert variant="info" title="Info" description="Here's some information." />
    </div>
  ),
}
