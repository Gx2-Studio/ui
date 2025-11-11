import type { Meta, StoryObj } from '@storybook/react'
import { CardFooter } from './CardFooter'
import { Card } from './Card'
import { CardHeader } from './CardHeader'
import { CardBody } from './CardBody'

const meta: Meta<typeof CardFooter> = {
  title: '3. Layout/CardFooter',
  component: CardFooter,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CardFooter>

const ActionButtons = () => (
  <>
    <button className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
      Cancel
    </button>
    <button className="ml-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
      Save
    </button>
  </>
)

export const Default: Story = {
  render: () => (
    <Card padding="none">
      <CardBody>
        <p className="text-sm text-gray-600">Card content goes here</p>
      </CardBody>
      <CardFooter>
        <ActionButtons />
      </CardFooter>
    </Card>
  ),
}

export const Gray: Story = {
  render: () => (
    <Card padding="none">
      <CardBody>
        <p className="text-sm text-gray-600">Card content goes here</p>
      </CardBody>
      <CardFooter variant="gray">
        <ActionButtons />
      </CardFooter>
    </Card>
  ),
}

export const JustifyStart: Story = {
  render: () => (
    <Card padding="none">
      <CardBody>
        <p className="text-sm text-gray-600">Footer buttons aligned to start</p>
      </CardBody>
      <CardFooter justify="start">
        <ActionButtons />
      </CardFooter>
    </Card>
  ),
}

export const JustifyCenter: Story = {
  render: () => (
    <Card padding="none">
      <CardBody>
        <p className="text-sm text-gray-600">Footer buttons aligned to center</p>
      </CardBody>
      <CardFooter justify="center">
        <ActionButtons />
      </CardFooter>
    </Card>
  ),
}

export const JustifyEnd: Story = {
  render: () => (
    <Card padding="none">
      <CardBody>
        <p className="text-sm text-gray-600">Footer buttons aligned to end (default)</p>
      </CardBody>
      <CardFooter justify="end">
        <ActionButtons />
      </CardFooter>
    </Card>
  ),
}

export const JustifyBetween: Story = {
  render: () => (
    <Card padding="none">
      <CardBody>
        <p className="text-sm text-gray-600">Footer with space between elements</p>
      </CardBody>
      <CardFooter justify="between">
        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          Delete
        </button>
        <div className="flex gap-3">
          <button className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Cancel
          </button>
          <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
            Save
          </button>
        </div>
      </CardFooter>
    </Card>
  ),
}

export const AllJustifyOptions: Story = {
  render: () => (
    <div className="space-y-6">
      <Card padding="none">
        <CardBody padding="sm">
          <p className="text-sm font-medium">Justify Start</p>
        </CardBody>
        <CardFooter justify="start">
          <ActionButtons />
        </CardFooter>
      </Card>

      <Card padding="none">
        <CardBody padding="sm">
          <p className="text-sm font-medium">Justify Center</p>
        </CardBody>
        <CardFooter justify="center">
          <ActionButtons />
        </CardFooter>
      </Card>

      <Card padding="none">
        <CardBody padding="sm">
          <p className="text-sm font-medium">Justify End (Default)</p>
        </CardBody>
        <CardFooter justify="end">
          <ActionButtons />
        </CardFooter>
      </Card>

      <Card padding="none">
        <CardBody padding="sm">
          <p className="text-sm font-medium">Justify Between</p>
        </CardBody>
        <CardFooter justify="between">
          <button className="text-sm font-medium text-red-600 hover:text-red-500">
            Delete
          </button>
          <ActionButtons />
        </CardFooter>
      </Card>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <Card padding="none">
        <CardBody padding="sm">
          <p className="text-sm font-medium">Default Variant (White)</p>
        </CardBody>
        <CardFooter variant="default">
          <ActionButtons />
        </CardFooter>
      </Card>

      <Card padding="none">
        <CardBody padding="sm">
          <p className="text-sm font-medium">Gray Variant</p>
        </CardBody>
        <CardFooter variant="gray">
          <ActionButtons />
        </CardFooter>
      </Card>
    </div>
  ),
}

export const SingleButton: Story = {
  render: () => (
    <Card padding="none">
      <CardBody>
        <p className="text-sm text-gray-600">This footer has only one button</p>
      </CardBody>
      <CardFooter>
        <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
          Continue
        </button>
      </CardFooter>
    </Card>
  ),
}

export const MultipleButtons: Story = {
  render: () => (
    <Card padding="none">
      <CardBody>
        <p className="text-sm text-gray-600">This footer has multiple action buttons</p>
      </CardBody>
      <CardFooter>
        <button className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Back
        </button>
        <button className="ml-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Save Draft
        </button>
        <button className="ml-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
          Publish
        </button>
      </CardFooter>
    </Card>
  ),
}

export const WithLinks: Story = {
  render: () => (
    <Card padding="none">
      <CardBody>
        <p className="text-sm text-gray-600">Footer with text links</p>
      </CardBody>
      <CardFooter justify="between">
        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          Learn more
        </a>
        <div className="flex gap-4">
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Privacy
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Terms
          </a>
        </div>
      </CardFooter>
    </Card>
  ),
}

export const FormExample: Story = {
  render: () => (
    <Card padding="none">
      <CardHeader
        title="Edit Profile"
        description="Update your personal information"
        className="px-6 py-4"
      />
      <CardBody>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              defaultValue="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              defaultValue="john.doe@example.com"
            />
          </div>
        </div>
      </CardBody>
      <CardFooter variant="gray" justify="between">
        <button className="text-sm font-medium text-red-600 hover:text-red-500">
          Delete Account
        </button>
        <div className="flex gap-3">
          <button className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Cancel
          </button>
          <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
            Save Changes
          </button>
        </div>
      </CardFooter>
    </Card>
  ),
}

export const ConfirmationDialog: Story = {
  render: () => (
    <Card padding="none" className="max-w-lg">
      <CardBody padding="lg">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            <svg
              className="h-6 w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <h3 className="text-base font-semibold leading-6 text-gray-900">Delete account</h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Are you sure you want to delete your account? All of your data will be permanently
                removed. This action cannot be undone.
              </p>
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter variant="gray" justify="end">
        <button className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Cancel
        </button>
        <button className="ml-3 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500">
          Delete
        </button>
      </CardFooter>
    </Card>
  ),
}
