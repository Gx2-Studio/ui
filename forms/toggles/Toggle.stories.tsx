import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Toggle } from './Toggle'
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'

const meta: Meta<typeof Toggle> = {
  title: '2. Forms/Toggle',
  component: Toggle,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
}

export const WithDescription: Story = {
  args: {
    label: 'Annual billing',
    description: 'Save 20% with annual billing',
  },
}

export const WithoutLabel: Story = {
  args: {
    srOnly: 'Enable feature',
  },
}

export const SmallSize: Story = {
  args: {
    label: 'Enable feature',
    size: 'sm',
  },
}

export const MediumSize: Story = {
  args: {
    label: 'Enable feature',
    size: 'md',
  },
}

export const LabelLeft: Story = {
  args: {
    label: 'Enable notifications',
    description: 'Get notified about updates',
    labelPosition: 'left',
  },
}

export const LabelRight: Story = {
  args: {
    label: 'Enable notifications',
    description: 'Get notified about updates',
    labelPosition: 'right',
  },
}

export const Checked: Story = {
  args: {
    label: 'Enabled by default',
    checked: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled toggle',
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled and checked',
    disabled: true,
    checked: true,
  },
}

export const WithCheckIcon: Story = {
  args: {
    label: 'Accept terms',
    icon: <CheckIcon />,
    checked: true,
  },
}

export const Interactive: Story = {
  render: () => {
    const [enabled, setEnabled] = useState(false)

    return (
      <div>
        <Toggle
          label="Enable notifications"
          description="Get notified about account activity"
          checked={enabled}
          onChange={setEnabled}
        />
        {enabled && (
          <p className="mt-4 text-sm text-gray-600">
            Notifications are enabled
          </p>
        )}
      </div>
    )
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <Toggle
        label="Small size"
        description="This is a small toggle"
        size="sm"
      />
      <Toggle
        label="Medium size (default)"
        description="This is a medium toggle"
        size="md"
      />
    </div>
  ),
}

