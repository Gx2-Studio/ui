import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { RadioGroup, RadioOption } from './RadioGroup'

const meta: Meta<typeof RadioGroup> = {
  title: 'Forms/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RadioGroup>

const notificationMethods: RadioOption[] = [
  { value: 'email', label: 'Email', description: 'Get notified via email' },
  { value: 'sms', label: 'SMS', description: 'Get notified via text message' },
  { value: 'push', label: 'Push notification', description: 'Get notified via push notification' },
]

const simpleOptions: RadioOption[] = [
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
]

const planOptions: RadioOption[] = [
  { value: 'startup', label: 'Startup', description: 'Up to 5 users' },
  { value: 'business', label: 'Business', description: 'Up to 20 users' },
  { value: 'enterprise', label: 'Enterprise', description: 'Unlimited users' },
]

const optionsWithDisabled: RadioOption[] = [
  { value: 'option1', label: 'Option 1', description: 'This option is available' },
  { value: 'option2', label: 'Option 2', description: 'This option is disabled', disabled: true },
  { value: 'option3', label: 'Option 3', description: 'This option is available' },
]

export const VerticalLayout: Story = {
  args: {
    label: 'Notification method',
    description: 'How would you like to receive notifications?',
    options: notificationMethods,
    layout: 'vertical',
  },
}

export const HorizontalLayout: Story = {
  args: {
    label: 'Size',
    description: 'Choose your preferred size',
    options: simpleOptions,
    layout: 'horizontal',
  },
}

export const CardsLayout: Story = {
  args: {
    label: 'Select a plan',
    description: 'Choose the plan that works best for you',
    options: planOptions,
    layout: 'cards',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Choose an option',
    options: simpleOptions,
    layout: 'vertical',
  },
}

export const WithDescription: Story = {
  args: {
    label: 'Notification preferences',
    description: 'Select how you\'d like to be notified about account activity',
    options: notificationMethods,
    layout: 'vertical',
  },
}

export const WithoutDescription: Story = {
  args: {
    label: 'Size',
    options: simpleOptions,
    layout: 'vertical',
  },
}

export const WithError: Story = {
  args: {
    label: 'Notification method',
    description: 'How would you like to receive notifications?',
    options: notificationMethods,
    error: 'Please select a notification method.',
    layout: 'vertical',
  },
}

export const WithDisabledOptions: Story = {
  args: {
    label: 'Select an option',
    description: 'Some options may not be available',
    options: optionsWithDisabled,
    layout: 'vertical',
  },
}

export const WithValue: Story = {
  args: {
    label: 'Notification method',
    options: notificationMethods,
    value: 'email',
    layout: 'vertical',
  },
}

export const SimpleVertical: Story = {
  args: {
    label: 'Size',
    options: simpleOptions,
    layout: 'vertical',
  },
}

export const SimpleHorizontal: Story = {
  args: {
    label: 'Size',
    options: simpleOptions,
    layout: 'horizontal',
  },
}

export const CardsWithDescriptions: Story = {
  args: {
    label: 'Select your plan',
    description: 'Choose the best plan for your team',
    options: [
      { value: 'hobby', label: 'Hobby', description: 'Perfect for side projects. Up to 3 projects.' },
      { value: 'freelancer', label: 'Freelancer', description: 'For professional freelancers. Up to 10 projects.' },
      { value: 'startup', label: 'Startup', description: 'For growing teams. Up to 50 projects.' },
    ],
    layout: 'cards',
  },
}

export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState<string | number>('email')

    return (
      <div>
        <RadioGroup
          label="Notification method"
          description="How would you like to receive notifications?"
          options={notificationMethods}
          value={selected}
          onChange={setSelected}
          layout="vertical"
        />
        {selected && (
          <p className="mt-4 text-sm text-gray-600">
            Selected: {notificationMethods.find(o => o.value === selected)?.label}
          </p>
        )}
      </div>
    )
  },
}

export const AllLayouts: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Vertical Layout</h3>
        <RadioGroup
          label="Notification method"
          description="How would you like to receive notifications?"
          options={notificationMethods}
          layout="vertical"
        />
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Horizontal Layout</h3>
        <RadioGroup
          label="Size"
          description="Choose your preferred size"
          options={simpleOptions}
          layout="horizontal"
        />
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Cards Layout</h3>
        <RadioGroup
          label="Select a plan"
          description="Choose the plan that works best for you"
          options={planOptions}
          layout="cards"
        />
      </div>
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Default</h3>
        <RadioGroup
          label="Notification method"
          options={notificationMethods}
          layout="vertical"
        />
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">With Value</h3>
        <RadioGroup
          label="Notification method"
          options={notificationMethods}
          value="email"
          layout="vertical"
        />
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">With Description</h3>
        <RadioGroup
          label="Notification method"
          description="Select your preferred notification method"
          options={notificationMethods}
          layout="vertical"
        />
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">With Error</h3>
        <RadioGroup
          label="Notification method"
          options={notificationMethods}
          error="Please select a notification method."
          layout="vertical"
        />
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">With Disabled Options</h3>
        <RadioGroup
          label="Select an option"
          options={optionsWithDisabled}
          layout="vertical"
        />
      </div>
    </div>
  ),
}

export const FormExample: Story = {
  render: () => {
    const [notifications, setNotifications] = useState<string | number>('email')
    const [privacy, setPrivacy] = useState<string | number>('public')

    return (
      <form className="space-y-12 max-w-3xl">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Account Settings</h2>
          <p className="mt-1 text-sm text-gray-500">
            Configure your account preferences.
          </p>
        </div>

        <RadioGroup
          label="Notification preferences"
          description="Choose how you'd like to receive notifications"
          options={notificationMethods}
          value={notifications}
          onChange={setNotifications}
          layout="vertical"
        />

        <RadioGroup
          label="Privacy settings"
          description="Control who can see your profile"
          options={[
            { value: 'public', label: 'Public', description: 'Anyone can see your profile' },
            { value: 'private', label: 'Private', description: 'Only you can see your profile' },
            { value: 'friends', label: 'Friends only', description: 'Only your friends can see your profile' },
          ]}
          value={privacy}
          onChange={setPrivacy}
          layout="cards"
        />

        <div className="pt-4 border-t border-gray-200">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Save Settings
          </button>
        </div>
      </form>
    )
  },
}

export const PricingExample: Story = {
  render: () => {
    const [selectedPlan, setSelectedPlan] = useState<string | number>('business')

    return (
      <div className="max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Choose your plan</h2>
          <p className="mt-2 text-lg text-gray-600">
            Select the perfect plan for your needs
          </p>
        </div>

        <RadioGroup
          options={[
            {
              value: 'starter',
              label: 'Starter',
              description: '$9/month - Perfect for individuals and small projects',
            },
            {
              value: 'business',
              label: 'Business',
              description: '$29/month - Best for growing teams and businesses',
            },
            {
              value: 'enterprise',
              label: 'Enterprise',
              description: '$99/month - Advanced features for large organizations',
            },
          ]}
          value={selectedPlan}
          onChange={setSelectedPlan}
          layout="cards"
        />

        <div className="mt-8 text-center">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Continue with {selectedPlan} plan
          </button>
        </div>
      </div>
    )
  },
}
