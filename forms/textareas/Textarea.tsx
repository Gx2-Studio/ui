import { forwardRef, TextareaHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const textareaVariants = cva(
  'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6',
  {
    variants: {
      hasError: {
        true: 'text-red-900 placeholder:text-red-300 outline-red-300 focus:outline-red-500',
        false: 'outline-gray-300 focus:outline-indigo-600'
      }
    },
    defaultVariants: {
      hasError: false
    }
  }
)

const textareaHelpTextVariants = cva(
  'mt-2 text-sm',
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

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>,
  VariantProps<typeof textareaVariants> {
  label?: string
  helpText?: string
  error?: string
  corner?: React.ReactNode
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className,
    label,
    helpText,
    error,
    corner,
    id,
    ...props
  }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-')
    const hasError = !!error
    
    return (
      <div>
        {(label || corner) && (
          <div className="flex items-center justify-between">
            {label && (
              <label htmlFor={textareaId} className="block text-sm/6 font-medium text-gray-900">
                {label}
              </label>
            )}
            {corner && (
              <span className="text-sm/6 text-gray-500">
                {corner}
              </span>
            )}
          </div>
        )}
        
        <div className={cn(label && 'mt-2')}>
          <textarea
            ref={ref}
            id={textareaId}
            className={cn(textareaVariants({ hasError }), className)}
            aria-invalid={hasError}
            aria-describedby={hasError ? `${textareaId}-error` : helpText ? `${textareaId}-help` : undefined}
            {...props}
          />
        </div>
        
        {(helpText || error) && (
          <p 
            className={textareaHelpTextVariants({ hasError })}
            id={hasError ? `${textareaId}-error` : `${textareaId}-help`}
          >
            {error || helpText}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export { textareaVariants, textareaHelpTextVariants }
export type { TextareaProps }