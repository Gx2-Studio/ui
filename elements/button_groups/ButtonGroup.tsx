import { forwardRef, Children, cloneElement, isValidElement } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'

const buttonGroupVariants = cva(
  'isolate inline-flex',
  {
    variants: {
      orientation: {
        horizontal: 'flex-row',
        vertical: 'flex-col'
      },
      variant: {
        default: '',
        segmented: 'rounded-md shadow-sm'
      }
    },
    defaultVariants: {
      orientation: 'horizontal',
      variant: 'default'
    }
  }
)

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof buttonGroupVariants>, BaseComponentProps {}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ 
    className,
    children,
    orientation,
    variant,
    ...props
  }, ref) => {
    const isVertical = orientation === 'vertical'
    const isSegmented = variant === 'segmented'
    
    return (
      <div
        ref={ref}
        className={cn(buttonGroupVariants({ orientation, variant }), className)}
        role="group"
        {...props}
      >
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) return child
          
          const isFirst = index === 0
          const isLast = index === Children.count(children) - 1
          
          return cloneElement(child as any, {
            className: cn(
              (child.props as any)?.className,
              isSegmented && [
                'relative focus:z-10',
                !isFirst && !isVertical && '-ml-px',
                !isFirst && isVertical && '-mt-px',
                isFirst && (isVertical ? 'rounded-t-md rounded-b-none' : 'rounded-r-none'),
                isLast && (isVertical ? 'rounded-b-md rounded-t-none' : 'rounded-l-none'),
                !isFirst && !isLast && 'rounded-none'
              ]
            )
          })
        })}
      </div>
    )
  }
)

ButtonGroup.displayName = 'ButtonGroup'

export { buttonGroupVariants }
export type { ButtonGroupProps }