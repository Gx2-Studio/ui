import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'

type DividerVariant = 'simple' | 'with-title' | 'with-label' | 'with-button' | 'with-icon' | 'with-toolbar'
type DividerPosition = 'left' | 'center' | 'right'
type DividerOrientation = 'horizontal' | 'vertical'

const dividerVariants = cva(
  'border-gray-200',
  {
    variants: {
      orientation: {
        horizontal: 'border-t',
        vertical: 'border-l'
      },
      variant: {
        simple: '',
        'with-title': 'relative flex items-center',
        'with-label': 'relative flex items-center',
        'with-button': 'relative flex items-center',
        'with-icon': 'relative flex items-center',
        'with-toolbar': 'relative flex items-center justify-between py-3'
      },
      position: {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end'
      }
    },
    compoundVariants: [
      {
        variant: 'with-toolbar',
        class: 'border-t'
      }
    ],
    defaultVariants: {
      orientation: 'horizontal',
      variant: 'simple',
      position: 'center'
    }
  }
)

const dividerContentVariants = cva(
  'bg-white text-sm/6',
  {
    variants: {
      position: {
        left: 'pr-6 text-gray-900 font-medium',
        center: 'px-6 text-gray-500',
        right: 'pl-6 text-gray-500'
      },
      hasTitle: {
        true: 'text-gray-900 font-medium',
        false: 'text-gray-500'
      }
    },
    defaultVariants: {
      position: 'center',
      hasTitle: false
    }
  }
)

interface DividerProps extends BaseComponentProps,
  VariantProps<typeof dividerVariants> {
  /** The text content to display (for title or label variants) */
  title?: string
  label?: string
  /** Position of the content on the divider */
  position?: DividerPosition
  /** Orientation of the divider */
  orientation?: DividerOrientation
  /** Icon element to display */
  icon?: React.ReactNode
  /** Button element to display */
  button?: React.ReactNode
  /** Toolbar content for complex dividers */
  toolbar?: React.ReactNode
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ 
    className,
    title,
    label,
    position = 'center',
    orientation = 'horizontal',
    icon,
    button,
    toolbar,
    variant = 'simple',
    ...props
  }, ref) => {
    const isVertical = orientation === 'vertical'
    
    // Handle vertical dividers
    if (isVertical) {
      return (
        <div
          ref={ref}
          className={cn(dividerVariants({ orientation: 'vertical' }), className)}
          {...props}
        />
      )
    }
    
    // Handle simple divider (no content)
    if (variant === 'simple' && !title && !label && !icon && !button && !toolbar) {
      return (
        <div
          ref={ref}
          className={cn(dividerVariants({ variant: 'simple' }), className)}
          {...props}
        />
      )
    }
    
    // Handle toolbar variant
    if (variant === 'with-toolbar' && toolbar) {
      return (
        <div
          ref={ref}
          className={cn(dividerVariants({ variant: 'with-toolbar' }), className)}
          {...props}
        >
          <div className="flex items-center space-x-4">
            {toolbar}
          </div>
        </div>
      )
    }

    
    // Determine content to display
    const content = title || label
    const hasContent = content || icon || button
    
    if (!hasContent) {
      return (
        <div
          ref={ref}
          className={cn(dividerVariants({ variant: 'simple' }), className)}
          {...props}
        />
      )
    }
    
    // Handle left-aligned content
    if (position === 'left') {
      return (
        <div
          ref={ref}
          className={cn(dividerVariants({ variant, position: 'left' }), className)}
          {...props}
        >
          <div className="relative flex items-center text-sm/6">
            <span className={dividerContentVariants({ position: 'left', hasTitle: !!title })}>
              {icon && <span className="mr-2 flex items-center">{icon}</span>}
              {content}
            </span>
          </div>
          <div className="flex-grow border-t border-gray-200" />
          {button && (
            <div className="relative flex justify-center text-sm/6">
              <span className="bg-white pl-6">
                {button}
              </span>
            </div>
          )}
        </div>
      )
    }
    
    // Handle centered content (default)
    return (
      <div
        ref={ref}
        className={cn(dividerVariants({ variant, position }), className)}
        {...props}
      >
        <div className="flex-grow border-t border-gray-200" />
        <div className="relative flex justify-center text-sm/6">
          <span className={dividerContentVariants({ position, hasTitle: !!title })}>
            {icon && <span className="mr-2 flex items-center">{icon}</span>}
            {content && (
              <span className={cn(title ? 'text-gray-900 font-medium' : 'text-gray-500')}>
                {content}
              </span>
            )}
            {button && <span className="ml-2">{button}</span>}
          </span>
        </div>
        <div className="flex-grow border-t border-gray-200" />
      </div>
    )
  }
)

Divider.displayName = 'Divider'

export { dividerVariants, dividerContentVariants }
export type { DividerProps }