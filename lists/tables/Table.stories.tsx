import type { Meta, StoryObj } from '@storybook/react'
import { Table, TableColumn } from './Table'
import { useState } from 'react'

const meta: Meta<typeof Table> = {
  title: 'Lists/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Table>

interface Person {
  name: string
  title: string
  email: string
  role: string
  status: 'Active' | 'Inactive'
}

const sampleData: Person[] = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member', status: 'Active' },
  { name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin', status: 'Active' },
  { name: 'Tom Cook', title: 'Director of Product', email: 'tom.cook@example.com', role: 'Member', status: 'Active' },
  { name: 'Whitney Francis', title: 'Copywriter', email: 'whitney.francis@example.com', role: 'Admin', status: 'Inactive' },
  { name: 'Leonard Krasner', title: 'Senior Designer', email: 'leonard.krasner@example.com', role: 'Owner', status: 'Active' },
  { name: 'Floyd Miles', title: 'Principal Designer', email: 'floyd.miles@example.com', role: 'Member', status: 'Inactive' },
]

const basicColumns: TableColumn<Person>[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'title', label: 'Title', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  {
    key: 'status',
    label: 'Status',
    render: (value: string) => (
      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
        value === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
      }`}>
        {value}
      </span>
    ),
  },
]

const columnsWithAlign: TableColumn<Person>[] = [
  { key: 'name', label: 'Name', align: 'left' },
  { key: 'title', label: 'Title', align: 'center' },
  { key: 'email', label: 'Email', align: 'left' },
  { key: 'role', label: 'Role', align: 'right' },
]

const mobileOptimizedColumns: TableColumn<Person>[] = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email', hiddenOnMobile: true },
  { key: 'role', label: 'Role', hiddenOnMobile: true },
  { key: 'status', label: 'Status' },
]

export const Simple: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    variant: 'simple',
    size: 'md',
  },
}

export const Striped: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    variant: 'striped',
    size: 'md',
  },
}

export const Bordered: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    variant: 'bordered',
    size: 'md',
  },
}

export const Card: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    variant: 'card',
    size: 'md',
  },
}

export const SmallSize: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    variant: 'simple',
    size: 'sm',
  },
}

export const MediumSize: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    variant: 'simple',
    size: 'md',
  },
}

export const LargeSize: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    variant: 'simple',
    size: 'lg',
  },
}

export const Condensed: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    variant: 'simple',
    size: 'md',
    condensed: true,
  },
}

export const DarkMode: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    variant: 'simple',
    size: 'md',
    darkMode: true,
  },
}

export const FullWidth: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    variant: 'simple',
    size: 'md',
    fullWidth: true,
  },
}

export const WithVerticalLines: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    variant: 'simple',
    size: 'md',
    showVerticalLines: true,
  },
}

export const UppercaseHeaders: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    variant: 'simple',
    size: 'md',
    uppercaseHeaders: true,
  },
}

export const HiddenHeaders: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    variant: 'simple',
    size: 'md',
    hiddenHeaders: true,
  },
}

export const StickyHeader: Story = {
  args: {
    columns: basicColumns,
    data: [...sampleData, ...sampleData, ...sampleData],
    variant: 'simple',
    size: 'md',
    stickyHeader: true,
  },
  decorators: [
    (Story) => (
      <div style={{ height: '400px', overflow: 'auto' }}>
        <Story />
      </div>
    ),
  ],
}

export const WithActions: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    variant: 'simple',
    size: 'md',
    actions: [
      { label: 'Edit', onClick: (item: Person) => alert(`Edit ${item.name}`) },
      { label: 'Delete', onClick: (item: Person) => alert(`Delete ${item.name}`), variant: 'danger' },
    ],
  },
}

export const WithAlignedColumns: Story = {
  args: {
    columns: columnsWithAlign,
    data: sampleData,
    variant: 'simple',
    size: 'md',
  },
}

export const MobileOptimized: Story = {
  args: {
    columns: mobileOptimizedColumns,
    data: sampleData,
    variant: 'simple',
    size: 'md',
  },
}

export const Loading: Story = {
  args: {
    columns: basicColumns,
    data: [],
    variant: 'simple',
    size: 'md',
    loading: true,
  },
}

export const Empty: Story = {
  args: {
    columns: basicColumns,
    data: [],
    variant: 'simple',
    size: 'md',
    emptyMessage: 'No data available',
  },
}

export const CustomEmptyMessage: Story = {
  args: {
    columns: basicColumns,
    data: [],
    variant: 'simple',
    size: 'md',
    emptyMessage: 'No team members found. Add your first team member to get started.',
  },
}

export const Sortable: Story = {
  render: () => {
    const [sortKey, setSortKey] = useState<string>('name')
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
    const [data, setData] = useState([...sampleData])

    const handleSort = (key: string, direction: 'asc' | 'desc') => {
      setSortKey(key)
      setSortDirection(direction)

      const sortedData = [...data].sort((a, b) => {
        const aValue = a[key as keyof Person]
        const bValue = b[key as keyof Person]

        if (direction === 'asc') {
          return aValue > bValue ? 1 : -1
        } else {
          return aValue < bValue ? 1 : -1
        }
      })

      setData(sortedData)
    }

    return (
      <Table
        columns={basicColumns}
        data={data}
        variant="simple"
        size="md"
        onSort={handleSort}
        sortKey={sortKey}
        sortDirection={sortDirection}
      />
    )
  },
}

export const Selectable: Story = {
  render: () => {
    const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set())

    const handleSelectItem = (index: number, selected: boolean) => {
      const newSelected = new Set(selectedItems)
      if (selected) {
        newSelected.add(index)
      } else {
        newSelected.delete(index)
      }
      setSelectedItems(newSelected)
    }

    const handleSelectAll = (selected: boolean) => {
      if (selected) {
        setSelectedItems(new Set(sampleData.map((_, i) => i)))
      } else {
        setSelectedItems(new Set())
      }
    }

    return (
      <div>
        <p className="mb-4 text-sm text-gray-600">Selected: {selectedItems.size} items</p>
        <Table
          columns={basicColumns}
          data={sampleData}
          variant="simple"
          size="md"
          selectable={true}
          selectedItems={selectedItems}
          onSelectItem={handleSelectItem}
          onSelectAll={handleSelectAll}
        />
      </div>
    )
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Simple</h3>
        <Table columns={basicColumns} data={sampleData.slice(0, 3)} variant="simple" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Striped</h3>
        <Table columns={basicColumns} data={sampleData.slice(0, 3)} variant="striped" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Bordered</h3>
        <Table columns={basicColumns} data={sampleData.slice(0, 3)} variant="bordered" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Card</h3>
        <Table columns={basicColumns} data={sampleData.slice(0, 3)} variant="card" />
      </div>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Small</h3>
        <Table columns={basicColumns} data={sampleData.slice(0, 3)} variant="simple" size="sm" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Medium</h3>
        <Table columns={basicColumns} data={sampleData.slice(0, 3)} variant="simple" size="md" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Large</h3>
        <Table columns={basicColumns} data={sampleData.slice(0, 3)} variant="simple" size="lg" />
      </div>
    </div>
  ),
}

export const RealWorldExample: Story = {
  render: () => {
    const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set())
    const [sortKey, setSortKey] = useState<string>('name')
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
    const [data, setData] = useState([...sampleData])

    const handleSort = (key: string, direction: 'asc' | 'desc') => {
      setSortKey(key)
      setSortDirection(direction)

      const sortedData = [...data].sort((a, b) => {
        const aValue = a[key as keyof Person]
        const bValue = b[key as keyof Person]

        if (direction === 'asc') {
          return aValue > bValue ? 1 : -1
        } else {
          return aValue < bValue ? 1 : -1
        }
      })

      setData(sortedData)
    }

    const handleSelectItem = (index: number, selected: boolean) => {
      const newSelected = new Set(selectedItems)
      if (selected) {
        newSelected.add(index)
      } else {
        newSelected.delete(index)
      }
      setSelectedItems(newSelected)
    }

    const handleSelectAll = (selected: boolean) => {
      if (selected) {
        setSelectedItems(new Set(data.map((_, i) => i)))
      } else {
        setSelectedItems(new Set())
      }
    }

    return (
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-bold">Team Members</h2>
            <p className="text-gray-600 mt-1">
              {selectedItems.size > 0 ? `${selectedItems.size} items selected` : 'Manage your team and their permissions'}
            </p>
          </div>
          <Table
            columns={basicColumns}
            data={data}
            variant="simple"
            size="md"
            selectable={true}
            selectedItems={selectedItems}
            onSelectItem={handleSelectItem}
            onSelectAll={handleSelectAll}
            onSort={handleSort}
            sortKey={sortKey}
            sortDirection={sortDirection}
            actions={[
              { label: 'Edit', onClick: (item: Person) => alert(`Edit ${item.name}`) },
              { label: 'Remove', onClick: (item: Person) => alert(`Remove ${item.name}`), variant: 'danger' },
            ]}
          />
        </div>
      </div>
    )
  },
}
