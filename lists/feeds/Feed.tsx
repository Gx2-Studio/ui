import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'

export interface FeedItem {
  id: string
  type?: 'comment' | 'assignment' | 'tags' | 'default'
  user: {
    name: string
    avatar?: string
    initials?: string
  }
  content: string
  timestamp: string
  icon?: React.ReactNode
  href?: string
  target?: {
    name: string
    href?: string
  }
  tags?: string[]
  comments?: Array<{
    id: string
    user: { name: string; avatar?: string; initials?: string }
    content: string
    timestamp: string
  }>
}

const feedIconVariants = cva(
  'flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white',
  {
    variants: {
      type: {
        comment: 'bg-gray-400',
        assignment: 'bg-blue-500',
        tags: 'bg-green-500',
        default: 'bg-gray-400'
      }
    },
    defaultVariants: {
      type: 'default'
    }
  }
)

const feedAvatarVariants = cva(
  'rounded-full',
  {
    variants: {
      hasImage: {
        true: 'h-10 w-10',
        false: 'flex h-10 w-10 items-center justify-center bg-gray-400'
      }
    },
    defaultVariants: {
      hasImage: false
    }
  }
)

interface FeedProps extends BaseComponentProps,
  VariantProps<typeof feedIconVariants> {
  items: FeedItem[]
  variant?: 'simple' | 'with-comments' | 'multiple-types'
  showIcons?: boolean
}

export const Feed = forwardRef<HTMLDivElement, FeedProps>(
  ({
    className,
    items,
    variant = 'simple',
    showIcons = true,
    ...props
  }, ref) => {
    const getDefaultIcon = (type?: string) => {
      const iconType = (type as 'comment' | 'assignment' | 'tags' | 'default') || 'default'
      const iconContainer = feedIconVariants({ type: iconType })

      switch (type) {
        case 'comment':
          return (
            <div className={iconContainer}>
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
              </svg>
            </div>
          )
        case 'assignment':
          return (
            <div className={iconContainer}>
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
          )
        case 'tags':
          return (
            <div className={iconContainer}>
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
          )
        default:
          return (
            <div className={iconContainer}>
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
          )
      }
    }

    const renderAvatar = (user: FeedItem['user']) => {
      if (user.avatar) {
        return (
          <img
            className={feedAvatarVariants({ hasImage: true })}
            src={user.avatar}
            alt={user.name}
          />
        )
      }
      
      return (
        <div className={feedAvatarVariants({ hasImage: false })}>
          <span className="text-sm font-medium text-white">
            {user.initials || user.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </span>
        </div>
      )
    }

    const renderItem = (item: FeedItem, index: number) => (
      <li key={item.id}>
        <div className="relative pb-8">
          {index !== items.length - 1 && (
            <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
          )}
          <div className="relative flex space-x-3">
            <div>
              {showIcons && item.icon ? item.icon : showIcons ? getDefaultIcon(item.type) : renderAvatar(item.user)}
            </div>
            <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
              <div>
                <p className="text-sm text-gray-500">
                  <span className="font-medium text-gray-900">{item.user.name}</span>{' '}
                  {item.content}
                  {item.target && (
                    <>
                      {' '}
                      {item.target.href ? (
                        <a href={item.target.href} className="font-medium text-gray-900">
                          {item.target.name}
                        </a>
                      ) : (
                        <span className="font-medium text-gray-900">{item.target.name}</span>
                      )}
                    </>
                  )}
                </p>
                
                {item.tags && item.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {variant === 'with-comments' && item.comments && item.comments.length > 0 && (
                  <div className="mt-4 space-y-4">
                    {item.comments.map((comment) => (
                      <div key={comment.id} className="flex space-x-3">
                        <div className="flex-shrink-0">
                          {comment.user.avatar ? (
                            <img
                              className="h-8 w-8 rounded-full"
                              src={comment.user.avatar}
                              alt={comment.user.name}
                            />
                          ) : (
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400">
                              <span className="text-xs font-medium text-white">
                                {comment.user.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="rounded-lg bg-gray-50 px-4 py-2">
                            <div className="text-sm font-medium text-gray-900">{comment.user.name}</div>
                            <div className="text-sm text-gray-700">{comment.content}</div>
                          </div>
                          <div className="mt-1 text-xs text-gray-500">{comment.timestamp}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="whitespace-nowrap text-right text-sm text-gray-500">
                <time dateTime={item.timestamp}>{item.timestamp}</time>
              </div>
            </div>
          </div>
        </div>
      </li>
    )

    return (
      <div ref={ref} className={cn('flow-root', className)} {...props}>
        <ul className="-mb-8">
          {items.map(renderItem)}
        </ul>
      </div>
    )
  }
)

Feed.displayName = 'Feed'

export { feedIconVariants, feedAvatarVariants }
export type { FeedProps }