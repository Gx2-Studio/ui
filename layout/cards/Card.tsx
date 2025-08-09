import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'

const cardVariants = cva(
  'rounded-lg',
  {
    variants: {
      variant: {
        default: 'bg-white shadow-sm ring-1 ring-gray-950/5',
        well: 'bg-gray-50 ring-1 ring-gray-950/5',
        outlined: 'bg-white border border-gray-200',
        'well-on-gray': 'bg-white shadow ring-1 ring-gray-950/5',
        shadow: 'bg-white shadow-lg ring-1 ring-gray-950/5',
        flat: 'bg-white border border-gray-200'
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8'
      },
      bodyVariant: {
        default: '',
        gray: 'bg-gray-50'
      }
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
      bodyVariant: 'default'
    }
  }
)

interface CardProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof cardVariants>, BaseComponentProps {
  edgeToEdge?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className,
    variant,
    padding,
    bodyVariant,
    edgeToEdge = false,
    children,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({ variant, padding, bodyVariant }),
          edgeToEdge && 'sm:rounded-lg overflow-hidden',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export { cardVariants }
export type { CardProps }