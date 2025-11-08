import type { Meta, StoryObj } from '@storybook/react'
import { DescriptionList } from './DescriptionList'
import { PaperClipIcon } from '@heroicons/react/20/solid'

const meta: Meta<typeof DescriptionList> = {
  title: 'Data Display/DescriptionList',
  component: DescriptionList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DescriptionList>

const basicItems = [
  { term: 'Full name', description: 'Margot Foster' },
  { term: 'Application for', description: 'Backend Developer' },
  { term: 'Email address', description: 'margotfoster@example.com' },
  { term: 'Salary expectation', description: '$120,000' },
  { term: 'About', description: 'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident.' },
]

const attachments = [
  { name: 'resume_back_end_developer.pdf', size: '2.4mb', url: '#' },
  { name: 'coverletter_back_end_developer.pdf', size: '4.5mb', url: '#' },
]

const attachmentsWithIcons = [
  { name: 'resume_back_end_developer.pdf', size: '2.4mb', url: '#', icon: <PaperClipIcon /> },
  { name: 'coverletter_back_end_developer.pdf', size: '4.5mb', url: '#', icon: <PaperClipIcon /> },
]

const itemsWithActions = [
  {
    term: 'Email address',
    description: 'margotfoster@example.com',
    action: <button className="font-medium text-indigo-600 hover:text-indigo-500">Update</button>
  },
  {
    term: 'Phone number',
    description: '+1 (555) 123-4567',
    action: <button className="font-medium text-indigo-600 hover:text-indigo-500">Update</button>
  },
  {
    term: 'Address',
    description: '123 Main St, San Francisco, CA 94105',
    action: <button className="font-medium text-indigo-600 hover:text-indigo-500">Update</button>
  },
]

export const Default: Story = {
  args: {
    items: basicItems,
  },
}

export const WithTitle: Story = {
  args: {
    title: 'Applicant Information',
    subtitle: 'Personal details and application.',
    items: basicItems,
  },
}

export const WithAttachments: Story = {
  args: {
    title: 'Applicant Information',
    subtitle: 'Personal details and application.',
    items: basicItems,
    attachments: attachments,
  },
}

export const WithAttachmentIcons: Story = {
  args: {
    title: 'Applicant Information',
    subtitle: 'Personal details and application.',
    items: basicItems,
    attachments: attachmentsWithIcons,
  },
}

export const Striped: Story = {
  args: {
    variant: 'striped',
    title: 'Applicant Information',
    subtitle: 'Personal details and application.',
    items: basicItems,
  },
}

export const Card: Story = {
  args: {
    variant: 'card',
    title: 'Applicant Information',
    subtitle: 'Personal details and application.',
    items: basicItems,
  },
}

export const Dark: Story = {
  args: {
    variant: 'dark',
    title: 'Applicant Information',
    subtitle: 'Personal details and application.',
    items: basicItems,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const StackedLayout: Story = {
  args: {
    layout: 'stacked',
    title: 'Applicant Information',
    items: basicItems,
  },
}

export const HorizontalLayout: Story = {
  args: {
    layout: 'horizontal',
    title: 'Applicant Information',
    items: basicItems,
  },
}

export const WithActions: Story = {
  args: {
    title: 'Account Settings',
    subtitle: 'Manage your account information.',
    items: itemsWithActions,
  },
}

export const Complete: Story = {
  args: {
    variant: 'card',
    layout: 'horizontal',
    title: 'Complete Application',
    subtitle: 'All details and attachments.',
    items: basicItems,
    attachments: attachmentsWithIcons,
  },
}
