import { forwardRef, useState } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'

export interface SidebarNavigationItem {
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
  children?: SidebarNavigationItem[]
}

export interface SidebarNavigationSection {
  title?: string
  items: SidebarNavigationItem[]
}

const sidebarContainerVariants = cva(
  'flex flex-col min-h-0 flex-1',
  {
    variants: {
      variant: {
        brand: 'bg-indigo-700',
        dark: 'bg-gray-800',
        light: 'bg-white border-r border-gray-200',
        expandable: 'bg-white border-r border-gray-200',
        secondary: 'bg-white border-r border-gray-200'
      },
      width: {
        narrow: 'w-48',
        normal: 'w-64',
        wide: 'w-80'
      },
      collapsed: {
        true: 'w-16',
        false: ''
      }
    },
    compoundVariants: [
      {
        collapsed: true,
        class: 'w-16'
      }
    ],
    defaultVariants: {
      variant: 'light',
      width: 'normal',
      collapsed: false
    }
  }
)

const sidebarNavItemVariants = cva(
  'group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors',
  {
    variants: {
      variant: {
        brand: '',
        dark: '',
        light: '',
        expandable: '',
        secondary: ''
      },
      active: {
        true: '',
        false: ''
      },
      collapsed: {
        true: 'justify-center px-2',
        false: ''
      },
      isChild: {
        true: 'ml-6',
        false: ''
      }
    },
    compoundVariants: [
      {
        active: true,
        variant: 'brand',
        class: 'bg-indigo-800 text-white'
      },
      {
        active: true,
        variant: 'dark',
        class: 'bg-gray-900 text-white'
      },
      {
        active: true,
        variant: ['light', 'expandable', 'secondary'],
        class: 'bg-gray-100 text-gray-900'
      },
      {
        active: false,
        variant: 'brand',
        class: 'text-indigo-200 hover:bg-indigo-600 hover:text-white'
      },
      {
        active: false,
        variant: 'dark',
        class: 'text-gray-300 hover:bg-gray-700 hover:text-white'
      },
      {
        active: false,
        variant: ['light', 'expandable', 'secondary'],
        class: 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      },
      {
        collapsed: true,
        isChild: false,
        class: 'justify-center px-2'
      }
    ],
    defaultVariants: {
      variant: 'light',
      active: false,
      collapsed: false,
      isChild: false
    }
  }
)

const sidebarNavItemButtonVariants = cva(
  'w-full text-left',
  {
    variants: {},
    defaultVariants: {}
  }
)

const sidebarIconVariants = cva(
  'flex-shrink-0 h-6 w-6',
  {
    variants: {
      variant: {
        brand: '',
        dark: '',
        light: '',
        expandable: '',
        secondary: ''
      },
      active: {
        true: '',
        false: ''
      },
      collapsed: {
        true: '',
        false: 'mr-3'
      }
    },
    compoundVariants: [
      {
        active: true,
        variant: ['brand', 'dark'],
        class: 'text-white'
      },
      {
        active: true,
        variant: ['light', 'expandable', 'secondary'],
        class: 'text-gray-500'
      },
      {
        active: false,
        variant: 'brand',
        class: 'text-indigo-300 group-hover:text-white'
      },
      {
        active: false,
        variant: 'dark',
        class: 'text-gray-400 group-hover:text-white'
      },
      {
        active: false,
        variant: ['light', 'expandable', 'secondary'],
        class: 'text-gray-400 group-hover:text-gray-500'
      }
    ],
    defaultVariants: {
      variant: 'light',
      active: false,
      collapsed: false
    }
  }
)

