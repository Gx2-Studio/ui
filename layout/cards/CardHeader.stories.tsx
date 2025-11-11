import type { Meta, StoryObj } from '@storybook/react'
import { CardHeader } from './CardHeader'
import { Card } from './Card'
import { CardBody } from './CardBody'

const meta: Meta<typeof CardHeader> = {
  title: '3. Layout/CardHeader',
  component: CardHeader,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CardHeader>

export const TitleOnly: Story = {
  render: () => (
    <Card padding="none">
      <CardHeader title="Project Alpha" className="px-6 py-4" />
      <CardBody>
        <p className="text-sm text-gray-600">Card content goes here</p>
      </CardBody>
    </Card>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <Card padding="none">
      <CardHeader
        title="Project Alpha"
        description="A comprehensive analytics dashboard for tracking key metrics"
        className="px-6 py-4"
      />
      <CardBody>
        <p className="text-sm text-gray-600">Card content goes here</p>
      </CardBody>
    </Card>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Card padding="none">
      <CardHeader
        title="Project Alpha"
        description="A comprehensive analytics dashboard"
        action={
          <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
            Edit
          </button>
        }
        className="px-6 py-4"
      />
      <CardBody>
        <p className="text-sm text-gray-600">Card content goes here</p>
      </CardBody>
    </Card>
  ),
}

export const WithLinkAction: Story = {
  render: () => (
    <Card padding="none">
      <CardHeader
        title="Recent Activity"
        description="Your latest updates and notifications"
        action={
          <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
            View all
          </a>
        }
        className="px-6 py-4"
      />
      <CardBody>
        <p className="text-sm text-gray-600">Activity list goes here</p>
      </CardBody>
    </Card>
  ),
}

export const WithAvatar: Story = {
  render: () => (
    <Card padding="none">
      <CardHeader
        title="John Doe"
        description="Product Designer"
        avatar={
          <img
            className="h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="John Doe"
          />
        }
        className="px-6 py-4"
      />
      <CardBody>
        <p className="text-sm text-gray-600">User profile details go here</p>
      </CardBody>
    </Card>
  ),
}

export const WithAvatarAndAction: Story = {
  render: () => (
    <Card padding="none">
      <CardHeader
        title="John Doe"
        description="Product Designer at Acme Corp"
        avatar={
          <img
            className="h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="John Doe"
          />
        }
        action={
          <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
            Follow
          </button>
        }
        className="px-6 py-4"
      />
      <CardBody>
        <p className="text-sm text-gray-600">User profile details go here</p>
      </CardBody>
    </Card>
  ),
}

export const WithIconAvatar: Story = {
  render: () => (
    <Card padding="none">
      <CardHeader
        title="Analytics Dashboard"
        description="Track your performance metrics"
        avatar={
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
            <svg
              className="h-6 w-6 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
        }
        className="px-6 py-4"
      />
      <CardBody>
        <p className="text-sm text-gray-600">Dashboard content goes here</p>
      </CardBody>
    </Card>
  ),
}

export const WithMultipleActions: Story = {
  render: () => (
    <Card padding="none">
      <CardHeader
        title="Team Settings"
        description="Manage your team configuration"
        action={
          <div className="flex gap-2">
            <button className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Cancel
            </button>
            <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
              Save
            </button>
          </div>
        }
        className="px-6 py-4"
      />
      <CardBody>
        <p className="text-sm text-gray-600">Team settings form goes here</p>
      </CardBody>
    </Card>
  ),
}

export const WithCustomChildren: Story = {
  render: () => (
    <Card padding="none">
      <CardHeader className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
              <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900">Successfully Updated</h3>
              <p className="mt-1 text-sm text-gray-500">Your changes have been saved</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Close</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </CardHeader>
    </Card>
  ),
}

export const AllCombinations: Story = {
  render: () => (
    <div className="space-y-6">
      <Card padding="none">
        <CardHeader title="Title Only" className="px-6 py-4" />
        <CardBody padding="sm">
          <p className="text-xs text-gray-500">Just a title</p>
        </CardBody>
      </Card>

      <Card padding="none">
        <CardHeader
          title="Title with Description"
          description="This header has both title and description"
          className="px-6 py-4"
        />
        <CardBody padding="sm">
          <p className="text-xs text-gray-500">Title and description</p>
        </CardBody>
      </Card>

      <Card padding="none">
        <CardHeader
          title="Title with Action"
          action={
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
              Edit
            </button>
          }
          className="px-6 py-4"
        />
        <CardBody padding="sm">
          <p className="text-xs text-gray-500">Title and action</p>
        </CardBody>
      </Card>

      <Card padding="none">
        <CardHeader
          title="Title with Avatar"
          description="Product Designer"
          avatar={
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          }
          className="px-6 py-4"
        />
        <CardBody padding="sm">
          <p className="text-xs text-gray-500">Avatar, title, and description</p>
        </CardBody>
      </Card>

      <Card padding="none">
        <CardHeader
          title="Complete Header"
          description="With all features enabled"
          avatar={
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          }
          action={
            <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
              Follow
            </button>
          }
          className="px-6 py-4"
        />
        <CardBody padding="sm">
          <p className="text-xs text-gray-500">Avatar, title, description, and action</p>
        </CardBody>
      </Card>
    </div>
  ),
}

export const RealWorldProfileCard: Story = {
  render: () => (
    <Card padding="none" className="max-w-md">
      <CardHeader
        title="Sarah Anderson"
        description="Senior Product Designer"
        avatar={
          <img
            className="h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Sarah Anderson"
          />
        }
        action={
          <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
            Connect
          </button>
        }
        className="px-6 py-4"
      />
      <CardBody>
        <dl className="space-y-3">
          <div className="flex justify-between text-sm">
            <dt className="text-gray-500">Location</dt>
            <dd className="text-gray-900">San Francisco, CA</dd>
          </div>
          <div className="flex justify-between text-sm">
            <dt className="text-gray-500">Experience</dt>
            <dd className="text-gray-900">8 years</dd>
          </div>
          <div className="flex justify-between text-sm">
            <dt className="text-gray-500">Skills</dt>
            <dd className="text-gray-900">UI/UX, Figma, Prototyping</dd>
          </div>
        </dl>
      </CardBody>
    </Card>
  ),
}
