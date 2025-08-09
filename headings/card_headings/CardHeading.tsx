import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { cn } from '../../utils/cn'
import { ActionWithVariant, DropdownItem, MetaItem } from '../../utils/types'

// CardHeadingAction uses a subset of ActionWithVariant
export interface CardHeadingAction extends ActionWithVariant {
  variant?: 'primary' | 'secondary'
}

// Use the shared DropdownItem type (without divider/disabled for this component)
export type CardHeadingDropdownItem = Omit<DropdownItem, 'divider' | 'disabled'>

// Use the shared MetaItem type (without icon for this component)
export type CardHeadingMeta = Omit<MetaItem, 'icon'>

const cardHeadingContainerVariants = cva(
  'border-b border-gray-200 bg-white px-4 py-5 sm:px-6',
  {
    variants: {
      variant: {
        simple: '',
        'with-description': '',
        'with-action': 'sm:flex sm:items-center sm:justify-between',
        'with-description-and-action': 'sm:flex sm:items-center sm:justify-between',
        'with-avatar-and-actions': '',
        'with-avatar-meta-and-dropdown': ''
      }
    },
    defaultVariants: {
      variant: 'simple'
    }
  }
)

const cardHeadingActionButtonVariants = cva(
  'inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600',
        secondary: 'bg-white text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus-visible:outline-indigo-600'
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
)

export interface CardHeadingProps extends VariantProps<typeof cardHeadingContainerVariants> {
  title: string
  description?: string
  action?: CardHeadingAction
  actions?: CardHeadingAction[]
  dropdownItems?: CardHeadingDropdownItem[]
  avatar?: {
    src: string
    alt?: string
    name?: string
  }
  meta?: CardHeadingMeta[]
  className?: string
  children?: React.ReactNode
}


export function CardHeading({
  title,
  description,
  action,
  actions,
  dropdownItems,
  avatar,
  meta,
  variant = 'simple',
  className,
  children
}: CardHeadingProps) {

  const renderAction = (actionItem: CardHeadingAction) => {
    const buttonClasses = cardHeadingActionButtonVariants({ variant: actionItem.variant || 'primary' })

    const content = (
      <>
        {actionItem.icon && (
          <actionItem.icon className="mr-1.5 -ml-0.5 size-5" aria-hidden="true" />
        )}
        {actionItem.label}
      </>
    )

    if (actionItem.type === 'link' && actionItem.href) {
      return (
        <a href={actionItem.href} className={buttonClasses}>
          {content}
        </a>
      )
    }

    return (
      <button type="button" onClick={actionItem.onClick} className={buttonClasses}>
        {content}
      </button>
    )
  }

  const renderDropdown = () => {
    if (!dropdownItems) return null

    return (
      <Menu as="div" className="relative ml-2">
        <MenuButton className="inline-flex items-center rounded-full bg-white p-2 text-gray-400 hover:text-gray-600 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span className="sr-only">Open options</span>
          <EllipsisVerticalIcon className="size-5" aria-hidden="true" />
        </MenuButton>
        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
        >
          <div className="py-1">
            {dropdownItems.map((item, index) => (
              <MenuItem key={index}>
                <a
                  href={item.href || '#'}
                  onClick={item.onClick}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900"
                >
                  {item.icon && (
                    <item.icon className="mr-3 size-5 text-gray-400" aria-hidden="true" />
                  )}
                  {item.label}
                </a>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    )
  }

  if (variant === 'with-avatar-and-actions') {
    return (
      <div className={cn(cardHeadingContainerVariants({ variant }), className)}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {avatar && (
              <img
                alt={avatar.alt || ''}
                src={avatar.src}
                className="size-12 rounded-full mr-4"
              />
            )}
            <div>
              <h3 className="text-base font-semibold text-gray-900">{title}</h3>
              {avatar?.name && (
                <p className="text-sm text-gray-500">{avatar.name}</p>
              )}
              {description && (
                <p className="mt-1 text-sm text-gray-500">{description}</p>
              )}
            </div>
          </div>
          <div className="flex">
            {action && renderAction(action)}
            {actions && actions.map((actionItem, index) => (
              <div key={index} className={index > 0 ? 'ml-2' : ''}>
                {renderAction(actionItem)}
              </div>
            ))}
            {renderDropdown()}
          </div>
        </div>
        {children}
      </div>
    )
  }

  if (variant === 'with-avatar-meta-and-dropdown') {
    return (
      <div className={cn(cardHeadingContainerVariants({ variant }), className)}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {avatar && (
              <img
                alt={avatar.alt || ''}
                src={avatar.src}
                className="size-12 rounded-full mr-4"
              />
            )}
            <div>
              <h3 className="text-base font-semibold text-gray-900">{title}</h3>
              {avatar?.name && (
                <p className="text-sm text-gray-500">{avatar.name}</p>
              )}
              {meta && (
                <div className="mt-1 flex flex-col space-y-1">
                  {meta.map((item, index) => (
                    <div key={index} className="text-sm text-gray-500">
                      <span className="font-medium">{item.label}:</span> {item.value}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {renderDropdown()}
        </div>
        {children}
      </div>
    )
  }

  if (variant === 'with-description-and-action') {
    return (
      <div className={cn(cardHeadingContainerVariants({ variant }), className)}>
        <div>
          <h3 className="text-base font-semibold text-gray-900">{title}</h3>
          {description && (
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          )}
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-4">
          {action && renderAction(action)}
          {actions && actions.map((actionItem, index) => (
            <div key={index} className={index > 0 ? 'ml-2' : ''}>
              {renderAction(actionItem)}
            </div>
          ))}
        </div>
        {children}
      </div>
    )
  }

  if (variant === 'with-action') {
    return (
      <div className={cn(cardHeadingContainerVariants({ variant }), className)}>
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <div className="mt-3 sm:mt-0 sm:ml-4">
          {action && renderAction(action)}
          {actions && actions.map((actionItem, index) => (
            <div key={index} className={index > 0 ? 'ml-2' : ''}>
              {renderAction(actionItem)}
            </div>
          ))}
        </div>
        {children}
      </div>
    )
  }

  if (variant === 'with-description') {
    return (
      <div className={cn(cardHeadingContainerVariants({ variant }), className)}>
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        )}
        {children}
      </div>
    )
  }

  // Default: simple
  return (
    <div className={cn(cardHeadingContainerVariants({ variant }), className)}>
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      {children}
    </div>
  )
}
export { cardHeadingContainerVariants, cardHeadingActionButtonVariants }
