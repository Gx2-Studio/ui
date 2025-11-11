import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown'
import { Button } from '../buttons/Button'
import { ChevronDownIcon, UserCircleIcon, Cog6ToothIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/20/solid'

const meta: Meta<typeof Dropdown> = {
  title: '1. Core/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Dropdown>

const basicItems = [
  { label: 'Edit', onClick: () => console.log('Edit clicked') },
  { label: 'Duplicate', onClick: () => console.log('Duplicate clicked') },
  { label: 'Archive', onClick: () => console.log('Archive clicked') },
  { label: 'Move', onClick: () => console.log('Move clicked') },
]

const itemsWithIcons = [
  { label: 'Your Profile', onClick: () => console.log('Profile'), icon: <UserCircleIcon className="h-5 w-5" /> },
  { label: 'Settings', onClick: () => console.log('Settings'), icon: <Cog6ToothIcon className="h-5 w-5" /> },
  { label: 'Sign out', onClick: () => console.log('Sign out'), icon: <ArrowRightOnRectangleIcon className="h-5 w-5" /> },
]

const itemsWithDisabled = [
  { label: 'Edit', onClick: () => console.log('Edit clicked') },
  { label: 'Duplicate', onClick: () => console.log('Duplicate clicked'), disabled: true },
  { label: 'Archive', onClick: () => console.log('Archive clicked') },
  { label: 'Delete', onClick: () => console.log('Delete clicked') },
]

const itemsWithDividers = [
  { label: 'Account settings', onClick: () => console.log('Account settings') },
  { label: 'Support', onClick: () => console.log('Support') },
  { label: 'License', onClick: () => console.log('License'), divider: true },
  { label: 'Sign out', onClick: () => console.log('Sign out') },
]

export const Default: Story = {
  args: {
    trigger: (
      <Button variant="secondary">
        Options
        <ChevronDownIcon className="h-5 w-5" />
      </Button>
    ),
    items: basicItems,
  },
}

export const WithIcons: Story = {
  args: {
    trigger: (
      <Button variant="secondary">
        Account
        <ChevronDownIcon className="h-5 w-5" />
      </Button>
    ),
    items: itemsWithIcons,
  },
}

export const AlignLeft: Story = {
  args: {
    trigger: (
      <Button variant="secondary">
        Align Left
        <ChevronDownIcon className="h-5 w-5" />
      </Button>
    ),
    items: basicItems,
    align: 'left',
  },
}

export const AlignRight: Story = {
  args: {
    trigger: (
      <Button variant="secondary">
        Align Right
        <ChevronDownIcon className="h-5 w-5" />
      </Button>
    ),
    items: basicItems,
    align: 'right',
  },
}

export const WithDisabledItems: Story = {
  args: {
    trigger: (
      <Button variant="secondary">
        Options
        <ChevronDownIcon className="h-5 w-5" />
      </Button>
    ),
    items: itemsWithDisabled,
  },
}

export const WithDividers: Story = {
  args: {
    trigger: (
      <Button variant="secondary">
        Menu
        <ChevronDownIcon className="h-5 w-5" />
      </Button>
    ),
    items: itemsWithDividers,
  },
}

export const DisabledDropdown: Story = {
  args: {
    trigger: (
      <Button variant="secondary" disabled>
        Disabled
        <ChevronDownIcon className="h-5 w-5" />
      </Button>
    ),
    items: basicItems,
    disabled: true,
  },
}

export const CustomTrigger: Story = {
  args: {
    trigger: <span className="text-indigo-600 hover:text-indigo-700 cursor-pointer font-medium">Click me</span>,
    items: basicItems,
  },
}
