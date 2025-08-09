import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { InputProps } from '../../utils/types'
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'

const inputContainerVariants = cva(
  'flex rounded-md bg-white',
  {
    variants: {
      hasAddons: {
        true: 'shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600',
        false: ''
      },
      hasError: {
        true: 'ring-red-300 focus-within:ring-red-500',
        false: ''
      }
    },
    defaultVariants: {
      hasAddons: false,
      hasError: false
    }
  }
)

const inputFieldVariants = cva(
  'block w-full border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6',
  {
    variants: {
      hasAddons: {
        true: '',
        false: 'rounded-md px-3 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600'
      },
      hasLeadingAddon: {
        true: '',
        false: ''
      },
      hasTrailingAddon: {
        true: '',
        false: ''
      },
      hasLeadingIcon: {
        true: 'pl-10',
        false: ''
      },
      hasTrailingIcon: {
        true: 'pr-10',
        false: ''
      },
      hasError: {
        true: 'text-red-900 placeholder:text-red-300 outline-red-300 focus:outline-red-500',
        false: ''
      }
    },
    compoundVariants: [
      {
        hasLeadingAddon: true,
        hasTrailingAddon: false,
        class: 'rounded-r-md pr-3'
      },
      {
        hasLeadingAddon: false,
        hasTrailingAddon: true,
        class: 'rounded-l-md pl-3'
      },
      {
        hasLeadingAddon: true,
        hasTrailingAddon: true,
        class: 'px-3'
      },
      {
        hasLeadingIcon: false,
        hasLeadingAddon: false,
        hasTrailingAddon: true,
        class: 'pl-3'
      },
      {
        hasLeadingIcon: false,
        hasLeadingAddon: true,
        hasTrailingAddon: false,
        class: 'pr-3'
      }
    ],
    defaultVariants: {
      hasAddons: false,
      hasLeadingAddon: false,
      hasTrailingAddon: false,
      hasLeadingIcon: false,
      hasTrailingIcon: false,
      hasError: false
    }
  }
)

const inputHelpTextVariants = cva(
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

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className,
    label,
    helpText,
    error,
    leadingAddon,
    trailingAddon,
    leadingIcon,
    trailingIcon,
    corner,
    id,
    ...props
  }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
    const hasError = !!error
    
    return (
      <div>
        {(label || corner) && (
          <div className="flex items-center justify-between">
            {label && (
              <label htmlFor={inputId} className="block text-sm/6 font-medium text-gray-900">
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
          <div className={inputContainerVariants({
            hasAddons: !!(leadingAddon || trailingAddon),
            hasError
          })}>
            {leadingAddon && (
              <span className="inline-flex items-center px-3 text-gray-500 sm:text-sm">
                {leadingAddon}
              </span>
            )}
            
            <div className="relative flex flex-grow items-stretch">
              {leadingIcon && (
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="size-5 text-gray-400">
                    {leadingIcon}
                  </span>
                </div>
              )}
              
              <input
                ref={ref}
                id={inputId}
                className={cn(
                  inputFieldVariants({
                    hasAddons: !!(leadingAddon || trailingAddon),
                    hasLeadingAddon: !!leadingAddon,
                    hasTrailingAddon: !!trailingAddon,
                    hasLeadingIcon: !!leadingIcon && !leadingAddon,
                    hasTrailingIcon: !!(trailingIcon || hasError) && !trailingAddon,
                    hasError
                  }),
                  className
                )}
                aria-invalid={hasError}
                aria-describedby={hasError ? `${inputId}-error` : helpText ? `${inputId}-help` : undefined}
                {...props}
              />
              
              {(trailingIcon || hasError) && (
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  {hasError ? (
                    <ExclamationCircleIcon className="size-5 text-red-500" aria-hidden="true" />
                  ) : trailingIcon && (
                    <span className="size-5 text-gray-400">
                      {trailingIcon}
                    </span>
                  )}
                </div>
              )}
            </div>
            
            {trailingAddon && (
              <span className="inline-flex items-center px-3 text-gray-500 sm:text-sm">
                {trailingAddon}
              </span>
            )}
          </div>
        </div>
        
        {(helpText || error) && (
          <p 
            className={inputHelpTextVariants({ hasError })}
            id={hasError ? `${inputId}-error` : `${inputId}-help`}
          >
            {error || helpText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { inputContainerVariants, inputFieldVariants, inputHelpTextVariants }