export const AllLabelPositions: Story = {
  render: () => (
    <div className="space-y-6">
      <Toggle
        label="Label on right (default)"
        description="The label is positioned on the right"
        labelPosition="right"
      />
      <Toggle
        label="Label on left"
        description="The label is positioned on the left"
        labelPosition="left"
      />
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="space-y-6">
      <Toggle
        label="Default (unchecked)"
        description="This is the default state"
      />
      <Toggle
        label="Checked"
        description="This toggle is checked"
        checked={true}
      />
      <Toggle
        label="Disabled"
        description="This toggle is disabled"
        disabled
      />
      <Toggle
        label="Disabled and checked"
        description="This toggle is disabled and checked"
        disabled
        checked={true}
      />
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => {
    const [enabled, setEnabled] = useState(true)

    return (
      <div className="space-y-6">
        <Toggle
          label="With check icon"
          description="Shows a check icon when enabled"
          icon={<CheckIcon />}
          checked={enabled}
          onChange={setEnabled}
        />
        <Toggle
          label="With X icon (always shown)"
          description="Shows an X icon"
          icon={<XMarkIcon />}
        />
      </div>
    )
  },
}

export const FormExample: Story = {
  render: () => {
    const [emailNotifications, setEmailNotifications] = useState(true)
    const [smsNotifications, setSmsNotifications] = useState(false)
    const [pushNotifications, setPushNotifications] = useState(true)
    const [publicProfile, setPublicProfile] = useState(false)

    return (
      <form className="space-y-12 max-w-lg">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Notification Settings</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage how you receive notifications.
          </p>
          <div className="mt-6 space-y-6">
            <Toggle
              label="Email notifications"
              description="Receive notifications via email"
              checked={emailNotifications}
              onChange={setEmailNotifications}
            />
            <Toggle
              label="SMS notifications"
              description="Receive notifications via text message"
              checked={smsNotifications}
              onChange={setSmsNotifications}
            />
            <Toggle
              label="Push notifications"
              description="Receive push notifications in your browser"
              checked={pushNotifications}
              onChange={setPushNotifications}
            />
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-base font-semibold text-gray-900">Privacy Settings</h2>
          <p className="mt-1 text-sm text-gray-500">
            Control your privacy preferences.
          </p>
          <div className="mt-6 space-y-6">
            <Toggle
              label="Public profile"
              description="Make your profile visible to everyone"
              checked={publicProfile}
              onChange={setPublicProfile}
            />
          </div>
        </div>

        <div className="pt-4">
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

export const SettingsPanel: Story = {
  render: () => {
    const [darkMode, setDarkMode] = useState(false)
    const [autoSave, setAutoSave] = useState(true)
    const [analytics, setAnalytics] = useState(false)

    return (
      <div className="max-w-2xl">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-base font-semibold text-gray-900">Application Settings</h3>
            <div className="mt-6 space-y-6">
              <Toggle
                label="Dark mode"
                description="Use dark theme for better visibility in low light"
                checked={darkMode}
                onChange={setDarkMode}
                labelPosition="left"
              />
              <Toggle
                label="Auto-save"
                description="Automatically save your work as you type"
                checked={autoSave}
                onChange={setAutoSave}
                labelPosition="left"
              />
              <Toggle
                label="Analytics"
                description="Help us improve by sharing anonymous usage data"
                checked={analytics}
                onChange={setAnalytics}
                labelPosition="left"
              />
            </div>
          </div>
        </div>
      </div>
    )
  },
}

export const FeatureFlags: Story = {
  render: () => {
    const [betaFeatures, setBetaFeatures] = useState(false)
    const [experimentalUI, setExperimentalUI] = useState(false)
    const [advancedMode, setAdvancedMode] = useState(true)

    return (
      <div className="max-w-2xl">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-base font-semibold text-gray-900">Feature Flags</h3>
            <p className="mt-1 text-sm text-gray-500">
              Enable experimental features and early access to new functionality.
            </p>
            <div className="mt-6 space-y-6">
              <Toggle
                label="Beta features"
                description="Get early access to features in development"
                checked={betaFeatures}
                onChange={setBetaFeatures}
                size="sm"
              />
              <Toggle
                label="Experimental UI"
                description="Try our new user interface (may be unstable)"
                checked={experimentalUI}
                onChange={setExperimentalUI}
                size="sm"
              />
              <Toggle
                label="Advanced mode"
                description="Show advanced options and settings"
                checked={advancedMode}
                onChange={setAdvancedMode}
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>
    )
  },
}

export const CompactList: Story = {
  render: () => (
    <div className="max-w-lg space-y-4">
      <Toggle label="Auto-play videos" size="sm" />
      <Toggle label="Show captions" size="sm" />
      <Toggle label="High quality" size="sm" defaultChecked />
      <Toggle label="Enable HDR" size="sm" />
      <Toggle label="Theater mode" size="sm" />
    </div>
  ),
}

export const SubscriptionPlans: Story = {
  render: () => {
    const [annualBilling, setAnnualBilling] = useState(true)

    return (
      <div className="max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Choose your plan</h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <span className={annualBilling ? 'text-gray-500' : 'text-gray-900 font-medium'}>
              Monthly
            </span>
            <Toggle
              checked={annualBilling}
              onChange={setAnnualBilling}
              size="md"
              srOnly="Toggle annual billing"
            />
            <span className={annualBilling ? 'text-gray-900 font-medium' : 'text-gray-500'}>
              Annual
              <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">Starter</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              ${annualBilling ? '8' : '10'}
              <span className="text-base font-normal text-gray-500">/mo</span>
            </p>
          </div>
          <div className="rounded-lg border-2 border-indigo-600 p-6">
            <h3 className="text-lg font-semibold text-gray-900">Pro</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              ${annualBilling ? '24' : '30'}
              <span className="text-base font-normal text-gray-500">/mo</span>
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">Enterprise</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              ${annualBilling ? '80' : '100'}
              <span className="text-base font-normal text-gray-500">/mo</span>
            </p>
          </div>
        </div>
      </div>
    )
  },
}
