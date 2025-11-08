import type { Meta, StoryObj } from '@storybook/react'
import { Feed, FeedItem } from './Feed'

const meta: Meta<typeof Feed> = {
  title: 'Lists/Feed',
  component: Feed,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Feed>

const sampleFeedItems: FeedItem[] = [
  {
    id: '1',
    type: 'comment',
    user: {
      name: 'Eduardo Benz',
      avatar: 'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    content: 'commented on',
    target: {
      name: 'Your Post',
      href: '#',
    },
    timestamp: '3d ago',
  },
  {
    id: '2',
    type: 'assignment',
    user: {
      name: 'Jason Meyers',
      initials: 'JM',
    },
    content: 'assigned you to',
    target: {
      name: 'New Task',
      href: '#',
    },
    timestamp: '1d ago',
  },
  {
    id: '3',
    type: 'tags',
    user: {
      name: 'Christina Davis',
      avatar: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    content: 'tagged you in',
    target: {
      name: 'Project Discussion',
      href: '#',
    },
    timestamp: '2d ago',
    tags: ['design', 'frontend', 'urgent'],
  },
  {
    id: '4',
    type: 'default',
    user: {
      name: 'Benjamin Russel',
      initials: 'BR',
    },
    content: 'mentioned you in',
    target: {
      name: 'Team Meeting Notes',
    },
    timestamp: '5h ago',
  },
]

const feedItemsWithComments: FeedItem[] = [
  {
    id: '1',
    type: 'comment',
    user: {
      name: 'Eduardo Benz',
      avatar: 'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    content: 'commented on',
    target: {
      name: 'Your Post',
      href: '#',
    },
    timestamp: '3d ago',
    comments: [
      {
        id: 'c1',
        user: {
          name: 'Sarah Wilson',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        content: 'I agree with this approach. Let\'s move forward.',
        timestamp: '2d ago',
      },
      {
        id: 'c2',
        user: {
          name: 'Michael Foster',
          initials: 'MF',
        },
        content: 'Great work on this! I have a few suggestions.',
        timestamp: '1d ago',
      },
    ],
  },
  {
    id: '2',
    type: 'assignment',
    user: {
      name: 'Jason Meyers',
      initials: 'JM',
    },
    content: 'assigned you to',
    target: {
      name: 'New Task',
      href: '#',
    },
    timestamp: '1d ago',
  },
]

export const Simple: Story = {
  args: {
    items: sampleFeedItems,
    variant: 'simple',
    showIcons: true,
  },
}

export const WithoutIcons: Story = {
  args: {
    items: sampleFeedItems,
    variant: 'simple',
    showIcons: false,
  },
}

export const WithComments: Story = {
  args: {
    items: feedItemsWithComments,
    variant: 'with-comments',
    showIcons: true,
  },
}

export const MultipleTypes: Story = {
  args: {
    items: sampleFeedItems,
    variant: 'multiple-types',
    showIcons: true,
  },
}

export const CommentTypeOnly: Story = {
  args: {
    items: sampleFeedItems.filter(item => item.type === 'comment'),
    variant: 'simple',
    showIcons: true,
  },
}

export const AssignmentTypeOnly: Story = {
  args: {
    items: sampleFeedItems.filter(item => item.type === 'assignment'),
    variant: 'simple',
    showIcons: true,
  },
}

export const TagsTypeOnly: Story = {
  args: {
    items: sampleFeedItems.filter(item => item.type === 'tags'),
    variant: 'simple',
    showIcons: true,
  },
}

export const WithTags: Story = {
  args: {
    items: [
      {
        id: '1',
        type: 'tags',
        user: {
          name: 'Christina Davis',
          avatar: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        },
        content: 'tagged you in',
        target: {
          name: 'Project Discussion',
        },
        timestamp: '2d ago',
        tags: ['design', 'frontend', 'urgent', 'review', 'help-wanted'],
      },
    ],
    variant: 'simple',
    showIcons: true,
  },
}

export const LongFeed: Story = {
  args: {
    items: [
      ...sampleFeedItems,
      {
        id: '5',
        type: 'comment',
        user: {
          name: 'Linda Miller',
          initials: 'LM',
        },
        content: 'replied to',
        target: {
          name: 'Your Comment',
          href: '#',
        },
        timestamp: '12h ago',
      },
      {
        id: '6',
        type: 'assignment',
        user: {
          name: 'Robert Johnson',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        content: 'completed',
        target: {
          name: 'Task #123',
          href: '#',
        },
        timestamp: '8h ago',
      },
      {
        id: '7',
        type: 'tags',
        user: {
          name: 'Emma Watson',
          initials: 'EW',
        },
        content: 'mentioned you in',
        target: {
          name: 'Sprint Planning',
          href: '#',
        },
        timestamp: '4h ago',
        tags: ['planning', 'sprint'],
      },
    ],
    variant: 'simple',
    showIcons: true,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Simple with Icons</h3>
        <Feed items={sampleFeedItems} variant="simple" showIcons={true} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Without Icons</h3>
        <Feed items={sampleFeedItems} variant="simple" showIcons={false} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">With Comments</h3>
        <Feed items={feedItemsWithComments} variant="with-comments" showIcons={true} />
      </div>
    </div>
  ),
}

export const RealWorldExample: Story = {
  render: () => (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Activity Feed</h2>
        <Feed items={feedItemsWithComments} variant="with-comments" showIcons={true} />
      </div>
    </div>
  ),
}
