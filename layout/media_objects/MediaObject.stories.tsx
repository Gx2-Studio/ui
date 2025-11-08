import type { Meta, StoryObj } from '@storybook/react'
import { MediaObject } from './MediaObject'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

const meta: Meta<typeof MediaObject> = {
  title: 'Layout/MediaObject',
  component: MediaObject,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MediaObject>

export const Default: Story = {
  args: {
    media: (
      <img
        className="h-12 w-12 rounded-full"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    ),
    title: 'Sarah Anderson',
    children: (
      <p className="text-sm text-gray-600">
        Product Designer at Acme Corp. Passionate about creating beautiful and functional user
        interfaces.
      </p>
    ),
  },
}

export const WithoutTitle: Story = {
  args: {
    media: (
      <img
        className="h-10 w-10 rounded-full"
        src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    ),
    children: (
      <div>
        <p className="text-sm font-medium text-gray-900">Michael Foster</p>
        <p className="text-sm text-gray-500">Co-Founder / CTO</p>
      </div>
    ),
  },
}

export const MediaOnRight: Story = {
  args: {
    mediaPosition: 'right',
    media: (
      <img
        className="h-12 w-12 rounded-full"
        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    ),
    title: 'Dries Vincent',
    children: (
      <p className="text-sm text-gray-600">
        Senior Developer with 10+ years of experience in building scalable web applications.
      </p>
    ),
  },
}

export const AlignmentTop: Story = {
  args: {
    mediaAlignment: 'top',
    media: (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
        <span className="text-lg font-semibold text-indigo-600">JD</span>
      </div>
    ),
    title: 'John Doe',
    children: (
      <div className="space-y-2">
        <p className="text-sm text-gray-600">First line of content</p>
        <p className="text-sm text-gray-600">Second line of content</p>
        <p className="text-sm text-gray-600">Third line of content</p>
      </div>
    ),
  },
}

export const AlignmentCenter: Story = {
  args: {
    mediaAlignment: 'center',
    media: (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
        <span className="text-lg font-semibold text-green-600">AB</span>
      </div>
    ),
    title: 'Alice Brown',
    children: (
      <div className="space-y-2">
        <p className="text-sm text-gray-600">First line of content</p>
        <p className="text-sm text-gray-600">Second line of content</p>
        <p className="text-sm text-gray-600">Third line of content</p>
      </div>
    ),
  },
}

export const AlignmentBottom: Story = {
  args: {
    mediaAlignment: 'bottom',
    media: (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
        <span className="text-lg font-semibold text-purple-600">CD</span>
      </div>
    ),
    title: 'Chris Davis',
    children: (
      <div className="space-y-2">
        <p className="text-sm text-gray-600">First line of content</p>
        <p className="text-sm text-gray-600">Second line of content</p>
        <p className="text-sm text-gray-600">Third line of content</p>
      </div>
    ),
  },
}

export const SmallSpacing: Story = {
  args: {
    spacing: 'sm',
    media: (
      <img
        className="h-10 w-10 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    ),
    title: 'Tom Johnson',
    children: <p className="text-sm text-gray-600">Small spacing between media and content</p>,
  },
}

export const MediumSpacing: Story = {
  args: {
    spacing: 'md',
    media: (
      <img
        className="h-10 w-10 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    ),
    title: 'Tom Johnson',
    children: <p className="text-sm text-gray-600">Medium spacing between media and content (default)</p>,
  },
}

export const LargeSpacing: Story = {
  args: {
    spacing: 'lg',
    media: (
      <img
        className="h-10 w-10 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    ),
    title: 'Tom Johnson',
    children: <p className="text-sm text-gray-600">Large spacing between media and content</p>,
  },
}

export const Responsive: Story = {
  args: {
    responsive: true,
    media: (
      <img
        className="h-24 w-24 rounded-lg object-cover sm:h-12 sm:w-12 sm:rounded-full"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    ),
    title: 'Responsive Layout',
    children: (
      <p className="text-sm text-gray-600">
        This layout stacks vertically on mobile and displays horizontally on larger screens.
      </p>
    ),
  },
}

export const WithIcon: Story = {
  args: {
    media: (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
        <EnvelopeIcon className="h-6 w-6 text-indigo-600" />
      </div>
    ),
    title: 'New Message',
    children: (
      <p className="text-sm text-gray-600">
        You have received a new message from your team member.
      </p>
    ),
  },
}

export const AllAlignments: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">Top Alignment</h3>
        <MediaObject
          mediaAlignment="top"
          media={
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
              <span className="font-semibold text-blue-600">T</span>
            </div>
          }
          title="Top Aligned"
        >
          <div className="space-y-1">
            <p className="text-sm text-gray-600">Line 1</p>
            <p className="text-sm text-gray-600">Line 2</p>
            <p className="text-sm text-gray-600">Line 3</p>
          </div>
        </MediaObject>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">Center Alignment</h3>
        <MediaObject
          mediaAlignment="center"
          media={
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
              <span className="font-semibold text-green-600">C</span>
            </div>
          }
          title="Center Aligned"
        >
          <div className="space-y-1">
            <p className="text-sm text-gray-600">Line 1</p>
            <p className="text-sm text-gray-600">Line 2</p>
            <p className="text-sm text-gray-600">Line 3</p>
          </div>
        </MediaObject>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">Bottom Alignment</h3>
        <MediaObject
          mediaAlignment="bottom"
          media={
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
              <span className="font-semibold text-purple-600">B</span>
            </div>
          }
          title="Bottom Aligned"
        >
          <div className="space-y-1">
            <p className="text-sm text-gray-600">Line 1</p>
            <p className="text-sm text-gray-600">Line 2</p>
            <p className="text-sm text-gray-600">Line 3</p>
          </div>
        </MediaObject>
      </div>
    </div>
  ),
}

export const AllSpacings: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">Small Spacing</h3>
        <MediaObject
          spacing="sm"
          media={
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          }
          title="Small"
        >
          <p className="text-sm text-gray-600">2-unit spacing</p>
        </MediaObject>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">Medium Spacing (Default)</h3>
        <MediaObject
          spacing="md"
          media={
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          }
          title="Medium"
        >
          <p className="text-sm text-gray-600">4-unit spacing</p>
        </MediaObject>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">Large Spacing</h3>
        <MediaObject
          spacing="lg"
          media={
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          }
          title="Large"
        >
          <p className="text-sm text-gray-600">6-unit spacing</p>
        </MediaObject>
      </div>
    </div>
  ),
}

