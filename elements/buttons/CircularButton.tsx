import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'

const circularButtonVariants = cva(
  'rounded-full font-semibold transition-colors inline-flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-indigo-600 text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-indigo-600',
        secondary: 'bg-white text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
        soft: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200',
        ghost: 'text-gray-700 hover:bg-gray-50'
      },
      size: {
        xs: 'p-1',
        sm: 'p-1.5',
        md: 'p-2',
        lg: 'p-2.5',
        xl: 'p-3'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
)

const iconSizes = {
  xs: 'size-4',
  sm: 'size-5',
  md: 'size-5',
  lg: 'size-6',
  xl: 'size-6'
} as const

interface CircularButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof circularButtonVariants>, BaseComponentProps {
  icon: React.ReactNode
  'aria-label': string
}

export const CircularButton = forwardRef<HTMLButtonElement, CircularButtonProps>(
  ({ 
    className,
    variant,
    size,
    icon,
    ...props
  }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          circularButtonVariants({ variant, size }),
          className
        )}
        {...props}
      >
        <span className={iconSizes[size || 'md']}>
          {icon}
        </span>
      </button>
    )
  }
)

CircularButton.displayName = 'CircularButton'

export { circularButtonVariants }
export type { CircularButtonProps }