import { forwardRef, useState } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export interface TabItem {
  name: string
  href?: string
  content?: React.ReactNode
  disabled?: boolean
  icon?: React.ReactNode
  count?: number
  badge?: React.ReactNode
}

const tabsContainerVariants = cva(
  '',
  {
    variants: {
      variant: {
        underline: '',
        pills: '',
        bordered: '',
        simple_dark: 'bg-gray-900',
        pills_gray: 'bg-gray-50 p-1 rounded-lg',
        pills_brand: '',
        bar_underline: 'bg-gray-50 border-b border-gray-200',
        full_width: ''
      }
    },
    defaultVariants: {
      variant: 'underline'
    }
  }
)

const tabsNavVariants = cva(
  'flex',
  {
    variants: {
      variant: {
        underline: '-mb-px space-x-8',
        pills: 'space-x-1',
        bordered: 'border-b border-gray-200',
        simple_dark: '-mb-px space-x-8',
        pills_gray: 'space-x-1',
        pills_brand: 'space-x-1',
        bar_underline: 'space-x-8 px-4',
        full_width: 'grid grid-cols-4 -mb-px'
      }
    }
  }
)

const tabButtonVariants = cva(
  'font-medium transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        underline: 'border-b-2 whitespace-nowrap',
        pills: 'rounded-md',
        bordered: 'border-b-2',
        simple_dark: 'border-b-2 whitespace-nowrap',
        pills_gray: 'rounded-md',
        pills_brand: 'rounded-md',
        bar_underline: 'border-b-2 py-4',
        full_width: 'border-b-2 text-center justify-center'
      },
      size: {
        sm: 'text-xs px-2 py-2',
        md: 'text-sm px-3 py-2',
        lg: 'text-base px-4 py-3'
      },
      isActive: {
        true: '',
        false: ''
      }
    },
    compoundVariants: [
      // Underline variant
      {
        variant: 'underline',
        isActive: true,
        class: 'border-indigo-500 text-indigo-600'
      },
      {
        variant: 'underline',
        isActive: false,
        class: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
      },
      // Pills variant
      {
        variant: 'pills',
        isActive: true,
        class: 'bg-indigo-100 text-indigo-700'
      },
      {
        variant: 'pills',
        isActive: false,
        class: 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
      },
      // Bordered variant
      {
        variant: 'bordered',
        isActive: true,
        class: 'border-indigo-500 text-indigo-600'
      },
      {
        variant: 'bordered',
        isActive: false,
        class: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
      },
      // Simple dark variant
      {
        variant: 'simple_dark',
        isActive: true,
        class: 'border-indigo-400 text-indigo-300'
      },
      {
        variant: 'simple_dark',
        isActive: false,
        class: 'border-transparent text-gray-300 hover:border-gray-600 hover:text-white'
      },
      // Pills gray variant
      {
        variant: 'pills_gray',
        isActive: true,
        class: 'bg-white text-gray-700 shadow-sm'
      },
      {
        variant: 'pills_gray',
        isActive: false,
        class: 'text-gray-500 hover:text-gray-700'
      },
      // Pills brand variant
      {
        variant: 'pills_brand',
        isActive: true,
        class: 'bg-indigo-600 text-white'
      },
      {
        variant: 'pills_brand',
        isActive: false,
        class: 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
      },
      // Bar underline variant
      {
        variant: 'bar_underline',
        isActive: true,
        class: 'border-indigo-500 text-indigo-600'
      },
      {
        variant: 'bar_underline',
        isActive: false,
        class: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
      },
      // Full width variant
      {
        variant: 'full_width',
        isActive: true,
        class: 'border-indigo-500 text-indigo-600'
      },
      {
        variant: 'full_width',
        isActive: false,
        class: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
      }
    ],
    defaultVariants: {
      variant: 'underline',
      size: 'md',
      isActive: false
    }
  }
)

