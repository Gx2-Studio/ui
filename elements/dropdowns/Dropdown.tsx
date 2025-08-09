import { Fragment, forwardRef } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps, DropdownItem as SharedDropdownItem } from '../../utils/types'

// Use the shared DropdownItem but allow React.ReactNode for icon
export interface DropdownItem extends Omit<SharedDropdownItem, 'icon'> {
  icon?: React.ReactNode
}

const dropdownVariants = cva(
  'relative inline-block text-left',
  {
    variants: {}
  }
)

const dropdownButtonVariants = cva(
  'inline-flex w-full justify-center items-center gap-x-1.5 rounded-md',
  {
    variants: {
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: ''
      }
    },
    defaultVariants: {
      disabled: false
    }
  }
)

const dropdownItemsVariants = cva(
  'absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
  {
    variants: {
      align: {
        left: 'left-0',
        right: 'right-0'
      }
    },
    defaultVariants: {
      align: 'left'
    }
  }
)

const dropdownItemVariants = cva(
  'group flex items-center px-4 py-2 text-sm',
  {
    variants: {
      active: {
        true: 'bg-gray-100 text-gray-900',
        false: 'text-gray-700'
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: ''
      },
      fullWidth: {
        true: 'w-full text-left',
        false: ''
      }
    },
    defaultVariants: {
      active: false,
      disabled: false,
      fullWidth: false
    }
  }
)

interface DropdownProps extends BaseComponentProps,
  VariantProps<typeof dropdownVariants> {
  trigger: React.ReactNode
  items: DropdownItem[]
  align?: 'left' | 'right'
  disabled?: boolean
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ 
    className,
    trigger,
    items,
    align = 'left',
    disabled = false,
    ...props
  }, ref) => {
    return (
      <Menu as="div" className={cn(dropdownVariants(), className)} {...props}>
        <div>
          <Menu.Button
            disabled={disabled}
            className={dropdownButtonVariants({ disabled })}
          >
            {trigger}
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className={dropdownItemsVariants({ align })}>
            <div className="py-1">
              {items.map((item, index) => (
                <Fragment key={index}>
                  {item.divider ? (
                    <div className="border-t border-gray-100 my-1" />
                  ) : (
                    <Menu.Item disabled={item.disabled}>
                      {({ active }) => (
                        item.href ? (
                          <a
                            href={item.href}
                            className={dropdownItemVariants({ active, disabled: item.disabled })}
                          >
                            {item.icon && (
                              <span className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500">
                                {item.icon}
                              </span>
                            )}
                            {item.label}
                          </a>
                        ) : (
                          <button
                            onClick={item.onClick}
                            className={dropdownItemVariants({ active, disabled: item.disabled, fullWidth: true })}
                            disabled={item.disabled}
                          >
                            {item.icon && (
                              <span className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500">
                                {item.icon}
                              </span>
                            )}
                            {item.label}
                          </button>
                        )
                      )}
                    </Menu.Item>
                  )}
                </Fragment>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    )
  }
)

Dropdown.displayName = 'Dropdown'

export { dropdownVariants, dropdownButtonVariants, dropdownItemsVariants, dropdownItemVariants }
export type { DropdownProps }