export const UserProfile: Story = {
  render: () => (
    <MediaObject
      media={
        <img
          className="h-16 w-16 rounded-full"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      }
      title="Sarah Anderson"
      spacing="lg"
    >
      <p className="text-sm text-gray-600">Product Designer</p>
      <div className="mt-3 flex items-center gap-4">
        <a href="#" className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
          <EnvelopeIcon className="h-4 w-4" />
          Email
        </a>
        <a href="#" className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
          <PhoneIcon className="h-4 w-4" />
          Call
        </a>
      </div>
    </MediaObject>
  ),
}

export const NotificationItem: Story = {
  render: () => (
    <MediaObject
      media={
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
          <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
        </div>
      }
    >
      <div>
        <p className="text-sm font-medium text-gray-900">New comment on your post</p>
        <p className="mt-1 text-sm text-gray-500">Sarah commented: "Great work on this feature!"</p>
        <p className="mt-1 text-xs text-gray-400">2 hours ago</p>
      </div>
    </MediaObject>
  ),
}

export const BlogPost: Story = {
  render: () => (
    <MediaObject
      media={
        <img
          className="h-24 w-24 rounded-lg object-cover"
          src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
          alt=""
        />
      }
      title="Understanding React Server Components"
      spacing="lg"
    >
      <p className="mt-1 text-sm text-gray-600">
        Learn how React Server Components can improve your application's performance and user
        experience by reducing the amount of JavaScript sent to the client.
      </p>
      <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
        <span>March 16, 2024</span>
        <span>•</span>
        <span>5 min read</span>
      </div>
    </MediaObject>
  ),
}

export const CommentThread: Story = {
  render: () => (
    <div className="space-y-6">
      <MediaObject
        media={
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        }
      >
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-900">Sarah Anderson</span>
            <span className="text-xs text-gray-500">2 hours ago</span>
          </div>
          <p className="mt-1 text-sm text-gray-600">
            This is a great implementation! I especially like how you handled the edge cases.
          </p>
          <div className="mt-2 flex gap-4">
            <button className="text-xs font-medium text-gray-500 hover:text-gray-700">
              Reply
            </button>
            <button className="text-xs font-medium text-gray-500 hover:text-gray-700">
              Like
            </button>
          </div>
        </div>
      </MediaObject>

      <div className="ml-12">
        <MediaObject
          media={
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          }
          spacing="sm"
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900">Michael Foster</span>
              <span className="text-xs text-gray-500">1 hour ago</span>
            </div>
            <p className="mt-1 text-sm text-gray-600">Thanks! I appreciate the feedback.</p>
          </div>
        </MediaObject>
      </div>
    </div>
  ),
}

export const ProductCard: Story = {
  render: () => (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <MediaObject
        media={
          <img
            className="h-20 w-20 rounded-lg object-cover"
            src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
            alt=""
          />
        }
        title="Basic Tee"
        spacing="lg"
      >
        <p className="text-sm text-gray-600">Available in multiple colors</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-900">$35</p>
          <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
            Add to cart
          </button>
        </div>
      </MediaObject>
    </div>
  ),
}
