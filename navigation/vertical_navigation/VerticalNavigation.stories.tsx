import type { Meta, StoryObj } from '@storybook/react'
import { VerticalNavigation, VerticalNavigationGroup } from './VerticalNavigation'
import { HomeIcon, UserGroupIcon, FolderIcon, CalendarIcon, DocumentIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const meta: Meta<typeof VerticalNavigation> = {
  title: 'Navigation/VerticalNavigation',
  component: VerticalNavigation,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof VerticalNavigation>

const simpleGroups: VerticalNavigationGroup[] = [
  {
    items: [
      { id: '1', name: 'Dashboard', href: '#', active: true },
      { id: '2', name: 'Team', href: '#' },
      { id: '3', name: 'Projects', href: '#' },
      { id: '4', name: 'Calendar', href: '#' },
      { id: '5', name: 'Documents', href: '#' },
      { id: '6', name: 'Reports', href: '#' },
    ],
  },
]

const groupsWithIcons: VerticalNavigationGroup[] = [
  {
    items: [
      { id: '1', name: 'Dashboard', href: '#', icon: <HomeIcon />, active: true },
      { id: '2', name: 'Team', href: '#', icon: <UserGroupIcon /> },
      { id: '3', name: 'Projects', href: '#', icon: <FolderIcon /> },
      { id: '4', name: 'Calendar', href: '#', icon: <CalendarIcon /> },
      { id: '5', name: 'Documents', href: '#', icon: <DocumentIcon /> },
      { id: '6', name: 'Reports', href: '#', icon: <ChartBarIcon /> },
    ],
  },
]

const groupsWithBadges: VerticalNavigationGroup[] = [
  {
    items: [
      { id: '1', name: 'Dashboard', href: '#', icon: <HomeIcon />, active: true },
      { id: '2', name: 'Messages', href: '#', icon: <DocumentIcon />, badge: { text: '5', color: 'red' } },
      { id: '3', name: 'Projects', href: '#', icon: <FolderIcon />, badge: { text: '12', color: 'blue' } },
      { id: '4', name: 'Tasks', href: '#', icon: <CalendarIcon />, badge: { text: 'New', color: 'green' } },
    ],
  },
]

const groupsWithCounts: VerticalNavigationGroup[] = [
  {
    items: [
      { id: '1', name: 'Dashboard', href: '#', icon: <HomeIcon />, active: true },
      { id: '2', name: 'Team', href: '#', icon: <UserGroupIcon />, count: 12 },
      { id: '3', name: 'Projects', href: '#', icon: <FolderIcon />, count: 24 },
      { id: '4', name: 'Documents', href: '#', icon: <DocumentIcon />, count: 156 },
    ],
  },
]

const groupsWithSections: VerticalNavigationGroup[] = [
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
]

const groupsWithSecondary: VerticalNavigationGroup[] = [
  {
    items: [
      { id: '1', name: 'Lindsay Walton', href: '#', description: 'lindsay.walton@example.com', active: true },
      { id: '2', name: 'Courtney Henry', href: '#', description: 'courtney.henry@example.com' },
      { id: '3', name: 'Tom Cook', href: '#', description: 'tom.cook@example.com' },
    ],
  },
]

const nestedGroups: VerticalNavigationGroup[] = [
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
      { id: '3', name: 'Team', href: '#', icon: <UserGroupIcon /> },
    ],
  },
]

export const Simple: Story = {
  args: {
    groups: simpleGroups,
    variant: 'simple',
    spacing: 'normal',
  },
}

export const OnGray: Story = {
  args: {
    groups: simpleGroups,
    variant: 'on-gray',
    spacing: 'normal',
  },
}

export const WithBadges: Story = {
  args: {
    groups: groupsWithBadges,
    variant: 'with-badges',
    spacing: 'normal',
  },
}

export const WithIcons: Story = {
  args: {
    groups: groupsWithIcons,
    variant: 'with-icons',
    spacing: 'normal',
  },
}

export const WithIconsAndBadges: Story = {
  args: {
    groups: groupsWithBadges,
    variant: 'with-icons-badges',
    spacing: 'normal',
  },
}

export const WithSecondary: Story = {
  args: {
    groups: groupsWithSecondary,
    variant: 'with-secondary',
    spacing: 'normal',
  },
}

