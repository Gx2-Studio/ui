import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs } from './Breadcrumbs'
import { BreadcrumbItem } from '../../utils/types'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Breadcrumbs>

const basicItems: BreadcrumbItem[] = [
  { label: 'Projects', href: '#' },
  { label: 'Project Nero', href: '#' },
  { label: 'Settings', current: true },
]

const longItems: BreadcrumbItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Categories', href: '#' },
  { label: 'Electronics', href: '#' },
  { label: 'Computers', href: '#' },
  { label: 'Laptops', href: '#' },
  { label: 'Gaming Laptops', current: true },
]

const shortItems: BreadcrumbItem[] = [
  { label: 'Dashboard', href: '#' },
  { label: 'Settings', current: true },
]

export const Simple: Story = {
  args: {
    items: basicItems,
    variant: 'simple',
    size: 'md',
    showHome: true,
    separator: 'chevron',
  },
}

export const Contained: Story = {
  args: {
    items: basicItems,
    variant: 'contained',
    size: 'md',
    showHome: true,
    separator: 'chevron',
  },
}

export const FullWidth: Story = {
  args: {
    items: basicItems,
    variant: 'fullWidth',
    size: 'md',
    showHome: true,
    separator: 'chevron',
  },
}

export const ChevronSeparator: Story = {
  args: {
    items: basicItems,
    variant: 'simple',
    size: 'md',
    showHome: true,
    separator: 'chevron',
  },
}

export const SlashSeparator: Story = {
  args: {
    items: basicItems,
    variant: 'simple',
    size: 'md',
    showHome: true,
    separator: 'slash',
  },
}

export const ArrowSeparator: Story = {
  args: {
    items: basicItems,
    variant: 'simple',
    size: 'md',
    showHome: true,
    separator: 'arrow',
  },
}

export const SmallSize: Story = {
  args: {
    items: basicItems,
    variant: 'simple',
    size: 'sm',
    showHome: true,
    separator: 'chevron',
  },
}

export const MediumSize: Story = {
  args: {
    items: basicItems,
    variant: 'simple',
    size: 'md',
    showHome: true,
    separator: 'chevron',
  },
}

export const LargeSize: Story = {
  args: {
    items: basicItems,
    variant: 'simple',
    size: 'lg',
    showHome: true,
    separator: 'chevron',
  },
}

export const WithHome: Story = {
  args: {
    items: basicItems,
    variant: 'simple',
    size: 'md',
    showHome: true,
    separator: 'chevron',
  },
}

export const WithoutHome: Story = {
  args: {
    items: basicItems,
    variant: 'simple',
    size: 'md',
    showHome: false,
    separator: 'chevron',
  },
}

export const LongBreadcrumb: Story = {
  args: {
    items: longItems,
    variant: 'simple',
    size: 'md',
    showHome: true,
    separator: 'chevron',
  },
}

export const ShortBreadcrumb: Story = {
  args: {
    items: shortItems,
    variant: 'simple',
    size: 'md',
    showHome: true,
    separator: 'chevron',
  },
}

export const WithClickHandlers: Story = {
  args: {
    items: [
      { label: 'Projects', onClick: () => alert('Clicked Projects') },
      { label: 'Project Nero', onClick: () => alert('Clicked Project Nero') },
      { label: 'Settings', current: true },
    ],
    variant: 'simple',
    size: 'md',
    showHome: true,
    onHomeClick: () => alert('Clicked Home'),
    separator: 'chevron',
  },
}

export const CustomHomeHref: Story = {
  args: {
    items: basicItems,
    variant: 'simple',
    size: 'md',
    showHome: true,
    homeHref: '/dashboard',
    separator: 'chevron',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Simple</h3>
        <Breadcrumbs items={basicItems} variant="simple" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Contained</h3>
        <Breadcrumbs items={basicItems} variant="contained" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Full Width</h3>
        <Breadcrumbs items={basicItems} variant="fullWidth" />
      </div>
    </div>
  ),
}

export const AllSeparators: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Chevron Separator</h3>
        <Breadcrumbs items={basicItems} variant="simple" separator="chevron" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Slash Separator</h3>
        <Breadcrumbs items={basicItems} variant="simple" separator="slash" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Arrow Separator</h3>
        <Breadcrumbs items={basicItems} variant="simple" separator="arrow" />
      </div>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Small</h3>
        <Breadcrumbs items={basicItems} variant="simple" size="sm" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Medium</h3>
        <Breadcrumbs items={basicItems} variant="simple" size="md" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Large</h3>
        <Breadcrumbs items={basicItems} variant="simple" size="lg" />
      </div>
    </div>
  ),
}

export const RealWorldExample: Story = {
  render: () => (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow p-6">
        <Breadcrumbs
          items={[
            { label: 'Dashboard', href: '#' },
            { label: 'Projects', href: '#' },
            { label: 'Project Alpha', href: '#' },
            { label: 'Tasks', href: '#' },
            { label: 'Task #1234', current: true },
          ]}
          variant="simple"
          size="md"
          showHome={true}
          separator="chevron"
        />
        <div className="mt-6">
          <h1 className="text-3xl font-bold">Task #1234</h1>
          <p className="text-gray-600 mt-2">Complete the user authentication module</p>
        </div>
      </div>
    </div>
  ),
}
