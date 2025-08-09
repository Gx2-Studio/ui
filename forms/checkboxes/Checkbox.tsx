import { forwardRef, InputHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const checkboxVariants = cva(
  'size-4 rounded border-gray-300 text-indigo-600 focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      hasError: {
        true: 'border-red-300 text-red-600 focus:ring-red-600',
        false: 'focus:ring-indigo-600'
      }
    },
    defaultVariants: {
      hasError: false
    }
  }
)

const checkboxLabelVariants = cva(
  'text-sm font-medium',
  {
    variants: {
      hasError: {
        true: 'text-red-900',
        false: 'text-gray-900'
      }
    },
    defaultVariants: {
      hasError: false
    }
  }
)

const checkboxDescriptionVariants = cva(
  'text-sm',
  {
    variants: {
      hasError: {
        true: 'text-red-600',
        false: 'text-gray-500'
      }
    },
    defaultVariants: {
      hasError: false
    }
  }
)

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  description?: string
  error?: string
  position?: 'left' | 'right'  // Position of checkbox relative to label
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, error, id, position = 'left', ...props }, ref) => {
    const checkboxId = id || label?.toLowerCase().replace(/\s+/g, '-')
    const hasError = !!error
    
    const checkboxInput = (
      <div className="flex h-6 items-center">
        <input
          ref={ref}
          id={checkboxId}
          type="checkbox"
          className={cn(checkboxVariants({ hasError }), className)}
          aria-invalid={hasError}
          aria-describedby={error ? `${checkboxId}-error` : description ? `${checkboxId}-description` : undefined}
          {...props}
        />
      </div>
    )
    
    const labelContent = (label || description) && (
      <div className={position === 'right' ? 'mr-3 flex-1 text-sm' : 'ml-3'}>
        {label && (
          <label htmlFor={checkboxId} className={cn(checkboxLabelVariants({ hasError }), 'select-none cursor-pointer')}>
            {label}
          </label>
        )}
        {description && (
          <p id={`${checkboxId}-description`} className={checkboxDescriptionVariants({ hasError })}>
            {description}
          </p>
        )}
        {error && (
          <p id={`${checkboxId}-error`} className="text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    )
    
    return (
      <div className={cn('relative flex', label ? 'items-start' : 'items-center')}>
        {position === 'left' ? (
          <>
            {checkboxInput}
            {labelContent}
          </>
        ) : (
          <>
            {labelContent}
            {checkboxInput}
          </>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export { checkboxVariants, checkboxLabelVariants, checkboxDescriptionVariants }
export type { CheckboxProps }