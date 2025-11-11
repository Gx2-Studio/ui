import type { Meta, StoryObj } from '@storybook/react'
import { ListContainer } from './ListContainer'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

const meta: Meta<typeof ListContainer> = {
  title: '3. Layout/ListContainer',
  component: ListContainer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ListContainer>

const SimpleListItems = [
  <div key="1" className="flex items-center justify-between">
    <div>
      <h3 className="text-sm font-medium text-gray-900">Item 1</h3>
      <p className="text-sm text-gray-500">Description for item 1</p>
    </div>
    <ChevronRightIcon className="h-5 w-5 text-gray-400" />
  </div>,
  <div key="2" className="flex items-center justify-between">
    <div>
      <h3 className="text-sm font-medium text-gray-900">Item 2</h3>
      <p className="text-sm text-gray-500">Description for item 2</p>
    </div>
    <ChevronRightIcon className="h-5 w-5 text-gray-400" />
  </div>,
  <div key="3" className="flex items-center justify-between">
    <div>
      <h3 className="text-sm font-medium text-gray-900">Item 3</h3>
      <p className="text-sm text-gray-500">Description for item 3</p>
    </div>
    <ChevronRightIcon className="h-5 w-5 text-gray-400" />
  </div>,
]

const UserListItems = [
  <div key="1" className="flex items-center gap-x-4">
    <img
      className="h-12 w-12 flex-none rounded-full bg-gray-50"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt=""
    />
    <div className="min-w-0 flex-auto">
      <p className="text-sm font-semibold leading-6 text-gray-900">Leslie Alexander</p>
      <p className="mt-1 truncate text-xs leading-5 text-gray-500">leslie.alexander@example.com</p>
    </div>
  </div>,
  <div key="2" className="flex items-center gap-x-4">
    <img
      className="h-12 w-12 flex-none rounded-full bg-gray-50"
      src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt=""
    />
    <div className="min-w-0 flex-auto">
      <p className="text-sm font-semibold leading-6 text-gray-900">Michael Foster</p>
      <p className="mt-1 truncate text-xs leading-5 text-gray-500">michael.foster@example.com</p>
    </div>
  </div>,
  <div key="3" className="flex items-center gap-x-4">
    <img
      className="h-12 w-12 flex-none rounded-full bg-gray-50"
      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt=""
    />
    <div className="min-w-0 flex-auto">
      <p className="text-sm font-semibold leading-6 text-gray-900">Dries Vincent</p>
      <p className="mt-1 truncate text-xs leading-5 text-gray-500">dries.vincent@example.com</p>
    </div>
  </div>,
]

export const Simple: Story = {
  args: {
    variant: 'simple',
    items: SimpleListItems,
  },
}

export const Separate: Story = {
  args: {
    variant: 'separate',
    items: SimpleListItems,
  },
}

export const Flat: Story = {
  args: {
    variant: 'flat',
    items: SimpleListItems,
  },
}

export const Card: Story = {
  args: {
    variant: 'card',
    items: SimpleListItems,
  },
}

export const SmallSpacing: Story = {
  args: {
    variant: 'simple',
    spacing: 'sm',
    items: SimpleListItems,
  },
}

export const MediumSpacing: Story = {
  args: {
    variant: 'simple',
    spacing: 'md',
    items: SimpleListItems,
  },
}

export const LargeSpacing: Story = {
  args: {
    variant: 'simple',
    spacing: 'lg',
    items: SimpleListItems,
  },
}

export const FullWidthMobile: Story = {
  args: {
    variant: 'simple',
    fullWidthMobile: true,
    items: SimpleListItems,
  },
}

export const AsOrderedList: Story = {
  args: {
    variant: 'simple',
    as: 'ol',
    items: SimpleListItems.map((item, index) => (
      <div key={index} className="flex items-start gap-3">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-600">
          {index + 1}
        </span>
        {item}
      </div>
    )),
  },
}

export const AsDiv: Story = {
  args: {
    variant: 'simple',
    as: 'div',
    items: SimpleListItems,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">Simple</h3>
        <ListContainer variant="simple" items={SimpleListItems} />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">Separate</h3>
        <ListContainer variant="separate" items={SimpleListItems} />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">Flat</h3>
        <ListContainer variant="flat" items={SimpleListItems} />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">Card</h3>
        <ListContainer variant="card" items={SimpleListItems} />
      </div>
    </div>
  ),
}

export const AllSpacings: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">Small Spacing</h3>
        <ListContainer variant="simple" spacing="sm" items={SimpleListItems} />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">Medium Spacing (Default)</h3>
        <ListContainer variant="simple" spacing="md" items={SimpleListItems} />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">Large Spacing</h3>
        <ListContainer variant="simple" spacing="lg" items={SimpleListItems} />
      </div>
    </div>
  ),
}

