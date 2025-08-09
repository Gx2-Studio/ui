import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'

export interface BreadcrumbItem {
  name: string
  href?: string
  current?: boolean
  onClick?: () => void
}

const breadcrumbsNavVariants = cva(
  'flex',
  {
    variants: {
      variant: {
        simple: '',
        contained: 'rounded-md bg-white shadow-sm',
        fullWidth: 'border-b border-gray-200 bg-white'
      }
    },
    defaultVariants: {
      variant: 'simple'
    }
  }
)

const breadcrumbsListVariants = cva(
  'flex items-center',
  {
    variants: {
      variant: {
        simple: '',
        contained: 'px-6',
        fullWidth: 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'
      },
      size: {
        sm: 'text-xs space-x-2',
        md: 'text-sm space-x-4',
        lg: 'text-base space-x-6'
      }
    },
    defaultVariants: {
      variant: 'simple',
      size: 'md'
    }
  }
)

const breadcrumbItemVariants = cva(
  'ml-4 font-medium transition-colors',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base'
      },
      isCurrent: {
        true: 'text-gray-700',
        false: 'text-gray-500 hover:text-gray-700'
      },
      isClickable: {
        true: '',
        false: 'cursor-default'
      }
    },
    compoundVariants: [
      {
        isCurrent: true,
        isClickable: true,
        class: 'cursor-default'
      }
    ],
    defaultVariants: {
      size: 'md',
      isCurrent: false,
      isClickable: true
    }
  }
)

interface BreadcrumbsProps extends BaseComponentProps,
  VariantProps<typeof breadcrumbsNavVariants>,
  VariantProps<typeof breadcrumbsListVariants> {
  items: BreadcrumbItem[]
  showHome?: boolean
  homeHref?: string
  onHomeClick?: () => void
  separator?: 'chevron' | 'slash' | 'arrow'
}

const SlashSeparator = () => (
  <svg 
    fill="currentColor" 
    viewBox="0 0 20 20" 
    aria-hidden="true" 
    className="size-5 shrink-0 text-gray-300"
  >
    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
  </svg>
)

const ArrowSeparator = () => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 44"
    preserveAspectRatio="none"
    aria-hidden="true"
    className="h-full w-6 shrink-0 text-gray-200"
  >
    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
  </svg>
)

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ 
    className,
    items,
    showHome = true,
    homeHref = '#',
    onHomeClick,
    separator = 'chevron',
    variant = 'simple',
    size = 'md',
    ...props
  }, ref) => {
    const getSeparatorComponent = () => {
      switch (separator) {
        case 'slash':
          return <SlashSeparator />
        case 'arrow':
          return <ArrowSeparator />
        case 'chevron':
        default:
          return <ChevronRightIcon aria-hidden="true" className="size-5 shrink-0 text-gray-400" />
      }
    }

    const handleItemClick = (item: BreadcrumbItem, e: React.MouseEvent) => {
      if (item.onClick) {
        e.preventDefault()
        item.onClick()
      }
    }

    const handleHomeClick = (e: React.MouseEvent) => {
      if (onHomeClick) {
        e.preventDefault()
        onHomeClick()
      }
    }

    return (
      <nav 
        ref={ref}
        aria-label="Breadcrumb" 
        className={cn(breadcrumbsNavVariants({ variant }), className)}
        {...props}
      >
        <ol role="list" className={breadcrumbsListVariants({ variant, size })}>
          {showHome && (
            <li className="flex">
              <div className="flex items-center">
                <a 
                  href={homeHref}
                  onClick={handleHomeClick}
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <HomeIcon aria-hidden="true" className="size-5 shrink-0" />
                  <span className="sr-only">Home</span>
                </a>
              </div>
            </li>
          )}
          
          {items.map((item, index) => (
            <li key={item.name} className="flex">
              <div className="flex items-center">
                {getSeparatorComponent()}
                {item.href || item.onClick ? (
                  <a
                    href={item.href}
                    onClick={(e) => handleItemClick(item, e)}
                    aria-current={item.current ? 'page' : undefined}
                    className={breadcrumbItemVariants({ 
                      size,
                      isCurrent: item.current,
                      isClickable: Boolean(item.href || item.onClick)
                    })}
                  >
                    {item.name}
                  </a>
                ) : (
                  <span
                    aria-current={item.current ? 'page' : undefined}
                    className={breadcrumbItemVariants({ 
                      size,
                      isCurrent: item.current,
                      isClickable: false
                    })}
                  >
                    {item.name}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    )
  }
)

Breadcrumbs.displayName = 'Breadcrumbs'

export { breadcrumbsNavVariants, breadcrumbsListVariants, breadcrumbItemVariants }
export type { BreadcrumbsProps }