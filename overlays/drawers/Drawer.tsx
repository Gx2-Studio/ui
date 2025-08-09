import { forwardRef, useEffect } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps, ActionWithVariant, BrandColor } from '../../utils/types'

// DrawerAction extends the shared ActionWithVariant but adds 'danger' variant
export interface DrawerAction extends ActionWithVariant {
  variant?: 'primary' | 'secondary' | 'danger'
}

const drawerOverlayVariants = cva(
  'absolute inset-0 transition-opacity',
  {
    variants: {
      variant: {
        'background-overlay': 'bg-gray-500 bg-opacity-75',
        default: 'bg-black bg-opacity-25'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const drawerVariants = cva(
  'fixed bg-white shadow-xl transition-transform duration-300 ease-in-out flex flex-col',
  {
    variants: {
      position: {
        right: 'right-0 top-0 h-full',
        left: 'left-0 top-0 h-full',
        top: 'top-0 left-0 w-full',
        bottom: 'bottom-0 left-0 w-full'
      },
      size: {
        sm: '',
        md: '',
        lg: '',
        xl: '',
        full: ''
      },
      open: {
        true: 'translate-x-0 translate-y-0',
        false: ''
      }
    },
    compoundVariants: [
      // Right position sizes
      { position: 'right', size: 'sm', class: 'w-80' },
      { position: 'right', size: 'md', class: 'w-96' },
      { position: 'right', size: 'lg', class: 'w-[32rem]' },
      { position: 'right', size: 'xl', class: 'w-[48rem]' },
      { position: 'right', size: 'full', class: 'w-full' },
      // Left position sizes
      { position: 'left', size: 'sm', class: 'w-80' },
      { position: 'left', size: 'md', class: 'w-96' },
      { position: 'left', size: 'lg', class: 'w-[32rem]' },
      { position: 'left', size: 'xl', class: 'w-[48rem]' },
      { position: 'left', size: 'full', class: 'w-full' },
      // Top position sizes
      { position: 'top', size: 'sm', class: 'h-80' },
      { position: 'top', size: 'md', class: 'h-96' },
      { position: 'top', size: 'lg', class: 'h-[32rem]' },
      { position: 'top', size: 'xl', class: 'h-[48rem]' },
      { position: 'top', size: 'full', class: 'h-full' },
      // Bottom position sizes
      { position: 'bottom', size: 'sm', class: 'h-80' },
      { position: 'bottom', size: 'md', class: 'h-96' },
      { position: 'bottom', size: 'lg', class: 'h-[32rem]' },
      { position: 'bottom', size: 'xl', class: 'h-[48rem]' },
      { position: 'bottom', size: 'full', class: 'h-full' },
      // Transform when closed
      { position: 'right', open: false, class: 'translate-x-full' },
      { position: 'left', open: false, class: '-translate-x-full' },
      { position: 'top', open: false, class: '-translate-y-full' },
      { position: 'bottom', open: false, class: 'translate-y-full' }
    ],
    defaultVariants: {
      position: 'right',
      size: 'md',
      open: false
    }
  }
)

const drawerHeaderVariants = cva(
  'px-4 py-6 sm:px-6',
  {
    variants: {
      variant: {
        default: '',
        branded: '',
        'sticky-footer': 'border-b border-gray-200'
      },
      brandColor: {
        indigo: '',
        blue: '',
        green: '',
        purple: '',
        red: ''
      }
    },
    compoundVariants: [
      { variant: 'branded', brandColor: 'indigo', class: 'bg-indigo-700 text-white' },
      { variant: 'branded', brandColor: 'blue', class: 'bg-blue-700 text-white' },
      { variant: 'branded', brandColor: 'green', class: 'bg-green-700 text-white' },
      { variant: 'branded', brandColor: 'purple', class: 'bg-purple-700 text-white' },
      { variant: 'branded', brandColor: 'red', class: 'bg-red-700 text-white' }
    ],
    defaultVariants: {
      variant: 'default',
      brandColor: 'indigo'
    }
  }
)

const drawerTitleVariants = cva(
  'text-lg font-medium',
  {
    variants: {
      variant: {
        default: 'text-gray-900',
        branded: 'text-white'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const drawerDescriptionVariants = cva(
  'mt-1 text-sm',
  {
    variants: {
      variant: {
        default: 'text-gray-500',
        branded: 'text-indigo-200'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const drawerCloseButtonVariants = cva(
  'rounded-md p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset',
  {
    variants: {
      variant: {
        default: 'text-gray-400 hover:text-gray-500 focus:ring-indigo-500',
        branded: 'text-indigo-200 hover:bg-indigo-600 hover:text-white focus:ring-white'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const drawerActionButtonVariants = cva(
  'rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-indigo-600 text-white hover:bg-indigo-500 focus:ring-indigo-500',
        secondary: 'bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:ring-indigo-500',
        danger: 'bg-red-600 text-white hover:bg-red-500 focus:ring-red-500'
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: ''
      }
    },
    defaultVariants: {
      variant: 'secondary',
      disabled: false
    }
  }
)

const drawerFooterVariants = cva(
  'border-t border-gray-200 px-4 py-4 sm:px-6',
  {
    variants: {
      variant: {
        default: '',
        'sticky-footer': 'sticky bottom-0 bg-white'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const drawerCloseOutsideButtonVariants = cva(
  'rounded-md bg-white p-2 text-gray-400 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500',
  {
    variants: {},
    defaultVariants: {}
  }
)

interface DrawerProps extends BaseComponentProps,
  VariantProps<typeof drawerVariants> {
  onClose: () => void
  title?: string
  description?: string
  children: React.ReactNode
  variant?: 'default' | 'branded' | 'wide' | 'close-outside' | 'sticky-footer' | 'background-overlay'
  showOverlay?: boolean
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  actions?: DrawerAction[]
  header?: React.ReactNode
  footer?: React.ReactNode
  brandColor?: BrandColor
}

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  ({
    className,
    open,
    onClose,
    title,
    description,
    children,
    position = 'right',
    size = 'md',
    variant = 'default',
    showOverlay = true,
    closeOnOverlayClick = true,
    closeOnEscape = true,
    actions,
    header,
    footer,
    brandColor = 'indigo',
    ...props
  }, ref) => {
    
    useEffect(() => {
      if (!closeOnEscape) return
      
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && open) {
          onClose()
        }
      }

      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }, [open, onClose, closeOnEscape])

    useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }

      return () => {
        document.body.style.overflow = ''
      }
    }, [open])

    const renderHeader = () => {
      if (header) return header

      const headerVariant = variant === 'branded' ? 'branded' as const : 
                         variant === 'sticky-footer' ? 'sticky-footer' as const : 
                         'default' as const
      
      return (
        <div className={drawerHeaderVariants({ variant: headerVariant, brandColor })}>
          <div className="flex items-start justify-between">
            <div>
              {title && (
                <h2 className={drawerTitleVariants({ 
                  variant: variant === 'branded' ? 'branded' : 'default' 
                })}>
                  {title}
                </h2>
              )}
              {description && (
                <p className={drawerDescriptionVariants({ 
                  variant: variant === 'branded' ? 'branded' : 'default' 
                })}>
                  {description}
                </p>
              )}
            </div>
            {variant !== 'close-outside' && (
              <div className="ml-3 h-7 flex items-center">
                <button
                  onClick={onClose}
                  className={drawerCloseButtonVariants({ 
                    variant: variant === 'branded' ? 'branded' : 'default' 
                  })}
                >
                  <span className="sr-only">Close panel</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      )
    }

    const renderActions = () => {
      if (!actions || actions.length === 0) return null

      return (
        <div className="flex gap-3">
          {actions.map((action, index) => {
            const content = action.label

            return (
              <div key={index}>
                {action.href ? (
                  <a href={action.href} className={drawerActionButtonVariants({ variant: action.variant, disabled: action.disabled })}>
                    {content}
                  </a>
                ) : (
                  <button 
                    onClick={action.onClick}
                    disabled={action.disabled}
                    className={drawerActionButtonVariants({ variant: action.variant, disabled: action.disabled })}
                  >
                    {content}
                  </button>
                )}
              </div>
            )
          })}
        </div>
      )
    }

    const renderFooter = () => {
      if (footer) return footer
      if (!actions || actions.length === 0) return null

      return (
        <div className={drawerFooterVariants({ 
          variant: variant === 'sticky-footer' ? 'sticky-footer' : 'default' 
        })}>
          <div className="flex justify-end">
            {renderActions()}
          </div>
        </div>
      )
    }

    if (!open) return null

    return (
      <div className="fixed inset-0 z-50 overflow-hidden">
        {showOverlay && (
          <div 
            className={drawerOverlayVariants({ variant: variant === 'background-overlay' ? 'background-overlay' : 'default' })}
            onClick={closeOnOverlayClick ? onClose : undefined}
          />
        )}

        {variant === 'close-outside' && (
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={onClose}
              className={drawerCloseOutsideButtonVariants()}
            >
              <span className="sr-only">Close panel</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        <div
          ref={ref}
          className={cn(drawerVariants({ position, size, open }), className)}
          {...props}
        >
          {renderHeader()}
          
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            {children}
          </div>

          {renderFooter()}
        </div>
      </div>
    )
  }
)

Drawer.displayName = 'Drawer'

export { 
  drawerVariants, 
  drawerHeaderVariants, 
  drawerTitleVariants, 
  drawerDescriptionVariants, 
  drawerCloseButtonVariants, 
  drawerActionButtonVariants, 
  drawerFooterVariants, 
  drawerOverlayVariants, 
  drawerCloseOutsideButtonVariants 
}
export type { DrawerProps }