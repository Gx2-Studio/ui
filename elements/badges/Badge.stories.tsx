import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: '1. Core/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['flat', 'pill', 'outline'],
      description: 'Badge style variant',
      table: {
        defaultValue: { summary: 'flat' },
        type: { summary: "'flat' | 'pill' | 'outline'" }
      }
    },
    color: {
      control: 'select',
      options: ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'],
      description: 'Badge color scheme',
      table: {
        defaultValue: { summary: 'gray' },
        type: { summary: "'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'" }
      }
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md'],
      description: 'Badge size',
      table: {
        defaultValue: { summary: 'xs' },
        type: { summary: "'xs' | 'sm' | 'md'" }
      }
    },
    dot: {
      control: 'boolean',
      description: 'Show status dot before text',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    removable: {
      control: 'boolean',
      description: 'Show remove/close button',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    children: {
      control: 'text',
      description: 'Badge text content'
    },
    onRemove: {
      action: 'removed',
      description: 'Function called when remove button is clicked'
    }
  }
}

export default meta
type Story = StoryObj<typeof Badge>

export const FlatGray: Story = {
  args: {
    variant: 'flat',
    color: 'gray',
    children: 'Badge',
  },
}

export const FlatRed: Story = {
  args: {
    variant: 'flat',
    color: 'red',
    children: 'Badge',
  },
}

export const FlatYellow: Story = {
  args: {
    variant: 'flat',
    color: 'yellow',
    children: 'Badge',
  },
}

export const FlatGreen: Story = {
  args: {
    variant: 'flat',
    color: 'green',
    children: 'Badge',
  },
}

export const FlatBlue: Story = {
  args: {
    variant: 'flat',
    color: 'blue',
    children: 'Badge',
  },
}

export const FlatIndigo: Story = {
  args: {
    variant: 'flat',
    color: 'indigo',
    children: 'Badge',
  },
}

export const FlatPurple: Story = {
  args: {
    variant: 'flat',
    color: 'purple',
    children: 'Badge',
  },
}

export const FlatPink: Story = {
  args: {
    variant: 'flat',
    color: 'pink',
    children: 'Badge',
  },
}

export const PillGray: Story = {
  args: {
    variant: 'pill',
    color: 'gray',
    children: 'Badge',
  },
}

export const PillRed: Story = {
  args: {
    variant: 'pill',
    color: 'red',
    children: 'Badge',
  },
}

export const PillGreen: Story = {
  args: {
    variant: 'pill',
    color: 'green',
    children: 'Badge',
  },
}

export const OutlineGray: Story = {
  args: {
    variant: 'outline',
    color: 'gray',
    children: 'Badge',
  },
}

export const OutlineRed: Story = {
  args: {
    variant: 'outline',
    color: 'red',
    children: 'Badge',
  },
}

export const OutlineGreen: Story = {
  args: {
    variant: 'outline',
    color: 'green',
    children: 'Badge',
  },
}

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    children: 'Badge',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Badge',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Badge',
  },
}

export const WithDot: Story = {
  args: {
    dot: true,
    children: 'Badge',
  },
}

export const WithDotAllColors: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge dot color="gray">Gray</Badge>
      <Badge dot color="red">Red</Badge>
      <Badge dot color="yellow">Yellow</Badge>
      <Badge dot color="green">Green</Badge>
      <Badge dot color="blue">Blue</Badge>
      <Badge dot color="indigo">Indigo</Badge>
      <Badge dot color="purple">Purple</Badge>
      <Badge dot color="pink">Pink</Badge>
    </div>
  ),
}

export const Removable: Story = {
  args: {
    removable: true,
    onRemove: () => alert('Badge removed'),
    children: 'Badge',
  },
}

export const RemovableWithDot: Story = {
  args: {
    dot: true,
    removable: true,
    onRemove: () => alert('Badge removed'),
    children: 'Badge',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Badge variant="flat" color="gray">Flat</Badge>
        <Badge variant="pill" color="gray">Pill</Badge>
        <Badge variant="outline" color="gray">Outline</Badge>
      </div>
    </div>
  ),
}

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge color="gray">Gray</Badge>
      <Badge color="red">Red</Badge>
      <Badge color="yellow">Yellow</Badge>
      <Badge color="green">Green</Badge>
      <Badge color="blue">Blue</Badge>
      <Badge color="indigo">Indigo</Badge>
      <Badge color="purple">Purple</Badge>
      <Badge color="pink">Pink</Badge>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge size="xs">XS</Badge>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
    </div>
  ),
}
