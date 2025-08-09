import { forwardRef, useState } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'

export interface NavbarItem {
  id: string
  label: string
  href?: string
  onClick?: () => void
  active?: boolean
  icon?: React.ReactNode
  badge?: {
    text: string
    color?: 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'
  }
}

const navbarContainerVariants = cva(
  'border-b',
  {
    variants: {
      variant: {
        simple: 'bg-white border-gray-200',
        dark: 'bg-gray-800 border-gray-700',
        'with-search': 'bg-white border-gray-200',
        'with-menu-button': 'bg-white border-gray-200',
        'centered-search': 'bg-white border-gray-200',
        'with-quick-action': 'bg-white border-gray-200',
        'column-layout': 'bg-white border-gray-200'
      }
    },
    compoundVariants: [
      {
        variant: ['with-search', 'with-menu-button', 'centered-search', 'with-quick-action', 'column-layout'],
        class: 'bg-white border-gray-200'
      }
    ],
    defaultVariants: {
      variant: 'simple'
    }
  }
)

const navbarBrandNameVariants = cva(
  'ml-2 text-xl font-bold',
  {
    variants: {
      isDark: {
        true: 'text-white',
        false: 'text-gray-900'
      }
    },
    defaultVariants: {
      isDark: false
    }
  }
)

const navbarItemVariants = cva(
  'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
  {
    variants: {
      active: {
        true: '',
        false: 'border-transparent'
      },
      isDark: {
        true: '',
        false: ''
      }
    },
    compoundVariants: [
      {
        active: true,
        isDark: true,
        class: 'border-white text-white'
      },
      {
        active: true,
        isDark: false,
        class: 'border-indigo-500 text-gray-900'
      },
      {
        active: false,
        isDark: true,
        class: 'border-transparent text-gray-300 hover:border-gray-300 hover:text-white'
      },
      {
        active: false,
        isDark: false,
        class: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
      }
    ],
    defaultVariants: {
      active: false,
      isDark: false
    }
  }
)

const navbarBadgeVariants = cva(
  'ml-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
  {
    variants: {
      color: {
        red: 'bg-red-100 text-red-800',
        yellow: 'bg-yellow-100 text-yellow-800',
        green: 'bg-green-100 text-green-800',
        blue: 'bg-blue-100 text-blue-800',
        indigo: 'bg-indigo-100 text-indigo-800',
        purple: 'bg-purple-100 text-purple-800',
        pink: 'bg-pink-100 text-pink-800',
        gray: 'bg-gray-100 text-gray-800'
      }
    },
    defaultVariants: {
      color: 'gray'
    }
  }
)

const navbarSearchVariants = cva(
  'block w-full rounded-md border-0 py-1.5 pl-10 pr-3 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6',
  {
    variants: {
      isDark: {
        true: 'bg-white/10 text-white ring-white/20 focus:ring-white',
        false: 'bg-white text-gray-900 ring-gray-300 focus:ring-indigo-600'
      }
    },
    defaultVariants: {
      isDark: false
    }
  }
)

const navbarSearchIconVariants = cva(
  'h-5 w-5',
  {
    variants: {
      isDark: {
        true: 'text-gray-400',
        false: 'text-gray-400'
      }
    },
    defaultVariants: {
      isDark: false
    }
  }
)

const navbarActionButtonVariants = cva(
  'inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm',
  {
    variants: {
      variant: {
        primary: 'bg-indigo-600 text-white hover:bg-indigo-500',
        secondary: ''
      },
      isDark: {
        true: '',
        false: ''
      }
    },
    compoundVariants: [
      {
        variant: 'secondary',
        isDark: true,
        class: 'bg-white/10 text-white ring-1 ring-inset ring-white/20 hover:bg-white/20'
      },
      {
        variant: 'secondary',
        isDark: false,
        class: 'bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
      }
    ],
    defaultVariants: {
      variant: 'secondary',
      isDark: false
    }
  }
)

const navbarMenuButtonVariants = cva(
  'inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500',
  {
    variants: {
      isDark: {
        true: 'hover:bg-gray-700 hover:text-white',
        false: ''
      },
      columnLayout: {
        true: '',
        false: 'sm:hidden'
      }
    },
    defaultVariants: {
      isDark: false,
      columnLayout: false
    }
  }
)

