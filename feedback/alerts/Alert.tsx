import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'
import { 
  CheckCircleIcon, 
  ExclamationTriangleIcon, 
  XCircleIcon, 
  InformationCircleIcon,
  XMarkIcon 
} from '@heroicons/react/20/solid'

const alertVariants = cva(
  'rounded-md border p-4',
  {
    variants: {
      variant: {
        success: 'bg-green-50 border-green-200',
        warning: 'bg-yellow-50 border-yellow-200',
        error: 'bg-red-50 border-red-200',
        info: 'bg-blue-50 border-blue-200'
      }
    },
    defaultVariants: {
      variant: 'info'
    }
  }
)

const dismissButtonVariants = cva(
  'inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        success: 'bg-green-50 text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50',
        warning: 'bg-yellow-50 text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50',
        error: 'bg-red-50 text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50',
        info: 'bg-blue-50 text-blue-500 hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50'
      }
    }
  }
)

const iconStyles = {
  success: 'text-green-400',
  warning: 'text-yellow-400',
  error: 'text-red-400',
  info: 'text-blue-400'
} as const

const textStyles = {
  success: 'text-green-800',
  warning: 'text-yellow-800',
  error: 'text-red-800',
  info: 'text-blue-800'
} as const

const defaultIcons = {
  success: <CheckCircleIcon className="h-5 w-5" />,
  warning: <ExclamationTriangleIcon className="h-5 w-5" />,
  error: <XCircleIcon className="h-5 w-5" />,
  info: <InformationCircleIcon className="h-5 w-5" />
} as const

interface AlertProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof alertVariants>, BaseComponentProps {
  title?: string
  description?: React.ReactNode
  dismissible?: boolean
  onDismiss?: () => void
  actions?: React.ReactNode
  icon?: React.ReactNode | boolean
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ 
    className,
    variant,
    title,
    description,
    dismissible = false,
    onDismiss,
    actions,
    icon = true,
    children,
    ...props
  }, ref) => {
    const showIcon = icon !== false
    const iconElement = icon === true ? defaultIcons[variant || 'info'] : icon
    
    return (
      <div
        ref={ref}
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <div className="flex">
          {showIcon && (
            <div className="flex-shrink-0">
              <span className={iconStyles[variant || 'info']}>
                {iconElement}
              </span>
            </div>
          )}
          <div className={cn('flex-1', showIcon && 'ml-3')}>
            {title && (
              <h3 className={cn('text-sm font-medium', textStyles[variant || 'info'])}>
                {title}
              </h3>
            )}
            {(description || children) && (
              <div className={cn(
                'text-sm',
                textStyles[variant || 'info'],
                title ? 'mt-2' : ''
              )}>
                {description || children}
              </div>
            )}
            {actions && (
              <div className="mt-4">
                {actions}
              </div>
            )}
          </div>
          {dismissible && (
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <button
                  type="button"
                  onClick={onDismiss}
                  className={dismissButtonVariants({ variant })}
                >
                  <span className="sr-only">Dismiss</span>
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
)

Alert.displayName = 'Alert'

export { alertVariants, dismissButtonVariants }
export type { AlertProps }