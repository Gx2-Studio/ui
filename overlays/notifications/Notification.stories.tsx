import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Notification } from './Notification'
import { Button } from '../../elements/buttons/Button'
import { UserCircleIcon, BellIcon, CogIcon } from '@heroicons/react/24/outline'

const meta: Meta<typeof Notification> = {
  title: '7. Overlays/Notification',
  component: Notification,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Notification>

// Helper component for interactive stories
const NotificationWithTrigger = (args: any) => {
  const [show, setShow] = useState(false)
  return (
    <div className="p-8">
      <Button onClick={() => setShow(true)}>Show Notification</Button>
      <Notification {...args} show={show} onClose={() => setShow(false)} />
    </div>
  )
}

// Type variants
export const Success: Story = {
  render: () => (
    <NotificationWithTrigger
      type="success"
      title="Successfully saved"
      description="Your changes have been saved successfully."
    />
  ),
}

export const Error: Story = {
  render: () => (
    <NotificationWithTrigger
      type="error"
      title="Error occurred"
      description="There was a problem processing your request. Please try again."
    />
  ),
}

export const Warning: Story = {
  render: () => (
    <NotificationWithTrigger
      type="warning"
      title="Warning"
      description="Please review the information before proceeding."
    />
  ),
}

export const Info: Story = {
  render: () => (
    <NotificationWithTrigger
      type="info"
      title="Information"
      description="This is some useful information for you."
    />
  ),
}

// Position variants
export const PositionTopRight: Story = {
  render: () => (
    <NotificationWithTrigger
      position="top-right"
      type="success"
      title="Top Right Position"
      description="This notification appears in the top-right corner."
    />
  ),
}

export const PositionTopLeft: Story = {
  render: () => (
    <NotificationWithTrigger
      position="top-left"
      type="success"
      title="Top Left Position"
      description="This notification appears in the top-left corner."
    />
  ),
}

export const PositionBottomRight: Story = {
  render: () => (
    <NotificationWithTrigger
      position="bottom-right"
      type="success"
      title="Bottom Right Position"
      description="This notification appears in the bottom-right corner."
    />
  ),
}

export const PositionBottomLeft: Story = {
  render: () => (
    <NotificationWithTrigger
      position="bottom-left"
      type="success"
      title="Bottom Left Position"
      description="This notification appears in the bottom-left corner."
    />
  ),
}

export const PositionTopCenter: Story = {
  render: () => (
    <NotificationWithTrigger
      position="top-center"
      type="success"
      title="Top Center Position"
      description="This notification appears in the top-center."
    />
  ),
}

export const PositionBottomCenter: Story = {
  render: () => (
    <NotificationWithTrigger
      position="bottom-center"
      type="success"
      title="Bottom Center Position"
      description="This notification appears in the bottom-center."
    />
  ),
}

// Content variations
export const TitleOnly: Story = {
  render: () => (
    <NotificationWithTrigger
      type="info"
      title="Notification with title only"
    />
  ),
}

export const WithDescription: Story = {
  render: () => (
    <NotificationWithTrigger
      type="success"
      title="Successfully updated"
      description="Your profile has been updated with the new information."
    />
  ),
}

export const LongDescription: Story = {
  render: () => (
    <NotificationWithTrigger
      type="info"
      title="Important Update"
      description="We've made several improvements to enhance your experience. These updates include performance optimizations, bug fixes, and new features that will help you work more efficiently."
    />
  ),
}

// Auto-close
export const AutoClose: Story = {
  render: () => (
    <NotificationWithTrigger
      type="success"
      title="Auto-closing notification"
      description="This notification will automatically close after 5 seconds."
      autoClose
      autoCloseDelay={5000}
    />
  ),
}

export const AutoCloseShort: Story = {
  render: () => (
    <NotificationWithTrigger
      type="info"
      title="Quick notification"
      description="This notification will close after 2 seconds."
      autoClose
      autoCloseDelay={2000}
    />
  ),
}

export const AutoCloseLong: Story = {
  render: () => (
    <NotificationWithTrigger
      type="warning"
      title="Extended notification"
      description="This notification will stay visible for 10 seconds."
      autoClose
      autoCloseDelay={10000}
    />
  ),
}

// Close button
export const WithCloseButton: Story = {
  render: () => (
    <NotificationWithTrigger
      type="info"
      title="Dismissible notification"
      description="Click the X button to close this notification."
      showCloseButton
    />
  ),
}

export const WithoutCloseButton: Story = {
  render: () => (
    <NotificationWithTrigger
      type="info"
      title="Non-dismissible notification"
      description="This notification has no close button."
      showCloseButton={false}
      autoClose
      autoCloseDelay={5000}
    />
  ),
}

// With actions
export const WithSingleAction: Story = {
  render: () => (
    <NotificationWithTrigger
      type="info"
      title="New message"
      description="You have a new message from John."
      actions={[
        { label: 'View', variant: 'primary' as const, onClick: () => alert('Viewing message') },
      ]}
    />
  ),
}

export const WithMultipleActions: Story = {
  render: () => (
    <NotificationWithTrigger
      type="warning"
      title="Update available"
      description="A new version of the application is available."
      actions={[
        { label: 'Dismiss', variant: 'secondary' as const, onClick: () => {} },
        { label: 'Update now', variant: 'primary' as const, onClick: () => alert('Updating...') },
      ]}
    />
  ),
}

export const SuccessWithAction: Story = {
  render: () => (
    <NotificationWithTrigger
      type="success"
      title="File uploaded"
      description="Your file has been uploaded successfully."
      actions={[
        { label: 'View file', variant: 'primary' as const, onClick: () => alert('Viewing file') },
      ]}
    />
  ),
}

export const ErrorWithAction: Story = {
  render: () => (
    <NotificationWithTrigger
      type="error"
      title="Upload failed"
      description="There was a problem uploading your file."
      actions={[
        { label: 'Retry', variant: 'primary' as const, onClick: () => alert('Retrying...') },
      ]}
    />
  ),
}

// Custom icons
export const WithCustomIcon: Story = {
  render: () => (
    <NotificationWithTrigger
      type="info"
      title="Custom icon notification"
      description="This notification uses a custom icon instead of the default."
      customIcon={<BellIcon className="size-6 text-purple-500" />}
    />
  ),
}

export const WithUserIcon: Story = {
  render: () => (
    <NotificationWithTrigger
      type="info"
      title="Profile updated"
      description="Your profile information has been updated."
      customIcon={<UserCircleIcon className="size-6 text-indigo-500" />}
    />
  ),
}

export const WithSettingsIcon: Story = {
  render: () => (
    <NotificationWithTrigger
      type="info"
      title="Settings saved"
      description="Your preferences have been saved."
      customIcon={<CogIcon className="size-6 text-gray-500" />}
    />
  ),
}

// Avatar
export const WithAvatar: Story = {
  render: () => (
    <NotificationWithTrigger
      type="info"
      title="Sarah mentioned you"
      description="Sarah mentioned you in a comment"
      avatar={
        <div className="size-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white font-medium">
          SM
        </div>
      }
    />
  ),
}

export const WithImageAvatar: Story = {
  render: () => (
    <NotificationWithTrigger
      type="info"
      title="New follower"
      description="John started following you"
      avatar={
        <div className="size-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
          JD
        </div>
      }
      actions={[
        { label: 'View profile', variant: 'primary' as const, onClick: () => alert('Viewing profile') },
      ]}
    />
  ),
}

// Real-world examples
export const MessageReceived: Story = {
  render: () => (
    <NotificationWithTrigger
      type="info"
      title="New message from Sarah"
      description="Hey! Are you free for a quick call?"
      avatar={
        <div className="size-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-medium">
          SM
        </div>
      }
      actions={[
        { label: 'Reply', variant: 'primary' as const, onClick: () => alert('Opening chat') },
      ]}
    />
  ),
}

export const PaymentSuccess: Story = {
  render: () => (
    <NotificationWithTrigger
      type="success"
      title="Payment successful"
      description="Your payment of $49.99 has been processed."
      actions={[
        { label: 'View receipt', variant: 'primary' as const, onClick: () => alert('Showing receipt') },
      ]}
      autoClose
      autoCloseDelay={8000}
    />
  ),
}

export const PaymentFailed: Story = {
  render: () => (
    <NotificationWithTrigger
      type="error"
      title="Payment failed"
      description="Your card was declined. Please try a different payment method."
      actions={[
        { label: 'Update payment', variant: 'primary' as const, onClick: () => alert('Opening payment settings') },
      ]}
    />
  ),
}

export const FormSaved: Story = {
  render: () => (
    <NotificationWithTrigger
      type="success"
      title="Draft saved"
      description="Your changes have been saved automatically."
      autoClose
      autoCloseDelay={3000}
    />
  ),
}

export const NetworkError: Story = {
  render: () => (
    <NotificationWithTrigger
      type="error"
      title="Connection lost"
      description="Unable to connect to the server. Please check your internet connection."
      actions={[
        { label: 'Retry', variant: 'primary' as const, onClick: () => alert('Retrying connection') },
      ]}
    />
  ),
}

export const InvitationReceived: Story = {
  render: () => (
    <NotificationWithTrigger
      type="info"
      title="Team invitation"
      description="You've been invited to join the Design Team workspace."
      actions={[
        { label: 'Decline', variant: 'secondary' as const, onClick: () => alert('Invitation declined') },
        { label: 'Accept', variant: 'primary' as const, onClick: () => alert('Invitation accepted') },
      ]}
    />
  ),
}

export const FileDownloaded: Story = {
  render: () => (
    <NotificationWithTrigger
      type="success"
      title="Download complete"
      description="report-2025.pdf has been downloaded successfully."
      actions={[
        { label: 'Open file', variant: 'primary' as const, onClick: () => alert('Opening file') },
      ]}
      autoClose
      autoCloseDelay={5000}
    />
  ),
}

export const StorageWarning: Story = {
  render: () => (
    <NotificationWithTrigger
      type="warning"
      title="Storage almost full"
      description="You're using 95% of your storage. Consider upgrading your plan."
      actions={[
        { label: 'Manage storage', variant: 'secondary' as const, onClick: () => alert('Opening storage settings') },
        { label: 'Upgrade', variant: 'primary' as const, onClick: () => alert('Opening upgrade page') },
      ]}
    />
  ),
}

export const TaskCompleted: Story = {
  render: () => (
    <NotificationWithTrigger
      type="success"
      title="Task completed"
      description='The task "Update documentation" has been marked as complete.'
      autoClose
      autoCloseDelay={4000}
    />
  ),
}

export const MentionNotification: Story = {
  render: () => (
    <NotificationWithTrigger
      type="info"
      title="You were mentioned"
      description="@alex mentioned you in #general: Can you review this?"
      avatar={
        <div className="size-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
          AM
        </div>
      }
      actions={[
        { label: 'View', variant: 'primary' as const, onClick: () => alert('Opening conversation') },
      ]}
    />
  ),
}

export const SystemUpdate: Story = {
  render: () => (
    <NotificationWithTrigger
      type="info"
      title="System maintenance"
      description="Scheduled maintenance will occur tonight at 2 AM EST for approximately 2 hours."
      customIcon={<CogIcon className="size-6 text-blue-500" />}
    />
  ),
}

export const PasswordChanged: Story = {
  render: () => (
    <NotificationWithTrigger
      type="success"
      title="Password updated"
      description="Your password has been changed successfully."
      autoClose
      autoCloseDelay={5000}
    />
  ),
}

export const SessionExpiring: Story = {
  render: () => (
    <NotificationWithTrigger
      type="warning"
      title="Session expiring soon"
      description="Your session will expire in 5 minutes. Save your work."
      actions={[
        { label: 'Stay logged in', variant: 'primary' as const, onClick: () => alert('Session extended') },
      ]}
    />
  ),
}

export const CommentAdded: Story = {
  render: () => (
    <NotificationWithTrigger
      type="info"
      title="New comment"
      description="Lisa commented on your post: Great work on this!"
      avatar={
        <div className="size-10 rounded-full bg-green-500 flex items-center justify-center text-white font-medium">
          LC
        </div>
      }
      actions={[
        { label: 'Reply', variant: 'primary' as const, onClick: () => alert('Opening comment thread') },
      ]}
    />
  ),
}

// Showcase all types
export const AllTypes: Story = {
  render: () => {
    const [currentType, setCurrentType] = useState<'success' | 'error' | 'warning' | 'info' | null>(null)

    return (
      <div className="p-8">
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => setCurrentType('success')}>Success</Button>
          <Button onClick={() => setCurrentType('error')}>Error</Button>
          <Button onClick={() => setCurrentType('warning')}>Warning</Button>
          <Button onClick={() => setCurrentType('info')}>Info</Button>
        </div>

        <Notification
          show={currentType !== null}
          onClose={() => setCurrentType(null)}
          type={currentType || 'success'}
          title={`${currentType?.charAt(0).toUpperCase()}${currentType?.slice(1)} notification`}
          description={`This is a ${currentType} type notification.`}
        />
      </div>
    )
  },
}