interface TabsProps extends BaseComponentProps, 
  VariantProps<typeof tabsContainerVariants>,
  VariantProps<typeof tabButtonVariants> {
  tabs: TabItem[]
  activeTab?: string
  onTabChange?: (tabName: string) => void
  showMobileSelect?: boolean
  dark?: boolean
  fullWidth?: boolean
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ 
    className,
    tabs,
    activeTab: controlledActiveTab,
    onTabChange,
    variant = 'underline',
    size = 'md',
    showMobileSelect = true,
    dark = false,
    fullWidth = false,
    ...props
  }, ref) => {
    const [internalActiveTab, setInternalActiveTab] = useState(tabs[0]?.name || '')
    
    const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab
    const activeTabObject = tabs.find(tab => tab.name === activeTab)
    
    const handleTabChange = (tabName: string) => {
      if (onTabChange) {
        onTabChange(tabName)
      }
      if (controlledActiveTab === undefined) {
        setInternalActiveTab(tabName)
      }
    }

    const renderMobileSelect = () => {
      if (!showMobileSelect) return null
      
      const selectStyle = variant === 'simple_dark'
        ? 'col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-800 py-2 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500'
        : 'col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600'
      
      const iconColor = variant === 'simple_dark' ? 'fill-gray-400' : 'fill-gray-500'
      
      return (
        <div className="sm:hidden">
          <div className="grid grid-cols-1">
            <select
              value={activeTab}
              onChange={(e) => handleTabChange(e.target.value)}
              aria-label="Select a tab"
              className={selectStyle}
            >
              {tabs.map((tab) => (
                <option key={tab.name} value={tab.name} disabled={tab.disabled}>
                  {tab.name}
                </option>
              ))}
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className={cn(
                'pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end',
                iconColor
              )}
            />
          </div>
        </div>
      )
    }

    const renderCountBadge = (tab: TabItem, isActive: boolean) => {
      if (tab.count === undefined) return null
      
      let badgeClass = 'ml-2 rounded-full px-2 py-0.5 text-xs'
      
      // Variant-specific count styles
      if (variant === 'simple_dark') {
        badgeClass += ' bg-gray-800 text-gray-300'
      } else if (variant === 'pills_gray') {
        badgeClass += isActive ? ' bg-gray-100 text-gray-600' : ' bg-gray-200 text-gray-600'
      } else if (variant === 'pills_brand') {
        badgeClass += isActive ? ' bg-indigo-500 text-indigo-100' : ' bg-gray-200 text-gray-600'
      } else if (variant === 'pills') {
        badgeClass += isActive ? ' bg-indigo-200 text-indigo-600' : ' bg-gray-200 text-gray-600'
      } else {
        badgeClass += ' bg-gray-100 text-gray-600'
      }
      
      return (
        <span className={badgeClass}>
          {tab.count}
        </span>
      )
    }

    const shouldShowBorderBottom = variant === 'simple_dark' 
      ? 'border-b border-gray-700' 
      : variant === 'underline' 
        ? 'border-b border-gray-200' 
        : ''

    return (
      <div ref={ref} className={cn(tabsContainerVariants({ variant }), className)} {...props}>
        {renderMobileSelect()}
        
        {(variant === 'underline' || variant === 'simple_dark') && (
          <div className={cn(shouldShowBorderBottom, showMobileSelect && 'hidden sm:block')}>
            <nav aria-label="Tabs" className={tabsNavVariants({ variant })}>
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => !tab.disabled && handleTabChange(tab.name)}
                  disabled={tab.disabled}
                  className={tabButtonVariants({ 
                    variant, 
                    size, 
                    isActive: tab.name === activeTab 
                  })}
                >
                  <div className="flex items-center">
                    {tab.icon && (
                      <span className="mr-2 h-4 w-4">{tab.icon}</span>
                    )}
                    {tab.name}
                    {renderCountBadge(tab, tab.name === activeTab)}
                    {tab.badge && (
                      <span className="ml-2">
                        {tab.badge}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </nav>
          </div>
        )}

        {(variant === 'pills' || variant === 'pills_gray' || variant === 'pills_brand') && (
          <nav className={tabsNavVariants({ variant })} aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => !tab.disabled && handleTabChange(tab.name)}
                disabled={tab.disabled}
                className={tabButtonVariants({ 
                  variant, 
                  size, 
                  isActive: tab.name === activeTab 
                })}
              >
                <div className="flex items-center">
                  {tab.icon && (
                    <span className="mr-2 h-4 w-4">{tab.icon}</span>
                  )}
                  {tab.name}
                  {renderCountBadge(tab, tab.name === activeTab)}
                  {tab.badge && (
                    <span className="ml-2">
                      {tab.badge}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </nav>
        )}

        {variant === 'bordered' && (
          <nav className={tabsNavVariants({ variant })} aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => !tab.disabled && handleTabChange(tab.name)}
                disabled={tab.disabled}
                className={tabButtonVariants({ 
                  variant, 
                  size, 
                  isActive: tab.name === activeTab 
                })}
              >
                <div className="flex items-center">
                  {tab.icon && (
                    <span className="mr-2 h-4 w-4">{tab.icon}</span>
                  )}
                  {tab.name}
                  {renderCountBadge(tab, tab.name === activeTab)}
                  {tab.badge && (
                    <span className="ml-2">
                      {tab.badge}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </nav>
        )}

        {variant === 'bar_underline' && (
          <nav aria-label="Tabs" className={tabsNavVariants({ variant })}>
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => !tab.disabled && handleTabChange(tab.name)}
                disabled={tab.disabled}
                className={tabButtonVariants({ 
                  variant, 
                  size, 
                  isActive: tab.name === activeTab 
                })}
              >
                <div className="flex items-center">
                  {tab.icon && (
                    <span className="mr-2 h-4 w-4">{tab.icon}</span>
                  )}
                  {tab.name}
                  {renderCountBadge(tab, tab.name === activeTab)}
                </div>
              </button>
            ))}
          </nav>
        )}

        {variant === 'full_width' && (
          <div className="border-b border-gray-200">
            <nav aria-label="Tabs" className={tabsNavVariants({ variant })}>
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => !tab.disabled && handleTabChange(tab.name)}
                  disabled={tab.disabled}
                  className={tabButtonVariants({ 
                    variant, 
                    size, 
                    isActive: tab.name === activeTab 
                  })}
                >
                  <div className="flex items-center justify-center">
                    {tab.icon && (
                      <span className="mr-2 h-4 w-4">{tab.icon}</span>
                    )}
                    {tab.name}
                    {renderCountBadge(tab, tab.name === activeTab)}
                  </div>
                </button>
              ))}
            </nav>
          </div>
        )}
        
        {activeTabObject?.content && (
          <div className="mt-4">
            {activeTabObject.content}
          </div>
        )}
      </div>
    )
  }
)

Tabs.displayName = 'Tabs'

export { tabsContainerVariants, tabsNavVariants, tabButtonVariants }
export type { TabsProps }