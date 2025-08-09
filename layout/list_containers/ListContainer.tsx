import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'

const listContainerVariants = cva(
  '',
  {
    variants: {
      variant: {
        simple: 'divide-y divide-gray-200',
        separate: 'space-y-3',
        flat: 'overflow-hidden bg-white shadow-sm',
        card: 'overflow-hidden rounded-md bg-white shadow-sm'
      },
      fullWidthMobile: {
        true: '',
        false: ''
      }
    },
    compoundVariants: [
      {
        variant: 'simple',
        fullWidthMobile: true,
        class: 'divide-y-0 sm:divide-y'
      },
      {
        variant: 'separate',
        fullWidthMobile: true,
        class: 'space-y-0 sm:space-y-3'
      },
      {
        variant: 'flat',
        fullWidthMobile: true,
        class: 'shadow-none sm:shadow-sm'
      },
      {
        variant: 'card',
        fullWidthMobile: true,
        class: 'rounded-none shadow-none sm:rounded-md sm:shadow-sm'
      }
    ],
    defaultVariants: {
      variant: 'simple',
      fullWidthMobile: false
    }
  }
)

const listContainerItemVariants = cva(
  '',
  {
    variants: {
      variant: {
        simple: '',
        separate: 'overflow-hidden rounded-md bg-white shadow-sm',
        flat: '',
        card: ''
      },
      spacing: {
        sm: 'py-2',
        md: 'py-4',
        lg: 'py-6'
      },
      paddingSpacing: {
        sm: 'px-4',
        md: 'px-6',
        lg: 'px-8'
      },
      fullWidthMobile: {
        true: '',
        false: ''
      }
    },
    compoundVariants: [
      {
        variant: 'simple',
        fullWidthMobile: true,
        class: 'border-b border-gray-200 sm:border-b-0'
      },
      {
        variant: 'separate',
        fullWidthMobile: true,
        class: 'rounded-none shadow-none border-b border-gray-200 sm:rounded-md sm:shadow-sm sm:border-b-0'
      }
    ],
    defaultVariants: {
      variant: 'simple',
      spacing: 'md',
      paddingSpacing: 'md',
      fullWidthMobile: false
    }
  }
)

interface ListContainerProps extends BaseComponentProps,
  VariantProps<typeof listContainerVariants> {
  items: React.ReactNode[]
  spacing?: 'sm' | 'md' | 'lg'
  as?: 'ul' | 'ol' | 'div'
}

export const ListContainer = forwardRef<HTMLUListElement | HTMLOListElement | HTMLDivElement, ListContainerProps>(
  ({ 
    className,
    items,
    variant = 'simple',
    spacing = 'md',
    fullWidthMobile = false,
    as: Component = 'ul',
    ...props
  }, ref) => {
    const needsPadding = variant === 'separate' || variant === 'flat' || variant === 'card'

    if (variant === 'flat' || variant === 'card') {
      const WrapperComponent = variant === 'flat' ? 'div' : 'div'
      return (
        <WrapperComponent 
          ref={ref as any}
          className={cn(listContainerVariants({ variant, fullWidthMobile }), className)}
          {...props}
        >
          <Component 
            role={Component === 'ul' || Component === 'ol' ? 'list' : undefined}
            className="divide-y divide-gray-200"
          >
            {items.map((item, index) => (
              <li 
                key={index} 
                className={listContainerItemVariants({ variant, spacing, paddingSpacing: spacing, fullWidthMobile })}
              >
                {item}
              </li>
            ))}
          </Component>
        </WrapperComponent>
      )
    }

    return (
      <Component 
        ref={ref as any}
        role={Component === 'ul' || Component === 'ol' ? 'list' : undefined}
        className={cn(listContainerVariants({ variant, fullWidthMobile }), className)}
        {...props}
      >
        {items.map((item, index) => (
          <li 
            key={index} 
            className={listContainerItemVariants({ 
              variant, 
              spacing, 
              paddingSpacing: needsPadding ? spacing : undefined, 
              fullWidthMobile 
            })}
          >
            {item}
          </li>
        ))}
      </Component>
    )
  }
)

ListContainer.displayName = 'ListContainer'

export { listContainerVariants, listContainerItemVariants }
export type { ListContainerProps }