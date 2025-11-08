import type { Meta, StoryObj } from '@storybook/react'
import { CardBody } from './CardBody'
import { Card } from './Card'
import { CardHeader } from './CardHeader'

const meta: Meta<typeof CardBody> = {
  title: 'Layout/CardBody',
  component: CardBody,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CardBody>

export const Default: Story = {
  render: () => (
    <Card padding="none">
      <CardBody>
        <h3 className="text-lg font-semibold">Default Card Body</h3>
        <p className="mt-2 text-sm text-gray-600">
          This is a default card body with white background and medium padding.
        </p>
      </CardBody>
    </Card>
  ),
}

export const Gray: Story = {
  render: () => (
    <Card padding="none">
      <CardBody variant="gray">
        <h3 className="text-lg font-semibold">Gray Card Body</h3>
        <p className="mt-2 text-sm text-gray-600">
          This card body has a gray background.
        </p>
      </CardBody>
    </Card>
  ),
}

export const NoPadding: Story = {
  render: () => (
    <Card padding="none">
      <CardBody padding="none">
        <div className="p-4 border-2 border-dashed border-blue-200 bg-blue-50">
          <p className="text-sm">
            This card body has no padding. Custom padding is applied to this inner div.
          </p>
        </div>
      </CardBody>
    </Card>
  ),
}

export const SmallPadding: Story = {
  render: () => (
    <Card padding="none">
      <CardBody padding="sm">
        <div className="border-2 border-dashed border-blue-200 bg-blue-50">
          <p className="text-sm">Small padding (p-4)</p>
        </div>
      </CardBody>
    </Card>
  ),
}

export const MediumPadding: Story = {
  render: () => (
    <Card padding="none">
      <CardBody padding="md">
        <div className="border-2 border-dashed border-blue-200 bg-blue-50">
          <p className="text-sm">Medium padding (p-6) - default</p>
        </div>
      </CardBody>
    </Card>
  ),
}

export const LargePadding: Story = {
  render: () => (
    <Card padding="none">
      <CardBody padding="lg">
        <div className="border-2 border-dashed border-blue-200 bg-blue-50">
          <p className="text-sm">Large padding (p-8)</p>
        </div>
      </CardBody>
    </Card>
  ),
}

export const AllPaddings: Story = {
  render: () => (
    <div className="space-y-6">
      <Card padding="none">
        <CardBody padding="none">
          <div className="p-2 border-2 border-dashed border-blue-200 bg-blue-50">
            <p className="text-sm font-medium">None (no padding)</p>
          </div>
        </CardBody>
      </Card>
      <Card padding="none">
        <CardBody padding="sm">
          <div className="border-2 border-dashed border-blue-200 bg-blue-50">
            <p className="text-sm font-medium">Small (p-4)</p>
          </div>
        </CardBody>
      </Card>
      <Card padding="none">
        <CardBody padding="md">
          <div className="border-2 border-dashed border-blue-200 bg-blue-50">
            <p className="text-sm font-medium">Medium (p-6)</p>
          </div>
        </CardBody>
      </Card>
      <Card padding="none">
        <CardBody padding="lg">
          <div className="border-2 border-dashed border-blue-200 bg-blue-50">
            <p className="text-sm font-medium">Large (p-8)</p>
          </div>
        </CardBody>
      </Card>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <Card padding="none">
        <CardBody variant="default">
          <h3 className="font-semibold">Default Variant</h3>
          <p className="mt-1 text-sm text-gray-600">White background</p>
        </CardBody>
      </Card>
      <Card padding="none">
        <CardBody variant="gray">
          <h3 className="font-semibold">Gray Variant</h3>
          <p className="mt-1 text-sm text-gray-600">Gray background</p>
        </CardBody>
      </Card>
    </div>
  ),
}

export const WithHeader: Story = {
  render: () => (
    <Card padding="none">
      <CardHeader
        title="Project Settings"
        description="Manage your project configuration"
        className="px-6 py-4"
      />
      <CardBody>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Project Name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter project name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter project description"
            />
          </div>
        </div>
      </CardBody>
    </Card>
  ),
}

export const GrayWithContent: Story = {
  render: () => (
    <Card padding="none">
      <CardHeader
        title="System Information"
        description="View your system details"
        className="px-6 py-4"
      />
      <CardBody variant="gray">
        <dl className="space-y-3">
          <div className="flex justify-between">
            <dt className="text-sm font-medium text-gray-500">Operating System</dt>
            <dd className="text-sm text-gray-900">macOS Sonoma 14.2</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-sm font-medium text-gray-500">Processor</dt>
            <dd className="text-sm text-gray-900">Apple M2 Pro</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-sm font-medium text-gray-500">Memory</dt>
            <dd className="text-sm text-gray-900">32 GB</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-sm font-medium text-gray-500">Storage</dt>
            <dd className="text-sm text-gray-900">512 GB SSD</dd>
          </div>
        </dl>
      </CardBody>
    </Card>
  ),
}

export const MultipleBodySections: Story = {
  render: () => (
    <Card padding="none">
      <CardHeader
        title="Account Overview"
        description="Your account details and statistics"
        className="px-6 py-4"
      />
      <CardBody variant="default">
        <h4 className="text-sm font-medium text-gray-900">Personal Information</h4>
        <dl className="mt-3 space-y-2">
          <div className="flex justify-between text-sm">
            <dt className="text-gray-500">Email</dt>
            <dd className="text-gray-900">john.doe@example.com</dd>
          </div>
          <div className="flex justify-between text-sm">
            <dt className="text-gray-500">Phone</dt>
            <dd className="text-gray-900">+1 (555) 123-4567</dd>
          </div>
        </dl>
      </CardBody>
      <CardBody variant="gray">
        <h4 className="text-sm font-medium text-gray-900">Usage Statistics</h4>
        <dl className="mt-3 space-y-2">
          <div className="flex justify-between text-sm">
            <dt className="text-gray-500">Projects</dt>
            <dd className="text-gray-900">12 active</dd>
          </div>
          <div className="flex justify-between text-sm">
            <dt className="text-gray-500">Storage Used</dt>
            <dd className="text-gray-900">4.2 GB / 10 GB</dd>
          </div>
        </dl>
      </CardBody>
    </Card>
  ),
}

export const FormExample: Story = {
  render: () => (
    <Card padding="none">
      <CardHeader
        title="Contact Form"
        description="Send us a message"
        className="px-6 py-4"
      />
      <CardBody padding="lg">
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                id="first-name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input
                type="text"
                id="last-name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </form>
      </CardBody>
    </Card>
  ),
}
