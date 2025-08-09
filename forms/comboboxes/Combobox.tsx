'use client'

import { forwardRef, useState } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Label } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'

// ComboboxOption is similar to SelectableOption but with different field names
export interface ComboboxOption {
  id: string | number
  name: string  // Combobox uses 'name' instead of 'label'
  value?: any
  disabled?: boolean
  description?: string
  image?: string
  status?: {
    color: string
    label: string
  }
}

const comboboxInputVariants = cva(
  'block w-full rounded-md bg-white pr-12 pl-3 text-gray-900 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2',
  {
    variants: {
      size: {
        sm: 'py-1 text-sm',
        md: 'py-1.5 text-base sm:text-sm',
        lg: 'py-2 text-base'
      },
      hasError: {
        true: 'outline-red-300 focus:outline-red-500',
        false: 'outline-gray-300 focus:outline-indigo-600'
      },
      disabled: {
        true: 'bg-gray-50 text-gray-500 cursor-not-allowed',
        false: ''
      }
    },
    defaultVariants: {
      size: 'md',
      hasError: false,
      disabled: false
    }
  }
)

const comboboxOptionVariants = cva(
  'cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden',
  {
    variants: {
      disabled: {
        true: 'data-disabled:opacity-50',
        false: ''
      }
    },
    defaultVariants: {
      disabled: false
    }
  }
)

const comboboxHelpTextVariants = cva(
  'mt-1 text-sm',
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

interface ComboboxProps extends Omit<BaseComponentProps, 'children'>,
  VariantProps<typeof comboboxInputVariants> {
  label?: string
  placeholder?: string
  options: ComboboxOption[]
  value?: ComboboxOption | null
  onChange?: (option: ComboboxOption | null) => void
  allowCustom?: boolean
  displayField?: keyof ComboboxOption
  searchField?: keyof ComboboxOption
  error?: string
  helpText?: string
}

export const ComboboxComponent = forwardRef<HTMLDivElement, ComboboxProps>(
  ({ 
    className,
    label,
    placeholder = 'Search...',
    options,
    value,
    onChange,
    allowCustom = false,
    displayField = 'name',
    searchField = 'name',
    size = 'md',
    disabled = false,
    error,
    helpText,
    ...props
  }, ref) => {
    const [query, setQuery] = useState('')

    const filteredOptions = query === ''
      ? options
      : options.filter((option) => {
          const searchValue = option[searchField]?.toString().toLowerCase() || ''
          return searchValue.includes(query.toLowerCase())
        })


    const handleChange = (option: ComboboxOption | null) => {
      setQuery('')
      onChange?.(option)
    }

    const renderOption = (option: ComboboxOption) => (
      <ComboboxOption
        key={option.id}
        value={option}
        disabled={option.disabled}
        className={comboboxOptionVariants({ disabled: option.disabled })}
      >
        <div className="flex items-center">
          {option.image && (
            <img 
              src={option.image} 
              alt="" 
              className="size-6 shrink-0 rounded-full mr-3"
            />
          )}
          <div className="flex-1 min-w-0">
            <span className="block truncate font-medium">
              {option[displayField]?.toString()}
            </span>
            {option.description && (
              <span className="block truncate text-sm text-gray-500 data-focus:text-indigo-200">
                {option.description}
              </span>
            )}
          </div>
          {option.status && (
            <span className={cn(
              'ml-2 inline-flex items-center rounded-full px-2 py-1 text-xs font-medium',
              option.status.color
            )}>
              {option.status.label}
            </span>
          )}
        </div>
      </ComboboxOption>
    )

    return (
      <Combobox
        as="div"
        value={value}
        onChange={handleChange}
        disabled={disabled || undefined}
        ref={ref}
        className={className}
        {...props}
      >
        {label && (
          <Label className="block text-sm font-medium text-gray-900 mb-2">
            {label}
          </Label>
        )}
        <div className="relative">
          <ComboboxInput
            className={comboboxInputVariants({ size, hasError: !!error, disabled })}
            onChange={(event) => setQuery(event.target.value)}
            onBlur={() => setQuery('')}
            displayValue={(option: ComboboxOption) => option?.[displayField]?.toString() || ''}
            placeholder={placeholder}
            disabled={disabled || undefined}
          />
          <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-hidden">
            <ChevronDownIcon className="size-5 text-gray-400" aria-hidden="true" />
          </ComboboxButton>

          <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm">
            {allowCustom && query.length > 0 && !filteredOptions.find(o => o[searchField]?.toString().toLowerCase() === query.toLowerCase()) && (
              <ComboboxOption
                value={{ id: 'custom', [displayField]: query }}
                className={comboboxOptionVariants()}
              >
                Create &ldquo;{query}&rdquo;
              </ComboboxOption>
            )}
            {filteredOptions.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                No results found.
              </div>
            ) : (
              filteredOptions.map(renderOption)
            )}
          </ComboboxOptions>
        </div>
        {(error || helpText) && (
          <p className={comboboxHelpTextVariants({ hasError: !!error })}>
            {error || helpText}
          </p>
        )}
      </Combobox>
    )
  }
)

ComboboxComponent.displayName = 'Combobox'

export { comboboxInputVariants, comboboxOptionVariants, comboboxHelpTextVariants }
export type { ComboboxProps }