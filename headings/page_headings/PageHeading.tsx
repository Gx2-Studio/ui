import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { ActionWithVariant, MetaItem, BreadcrumbItem } from '../../utils/types'

// PageHeadingAction extends ActionWithVariant and adds hideOnMobile
export interface PageHeadingAction extends ActionWithVariant {
  variant?: 'primary' | 'secondary'
  hideOnMobile?: boolean
}

// Use the shared MetaItem type
export type PageHeadingMeta = MetaItem

// Use the shared BreadcrumbItem type (without onClick since PageHeading doesn't use it)
export type PageHeadingBreadcrumb = Omit<BreadcrumbItem, 'onClick'>

const pageHeadingContainerVariants = cva(
  '',
  {
    variants: {
      variant: {
        simple: '',
        'with-actions': 'md:flex md:items-center md:justify-between',
        'with-meta-and-actions': 'lg:flex lg:items-center lg:justify-between',
        'with-avatar-and-actions': 'lg:flex lg:items-center lg:justify-between',
        'with-logo-meta-and-actions': 'lg:flex lg:items-center lg:justify-between',
        'with-actions-and-breadcrumbs': 'lg:flex lg:items-center lg:justify-between',
        'with-meta-actions-and-breadcrumbs': 'lg:flex lg:items-center lg:justify-between'
      }
    },
    defaultVariants: {
      variant: 'simple'
    }
  }
)

const pageHeadingTitleVariants = cva(
  'text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight',
  {
    variants: {
      theme: {
        light: 'text-gray-900',
        dark: 'text-white'
      }
    },
    defaultVariants: {
      theme: 'light'
    }
  }
)

const pageHeadingSubtitleVariants = cva(
  'mt-1 text-sm',
  {
    variants: {
      theme: {
        light: 'text-gray-500',
        dark: 'text-gray-300'
      }
    },
    defaultVariants: {
      theme: 'light'
    }
  }
)

const pageHeadingBreadcrumbSeparatorVariants = cva(
  'mr-4 size-5 shrink-0',
  {
    variants: {
      theme: {
        light: 'text-gray-300',
        dark: 'text-gray-300'
      }
    },
    defaultVariants: {
      theme: 'light'
    }
  }
)

const pageHeadingBreadcrumbCurrentVariants = cva(
  'text-sm font-medium',
  {
    variants: {
      theme: {
        light: 'text-gray-500',
        dark: 'text-gray-400'
      }
    },
    defaultVariants: {
      theme: 'light'
    }
  }
)

const pageHeadingBreadcrumbLinkVariants = cva(
  'text-sm font-medium hover:underline',
  {
    variants: {
      theme: {
        light: 'text-gray-500 hover:text-gray-700',
        dark: 'text-gray-300 hover:text-white'
      }
    },
    defaultVariants: {
      theme: 'light'
    }
  }
)

const pageHeadingMetaVariants = cva(
  'mt-2 flex items-center text-sm',
  {
    variants: {
      theme: {
        light: 'text-gray-500',
        dark: 'text-gray-300'
      }
    },
    defaultVariants: {
      theme: 'light'
    }
  }
)

const pageHeadingMetaIconVariants = cva(
  'mr-1.5 size-5 shrink-0',
  {
    variants: {
      theme: {
        light: 'text-gray-400',
        dark: 'text-gray-400'
      }
    },
    defaultVariants: {
      theme: 'light'
    }
  }
)

const pageHeadingActionButtonVariants = cva(
  'inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2',
  {
    variants: {
      variant: {
        primary: '',
        secondary: ''
      },
      theme: {
        light: '',
        dark: ''
      },
      hideOnMobile: {
        true: 'hidden sm:inline-flex',
        false: ''
      }
    },
    compoundVariants: [
      {
        variant: 'primary',
        theme: 'light',
        class: 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600'
      },
      {
        variant: 'primary',
        theme: 'dark',
        class: 'bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500'
      },
      {
        variant: 'secondary',
        theme: 'light',
        class: 'bg-white text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50'
      },
      {
        variant: 'secondary',
        theme: 'dark',
        class: 'bg-white/10 text-white ring-1 ring-white/20 ring-inset hover:bg-white/20'
      }
    ],
    defaultVariants: {
      variant: 'primary',
      theme: 'light',
      hideOnMobile: false
    }
  }
)

const pageHeadingMobileMenuButtonVariants = cva(
  'inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold shadow-xs ring-1 ring-inset hover:ring-gray-400',
  {
    variants: {
      theme: {
        light: 'bg-white text-gray-900 ring-gray-300',
        dark: 'bg-white/10 text-white ring-white/20'
      }
    },
    defaultVariants: {
      theme: 'light'
    }
  }
)

export interface PageHeadingProps extends VariantProps<typeof pageHeadingContainerVariants> {
  title: string
  subtitle?: string
  meta?: PageHeadingMeta[]
  actions?: PageHeadingAction[]
  breadcrumbs?: PageHeadingBreadcrumb[]
  avatar?: {
    src: string
    alt?: string
  }
  logo?: {
    src: string
    alt?: string
  }
  theme?: 'light' | 'dark'
  className?: string
  children?: React.ReactNode
}

