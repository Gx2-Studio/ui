import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { CardHeader } from './CardHeader'
import { CardBody } from './CardBody'
import { CardFooter } from './CardFooter'

const meta: Meta<typeof Card> = {
  title: 'Layout/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold">Card Title</h3>
        <p className="mt-2 text-sm text-gray-600">This is a default card with shadow and ring.</p>
      </div>
    ),
  },
}

export const Well: Story = {
  args: {
    variant: 'well',
    children: (
      <div>
        <h3 className="text-lg font-semibold">Well Card</h3>
        <p className="mt-2 text-sm text-gray-600">This card has a gray background.</p>
      </div>
    ),
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <div>
        <h3 className="text-lg font-semibold">Outlined Card</h3>
        <p className="mt-2 text-sm text-gray-600">This card has a border instead of shadow.</p>
      </div>
    ),
  },
}

export const WellOnGray: Story = {
  args: {
    variant: 'well-on-gray',
    children: (
      <div>
        <h3 className="text-lg font-semibold">Well on Gray Card</h3>
        <p className="mt-2 text-sm text-gray-600">This card has a white background with shadow on gray background.</p>
      </div>
    ),
  },
  parameters: {
    backgrounds: { default: 'gray' },
  },
}

export const Shadow: Story = {
  args: {
    variant: 'shadow',
    children: (
      <div>
        <h3 className="text-lg font-semibold">Shadow Card</h3>
        <p className="mt-2 text-sm text-gray-600">This card has an elevated shadow.</p>
      </div>
    ),
  },
}

export const Flat: Story = {
  args: {
    variant: 'flat',
    children: (
      <div>
        <h3 className="text-lg font-semibold">Flat Card</h3>
        <p className="mt-2 text-sm text-gray-600">This card has a simple border.</p>
      </div>
    ),
  },
}

export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: (
      <div className="p-6">
        <h3 className="text-lg font-semibold">No Padding Card</h3>
        <p className="mt-2 text-sm text-gray-600">
          This card has no default padding. Padding is manually added to this content.
        </p>
      </div>
    ),
  },
}

export const SmallPadding: Story = {
  args: {
    padding: 'sm',
    children: (
      <div>
        <h3 className="text-lg font-semibold">Small Padding</h3>
        <p className="mt-2 text-sm text-gray-600">This card has small padding (p-4).</p>
      </div>
    ),
  },
}

export const MediumPadding: Story = {
  args: {
    padding: 'md',
    children: (
      <div>
        <h3 className="text-lg font-semibold">Medium Padding</h3>
        <p className="mt-2 text-sm text-gray-600">This card has medium padding (p-6) - default.</p>
      </div>
    ),
  },
}

export const LargePadding: Story = {
  args: {
    padding: 'lg',
    children: (
      <div>
        <h3 className="text-lg font-semibold">Large Padding</h3>
        <p className="mt-2 text-sm text-gray-600">This card has large padding (p-8).</p>
      </div>
    ),
  },
}

export const EdgeToEdge: Story = {
  args: {
    edgeToEdge: true,
    padding: 'none',
    children: (
      <div>
        <img
          src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
          alt="Card"
          className="aspect-video w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold">Edge to Edge Image</h3>
          <p className="mt-2 text-sm text-gray-600">
            This card uses edge-to-edge layout for full-width content like images.
          </p>
        </div>
      </div>
    ),
  },
}

export const GrayBody: Story = {
  args: {
    bodyVariant: 'gray',
    children: (
      <div>
        <h3 className="text-lg font-semibold">Gray Body Card</h3>
        <p className="mt-2 text-sm text-gray-600">This card has a gray body background.</p>
      </div>
    ),
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card variant="default">
        <h3 className="font-semibold">Default</h3>
        <p className="mt-1 text-sm text-gray-600">Shadow and ring</p>
      </Card>
      <Card variant="well">
        <h3 className="font-semibold">Well</h3>
        <p className="mt-1 text-sm text-gray-600">Gray background</p>
      </Card>
      <Card variant="outlined">
        <h3 className="font-semibold">Outlined</h3>
        <p className="mt-1 text-sm text-gray-600">Border style</p>
      </Card>
      <Card variant="well-on-gray">
        <h3 className="font-semibold">Well on Gray</h3>
        <p className="mt-1 text-sm text-gray-600">White on gray</p>
      </Card>
      <Card variant="shadow">
        <h3 className="font-semibold">Shadow</h3>
        <p className="mt-1 text-sm text-gray-600">Elevated shadow</p>
      </Card>
      <Card variant="flat">
        <h3 className="font-semibold">Flat</h3>
        <p className="mt-1 text-sm text-gray-600">Simple border</p>
      </Card>
    </div>
  ),
}

export const AllPaddings: Story = {
  render: () => (
    <div className="space-y-6">
      <Card padding="none">
        <div className="p-2 bg-blue-50 border-2 border-blue-200 border-dashed">
          <p className="text-sm">None (p-0)</p>
        </div>
      </Card>
      <Card padding="sm">
        <div className="bg-blue-50 border-2 border-blue-200 border-dashed">
          <p className="text-sm">Small (p-4)</p>
        </div>
      </Card>
      <Card padding="md">
        <div className="bg-blue-50 border-2 border-blue-200 border-dashed">
          <p className="text-sm">Medium (p-6)</p>
        </div>
      </Card>
      <Card padding="lg">
        <div className="bg-blue-50 border-2 border-blue-200 border-dashed">
          <p className="text-sm">Large (p-8)</p>
        </div>
      </Card>
    </div>
  ),
}

export const WithComposedComponents: Story = {
  render: () => (
    <Card padding="none">
      <CardHeader
        title="Project Alpha"
        description="A comprehensive analytics dashboard"
        action={<button className="text-sm text-indigo-600 hover:text-indigo-500">Edit</button>}
        className="px-6 py-4"
      />
      <CardBody padding="md">
        <p className="text-sm text-gray-600">
          This card uses composed CardHeader, CardBody, and CardFooter components for a structured layout.
        </p>
      </CardBody>
      <CardFooter>
        <button className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Cancel
        </button>
        <button className="ml-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
          Save
        </button>
      </CardFooter>
    </Card>
  ),
}

export const ImageCard: Story = {
  render: () => (
    <Card padding="none" edgeToEdge>
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
        alt="Team collaboration"
        className="aspect-video w-full object-cover"
      />
      <div className="p-6">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime="2024-03-16" className="text-gray-500">
            Mar 16, 2024
          </time>
          <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            Article
          </span>
        </div>
        <div className="mt-3">
          <h3 className="text-lg font-semibold leading-6 text-gray-900">
            Boost your conversion rate
          </h3>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Learn how to optimize your landing pages and increase conversion rates with these proven strategies.
          </p>
        </div>
      </div>
    </Card>
  ),
}

export const DashboardCard: Story = {
  render: () => (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">Total Revenue</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">$45,231.89</p>
        </div>
        <div className="rounded-full bg-green-50 p-3">
          <svg
            className="h-6 w-6 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center text-sm">
          <span className="font-medium text-green-600">+20.1%</span>
          <span className="ml-2 text-gray-600">from last month</span>
        </div>
      </div>
    </Card>
  ),
}
