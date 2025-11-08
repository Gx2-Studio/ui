import type { Meta, StoryObj } from '@storybook/react'
import { GridList, GridListItem } from './GridList'

const meta: Meta<typeof GridList> = {
  title: 'Lists/GridList',
  component: GridList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof GridList>

const sampleItems: GridListItem[] = [
  {
    id: '1',
    title: 'Leslie Abbott',
    subtitle: 'Co-Founder / CEO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
  {
    id: '2',
    title: 'Michael Foster',
    subtitle: 'Co-Founder / CTO',
    initials: 'MF',
    href: '#',
  },
  {
    id: '3',
    title: 'Dries Vincent',
    subtitle: 'Business Relations',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
  {
    id: '4',
    title: 'Lindsay Walton',
    subtitle: 'Front-end Developer',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
  {
    id: '5',
    title: 'Courtney Henry',
    subtitle: 'Designer',
    initials: 'CH',
    href: '#',
  },
  {
    id: '6',
    title: 'Tom Cook',
    subtitle: 'Director of Product',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
]

const contactCardItems: GridListItem[] = [
  {
    id: '1',
    title: 'Jane Cooper',
    subtitle: 'Regional Paradigm Technician',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    stats: [{ label: 'Phone', value: '(555) 123-4567' }],
    actions: [
      { label: 'Email', href: '#' },
      { label: 'Call', href: '#' },
    ],
  },
  {
    id: '2',
    title: 'Cody Fisher',
    subtitle: 'Product Directives Officer',
    initials: 'CF',
    stats: [{ label: 'Phone', value: '(555) 234-5678' }],
    actions: [
      { label: 'Email', href: '#' },
      { label: 'Call', href: '#' },
    ],
  },
  {
    id: '3',
    title: 'Esther Howard',
    subtitle: 'Forward Response Developer',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    stats: [{ label: 'Phone', value: '(555) 345-6789' }],
    actions: [
      { label: 'Email', href: '#' },
      { label: 'Call', href: '#' },
    ],
  },
]

const imageItems: GridListItem[] = [
  {
    id: '1',
    title: 'Product Launch',
    description: 'Q4 2024 release',
    image: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    badge: { text: 'Active', color: 'green' },
    href: '#',
  },
  {
    id: '2',
    title: 'Team Building',
    description: 'Annual event',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    badge: { text: 'Upcoming', color: 'blue' },
    href: '#',
  },
  {
    id: '3',
    title: 'Marketing Campaign',
    description: 'Spring 2024',
    badge: { text: 'Completed', color: 'gray' },
    href: '#',
  },
  {
    id: '4',
    title: 'Conference 2024',
    description: 'Tech summit',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    badge: { text: 'Planning', color: 'yellow' },
    href: '#',
  },
]

export const Simple: Story = {
  args: {
    items: sampleItems,
    variant: 'simple',
    columns: 3,
    gap: 'md',
  },
}

export const ContactCards: Story = {
  args: {
    items: contactCardItems,
    variant: 'contact-cards',
    columns: 3,
    gap: 'md',
  },
}

export const SmallPortraits: Story = {
  args: {
    items: sampleItems,
    variant: 'small-portraits',
    columns: 3,
    gap: 'md',
  },
}

export const HorizontalLinks: Story = {
  args: {
    items: sampleItems,
    variant: 'horizontal-links',
    columns: 2,
    gap: 'md',
  },
}

export const ImagesWithDetails: Story = {
  args: {
    items: imageItems,
    variant: 'images-details',
    columns: 3,
    gap: 'md',
  },
}

export const LogosDescriptions: Story = {
  args: {
    items: imageItems,
    variant: 'logos-descriptions',
    columns: 4,
    gap: 'md',
  },
}

export const ActionsWithBorders: Story = {
  args: {
    items: contactCardItems,
    variant: 'actions-borders',
    columns: 3,
    gap: 'md',
  },
}

export const OneColumn: Story = {
  args: {
    items: sampleItems.slice(0, 3),
    variant: 'simple',
    columns: 1,
    gap: 'md',
  },
}

export const TwoColumns: Story = {
  args: {
    items: sampleItems,
    variant: 'simple',
    columns: 2,
    gap: 'md',
  },
}

export const ThreeColumns: Story = {
  args: {
    items: sampleItems,
    variant: 'simple',
    columns: 3,
    gap: 'md',
  },
}

export const FourColumns: Story = {
  args: {
    items: sampleItems.slice(0, 4),
    variant: 'simple',
    columns: 4,
    gap: 'md',
  },
}

export const SixColumns: Story = {
  args: {
    items: [...sampleItems, ...sampleItems],
    variant: 'simple',
    columns: 6,
    gap: 'sm',
  },
}

export const SmallGap: Story = {
  args: {
    items: sampleItems,
    variant: 'simple',
    columns: 3,
    gap: 'sm',
  },
}

export const MediumGap: Story = {
  args: {
    items: sampleItems,
    variant: 'simple',
    columns: 3,
    gap: 'md',
  },
}

export const LargeGap: Story = {
  args: {
    items: sampleItems,
    variant: 'simple',
    columns: 3,
    gap: 'lg',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="text-lg font-semibold mb-4">Simple</h3>
        <GridList items={sampleItems} variant="simple" columns={3} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Contact Cards</h3>
        <GridList items={contactCardItems} variant="contact-cards" columns={3} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Small Portraits</h3>
        <GridList items={sampleItems} variant="small-portraits" columns={3} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Horizontal Links</h3>
        <GridList items={sampleItems} variant="horizontal-links" columns={2} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Images with Details</h3>
        <GridList items={imageItems} variant="images-details" columns={3} />
      </div>
    </div>
  ),
}

export const AllColumns: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">1 Column</h3>
        <GridList items={sampleItems.slice(0, 3)} variant="simple" columns={1} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">2 Columns</h3>
        <GridList items={sampleItems.slice(0, 4)} variant="simple" columns={2} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">3 Columns</h3>
        <GridList items={sampleItems} variant="simple" columns={3} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">4 Columns</h3>
        <GridList items={sampleItems.slice(0, 4)} variant="simple" columns={4} />
      </div>
    </div>
  ),
}

export const RealWorldExample: Story = {
  render: () => (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Team Directory</h2>
          <p className="text-gray-600">Connect with your team members</p>
        </div>
        <GridList items={contactCardItems} variant="contact-cards" columns={3} gap="lg" />
      </div>
    </div>
  ),
}
