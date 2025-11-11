import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { ComboboxComponent, ComboboxOption } from './Combobox'

const meta: Meta<typeof ComboboxComponent> = {
  title: '2. Forms/Combobox',
  component: ComboboxComponent,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ComboboxComponent>

const people: ComboboxOption[] = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
]

const peopleWithDescriptions: ComboboxOption[] = [
  { id: 1, name: 'Wade Cooper', description: 'Product Manager' },
  { id: 2, name: 'Arlene Mccoy', description: 'Software Engineer' },
  { id: 3, name: 'Devon Webb', description: 'Designer' },
  { id: 4, name: 'Tom Cook', description: 'Director of Product' },
  { id: 5, name: 'Tanya Fox', description: 'Customer Success Manager' },
]

const peopleWithImages: ComboboxOption[] = [
  {
    id: 1,
    name: 'Leslie Alexander',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Michael Foster',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Dries Vincent',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

const peopleWithStatus: ComboboxOption[] = [
  {
    id: 1,
    name: 'Wade Cooper',
    status: { color: 'bg-green-100 text-green-800', label: 'Active' },
  },
  {
    id: 2,
    name: 'Arlene Mccoy',
    status: { color: 'bg-yellow-100 text-yellow-800', label: 'Away' },
  },
  {
    id: 3,
    name: 'Devon Webb',
    status: { color: 'bg-red-100 text-red-800', label: 'Offline' },
  },
]

const peopleWithDisabled: ComboboxOption[] = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy', disabled: true },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook', disabled: true },
  { id: 5, name: 'Tanya Fox' },
]

export const Default: Story = {
  args: {
    label: 'Assigned to',
    placeholder: 'Search people...',
    options: people,
  },
}

export const WithValue: Story = {
  args: {
    label: 'Assigned to',
    placeholder: 'Search people...',
    options: people,
    value: people[0],
  },
}

export const WithDescriptions: Story = {
  args: {
    label: 'Team member',
    placeholder: 'Search team members...',
    options: peopleWithDescriptions,
  },
}

export const WithImages: Story = {
  args: {
    label: 'Assign to',
    placeholder: 'Search users...',
    options: peopleWithImages,
  },
}

export const WithStatus: Story = {
  args: {
    label: 'Select user',
    placeholder: 'Search users...',
    options: peopleWithStatus,
  },
}

export const WithDisabledOptions: Story = {
  args: {
    label: 'Assigned to',
    placeholder: 'Search people...',
    options: peopleWithDisabled,
    helpText: 'Some options are disabled and cannot be selected.',
  },
}

export const SmallSize: Story = {
  args: {
    label: 'Assigned to',
    placeholder: 'Search...',
    options: people,
    size: 'sm',
  },
}

export const MediumSize: Story = {
  args: {
    label: 'Assigned to',
    placeholder: 'Search...',
    options: people,
    size: 'md',
  },
}

export const LargeSize: Story = {
  args: {
    label: 'Assigned to',
    placeholder: 'Search...',
    options: people,
    size: 'lg',
  },
}

export const WithHelpText: Story = {
  args: {
    label: 'Project owner',
    placeholder: 'Search...',
    options: people,
    helpText: 'This person will have full access to the project.',
  },
}

export const WithError: Story = {
  args: {
    label: 'Assigned to',
    placeholder: 'Search...',
    options: people,
    error: 'Please select a team member.',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Assigned to',
    placeholder: 'Search...',
    options: people,
    disabled: true,
  },
}

export const AllowCustom: Story = {
  args: {
    label: 'Tags',
    placeholder: 'Search or create tags...',
    options: [
      { id: 1, name: 'Bug' },
      { id: 2, name: 'Feature' },
      { id: 3, name: 'Enhancement' },
    ],
    allowCustom: true,
    helpText: 'Start typing to create a new tag.',
  },
}

export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState<ComboboxOption | null>(null)

    return (
      <div>
        <ComboboxComponent
          label="Assigned to"
          placeholder="Search people..."
          options={people}
          value={selected}
          onChange={setSelected}
        />
        {selected && (
          <p className="mt-4 text-sm text-gray-600">
            Selected: {selected.name}
          </p>
        )}
      </div>
    )
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <ComboboxComponent
        label="Small size"
        placeholder="Search..."
        options={people}
        size="sm"
      />
      <ComboboxComponent
        label="Medium size (default)"
        placeholder="Search..."
        options={people}
        size="md"
      />
      <ComboboxComponent
        label="Large size"
        placeholder="Search..."
        options={people}
        size="lg"
      />
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="space-y-6">
      <ComboboxComponent
        label="Default"
        placeholder="Search..."
        options={people}
      />
      <ComboboxComponent
        label="With value"
        placeholder="Search..."
        options={people}
        value={people[0]}
      />
      <ComboboxComponent
        label="With help text"
        placeholder="Search..."
        options={people}
        helpText="This is helpful information."
      />
      <ComboboxComponent
        label="With error"
        placeholder="Search..."
        options={people}
        error="This field is required."
      />
      <ComboboxComponent
        label="Disabled"
        placeholder="Search..."
        options={people}
        disabled
      />
    </div>
  ),
}

export const ComplexExample: Story = {
  render: () => {
    const [assignee, setAssignee] = useState<ComboboxOption | null>(null)

    return (
      <div className="max-w-lg space-y-6">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Create new task</h2>
          <p className="mt-1 text-sm text-gray-500">Assign a team member to this task.</p>
        </div>

        <ComboboxComponent
          label="Assigned to"
          placeholder="Search team members..."
          options={peopleWithDescriptions}
          value={assignee}
          onChange={setAssignee}
          helpText="The assigned person will be notified."
        />

        {assignee && (
          <div className="rounded-md bg-blue-50 p-4">
            <div className="text-sm text-blue-700">
              {assignee.name} will be notified about this task.
            </div>
          </div>
        )}
      </div>
    )
  },
}
