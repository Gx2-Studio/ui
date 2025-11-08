import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Drawer } from './Drawer'
import { Button } from '../../elements/buttons/Button'

const meta: Meta<typeof Drawer> = {
  title: 'Overlays/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Drawer>

// Helper component for interactive stories
const DrawerWithTrigger = (args: any) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer {...args} open={open} onClose={() => setOpen(false)} />
    </div>
  )
}

// Position variants
export const RightPosition: Story = {
  render: () => <DrawerWithTrigger position="right" title="Right Drawer" description="This drawer slides in from the right side" />,
}

export const LeftPosition: Story = {
  render: () => <DrawerWithTrigger position="left" title="Left Drawer" description="This drawer slides in from the left side" />,
}

export const TopPosition: Story = {
  render: () => <DrawerWithTrigger position="top" title="Top Drawer" description="This drawer slides in from the top" />,
}

export const BottomPosition: Story = {
  render: () => <DrawerWithTrigger position="bottom" title="Bottom Drawer" description="This drawer slides in from the bottom" />,
}

// Size variants
export const SizeSmall: Story = {
  render: () => (
    <DrawerWithTrigger
      size="sm"
      title="Small Drawer"
      description="This is a small drawer (320px)"
    >
      <p className="text-sm text-gray-600">Small drawer content goes here.</p>
    </DrawerWithTrigger>
  ),
}

export const SizeMedium: Story = {
  render: () => (
    <DrawerWithTrigger
      size="md"
      title="Medium Drawer"
      description="This is a medium drawer (384px)"
    >
      <p className="text-sm text-gray-600">Medium drawer content goes here.</p>
    </DrawerWithTrigger>
  ),
}

export const SizeLarge: Story = {
  render: () => (
    <DrawerWithTrigger
      size="lg"
      title="Large Drawer"
      description="This is a large drawer (512px)"
    >
      <p className="text-sm text-gray-600">Large drawer content goes here.</p>
    </DrawerWithTrigger>
  ),
}

export const SizeExtraLarge: Story = {
  render: () => (
    <DrawerWithTrigger
      size="xl"
      title="Extra Large Drawer"
      description="This is an extra large drawer (768px)"
    >
      <p className="text-sm text-gray-600">Extra large drawer content goes here.</p>
    </DrawerWithTrigger>
  ),
}

export const SizeFull: Story = {
  render: () => (
    <DrawerWithTrigger
      size="full"
      title="Full Width Drawer"
      description="This drawer takes the full width/height"
    >
      <p className="text-sm text-gray-600">Full size drawer content goes here.</p>
    </DrawerWithTrigger>
  ),
}

// Variant styles
export const Default: Story = {
  render: () => (
    <DrawerWithTrigger
      variant="default"
      title="Default Drawer"
      description="Standard drawer with default styling"
    >
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          This is the default drawer variant with a white background and standard header.
        </p>
        <p className="text-sm text-gray-600">
          The close button is located in the header.
        </p>
      </div>
    </DrawerWithTrigger>
  ),
}

export const BrandedIndigo: Story = {
  render: () => (
    <DrawerWithTrigger
      variant="branded"
      brandColor="indigo"
      title="Branded Drawer"
      description="Drawer with branded indigo header"
    >
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          This drawer has a branded header with indigo background.
        </p>
      </div>
    </DrawerWithTrigger>
  ),
}

export const BrandedBlue: Story = {
  render: () => (
    <DrawerWithTrigger
      variant="branded"
      brandColor="blue"
      title="Blue Branded Drawer"
      description="Drawer with branded blue header"
    >
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          This drawer has a branded header with blue background.
        </p>
      </div>
    </DrawerWithTrigger>
  ),
}

export const BrandedGreen: Story = {
  render: () => (
    <DrawerWithTrigger
      variant="branded"
      brandColor="green"
      title="Green Branded Drawer"
      description="Drawer with branded green header"
    >
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          This drawer has a branded header with green background.
        </p>
      </div>
    </DrawerWithTrigger>
  ),
}

export const BrandedPurple: Story = {
  render: () => (
    <DrawerWithTrigger
      variant="branded"
      brandColor="purple"
      title="Purple Branded Drawer"
      description="Drawer with branded purple header"
    >
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          This drawer has a branded header with purple background.
        </p>
      </div>
    </DrawerWithTrigger>
  ),
}

export const BrandedRed: Story = {
  render: () => (
    <DrawerWithTrigger
      variant="branded"
      brandColor="red"
      title="Red Branded Drawer"
      description="Drawer with branded red header"
    >
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          This drawer has a branded header with red background.
        </p>
      </div>
    </DrawerWithTrigger>
  ),
}

export const CloseOutside: Story = {
  render: () => (
    <DrawerWithTrigger
      variant="close-outside"
      title="Close Button Outside"
      description="Close button is positioned outside the drawer"
    >
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          The close button appears outside the drawer panel.
        </p>
      </div>
    </DrawerWithTrigger>
  ),
}

