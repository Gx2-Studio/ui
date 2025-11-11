import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Modal } from './Modal'
import { Button } from '../../elements/buttons/Button'
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'

const meta: Meta<typeof Modal> = {
  title: '7. Overlays/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Modal>

// Helper component for interactive stories
const ModalWithTrigger = (args: any) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal {...args} open={open} onClose={() => setOpen(false)} />
    </div>
  )
}

// Size variants
export const SizeSmall: Story = {
  render: () => (
    <ModalWithTrigger
      size="sm"
      title="Small Modal"
      description="This is a small modal dialog (max-width: 384px)"
    >
      <p className="text-sm text-gray-600">Small modal content goes here.</p>
    </ModalWithTrigger>
  ),
}

export const SizeMedium: Story = {
  render: () => (
    <ModalWithTrigger
      size="md"
      title="Medium Modal"
      description="This is a medium modal dialog (max-width: 512px)"
    >
      <p className="text-sm text-gray-600">Medium modal content goes here.</p>
    </ModalWithTrigger>
  ),
}

export const SizeLarge: Story = {
  render: () => (
    <ModalWithTrigger
      size="lg"
      title="Large Modal"
      description="This is a large modal dialog (max-width: 672px)"
    >
      <p className="text-sm text-gray-600">Large modal content goes here.</p>
    </ModalWithTrigger>
  ),
}

export const SizeExtraLarge: Story = {
  render: () => (
    <ModalWithTrigger
      size="xl"
      title="Extra Large Modal"
      description="This is an extra large modal dialog (max-width: 896px)"
    >
      <p className="text-sm text-gray-600">Extra large modal content goes here.</p>
    </ModalWithTrigger>
  ),
}

export const SizeFull: Story = {
  render: () => (
    <ModalWithTrigger
      size="full"
      title="Full Width Modal"
      description="This modal takes almost the full screen width with margins"
    >
      <p className="text-sm text-gray-600">Full size modal content goes here.</p>
    </ModalWithTrigger>
  ),
}

// Position variants
export const PositionCenter: Story = {
  render: () => (
    <ModalWithTrigger
      position="center"
      title="Centered Modal"
      description="This modal is vertically centered on the screen"
    >
      <p className="text-sm text-gray-600">Modal content centered in viewport.</p>
    </ModalWithTrigger>
  ),
}

export const PositionTop: Story = {
  render: () => (
    <ModalWithTrigger
      position="top"
      title="Top Aligned Modal"
      description="This modal is aligned to the top of the screen"
    >
      <p className="text-sm text-gray-600">Modal content aligned to top.</p>
    </ModalWithTrigger>
  ),
}

// Variant styles
export const DefaultVariant: Story = {
  render: () => (
    <ModalWithTrigger
      variant="default"
      title="Default Modal"
      description="This is a standard modal with default styling"
      actions={[
        { label: 'Cancel', variant: 'secondary' as const, onClick: () => {} },
        { label: 'Confirm', variant: 'primary' as const, onClick: () => {} },
      ]}
    >
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          This is the default modal variant, suitable for general-purpose dialogs.
        </p>
      </div>
    </ModalWithTrigger>
  ),
}

export const AlertVariant: Story = {
  render: () => (
    <ModalWithTrigger
      variant="alert"
      icon={<ExclamationTriangleIcon className="size-6" />}
      iconColor="red"
      title="Delete Account"
      description="Are you sure you want to delete your account? This action cannot be undone."
      actions={[
        { label: 'Cancel', variant: 'secondary' as const, onClick: () => {} },
        { label: 'Delete', variant: 'primary' as const, onClick: () => {} },
      ]}
    />
  ),
}

// Icon colors
export const IconColorRed: Story = {
  render: () => (
    <ModalWithTrigger
      variant="alert"
      icon={<XCircleIcon className="size-6" />}
      iconColor="red"
      title="Error Occurred"
      description="There was a problem processing your request. Please try again."
      actions={[
        { label: 'Try Again', variant: 'primary' as const, onClick: () => {} },
      ]}
    />
  ),
}

