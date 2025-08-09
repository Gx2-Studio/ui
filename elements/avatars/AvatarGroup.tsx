import { forwardRef, Children, cloneElement, isValidElement } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps, AvatarSize } from '../../utils/types'

interface AvatarGroupProps extends BaseComponentProps,
  VariantProps<typeof avatarGroupVariants> {
  max?: number
}

const avatarGroupVariants = cva(
  'flex items-center',
  {
    variants: {
      size: {
        xs: '-space-x-1',
        sm: '-space-x-2',
        md: '-space-x-2',
        lg: '-space-x-3',
        xl: '-space-x-3'
      },
      direction: {
        ltr: '',
        rtl: 'space-x-reverse'
      }
    },
    defaultVariants: {
      size: 'md',
      direction: 'ltr'
    }
  }
)

const avatarGroupCounterVariants = cva(
  'relative inline-flex items-center justify-center rounded-full bg-gray-100 ring-2 ring-white',
  {
    variants: {
      size: {
        xs: 'size-6',
        sm: 'size-8',
        md: 'size-10',
        lg: 'size-12',
        xl: 'size-14'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
)

const avatarGroupCounterTextVariants = cva(
  'font-medium text-gray-600',
  {
    variants: {
      size: {
        xs: 'text-xs',
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-sm',
        xl: 'text-lg'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
)

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ 
    className,
    children,
    size = 'md',
    max = 5,
    direction = 'ltr',
    ...props
  }, ref) => {
    const childrenArray = Children.toArray(children)
    const visibleChildren = childrenArray.slice(0, max)
    const remainingCount = childrenArray.length - max
    
    return (
      <div
        ref={ref}
        className={cn(avatarGroupVariants({ size, direction }), className)}
        {...props}
      >
        {visibleChildren.map((child, index) => {
          if (isValidElement(child)) {
            return cloneElement(child, {
              key: index,
              className: cn(
                'ring-2 ring-white',
                direction === 'rtl' && index === 0 && 'relative z-10',
                direction !== 'rtl' && index === visibleChildren.length - 1 && 'relative z-10',
                (child.props as any)?.className
              )
            } as any)
          }
          return child
        })}
        
        {remainingCount > 0 && (
          <div className={avatarGroupCounterVariants({ size })}>
            <span className={avatarGroupCounterTextVariants({ size })}>
              +{remainingCount}
            </span>
          </div>
        )}
      </div>
    )
  }
)

AvatarGroup.displayName = 'AvatarGroup'

export { avatarGroupVariants, avatarGroupCounterVariants, avatarGroupCounterTextVariants }
export type { AvatarGroupProps }