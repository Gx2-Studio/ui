/**
 * CANONICAL STORY TEMPLATE
 *
 * Use this template as a reference when creating new component stories.
 * This ensures consistency across the entire Storybook.
 *
 * Key principles:
 * 1. Use strict typing with Meta and StoryObj
 * 2. Include autodocs tag
 * 3. Add comprehensive argTypes with descriptions
 * 4. Use actions for callbacks
 * 5. Hide internal props (ref, children when not user-facing, etc.)
 * 6. Include at least one play function for interaction testing
 * 7. Follow naming convention: Components/[Category]/[ComponentName]
 */

import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'

// Import your component
// import { YourComponent } from './YourComponent'

// Example using Button as reference
import { Button } from '../elements/buttons/Button'
import { EnvelopeIcon } from '@heroicons/react/20/solid'

/**
 * Step 1: Define Meta with strict typing
 *
 * - title: Use the hierarchy "Components/[Category]/[ComponentName]"
 * - component: Reference to the actual component
 * - tags: Include 'autodocs' for automatic documentation
 * - parameters: Configure layout, a11y, etc.
 * - argTypes: Define controls, descriptions, and types
 */
const meta = {
  title: 'Components/Inputs/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', // or 'padded', 'fullscreen'
    controls: { expanded: true },
    a11y: { disable: false },
  },
  argTypes: {
    // Define each prop with control and description
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'soft', 'ghost'],
      description: 'Visual style variant of the button',
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: "'primary' | 'secondary' | 'soft' | 'ghost'" },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the button',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    children: {
      control: 'text',
      description: 'Button label text',
    },
    // Use actions for event handlers
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
    },
    // Hide props that aren't user-configurable
    leadingIcon: {
      control: false,
      description: 'Icon element displayed before text',
    },
    trailingIcon: {
      control: false,
      description: 'Icon element displayed after text',
    },
    // Hide ref prop
    ref: {
      table: { disable: true },
    },
  },
  // Set default args that apply to all stories
  args: {
    children: 'Button',
    disabled: false,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Step 2: Define Stories
 *
 * - Export each story as a named export
 * - Use Story type for type safety
 * - Provide meaningful args that showcase the variant
 */

/**
 * The default button variant with primary styling.
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}

/**
 * Secondary button with outline styling.
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

/**
 * Step 3: Add Interaction Tests (Play Functions)
 *
 * Include at least one story with a play function to test:
 * - User interactions (click, type, hover)
 * - State changes
 * - Accessibility (screen reader text, roles)
 *
 * These tests run automatically with @storybook/test-runner
 */

/**
 * Interactive story demonstrating button click behavior.
 * Tests that the button is clickable and triggers onClick.
 */
export const Interactive: Story = {
  args: {
    variant: 'primary',
    children: 'Click me',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)

    // Find the button by role and accessible name
    const button = await canvas.findByRole('button', { name: /click me/i })

    // Verify button is present and enabled
    expect(button).toBeInTheDocument()
    expect(button).toBeEnabled()

    // Simulate user click
    await userEvent.click(button)

    // Verify onClick was called (works with action)
    // Note: In real tests, you'd verify actual behavior/state changes
  },
}

/**
 * Test disabled state and ensure button is not interactive.
 */
export const DisabledState: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = await canvas.findByRole('button')

    // Verify button is disabled
    expect(button).toBeDisabled()
  },
}

/**
 * Test button with icon for proper icon rendering and accessibility.
 */
export const WithIcon: Story = {
  args: {
    variant: 'primary',
    leadingIcon: <EnvelopeIcon />,
    children: 'Send Email',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = await canvas.findByRole('button', { name: /send email/i })

    // Verify button renders with text
    expect(button).toHaveTextContent('Send Email')
  },
}

/**
 * Icon-only button should have accessible label.
 */
export const IconOnly: Story = {
  args: {
    variant: 'secondary',
    leadingIcon: <EnvelopeIcon />,
    'aria-label': 'Send email',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Icon-only buttons must have aria-label
    const button = await canvas.findByRole('button', { name: /send email/i })
    expect(button).toBeInTheDocument()
  },
}

/**
 * Step 4: Showcase Stories (Optional)
 *
 * Include stories that show all variants or combinations.
 * These help developers visualize options at a glance.
 */

/**
 * Shows all button variants side by side.
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
}

/**
 * Shows all button sizes side by side.
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-2">
      <Button size="xs">XS</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">XL</Button>
    </div>
  ),
}

/**
 * USAGE NOTES:
 *
 * 1. Title Hierarchy:
 *    - Components/Inputs/[Component]
 *    - Components/Data Display/[Component]
 *    - Components/Navigation/[Component]
 *    - Components/Feedback/[Component]
 *    - Components/Overlays/[Component]
 *    - Components/Layout/[Component]
 *    - Components/Lists/[Component]
 *    - Components/Typography/[Component]
 *
 * 2. Always include:
 *    - At least one story with a play function
 *    - Comprehensive argTypes
 *    - Proper accessibility attributes in component
 *    - Examples showing key variants and use cases
 *
 * 3. Testing guidelines:
 *    - Test user interactions
 *    - Verify accessibility (roles, labels)
 *    - Test edge cases (disabled, error states)
 *    - Use userEvent over fireEvent
 *    - Always use findBy* queries (async)
 *
 * 4. Documentation:
 *    - Add JSDoc comments to stories
 *    - Describe what each story demonstrates
 *    - Explain any complex interactions
 */
