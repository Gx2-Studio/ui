import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import { Button } from './Button'
import { EnvelopeIcon, PlusIcon } from '@heroicons/react/20/solid'

/**
 * Button component with multiple variants, sizes, and icon support.
 * Fully accessible with keyboard navigation and ARIA attributes.
 */
const meta = {
  title: 'Components/Inputs/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    a11y: { disable: false },
  },
  tags: ['autodocs'],
  argTypes: {
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
        type: { summary: "'xs' | 'sm' | 'md' | 'lg' | 'xl'" },
      },
    },
    rounded: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full'],
      description: 'Border radius size',
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: "'sm' | 'md' | 'lg' | 'full'" },
      },
    },
    children: {
      control: 'text',
      description: 'Button text content',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    leadingIcon: {
      control: false,
      description: 'Icon element displayed before button text',
    },
    trailingIcon: {
      control: false,
      description: 'Icon element displayed after button text',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type attribute',
      table: {
        defaultValue: { summary: 'button' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
    },
    ref: {
      table: { disable: true },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    children: 'Button',
    disabled: false,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Primary button variant with solid indigo background.
 * Use for main actions on a page.
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = await canvas.findByRole('button', { name: /primary button/i })

    // Verify button is rendered and enabled
    void expect(button).toBeInTheDocument()
    void expect(button).toBeEnabled()

    // Test click interaction
    await userEvent.click(button)
  },
}

/**
 * Secondary button with outlined style.
 * Use for secondary actions or alongside primary buttons.
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
}

/**
 * Soft button with light background.
 * Use for tertiary actions or within colored backgrounds.
 */
export const Soft: Story = {
  args: {
    variant: 'soft',
    children: 'Soft Button',
  },
}

/**
 * Ghost button with no background.
 * Use for minimal visual impact or in tight spaces.
 */
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
}

/**
 * Disabled button state prevents interaction.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = await canvas.findByRole('button')

    // Verify button is disabled and not clickable
    void expect(button).toBeDisabled()
  },
}

/**
 * Button with leading icon for visual context.
 */
export const WithLeadingIcon: Story = {
  args: {
    leadingIcon: <EnvelopeIcon />,
    children: 'Send Email',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = await canvas.findByRole('button', { name: /send email/i })

    void expect(button).toBeInTheDocument()
    void expect(button).toHaveTextContent('Send Email')
  },
}

/**
 * Button with trailing icon for directional cues.
 */
export const WithTrailingIcon: Story = {
  args: {
    trailingIcon: <PlusIcon />,
    children: 'Add Item',
  },
}

/**
 * Button with both leading and trailing icons.
 */
export const WithBothIcons: Story = {
  args: {
    leadingIcon: <EnvelopeIcon />,
    trailingIcon: <PlusIcon />,
    children: 'Send & Add',
  },
}

/**
 * Icon-only button must have aria-label for accessibility.
 */
export const IconOnly: Story = {
  args: {
    leadingIcon: <EnvelopeIcon />,
    'aria-label': 'Send email',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Icon-only buttons must have accessible label
    const button = await canvas.findByRole('button', { name: /send email/i })
    void expect(button).toBeInTheDocument()
  },
}

/**
 * All button size variants displayed together.
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-2">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
}

/**
 * All button variants displayed together.
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="soft">Soft</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div className="flex gap-2">
        <Button variant="primary" disabled>
          Primary
        </Button>
        <Button variant="secondary" disabled>
          Secondary
        </Button>
        <Button variant="soft" disabled>
          Soft
        </Button>
        <Button variant="ghost" disabled>
          Ghost
        </Button>
      </div>
    </div>
  ),
}

/**
 * All border radius variants.
 */
export const BorderRadius: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button rounded="sm">Small</Button>
      <Button rounded="md">Medium</Button>
      <Button rounded="lg">Large</Button>
      <Button rounded="full">Full</Button>
    </div>
  ),
}

/**
 * Test keyboard accessibility and focus management.
 */
export const KeyboardAccessible: Story = {
  args: {
    children: 'Press Enter or Space',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = await canvas.findByRole('button')

    // Focus the button
    button.focus()
    void expect(button).toHaveFocus()

    // Test Enter key
    await userEvent.keyboard('{Enter}')

    // Button should maintain focus
    void expect(button).toHaveFocus()
  },
}
