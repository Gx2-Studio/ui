import type { Meta, StoryObj } from '@storybook/react'
import { SidebarNavigation, SidebarNavigationSection } from './SidebarNavigation'
import { HomeIcon, UserGroupIcon, FolderIcon, CalendarIcon, DocumentIcon, ChartBarIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const meta: Meta<typeof SidebarNavigation> = {
  title: 'Navigation/SidebarNavigation',
  component: SidebarNavigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SidebarNavigation>

const sampleSections: SidebarNavigationSection[] = [
  {
    items: [
      { id: '1', name: 'Dashboard', href: '#', icon: <HomeIcon />, active: true },
      { id: '2', name: 'Team', href: '#', icon: <UserGroupIcon /> },
      { id: '3', name: 'Projects', href: '#', icon: <FolderIcon />, badge: { text: '12', color: 'gray' } },
      { id: '4', name: 'Calendar', href: '#', icon: <CalendarIcon /> },
      { id: '5', name: 'Documents', href: '#', icon: <DocumentIcon /> },
      { id: '6', name: 'Reports', href: '#', icon: <ChartBarIcon /> },
    ],
  },
  {
    title: 'Settings',
    items: [
      { id: '7', name: 'Settings', href: '#', icon: <Cog6ToothIcon /> },
    ],
  },
]

const sectionsWithBadges: SidebarNavigationSection[] = [
  {
    items: [
      { id: '1', name: 'Dashboard', href: '#', icon: <HomeIcon />, active: true },
      { id: '2', name: 'Messages', href: '#', icon: <DocumentIcon />, badge: { text: '5', color: 'red' } },
      { id: '3', name: 'Projects', href: '#', icon: <FolderIcon />, badge: { text: '12', color: 'blue' } },
      { id: '4', name: 'Tasks', href: '#', icon: <CalendarIcon />, badge: { text: '3', color: 'yellow' } },
    ],
  },
]

const expandableSections: SidebarNavigationSection[] = [
  {
    items: [
      { id: '1', name: 'Dashboard', href: '#', icon: <HomeIcon />, active: true },
      {
        id: '2',
        name: 'Projects',
        icon: <FolderIcon />,
        children: [
          { id: '2-1', name: 'Project Alpha', href: '#' },
          { id: '2-2', name: 'Project Beta', href: '#' },
          { id: '2-3', name: 'Project Gamma', href: '#' },
        ],
      },
      {
        id: '3',
        name: 'Team',
        icon: <UserGroupIcon />,
        children: [
          { id: '3-1', name: 'Engineering', href: '#' },
          { id: '3-2', name: 'Design', href: '#' },
          { id: '3-3', name: 'Marketing', href: '#' },
        ],
      },
    ],
  },
]

const brand = {
  name: 'Your Company',
  logo: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
  href: '#',
}

export const Brand: Story = {
  args: {
    sections: sampleSections,
    variant: 'brand',
    width: 'normal',
    brand,
  },
}

export const Dark: Story = {
  args: {
    sections: sampleSections,
    variant: 'dark',
    width: 'normal',
    brand,
  },
}

export const Light: Story = {
  args: {
    sections: sampleSections,
    variant: 'light',
    width: 'normal',
    brand,
  },
}

export const Expandable: Story = {
  args: {
    sections: expandableSections,
    variant: 'expandable',
    width: 'normal',
    brand,
  },
}

export const Secondary: Story = {
  args: {
    sections: sampleSections,
    variant: 'secondary',
    width: 'normal',
    brand,
  },
}

export const NarrowWidth: Story = {
  args: {
    sections: sampleSections,
    variant: 'light',
    width: 'narrow',
    brand,
  },
}

export const NormalWidth: Story = {
  args: {
    sections: sampleSections,
    variant: 'light',
    width: 'normal',
    brand,
  },
}

export const WideWidth: Story = {
  args: {
    sections: sampleSections,
    variant: 'light',
    width: 'wide',
    brand,
  },
}

export const WithBadges: Story = {
  args: {
    sections: sectionsWithBadges,
    variant: 'light',
    width: 'normal',
    brand,
  },
}

export const WithSectionTitles: Story = {
  args: {
    sections: [
      {
        title: 'Main Navigation',
        items: [
          { id: '1', name: 'Dashboard', href: '#', icon: <HomeIcon />, active: true },
          { id: '2', name: 'Team', href: '#', icon: <UserGroupIcon /> },
          { id: '3', name: 'Projects', href: '#', icon: <FolderIcon /> },
        ],
      },
      {
        title: 'Analytics',
        items: [
          { id: '4', name: 'Reports', href: '#', icon: <ChartBarIcon /> },
          { id: '5', name: 'Documents', href: '#', icon: <DocumentIcon /> },
        ],
      },
      {
        title: 'Settings',
        items: [
          { id: '6', name: 'Settings', href: '#', icon: <Cog6ToothIcon /> },
        ],
      },
    ],
    variant: 'light',
    width: 'normal',
    brand,
  },
}

export const WithoutBrand: Story = {
  args: {
    sections: sampleSections,
    variant: 'light',
    width: 'normal',
  },
}

export const Collapsible: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false)

    return (
      <SidebarNavigation
        sections={sampleSections}
        variant="light"
        width="normal"
        brand={brand}
        collapsible={true}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
      />
    )
  },
}

