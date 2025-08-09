import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'

export interface StackedListItem {
  id: string | number
  title: string
  subtitle?: string
  description?: string
  image?: string
  badge?: {
    text: string
    variant?: 'success' | 'warning' | 'error' | 'info' | 'gray'
  }
  status?: {
    text: string
    online?: boolean
  }
  actions?: React.ReactNode
  metadata?: string
  href?: string
  onClick?: () => void
}

const stackedListVariants = cva(
  '',
  {
    variants: {
      variant: {
        simple: '',
        card: 'bg-white shadow-sm rounded-lg overflow-hidden',
        narrow: '',
        fullWidth: 'bg-white'
      },
      showDividers: {
        true: 'divide-y divide-gray-100',
        false: ''
      }
    },
    defaultVariants: {
      variant: 'simple',
      showDividers: true
    }
  }
)

const stackedListItemVariants = cva(
  'flex justify-between gap-x-6 transition-colors',
  {
    variants: {
      variant: {
        simple: 'gap-x-6',
        card: 'gap-x-6',
        narrow: 'gap-x-4',
        fullWidth: 'gap-x-6'
      },
      spacing: {
        sm: 'py-3',
        md: 'py-5',
        lg: 'py-6'
      },
      isClickable: {
        true: 'cursor-pointer hover:bg-gray-50',
        false: ''
      }
    },
    defaultVariants: {
      variant: 'simple',
      spacing: 'md',
      isClickable: false
    }
  }
)

const stackedListTextVariants = cva(
  'font-semibold text-gray-900',
  {
    variants: {
      variant: {
        simple: 'text-sm/6',
        card: 'text-sm/6',
        narrow: 'text-sm',
        fullWidth: 'text-sm/6'
      },
      textType: {
        title: 'font-semibold text-gray-900',
        subtitle: 'mt-1 truncate text-gray-500',
        metadata: 'text-gray-900',
        status: 'text-gray-500'
      }
    },
    compoundVariants: [
      {
        variant: 'narrow',
        textType: 'subtitle',
        class: 'text-xs'
      },
      {
        variant: 'narrow',
        textType: 'status',
        class: 'text-xs'
      },
      {
        variant: ['simple', 'card', 'fullWidth'],
        textType: 'subtitle',
        class: 'text-xs/5'
      },
      {
        variant: ['simple', 'card', 'fullWidth'],
        textType: 'status',
        class: 'text-xs/5'
      }
    ],
    defaultVariants: {
      variant: 'simple',
      textType: 'title'
    }
  }
)

const stackedListAvatarVariants = cva(
  'flex-none rounded-full bg-gray-50',
  {
    variants: {
      avatarSize: {
        sm: 'size-8',
        md: 'size-12',
        lg: 'size-16'
      }
    },
    defaultVariants: {
      avatarSize: 'md'
    }
  }
)

const stackedListBadgeVariants = cva(
  'mt-1 inline-flex items-center rounded-full px-2 py-1 text-xs font-medium',
  {
    variants: {
      badgeVariant: {
        success: 'bg-green-100 text-green-800',
        warning: 'bg-yellow-100 text-yellow-800',
        error: 'bg-red-100 text-red-800',
        info: 'bg-blue-100 text-blue-800',
        gray: 'bg-gray-100 text-gray-800'
      }
    },
    defaultVariants: {
      badgeVariant: 'gray'
    }
  }
)

interface StackedListProps extends BaseComponentProps,
  VariantProps<typeof stackedListVariants>,
  VariantProps<typeof stackedListItemVariants>,
  VariantProps<typeof stackedListAvatarVariants> {
  items: StackedListItem[]
  loading?: boolean
  emptyMessage?: string
  onItemClick?: (item: StackedListItem) => void
}

export const StackedList = forwardRef<HTMLUListElement, StackedListProps>(
  ({ 
    className,
    items,
    variant = 'simple',
    avatarSize = 'md',
    spacing = 'md',
    showDividers = true,
    loading = false,
    emptyMessage = 'No items to display',
    onItemClick,
    ...props
  }, ref) => {

    const handleItemClick = (item: StackedListItem) => {
      if (item.onClick) {
        item.onClick()
      } else if (onItemClick) {
        onItemClick(item)
      }
    }

    const renderItem = (item: StackedListItem) => {
      const isClickable = !!(item.href || item.onClick || onItemClick)
      
      const itemContent = (
        <div className={stackedListItemVariants({ variant, spacing, isClickable })}>
          <div className="flex min-w-0 gap-x-4">
            {item.image && (
              <img 
                alt="" 
                src={item.image} 
                className={stackedListAvatarVariants({ avatarSize })}
              />
            )}
            <div className="min-w-0 flex-auto">
              <p className={stackedListTextVariants({ variant, textType: 'title' })}>
                {item.title}
              </p>
              {item.subtitle && (
                <p className={stackedListTextVariants({ variant, textType: 'subtitle' })}>
                  {item.subtitle}
                </p>
              )}
              {item.description && (
                <p className="mt-1 text-sm text-gray-600">
                  {item.description}
                </p>
              )}
              {item.badge && (
                <span className={stackedListBadgeVariants({ 
                  badgeVariant: item.badge.variant || 'gray' 
                })}>
                  {item.badge.text}
                </span>
              )}
            </div>
          </div>
          
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            {item.metadata && (
              <p className={stackedListTextVariants({ variant, textType: 'metadata' })}>
                {item.metadata}
              </p>
            )}
            {item.status && (
              <div className="mt-1 flex items-center gap-x-1.5">
                {item.status.online && (
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="size-1.5 rounded-full bg-emerald-500" />
                  </div>
                )}
                <p className={stackedListTextVariants({ variant, textType: 'status' })}>
                  {item.status.text}
                </p>
              </div>
            )}
            {item.actions && (
              <div className="mt-1">
                {item.actions}
              </div>
            )}
          </div>
        </div>
      )

      if (item.href) {
        return (
          <a 
            key={item.id}
            href={item.href}
            className="block"
          >
            {itemContent}
          </a>
        )
      }

      if (isClickable) {
        return (
          <button
            key={item.id}
            onClick={() => handleItemClick(item)}
            className="w-full text-left"
          >
            {itemContent}
          </button>
        )
      }

      return itemContent
    }

    if (loading) {
      return (
        <div className="flex justify-center items-center py-8">
          <div className="text-gray-500">Loading...</div>
        </div>
      )
    }

    if (items.length === 0) {
      return (
        <div className="text-center py-8 text-gray-500">
          {emptyMessage}
        </div>
      )
    }

    return (
      <ul 
        ref={ref}
        role="list"
        className={cn(stackedListVariants({ variant, showDividers }), className)}
        {...props}
      >
        {items.map((item) => (
          <li key={item.id}>
            {renderItem(item)}
          </li>
        ))}
      </ul>
    )
  }
)

StackedList.displayName = 'StackedList'

export { 
  stackedListVariants, 
  stackedListItemVariants, 
  stackedListTextVariants, 
  stackedListAvatarVariants, 
  stackedListBadgeVariants 
}
export type { StackedListProps }