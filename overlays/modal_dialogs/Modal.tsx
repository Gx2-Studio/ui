import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { cn } from '../../utils/cn'
import { BaseComponentProps, ActionWithVariant } from '../../utils/types'
import { Button } from '../../elements/buttons'

// ModalAction extends ActionWithVariant and adds autoFocus
export interface ModalAction extends ActionWithVariant {
  variant?: 'primary' | 'secondary' | 'soft' | 'ghost'
  autoFocus?: boolean
}

const modalVariants = cva(
  'relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:p-6',
  {
    variants: {
      size: {
        sm: 'sm:max-w-sm',
        md: 'sm:max-w-lg',
        lg: 'sm:max-w-2xl',
        xl: 'sm:max-w-4xl',
        full: 'sm:max-w-full sm:m-4'
      },
      position: {
        center: 'sm:align-middle',
        top: 'sm:align-top sm:mt-20'
      }
    },
    defaultVariants: {
      size: 'md',
      position: 'center'
    }
  }
)

const iconColorVariants = cva(
  'mx-auto flex h-12 w-12 items-center justify-center rounded-full',
  {
    variants: {
      iconColor: {
        red: 'bg-red-100 text-red-600',
        yellow: 'bg-yellow-100 text-yellow-600',
        green: 'bg-green-100 text-green-600',
        blue: 'bg-blue-100 text-blue-600',
        gray: 'bg-gray-100 text-gray-600'
      }
    },
    defaultVariants: {
      iconColor: 'red'
    }
  }
)

interface ModalProps extends Omit<BaseComponentProps, 'children'>,
  VariantProps<typeof modalVariants> {
  open: boolean
  onClose: () => void
  title?: string
  description?: string
  children?: React.ReactNode
  icon?: React.ReactNode
  iconColor?: 'red' | 'yellow' | 'green' | 'blue' | 'gray'
  actions?: ModalAction[]
  showCloseButton?: boolean
  closeOnBackdropClick?: boolean
  variant?: 'alert' | 'default'
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ 
    className,
    open,
    onClose,
    title,
    description,
    children,
    icon,
    iconColor = 'red',
    actions,
    size,
    position,
    showCloseButton = false,
    closeOnBackdropClick = true,
    variant = 'default',
    ...props
  }, ref) => {

    const handleClose = () => {
      if (closeOnBackdropClick) {
        onClose()
      }
    }

    const renderActions = () => {
      if (!actions || actions.length === 0) return null

      return (
        <div className={cn(
          'mt-5 sm:mt-4',
          variant === 'alert' ? 'sm:flex sm:flex-row-reverse' : 'flex justify-end gap-3'
        )}>
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant || 'primary'}
              onClick={action.onClick}
              disabled={action.disabled}
              autoFocus={action.autoFocus}
              className={cn(
                variant === 'alert' && index === 0 && 'sm:ml-3 sm:w-auto',
                variant === 'alert' && index !== 0 && 'mt-3 sm:mt-0 sm:w-auto'
              )}
              size="sm"
            >
              {action.label}
            </Button>
          ))}
        </div>
      )
    }

    return (
      <Dialog 
        open={open} 
        onClose={handleClose} 
        className="relative z-50"
        {...props}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className={cn(
            'flex min-h-full justify-center p-4 text-center',
            position === 'center' ? 'items-center' : 'items-start pt-16',
            'sm:p-0'
          )}>
            <DialogPanel
              ref={ref}
              transition
              className={cn(
                modalVariants({ size, position }),
                'data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in',
                'data-closed:sm:translate-y-0 data-closed:sm:scale-95',
                className
              )}
            >
              {showCloseButton && (
                <div className="absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="size-6" aria-hidden="true" />
                  </button>
                </div>
              )}

              <div className={cn(variant === 'alert' && icon && 'sm:flex sm:items-start')}>
                {icon && (
                  <div className={cn(
                    iconColorVariants({ iconColor }),
                    'shrink-0 sm:mx-0 sm:size-10'
                  )}>
                    {icon}
                  </div>
                )}
                
                <div className={cn(
                  variant === 'alert' && icon ? 'mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left' : ''
                )}>
                  {title && (
                    <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                      {title}
                    </DialogTitle>
                  )}
                  
                  {description && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {description}
                      </p>
                    </div>
                  )}
                  
                  {children && (
                    <div className={cn(title || description ? 'mt-4' : '')}>
                      {children}
                    </div>
                  )}
                </div>
              </div>
              
              {renderActions()}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    )
  }
)

Modal.displayName = 'Modal'

export { modalVariants, iconColorVariants }
export type { ModalProps }