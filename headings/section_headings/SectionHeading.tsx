import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { ActionWithVariant, NavigationItem } from '../../utils/types'

// SectionHeadingAction uses a subset of ActionWithVariant
export interface SectionHeadingAction extends ActionWithVariant {
  variant?: 'primary' | 'secondary'
}

// Use the shared NavigationItem type for tabs
export type SectionHeadingTab = NavigationItem

const sectionHeadingContainerVariants = cva(
  '',
  {
    variants: {
      variant: {
        simple: 'border-b border-gray-200 pb-5',
        'with-description': 'border-b border-gray-200 pb-5',
        'with-action': 'border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between',
        'with-actions': 'border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between',
        'with-tabs': '',
        'with-actions-and-tabs': '',
        'with-inline-tabs': '',
        'with-label': 'border-b border-gray-200 pb-5',
        'with-badge-and-dropdown': 'border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between'
      }
    },
    defaultVariants: {
      variant: 'simple'
    }
  }
)

const sectionHeadingActionButtonVariants = cva(
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

const sectionHeadingTabVariants = cva(
  'whitespace-nowrap border-b-2 px-1 py-2 text-sm font-medium',
  {
    variants: {
      current: {
        true: 'border-indigo-500 text-indigo-600',
        false: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
      }
    },
    defaultVariants: {
      current: false
    }
  }
)

const sectionHeadingBadgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
  {
    variants: {
      variant: {
        default: 'bg-gray-100 text-gray-800',
        success: 'bg-green-100 text-green-800',
        warning: 'bg-yellow-100 text-yellow-800',
        error: 'bg-red-100 text-red-800'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export interface SectionHeadingProps extends VariantProps<typeof sectionHeadingContainerVariants> {
  title: string
  description?: string
  action?: SectionHeadingAction
  actions?: SectionHeadingAction[]
  tabs?: SectionHeadingTab[]
  tabsVariant?: 'default' | 'inline'
  label?: string
  badge?: {
    text: string
    variant?: 'default' | 'success' | 'warning' | 'error'
  }
  className?: string
  children?: React.ReactNode
}


export function SectionHeading({
  title,
  description,
  action,
  actions,
  tabs,
  tabsVariant = 'default',
  label,
  badge,
  variant = 'simple',
  className,
  children
}: SectionHeadingProps) {

  const renderAction = (actionItem: SectionHeadingAction) => {
    const buttonClasses = sectionHeadingActionButtonVariants({ variant: actionItem.variant || 'primary' })

    if (actionItem.type === 'link' && actionItem.href) {
      return (
        <a
          href={actionItem.href}
          className={buttonClasses}
        >
          {actionItem.label}
        </a>
      )
    }

    return (
      <button
        type="button"
        onClick={actionItem.onClick}
        className={buttonClasses}
      >
        {actionItem.label}
      </button>
    )
  }

  const renderTabs = () => {
    if (!tabs) return null

    if (tabsVariant === 'inline') {
      return (
        <div className="mt-4">
          <div className="sm:hidden">
            <select
              className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              defaultValue={tabs.find((tab) => tab.current)?.name}
            >
              {tabs.map((tab) => (
                <option key={tab.name} value={tab.name}>
                  {tab.name}
                </option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  onClick={tab.onClick}
                  className={sectionHeadingTabVariants({ current: tab.current })}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )
    }

    return (
      <div className="mt-4">
        <div className="sm:hidden">
          <select
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-hidden focus:ring-indigo-500 sm:text-sm"
            defaultValue={tabs.find((tab) => tab.current)?.name}
          >
            {tabs.map((tab) => (
              <option key={tab.name} value={tab.name}>
                {tab.name}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  onClick={tab.onClick}
                  className={sectionHeadingTabVariants({ current: tab.current })}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    )
  }

  const renderBadge = () => {
    if (!badge) return null

    const badgeClasses = sectionHeadingBadgeVariants({ variant: badge.variant || 'default' })

    return (
      <span className={badgeClasses}>
        {badge.text}
      </span>
    )
  }

  if (variant === 'with-actions-and-tabs') {
    return (
      <div className={cn(sectionHeadingContainerVariants({ variant }), className)}>
        <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
          <div>
            <h3 className="text-base font-semibold text-gray-900">{title}</h3>
            {description && (
              <p className="mt-2 max-w-4xl text-sm text-gray-500">{description}</p>
            )}
          </div>
          {(action || actions) && (
            <div className="mt-3 flex sm:mt-0 sm:ml-4">
              {action && renderAction(action)}
              {actions && actions.map((actionItem, index) => (
                <div key={index} className={index > 0 ? 'ml-3' : ''}>
                  {renderAction(actionItem)}
                </div>
              ))}
            </div>
          )}
        </div>
        {renderTabs()}
        {children}
      </div>
    )
  }

  if (variant === 'with-tabs' || variant === 'with-inline-tabs') {
    return (
      <div className={cn(sectionHeadingContainerVariants({ variant }), className)}>
        <div className="border-b border-gray-200 pb-5">
          <h3 className="text-base font-semibold text-gray-900">{title}</h3>
          {description && (
            <p className="mt-2 max-w-4xl text-sm text-gray-500">{description}</p>
          )}
        </div>
        {renderTabs()}
        {children}
      </div>
    )
  }

  if (variant === 'with-action' || variant === 'with-actions') {
    return (
      <div className={cn(sectionHeadingContainerVariants({ variant }), className)}>
        <div>
          {label && (
            <p className="text-sm font-medium text-gray-500">{label}</p>
          )}
          <h3 className="text-base font-semibold text-gray-900">{title}</h3>
          {description && (
            <p className="mt-2 max-w-4xl text-sm text-gray-500">{description}</p>
          )}
        </div>
        {(action || actions) && (
          <div className="mt-3 flex sm:mt-0 sm:ml-4">
            {action && renderAction(action)}
            {actions && actions.map((actionItem, index) => (
              <div key={index} className={index > 0 ? 'ml-3' : ''}>
                {renderAction(actionItem)}
              </div>
            ))}
          </div>
        )}
        {children}
      </div>
    )
  }

  if (variant === 'with-badge-and-dropdown') {
    return (
      <div className={cn(sectionHeadingContainerVariants({ variant }), className)}>
        <div className="sm:flex sm:items-center">
          <div>
            <h3 className="text-base font-semibold text-gray-900">{title}</h3>
            {description && (
              <p className="mt-2 max-w-4xl text-sm text-gray-500">{description}</p>
            )}
          </div>
          {badge && (
            <div className="mt-2 sm:mt-0 sm:ml-3">
              {renderBadge()}
            </div>
          )}
        </div>
        {(action || actions) && (
          <div className="mt-3 sm:mt-0 sm:ml-4">
            {action && renderAction(action)}
            {actions && actions.map((actionItem, index) => (
              <div key={index} className={index > 0 ? 'ml-3' : ''}>
                {renderAction(actionItem)}
              </div>
            ))}
          </div>
        )}
        {children}
      </div>
    )
  }

  if (variant === 'with-label') {
    return (
      <div className={cn(sectionHeadingContainerVariants({ variant }), className)}>
        {label && (
          <p className="text-sm font-medium text-gray-500">{label}</p>
        )}
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        {description && (
          <p className="mt-2 max-w-4xl text-sm text-gray-500">{description}</p>
        )}
        {children}
      </div>
    )
  }

  // Default variants: simple, with-description
  return (
    <div className={cn(sectionHeadingContainerVariants({ variant }), className)}>
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      {description && (
        <p className="mt-2 max-w-4xl text-sm text-gray-500">{description}</p>
      )}
      {children}
    </div>
  )
}
export { sectionHeadingContainerVariants, sectionHeadingActionButtonVariants, sectionHeadingTabVariants, sectionHeadingBadgeVariants }
