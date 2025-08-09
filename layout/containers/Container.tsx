import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'

const containerVariants = cva(
  'w-full',
  {
    variants: {
      size: {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-4xl',
        xl: 'max-w-6xl',
        '2xl': 'max-w-7xl',
        full: 'max-w-full'
      },
      padding: {
        none: '',
        sm: 'px-4 sm:px-6',
        md: 'px-4 sm:px-6 lg:px-8',
        lg: 'px-6 sm:px-8 lg:px-12'
      },
      center: {
        true: 'mx-auto',
        false: ''
      }
    },
    defaultVariants: {
      size: 'lg',
      padding: 'md',
      center: true
    }
  }
)

interface ContainerProps extends BaseComponentProps,
  VariantProps<typeof containerVariants> {
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ 
    className,
    size,
    padding,
    center,
    children,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(containerVariants({ size, padding, center }), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = 'Container'

export { containerVariants }
export type { ContainerProps }