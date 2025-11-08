import type { Meta, StoryObj } from '@storybook/react'
import { ProgressBar, ProgressStep } from './ProgressBar'

const meta: Meta<typeof ProgressBar> = {
  title: 'Navigation/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProgressBar>

const sampleSteps: ProgressStep[] = [
  { id: '1', name: 'Job details', status: 'complete' },
  { id: '2', name: 'Application form', status: 'current' },
  { id: '3', name: 'Preview', status: 'upcoming' },
]

const fourSteps: ProgressStep[] = [
  { id: '1', name: 'Step 1', description: 'Contact information', status: 'complete' },
  { id: '2', name: 'Step 2', description: 'Business details', status: 'current' },
  { id: '3', name: 'Step 3', description: 'Payment method', status: 'upcoming' },
  { id: '4', name: 'Step 4', description: 'Review and confirm', status: 'upcoming' },
]

const allCompleteSteps: ProgressStep[] = [
  { id: '1', name: 'Account', status: 'complete' },
  { id: '2', name: 'Profile', status: 'complete' },
  { id: '3', name: 'Verification', status: 'complete' },
]

export const Simple: Story = {
  args: {
    steps: sampleSteps,
    variant: 'simple',
    orientation: 'horizontal',
    size: 'md',
    color: 'indigo',
  },
}

export const Bullets: Story = {
  args: {
    steps: fourSteps,
    variant: 'bullets',
    orientation: 'vertical',
    size: 'md',
    color: 'indigo',
  },
}

export const BulletsWithText: Story = {
  args: {
    steps: fourSteps,
    variant: 'bullets-text',
    orientation: 'vertical',
    size: 'md',
    color: 'indigo',
  },
}

export const Circles: Story = {
  args: {
    steps: sampleSteps,
    variant: 'circles',
    orientation: 'horizontal',
    size: 'md',
    color: 'indigo',
  },
}

export const CirclesWithText: Story = {
  args: {
    steps: sampleSteps,
    variant: 'circles-text',
    orientation: 'horizontal',
    size: 'md',
    color: 'indigo',
  },
}

export const Panels: Story = {
  args: {
    steps: fourSteps,
    variant: 'panels',
    size: 'md',
    color: 'indigo',
  },
}

export const PanelsWithBorder: Story = {
  args: {
    steps: fourSteps,
    variant: 'panels-border',
    size: 'md',
    color: 'indigo',
  },
}

export const ProgressBarVariant: Story = {
  args: {
    steps: sampleSteps,
    variant: 'progress-bar',
    size: 'md',
    color: 'indigo',
  },
}

export const SmallSize: Story = {
  args: {
    steps: sampleSteps,
    variant: 'simple',
    orientation: 'horizontal',
    size: 'sm',
    color: 'indigo',
  },
}

export const MediumSize: Story = {
  args: {
    steps: sampleSteps,
    variant: 'simple',
    orientation: 'horizontal',
    size: 'md',
    color: 'indigo',
  },
}

export const LargeSize: Story = {
  args: {
    steps: sampleSteps,
    variant: 'simple',
    orientation: 'horizontal',
    size: 'lg',
    color: 'indigo',
  },
}

export const IndigoColor: Story = {
  args: {
    steps: sampleSteps,
    variant: 'simple',
    orientation: 'horizontal',
    size: 'md',
    color: 'indigo',
  },
}

export const BlueColor: Story = {
  args: {
    steps: sampleSteps,
    variant: 'simple',
    orientation: 'horizontal',
    size: 'md',
    color: 'blue',
  },
}

export const GreenColor: Story = {
  args: {
    steps: sampleSteps,
    variant: 'simple',
    orientation: 'horizontal',
    size: 'md',
    color: 'green',
  },
}

export const PurpleColor: Story = {
  args: {
    steps: sampleSteps,
    variant: 'simple',
    orientation: 'horizontal',
    size: 'md',
    color: 'purple',
  },
}

export const RedColor: Story = {
  args: {
    steps: sampleSteps,
    variant: 'simple',
    orientation: 'horizontal',
    size: 'md',
    color: 'red',
  },
}

export const WithoutConnectors: Story = {
  args: {
    steps: sampleSteps,
    variant: 'simple',
    orientation: 'horizontal',
    size: 'md',
    color: 'indigo',
    showConnectors: false,
  },
}

export const AllComplete: Story = {
  args: {
    steps: allCompleteSteps,
    variant: 'simple',
    orientation: 'horizontal',
    size: 'md',
    color: 'green',
  },
}

export const AllUpcoming: Story = {
  args: {
    steps: sampleSteps.map(step => ({ ...step, status: 'upcoming' as const })),
    variant: 'simple',
    orientation: 'horizontal',
    size: 'md',
    color: 'indigo',
  },
}

export const WithClickHandlers: Story = {
  args: {
    steps: sampleSteps.map(step => ({
      ...step,
      onClick: () => alert(`Clicked ${step.name}`),
    })),
    variant: 'simple',
    orientation: 'horizontal',
    size: 'md',
    color: 'indigo',
  },
}

export const WithLinks: Story = {
  args: {
    steps: sampleSteps.map(step => ({
      ...step,
      href: '#',
    })),
    variant: 'simple',
    orientation: 'horizontal',
    size: 'md',
    color: 'indigo',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="text-lg font-semibold mb-4">Simple</h3>
        <ProgressBar steps={sampleSteps} variant="simple" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Bullets</h3>
        <ProgressBar steps={fourSteps} variant="bullets" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Bullets with Text</h3>
        <ProgressBar steps={fourSteps} variant="bullets-text" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Circles</h3>
        <ProgressBar steps={sampleSteps} variant="circles" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Circles with Text</h3>
        <ProgressBar steps={sampleSteps} variant="circles-text" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Panels</h3>
        <ProgressBar steps={fourSteps} variant="panels" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Panels with Border</h3>
        <ProgressBar steps={fourSteps} variant="panels-border" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Progress Bar</h3>
        <ProgressBar steps={sampleSteps} variant="progress-bar" />
      </div>
    </div>
  ),
}

export const AllColors: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Indigo</h3>
        <ProgressBar steps={sampleSteps} variant="simple" color="indigo" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Blue</h3>
        <ProgressBar steps={sampleSteps} variant="simple" color="blue" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Green</h3>
        <ProgressBar steps={sampleSteps} variant="simple" color="green" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Purple</h3>
        <ProgressBar steps={sampleSteps} variant="simple" color="purple" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Red</h3>
        <ProgressBar steps={sampleSteps} variant="simple" color="red" />
      </div>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Small</h3>
        <ProgressBar steps={sampleSteps} variant="simple" size="sm" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Medium</h3>
        <ProgressBar steps={sampleSteps} variant="simple" size="md" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Large</h3>
        <ProgressBar steps={sampleSteps} variant="simple" size="lg" />
      </div>
    </div>
  ),
}

export const RealWorldExample: Story = {
  render: () => (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-2">Create Your Account</h2>
        <p className="text-gray-600 mb-8">Follow these steps to get started</p>

        <ProgressBar
          steps={[
            { id: '1', name: 'Personal Info', description: 'Basic information', status: 'complete' },
            { id: '2', name: 'Company Details', description: 'Your organization', status: 'current' },
            { id: '3', name: 'Billing', description: 'Payment information', status: 'upcoming' },
            { id: '4', name: 'Confirmation', description: 'Review and submit', status: 'upcoming' },
          ]}
          variant="panels"
          size="md"
          color="indigo"
        />

        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Company Details</h3>
          <p className="text-gray-600">Please provide your company information to continue.</p>
        </div>
      </div>
    </div>
  ),
}
