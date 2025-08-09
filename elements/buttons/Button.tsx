import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'

const buttonVariants = cva(
  'font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-indigo-600 text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-indigo-600',
        secondary: 'bg-white text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
        soft: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200',
        ghost: 'text-gray-700 hover:bg-gray-50'
      },
      size: {
        xs: 'px-2 py-1 text-xs',
        sm: 'px-2 py-1 text-sm',
        md: 'px-2.5 py-1.5 text-sm',
        lg: 'px-3 py-2 text-sm',
        xl: 'px-3.5 py-2.5 text-sm'
      },
      rounded: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      rounded: 'md'
    }
  }
)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants>, BaseComponentProps {
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className,
    variant,
    size,
    rounded,
    leadingIcon,
    trailingIcon,
    children,
    ...props
  }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, rounded }),
          (leadingIcon || trailingIcon) && 'inline-flex items-center',
          leadingIcon && size === 'xs' && 'gap-x-1',
          leadingIcon && size !== 'xs' && 'gap-x-1.5',
          trailingIcon && size === 'xs' && 'gap-x-1',
          trailingIcon && size !== 'xs' && 'gap-x-1.5',
          className
        )}
        {...props}
      >
        {leadingIcon && (
          <span className={cn(
            'flex-shrink-0',
            size === 'xs' && '-ml-0.5 size-4',
            size !== 'xs' && '-ml-0.5 size-5'
          )}>
            {leadingIcon}
          </span>
        )}
        {children}
        {trailingIcon && (
          <span className={cn(
            'flex-shrink-0',
            size === 'xs' && '-mr-0.5 size-4',
            size !== 'xs' && '-mr-0.5 size-5'
          )}>
            {trailingIcon}
          </span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { buttonVariants }
export type { ButtonProps }