export const WithUsers: Story = {
  args: {
    variant: 'simple',
    items: UserListItems,
  },
}

export const UsersInCards: Story = {
  args: {
    variant: 'separate',
    items: UserListItems,
  },
}

export const ProjectsList: Story = {
  render: () => (
    <ListContainer
      variant="simple"
      items={[
        <div key="1" className="flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
              <span className="text-sm font-semibold text-indigo-600">P1</span>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Project Alpha</h3>
              <p className="text-sm text-gray-500">Last updated 2 hours ago</p>
            </div>
          </div>
          <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            Active
          </span>
        </div>,
        <div key="2" className="flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
              <span className="text-sm font-semibold text-purple-600">P2</span>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Project Beta</h3>
              <p className="text-sm text-gray-500">Last updated yesterday</p>
            </div>
          </div>
          <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20">
            In Progress
          </span>
        </div>,
        <div key="3" className="flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
              <span className="text-sm font-semibold text-blue-600">P3</span>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Project Gamma</h3>
              <p className="text-sm text-gray-500">Last updated 3 days ago</p>
            </div>
          </div>
          <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20">
            Completed
          </span>
        </div>,
      ]}
    />
  ),
}

export const NotificationsList: Story = {
  render: () => (
    <ListContainer
      variant="flat"
      spacing="md"
      items={[
        <div key="1" className="flex gap-x-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
            <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">New comment on your post</p>
            <p className="mt-1 text-sm text-gray-500">Sarah commented: "Great work!"</p>
            <p className="mt-1 text-xs text-gray-400">2 hours ago</p>
          </div>
        </div>,
        <div key="2" className="flex gap-x-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
            <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Project completed</p>
            <p className="mt-1 text-sm text-gray-500">Project Alpha has been marked as complete</p>
            <p className="mt-1 text-xs text-gray-400">5 hours ago</p>
          </div>
        </div>,
        <div key="3" className="flex gap-x-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
            <svg className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">New team member</p>
            <p className="mt-1 text-sm text-gray-500">John Doe joined your team</p>
            <p className="mt-1 text-xs text-gray-400">1 day ago</p>
          </div>
        </div>,
      ]}
    />
  ),
}

export const ActivityFeed: Story = {
  render: () => (
    <div className="mx-auto max-w-2xl">
      <h2 className="mb-6 text-lg font-semibold text-gray-900">Recent Activity</h2>
      <ListContainer
        variant="simple"
        spacing="lg"
        items={[
          <div key="1" className="relative flex gap-x-4">
            <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
              <div className="w-px bg-gray-200" />
            </div>
            <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
              <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
            </div>
            <div className="flex-auto">
              <p className="text-sm leading-6 text-gray-900">
                <span className="font-semibold">Leslie Alexander</span> created a new project
              </p>
              <time className="text-xs leading-5 text-gray-500">2 hours ago</time>
            </div>
          </div>,
          <div key="2" className="relative flex gap-x-4">
            <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
              <div className="w-px bg-gray-200" />
            </div>
            <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
              <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
            </div>
            <div className="flex-auto">
              <p className="text-sm leading-6 text-gray-900">
                <span className="font-semibold">Michael Foster</span> completed task
              </p>
              <time className="text-xs leading-5 text-gray-500">5 hours ago</time>
            </div>
          </div>,
          <div key="3" className="relative flex gap-x-4">
            <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
              <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
            </div>
            <div className="flex-auto">
              <p className="text-sm leading-6 text-gray-900">
                <span className="font-semibold">Dries Vincent</span> left a comment
              </p>
              <time className="text-xs leading-5 text-gray-500">1 day ago</time>
            </div>
          </div>,
        ]}
      />
    </div>
  ),
}

export const ClickableItems: Story = {
  render: () => (
    <ListContainer
      variant="separate"
      items={[
        <a
          key="1"
          href="#"
          className="block rounded-lg transition hover:bg-gray-50"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Clickable Item 1</h3>
              <p className="text-sm text-gray-500">Click to view details</p>
            </div>
            <ChevronRightIcon className="h-5 w-5 text-gray-400" />
          </div>
        </a>,
        <a
          key="2"
          href="#"
          className="block rounded-lg transition hover:bg-gray-50"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Clickable Item 2</h3>
              <p className="text-sm text-gray-500">Click to view details</p>
            </div>
            <ChevronRightIcon className="h-5 w-5 text-gray-400" />
          </div>
        </a>,
        <a
          key="3"
          href="#"
          className="block rounded-lg transition hover:bg-gray-50"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Clickable Item 3</h3>
              <p className="text-sm text-gray-500">Click to view details</p>
            </div>
            <ChevronRightIcon className="h-5 w-5 text-gray-400" />
          </div>
        </a>,
      ]}
    />
  ),
}