// Showcase all positions
export const AllPositions: Story = {
  render: () => {
    const [currentPosition, setCurrentPosition] = useState<
      'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center' | null
    >(null)

    return (
      <div className="p-8">
        <div className="grid grid-cols-2 gap-2 max-w-md">
          <Button onClick={() => setCurrentPosition('top-left')}>Top Left</Button>
          <Button onClick={() => setCurrentPosition('top-right')}>Top Right</Button>
          <Button onClick={() => setCurrentPosition('top-center')}>Top Center</Button>
          <Button onClick={() => setCurrentPosition('bottom-center')}>Bottom Center</Button>
          <Button onClick={() => setCurrentPosition('bottom-left')}>Bottom Left</Button>
          <Button onClick={() => setCurrentPosition('bottom-right')}>Bottom Right</Button>
        </div>

        <Notification
          show={currentPosition !== null}
          onClose={() => setCurrentPosition(null)}
          position={currentPosition || 'top-right'}
          type="success"
          title="Position demo"
          description={`This notification is positioned at ${currentPosition?.replace('-', ' ')}`}
        />
      </div>
    )
  },
}

// Multiple notifications simulation
export const MultipleNotifications: Story = {
  render: () => {
    const [notifications, setNotifications] = useState<Array<{ id: number; show: boolean }>>([])
    let nextId = 0

    const addNotification = () => {
      const id = nextId++
      setNotifications((prev) => [...prev, { id, show: true }])

      // Auto-remove after 5 seconds
      setTimeout(() => {
        setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, show: false } : n)))
      }, 5000)
    }

    return (
      <div className="p-8">
        <Button onClick={addNotification}>Add Notification</Button>

        {notifications.map((notification, index) => (
          <Notification
            key={notification.id}
            show={notification.show}
            onClose={() => {
              setNotifications((prev) =>
                prev.map((n) => (n.id === notification.id ? { ...n, show: false } : n))
              )
            }}
            type="success"
            title={`Notification ${notification.id + 1}`}
            description="This is a stacked notification example."
            autoClose
            autoCloseDelay={5000}
          />
        ))}
      </div>
    )
  },
}