export const IconColorYellow: Story = {
  render: () => (
    <ModalWithTrigger
      variant="alert"
      icon={<ExclamationTriangleIcon className="size-6" />}
      iconColor="yellow"
      title="Warning"
      description="This action requires your attention before proceeding."
      actions={[
        { label: 'Cancel', variant: 'secondary' as const, onClick: () => {} },
        { label: 'Continue', variant: 'primary' as const, onClick: () => {} },
      ]}
    />
  ),
}

export const IconColorGreen: Story = {
  render: () => (
    <ModalWithTrigger
      variant="alert"
      icon={<CheckCircleIcon className="size-6" />}
      iconColor="green"
      title="Success"
      description="Your changes have been saved successfully."
      actions={[
        { label: 'Close', variant: 'primary' as const, onClick: () => {} },
      ]}
    />
  ),
}

export const IconColorBlue: Story = {
  render: () => (
    <ModalWithTrigger
      variant="alert"
      icon={<InformationCircleIcon className="size-6" />}
      iconColor="blue"
      title="Information"
      description="Here's some important information you should know about."
      actions={[
        { label: 'Got it', variant: 'primary' as const, onClick: () => {} },
      ]}
    />
  ),
}

export const IconColorGray: Story = {
  render: () => (
    <ModalWithTrigger
      variant="alert"
      icon={<InformationCircleIcon className="size-6" />}
      iconColor="gray"
      title="Notice"
      description="This is a neutral notification message."
      actions={[
        { label: 'Dismiss', variant: 'primary' as const, onClick: () => {} },
      ]}
    />
  ),
}

// With actions
export const WithSingleAction: Story = {
  render: () => (
    <ModalWithTrigger
      title="Single Action Modal"
      description="This modal has only one action button"
      actions={[
        { label: 'Okay', variant: 'primary' as const, onClick: () => alert('Confirmed') },
      ]}
    >
      <p className="text-sm text-gray-600">Modal with a single action button.</p>
    </ModalWithTrigger>
  ),
}

export const WithMultipleActions: Story = {
  render: () => (
    <ModalWithTrigger
      title="Multiple Actions"
      description="This modal has multiple action buttons"
      actions={[
        { label: 'Cancel', variant: 'secondary' as const, onClick: () => alert('Cancelled') },
        { label: 'Save Draft', variant: 'soft' as const, onClick: () => alert('Draft saved') },
        { label: 'Publish', variant: 'primary' as const, onClick: () => alert('Published') },
      ]}
    >
      <p className="text-sm text-gray-600">Choose one of the available actions.</p>
    </ModalWithTrigger>
  ),
}

export const WithAutoFocusAction: Story = {
  render: () => (
    <ModalWithTrigger
      title="Auto Focus Action"
      description="The primary action is automatically focused when the modal opens"
      actions={[
        { label: 'Cancel', variant: 'secondary' as const, onClick: () => {} },
        { label: 'Confirm', variant: 'primary' as const, onClick: () => {}, autoFocus: true },
      ]}
    >
      <p className="text-sm text-gray-600">Press Enter to confirm.</p>
    </ModalWithTrigger>
  ),
}

export const NoActions: Story = {
  render: () => (
    <ModalWithTrigger
      title="No Actions"
      description="This modal has no action buttons"
      showCloseButton
    >
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          This modal requires the close button or clicking outside to dismiss.
        </p>
      </div>
    </ModalWithTrigger>
  ),
}

// Close button
export const WithCloseButton: Story = {
  render: () => (
    <ModalWithTrigger
      title="Modal with Close Button"
      description="This modal has a close button in the top-right corner"
      showCloseButton
      actions={[
        { label: 'Confirm', variant: 'primary' as const, onClick: () => {} },
      ]}
    >
      <p className="text-sm text-gray-600">You can close this modal using the X button.</p>
    </ModalWithTrigger>
  ),
}

export const WithoutCloseButton: Story = {
  render: () => (
    <ModalWithTrigger
      title="No Close Button"
      description="This modal has no close button"
      showCloseButton={false}
      actions={[
        { label: 'Cancel', variant: 'secondary' as const, onClick: () => {} },
        { label: 'Confirm', variant: 'primary' as const, onClick: () => {} },
      ]}
    >
      <p className="text-sm text-gray-600">
        You must use an action button or click outside to close this modal.
      </p>
    </ModalWithTrigger>
  ),
}

