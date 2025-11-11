import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { EnvelopeIcon, PlusIcon } from '@heroicons/react/20/solid'

const meta: Meta<typeof Button> = {
  title: '1. Core/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'soft', 'ghost'],
      description: 'Button style variant',
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: "'primary' | 'secondary' | 'soft' | 'ghost'" }
      }
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Button size',
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: "'xs' | 'sm' | 'md' | 'lg' | 'xl'" }
      }
    },
    rounded: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full'],
      description: 'Border radius size',
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: "'sm' | 'md' | 'lg' | 'full'" }
      }
    },
    children: {
      control: 'text',
      description: 'Button text content'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button interaction',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    leadingIcon: {
      control: false,
      description: 'Icon element displayed before button text'
    },
    trailingIcon: {
      control: false,
      description: 'Icon element displayed after button text'
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type attribute',
      table: {
        defaultValue: { summary: 'button' }
      }
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler'
    }
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
}

export const Soft: Story = {
  args: {
    variant: 'soft',
    children: 'Button',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button',
  },
}

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    children: 'Button',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Button',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Button',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Button',
  },
}

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: 'Button',
  },
}

export const RoundedSmall: Story = {
  args: {
    rounded: 'sm',
    children: 'Button',
  },
}

export const RoundedMedium: Story = {
  args: {
    rounded: 'md',
    children: 'Button',
  },
}

export const RoundedLarge: Story = {
  args: {
    rounded: 'lg',
    children: 'Button',
  },
}

export const RoundedFull: Story = {
  args: {
    rounded: 'full',
    children: 'Button',
  },
}

export const WithLeadingIcon: Story = {
  args: {
    leadingIcon: <EnvelopeIcon />,
    children: 'Button',
  },
}

export const WithTrailingIcon: Story = {
  args: {
    trailingIcon: <PlusIcon />,
    children: 'Button',
  },
}

export const WithBothIcons: Story = {
  args: {
    leadingIcon: <EnvelopeIcon />,
    trailingIcon: <PlusIcon />,
    children: 'Button',
  },
}

export const IconOnlyLeading: Story = {
  args: {
    leadingIcon: <EnvelopeIcon />,
    'aria-label': 'Send email',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Button',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="soft">Soft</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </div>
  ),
}

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
