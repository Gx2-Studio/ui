import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './Divider'
import { PlusIcon, StarIcon } from '@heroicons/react/20/solid'

const meta: Meta<typeof Divider> = {
  title: '3. Layout/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Divider>

export const Simple: Story = {
  render: () => (
    <div>
      <p className="text-sm text-gray-600">Content above divider</p>
      <Divider variant="simple" />
      <p className="text-sm text-gray-600">Content below divider</p>
    </div>
  ),
}

export const WithTitle: Story = {
  render: () => (
    <div>
      <p className="text-sm text-gray-600">Content above divider</p>
      <Divider variant="with-title" title="Continue" />
      <p className="text-sm text-gray-600">Content below divider</p>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div>
      <p className="text-sm text-gray-600">Content above divider</p>
      <Divider variant="with-label" label="or" />
      <p className="text-sm text-gray-600">Content below divider</p>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div>
      <p className="text-sm text-gray-600">Content above divider</p>
      <Divider
        variant="with-icon"
        icon={<StarIcon className="h-5 w-5 text-gray-400" />}
      />
      <p className="text-sm text-gray-600">Content below divider</p>
    </div>
  ),
}

export const WithButton: Story = {
  render: () => (
    <div>
      <p className="text-sm text-gray-600">Content above divider</p>
      <Divider
        variant="with-button"
        button={
          <button className="inline-flex items-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
            <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" />
            Add
          </button>
        }
      />
      <p className="text-sm text-gray-600">Content below divider</p>
    </div>
  ),
}

export const PositionLeft: Story = {
  render: () => (
    <div>
      <p className="text-sm text-gray-600">Content above divider</p>
      <Divider variant="with-title" title="Projects" position="left" />
      <p className="text-sm text-gray-600">Content below divider</p>
    </div>
  ),
}

export const PositionCenter: Story = {
  render: () => (
    <div>
      <p className="text-sm text-gray-600">Content above divider</p>
      <Divider variant="with-label" label="or continue with" position="center" />
      <p className="text-sm text-gray-600">Content below divider</p>
    </div>
  ),
}

export const PositionRight: Story = {
  render: () => (
    <div>
      <p className="text-sm text-gray-600">Content above divider</p>
      <Divider variant="with-title" title="Settings" position="right" />
      <p className="text-sm text-gray-600">Content below divider</p>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <span className="text-sm text-gray-600">Left content</span>
      <Divider orientation="vertical" className="h-12" />
      <span className="text-sm text-gray-600">Right content</span>
    </div>
  ),
}

export const WithLabelAndIcon: Story = {
  render: () => (
    <div>
      <p className="text-sm text-gray-600">Content above divider</p>
      <Divider
        variant="with-label"
        label="Featured"
        icon={<StarIcon className="h-5 w-5 text-yellow-400" />}
      />
      <p className="text-sm text-gray-600">Content below divider</p>
    </div>
  ),
}

export const WithTitleLeftAligned: Story = {
  render: () => (
    <div>
      <p className="text-sm text-gray-600">Content above divider</p>
      <Divider
        variant="with-title"
        title="Team Members"
        position="left"
      />
      <p className="text-sm text-gray-600">Content below divider</p>
    </div>
  ),
}

export const AllPositions: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">Position: Left</h3>
        <Divider variant="with-title" title="Projects" position="left" />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">Position: Center (Default)</h3>
        <Divider variant="with-label" label="or" position="center" />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">Position: Right</h3>
        <Divider variant="with-title" title="Settings" position="right" />
      </div>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">Simple</h3>
        <Divider variant="simple" />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">With Title</h3>
        <Divider variant="with-title" title="Continue" />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">With Label</h3>
        <Divider variant="with-label" label="or" />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">With Icon</h3>
        <Divider
          variant="with-icon"
          icon={<StarIcon className="h-5 w-5 text-gray-400" />}
        />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">With Button</h3>
        <Divider
          variant="with-button"
          button={
            <button className="inline-flex items-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
              <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" />
              Add
            </button>
          }
        />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold text-gray-500">Vertical</h3>
        <div className="flex items-center gap-6">
          <span className="text-sm text-gray-600">Left</span>
          <Divider orientation="vertical" className="h-12" />
          <span className="text-sm text-gray-600">Right</span>
        </div>
      </div>
    </div>
  ),
}

export const LoginFormExample: Story = {
  render: () => (
    <div className="mx-auto max-w-sm space-y-6 rounded-lg bg-white p-8 shadow-sm ring-1 ring-gray-950/5">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Sign in to your account</h2>
        <p className="mt-1 text-sm text-gray-600">Welcome back! Please enter your details.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <button className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
          Sign in
        </button>
      </div>

      <Divider variant="with-label" label="or continue with" />

      <div className="grid grid-cols-2 gap-3">
        <button className="inline-flex justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Google
        </button>
        <button className="inline-flex justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          GitHub
        </button>
      </div>
    </div>
  ),
}

export const ContentSections: Story = {
  render: () => (
    <div className="mx-auto max-w-2xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Article Title</h2>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <Divider variant="with-icon" icon={<StarIcon className="h-5 w-5 text-gray-400" />} />

      <div>
        <h3 className="text-lg font-semibold text-gray-900">Section 1</h3>
        <p className="mt-2 text-gray-600">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
      </div>

      <Divider variant="simple" />

      <div>
        <h3 className="text-lg font-semibold text-gray-900">Section 2</h3>
        <p className="mt-2 text-gray-600">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur.
        </p>
      </div>
    </div>
  ),
}

export const VerticalNavigation: Story = {
  render: () => (
    <nav className="flex items-center gap-6 rounded-lg bg-white p-4 shadow-sm">
      <a href="#" className="text-sm font-medium text-gray-900 hover:text-indigo-600">
        Dashboard
      </a>
      <Divider orientation="vertical" className="h-6" />
      <a href="#" className="text-sm font-medium text-gray-900 hover:text-indigo-600">
        Projects
      </a>
      <Divider orientation="vertical" className="h-6" />
      <a href="#" className="text-sm font-medium text-gray-900 hover:text-indigo-600">
        Team
      </a>
      <Divider orientation="vertical" className="h-6" />
      <a href="#" className="text-sm font-medium text-gray-900 hover:text-indigo-600">
        Settings
      </a>
    </nav>
  ),
}

export const AddMoreItemsExample: Story = {
  render: () => (
    <div className="mx-auto max-w-2xl">
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-lg border border-gray-200 bg-white p-4">
            <h4 className="font-medium text-gray-900">Item {i}</h4>
            <p className="mt-1 text-sm text-gray-600">Item description goes here</p>
          </div>
        ))}
      </div>

      <Divider
        variant="with-button"
        button={
          <button className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" />
            Add More Items
          </button>
        }
        className="my-8"
      />

      <p className="text-center text-sm text-gray-500">No more items to display</p>
    </div>
  ),
}
