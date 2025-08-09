import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'
import { XMarkIcon } from '@heroicons/react/20/solid'

const badgeVariants = cva(
  'inline-flex items-center font-medium',
  {
    variants: {
      variant: {
        flat: '',
        pill: 'rounded-full',
        outline: 'bg-white ring-1 ring-inset'
      },
      color: {
        gray: '',
        red: '',
        yellow: '',
        green: '',
        blue: '',
        indigo: '',
        purple: '',
        pink: ''
      },
      size: {
        xs: 'px-2 py-1 text-xs',
        sm: 'px-2.5 py-1 text-sm',
        md: 'px-3 py-1.5 text-sm'
      }
    },
    compoundVariants: [
      // Flat variants
      { variant: 'flat', color: 'gray', class: 'bg-gray-100 text-gray-600 rounded-md' },
      { variant: 'flat', color: 'red', class: 'bg-red-100 text-red-700 rounded-md' },
      { variant: 'flat', color: 'yellow', class: 'bg-yellow-100 text-yellow-800 rounded-md' },
      { variant: 'flat', color: 'green', class: 'bg-green-100 text-green-700 rounded-md' },
      { variant: 'flat', color: 'blue', class: 'bg-blue-100 text-blue-700 rounded-md' },
      { variant: 'flat', color: 'indigo', class: 'bg-indigo-100 text-indigo-700 rounded-md' },
      { variant: 'flat', color: 'purple', class: 'bg-purple-100 text-purple-700 rounded-md' },
      { variant: 'flat', color: 'pink', class: 'bg-pink-100 text-pink-700 rounded-md' },
      
      // Pill variants
      { variant: 'pill', color: 'gray', class: 'bg-gray-100 text-gray-600' },
      { variant: 'pill', color: 'red', class: 'bg-red-100 text-red-700' },
      { variant: 'pill', color: 'yellow', class: 'bg-yellow-100 text-yellow-800' },
      { variant: 'pill', color: 'green', class: 'bg-green-100 text-green-700' },
      { variant: 'pill', color: 'blue', class: 'bg-blue-100 text-blue-700' },
      { variant: 'pill', color: 'indigo', class: 'bg-indigo-100 text-indigo-700' },
      { variant: 'pill', color: 'purple', class: 'bg-purple-100 text-purple-700' },
      { variant: 'pill', color: 'pink', class: 'bg-pink-100 text-pink-700' },
      
      // Outline variants
      { variant: 'outline', color: 'gray', class: 'text-gray-600 ring-gray-300 rounded-md' },
      { variant: 'outline', color: 'red', class: 'text-red-600 ring-red-300 rounded-md' },
      { variant: 'outline', color: 'yellow', class: 'text-yellow-600 ring-yellow-300 rounded-md' },
      { variant: 'outline', color: 'green', class: 'text-green-600 ring-green-300 rounded-md' },
      { variant: 'outline', color: 'blue', class: 'text-blue-600 ring-blue-300 rounded-md' },
      { variant: 'outline', color: 'indigo', class: 'text-indigo-600 ring-indigo-300 rounded-md' },
      { variant: 'outline', color: 'purple', class: 'text-purple-600 ring-purple-300 rounded-md' },
      { variant: 'outline', color: 'pink', class: 'text-pink-600 ring-pink-300 rounded-md' }
    ],
    defaultVariants: {
      variant: 'flat',
      color: 'gray',
      size: 'xs'
    }
  }
)

const dotColors = {
  gray: 'bg-gray-500',
  red: 'bg-red-500',
  yellow: 'bg-yellow-500',
  green: 'bg-green-500',
  blue: 'bg-blue-500',
  indigo: 'bg-indigo-500',
  purple: 'bg-purple-500',
  pink: 'bg-pink-500'
} as const

interface BadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
  VariantProps<typeof badgeVariants>, BaseComponentProps {
  dot?: boolean
  removable?: boolean
  onRemove?: () => void
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ 
    className,
    color,
    size,
    variant,
    dot = false,
    removable = false,
    onRemove,
    children,
    ...props
  }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          badgeVariants({ variant, color, size }),
          removable && 'pr-1',
          className
        )}
        {...props}
      >
        {dot && (
          <span className={cn(
            'rounded-full',
            size === 'xs' && '-ml-0.5 mr-1.5 size-1.5',
            size === 'sm' && '-ml-0.5 mr-1.5 size-2',
            size === 'md' && '-ml-1 mr-2 size-2',
            dotColors[(color as keyof typeof dotColors) || 'gray']
          )} />
        )}
        {children}
        {removable && (
          <button
            type="button"
            onClick={onRemove}
            className={cn(
              'inline-flex items-center justify-center rounded-full hover:bg-gray-500/20',
              size === 'xs' && 'ml-1 size-3.5',
              size === 'sm' && 'ml-1.5 size-4',
              size === 'md' && 'ml-2 size-4'
            )}
          >
            <XMarkIcon className={cn(
              size === 'xs' && 'size-3',
              size === 'sm' && 'size-3.5',
              size === 'md' && 'size-4'
            )} />
          </button>
        )}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export { badgeVariants }
export type { BadgeProps }