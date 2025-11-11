import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: '2. Forms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    label: 'Remember me',
  },
}

export const WithDescription: Story = {
  args: {
    label: 'Send notifications',
    description: 'Get notified when someone comments on your posts.',
  },
}

export const WithError: Story = {
  args: {
    label: 'Accept terms',
    description: 'You must accept the terms and conditions.',
    error: 'You must accept the terms to continue.',
  },
}

export const WithoutLabel: Story = {
  args: {
    'aria-label': 'Checkbox without visible label',
  },
}

export const PositionLeft: Story = {
  args: {
    label: 'Enable feature',
    description: 'This enables the experimental feature.',
    position: 'left',
  },
}

export const PositionRight: Story = {
  args: {
    label: 'Enable feature',
    description: 'This enables the experimental feature.',
    position: 'right',
  },
}

export const Checked: Story = {
  args: {
    label: 'Already checked',
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled and checked',
    disabled: true,
    defaultChecked: true,
  },
}

export const LongLabel: Story = {
  args: {
    label: 'I agree to the terms of service and privacy policy',
    description: 'By checking this box, you agree to our terms of service, privacy policy, and cookie policy. You can withdraw your consent at any time by updating your preferences in your account settings.',
  },
}

export const ErrorState: Story = {
  args: {
    label: 'Required field',
    error: 'This field is required',
  },
}

export const MultipleCheckboxes: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Email notifications" description="Receive email about your account activity." />
      <Checkbox label="SMS notifications" description="Receive SMS updates about your orders." />
      <Checkbox label="Push notifications" description="Get push notifications on your mobile device." />
      <Checkbox label="Newsletter" description="Receive our weekly newsletter with updates and tips." />
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-900">Default</h3>
        <Checkbox label="Unchecked" />
        <Checkbox label="Checked" defaultChecked />
        <Checkbox label="Disabled" disabled />
        <Checkbox label="Disabled checked" disabled defaultChecked />
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-900">With Description</h3>
        <Checkbox
          label="Enable notifications"
          description="Get notified about important updates."
        />
        <Checkbox
          label="Enable notifications"
          description="Get notified about important updates."
          defaultChecked
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-900">With Error</h3>
        <Checkbox
          label="Accept terms"
          description="You must accept the terms to continue."
          error="This field is required."
        />
      </div>
    </div>
  ),
}

export const AllPositions: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-900">Checkbox on Left (Default)</h3>
        <Checkbox
          label="Enable feature"
          description="This is the default position."
          position="left"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-900">Checkbox on Right</h3>
        <Checkbox
          label="Enable feature"
          description="This has the checkbox on the right."
          position="right"
        />
      </div>
    </div>
  ),
}

export const FormExample: Story = {
  render: () => (
    <form className="space-y-6 max-w-lg">
      <div>
        <h2 className="text-base font-semibold text-gray-900">Notification preferences</h2>
        <p className="mt-1 text-sm text-gray-500">Choose how you want to be notified.</p>
        <div className="mt-4 space-y-4">
          <Checkbox
            label="Email notifications"
            description="Receive email updates about your account."
            defaultChecked
          />
          <Checkbox
            label="SMS notifications"
            description="Get text messages for important alerts."
          />
          <Checkbox
            label="Push notifications"
            description="Receive push notifications in your browser."
            defaultChecked
          />
        </div>
      </div>

      <div>
        <h2 className="text-base font-semibold text-gray-900">Privacy settings</h2>
        <div className="mt-4 space-y-4">
          <Checkbox
            label="Make profile public"
            description="Your profile will be visible to other users."
          />
          <Checkbox
            label="Show email address"
            description="Display your email on your public profile."
          />
        </div>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <Checkbox
          label="I agree to the terms and conditions"
          error="You must accept the terms to continue."
        />
      </div>
    </form>
  ),
}
