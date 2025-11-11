import type { Meta, StoryObj } from '@storybook/react'
import { CommandPalette, CommandPaletteOption, CommandPaletteGroup } from './CommandPalette'
import { useState } from 'react'
import {
  DocumentIcon,
  FolderIcon,
  UserIcon,
  Cog6ToothIcon,
  HomeIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'

const meta: Meta<typeof CommandPalette> = {
  title: '4. Navigation/CommandPalette',
  component: CommandPalette,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CommandPalette>

const sampleOptions: CommandPaletteOption[] = [
  {
    id: 1,
    name: 'Dashboard',
    description: 'View your dashboard',
    icon: <HomeIcon className="h-6 w-6" />,
    url: '#',
  },
  {
    id: 2,
    name: 'Projects',
    description: 'Manage your projects',
    icon: <FolderIcon className="h-6 w-6" />,
    url: '#',
  },
  {
    id: 3,
    name: 'Documents',
    description: 'Browse your documents',
    icon: <DocumentIcon className="h-6 w-6" />,
    url: '#',
  },
  {
    id: 4,
    name: 'Team',
    description: 'View team members',
    icon: <UserIcon className="h-6 w-6" />,
    url: '#',
  },
  {
    id: 5,
    name: 'Analytics',
    description: 'View analytics and reports',
    icon: <ChartBarIcon className="h-6 w-6" />,
    badge: 'New',
    url: '#',
  },
  {
    id: 6,
    name: 'Settings',
    description: 'Manage your settings',
    icon: <Cog6ToothIcon className="h-6 w-6" />,
    url: '#',
  },
]

const sampleGroups: CommandPaletteGroup[] = [
  {
    id: 'navigation',
    name: 'Navigation',
    options: [
      {
        id: 1,
        name: 'Dashboard',
        description: 'View your dashboard',
        icon: <HomeIcon className="h-6 w-6" />,
        url: '#',
      },
      {
        id: 2,
        name: 'Projects',
        description: 'Manage your projects',
        icon: <FolderIcon className="h-6 w-6" />,
        url: '#',
      },
    ],
  },
  {
    id: 'content',
    name: 'Content',
    options: [
      {
        id: 3,
        name: 'Documents',
        description: 'Browse your documents',
        icon: <DocumentIcon className="h-6 w-6" />,
        url: '#',
      },
      {
        id: 4,
        name: 'Team',
        description: 'View team members',
        icon: <UserIcon className="h-6 w-6" />,
        url: '#',
      },
    ],
  },
  {
    id: 'settings',
    name: 'Settings',
    options: [
      {
        id: 5,
        name: 'Analytics',
        description: 'View analytics and reports',
        icon: <ChartBarIcon className="h-6 w-6" />,
        badge: 'New',
        url: '#',
      },
      {
        id: 6,
        name: 'Settings',
        description: 'Manage your settings',
        icon: <Cog6ToothIcon className="h-6 w-6" />,
        url: '#',
      },
    ],
  },
]

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(true)

    return (
      <div>
        <button
          onClick={() => setOpen(true)}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
        >
          Open Command Palette
        </button>
        <CommandPalette
          open={open}
          onClose={() => setOpen(false)}
          options={sampleOptions}
          variant="default"
          showIcons={true}
        />
      </div>
    )
  },
}

export const Dark: Story = {
  render: () => {
    const [open, setOpen] = useState(true)

    return (
      <div>
        <button
          onClick={() => setOpen(true)}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
        >
          Open Command Palette (Dark)
        </button>
        <CommandPalette
          open={open}
          onClose={() => setOpen(false)}
          options={sampleOptions}
          variant="dark"
          showIcons={true}
        />
      </div>
    )
  },
}

export const SemiTransparent: Story = {
  render: () => {
    const [open, setOpen] = useState(true)

    return (
      <div>
        <button
          onClick={() => setOpen(true)}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
        >
          Open Command Palette (Semi-Transparent)
        </button>
        <CommandPalette
          open={open}
          onClose={() => setOpen(false)}
          options={sampleOptions}
          variant="semi-transparent"
          showIcons={true}
        />
      </div>
    )
  },
}

export const WithGroups: Story = {
  render: () => {
    const [open, setOpen] = useState(true)

    return (
      <div>
        <button
          onClick={() => setOpen(true)}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
        >
          Open Command Palette (Groups)
        </button>
        <CommandPalette
          open={open}
          onClose={() => setOpen(false)}
          groups={sampleGroups}
          variant="default"
          showGroups={true}
          showIcons={true}
        />
      </div>
    )
  },
}

export const WithoutIcons: Story = {
  render: () => {
    const [open, setOpen] = useState(true)

    return (
      <div>
        <button
          onClick={() => setOpen(true)}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
        >
          Open Command Palette (No Icons)
        </button>
        <CommandPalette
          open={open}
          onClose={() => setOpen(false)}
          options={sampleOptions}
          variant="default"
          showIcons={false}
        />
      </div>
    )
  },
}

export const WithBadges: Story = {
  render: () => {
    const [open, setOpen] = useState(true)

    const optionsWithBadges: CommandPaletteOption[] = [
      {
        id: 1,
        name: 'Dashboard',
        description: 'View your dashboard',
        icon: <HomeIcon className="h-6 w-6" />,
        badge: 'Hot',
        url: '#',
      },
      {
        id: 2,
        name: 'Projects',
        description: 'Manage your projects',
        icon: <FolderIcon className="h-6 w-6" />,
        badge: '12',
        url: '#',
      },
      {
        id: 3,
        name: 'Documents',
        description: 'Browse your documents',
        icon: <DocumentIcon className="h-6 w-6" />,
        badge: 'New',
        url: '#',
      },
    ]

    return (
      <div>
        <button
          onClick={() => setOpen(true)}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
        >
          Open Command Palette (Badges)
        </button>
        <CommandPalette
          open={open}
          onClose={() => setOpen(false)}
          options={optionsWithBadges}
          variant="default"
          showIcons={true}
        />
      </div>
    )
  },
}

