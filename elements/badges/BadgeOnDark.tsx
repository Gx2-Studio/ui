import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'
import { XMarkIcon } from '@heroicons/react/20/solid'

const badgeOnDarkVariants = cva(
  'inline-flex items-center font-medium',
  {
    variants: {
      variant: {
        flat: '',
        pill: 'rounded-full',
        outline: 'bg-transparent ring-1 ring-inset'
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
      { variant: 'flat', color: 'gray', class: 'bg-gray-400/10 text-gray-400 rounded-md' },
      { variant: 'flat', color: 'red', class: 'bg-red-400/10 text-red-400 rounded-md' },
      { variant: 'flat', color: 'yellow', class: 'bg-yellow-400/10 text-yellow-400 rounded-md' },
      { variant: 'flat', color: 'green', class: 'bg-green-400/10 text-green-400 rounded-md' },
      { variant: 'flat', color: 'blue', class: 'bg-blue-400/10 text-blue-400 rounded-md' },
      { variant: 'flat', color: 'indigo', class: 'bg-indigo-400/10 text-indigo-400 rounded-md' },
      { variant: 'flat', color: 'purple', class: 'bg-purple-400/10 text-purple-400 rounded-md' },
      { variant: 'flat', color: 'pink', class: 'bg-pink-400/10 text-pink-400 rounded-md' },
      
      // Pill variants
      { variant: 'pill', color: 'gray', class: 'bg-gray-400/10 text-gray-400' },
      { variant: 'pill', color: 'red', class: 'bg-red-400/10 text-red-400' },
      { variant: 'pill', color: 'yellow', class: 'bg-yellow-400/10 text-yellow-400' },
      { variant: 'pill', color: 'green', class: 'bg-green-400/10 text-green-400' },
      { variant: 'pill', color: 'blue', class: 'bg-blue-400/10 text-blue-400' },
      { variant: 'pill', color: 'indigo', class: 'bg-indigo-400/10 text-indigo-400' },
      { variant: 'pill', color: 'purple', class: 'bg-purple-400/10 text-purple-400' },
      { variant: 'pill', color: 'pink', class: 'bg-pink-400/10 text-pink-400' },
      
      // Outline variants
      { variant: 'outline', color: 'gray', class: 'text-gray-400 ring-gray-400/30 rounded-md' },
      { variant: 'outline', color: 'red', class: 'text-red-400 ring-red-400/30 rounded-md' },
      { variant: 'outline', color: 'yellow', class: 'text-yellow-400 ring-yellow-400/30 rounded-md' },
      { variant: 'outline', color: 'green', class: 'text-green-400 ring-green-400/30 rounded-md' },
      { variant: 'outline', color: 'blue', class: 'text-blue-400 ring-blue-400/30 rounded-md' },
      { variant: 'outline', color: 'indigo', class: 'text-indigo-400 ring-indigo-400/30 rounded-md' },
      { variant: 'outline', color: 'purple', class: 'text-purple-400 ring-purple-400/30 rounded-md' },
      { variant: 'outline', color: 'pink', class: 'text-pink-400 ring-pink-400/30 rounded-md' }
    ],
    defaultVariants: {
      variant: 'flat',
      color: 'gray',
      size: 'xs'
    }
  }
)

const dotColors = {
  gray: 'bg-gray-400',
  red: 'bg-red-400',
  yellow: 'bg-yellow-400',
  green: 'bg-green-400',
  blue: 'bg-blue-400',
  indigo: 'bg-indigo-400',
  purple: 'bg-purple-400',
  pink: 'bg-pink-400'
} as const

interface BadgeOnDarkProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
  VariantProps<typeof badgeOnDarkVariants>, BaseComponentProps {
  dot?: boolean
  removable?: boolean
  onRemove?: () => void
}

export const BadgeOnDark = forwardRef<HTMLSpanElement, BadgeOnDarkProps>(
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
          badgeOnDarkVariants({ variant, color, size }),
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
              'inline-flex items-center justify-center rounded-full hover:bg-white/20',
              size === 'xs' && 'ml-1 size-3.5',
              size === 'sm' && 'ml-1.5 size-4',
              size === 'md' && 'ml-2 size-4'
            )}
          >
            <XMarkIcon className={cn(
              'text-current',
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

BadgeOnDark.displayName = 'BadgeOnDark'

export { badgeOnDarkVariants }
export type { BadgeOnDarkProps }