import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabItem } from './Tabs'
import { HomeIcon, UserGroupIcon, FolderIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tabs>

const basicTabs: TabItem[] = [
  { name: 'My Account' },
  { name: 'Company' },
  { name: 'Team Members' },
  { name: 'Billing' },
]

const tabsWithContent: TabItem[] = [
  {
    name: 'My Account',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">My Account</h3>
        <p className="text-gray-600">Account settings and preferences.</p>
      </div>
    ),
  },
  {
    name: 'Company',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Company</h3>
        <p className="text-gray-600">Company profile and information.</p>
      </div>
    ),
  },
  {
    name: 'Team Members',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Team Members</h3>
        <p className="text-gray-600">Manage your team members.</p>
      </div>
    ),
  },
]

const tabsWithIcons: TabItem[] = [
  { name: 'Dashboard', icon: <HomeIcon className="h-4 w-4" /> },
  { name: 'Team', icon: <UserGroupIcon className="h-4 w-4" /> },
  { name: 'Projects', icon: <FolderIcon className="h-4 w-4" /> },
]

const tabsWithCounts: TabItem[] = [
  { name: 'All', count: 52 },
  { name: 'Active', count: 12 },
  { name: 'Archived', count: 40 },
]

const tabsWithDisabled: TabItem[] = [
  { name: 'My Account' },
  { name: 'Company' },
  { name: 'Team Members', disabled: true },
  { name: 'Billing' },
]

export const Underline: Story = {
  args: {
    tabs: basicTabs,
    variant: 'underline',
    size: 'md',
  },
}

export const Pills: Story = {
  args: {
    tabs: basicTabs,
    variant: 'pills',
    size: 'md',
  },
}

export const Bordered: Story = {
  args: {
    tabs: basicTabs,
    variant: 'bordered',
    size: 'md',
  },
}

export const SimpleDark: Story = {
  args: {
    tabs: basicTabs,
    variant: 'simple_dark',
    size: 'md',
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-900 p-6 rounded-lg">
        <Story />
      </div>
    ),
  ],
}

export const PillsGray: Story = {
  args: {
    tabs: basicTabs,
    variant: 'pills_gray',
    size: 'md',
  },
}

export const PillsBrand: Story = {
  args: {
    tabs: basicTabs,
    variant: 'pills_brand',
    size: 'md',
  },
}

export const BarUnderline: Story = {
  args: {
    tabs: basicTabs,
    variant: 'bar_underline',
    size: 'md',
  },
}

export const FullWidth: Story = {
  args: {
    tabs: basicTabs.slice(0, 4),
    variant: 'full_width',
    size: 'md',
  },
}

export const SmallSize: Story = {
  args: {
    tabs: basicTabs,
    variant: 'underline',
    size: 'sm',
  },
}

export const MediumSize: Story = {
  args: {
    tabs: basicTabs,
    variant: 'underline',
    size: 'md',
  },
}

export const LargeSize: Story = {
  args: {
    tabs: basicTabs,
    variant: 'underline',
    size: 'lg',
  },
}

export const WithContent: Story = {
  args: {
    tabs: tabsWithContent,
    variant: 'underline',
    size: 'md',
  },
}

export const WithIcons: Story = {
  args: {
    tabs: tabsWithIcons,
    variant: 'underline',
    size: 'md',
  },
}

export const WithCounts: Story = {
  args: {
    tabs: tabsWithCounts,
    variant: 'pills',
    size: 'md',
  },
}

export const WithDisabled: Story = {
  args: {
    tabs: tabsWithDisabled,
    variant: 'underline',
    size: 'md',
  },
}

export const WithMobileSelect: Story = {
  args: {
    tabs: basicTabs,
    variant: 'underline',
    size: 'md',
    showMobileSelect: true,
  },
}

export const WithoutMobileSelect: Story = {
  args: {
    tabs: basicTabs,
    variant: 'underline',
    size: 'md',
    showMobileSelect: false,
  },
}

export const Interactive: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('My Account')

    return (
      <div>
        <p className="mb-4 text-sm text-gray-600">Active tab: {activeTab}</p>
        <Tabs
          tabs={basicTabs}
          variant="underline"
          size="md"
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    )
  },
}

export const InteractiveWithContent: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState(tabsWithContent[0].name)

    return (
      <Tabs
        tabs={tabsWithContent}
        variant="underline"
        size="md"
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    )
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Underline</h3>
        <Tabs tabs={basicTabs} variant="underline" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Pills</h3>
        <Tabs tabs={basicTabs} variant="pills" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Bordered</h3>
        <Tabs tabs={basicTabs} variant="bordered" />
      </div>

      <div className="bg-gray-900 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-white">Simple Dark</h3>
        <Tabs tabs={basicTabs} variant="simple_dark" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Pills Gray</h3>
        <Tabs tabs={basicTabs} variant="pills_gray" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Pills Brand</h3>
        <Tabs tabs={basicTabs} variant="pills_brand" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Bar Underline</h3>
        <Tabs tabs={basicTabs} variant="bar_underline" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Full Width</h3>
        <Tabs tabs={basicTabs.slice(0, 4)} variant="full_width" />
      </div>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Small</h3>
        <Tabs tabs={basicTabs} variant="underline" size="sm" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Medium</h3>
        <Tabs tabs={basicTabs} variant="underline" size="md" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Large</h3>
        <Tabs tabs={basicTabs} variant="underline" size="lg" />
      </div>
    </div>
  ),
}

export const RealWorldExample: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('Overview')

    const projectTabs: TabItem[] = [
      {
        name: 'Overview',
        content: (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-gray-600 mb-4">Track your project progress and key metrics.</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold">24</div>
                <div className="text-sm text-gray-600">Tasks</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold">8</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold">67%</div>
                <div className="text-sm text-gray-600">Complete</div>
              </div>
            </div>
          </div>
        ),
      },
      {
        name: 'Tasks',
        count: 24,
        content: (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Project Tasks</h2>
            <p className="text-gray-600">View and manage all project tasks.</p>
          </div>
        ),
      },
      {
        name: 'Team',
        count: 8,
        content: (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Team Members</h2>
            <p className="text-gray-600">Manage your team members and permissions.</p>
          </div>
        ),
      },
      {
        name: 'Settings',
        content: (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Project Settings</h2>
            <p className="text-gray-600">Configure project settings and preferences.</p>
          </div>
        ),
      },
    ]

    return (
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow">
          <Tabs
            tabs={projectTabs}
            variant="underline"
            size="md"
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
      </div>
    )
  },
}
