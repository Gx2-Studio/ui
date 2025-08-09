import { Fragment, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { cn } from '../../utils/cn'
import { SelectableOption } from '../../utils/types'

// SelectOption extends SelectableOption and adds avatar
export interface SelectOption extends SelectableOption {
  avatar?: string
}

const selectButtonVariants = cva(
  'relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 sm:text-sm/6',
  {
    variants: {
      hasError: {
        true: 'ring-red-300 focus:ring-red-500',
        false: 'ring-gray-300 focus:ring-indigo-600'
      },
      disabled: {
        true: 'bg-gray-50 text-gray-500 cursor-not-allowed',
        false: ''
      }
    },
    defaultVariants: {
      hasError: false,
      disabled: false
    }
  }
)

const nativeSelectVariants = cva(
  'block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset focus:ring-2 sm:text-sm/6',
  {
    variants: {
      hasError: {
        true: 'ring-red-300 focus:ring-red-500',
        false: 'ring-gray-300 focus:ring-indigo-600'
      },
      disabled: {
        true: 'bg-gray-50 text-gray-500 cursor-not-allowed',
        false: ''
      }
    },
    defaultVariants: {
      hasError: false,
      disabled: false
    }
  }
)

const selectOptionVariants = cva(
  'relative cursor-default select-none py-2 pl-3 pr-9',
  {
    variants: {
      active: {
        true: 'bg-indigo-600 text-white',
        false: 'text-gray-900'
      },
      disabled: {
        true: 'text-gray-400 cursor-not-allowed',
        false: ''
      }
    },
    defaultVariants: {
      active: false,
      disabled: false
    }
  }
)

interface SelectProps extends VariantProps<typeof selectButtonVariants> {
  options: SelectOption[]
  value?: string | number
  onChange?: (value: string | number) => void
  placeholder?: string
  label?: string
  error?: string
  helpText?: string
  className?: string
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({ 
    options,
    value,
    onChange,
    placeholder = 'Select an option',
    label,
    error,
    helpText,
    disabled = false,
    className,
    ...props
  }, ref) => {
    const selectedOption = options.find(option => option.value === value)
    const hasError = !!error
    
    return (
      <div className={className}>
        {label && (
          <label className="block text-sm/6 font-medium text-gray-900 mb-2">
            {label}
          </label>
        )}
        
        <Listbox value={value} onChange={onChange} disabled={disabled || undefined}>
          <div className="relative">
            <Listbox.Button className={selectButtonVariants({ hasError, disabled })}>
              <span className="block truncate">
                {selectedOption ? selectedOption.label : placeholder}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.value}
                    className={({ active }) =>
                      selectOptionVariants({ 
                        active, 
                        disabled: option.disabled 
                      })
                    }
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          {option.avatar && (
                            <img src={option.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full mr-3" />
                          )}
                          <div className="flex flex-col">
                            <span className={cn(
                              'block truncate',
                              selected ? 'font-medium' : 'font-normal'
                            )}>
                              {option.label}
                            </span>
                            {option.description && (
                              <span className={cn(
                                'text-sm',
                                active ? 'text-indigo-200' : 'text-gray-500'
                              )}>
                                {option.description}
                              </span>
                            )}
                          </div>
                        </div>

                        {selected ? (
                          <span className={cn(
                            'absolute inset-y-0 right-0 flex items-center pr-4',
                            active ? 'text-white' : 'text-indigo-600'
                          )}>
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
        
        {(helpText || error) && (
          <p className={cn(
            'mt-2 text-sm',
            hasError ? 'text-red-600' : 'text-gray-500'
          )}>
            {error || helpText}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

// Native HTML Select Component
interface NativeSelectProps {
  options: SelectOption[]
  value?: string | number
  onChange?: (value: string | number) => void
  placeholder?: string
  label?: string
  error?: string
  helpText?: string
  disabled?: boolean
  className?: string
}

export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ 
    options,
    value,
    onChange,
    placeholder = 'Select an option',
    label,
    error,
    helpText,
    disabled = false,
    className,
    ...props
  }, ref) => {
    const hasError = !!error
    
    return (
      <div className={className}>
        {label && (
          <label className="block text-sm/6 font-medium text-gray-900 mb-2">
            {label}
          </label>
        )}
        
        <select
          ref={ref}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          className={nativeSelectVariants({ hasError, disabled })}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        
        {(helpText || error) && (
          <p className={cn(
            'mt-2 text-sm',
            hasError ? 'text-red-600' : 'text-gray-500'
          )}>
            {error || helpText}
          </p>
        )}
      </div>
    )
  }
)

NativeSelect.displayName = 'NativeSelect'

export { selectButtonVariants, nativeSelectVariants, selectOptionVariants }
export type { SelectProps }