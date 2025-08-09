'use client'

import { forwardRef, useEffect } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Transition } from '@headlessui/react'
import { 
  CheckCircleIcon, 
  ExclamationTriangleIcon, 
  InformationCircleIcon, 
  XCircleIcon,
  XMarkIcon 
} from '@heroicons/react/24/outline'
import { cn } from '../../utils/cn'
import { BaseComponentProps, BaseAction } from '../../utils/types'

// NotificationAction uses BaseAction with specific variants
export interface NotificationAction extends Omit<BaseAction, 'onClick'> {
  onClick: () => void  // onClick is required for notifications
  variant?: 'primary' | 'secondary'
}

const notificationVariants = cva(
  'pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5',
  {
    variants: {
      type: {
        success: '',
        error: '',
        warning: '',
        info: ''
      },
      position: {
        'top-right': '',
        'top-left': '',
        'bottom-right': '',
        'bottom-left': '',
        'top-center': '',
        'bottom-center': ''
      }
    },
    defaultVariants: {
      type: 'success',
      position: 'top-right'
    }
  }
)

const iconVariants = cva(
  'size-6',
  {
    variants: {
      type: {
        success: 'text-green-400',
        error: 'text-red-400',
        warning: 'text-yellow-400',
        info: 'text-blue-400'
      }
    }
  }
)

interface NotificationProps extends BaseComponentProps,
  VariantProps<typeof notificationVariants> {
  show: boolean
  onClose?: () => void
  title: string
  description?: string
  actions?: NotificationAction[]
  autoClose?: boolean
  autoCloseDelay?: number
  showCloseButton?: boolean
  avatar?: React.ReactNode
  customIcon?: React.ReactNode
}

export const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  ({ 
    className,
    show,
    onClose,
    title,
    description,
    type,
    position,
    actions,
    autoClose = false,
    autoCloseDelay = 5000,
    showCloseButton = true,
    avatar,
    customIcon,
    ...props
  }, ref) => {
    useEffect(() => {
      if (autoClose && show && onClose) {
        const timer = setTimeout(() => {
          onClose()
        }, autoCloseDelay)
        
        return () => clearTimeout(timer)
      }
    }, [autoClose, autoCloseDelay, show, onClose])

    const typeIcons = {
      success: CheckCircleIcon,
      error: XCircleIcon,
      warning: ExclamationTriangleIcon,
      info: InformationCircleIcon
    }

    const typeColors = {
      success: 'text-green-400',
      error: 'text-red-400',
      warning: 'text-yellow-400',
      info: 'text-blue-400'
    }

    const positionClasses = {
      'top-right': 'top-0 right-0 items-end',
      'top-left': 'top-0 left-0 items-start',
      'bottom-right': 'bottom-0 right-0 items-end',
      'bottom-left': 'bottom-0 left-0 items-start',
      'top-center': 'top-0 left-1/2 transform -translate-x-1/2 items-center',
      'bottom-center': 'bottom-0 left-1/2 transform -translate-x-1/2 items-center'
    }

    const Icon = customIcon ? null : (type ? typeIcons[type] : typeIcons.success)
    const iconColor = type ? typeColors[type] : typeColors.success

    return (
      <div
        aria-live="assertive"
        className={cn(
          'pointer-events-none fixed inset-0 flex px-4 py-6 sm:p-6 z-50',
          position ? positionClasses[position] : positionClasses['top-right']
        )}
      >
        <div className="flex w-full flex-col space-y-4 sm:items-end">
          <Transition show={show}>
            <div 
              ref={ref}
              className={cn(
                'pointer-events-auto w-full max-w-sm rounded-lg bg-white shadow-lg ring-1 ring-black/5',
                'transition data-closed:opacity-0 data-enter:transform data-enter:duration-300 data-enter:ease-out',
                'data-closed:data-enter:translate-y-2 data-leave:duration-100 data-leave:ease-in',
                'data-closed:data-enter:sm:translate-x-2 data-closed:data-enter:sm:translate-y-0',
                className
              )}
              {...props}
            >
              <div className="p-4">
                <div className="flex items-start">
                  <div className="shrink-0">
                    {avatar || (
                      customIcon ? customIcon : (
                        Icon && <Icon aria-hidden="true" className={cn('size-6', iconColor)} />
                      )
                    )}
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">{title}</p>
                    {description && (
                      <p className="mt-1 text-sm text-gray-500">{description}</p>
                    )}
                    {actions && actions.length > 0 && (
                      <div className="mt-3 flex space-x-3">
                        {actions.map((action, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={action.onClick}
                            className={cn(
                              'rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
                              action.variant === 'primary'
                                ? 'bg-indigo-600 text-white hover:bg-indigo-500 focus:ring-indigo-500'
                                : 'bg-white text-gray-700 hover:text-gray-500 focus:ring-indigo-500'
                            )}
                          >
                            {action.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {showCloseButton && onClose && (
                    <div className="ml-4 flex shrink-0">
                      <button
                        type="button"
                        onClick={onClose}
                        className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon aria-hidden="true" className="size-5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    )
  }
)

Notification.displayName = 'Notification'