export function PageHeading({
  title,
  subtitle,
  meta,
  actions,
  breadcrumbs,
  avatar,
  logo,
  variant = 'simple',
  theme = 'light',
  className,
  children
}: PageHeadingProps) {

  const renderBreadcrumbs = () => {
    if (!breadcrumbs) return null

    return (
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol role="list" className="flex items-center space-x-4">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.label}>
              <div className="flex items-center">
                {index > 0 && (
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className={pageHeadingBreadcrumbSeparatorVariants({ theme })}
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                )}
                {crumb.current ? (
                  <span className={pageHeadingBreadcrumbCurrentVariants({ theme })}>
                    {crumb.label}
                  </span>
                ) : (
                  <a
                    href={crumb.href}
                    className={pageHeadingBreadcrumbLinkVariants({ theme })}
                  >
                    {crumb.label}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    )
  }

  const renderMeta = () => {
    if (!meta) return null

    return (
      <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
        {meta.map((item, index) => (
          <div key={index} className={pageHeadingMetaVariants({ theme })}>
            {item.icon && (
              <item.icon 
                aria-hidden="true" 
                className={pageHeadingMetaIconVariants({ theme })} 
              />
            )}
            {item.value}
          </div>
        ))}
      </div>
    )
  }

  const renderAction = (action: PageHeadingAction) => {
    const content = (
      <>
        {action.icon && (
          <action.icon className="mr-1.5 -ml-0.5 size-5" aria-hidden="true" />
        )}
        {action.label}
      </>
    )

    if (action.type === 'link' && action.href) {
      return (
        <a href={action.href} className={pageHeadingActionButtonVariants({ 
          variant: action.variant || 'primary', 
          theme,
          hideOnMobile: action.hideOnMobile
        })}>
          {content}
        </a>
      )
    }

    return (
      <button type="button" onClick={action.onClick} className={pageHeadingActionButtonVariants({ 
        variant: action.variant || 'primary', 
        theme,
        hideOnMobile: action.hideOnMobile
      })}>
        {content}
      </button>
    )
  }

  const renderActions = () => {
    if (!actions || actions.length === 0) return null

    const visibleActions = actions.filter(action => !action.hideOnMobile)
    const hiddenActions = actions.filter(action => action.hideOnMobile)

    return (
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        {visibleActions.map((action, index) => (
          <span key={index} className={index > 0 ? 'ml-3' : ''}>
            {renderAction(action)}
          </span>
        ))}
        
        {hiddenActions.length > 0 && (
          <>
            {hiddenActions.map((action, index) => (
              <span key={`hidden-${index}`} className="ml-3 hidden sm:block">
                {renderAction(action)}
              </span>
            ))}
            
            <Menu as="div" className="relative ml-3 sm:hidden">
              <MenuButton className={pageHeadingMobileMenuButtonVariants({ theme })}>
                More
                <ChevronDownIcon aria-hidden="true" className="-mr-1 ml-1.5 size-5 text-gray-400" />
              </MenuButton>

              <MenuItems
                transition
                className="absolute left-0 z-10 mt-2 -mr-1 w-24 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                {hiddenActions.map((action, index) => (
                  <MenuItem key={index}>
                    <a
                      href={action.href || '#'}
                      onClick={action.onClick}
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      {action.label}
                    </a>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </>
        )}
      </div>
    )
  }

  const headerContent = (
    <>
      {logo && (
        <img
          className="mx-auto h-10 w-auto"
          src={logo.src}
          alt="Your Company"
        />
      )}
      <h2 className={pageHeadingTitleVariants({ theme })}>
        {title}
      </h2>
      {subtitle && (
        <p className={pageHeadingSubtitleVariants({ theme })}>
          {subtitle}
        </p>
      )}
    </>
  )

  return (
    <div className={cn(pageHeadingContainerVariants({ variant }), className)}>
      {renderBreadcrumbs()}
      
      <div className="min-w-0 flex-1">
        <div className="flex items-center">
          {avatar && (
            <img
              alt={avatar.alt || ''}
              src={avatar.src}
              className="size-16 rounded-full mr-4"
            />
          )}
          {logo && (
            <img
              alt={logo.alt || ''}
              src={logo.src}
              className="h-12 w-auto mr-4"
            />
          )}
          <div>
            <h2 className={pageHeadingTitleVariants({ theme })}>
              {title}
            </h2>
            {subtitle && (
              <p className={pageHeadingSubtitleVariants({ theme })}>
                {subtitle}
              </p>
            )}
          </div>
        </div>
        {renderMeta()}
      </div>
      
      {renderActions()}
      {children}
    </div>
  )
}

export { 
  pageHeadingContainerVariants,
  pageHeadingTitleVariants,
  pageHeadingSubtitleVariants,
  pageHeadingBreadcrumbSeparatorVariants,
  pageHeadingBreadcrumbCurrentVariants,
  pageHeadingBreadcrumbLinkVariants,
  pageHeadingMetaVariants,
  pageHeadingMetaIconVariants,
  pageHeadingActionButtonVariants,
  pageHeadingMobileMenuButtonVariants
}