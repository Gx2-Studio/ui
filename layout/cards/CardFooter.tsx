import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'

const cardFooterVariants = cva(
  'flex items-center px-6 py-4 border-t border-gray-200',
  {
    variants: {
      variant: {
        default: 'bg-white',
        gray: 'bg-gray-50'
      },
      justify: {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between'
      }
    },
    defaultVariants: {
      variant: 'default',
      justify: 'end'
    }
  }
)

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof cardFooterVariants>, BaseComponentProps {
  actions?: React.ReactNode
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ 
    className,
    variant,
    actions,
    justify,
    children,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardFooterVariants({ variant, justify }), className)}
        {...props}
      >
        {actions || children}
      </div>
    )
  }
)

CardFooter.displayName = 'CardFooter'

export { cardFooterVariants }
export type { CardFooterProps }