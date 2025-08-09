import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'

const cardHeaderVariants = cva(
  'flex items-center justify-between',
  {
    variants: {},
    defaultVariants: {}
  }
)

const cardHeaderTitleVariants = cva(
  'text-base font-semibold text-gray-900',
  {
    variants: {},
    defaultVariants: {}
  }
)

const cardHeaderDescriptionVariants = cva(
  'text-sm text-gray-500',
  {
    variants: {},
    defaultVariants: {}
  }
)

interface CardHeaderProps extends BaseComponentProps,
  VariantProps<typeof cardHeaderVariants> {
  title?: string
  description?: string
  action?: React.ReactNode
  avatar?: React.ReactNode
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ 
    className,
    title,
    description,
    action,
    avatar,
    children,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardHeaderVariants(), className)}
        {...props}
      >
        <div className="flex items-center space-x-3">
          {avatar && (
            <div className="flex-shrink-0">
              {avatar}
            </div>
          )}
          <div className="min-w-0 flex-1">
            {title && (
              <h3 className={cardHeaderTitleVariants()}>
                {title}
              </h3>
            )}
            {description && (
              <p className={cardHeaderDescriptionVariants()}>
                {description}
              </p>
            )}
            {children}
          </div>
        </div>
        {action && (
          <div className="flex-shrink-0">
            {action}
          </div>
        )}
      </div>
    )
  }
)

CardHeader.displayName = 'CardHeader'

export { cardHeaderVariants, cardHeaderTitleVariants, cardHeaderDescriptionVariants }
export type { CardHeaderProps }