export const StickyFooter: Story = {
  render: () => (
    <DrawerWithTrigger
      variant="sticky-footer"
      title="Sticky Footer Drawer"
      description="Drawer with sticky footer actions"
      actions={[
        { label: 'Cancel', variant: 'secondary' as const, onClick: () => {} },
        { label: 'Save', variant: 'primary' as const, onClick: () => {} },
      ]}
    >
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          This drawer has a sticky footer that remains visible when scrolling.
        </p>
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i} className="text-sm text-gray-600">
            Content line {i + 1}
          </p>
        ))}
      </div>
    </DrawerWithTrigger>
  ),
}

export const BackgroundOverlay: Story = {
  render: () => (
    <DrawerWithTrigger
      variant="background-overlay"
      title="Background Overlay"
      description="Drawer with darker overlay background"
    >
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          This drawer has a darker background overlay (gray-500 with 75% opacity).
        </p>
      </div>
    </DrawerWithTrigger>
  ),
}

// With actions
export const WithActions: Story = {
  render: () => (
    <DrawerWithTrigger
      title="Drawer with Actions"
      description="This drawer has action buttons"
      actions={[
        { label: 'Cancel', variant: 'secondary' as const, onClick: () => alert('Cancelled') },
        { label: 'Save', variant: 'primary' as const, onClick: () => alert('Saved') },
      ]}
    >
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          Fill out the form and use the action buttons below to save or cancel.
        </p>
      </div>
    </DrawerWithTrigger>
  ),
}

export const WithDangerAction: Story = {
  render: () => (
    <DrawerWithTrigger
      title="Delete Confirmation"
      description="Are you sure you want to delete this item?"
      actions={[
        { label: 'Cancel', variant: 'secondary' as const, onClick: () => alert('Cancelled') },
        { label: 'Delete', variant: 'danger' as const, onClick: () => alert('Deleted') },
      ]}
    >
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          This action cannot be undone. This will permanently delete your data.
        </p>
      </div>
    </DrawerWithTrigger>
  ),
}

export const WithDisabledAction: Story = {
  render: () => (
    <DrawerWithTrigger
      title="Form Drawer"
      description="Complete the form to enable the submit button"
      actions={[
        { label: 'Cancel', variant: 'secondary' as const, onClick: () => alert('Cancelled') },
        { label: 'Submit', variant: 'primary' as const, onClick: () => alert('Submitted'), disabled: true },
      ]}
    >
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          The submit button is disabled until the form is valid.
        </p>
      </div>
    </DrawerWithTrigger>
  ),
}

// Overlay and interaction options
export const NoOverlay: Story = {
  render: () => (
    <DrawerWithTrigger
      showOverlay={false}
      title="No Overlay"
      description="This drawer has no background overlay"
    >
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          You can still see and interact with the content behind the drawer.
        </p>
      </div>
    </DrawerWithTrigger>
  ),
}

export const NoCloseOnOverlayClick: Story = {
  render: () => (
    <DrawerWithTrigger
      closeOnOverlayClick={false}
      title="No Close on Overlay Click"
      description="Clicking the overlay won't close this drawer"
    >
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          You must use the close button or press Escape to close this drawer.
        </p>
      </div>
    </DrawerWithTrigger>
  ),
}

export const NoCloseOnEscape: Story = {
  render: () => (
    <DrawerWithTrigger
      closeOnEscape={false}
      title="No Close on Escape"
      description="Pressing Escape won't close this drawer"
    >
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          You must use the close button or click the overlay to close this drawer.
        </p>
      </div>
    </DrawerWithTrigger>
  ),
}

// Custom header and footer
export const CustomHeader: Story = {
  render: () => (
    <DrawerWithTrigger
      header={
        <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-pink-50">
          <h2 className="text-xl font-bold text-purple-900">Custom Header</h2>
          <p className="text-sm text-purple-600">This is a completely custom header</p>
        </div>
      }
    >
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          This drawer uses a custom header component with gradient background.
        </p>
      </div>
    </DrawerWithTrigger>
  ),
}

