import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'

export interface GridListItem {
  id: string
  title: string
  subtitle?: string
  description?: string
  image?: string
  avatar?: string
  initials?: string
  href?: string
  badge?: {
    text: string
    color?: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'
  }
  stats?: Array<{
    label: string
    value: string
  }>
  tags?: string[]
  metadata?: Record<string, string>
  actions?: Array<{
    label: string
    onClick?: () => void
    href?: string
    variant?: 'primary' | 'secondary'
  }>
}

const gridListVariants = cva(
  'grid',
  {
    variants: {
      columns: {
        1: 'grid-cols-1',
        2: 'grid-cols-1 sm:grid-cols-2',
        3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
        6: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
      },
      gap: {
        sm: 'gap-4',
        md: 'gap-6',
        lg: 'gap-8'
      }
    },
    defaultVariants: {
      columns: 3,
      gap: 'md'
    }
  }
)

const gridListBadgeVariants = cva(
  'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
  {
    variants: {
      color: {
        gray: 'bg-gray-50 text-gray-600 ring-gray-500/10',
        red: 'bg-red-50 text-red-700 ring-red-600/10',
        yellow: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
        green: 'bg-green-50 text-green-700 ring-green-600/20',
        blue: 'bg-blue-50 text-blue-700 ring-blue-700/10',
        indigo: 'bg-indigo-50 text-indigo-700 ring-indigo-700/10',
        purple: 'bg-purple-50 text-purple-700 ring-purple-700/10',
        pink: 'bg-pink-50 text-pink-700 ring-pink-700/10'
      }
    },
    defaultVariants: {
      color: 'gray'
    }
  }
)

interface GridListProps extends BaseComponentProps,
  VariantProps<typeof gridListVariants> {
  items: GridListItem[]
  variant?: 'simple' | 'contact-cards' | 'small-portraits' | 'horizontal-links' | 'images-details' | 'logos-descriptions' | 'actions-borders'
}

export const GridList = forwardRef<HTMLDivElement, GridListProps>(
  ({
    className,
    items,
    variant = 'simple',
    columns = 3,
    gap = 'md',
    ...props
  }, ref) => {

    const renderAvatar = (item: GridListItem) => {
      if (item.image) {
        return (
          <img
            className={cn(
              'object-cover',
              variant === 'small-portraits' ? 'h-10 w-10 rounded-full' : 'h-16 w-16 rounded-lg'
            )}
            src={item.image}
            alt={item.title}
          />
        )
      }

      if (item.avatar) {
        return (
          <img
            className="h-16 w-16 rounded-full object-cover"
            src={item.avatar}
            alt={item.title}
          />
        )
      }

      return (
        <div className={cn(
          'flex items-center justify-center bg-gray-500',
          variant === 'small-portraits' ? 'h-10 w-10 rounded-full' : 'h-16 w-16 rounded-lg'
        )}>
          <span className={cn(
            'font-medium text-white',
            variant === 'small-portraits' ? 'text-sm' : 'text-xl'
          )}>
            {item.initials || item.title.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </span>
        </div>
      )
    }

    const renderSimpleCard = (item: GridListItem) => (
      <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-gray-400">
        {item.href ? (
          <a href={item.href} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            <div className="flex items-center space-x-3">
              {renderAvatar(item)}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">{item.title}</p>
                {item.subtitle && <p className="text-sm text-gray-500">{item.subtitle}</p>}
              </div>
            </div>
          </a>
        ) : (
          <div className="flex items-center space-x-3">
            {renderAvatar(item)}
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900">{item.title}</p>
              {item.subtitle && <p className="text-sm text-gray-500">{item.subtitle}</p>}
            </div>
          </div>
        )}
      </div>
    )

    const renderContactCard = (item: GridListItem) => (
      <div className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
        <div className="flex flex-1 flex-col p-8">
          <div className="mx-auto flex-shrink-0">
            {renderAvatar(item)}
          </div>
          <h3 className="mt-6 text-sm font-medium text-gray-900">{item.title}</h3>
          {item.subtitle && <dl className="mt-1 flex flex-grow flex-col justify-between">
            <dt className="sr-only">Role</dt>
            <dd className="text-sm text-gray-500">{item.subtitle}</dd>
          </dl>}
          {item.stats && (
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              {item.stats.map((stat, index) => (
                <div key={index}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-sm text-gray-500">{stat.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
        {item.actions && (
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              {item.actions.map((action, index) => (
                <div key={index} className="flex w-0 flex-1">
                  {action.href ? (
                    <a
                      href={action.href}
                      className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                    >
                      {action.label}
                    </a>
                  ) : (
                    <button
                      onClick={action.onClick}
                      className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                    >
                      {action.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )

    const renderHorizontalLink = (item: GridListItem) => (
      <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-gray-400">
        {item.href ? (
          <a href={item.href} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {renderAvatar(item)}
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">{item.title}</p>
                  {item.subtitle && <p className="text-sm text-gray-500">{item.subtitle}</p>}
                </div>
              </div>
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </a>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {renderAvatar(item)}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">{item.title}</p>
                {item.subtitle && <p className="text-sm text-gray-500">{item.subtitle}</p>}
              </div>
            </div>
          </div>
        )}
      </div>
    )

    const renderImageWithDetails = (item: GridListItem) => (
      <div className="group relative">
        <div className="aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
          {item.image ? (
            <img src={item.image} alt={item.title} className="pointer-events-none object-cover group-hover:opacity-75" />
          ) : (
            <div className="flex items-center justify-center bg-gray-200">
              <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          {item.href && <span className="sr-only">View details for {item.title}</span>}
        </div>
        <div className="mt-2">
          <p className="pointer-events-none text-sm font-medium text-gray-900">{item.title}</p>
          {item.description && <p className="pointer-events-none text-sm text-gray-500">{item.description}</p>}
          {item.badge && (
            <span className={cn('mt-2', gridListBadgeVariants({ color: item.badge.color || 'gray' }))}>
              {item.badge.text}
            </span>
          )}
        </div>
      </div>
    )

    const renderItem = (item: GridListItem) => {
      switch (variant) {
        case 'contact-cards':
        case 'small-portraits':
          return renderContactCard(item)
        case 'horizontal-links':
          return renderHorizontalLink(item)
        case 'images-details':
        case 'logos-descriptions':
          return renderImageWithDetails(item)
        case 'actions-borders':
          return renderContactCard(item)
        default:
          return renderSimpleCard(item)
      }
    }

    return (
      <div ref={ref} className={cn(gridListVariants({ columns, gap }), className)} {...props}>
        {items.map((item) => (
          <div key={item.id}>
            {renderItem(item)}
          </div>
        ))}
      </div>
    )
  }
)

GridList.displayName = 'GridList'

export { gridListVariants, gridListBadgeVariants }
export type { GridListProps }