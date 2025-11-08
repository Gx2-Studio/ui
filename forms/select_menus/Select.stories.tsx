import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Select, SelectOption, NativeSelect } from './Select'

const meta: Meta<typeof Select> = {
  title: 'Forms/Select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Select>

const countries: SelectOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'mx', label: 'Mexico' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
]

const people: SelectOption[] = [
  { value: 'wade', label: 'Wade Cooper' },
  { value: 'arlene', label: 'Arlene Mccoy' },
  { value: 'devon', label: 'Devon Webb' },
  { value: 'tom', label: 'Tom Cook' },
  { value: 'tanya', label: 'Tanya Fox' },
]

const peopleWithDescriptions: SelectOption[] = [
  { value: 'wade', label: 'Wade Cooper', description: 'Product Manager' },
  { value: 'arlene', label: 'Arlene Mccoy', description: 'Software Engineer' },
  { value: 'devon', label: 'Devon Webb', description: 'Designer' },
  { value: 'tom', label: 'Tom Cook', description: 'Director of Product' },
]

const peopleWithAvatars: SelectOption[] = [
  {
    value: 'leslie',
    label: 'Leslie Alexander',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    value: 'michael',
    label: 'Michael Foster',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    value: 'dries',
    label: 'Dries Vincent',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

const optionsWithDisabled: SelectOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2', disabled: true },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4', disabled: true },
  { value: 'option5', label: 'Option 5' },
]

export const Default: Story = {
  args: {
    label: 'Country',
    options: countries,
    placeholder: 'Select a country',
  },
}

export const WithValue: Story = {
  args: {
    label: 'Country',
    options: countries,
    value: 'us',
  },
}

export const WithDescriptions: Story = {
  args: {
    label: 'Assigned to',
    options: peopleWithDescriptions,
    placeholder: 'Select a person',
  },
}

export const WithAvatars: Story = {
  args: {
    label: 'Assign to',
    options: peopleWithAvatars,
    placeholder: 'Select a person',
  },
}

export const WithHelpText: Story = {
  args: {
    label: 'Country',
    options: countries,
    placeholder: 'Select a country',
    helpText: 'Choose the country where you reside.',
  },
}

export const WithError: Story = {
  args: {
    label: 'Country',
    options: countries,
    placeholder: 'Select a country',
    error: 'Please select a country.',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Country',
    options: countries,
    value: 'us',
    disabled: true,
  },
}

export const WithDisabledOptions: Story = {
  args: {
    label: 'Select an option',
    options: optionsWithDisabled,
    placeholder: 'Choose one',
    helpText: 'Some options are disabled and cannot be selected.',
  },
}

export const CustomPlaceholder: Story = {
  args: {
    label: 'Team member',
    options: people,
    placeholder: 'Choose a team member...',
  },
}

export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState<string | number>()

    return (
      <div>
        <Select
          label="Country"
          options={countries}
          value={selected}
          onChange={setSelected}
          placeholder="Select a country"
        />
        {selected && (
          <p className="mt-4 text-sm text-gray-600">
            Selected: {countries.find(c => c.value === selected)?.label}
          </p>
        )}
      </div>
    )
  },
}

export const AllStates: Story = {
  render: () => (
    <div className="space-y-6">
      <Select
        label="Default"
        options={countries}
        placeholder="Select a country"
      />
      <Select
        label="With value"
        options={countries}
        value="us"
      />
      <Select
        label="With help text"
        options={countries}
        placeholder="Select a country"
        helpText="This is helpful information."
      />
      <Select
        label="With error"
        options={countries}
        placeholder="Select a country"
        error="This field is required."
      />
      <Select
        label="Disabled"
        options={countries}
        value="us"
        disabled
      />
    </div>
  ),
}

export const AllFeatures: Story = {
  render: () => (
    <div className="space-y-6">
      <Select
        label="Simple options"
        options={countries}
        placeholder="Select a country"
      />
      <Select
        label="With descriptions"
        options={peopleWithDescriptions}
        placeholder="Select a person"
      />
      <Select
        label="With avatars"
        options={peopleWithAvatars}
        placeholder="Select a person"
      />
      <Select
        label="With disabled options"
        options={optionsWithDisabled}
        placeholder="Choose one"
      />
    </div>
  ),
}

export const FormExample: Story = {
  render: () => {
    const [country, setCountry] = useState<string | number>()
    const [assignee, setAssignee] = useState<string | number>()

    return (
      <form className="space-y-6 max-w-lg">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Shipping Information</h2>
          <p className="mt-1 text-sm text-gray-500">
            Enter your shipping details.
          </p>
        </div>

        <Select
          label="Country"
          options={countries}
          value={country}
          onChange={setCountry}
          placeholder="Select a country"
          helpText="Choose the country for shipping."
        />

        <Select
          label="Assigned to"
          options={peopleWithDescriptions}
          value={assignee}
          onChange={setAssignee}
          placeholder="Select a team member"
          helpText="Who should handle this shipment?"
        />

        <div className="pt-4">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Continue
          </button>
        </div>
      </form>
    )
  },
}

export const NativeSelectDefault: Story = {
  render: () => (
    <NativeSelect
      label="Country"
      options={countries}
      placeholder="Select a country"
    />
  ),
}

export const NativeSelectWithValue: Story = {
  render: () => (
    <NativeSelect
      label="Country"
      options={countries}
      value="us"
    />
  ),
}

export const NativeSelectWithError: Story = {
  render: () => (
    <NativeSelect
      label="Country"
      options={countries}
      placeholder="Select a country"
      error="Please select a country."
    />
  ),
}

export const NativeSelectDisabled: Story = {
  render: () => (
    <NativeSelect
      label="Country"
      options={countries}
      value="us"
      disabled
    />
  ),
}

export const ComparisonHeadlessVsNative: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Headless UI Select (Custom)</h3>
        <div className="space-y-6">
          <Select
            label="Simple"
            options={countries}
            placeholder="Select a country"
          />
          <Select
            label="With descriptions"
            options={peopleWithDescriptions}
            placeholder="Select a person"
          />
          <Select
            label="With avatars"
            options={peopleWithAvatars}
            placeholder="Select a person"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Native HTML Select</h3>
        <div className="space-y-6">
          <NativeSelect
            label="Simple"
            options={countries}
            placeholder="Select a country"
          />
          <NativeSelect
            label="With help text"
            options={countries}
            placeholder="Select a country"
            helpText="This is the native HTML select element."
          />
          <NativeSelect
            label="With error"
            options={countries}
            placeholder="Select a country"
            error="This field is required."
          />
        </div>
      </div>
    </div>
  ),
}