// Backdrop interaction
export const CloseOnBackdropClick: Story = {
  render: () => (
    <ModalWithTrigger
      title="Close on Backdrop Click"
      description="Click outside the modal to close it"
      closeOnBackdropClick
    >
      <p className="text-sm text-gray-600">
        Clicking the backdrop (outside the modal) will close it.
      </p>
    </ModalWithTrigger>
  ),
}

export const NoCloseOnBackdropClick: Story = {
  render: () => (
    <ModalWithTrigger
      title="No Close on Backdrop Click"
      description="Clicking outside won't close this modal"
      closeOnBackdropClick={false}
      showCloseButton
    >
      <p className="text-sm text-gray-600">
        You must use the close button to dismiss this modal.
      </p>
    </ModalWithTrigger>
  ),
}

// Content variations
export const TitleOnly: Story = {
  render: () => (
    <ModalWithTrigger
      title="Modal with Title Only"
      actions={[
        { label: 'Close', variant: 'primary' as const, onClick: () => {} },
      ]}
    />
  ),
}

export const DescriptionOnly: Story = {
  render: () => (
    <ModalWithTrigger
      description="This modal has only a description, no title"
      actions={[
        { label: 'Close', variant: 'primary' as const, onClick: () => {} },
      ]}
    />
  ),
}

export const WithCustomContent: Story = {
  render: () => (
    <ModalWithTrigger
      title="Custom Content Modal"
      description="This modal contains custom form elements"
      actions={[
        { label: 'Cancel', variant: 'secondary' as const, onClick: () => {} },
        { label: 'Submit', variant: 'primary' as const, onClick: () => {} },
      ]}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2 border"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2 border"
          />
        </div>
      </div>
    </ModalWithTrigger>
  ),
}

// Real-world examples
export const ConfirmDelete: Story = {
  render: () => (
    <ModalWithTrigger
      variant="alert"
      icon={<TrashIcon className="size-6" />}
      iconColor="red"
      title="Delete Item"
      description="Are you sure you want to delete this item? This action cannot be undone and all associated data will be permanently removed."
      actions={[
        { label: 'Cancel', variant: 'secondary' as const, onClick: () => alert('Cancelled') },
        { label: 'Delete', variant: 'primary' as const, onClick: () => alert('Deleted'), autoFocus: true },
      ]}
    />
  ),
}

export const SaveChanges: Story = {
  render: () => (
    <ModalWithTrigger
      variant="alert"
      icon={<ExclamationTriangleIcon className="size-6" />}
      iconColor="yellow"
      title="Unsaved Changes"
      description="You have unsaved changes. Do you want to save them before leaving?"
      actions={[
        { label: "Don't Save", variant: 'ghost' as const, onClick: () => alert('Discarded') },
        { label: 'Cancel', variant: 'secondary' as const, onClick: () => alert('Cancelled') },
        { label: 'Save', variant: 'primary' as const, onClick: () => alert('Saved') },
      ]}
    />
  ),
}

export const PaymentSuccess: Story = {
  render: () => (
    <ModalWithTrigger
      variant="alert"
      icon={<CheckCircleIcon className="size-6" />}
      iconColor="green"
      title="Payment Successful"
      description="Your payment has been processed successfully. A confirmation email has been sent to your inbox."
      actions={[
        { label: 'View Receipt', variant: 'secondary' as const, onClick: () => alert('Viewing receipt') },
        { label: 'Done', variant: 'primary' as const, onClick: () => {} },
      ]}
    />
  ),
}

export const SubscriptionForm: Story = {
  render: () => (
    <ModalWithTrigger
      size="lg"
      title="Subscribe to Newsletter"
      description="Stay updated with our latest news and offers"
      showCloseButton
      actions={[
        { label: 'Cancel', variant: 'secondary' as const, onClick: () => {} },
        { label: 'Subscribe', variant: 'primary' as const, onClick: () => alert('Subscribed') },
      ]}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email address</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2 border"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Preferences</label>
          <div className="mt-2 space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
              <span className="ml-2 text-sm text-gray-700">Weekly newsletter</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
              <span className="ml-2 text-sm text-gray-700">Product updates</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
              <span className="ml-2 text-sm text-gray-700">Special offers</span>
            </label>
          </div>
        </div>
      </div>
    </ModalWithTrigger>
  ),
}

