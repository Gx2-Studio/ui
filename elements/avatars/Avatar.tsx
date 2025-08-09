import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'
import { UserIcon } from '@heroicons/react/24/solid'

const avatarVariants = cva(
  'flex items-center justify-center overflow-hidden bg-gray-100',
  {
    variants: {
      size: {
        xs: 'size-6',
        sm: 'size-8',
        md: 'size-10',
        lg: 'size-12',
        xl: 'size-14'
      },
      shape: {
        circle: 'rounded-full',
        rounded: 'rounded'
      }
    },
    defaultVariants: {
      size: 'md',
      shape: 'circle'
    }
  }
)

const textSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-sm',
  lg: 'text-lg',
  xl: 'text-xl'
} as const

const statusSizes = {
  xs: 'size-1.5',
  sm: 'size-2',
  md: 'size-2.5',
  lg: 'size-3',
  xl: 'size-3.5'
} as const

const statusColors = {
  online: 'bg-green-400',
  offline: 'bg-gray-300',
  away: 'bg-yellow-400',
  busy: 'bg-red-400'
} as const

const notificationSizes = {
  xs: 'size-1.5',
  sm: 'size-2',
  md: 'size-2.5',
  lg: 'size-3',
  xl: 'size-3.5'
} as const

const notificationColors = {
  gray: 'bg-gray-300',
  red: 'bg-red-400',
  green: 'bg-green-400',
  blue: 'bg-blue-400',
  yellow: 'bg-yellow-400'
} as const

const notificationPositions = {
  top: 'top-0 right-0',
  bottom: 'bottom-0 right-0',
  'top-right': 'top-0 right-0 translate-x-1/2 -translate-y-1/2 transform',
  'bottom-right': 'bottom-0 right-0 translate-x-1/2 translate-y-1/2 transform'
} as const

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof avatarVariants>, BaseComponentProps {
  src?: string
  alt?: string
  initials?: string
  status?: 'online' | 'offline' | 'away' | 'busy'
  statusPosition?: 'top' | 'bottom'
  notification?: 'top' | 'bottom' | 'top-right' | 'bottom-right'
  notificationColor?: 'gray' | 'red' | 'green' | 'blue' | 'yellow'
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ 
    className,
    src,
    alt = '',
    size,
    shape,
    initials,
    status,
    statusPosition = 'bottom',
    notification,
    notificationColor = 'gray',
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative inline-block',
          className
        )}
        {...props}
      >
        <div className={avatarVariants({ size, shape })}>
          {src ? (
            <img
              className="size-full object-cover"
              src={src}
              alt={alt}
            />
          ) : initials ? (
            <span className={cn(
              'font-medium text-gray-600',
              textSizes[size || 'md']
            )}>
              {initials}
            </span>
          ) : (
            <UserIcon className={cn(
              'text-gray-400',
              size === 'xs' && 'size-4',
              size === 'sm' && 'size-5',
              size === 'md' && 'size-6',
              size === 'lg' && 'size-7',
              size === 'xl' && 'size-8'
            )} />
          )}
        </div>
        
        {status && (
          <span className={cn(
            'absolute block rounded-full ring-2 ring-white',
            statusSizes[size || 'md'],
            statusColors[status],
            statusPosition === 'bottom' && 'bottom-0 right-0',
            statusPosition === 'top' && 'top-0 right-0'
          )} />
        )}
        
        {notification && (
          <span className={cn(
            'absolute block rounded-full ring-2 ring-white',
            notificationSizes[size || 'md'],
            notificationColors[notificationColor],
            notificationPositions[notification]
          )} />
        )}
      </div>
    )
  }
)

Avatar.displayName = 'Avatar'

export { avatarVariants }
export type { AvatarProps }