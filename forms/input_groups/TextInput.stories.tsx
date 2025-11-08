import type { Meta, StoryObj } from '@storybook/react'
import { TextInput } from './TextInput'
import { EnvelopeIcon, MagnifyingGlassIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid'

const meta: Meta<typeof TextInput> = {
  title: 'Forms/TextInput',
  component: TextInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TextInput>

export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Email',
    placeholder: 'you@example.com',
  },
}

export const Pill: Story = {
  args: {
    variant: 'pill',
    label: 'Search',
    placeholder: 'Search...',
  },
}

export const Borderless: Story = {
  args: {
    variant: 'borderless',
    label: 'Name',
    placeholder: 'Enter your name',
  },
}

export const WithIcon: Story = {
  args: {
    variant: 'with-icon',
    label: 'Email',
    placeholder: 'you@example.com',
    icon: <EnvelopeIcon className="h-5 w-5 text-gray-400" />,
    iconPosition: 'left',
  },
}

export const WithIconRight: Story = {
  args: {
    variant: 'with-icon',
    label: 'Search',
    placeholder: 'Search...',
    icon: <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />,
    iconPosition: 'right',
  },
}

export const WithShortcut: Story = {
  args: {
    variant: 'with-shortcut',
    label: 'Search',
    placeholder: 'Quick search...',
    shortcut: '⌘K',
  },
}

export const WithAddonLeft: Story = {
  args: {
    variant: 'with-addon',
    label: 'Website',
    placeholder: 'www.example.com',
    addon: 'https://',
    addonPosition: 'left',
  },
}

export const WithAddonRight: Story = {
  args: {
    variant: 'with-addon',
    label: 'Email',
    placeholder: 'username',
    addon: '@example.com',
    addonPosition: 'right',
  },
}

export const WithError: Story = {
  args: {
    variant: 'with-error',
    label: 'Email',
    placeholder: 'you@example.com',
    error: 'Please enter a valid email address.',
  },
}

export const WithTrailingIcon: Story = {
  args: {
    variant: 'with-trailing-icon',
    label: 'Help',
    placeholder: 'How can we help?',
    icon: <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" />,
  },
}

export const GrayWithBottomBorder: Story = {
  args: {
    variant: 'gray-with-bottom-border',
    label: 'First name',
    placeholder: 'Enter first name',
  },
}

export const InsetLabel: Story = {
  args: {
    variant: 'inset-label',
    label: 'Name',
    placeholder: 'Enter your name',
  },
}

export const OverlappingLabel: Story = {
  args: {
    variant: 'overlapping-label',
    label: 'Email address',
    placeholder: 'you@example.com',
  },
}

export const WithHelpText: Story = {
  args: {
    variant: 'default',
    label: 'Username',
    placeholder: 'johndoe',
    helpText: 'Choose a unique username for your account.',
  },
}