export const ImagePreview: Story = {
  render: () => (
    <ModalWithTrigger
      size="xl"
      title="Image Preview"
      showCloseButton
    >
      <div className="space-y-4">
        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">Image placeholder</span>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-900">Photo Details</h4>
          <dl className="mt-2 text-sm text-gray-600 space-y-1">
            <div className="flex justify-between">
              <dt>Size:</dt>
              <dd>1920 x 1080</dd>
            </div>
            <div className="flex justify-between">
              <dt>Format:</dt>
              <dd>JPG</dd>
            </div>
            <div className="flex justify-between">
              <dt>Taken:</dt>
              <dd>November 8, 2025</dd>
            </div>
          </dl>
        </div>
      </div>
    </ModalWithTrigger>
  ),
}

export const TermsAndConditions: Story = {
  render: () => (
    <ModalWithTrigger
      size="lg"
      title="Terms and Conditions"
      showCloseButton
      actions={[
        { label: 'Decline', variant: 'secondary' as const, onClick: () => alert('Declined') },
        { label: 'Accept', variant: 'primary' as const, onClick: () => alert('Accepted') },
      ]}
    >
      <div className="max-h-96 overflow-y-auto space-y-4 text-sm text-gray-600">
        <p>
          <strong>1. Acceptance of Terms</strong>
        </p>
        <p>
          By accessing and using this service, you accept and agree to be bound by the terms
          and provision of this agreement.
        </p>
        <p>
          <strong>2. Use License</strong>
        </p>
        <p>
          Permission is granted to temporarily download one copy of the materials on our
          service for personal, non-commercial transitory viewing only.
        </p>
        <p>
          <strong>3. Disclaimer</strong>
        </p>
        <p>
          The materials on our service are provided on an 'as is' basis. We make no warranties,
          expressed or implied, and hereby disclaim and negate all other warranties including,
          without limitation, implied warranties or conditions of merchantability, fitness for
          a particular purpose, or non-infringement of intellectual property or other violation
          of rights.
        </p>
        <p>
          <strong>4. Limitations</strong>
        </p>
        <p>
          In no event shall our company or its suppliers be liable for any damages (including,
          without limitation, damages for loss of data or profit, or due to business interruption)
          arising out of the use or inability to use our service.
        </p>
      </div>
    </ModalWithTrigger>
  ),
}

export const QuickActions: Story = {
  render: () => (
    <ModalWithTrigger
      title="Quick Actions"
      description="Choose an action to perform"
      size="sm"
    >
      <div className="space-y-2">
        <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 border border-gray-200">
          <div className="font-medium text-sm text-gray-900">Create New Project</div>
          <div className="text-xs text-gray-500">Start a new project from scratch</div>
        </button>
        <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 border border-gray-200">
          <div className="font-medium text-sm text-gray-900">Import Data</div>
          <div className="text-xs text-gray-500">Import from CSV or JSON file</div>
        </button>
        <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 border border-gray-200">
          <div className="font-medium text-sm text-gray-900">View Tutorial</div>
          <div className="text-xs text-gray-500">Learn how to get started</div>
        </button>
      </div>
    </ModalWithTrigger>
  ),
}

// Showcase all sizes
export const AllSizes: Story = {
  render: () => {
    const [currentSize, setCurrentSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full' | null>(null)

    return (
      <div className="p-8">
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => setCurrentSize('sm')}>Small</Button>
          <Button onClick={() => setCurrentSize('md')}>Medium</Button>
          <Button onClick={() => setCurrentSize('lg')}>Large</Button>
          <Button onClick={() => setCurrentSize('xl')}>Extra Large</Button>
          <Button onClick={() => setCurrentSize('full')}>Full</Button>
        </div>

        <Modal
          open={currentSize !== null}
          onClose={() => setCurrentSize(null)}
          size={currentSize || 'md'}
          title={`${currentSize?.toUpperCase()} Modal`}
          description="This demonstrates the modal size"
          actions={[
            { label: 'Close', variant: 'primary' as const, onClick: () => setCurrentSize(null) },
          ]}
        >
          <p className="text-sm text-gray-600">Modal content for {currentSize} size.</p>
        </Modal>
      </div>
    )
  },
}
