import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'

export interface VerticalNavigationItem {
  id: string
  name: string
  href?: string
  onClick?: () => void
  icon?: React.ReactNode
  badge?: {
    text: string
    color?: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'
  }
  active?: boolean
  count?: number
  description?: string
  children?: VerticalNavigationItem[]
}

export interface VerticalNavigationGroup {
  title?: string
  items: VerticalNavigationItem[]
}

const verticalNavigationContainerVariants = cva(
  'flex-1 space-y-1 px-2 pb-4',
  {
    variants: {
      variant: {
        simple: '',
        'on-gray': 'bg-gray-50',
        'with-badges': '',
        'with-icons': '',
        'with-icons-badges': '',
        'with-secondary': ''
      }
    },
    defaultVariants: {
      variant: 'simple'
    }
  }
)

const verticalNavigationItemVariants = cva(
  'group flex items-center rounded-md text-sm font-medium transition-colors',
  {
    variants: {
      spacing: {
        compact: 'px-2 py-1',
        normal: 'px-2 py-2',
        relaxed: 'px-3 py-3'
      },
      active: {
        true: '',
        false: ''
      },
      variant: {
        simple: '',
        'on-gray': ''
      },
      fullWidth: {
        true: 'w-full text-left',
        false: ''
      }
    },
    compoundVariants: [
      {
        active: true,
        variant: 'simple',
        class: 'bg-gray-100 text-gray-900'
      },
      {
        active: true,
        variant: 'on-gray',
        class: 'bg-gray-200 text-gray-900'
      },
      {
        active: false,
        variant: 'simple',
        class: 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      },
      {
        active: false,
        variant: 'on-gray',
        class: 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
      }
    ],
    defaultVariants: {
      spacing: 'normal',
      active: false,
      variant: 'simple',
      fullWidth: false
    }
  }
)

const verticalNavigationIconVariants = cva(
  'mr-3 h-6 w-6 flex-shrink-0',
  {
    variants: {
      active: {
        true: 'text-gray-500',
        false: 'text-gray-400 group-hover:text-gray-500'
      }
    },
    defaultVariants: {
      active: false
    }
  }
)

const verticalNavigationBadgeVariants = cva(
  'ml-auto inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
  {
    variants: {
      color: {
        gray: 'bg-gray-100 text-gray-600',
        red: 'bg-red-100 text-red-800',
        yellow: 'bg-yellow-100 text-yellow-800',
        green: 'bg-green-100 text-green-700',
        blue: 'bg-blue-100 text-blue-700',
        indigo: 'bg-indigo-100 text-indigo-700',
        purple: 'bg-purple-100 text-purple-700',
        pink: 'bg-pink-100 text-pink-700'
      }
    },
    defaultVariants: {
      color: 'gray'
    }
  }
)

const verticalNavigationCountVariants = cva(
  'ml-auto inline-block py-0.5 px-3 text-xs font-medium rounded-full',
  {
    variants: {
      active: {
        true: 'bg-white text-gray-900',
        false: 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
      },
      variant: {
        simple: '',
        'on-gray': ''
      }
    },
    defaultVariants: {
      active: false,
      variant: 'simple'
    }
  }
)

const verticalNavigationGroupTitleVariants = cva(
  'px-3 text-xs font-semibold uppercase tracking-wider text-gray-500',
  {
    variants: {
      hasMarginTop: {
        true: 'mt-8',
        false: ''
      }
    },
    defaultVariants: {
      hasMarginTop: false
    }
  }
)

const verticalNavigationGroupItemsVariants = cva(
  '',
  {
    variants: {
      spacing: {
        compact: 'space-y-1',
        normal: 'space-y-2',
        relaxed: 'space-y-3'
      },
      hasTitle: {
        true: 'mt-1',
        false: ''
      },
      hasDivider: {
        true: 'mt-8 pt-8 border-t border-gray-200',
        false: ''
      }
    },
    defaultVariants: {
      spacing: 'normal',
      hasTitle: false,
      hasDivider: false
    }
  }
)

