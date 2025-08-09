import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { RadioGroup as HeadlessRadioGroup } from '@headlessui/react'
import { cn } from '../../utils/cn'

const radioGroupContainerVariants = cva(
  'mt-4',
  {
    variants: {
      layout: {
        vertical: 'space-y-4',
        horizontal: 'flex flex-wrap gap-4',
        cards: 'grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4'
      }
    },
    defaultVariants: {
      layout: 'vertical'
    }
  }
)

const radioOptionVariants = cva(
  'group relative flex cursor-pointer rounded-lg focus:outline-none',
  {
    variants: {
      layout: {
        vertical: 'items-center justify-between p-4',
        horizontal: 'items-center',
        cards: 'border bg-white p-4 shadow-sm'
      },
      isActive: {
        true: '',
        false: ''
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
        false: ''
      }
    },
    compoundVariants: [
      {
        layout: 'cards',
        isActive: true,
        class: 'border-indigo-600 ring-2 ring-indigo-600'
      },
      {
        layout: 'cards',
        isActive: false,
        class: 'border-gray-300 hover:border-gray-400'
      }
    ],
    defaultVariants: {
      layout: 'vertical',
      isActive: false,
      disabled: false
    }
  }
)

export interface RadioOption {
  value: string | number
  label: string
  description?: string
  disabled?: boolean
}

interface RadioGroupProps {
  options: RadioOption[]
  value?: string | number
  onChange?: (value: string | number) => void
  label?: string
  description?: string
  error?: string
  layout?: 'vertical' | 'horizontal' | 'cards'
  className?: string
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ 
    options,
    value,
    onChange,
    label,
    description,
    error,
    layout = 'vertical',
    className,
    ...props
  }, ref) => {
    const hasError = !!error
    const isCards = layout === 'cards'
    
    return (
      <HeadlessRadioGroup value={value} onChange={onChange} className={className}>
        {label && (
          <HeadlessRadioGroup.Label className="text-base/6 font-semibold text-gray-900">
            {label}
          </HeadlessRadioGroup.Label>
        )}
        {description && (
          <HeadlessRadioGroup.Description className="mt-1 text-sm/6 text-gray-600">
            {description}
          </HeadlessRadioGroup.Description>
        )}
        
        <div className={cn(
          'mt-4',
          layout === 'horizontal' && 'flex flex-wrap gap-4',
          layout === 'vertical' && 'space-y-4',
          isCards && 'grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4'
        )}>
          {options.map((option) => (
            <HeadlessRadioGroup.Option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              className={({ active, checked }) =>
                cn(
                  'cursor-pointer focus:outline-none',
                  isCards && [
                    'relative flex rounded-lg border p-4 shadow-sm focus:outline-none',
                    checked ? 'border-indigo-600 ring-2 ring-indigo-600' : 'border-gray-300',
                    active && 'border-indigo-600 ring-2 ring-indigo-600',
                    option.disabled && 'cursor-not-allowed opacity-50'
                  ]
                )
              }
            >
              {({ active, checked }) => (
                <>
                  {isCards ? (
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <HeadlessRadioGroup.Label
                            as="p"
                            className={cn(
                              'font-medium',
                              checked ? 'text-indigo-900' : 'text-gray-900'
                            )}
                          >
                            {option.label}
                          </HeadlessRadioGroup.Label>
                          {option.description && (
                            <HeadlessRadioGroup.Description
                              as="div"
                              className={cn(
                                'text-sm',
                                checked ? 'text-indigo-700' : 'text-gray-500'
                              )}
                            >
                              {option.description}
                            </HeadlessRadioGroup.Description>
                          )}
                        </div>
                      </div>
                      <div
                        className={cn(
                          'h-4 w-4 rounded-full border flex items-center justify-center',
                          checked ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300 bg-white'
                        )}
                      >
                        {checked && (
                          <div className="h-1.5 w-1.5 rounded-full bg-white" />
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          type="radio"
                          className={cn(
                            'h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600',
                            hasError && 'border-red-300 text-red-600 focus:ring-red-600'
                          )}
                          checked={checked}
                          onChange={() => {}}
                          aria-describedby={option.description ? `${option.value}-description` : undefined}
                        />
                      </div>
                      <div className="ml-3">
                        <HeadlessRadioGroup.Label
                          as="label"
                          className={cn(
                            'block text-sm font-medium',
                            hasError ? 'text-red-900' : 'text-gray-900'
                          )}
                        >
                          {option.label}
                        </HeadlessRadioGroup.Label>
                        {option.description && (
                          <HeadlessRadioGroup.Description
                            as="p"
                            id={`${option.value}-description`}
                            className={cn(
                              'text-sm',
                              hasError ? 'text-red-600' : 'text-gray-500'
                            )}
                          >
                            {option.description}
                          </HeadlessRadioGroup.Description>
                        )}
                      </div>
                    </div>
                  )}
                </>
              )}
            </HeadlessRadioGroup.Option>
          ))}
        </div>
        
        {error && (
          <p className="mt-2 text-sm text-red-600">
            {error}
          </p>
        )}
      </HeadlessRadioGroup>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'