export const WithCornerHint: Story = {
  args: {
    variant: 'default',
    label: 'Password',
    placeholder: 'Enter password',
    cornerHint: 'Optional',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'default',
    label: 'Email',
    placeholder: 'you@example.com',
    disabled: true,
    value: 'disabled@example.com',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <TextInput
        variant="default"
        label="Default"
        placeholder="Enter text..."
      />
      <TextInput
        variant="pill"
        label="Pill"
        placeholder="Search..."
      />
      <TextInput
        variant="borderless"
        label="Borderless"
        placeholder="Enter text..."
      />
      <TextInput
        variant="with-icon"
        label="With icon (left)"
        placeholder="you@example.com"
        icon={<EnvelopeIcon className="h-5 w-5 text-gray-400" />}
        iconPosition="left"
      />
      <TextInput
        variant="with-icon"
        label="With icon (right)"
        placeholder="Search..."
        icon={<MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />}
        iconPosition="right"
      />
      <TextInput
        variant="with-shortcut"
        label="With shortcut"
        placeholder="Quick search..."
        shortcut="⌘K"
      />
      <TextInput
        variant="with-addon"
        label="With addon (left)"
        placeholder="www.example.com"
        addon="https://"
        addonPosition="left"
      />
      <TextInput
        variant="with-addon"
        label="With addon (right)"
        placeholder="username"
        addon="@example.com"
        addonPosition="right"
      />
      <TextInput
        variant="with-error"
        label="With error"
        placeholder="you@example.com"
        error="This field is required."
      />
      <TextInput
        variant="with-trailing-icon"
        label="With trailing icon"
        placeholder="How can we help?"
        icon={<QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" />}
      />
      <TextInput
        variant="gray-with-bottom-border"
        label="Gray with bottom border"
        placeholder="Enter text..."
      />
      <TextInput
        variant="inset-label"
        label="Inset label"
        placeholder="Enter text..."
      />
      <TextInput
        variant="overlapping-label"
        label="Overlapping label"
        placeholder="you@example.com"
      />
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="space-y-6">
      <TextInput
        label="Default"
        placeholder="Enter text..."
      />
      <TextInput
        label="With value"
        value="Some value"
      />
      <TextInput
        label="With help text"
        placeholder="Enter text..."
        helpText="This is helpful information."
      />
      <TextInput
        label="With error"
        placeholder="Enter text..."
        error="This field is required."
      />
      <TextInput
        label="With corner hint"
        placeholder="Enter text..."
        cornerHint="Optional"
      />
      <TextInput
        label="Disabled"
        placeholder="Enter text..."
        disabled
      />
    </div>
  ),
}

export const IconPositions: Story = {
  render: () => (
    <div className="space-y-6">
      <TextInput
        variant="with-icon"
        label="Icon on left"
        placeholder="you@example.com"
        icon={<EnvelopeIcon className="h-5 w-5 text-gray-400" />}
        iconPosition="left"
      />
      <TextInput
        variant="with-icon"
        label="Icon on right"
        placeholder="Search..."
        icon={<MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />}
        iconPosition="right"
      />
    </div>
  ),
}

export const AddonPositions: Story = {
  render: () => (
    <div className="space-y-6">
      <TextInput
        variant="with-addon"
        label="Addon on left"
        placeholder="www.example.com"
        addon="https://"
        addonPosition="left"
      />
      <TextInput
        variant="with-addon"
        label="Addon on right"
        placeholder="username"
        addon="@example.com"
        addonPosition="right"
      />
    </div>
  ),
}

export const LabelVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <TextInput
        variant="default"
        label="Default label"
        placeholder="Enter text..."
      />
      <TextInput
        variant="inset-label"
        label="Inset label"
        placeholder="Enter text..."
      />
      <TextInput
        variant="overlapping-label"
        label="Overlapping label"
        placeholder="Enter text..."
      />
    </div>
  ),
}

export const ComplexExamples: Story = {
  render: () => (
    <div className="space-y-6">
      <TextInput
        variant="with-icon"
        label="Email address"
        placeholder="you@example.com"
        icon={<EnvelopeIcon className="h-5 w-5 text-gray-400" />}
        iconPosition="left"
        helpText="We'll never share your email with anyone else."
      />
      <TextInput
        variant="with-shortcut"
        label="Quick search"
        placeholder="Search..."
        shortcut="⌘K"
        helpText="Press the shortcut to focus this field."
      />
      <TextInput
        variant="with-addon"
        label="Website URL"
        placeholder="www.example.com"
        addon="https://"
        addonPosition="left"
        cornerHint="Optional"
        helpText="Enter your website URL without the protocol."
      />
      <TextInput
        variant="with-error"
        label="Username"
        placeholder="johndoe"
        error="This username is already taken."
        cornerHint="Required"
      />
    </div>
  ),
}

export const FormExample: Story = {
  render: () => (
    <form className="space-y-6 max-w-lg">
      <div>
        <h2 className="text-base font-semibold text-gray-900">Profile Settings</h2>
        <p className="mt-1 text-sm text-gray-500">
          Update your profile information.
        </p>
      </div>

      <TextInput
        variant="default"
        label="Username"
        placeholder="johndoe"
        helpText="This will be your public username."
      />

      <TextInput
        variant="with-icon"
        label="Email"
        type="email"
        placeholder="you@example.com"
        icon={<EnvelopeIcon className="h-5 w-5 text-gray-400" />}
        iconPosition="left"
      />

      <TextInput
        variant="with-addon"
        label="Website"
        placeholder="www.example.com"
        addon="https://"
        addonPosition="left"
        cornerHint="Optional"
      />

      <TextInput
        variant="inset-label"
        label="Bio"
        placeholder="Tell us about yourself..."
      />

      <TextInput
        variant="with-shortcut"
        label="Quick notes"
        placeholder="Add a quick note..."
        shortcut="⌘N"
        helpText="Use the shortcut to quickly add notes."
      />

      <div className="pt-4">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
        >
          Save Changes
        </button>
      </div>
    </form>
  ),
}