const verticalNavigationSecondaryTextVariants = cva(
  'text-xs',
  {
    variants: {
      active: {
        true: 'text-gray-500',
        false: 'text-gray-400 group-hover:text-gray-500'
      }
    },
    defaultVariants: {
      active: false
    }
  }
)

interface VerticalNavigationProps extends BaseComponentProps,
  VariantProps<typeof verticalNavigationContainerVariants> {
  groups: VerticalNavigationGroup[]
  spacing?: 'compact' | 'normal' | 'relaxed'
  showDividers?: boolean
}

export const VerticalNavigation = forwardRef<HTMLElement, VerticalNavigationProps>(
  ({
    className,
    groups,
    variant = 'simple',
    spacing = 'normal',
    showDividers = false,
    ...props
  }, ref) => {
    const isOnGray = variant === 'on-gray'
    const withBadges = variant === 'with-badges' || variant === 'with-icons-badges'
    const withIcons = variant === 'with-icons' || variant === 'with-icons-badges'
    const withSecondary = variant === 'with-secondary'

    const renderNavItem = (item: VerticalNavigationItem, isChild = false) => {
      const itemContent = (
        <>
          {withIcons && item.icon && (
            <span className={verticalNavigationIconVariants({ active: item.active })}>
              {item.icon}
            </span>
          )}
          <span className="flex-1">
            <span className="block">{item.name}</span>
            {withSecondary && item.description && (
              <span className={verticalNavigationSecondaryTextVariants({ active: item.active })}>
                {item.description}
              </span>
            )}
          </span>
          {withBadges && item.badge && (
            <span className={verticalNavigationBadgeVariants({ color: item.badge.color })}>
              {item.badge.text}
            </span>
          )}
          {item.count !== undefined && (
            <span className={verticalNavigationCountVariants({ active: item.active, variant: isOnGray ? 'on-gray' : 'simple' })}>
              {item.count}
            </span>
          )}
        </>
      )

      return (
        <div key={item.id} className={isChild ? 'ml-6' : ''}>
          {item.href ? (
            <a href={item.href} className={verticalNavigationItemVariants({ 
              spacing, 
              active: item.active, 
              variant: isOnGray ? 'on-gray' : 'simple' 
            })}>
              {itemContent}
            </a>
          ) : (
            <button onClick={item.onClick} className={verticalNavigationItemVariants({ 
              spacing, 
              active: item.active, 
              variant: isOnGray ? 'on-gray' : 'simple',
              fullWidth: true
            })}>
              {itemContent}
            </button>
          )}
          
          {item.children && item.children.length > 0 && (
            <div className={verticalNavigationGroupItemsVariants({ spacing })}>
              {item.children.map((child) => renderNavItem(child, true))}
            </div>
          )}
        </div>
      )
    }

    const renderGroup = (group: VerticalNavigationGroup, index: number) => (
      <div key={index}>
        {group.title && (
          <h3 className={verticalNavigationGroupTitleVariants({ hasMarginTop: index > 0 })}>
            {group.title}
          </h3>
        )}
        <div className={verticalNavigationGroupItemsVariants({
          spacing,
          hasTitle: !!group.title,
          hasDivider: index > 0 && showDividers && !group.title
        })}>
          {group.items.map((item) => renderNavItem(item))}
        </div>
      </div>
    )

    return (
      <nav
        ref={ref}
        className={cn(verticalNavigationContainerVariants({ variant }), className)}
        {...props}
      >
        {groups.map(renderGroup)}
      </nav>
    )
  }
)

VerticalNavigation.displayName = 'VerticalNavigation'

export { 
  verticalNavigationContainerVariants,
  verticalNavigationItemVariants,
  verticalNavigationIconVariants,
  verticalNavigationBadgeVariants,
  verticalNavigationCountVariants,
  verticalNavigationGroupTitleVariants,
  verticalNavigationGroupItemsVariants,
  verticalNavigationSecondaryTextVariants
}
export type { VerticalNavigationProps }