import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { EnvelopeIcon, CurrencyDollarIcon, UserIcon } from '@heroicons/react/20/solid'

const meta: Meta<typeof Input> = {
  title: '2. Forms/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
  },
}

export const WithHelpText: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    helpText: 'We\'ll only use this for spam.',
  },
}

export const WithError: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    error: 'Please enter a valid email address.',
  },
}

export const WithCorner: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    corner: 'Forgot?',
  },
}

export const WithLeadingIcon: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    leadingIcon: <EnvelopeIcon />,
  },
}

export const WithTrailingIcon: Story = {
  args: {
    label: 'Username',
    type: 'text',
    placeholder: 'Enter username',
    trailingIcon: <UserIcon />,
  },
}

export const WithLeadingAddon: Story = {
  args: {
    label: 'Website',
    type: 'text',
    placeholder: 'www.example.com',
    leadingAddon: 'https://',
  },
}

export const WithTrailingAddon: Story = {
  args: {
    label: 'Email',
    type: 'text',
    placeholder: 'username',
    trailingAddon: '@example.com',
  },
}

export const WithBothAddons: Story = {
  args: {
    label: 'Price',
    type: 'number',
    placeholder: '0.00',
    leadingAddon: '$',
    trailingAddon: 'USD',
  },
}

export const WithLeadingIconAndAddon: Story = {
  args: {
    label: 'Price',
    type: 'number',
    placeholder: '0.00',
    leadingAddon: <CurrencyDollarIcon className="h-5 w-5 text-gray-400" />,
    trailingAddon: 'USD',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    disabled: true,
    value: 'disabled@example.com',
  },
}

export const Required: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    required: true,
  },
}

export const TypeEmail: Story = {
  args: {
    label: 'Email address',
    type: 'email',
    placeholder: 'you@example.com',
    autoComplete: 'email',
  },
}

export const TypePassword: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    autoComplete: 'current-password',
  },
}

export const TypeNumber: Story = {
  args: {
    label: 'Age',
    type: 'number',
    placeholder: '25',
    min: 0,
    max: 120,
  },
}

export const TypeTel: Story = {
  args: {
    label: 'Phone number',
    type: 'tel',
    placeholder: '+1 (555) 123-4567',
    autoComplete: 'tel',
  },
}

export const TypeUrl: Story = {
  args: {
    label: 'Website',
    type: 'url',
    placeholder: 'https://example.com',
    autoComplete: 'url',
  },
}

export const AllStates: Story = {
  render: () => (
    <div className="space-y-6">
      <Input
        label="Default"
        type="text"
        placeholder="Enter text..."
      />
      <Input
        label="With value"
        type="text"
        value="Some value"
      />
      <Input
        label="With help text"
        type="text"
        placeholder="Enter text..."
        helpText="This is helpful information."
      />
      <Input
        label="With error"
        type="text"
        placeholder="Enter text..."
        error="This field is required."
      />
      <Input
        label="Disabled"
        type="text"
        placeholder="Enter text..."
        disabled
      />
      <Input
        label="Required"
        type="text"
        placeholder="Enter text..."
        required
      />
    </div>
  ),
}

export const AllAddons: Story = {
  render: () => (
    <div className="space-y-6">
      <Input
        label="Leading addon"
        type="text"
        placeholder="www.example.com"
        leadingAddon="https://"
      />
      <Input
        label="Trailing addon"
        type="text"
        placeholder="username"
        trailingAddon="@example.com"
      />
      <Input
        label="Both addons"
        type="number"
        placeholder="0.00"
        leadingAddon="$"
        trailingAddon="USD"
      />
    </div>
  ),
}

export const AllIcons: Story = {
  render: () => (
    <div className="space-y-6">
      <Input
        label="Leading icon"
        type="email"
        placeholder="you@example.com"
        leadingIcon={<EnvelopeIcon />}
      />
      <Input
        label="Trailing icon"
        type="text"
        placeholder="Enter username"
        trailingIcon={<UserIcon />}
      />
      <Input
        label="Icon with error (shows error icon)"
        type="email"
        placeholder="you@example.com"
        leadingIcon={<EnvelopeIcon />}
        error="Invalid email address"
      />
    </div>
  ),
}

export const ComplexExamples: Story = {
  render: () => (
    <div className="space-y-6">
      <Input
        label="Price"
        type="number"
        placeholder="0.00"
        leadingAddon="$"
        trailingAddon="USD"
        helpText="Enter the price in US dollars."
      />
      <Input
        label="Website URL"
        type="url"
        placeholder="www.example.com"
        leadingAddon="https://"
        helpText="Enter your website URL without the protocol."
      />
      <Input
        label="Email address"
        type="email"
        placeholder="you@example.com"
        leadingIcon={<EnvelopeIcon />}
        helpText="We'll never share your email with anyone else."
      />
      <Input
        label="Corporate email"
        type="text"
        placeholder="username"
        trailingAddon="@company.com"
        corner="Optional"
      />
    </div>
  ),
}

export const FormExample: Story = {
  render: () => (
    <form className="space-y-6 max-w-lg">
      <div>
        <h2 className="text-base font-semibold text-gray-900">Contact Information</h2>
        <p className="mt-1 text-sm text-gray-500">
          Please provide your contact details.
        </p>
      </div>

      <Input
        label="Full name"
        type="text"
        placeholder="John Doe"
        required
        autoComplete="name"
      />

      <Input
        label="Email address"
        type="email"
        placeholder="you@example.com"
        required
        autoComplete="email"
        leadingIcon={<EnvelopeIcon />}
      />

      <Input
        label="Phone number"
        type="tel"
        placeholder="+1 (555) 123-4567"
        autoComplete="tel"
        helpText="Include country code if outside the US."
      />

      <Input
        label="Company website"
        type="url"
        placeholder="www.example.com"
        leadingAddon="https://"
        corner="Optional"
      />

      <Input
        label="Annual revenue"
        type="number"
        placeholder="0.00"
        leadingAddon="$"
        trailingAddon="USD"
        helpText="Approximate annual revenue in US dollars."
      />

      <div className="pt-4">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  ),
}