export const WithDisabledOptions: Story = {
  render: () => {
    const [open, setOpen] = useState(true)

    const optionsWithDisabled: CommandPaletteOption[] = [
      ...sampleOptions.slice(0, 3),
      {
        id: 4,
        name: 'Coming Soon',
        description: 'This feature is not available yet',
        icon: <Cog6ToothIcon className="h-6 w-6" />,
        disabled: true,
      },
      ...sampleOptions.slice(3),
    ]

    return (
      <div>
        <button
          onClick={() => setOpen(true)}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
        >
          Open Command Palette (Disabled)
        </button>
        <CommandPalette
          open={open}
          onClose={() => setOpen(false)}
          options={optionsWithDisabled}
          variant="default"
          showIcons={true}
        />
      </div>
    )
  },
}

export const WithFooter: Story = {
  render: () => {
    const [open, setOpen] = useState(true)

    return (
      <div>
        <button
          onClick={() => setOpen(true)}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
        >
          Open Command Palette (Footer)
        </button>
        <CommandPalette
          open={open}
          onClose={() => setOpen(false)}
          options={sampleOptions}
          variant="default"
          showIcons={true}
          footer={
            <div className="flex items-center justify-between">
              <span>Press <kbd className="font-mono">ESC</kbd> to close</span>
              <span>Use <kbd className="font-mono">↑</kbd> <kbd className="font-mono">↓</kbd> to navigate</span>
            </div>
          }
        />
      </div>
    )
  },
}

export const CustomPlaceholder: Story = {
  render: () => {
    const [open, setOpen] = useState(true)

    return (
      <div>
        <button
          onClick={() => setOpen(true)}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
        >
          Open Command Palette (Custom Placeholder)
        </button>
        <CommandPalette
          open={open}
          onClose={() => setOpen(false)}
          options={sampleOptions}
          variant="default"
          showIcons={true}
          placeholder="Type a command or search..."
        />
      </div>
    )
  },
}

export const CustomEmptyMessage: Story = {
  render: () => {
    const [open, setOpen] = useState(true)

    return (
      <div>
        <button
          onClick={() => setOpen(true)}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
        >
          Open Command Palette (Custom Empty)
        </button>
        <CommandPalette
          open={open}
          onClose={() => setOpen(false)}
          options={sampleOptions}
          variant="default"
          showIcons={true}
          emptyMessage="No commands found. Try a different search term."
        />
      </div>
    )
  },
}

export const WithClickHandlers: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    const [selectedOption, setSelectedOption] = useState<string>('')

    const optionsWithHandlers: CommandPaletteOption[] = sampleOptions.map(option => ({
      ...option,
      url: undefined,
      onSelect: () => {
        setSelectedOption(option.name)
        alert(`Selected: ${option.name}`)
      },
    }))

    return (
      <div>
        <button
          onClick={() => setOpen(true)}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
        >
          Open Command Palette (Click Handlers)
        </button>
        {selectedOption && (
          <p className="mt-4 text-sm text-gray-600">Last selected: {selectedOption}</p>
        )}
        <CommandPalette
          open={open}
          onClose={() => setOpen(false)}
          options={optionsWithHandlers}
          variant="default"
          showIcons={true}
          onOptionSelect={(option) => console.log('Option selected:', option)}
        />
      </div>
    )
  },
}

export const AllVariants: Story = {
  render: () => {
    const [openDefault, setOpenDefault] = useState(false)
    const [openDark, setOpenDark] = useState(false)
    const [openSemiTransparent, setOpenSemiTransparent] = useState(false)

    return (
      <div className="space-y-4">
        <button
          onClick={() => setOpenDefault(true)}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
        >
          Default Variant
        </button>
        <button
          onClick={() => setOpenDark(true)}
          className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 ml-2"
        >
          Dark Variant
        </button>
        <button
          onClick={() => setOpenSemiTransparent(true)}
          className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 ml-2"
        >
          Semi-Transparent
        </button>

        <CommandPalette
          open={openDefault}
          onClose={() => setOpenDefault(false)}
          options={sampleOptions}
          variant="default"
          showIcons={true}
        />
        <CommandPalette
          open={openDark}
          onClose={() => setOpenDark(false)}
          options={sampleOptions}
          variant="dark"
          showIcons={true}
        />
        <CommandPalette
          open={openSemiTransparent}
          onClose={() => setOpenSemiTransparent(false)}
          options={sampleOptions}
          variant="semi-transparent"
          showIcons={true}
        />
      </div>
    )
  },
}

export const RealWorldExample: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Application Dashboard</h2>
          <p className="text-gray-600 mb-4">
            Press <kbd className="px-2 py-1 bg-gray-100 rounded font-mono text-sm">⌘K</kbd> or click the button to open the command palette
          </p>
          <button
            onClick={() => setOpen(true)}
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Open Command Palette
          </button>
        </div>

        <CommandPalette
          open={open}
          onClose={() => setOpen(false)}
          groups={sampleGroups}
          variant="default"
          showGroups={true}
          showIcons={true}
          placeholder="Search for commands..."
          footer={
            <div className="flex items-center justify-between text-xs">
              <span>Navigate with <kbd className="font-mono">↑</kbd> <kbd className="font-mono">↓</kbd></span>
              <span>Select with <kbd className="font-mono">Enter</kbd></span>
              <span>Close with <kbd className="font-mono">ESC</kbd></span>
            </div>
          }
        />
      </div>
    )
  },
}
