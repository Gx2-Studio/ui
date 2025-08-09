'use client'

import { forwardRef, Fragment, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'

export interface CommandPaletteOption {
  id: string | number
  name: string
  description?: string
  icon?: React.ReactNode
  badge?: string
  url?: string
  group?: string
  disabled?: boolean
  onSelect?: () => void
}

export interface CommandPaletteGroup {
  id: string
  name: string
  options: CommandPaletteOption[]
}

const commandPaletteContainerVariants = cva(
  'mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl shadow-2xl ring-1 ring-black/5 transition-all data-closed:scale-95 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in',
  {
    variants: {
      variant: {
        default: 'bg-white',
        dark: 'bg-gray-900 divide-gray-800 ring-gray-700',
        'semi-transparent': 'bg-white/95 backdrop-blur-sm'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const commandPaletteInputVariants = cva(
  'size-full border-0 py-4 pl-11 pr-4 text-sm leading-5 focus:ring-0',
  {
    variants: {
      variant: {
        default: 'bg-transparent text-gray-900 placeholder:text-gray-400',
        dark: 'bg-transparent text-white placeholder:text-gray-400',
        'semi-transparent': 'bg-transparent text-gray-900 placeholder:text-gray-400'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const commandPaletteOptionVariants = cva(
  'cursor-default select-none rounded-md px-4 py-2 flex items-center gap-3',
  {
    variants: {
      variant: {
        default: 'text-gray-900 data-focus:bg-gray-100',
        dark: 'text-gray-300 data-focus:bg-gray-800 data-focus:text-white',
        'semi-transparent': 'text-gray-900 data-focus:bg-gray-100'
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: ''
      }
    },
    defaultVariants: {
      variant: 'default',
      disabled: false
    }
  }
)

const commandPaletteGroupHeaderVariants = cva(
  'text-xs font-semibold',
  {
    variants: {
      variant: {
        default: 'text-gray-500 bg-gray-50',
        dark: 'text-gray-400 bg-gray-800',
        'semi-transparent': 'text-gray-500 bg-gray-50/50'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const commandPaletteDescriptionVariants = cva(
  'text-xs',
  {
    variants: {
      variant: {
        default: 'text-gray-500',
        dark: 'text-gray-400',
        'semi-transparent': 'text-gray-500'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const commandPaletteBadgeVariants = cva(
  'flex-none text-xs font-medium px-2 py-1 rounded',
  {
    variants: {
      variant: {
        default: 'bg-gray-100 text-gray-600',
        dark: 'bg-gray-700 text-gray-300',
        'semi-transparent': 'bg-gray-100 text-gray-600'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const commandPaletteEmptyStateVariants = cva(
  'px-6 py-14 text-center text-sm sm:px-14',
  {
    variants: {
      variant: {
        default: 'text-gray-900',
        dark: 'text-white',
        'semi-transparent': 'text-gray-900'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const commandPaletteEmptyIconVariants = cva(
  'mx-auto size-6 opacity-40',
  {
    variants: {
      variant: {
        default: 'text-gray-400',
        dark: 'text-gray-500',
        'semi-transparent': 'text-gray-400'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const commandPaletteFooterVariants = cva(
  'border-t px-6 py-3 text-xs',
  {
    variants: {
      variant: {
        default: 'border-gray-100 text-gray-500',
        dark: 'border-gray-800 text-gray-400',
        'semi-transparent': 'border-gray-100 text-gray-500'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

interface CommandPaletteProps extends Omit<BaseComponentProps, 'children'>,
  VariantProps<typeof commandPaletteContainerVariants> {
  open: boolean
  onClose: () => void
  options?: CommandPaletteOption[]
  groups?: CommandPaletteGroup[]
  placeholder?: string
  emptyMessage?: string
  showGroups?: boolean
  showIcons?: boolean
  footer?: React.ReactNode
  onOptionSelect?: (option: CommandPaletteOption) => void
}

export const CommandPalette = forwardRef<HTMLDivElement, CommandPaletteProps>(
  ({ 
    className,
    open,
    onClose,
    options = [],
    groups = [],
    placeholder = 'Search...',
    emptyMessage = 'No results found.',
    variant = 'default',
    showGroups = false,
    showIcons = true,
    footer,
    onOptionSelect,
    ...props
  }, ref) => {
    const [query, setQuery] = useState('')

    // Combine options and groups
    const allOptions = showGroups && groups.length > 0 
      ? groups.flatMap(group => group.options.map(option => ({ ...option, group: group.name })))
      : options

    const filteredOptions = query === ''
      ? allOptions
      : allOptions.filter((option) => {
          const searchValue = `${option.name} ${option.description || ''}`.toLowerCase()
          return searchValue.includes(query.toLowerCase())
        })

    // Group filtered options by their group
    const groupedOptions = showGroups && groups.length > 0
      ? groups.map(group => ({
          ...group,
          options: filteredOptions.filter(option => option.group === group.name)
        })).filter(group => group.options.length > 0)
      : [{ id: 'default', name: '', options: filteredOptions }]

    const handleOptionSelect = (option: CommandPaletteOption) => {
      option.onSelect?.()
      onOptionSelect?.(option)
      if (option.url) {
        window.location.href = option.url
      }
      onClose()
    }

    return (
      <Dialog open={open} onClose={onClose} className="relative z-50" {...props}>
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/25 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />
        
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
          <DialogPanel
            ref={ref}
            transition
            className={cn(commandPaletteContainerVariants({ variant }), className)}
          >
            <Combobox onChange={handleOptionSelect}>
              <div className="relative">
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute left-4 top-3.5 size-5 text-gray-400"
                  aria-hidden="true"
                />
                <ComboboxInput
                  className={commandPaletteInputVariants({ variant })}
                  placeholder={placeholder}
                  onChange={(event) => setQuery(event.target.value)}
                  onBlur={() => setQuery('')}
                  displayValue={() => query}
                />
              </div>

              {(filteredOptions.length > 0 || query === '') && (
                <ComboboxOptions
                  static
                  className="max-h-80 scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2"
                >
                  {groupedOptions.map((group) => (
                    <div key={group.id}>
                      {showGroups && group.name && (
                        <h2 className={commandPaletteGroupHeaderVariants({ variant })}>
                          {group.name}
                        </h2>
                      )}
                      <ul className={cn(
                        'text-sm',
                        showGroups && group.name ? 'mt-2' : ''
                      )}>
                        {group.options.map((option) => (
                          <ComboboxOption
                            key={option.id}
                            value={option}
                            disabled={option.disabled}
                            className={commandPaletteOptionVariants({ variant, disabled: option.disabled })}
                          >
                            {showIcons && option.icon && (
                              <div className="flex-none">
                                {option.icon}
                              </div>
                            )}
                            <div className="flex-auto">
                              <div className="font-medium">{option.name}</div>
                              {option.description && (
                                <div className={commandPaletteDescriptionVariants({ variant })}>
                                  {option.description}
                                </div>
                              )}
                            </div>
                            {option.badge && (
                              <div className={commandPaletteBadgeVariants({ variant })}>
                                {option.badge}
                              </div>
                            )}
                          </ComboboxOption>
                        ))}
                      </ul>
                    </div>
                  ))}
                </ComboboxOptions>
              )}

              {query !== '' && filteredOptions.length === 0 && (
                <div className={commandPaletteEmptyStateVariants({ variant })}>
                  <MagnifyingGlassIcon
                    className={commandPaletteEmptyIconVariants({ variant })}
                    aria-hidden="true"
                  />
                  <p className="mt-4 font-semibold">{emptyMessage}</p>
                </div>
              )}

              {footer && (
                <div className={commandPaletteFooterVariants({ variant })}>
                  {footer}
                </div>
              )}
            </Combobox>
          </DialogPanel>
        </div>
      </Dialog>
    )
  }
)

CommandPalette.displayName = 'CommandPalette'

export { 
  commandPaletteContainerVariants,
  commandPaletteInputVariants,
  commandPaletteOptionVariants,
  commandPaletteGroupHeaderVariants,
  commandPaletteDescriptionVariants,
  commandPaletteBadgeVariants,
  commandPaletteEmptyStateVariants,
  commandPaletteEmptyIconVariants,
  commandPaletteFooterVariants
}
export type { CommandPaletteProps }