export const WithSectionTitles: Story = {
  args: {
    groups: groupsWithSections,
    variant: 'with-icons',
    spacing: 'normal',
  },
}

export const WithCounts: Story = {
  args: {
    groups: groupsWithCounts,
    variant: 'with-icons',
    spacing: 'normal',
  },
}

export const WithNesting: Story = {
  args: {
    groups: nestedGroups,
    variant: 'with-icons',
    spacing: 'normal',
  },
}

export const CompactSpacing: Story = {
  args: {
    groups: groupsWithIcons,
    variant: 'with-icons',
    spacing: 'compact',
  },
}

export const NormalSpacing: Story = {
  args: {
    groups: groupsWithIcons,
    variant: 'with-icons',
    spacing: 'normal',
  },
}

export const RelaxedSpacing: Story = {
  args: {
    groups: groupsWithIcons,
    variant: 'with-icons',
    spacing: 'relaxed',
  },
}

export const WithDividers: Story = {
  args: {
    groups: [
      {
        items: [
          { id: '1', name: 'Dashboard', href: '#', icon: <HomeIcon />, active: true },
          { id: '2', name: 'Team', href: '#', icon: <UserGroupIcon /> },
        ],
      },
      {
        items: [
          { id: '3', name: 'Projects', href: '#', icon: <FolderIcon /> },
          { id: '4', name: 'Calendar', href: '#', icon: <CalendarIcon /> },
        ],
      },
    ],
    variant: 'with-icons',
    spacing: 'normal',
    showDividers: true,
  },
}

export const WithoutDividers: Story = {
  args: {
    groups: groupsWithSections,
    variant: 'with-icons',
    spacing: 'normal',
    showDividers: false,
  },
}

export const WithClickHandlers: Story = {
  args: {
    groups: [
      {
        items: [
          { id: '1', name: 'Dashboard', onClick: () => alert('Dashboard clicked'), icon: <HomeIcon />, active: true },
          { id: '2', name: 'Team', onClick: () => alert('Team clicked'), icon: <UserGroupIcon /> },
          { id: '3', name: 'Projects', onClick: () => alert('Projects clicked'), icon: <FolderIcon /> },
        ],
      },
    ],
    variant: 'with-icons',
    spacing: 'normal',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Simple</h3>
        <VerticalNavigation groups={simpleGroups} variant="simple" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">On Gray</h3>
        <VerticalNavigation groups={simpleGroups} variant="on-gray" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">With Icons</h3>
        <VerticalNavigation groups={groupsWithIcons} variant="with-icons" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">With Badges</h3>
        <VerticalNavigation groups={groupsWithBadges} variant="with-badges" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">With Icons & Badges</h3>
        <VerticalNavigation groups={groupsWithBadges} variant="with-icons-badges" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">With Secondary</h3>
        <VerticalNavigation groups={groupsWithSecondary} variant="with-secondary" />
      </div>
    </div>
  ),
}

export const AllSpacing: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Compact</h3>
        <VerticalNavigation groups={groupsWithIcons} variant="with-icons" spacing="compact" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Normal</h3>
        <VerticalNavigation groups={groupsWithIcons} variant="with-icons" spacing="normal" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Relaxed</h3>
        <VerticalNavigation groups={groupsWithIcons} variant="with-icons" spacing="relaxed" />
      </div>
    </div>
  ),
}

export const RealWorldExample: Story = {
  render: () => (
    <div className="max-w-xs">
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-bold mb-4 px-2">Navigation</h2>
        <VerticalNavigation
          groups={[
            {
              items: [
                { id: '1', name: 'Dashboard', href: '#', icon: <HomeIcon />, active: true },
                { id: '2', name: 'Messages', href: '#', icon: <DocumentIcon />, badge: { text: '5', color: 'red' } },
                { id: '3', name: 'Projects', href: '#', icon: <FolderIcon />, count: 12 },
                { id: '4', name: 'Team', href: '#', icon: <UserGroupIcon />, count: 8 },
              ],
            },
            {
              title: 'Analytics',
              items: [
                { id: '5', name: 'Reports', href: '#', icon: <ChartBarIcon /> },
                { id: '6', name: 'Documents', href: '#', icon: <DocumentIcon />, count: 156 },
              ],
            },
          ]}
          variant="with-icons-badges"
          spacing="normal"
        />
      </div>
    </div>
  ),
}
