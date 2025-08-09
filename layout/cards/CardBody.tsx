import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'

const cardBodyVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: 'bg-white',
        gray: 'bg-gray-50'
      },
      padding: {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8'
      }
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md'
    }
  }
)

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof cardBodyVariants>, BaseComponentProps {}

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ 
    className,
    variant,
    padding,
    children,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardBodyVariants({ variant, padding }), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardBody.displayName = 'CardBody'

export { cardBodyVariants }
export type { CardBodyProps }