const sidebarBadgeVariants = cva(
  'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
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

const sidebarSectionTitleVariants = cva(
  'px-3 text-xs font-semibold uppercase tracking-wider',
  {
    variants: {
      variant: {
        brand: 'text-indigo-300',
        dark: 'text-gray-400',
        light: 'text-gray-500',
        expandable: 'text-gray-500',
        secondary: 'text-gray-500'
      }
    },
    defaultVariants: {
      variant: 'light'
    }
  }
)

const sidebarBrandNameVariants = cva(
  'text-lg font-semibold',
  {
    variants: {
      variant: {
        brand: 'text-white',
        dark: 'text-white',
        light: 'text-gray-900',
        expandable: 'text-gray-900',
        secondary: 'text-gray-900'
      }
    },
    defaultVariants: {
      variant: 'light'
    }
  }
)

const sidebarBrandLogoVariants = cva(
  'h-8 w-8 flex-shrink-0',
  {
    variants: {
      collapsed: {
        true: '',
        false: 'mr-3'
      }
    },
    defaultVariants: {
      collapsed: false
    }
  }
)

const sidebarCollapseButtonVariants = cva(
  'flex items-center justify-center w-full p-2 rounded-md',
  {
    variants: {
      variant: {
        brand: 'text-indigo-300 hover:text-white hover:bg-indigo-600',
        dark: 'text-gray-400 hover:text-white hover:bg-gray-700',
        light: 'text-gray-400 hover:text-gray-500 hover:bg-gray-100',
        expandable: 'text-gray-400 hover:text-gray-500 hover:bg-gray-100',
        secondary: 'text-gray-400 hover:text-gray-500 hover:bg-gray-100'
      }
    },
    defaultVariants: {
      variant: 'light'
    }
  }
)

const sidebarSecondaryVariants = cva(
  'border-t px-2 py-4',
  {
    variants: {
      variant: {
        brand: 'border-indigo-600',
        dark: 'border-gray-700',
        light: 'border-gray-200',
        expandable: 'border-gray-200',
        secondary: 'border-gray-200'
      }
    },
    defaultVariants: {
      variant: 'light'
    }
  }
)

interface SidebarNavigationProps extends BaseComponentProps,
  VariantProps<typeof sidebarContainerVariants> {
  sections: SidebarNavigationSection[]
  brand?: {
    name: string
    logo?: string
    href?: string
  }
  collapsible?: boolean
  onToggleCollapse?: () => void
}

export const SidebarNavigation = forwardRef<HTMLElement, SidebarNavigationProps>(
  ({
    className,
    sections,
    variant = 'light',
    brand,
    width = 'normal',
    collapsible = false,
    collapsed = false,
    onToggleCollapse,
    ...props
  }, ref) => {
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

    const hasExpandable = variant === 'expandable'
    const hasSecondary = variant === 'secondary'




    const toggleExpanded = (itemId: string) => {
      const newExpanded = new Set(expandedItems)
      if (newExpanded.has(itemId)) {
        newExpanded.delete(itemId)
      } else {
        newExpanded.add(itemId)
      }
      setExpandedItems(newExpanded)
    }

    const renderNavItem = (item: SidebarNavigationItem, isChild = false) => {
      const hasChildren = hasExpandable && item.children && item.children.length > 0
      const isExpanded = expandedItems.has(item.id)

      const itemContent = (
        <>
          {item.icon && (
            <span className={sidebarIconVariants({ variant, active: item.active, collapsed })}>
              {item.icon}
            </span>
          )}
          {!collapsed && (
            <>
              <span className="flex-1">{item.name}</span>
              {item.badge && (
                <span className={sidebarBadgeVariants({ color: item.badge.color })}>
                  {item.badge.text}
                </span>
              )}
              {hasChildren && (
                <svg
                  className={cn(
                    'ml-2 h-5 w-5 transform transition-transform',
                    isExpanded && 'rotate-90'
                  )}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </>
          )}
        </>
      )

      return (
        <div key={item.id}>
          {item.href ? (
            <a href={item.href} className={sidebarNavItemVariants({ variant, active: item.active, collapsed, isChild })}>
              {itemContent}
            </a>
          ) : (
            <button
              onClick={hasChildren ? () => toggleExpanded(item.id) : item.onClick}
              className={cn(
                sidebarNavItemVariants({ variant, active: item.active, collapsed, isChild }),
                sidebarNavItemButtonVariants()
              )}
            >
              {itemContent}
            </button>
          )}
          
          {hasChildren && isExpanded && !collapsed && (
            <div className="mt-1 space-y-1">
              {item.children!.map((child) => renderNavItem(child, true))}
            </div>
          )}
        </div>
      )
    }

    const renderSection = (section: SidebarNavigationSection, index: number) => (
      <div key={index} className={cn(index > 0 && 'mt-8')}>
        {section.title && !collapsed && (
          <h3 className={sidebarSectionTitleVariants({ variant })}>
            {section.title}
          </h3>
        )}
        <div className={cn('space-y-1', section.title && !collapsed && 'mt-1')}>
          {section.items.map((item) => renderNavItem(item))}
        </div>
      </div>
    )

    const renderBrand = () => {
      if (!brand) return null

      const content = (
        <div className="flex items-center px-4 py-3">
          {brand.logo && (
            <img
              className={sidebarBrandLogoVariants({ collapsed })}
              src={brand.logo}
              alt={brand.name}
            />
          )}
          {!collapsed && (
            <span className={sidebarBrandNameVariants({ variant })}>
              {brand.name}
            </span>
          )}
        </div>
      )

      return brand.href ? (
        <a href={brand.href} className="block">
          {content}
        </a>
      ) : content
    }

    return (
      <aside ref={ref} className={cn(sidebarContainerVariants({ variant, width, collapsed }), className)} {...props}>
        {brand && renderBrand()}
        
        {collapsible && (
          <div className="px-4 py-2">
            <button
              onClick={onToggleCollapse}
              className={sidebarCollapseButtonVariants({ variant })}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        )}

        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          {sections.map(renderSection)}
        </nav>

        {hasSecondary && (
          <div className={sidebarSecondaryVariants({ variant })}>
            <div className="space-y-1">
              {/* Secondary navigation items would go here */}
            </div>
          </div>
        )}
      </aside>
    )
  }
)

SidebarNavigation.displayName = 'SidebarNavigation'

export { 
  sidebarContainerVariants,
  sidebarNavItemVariants,
  sidebarNavItemButtonVariants,
  sidebarIconVariants,
  sidebarBadgeVariants,
  sidebarSectionTitleVariants,
  sidebarBrandNameVariants,
  sidebarBrandLogoVariants,
  sidebarCollapseButtonVariants,
  sidebarSecondaryVariants
}
export type { SidebarNavigationProps }