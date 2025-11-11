import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: '1. Core/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image URL for the avatar'
    },
    alt: {
      control: 'text',
      description: 'Alt text for the avatar image'
    },
    initials: {
      control: 'text',
      description: 'Initials to display when no image is provided'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Avatar size',
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: "'xs' | 'sm' | 'md' | 'lg' | 'xl'" }
      }
    },
    shape: {
      control: 'select',
      options: ['circle', 'rounded'],
      description: 'Avatar shape',
      table: {
        defaultValue: { summary: 'circle' },
        type: { summary: "'circle' | 'rounded'" }
      }
    },
    status: {
      control: 'select',
      options: [undefined, 'online', 'offline', 'away', 'busy'],
      description: 'User status indicator',
      table: {
        type: { summary: "'online' | 'offline' | 'away' | 'busy' | undefined" }
      }
    },
    statusPosition: {
      control: 'select',
      options: ['top', 'bottom'],
      description: 'Position of status indicator',
      table: {
        defaultValue: { summary: 'bottom' },
        type: { summary: "'top' | 'bottom'" }
      }
    },
    notification: {
      control: 'select',
      options: [undefined, 'top', 'bottom', 'top-right', 'bottom-right'],
      description: 'Notification badge position',
      table: {
        type: { summary: "'top' | 'bottom' | 'top-right' | 'bottom-right' | undefined" }
      }
    },
    notificationColor: {
      control: 'select',
      options: ['gray', 'red', 'green', 'blue', 'yellow'],
      description: 'Notification badge color',
      table: {
        defaultValue: { summary: 'gray' },
        type: { summary: "'gray' | 'red' | 'green' | 'blue' | 'yellow'" }
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Avatar>

const sampleImage = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'

export const WithImage: Story = {
  args: {
    src: sampleImage,
    alt: 'User avatar',
  },
}

export const WithInitials: Story = {
  args: {
    initials: 'JD',
  },
}

export const DefaultIcon: Story = {
  args: {},
}

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    src: sampleImage,
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    src: sampleImage,
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
    src: sampleImage,
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    src: sampleImage,
  },
}

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    src: sampleImage,
  },
}

export const Circle: Story = {
  args: {
    shape: 'circle',
    src: sampleImage,
  },
}

export const Rounded: Story = {
  args: {
    shape: 'rounded',
    src: sampleImage,
  },
}

export const StatusOnline: Story = {
  args: {
    src: sampleImage,
    status: 'online',
  },
}

export const StatusOffline: Story = {
  args: {
    src: sampleImage,
    status: 'offline',
  },
}

export const StatusAway: Story = {
  args: {
    src: sampleImage,
    status: 'away',
  },
}

export const StatusBusy: Story = {
  args: {
    src: sampleImage,
    status: 'busy',
  },
}

export const StatusTopPosition: Story = {
  args: {
    src: sampleImage,
    status: 'online',
    statusPosition: 'top',
  },
}

export const StatusBottomPosition: Story = {
  args: {
    src: sampleImage,
    status: 'online',
    statusPosition: 'bottom',
  },
}

export const NotificationTop: Story = {
  args: {
    src: sampleImage,
    notification: 'top',
    notificationColor: 'red',
  },
}

export const NotificationBottom: Story = {
  args: {
    src: sampleImage,
    notification: 'bottom',
    notificationColor: 'red',
  },
}

export const NotificationTopRight: Story = {
  args: {
    src: sampleImage,
    notification: 'top-right',
    notificationColor: 'red',
  },
}

export const NotificationBottomRight: Story = {
  args: {
    src: sampleImage,
    notification: 'bottom-right',
    notificationColor: 'red',
  },
}

export const WithStatusAndNotification: Story = {
  args: {
    src: sampleImage,
    status: 'online',
    notification: 'top-right',
    notificationColor: 'red',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar size="xs" src={sampleImage} />
      <Avatar size="sm" src={sampleImage} />
      <Avatar size="md" src={sampleImage} />
      <Avatar size="lg" src={sampleImage} />
      <Avatar size="xl" src={sampleImage} />
    </div>
  ),
}

export const AllStatuses: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar src={sampleImage} status="online" />
      <Avatar src={sampleImage} status="offline" />
      <Avatar src={sampleImage} status="away" />
      <Avatar src={sampleImage} status="busy" />
    </div>
  ),
}

export const AllNotificationColors: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar src={sampleImage} notification="top-right" notificationColor="gray" />
      <Avatar src={sampleImage} notification="top-right" notificationColor="red" />
      <Avatar src={sampleImage} notification="top-right" notificationColor="green" />
      <Avatar src={sampleImage} notification="top-right" notificationColor="blue" />
      <Avatar src={sampleImage} notification="top-right" notificationColor="yellow" />
    </div>
  ),
}

export const InitialsAllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar size="xs" initials="JD" />
      <Avatar size="sm" initials="JD" />
      <Avatar size="md" initials="JD" />
      <Avatar size="lg" initials="JD" />
      <Avatar size="xl" initials="JD" />
    </div>
  ),
}
