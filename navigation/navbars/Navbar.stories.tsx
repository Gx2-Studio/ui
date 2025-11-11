import type { Meta, StoryObj } from '@storybook/react'
import { Navbar, NavbarItem } from './Navbar'
import { BellIcon, PlusIcon } from '@heroicons/react/24/outline'

const meta: Meta<typeof Navbar> = {
  title: '4. Navigation/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Navbar>

const sampleItems: NavbarItem[] = [
  { id: '1', label: 'Dashboard', href: '#', active: true },
  { id: '2', label: 'Team', href: '#' },
  { id: '3', label: 'Projects', href: '#' },
  { id: '4', label: 'Calendar', href: '#' },
]

const itemsWithBadges: NavbarItem[] = [
  { id: '1', label: 'Dashboard', href: '#', active: true },
  { id: '2', label: 'Messages', href: '#', badge: { text: '12', color: 'red' } },
  { id: '3', label: 'Tasks', href: '#', badge: { text: '3', color: 'blue' } },
  { id: '4', label: 'Settings', href: '#' },
]

const itemsWithIcons: NavbarItem[] = [
  { id: '1', label: 'Dashboard', href: '#', active: true, icon: <BellIcon className="h-4 w-4" /> },
  { id: '2', label: 'Projects', href: '#', icon: <PlusIcon className="h-4 w-4" /> },
  { id: '3', label: 'Team', href: '#' },
]

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const brand = {
  name: 'Your Company',
  logo: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
  href: '#',
}

export const Simple: Story = {
  args: {
    variant: 'simple',
    brand,
    items: sampleItems,
  },
}

export const Dark: Story = {
  args: {
    variant: 'dark',
    brand,
    items: sampleItems,
    user,
  },
}

export const WithSearch: Story = {
  args: {
    variant: 'with-search',
    brand,
    items: sampleItems,
    user,
    searchPlaceholder: 'Search...',
    onSearch: (query) => console.log('Search:', query),
  },
}

export const WithMenuButton: Story = {
  args: {
    variant: 'with-menu-button',
    brand,
    items: sampleItems,
    user,
    showMenuButton: true,
    onMenuClick: () => alert('Menu clicked'),
  },
}

export const CenteredSearch: Story = {
  args: {
    variant: 'centered-search',
    brand,
    items: sampleItems,
    secondaryItems: [
      { id: '5', label: 'Profile', href: '#' },
      { id: '6', label: 'Settings', href: '#' },
    ],
    user,
    searchPlaceholder: 'Search...',
    onSearch: (query) => console.log('Search:', query),
  },
}

export const WithQuickAction: Story = {
  args: {
    variant: 'with-quick-action',
    brand,
    items: sampleItems,
    user,
    actions: [
      { label: 'New Project', variant: 'primary', onClick: () => alert('New Project') },
    ],
  },
}

export const ColumnLayout: Story = {
  args: {
    variant: 'column-layout',
    brand,
    items: sampleItems,
    user,
    showMenuButton: true,
    onMenuClick: () => alert('Menu clicked'),
  },
}

export const WithBadges: Story = {
  args: {
    variant: 'simple',
    brand,
    items: itemsWithBadges,
    user,
  },
}

export const WithIcons: Story = {
  args: {
    variant: 'simple',
    brand,
    items: itemsWithIcons,
    user,
  },
}

export const WithUserAvatar: Story = {
  args: {
    variant: 'simple',
    brand,
    items: sampleItems,
    user,
  },
}

export const WithUserInitials: Story = {
  args: {
    variant: 'simple',
    brand,
    items: sampleItems,
    user: {
      name: 'Tom Cook',
      email: 'tom@example.com',
      initials: 'TC',
    },
  },
}

export const WithActions: Story = {
  args: {
    variant: 'simple',
    brand,
    items: sampleItems,
    user,
    actions: [
      { label: 'New', variant: 'primary', onClick: () => alert('New clicked'), icon: <PlusIcon className="h-4 w-4" /> },
    ],
  },
}

export const WithMultipleActions: Story = {
  args: {
    variant: 'simple',
    brand,
    items: sampleItems,
    user,
    actions: [
      { label: 'Notifications', variant: 'secondary', icon: <BellIcon className="h-4 w-4" /> },
      { label: 'New Project', variant: 'primary', icon: <PlusIcon className="h-4 w-4" /> },
    ],
  },
}

export const WithClickHandlers: Story = {
  args: {
    variant: 'simple',
    brand,
    items: sampleItems.map(item => ({
      ...item,
      href: undefined,
      onClick: () => alert(`Clicked ${item.label}`),
    })),
    user,
  },
}

export const WithoutBrand: Story = {
  args: {
    variant: 'simple',
    items: sampleItems,
    user,
  },
}

export const WithoutUser: Story = {
  args: {
    variant: 'simple',
    brand,
    items: sampleItems,
  },
}

export const MinimalNavbar: Story = {
  args: {
    variant: 'simple',
    brand,
    items: sampleItems,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2 px-4">Simple</h3>
        <Navbar variant="simple" brand={brand} items={sampleItems} user={user} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 px-4">Dark</h3>
        <Navbar variant="dark" brand={brand} items={sampleItems} user={user} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 px-4">With Search</h3>
        <Navbar
          variant="with-search"
          brand={brand}
          items={sampleItems}
          user={user}
          searchPlaceholder="Search..."
          onSearch={(query) => console.log('Search:', query)}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 px-4">With Menu Button</h3>
        <Navbar
          variant="with-menu-button"
          brand={brand}
          items={sampleItems}
          user={user}
          showMenuButton={true}
          onMenuClick={() => alert('Menu clicked')}
        />
      </div>
    </div>
  ),
}

export const RealWorldExample: Story = {
  render: () => (
    <div>
      <Navbar
        variant="with-search"
        brand={brand}
        items={[
          { id: '1', label: 'Dashboard', href: '#', active: true },
          { id: '2', label: 'Projects', href: '#' },
          { id: '3', label: 'Team', href: '#' },
          { id: '4', label: 'Reports', href: '#' },
          { id: '5', label: 'Messages', href: '#', badge: { text: '5', color: 'red' } },
        ]}
        user={user}
        searchPlaceholder="Search projects, tasks, and more..."
        onSearch={(query) => console.log('Search:', query)}
        actions={[
          {
            label: 'Notifications',
            variant: 'secondary',
            icon: <BellIcon className="h-4 w-4" />,
            onClick: () => alert('Notifications clicked'),
          },
          {
            label: 'New',
            variant: 'primary',
            icon: <PlusIcon className="h-4 w-4" />,
            onClick: () => alert('New clicked'),
          },
        ]}
      />
      <div className="p-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back to your dashboard</p>
      </div>
    </div>
  ),
}
