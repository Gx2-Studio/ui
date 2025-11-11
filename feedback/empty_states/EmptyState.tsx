import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'
import { Button } from '../../elements/buttons'

export interface EmptyStateAction {
  label?: string
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary'
  icon?: React.ReactNode
}

const emptyStateContainerVariants = cva(
  'text-center',
  {
    variants: {
      variant: {
        default: '',
        dashed: 'relative block w-full rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden transition-colors',
        card: 'rounded-lg bg-white shadow-sm border border-gray-200'
      },
      size: {
        sm: 'p-8',
        md: 'p-12',
        lg: 'p-16'
      }
    },
    compoundVariants: [
      {
        variant: 'default',
        size: 'sm',
        class: ''
      },
      {
        variant: 'default',
        size: 'md',
        class: ''
      },
      {
        variant: 'default',
        size: 'lg',
        class: ''
      }
    ],
    defaultVariants: {
      variant: 'default',
      size: 'md'
    }
  }
)

const emptyStateIconVariants = cva(
  'mx-auto text-gray-400',
  {
    variants: {
      size: {
        sm: 'size-8',
        md: 'size-12',
        lg: 'size-16'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
)

const emptyStateTitleVariants = cva(
  'mt-2 font-semibold text-gray-900',
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-sm',
        lg: 'text-base'
      },
      variant: {
        default: '',
        dashed: 'block',
        card: ''
      }
    },
    defaultVariants: {
      size: 'md',
      variant: 'default'
    }
  }
)

const emptyStateDescriptionVariants = cva(
  'mt-1 text-gray-500',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
)

interface EmptyStateProps extends BaseComponentProps,
  VariantProps<typeof emptyStateContainerVariants> {
  icon?: React.ReactNode
  title: string
  description?: string
  actions?: EmptyStateAction[]
}

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ 
    className,
    icon,
    title,
    description,
    actions,
    variant = 'default',
    size = 'md',
    ...props
  }, ref) => {

    if (variant === 'dashed') {
      return (
        <button
          ref={ref as any}
          type="button"
          className={cn(emptyStateContainerVariants({ variant, size }), className)}
          onClick={actions?.[0]?.onClick}
          {...props}
        >
          {icon && (
            <div className={emptyStateIconVariants({ size })}>
              {icon}
            </div>
          )}
          <span className={emptyStateTitleVariants({ size, variant })}>
            {title}
          </span>
          {description && (
            <p className={emptyStateDescriptionVariants({ size })}>
              {description}
            </p>
          )}
        </button>
      )
    }

    if (variant === 'card') {
      return (
        <div 
          ref={ref}
          className={cn(emptyStateContainerVariants({ variant, size }), className)}
          {...props}
        >
          {icon && (
            <div className={emptyStateIconVariants({ size })}>
              {icon}
            </div>
          )}
          <h3 className={emptyStateTitleVariants({ size, variant })}>
            {title}
          </h3>
          {description && (
            <p className={emptyStateDescriptionVariants({ size })}>
              {description}
            </p>
          )}
          {actions && actions.length > 0 && (
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant={action.variant || 'primary'}
                  onClick={action.onClick}
                  leadingIcon={action.icon}
                  size={size}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      )
    }

    // Default variant
    return (
      <div 
        ref={ref}
        className={cn(emptyStateContainerVariants({ variant, size }), className)}
        {...props}
      >
        {icon && (
          <div className={emptyStateIconVariants({ size })}>
            {icon}
          </div>
        )}
        <h3 className={emptyStateTitleVariants({ size, variant })}>
          {title}
        </h3>
        {description && (
          <p className={emptyStateDescriptionVariants({ size })}>
            {description}
          </p>
        )}
        {actions && actions.length > 0 && (
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant || 'primary'}
                onClick={action.onClick}
                leadingIcon={action.icon}
                size={size}
              >
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    )
  }
)

EmptyState.displayName = 'EmptyState'
export { emptyStateContainerVariants, emptyStateIconVariants, emptyStateTitleVariants, emptyStateDescriptionVariants }
export type { EmptyStateProps }