export const CustomFooter: Story = {
  render: () => (
    <DrawerWithTrigger
      title="Custom Footer"
      description="This drawer has a custom footer"
      footer={
        <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500">Last saved: 2 minutes ago</p>
            <div className="flex gap-2">
              <Button size="sm" variant="secondary">Save Draft</Button>
              <Button size="sm" variant="primary">Publish</Button>
            </div>
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          This drawer uses a custom footer component.
        </p>
      </div>
    </DrawerWithTrigger>
  ),
}

// Real-world examples
export const UserProfileEditor: Story = {
  render: () => (
    <DrawerWithTrigger
      variant="branded"
      brandColor="indigo"
      title="Edit Profile"
      description="Update your personal information"
      actions={[
        { label: 'Cancel', variant: 'secondary' as const, onClick: () => {} },
        { label: 'Save Changes', variant: 'primary' as const, onClick: () => {} },
      ]}
    >
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2 border"
            defaultValue="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2 border"
            defaultValue="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Bio</label>
          <textarea
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2 border"
            defaultValue="I'm a software developer passionate about creating great user experiences."
          />
        </div>
      </div>
    </DrawerWithTrigger>
  ),
}

export const ShoppingCart: Story = {
  render: () => (
    <DrawerWithTrigger
      title="Shopping Cart"
      description="3 items in your cart"
      size="lg"
      variant="sticky-footer"
      actions={[
        { label: 'Continue Shopping', variant: 'secondary' as const, onClick: () => {} },
        { label: 'Checkout', variant: 'primary' as const, onClick: () => {} },
      ]}
    >
      <div className="space-y-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex gap-4 pb-6 border-b border-gray-200">
            <div className="w-20 h-20 bg-gray-200 rounded-md flex items-center justify-center">
              <span className="text-gray-400 text-xs">Image</span>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900">Product {item}</h4>
              <p className="text-sm text-gray-500 mt-1">Color: Blue, Size: M</p>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Decrease</span>-
                  </button>
                  <span className="text-sm text-gray-900">1</span>
                  <button className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Increase</span>+
                  </button>
                </div>
                <p className="text-sm font-medium text-gray-900">$29.99</p>
              </div>
            </div>
          </div>
        ))}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>$89.97</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
        </div>
      </div>
    </DrawerWithTrigger>
  ),
}

export const NotificationCenter: Story = {
  render: () => (
    <DrawerWithTrigger
      title="Notifications"
      description="You have 5 unread notifications"
      position="right"
      size="md"
    >
      <div className="space-y-4">
        {[
          { type: 'mention', title: 'Sarah mentioned you', time: '5m ago', unread: true },
          { type: 'comment', title: 'New comment on your post', time: '1h ago', unread: true },
          { type: 'like', title: 'John liked your photo', time: '2h ago', unread: true },
          { type: 'follow', title: 'Emma started following you', time: '3h ago', unread: true },
          { type: 'message', title: 'New message from Mike', time: '5h ago', unread: true },
          { type: 'update', title: 'System update available', time: '1d ago', unread: false },
        ].map((notification, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border ${notification.unread ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200'}`}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
              </div>
              {notification.unread && (
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
              )}
            </div>
          </div>
        ))}
      </div>
    </DrawerWithTrigger>
  ),
}

export const FilterPanel: Story = {
  render: () => (
    <DrawerWithTrigger
      position="left"
      title="Filters"
      description="Refine your search"
      size="sm"
      actions={[
        { label: 'Clear All', variant: 'secondary' as const, onClick: () => {} },
        { label: 'Apply Filters', variant: 'primary' as const, onClick: () => {} },
      ]}
    >
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">Category</h4>
          <div className="space-y-2">
            {['Electronics', 'Clothing', 'Books', 'Home & Garden'].map((category) => (
              <label key={category} className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                <span className="ml-2 text-sm text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">Price Range</h4>
          <div className="space-y-2">
            {['Under $25', '$25 to $50', '$50 to $100', 'Over $100'].map((range) => (
              <label key={range} className="flex items-center">
                <input type="radio" name="price" className="border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                <span className="ml-2 text-sm text-gray-700">{range}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">Rating</h4>
          <div className="space-y-2">
            {['4 stars & up', '3 stars & up', '2 stars & up'].map((rating) => (
              <label key={rating} className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                <span className="ml-2 text-sm text-gray-700">{rating}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </DrawerWithTrigger>
  ),
}

// All positions showcase
export const AllPositions: Story = {
  render: () => {
    const [openPosition, setOpenPosition] = useState<'right' | 'left' | 'top' | 'bottom' | null>(null)

    return (
      <div className="p-8">
        <div className="grid grid-cols-2 gap-4 max-w-md">
          <Button onClick={() => setOpenPosition('right')}>Right Drawer</Button>
          <Button onClick={() => setOpenPosition('left')}>Left Drawer</Button>
          <Button onClick={() => setOpenPosition('top')}>Top Drawer</Button>
          <Button onClick={() => setOpenPosition('bottom')}>Bottom Drawer</Button>
        </div>

        <Drawer
          open={openPosition === 'right'}
          onClose={() => setOpenPosition(null)}
          position="right"
          title="Right Drawer"
          description="Slides in from the right"
        >
          <p className="text-sm text-gray-600">Content for right drawer</p>
        </Drawer>

        <Drawer
          open={openPosition === 'left'}
          onClose={() => setOpenPosition(null)}
          position="left"
          title="Left Drawer"
          description="Slides in from the left"
        >
          <p className="text-sm text-gray-600">Content for left drawer</p>
        </Drawer>

        <Drawer
          open={openPosition === 'top'}
          onClose={() => setOpenPosition(null)}
          position="top"
          title="Top Drawer"
          description="Slides in from the top"
        >
          <p className="text-sm text-gray-600">Content for top drawer</p>
        </Drawer>

        <Drawer
          open={openPosition === 'bottom'}
          onClose={() => setOpenPosition(null)}
          position="bottom"
          title="Bottom Drawer"
          description="Slides in from the bottom"
        >
          <p className="text-sm text-gray-600">Content for bottom drawer</p>
        </Drawer>
      </div>
    )
  },
}