export const Collapsed: Story = {
  args: {
    sections: sampleSections,
    variant: 'light',
    width: 'normal',
    brand,
    collapsed: true,
  },
}

export const WithClickHandlers: Story = {
  args: {
    sections: [
      {
        items: [
          { id: '1', name: 'Dashboard', onClick: () => alert('Dashboard clicked'), icon: <HomeIcon />, active: true },
          { id: '2', name: 'Team', onClick: () => alert('Team clicked'), icon: <UserGroupIcon /> },
          { id: '3', name: 'Projects', onClick: () => alert('Projects clicked'), icon: <FolderIcon /> },
        ],
      },
    ],
    variant: 'light',
    width: 'normal',
    brand,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4" style={{ height: '600px' }}>
      <div>
        <h3 className="text-lg font-semibold mb-2 px-4">Brand</h3>
        <SidebarNavigation sections={sampleSections} variant="brand" brand={brand} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 px-4">Dark</h3>
        <SidebarNavigation sections={sampleSections} variant="dark" brand={brand} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 px-4">Light</h3>
        <SidebarNavigation sections={sampleSections} variant="light" brand={brand} />
      </div>
    </div>
  ),
}

export const AllWidths: Story = {
  render: () => (
    <div className="flex gap-4" style={{ height: '600px' }}>
      <div>
        <h3 className="text-lg font-semibold mb-2 px-4">Narrow</h3>
        <SidebarNavigation sections={sampleSections} variant="light" width="narrow" brand={brand} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 px-4">Normal</h3>
        <SidebarNavigation sections={sampleSections} variant="light" width="normal" brand={brand} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 px-4">Wide</h3>
        <SidebarNavigation sections={sampleSections} variant="light" width="wide" brand={brand} />
      </div>
    </div>
  ),
}

export const RealWorldExample: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false)

    return (
      <div className="flex h-screen bg-gray-100">
        <SidebarNavigation
          sections={[
            {
              items: [
                { id: '1', name: 'Dashboard', href: '#', icon: <HomeIcon />, active: true },
                { id: '2', name: 'Team', href: '#', icon: <UserGroupIcon /> },
                { id: '3', name: 'Projects', href: '#', icon: <FolderIcon />, badge: { text: '12', color: 'blue' } },
                { id: '4', name: 'Calendar', href: '#', icon: <CalendarIcon /> },
              ],
            },
            {
              title: 'Analytics',
              items: [
                { id: '5', name: 'Reports', href: '#', icon: <ChartBarIcon /> },
                { id: '6', name: 'Documents', href: '#', icon: <DocumentIcon />, badge: { text: 'New', color: 'green' } },
              ],
            },
            {
              title: 'Settings',
              items: [
                { id: '7', name: 'Settings', href: '#', icon: <Cog6ToothIcon /> },
              ],
            },
          ]}
          variant="light"
          width="normal"
          brand={brand}
          collapsible={true}
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed(!collapsed)}
        />

        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <p className="text-gray-600">Welcome to your dashboard. Use the sidebar to navigate.</p>
        </div>
      </div>
    )
  },
}
