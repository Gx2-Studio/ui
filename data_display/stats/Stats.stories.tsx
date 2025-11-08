import type { Meta, StoryObj } from '@storybook/react'
import { Stats } from './Stats'
import { ArrowDownIcon, ArrowUpIcon, UsersIcon, CreditCardIcon, EnvelopeIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const meta: Meta<typeof Stats> = {
  title: 'Data Display/Stats',
  component: Stats,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Stats>

const basicStats = [
  { name: 'Total Subscribers', value: '71,897', unit: '' },
  { name: 'Avg. Open Rate', value: '58.16', unit: '%' },
  { name: 'Avg. Click Rate', value: '24.57', unit: '%' },
]

const statsWithChanges = [
  { name: 'Total Revenue', value: '$405,091.00', change: '+4.75%', changeType: 'increase' as const },
  { name: 'Total Users', value: '8,450', change: '+54.02%', changeType: 'increase' as const },
  { name: 'Bounce Rate', value: '43.82%', change: '-3.26%', changeType: 'decrease' as const },
  { name: 'Conversion Rate', value: '3.65%', change: '0.00%', changeType: 'neutral' as const },
]

const statsWithIcons = [
  { name: 'Total Users', value: '71,897', change: '+12%', changeType: 'increase' as const, icon: <UsersIcon className="h-6 w-6" /> },
  { name: 'Total Sales', value: '$405,091', change: '+4.75%', changeType: 'increase' as const, icon: <CreditCardIcon className="h-6 w-6" /> },
  { name: 'Email Sent', value: '12,345', change: '-3.26%', changeType: 'decrease' as const, icon: <EnvelopeIcon className="h-6 w-6" /> },
  { name: 'Total Views', value: '892,345', change: '+8.42%', changeType: 'increase' as const, icon: <ChartBarIcon className="h-6 w-6" /> },
]

const twoColumnStats = [
  { name: 'Revenue', value: '$405,091', change: '+4.75%', changeType: 'increase' as const },
  { name: 'Users', value: '8,450', change: '+54.02%', changeType: 'increase' as const },
]

const threeColumnStats = [
  { name: 'Total Revenue', value: '$405,091', change: '+4.75%', changeType: 'increase' as const },
  { name: 'Total Users', value: '8,450', change: '+54.02%', changeType: 'increase' as const },
  { name: 'Bounce Rate', value: '43.82%', change: '-3.26%', changeType: 'decrease' as const },
]

export const Simple: Story = {
  args: {
    variant: 'simple',
    stats: basicStats,
    columns: 3,
  },
}

export const SimpleWithChanges: Story = {
  args: {
    variant: 'simple',
    stats: statsWithChanges,
    columns: 4,
  },
}

export const Cards: Story = {
  args: {
    variant: 'cards',
    stats: statsWithChanges,
    columns: 4,
  },
}

export const CardsWithIcons: Story = {
  args: {
    variant: 'cards',
    stats: statsWithIcons,
    columns: 4,
  },
}

export const Dark: Story = {
  args: {
    variant: 'dark',
    stats: statsWithChanges,
    columns: 4,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const OneColumn: Story = {
  args: {
    variant: 'cards',
    stats: [statsWithChanges[0]],
    columns: 1,
  },
}

export const TwoColumns: Story = {
  args: {
    variant: 'cards',
    stats: twoColumnStats,
    columns: 2,
  },
}

export const ThreeColumns: Story = {
  args: {
    variant: 'cards',
    stats: threeColumnStats,
    columns: 3,
  },
}

export const FourColumns: Story = {
  args: {
    variant: 'cards',
    stats: statsWithChanges,
    columns: 4,
  },
}

export const WithUnits: Story = {
  args: {
    variant: 'simple',
    stats: [
      { name: 'Total Distance', value: '42', unit: 'km' },
      { name: 'Average Speed', value: '24.5', unit: 'km/h' },
      { name: 'Calories Burned', value: '1,234', unit: 'kcal' },
      { name: 'Duration', value: '2.5', unit: 'hours' },
    ],
    columns: 4,
  },
}

export const MixedChangeTypes: Story = {
  args: {
    variant: 'cards',
    stats: [
      { name: 'Revenue', value: '$45,231', change: '+20.1%', changeType: 'increase' as const },
      { name: 'Expenses', value: '$12,456', change: '+5.4%', changeType: 'decrease' as const },
      { name: 'Profit Margin', value: '28%', change: '0.0%', changeType: 'neutral' as const },
      { name: 'Growth Rate', value: '12.5%', change: '-2.3%', changeType: 'decrease' as const },
    ],
    columns: 4,
  },
}

export const LargeNumbers: Story = {
  args: {
    variant: 'cards',
    stats: [
      { name: 'Global Users', value: '8.4M', change: '+12.5%', changeType: 'increase' as const },
      { name: 'API Calls', value: '2.1B', change: '+18.2%', changeType: 'increase' as const },
      { name: 'Data Processed', value: '456TB', change: '+24.7%', changeType: 'increase' as const },
      { name: 'Uptime', value: '99.99%', change: '0.00%', changeType: 'neutral' as const },
    ],
    columns: 4,
  },
}
