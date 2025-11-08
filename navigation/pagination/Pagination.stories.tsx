import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination'
import { useState } from 'react'

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Simple: Story = {
  args: {
    variant: 'simple',
    currentPage: 1,
    totalPages: 10,
    showInfo: true,
    totalItems: 97,
    itemsPerPage: 10,
  },
}

export const Numbered: Story = {
  args: {
    variant: 'numbered',
    currentPage: 1,
    totalPages: 10,
    showPageNumbers: true,
  },
}

export const Card: Story = {
  args: {
    variant: 'card',
    currentPage: 1,
    totalPages: 10,
    showInfo: true,
    totalItems: 97,
    itemsPerPage: 10,
  },
}

export const WithInfo: Story = {
  args: {
    variant: 'simple',
    currentPage: 1,
    totalPages: 10,
    showInfo: true,
    totalItems: 97,
    itemsPerPage: 10,
  },
}

export const WithoutInfo: Story = {
  args: {
    variant: 'simple',
    currentPage: 1,
    totalPages: 10,
    showInfo: false,
  },
}

export const WithoutPageNumbers: Story = {
  args: {
    variant: 'numbered',
    currentPage: 1,
    totalPages: 10,
    showPageNumbers: false,
  },
}

export const MidPage: Story = {
  args: {
    variant: 'numbered',
    currentPage: 5,
    totalPages: 10,
    showPageNumbers: true,
  },
}

export const LastPage: Story = {
  args: {
    variant: 'numbered',
    currentPage: 10,
    totalPages: 10,
    showPageNumbers: true,
  },
}

export const FirstPage: Story = {
  args: {
    variant: 'numbered',
    currentPage: 1,
    totalPages: 10,
    showPageNumbers: true,
  },
}

export const FewPages: Story = {
  args: {
    variant: 'numbered',
    currentPage: 1,
    totalPages: 3,
    showPageNumbers: true,
  },
}

export const ManyPages: Story = {
  args: {
    variant: 'numbered',
    currentPage: 15,
    totalPages: 50,
    showPageNumbers: true,
    pageRangeDisplayed: 5,
  },
}

export const CustomLabels: Story = {
  args: {
    variant: 'simple',
    currentPage: 1,
    totalPages: 10,
    previousLabel: 'Prev',
    nextLabel: 'Next',
    showInfo: true,
    totalItems: 97,
    itemsPerPage: 10,
  },
}

export const WithoutFirstAndLast: Story = {
  args: {
    variant: 'numbered',
    currentPage: 5,
    totalPages: 20,
    showPageNumbers: true,
    showFirstAndLast: false,
    pageRangeDisplayed: 5,
  },
}

export const WithFirstAndLast: Story = {
  args: {
    variant: 'numbered',
    currentPage: 5,
    totalPages: 20,
    showPageNumbers: true,
    showFirstAndLast: true,
    pageRangeDisplayed: 3,
  },
}

export const LargePageRange: Story = {
  args: {
    variant: 'numbered',
    currentPage: 10,
    totalPages: 20,
    showPageNumbers: true,
    pageRangeDisplayed: 7,
  },
}

export const SmallPageRange: Story = {
  args: {
    variant: 'numbered',
    currentPage: 10,
    totalPages: 20,
    showPageNumbers: true,
    pageRangeDisplayed: 3,
  },
}

export const Interactive: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 10

    return (
      <div>
        <p className="mb-4 text-sm text-gray-600">Current page: {currentPage}</p>
        <Pagination
          variant="numbered"
          currentPage={currentPage}
          totalPages={totalPages}
          showPageNumbers={true}
          onPageChange={setCurrentPage}
        />
      </div>
    )
  },
}

export const InteractiveWithInfo: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 10
    const itemsPerPage = 10
    const totalItems = 97

    return (
      <div>
        <Pagination
          variant="card"
          currentPage={currentPage}
          totalPages={totalPages}
          showInfo={true}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
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
        <Pagination variant="simple" currentPage={1} totalPages={10} showInfo={true} totalItems={97} itemsPerPage={10} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Numbered</h3>
        <Pagination variant="numbered" currentPage={5} totalPages={10} showPageNumbers={true} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Card</h3>
        <Pagination variant="card" currentPage={1} totalPages={10} showInfo={true} totalItems={97} itemsPerPage={10} />
      </div>
    </div>
  ),
}

export const PagePositions: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">First Page</h3>
        <Pagination variant="numbered" currentPage={1} totalPages={10} showPageNumbers={true} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Middle Page</h3>
        <Pagination variant="numbered" currentPage={5} totalPages={10} showPageNumbers={true} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Last Page</h3>
        <Pagination variant="numbered" currentPage={10} totalPages={10} showPageNumbers={true} />
      </div>
    </div>
  ),
}

export const RealWorldExample: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10
    const totalItems = 147

    // Sample data
    const allItems = Array.from({ length: totalItems }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`,
      description: `Description for item ${i + 1}`,
    }))

    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const currentItems = allItems.slice(startIndex, startIndex + itemsPerPage)

    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-bold">Items List</h2>
            <p className="text-gray-600 mt-1">Browse through all items</p>
          </div>

          <div className="divide-y divide-gray-200">
            {currentItems.map((item) => (
              <div key={item.id} className="px-6 py-4 hover:bg-gray-50">
                <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>

          <Pagination
            variant="card"
            currentPage={currentPage}
            totalPages={totalPages}
            showInfo={true}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    )
  },
}