export interface NavbarProps extends BaseComponentProps,
  VariantProps<typeof navbarContainerVariants> {
  brand?: {
    name: string
    logo?: string
    href?: string
  }
  items?: NavbarItem[]
  secondaryItems?: NavbarItem[]
  user?: {
    name: string
    email?: string
    avatar?: string
    initials?: string
  }
  searchPlaceholder?: string
  onSearch?: (query: string) => void
  showMenuButton?: boolean
  onMenuClick?: () => void
  actions?: Array<{
    label: string
    onClick?: () => void
    href?: string
    variant?: 'primary' | 'secondary'
    icon?: React.ReactNode
  }>
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({
    className,
    variant = 'simple',
    brand,
    items = [],
    secondaryItems = [],
    user,
    searchPlaceholder = 'Search...',
    onSearch,
    showMenuButton = false,
    onMenuClick,
    actions = [],
    ...props
  }, ref) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

    const isDark = variant === 'dark' || (variant && variant.includes('dark'))
    const hasSearch = variant && variant.includes('search')
    const isCentered = variant === 'centered-search'
    const isColumnLayout = variant === 'column-layout'

    const handleSearch = (e: React.FormEvent) => {
      e.preventDefault()
      if (onSearch) {
        onSearch(searchQuery)
      }
    }

    const renderBrand = () => {
      const content = (
        <div className="flex items-center">
          {brand?.logo && (
            <img
              className="h-8 w-8"
              src={brand.logo}
              alt={brand.name}
            />
          )}
          <span className={navbarBrandNameVariants({ isDark })}>
            {brand?.name}
          </span>
        </div>
      )

      return brand?.href ? (
        <a href={brand.href} className="flex items-center">
          {content}
        </a>
      ) : content
    }

    const renderNavItems = (navItems: NavbarItem[], secondary = false) => (
      <div className={cn(
        'hidden sm:flex sm:space-x-8',
        secondary && 'ml-6'
      )}>
        {navItems.map((item) => {
          const content = (
            <span className={navbarItemVariants({ active: item.active, isDark })}>
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.label}
              {item.badge && (
                <span className={navbarBadgeVariants({ color: item.badge.color || 'gray' })}>
                  {item.badge.text}
                </span>
              )}
            </span>
          )

          return (
            <div key={item.id}>
              {item.href ? (
                <a href={item.href}>{content}</a>
              ) : (
                <button onClick={item.onClick}>{content}</button>
              )}
            </div>
          )
        })}
      </div>
    )

    const renderSearch = () => {
      if (!hasSearch) return null

      return (
        <form onSubmit={handleSearch} className={cn(
          'flex items-center',
          isCentered ? 'flex-1 max-w-lg mx-8' : 'flex-1 max-w-xs'
        )}>
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className={navbarSearchIconVariants({ isDark })}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              id="search"
              name="search"
              type="search"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={navbarSearchVariants({ isDark })}
            />
          </div>
        </form>
      )
    }

    const renderActions = () => {
      if (!actions.length) return null

      return (
        <div className="flex items-center space-x-4">
          {actions.map((action, index) => {
            const content = (
              <span className={navbarActionButtonVariants({ variant: action.variant, isDark })}>
                {action.icon && <span className="mr-2">{action.icon}</span>}
                {action.label}
              </span>
            )

            return (
              <div key={index}>
                {action.href ? (
                  <a href={action.href}>{content}</a>
                ) : (
                  <button onClick={action.onClick}>{content}</button>
                )}
              </div>
            )
          })}
        </div>
      )
    }

    const renderUserMenu = () => {
      if (!user) return null

      return (
        <div className="relative">
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="flex items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="sr-only">Open user menu</span>
            {user.avatar ? (
              <img className="h-8 w-8 rounded-full" src={user.avatar} alt={user.name} />
            ) : (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-500">
                <span className="text-sm font-medium text-white">
                  {user.initials || user.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </span>
              </div>
            )}
          </button>
        </div>
      )
    }


    if (isColumnLayout) {
      return (
        <nav ref={ref} className={cn(navbarContainerVariants({ variant }), className)} {...props}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex items-center">
                  {showMenuButton && (
                    <button
                      onClick={onMenuClick}
                      className={navbarMenuButtonVariants({ isDark, columnLayout: true })}
                    >
                      <span className="sr-only">Open main menu</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  )}
                  {brand && renderBrand()}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {renderSearch()}
                {renderActions()}
                {renderUserMenu()}
              </div>
            </div>
            {items.length > 0 && (
              <div className="border-t border-gray-200 pb-3 pt-4">
                {renderNavItems(items)}
              </div>
            )}
          </div>
        </nav>
      )
    }

    return (
      <nav ref={ref} className={cn(navbarContainerVariants({ variant }), className)} {...props}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex items-center">
                {showMenuButton && (
                  <button
                    onClick={onMenuClick}
                    className={navbarMenuButtonVariants({ isDark, columnLayout: false })}
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                )}
                {brand && renderBrand()}
              </div>
              {!isCentered && renderNavItems(items)}
            </div>

            {isCentered ? (
              <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
                {renderSearch()}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                {renderSearch()}
                {renderActions()}
                {renderUserMenu()}
              </div>
            )}

            {isCentered && (
              <div className="flex items-center space-x-4">
                {renderNavItems(secondaryItems, true)}
                {renderActions()}
                {renderUserMenu()}
              </div>
            )}
          </div>
        </div>
      </nav>
    )
  }
)

Navbar.displayName = 'Navbar'

export { 
  navbarContainerVariants,
  navbarBrandNameVariants,
  navbarItemVariants,
  navbarBadgeVariants,
  navbarSearchVariants,
  navbarSearchIconVariants,
  navbarActionButtonVariants,
  navbarMenuButtonVariants
}