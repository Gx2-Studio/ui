import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'

export interface TableColumn<T = any> {
  key: string
  label: string
  render?: (value: any, item: T, index: number) => React.ReactNode
  sortable?: boolean
  width?: string
  align?: 'left' | 'center' | 'right'
  sticky?: boolean
  hiddenOnMobile?: boolean
}

export interface TableAction<T = any> {
  label: string
  onClick?: (item: T, index: number) => void
  href?: string
  variant?: 'primary' | 'secondary' | 'danger'
  disabled?: (item: T) => boolean
}

interface TableProps<T = any> extends BaseComponentProps,
  Omit<VariantProps<typeof tableContainerVariants>, 'darkMode' | 'fullWidth'> {
  columns: TableColumn<T>[]
  data: T[]
  actions?: TableAction<T>[]
  variant?: 'simple' | 'striped' | 'bordered' | 'card'
  size?: 'sm' | 'md' | 'lg'
  stickyHeader?: boolean
  loading?: boolean
  emptyMessage?: string
  onSort?: (key: string, direction: 'asc' | 'desc') => void
  sortKey?: string
  sortDirection?: 'asc' | 'desc'
  // Checkbox support
  selectable?: boolean
  selectedItems?: Set<number>
  onSelectItem?: (index: number, selected: boolean) => void
  onSelectAll?: (selected: boolean) => void
  // Visual variants
  condensed?: boolean
  darkMode?: boolean
  fullWidth?: boolean
  showVerticalLines?: boolean
  uppercaseHeaders?: boolean
  hiddenHeaders?: boolean
}

const tableContainerVariants = cva(
  '',
  {
    variants: {
      variant: {
        card: 'bg-white shadow-sm rounded-lg overflow-hidden',
        simple: '',
        striped: '',
        bordered: ''
      },
      darkMode: {
        true: 'bg-gray-900',
        false: ''
      },
      fullWidth: {
        true: 'w-full',
        false: 'min-w-full'
      }
    },
    compoundVariants: [
      {
        variant: 'card',
        darkMode: true,
        class: 'bg-gray-900 shadow-sm rounded-lg overflow-hidden'
      }
    ],
    defaultVariants: {
      variant: 'simple',
      darkMode: false,
      fullWidth: false
    }
  }
)

const tableVariants = cva(
  '',
  {
    variants: {
      variant: {
        simple: 'divide-y divide-gray-300',
        striped: 'divide-y divide-gray-300',
        bordered: 'border border-gray-300',
        card: 'divide-y divide-gray-300'
      },
      fullWidth: {
        true: 'w-full',
        false: 'min-w-full'
      },
      darkMode: {
        true: 'divide-gray-700',
        false: ''
      }
    },
    compoundVariants: [
      {
        variant: 'bordered',
        darkMode: true,
        class: 'border border-gray-700'
      }
    ],
    defaultVariants: {
      variant: 'simple',
      fullWidth: false,
      darkMode: false
    }
  }
)

const tableHeaderVariants = cva(
  '',
  {
    variants: {
      variant: {
        simple: '',
        striped: '',
        bordered: '',
        card: 'bg-gray-50'
      },
      darkMode: {
        true: 'bg-gray-800',
        false: 'bg-gray-50'
      },
      stickyHeader: {
        true: 'sticky top-0 z-10',
        false: ''
      },
      hiddenHeaders: {
        true: 'sr-only',
        false: ''
      }
    },
    compoundVariants: [
      {
        stickyHeader: true,
        darkMode: true,
        class: 'sticky top-0 z-10 bg-gray-900'
      },
      {
        stickyHeader: true,
        darkMode: false,
        class: 'sticky top-0 z-10 bg-white'
      }
    ],
    defaultVariants: {
      variant: 'simple',
      darkMode: false,
      stickyHeader: false,
      hiddenHeaders: false
    }
  }
)

const tableHeaderCellVariants = cva(
  'font-semibold',
  {
    variants: {
      size: {
        sm: 'py-1 px-2 text-xs',
        md: 'py-3.5 px-3 text-sm',
        lg: 'py-4 px-4 text-base'
      },
      condensed: {
        true: '',
        false: ''
      },
      darkMode: {
        true: 'text-gray-100',
        false: 'text-gray-900'
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
      },
      sortable: {
        true: 'cursor-pointer',
        false: ''
      },
      sticky: {
        true: 'sticky left-0',
        false: ''
      },
      hiddenOnMobile: {
        true: 'hidden sm:table-cell',
        false: ''
      },
      uppercaseHeaders: {
        true: 'uppercase tracking-wider text-xs',
        false: ''
      },
      showVerticalLines: {
        true: '',
        false: ''
      }
    },
    compoundVariants: [
      {
        size: 'sm',
        condensed: true,
        class: 'py-1 px-2 text-xs'
      },
      {
        size: 'sm',
        condensed: false,
        class: 'py-2 px-2 text-xs'
      },
      {
        size: 'md',
        condensed: true,
        class: 'py-2 px-3 text-sm'
      },
      {
        size: 'lg',
        condensed: true,
        class: 'py-3 px-4 text-base'
      },
      {
        size: 'lg',
        condensed: false,
        class: 'py-4 px-4 text-base'
      },
      {
        sortable: true,
        darkMode: true,
        class: 'hover:bg-gray-700'
      },
      {
        sortable: true,
        darkMode: false,
        class: 'hover:bg-gray-100'
      },
      {
        sticky: true,
        darkMode: true,
        class: 'sticky left-0 bg-gray-800'
      },
      {
        sticky: true,
        darkMode: false,
        class: 'sticky left-0 bg-gray-50'
      },
      {
        showVerticalLines: true,
        darkMode: true,
        class: 'border-r border-gray-700'
      },
      {
        showVerticalLines: true,
        darkMode: false,
        class: 'border-r border-gray-200'
      }
    ],
    defaultVariants: {
      size: 'md',
      condensed: false,
      darkMode: false,
      align: 'left',
      sortable: false,
      sticky: false,
      hiddenOnMobile: false,
      uppercaseHeaders: false,
      showVerticalLines: false
    }
  }
)

const tableRowVariants = cva(
  '',
  {
    variants: {
      variant: {
        simple: '',
        striped: '',
        bordered: '',
        card: ''
      },
      darkMode: {
        true: '',
        false: ''
      },
      showVerticalLines: {
        true: '',
        false: ''
      }
    },
    compoundVariants: [
      {
        variant: 'striped',
        darkMode: true,
        class: 'even:bg-gray-800'
      },
      {
        variant: 'striped',
        darkMode: false,
        class: 'even:bg-gray-50'
      },
      {
        variant: 'bordered',
        darkMode: true,
        class: 'border-b border-gray-700'
      },
      {
        variant: 'bordered',
        darkMode: false,
        class: 'border-b border-gray-200'
      },
      {
        showVerticalLines: true,
        darkMode: true,
        class: 'border-r border-gray-700'
      },
      {
        showVerticalLines: true,
        darkMode: false,
        class: 'border-r border-gray-200'
      }
    ],
    defaultVariants: {
      variant: 'simple',
      darkMode: false,
      showVerticalLines: false
    }
  }
)

const tableCellVariants = cva(
  'whitespace-nowrap',
  {
    variants: {
      size: {
        sm: 'py-1 px-2 text-xs',
        md: 'py-4 px-3 text-sm',
        lg: 'py-6 px-4 text-base'
      },
      condensed: {
        true: '',
        false: ''
      },
      darkMode: {
        true: 'text-gray-100',
        false: 'text-gray-900'
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
      },
      sticky: {
        true: 'sticky left-0',
        false: ''
      },
      hiddenOnMobile: {
        true: 'hidden sm:table-cell',
        false: ''
      },
      showVerticalLines: {
        true: '',
        false: ''
      }
    },
    compoundVariants: [
      {
        size: 'sm',
        condensed: true,
        class: 'py-1 px-2 text-xs'
      },
      {
        size: 'sm',
        condensed: false,
        class: 'py-2 px-2 text-xs'
      },
      {
        size: 'md',
        condensed: true,
        class: 'py-2 px-3 text-sm'
      },
      {
        size: 'lg',
        condensed: true,
        class: 'py-3 px-4 text-base'
      },
      {
        sticky: true,
        darkMode: true,
        class: 'sticky left-0 bg-gray-900'
      },
      {
        sticky: true,
        darkMode: false,
        class: 'sticky left-0 bg-white'
      },
      {
        showVerticalLines: true,
        darkMode: true,
        class: 'border-r border-gray-700'
      },
      {
        showVerticalLines: true,
        darkMode: false,
        class: 'border-r border-gray-200'
      }
    ],
    defaultVariants: {
      size: 'md',
      condensed: false,
      darkMode: false,
      align: 'left',
      sticky: false,
      hiddenOnMobile: false,
      showVerticalLines: false
    }
  }
)

const tableActionCellVariants = cva(
  'relative text-right font-medium whitespace-nowrap pr-4 pl-3 sm:pr-0',
  {
    variants: {
      size: {
        sm: 'py-1 px-2 text-xs',
        md: 'py-4 px-3 text-sm',
        lg: 'py-6 px-4 text-base'
      },
      condensed: {
        true: '',
        false: ''
      }
    },
    compoundVariants: [
      {
        size: 'sm',
        condensed: true,
        class: 'py-1 px-2 text-xs'
      },
      {
        size: 'sm',
        condensed: false,
        class: 'py-2 px-2 text-xs'
      },
      {
        size: 'md',
        condensed: true,
        class: 'py-2 px-3 text-sm'
      },
      {
        size: 'lg',
        condensed: true,
        class: 'py-3 px-4 text-base'
      }
    ],
    defaultVariants: {
      size: 'md',
      condensed: false
    }
  }
)

const tableActionButtonVariants = cva(
  'hover:underline',
  {
    variants: {
      variant: {
        primary: 'text-indigo-600 hover:text-indigo-900',
        secondary: 'text-indigo-600 hover:text-indigo-900',
        danger: 'text-red-600 hover:text-red-900'
      },
      disabled: {
        true: 'opacity-50 pointer-events-none',
        false: ''
      }
    },
    defaultVariants: {
      variant: 'primary',
      disabled: false
    }
  }
)

const tableBodyVariants = cva(
  '',
  {
    variants: {
      variant: {
        simple: '',
        striped: '',
        bordered: '',
        card: ''
      },
      darkMode: {
        true: 'bg-gray-900',
        false: 'bg-white'
      }
    },
    compoundVariants: [
      {
        variant: ['simple', 'striped'],
        darkMode: true,
        class: 'bg-gray-900 divide-y divide-gray-700'
      },
      {
        variant: ['simple', 'striped'],
        darkMode: false,
        class: 'bg-white divide-y divide-gray-200'
      },
      {
        variant: 'card',
        darkMode: true,
        class: 'bg-gray-900'
      },
      {
        variant: 'card',
        darkMode: false,
        class: 'bg-white'
      }
    ],
    defaultVariants: {
      variant: 'simple',
      darkMode: false
    }
  }
)

const tableEmptyStateVariants = cva(
  'text-center py-8',
  {
    variants: {
      darkMode: {
        true: 'text-gray-400',
        false: 'text-gray-500'
      }
    },
    defaultVariants: {
      darkMode: false
    }
  }
)

export const Table = forwardRef<HTMLDivElement, TableProps>(
  ({ 
    className,
    columns,
    data,
    actions,
    variant = 'simple',
    size = 'md',
    stickyHeader = false,
    loading = false,
    emptyMessage = 'No data available',
    onSort,
    sortKey,
    sortDirection,
    selectable = false,
    selectedItems = new Set(),
    onSelectItem,
    onSelectAll,
    condensed = false,
    darkMode = false,
    fullWidth = false,
    showVerticalLines = false,
    uppercaseHeaders = false,
    hiddenHeaders = false,
    ...props
  }, ref) => {

    const isAllSelected = data.length > 0 && selectedItems.size === data.length
    const isIndeterminate = selectedItems.size > 0 && selectedItems.size < data.length

    const handleSort = (column: TableColumn) => {
      if (!column.sortable || !onSort) return
      
      const newDirection = sortKey === column.key && sortDirection === 'asc' ? 'desc' : 'asc'
      onSort(column.key, newDirection)
    }

    const renderCell = (column: TableColumn, item: any, index: number) => {
      const value = item[column.key]
      
      if (column.render) {
        return column.render(value, item, index)
      }
      
      return value
    }

    const renderActions = (item: any, index: number) => {
      if (!actions || actions.length === 0) return null
      
      return (
        <td className={tableActionCellVariants({ size, condensed })}>
          <div className="flex justify-end gap-2">
            {actions.map((action, actionIndex) => {
              const isDisabled = action.disabled?.(item) || false
              
              if (action.href) {
                return (
                  <a
                    key={actionIndex}
                    href={action.href}
                    className={tableActionButtonVariants({ 
                      variant: action.variant === 'danger' ? 'danger' : 'primary', 
                      disabled: isDisabled 
                    })}
                  >
                    {action.label}
                  </a>
                )
              }
              
              return (
                <button
                  key={actionIndex}
                  onClick={() => action.onClick?.(item, index)}
                  disabled={isDisabled}
                  className={tableActionButtonVariants({ 
                    variant: action.variant === 'danger' ? 'danger' : 'primary', 
                    disabled: isDisabled 
                  })}
                >
                  {action.label}
                </button>
              )
            })}
          </div>
        </td>
      )
    }




    if (variant === 'card') {
      return (
        <div 
          ref={ref}
          className={cn(tableContainerVariants({ variant, darkMode, fullWidth }), className)}
          {...props}
        >
          <div className="overflow-x-auto">
            <table className={tableVariants({ variant, fullWidth, darkMode })}>
              <thead className={tableHeaderVariants({ variant, darkMode, stickyHeader, hiddenHeaders })}>
                <tr>
                  {selectable && (
                    <th scope="col" className={cn('relative', tableHeaderCellVariants({ size, condensed }))}>
                      <input
                        type="checkbox"
                        checked={isAllSelected}
                        ref={(el) => {
                          if (el) el.indeterminate = isIndeterminate
                        }}
                        onChange={(e) => onSelectAll?.(e.target.checked)}
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </th>
                  )}
                  {columns.map((column) => (
                    <th
                      key={column.key}
                      scope="col"
                      style={{ width: column.width }}
                      className={tableHeaderCellVariants({
                        size,
                        condensed,
                        darkMode,
                        align: column.align,
                        sortable: column.sortable,
                        sticky: column.sticky,
                        hiddenOnMobile: column.hiddenOnMobile,
                        uppercaseHeaders,
                        showVerticalLines
                      })}
                      onClick={() => handleSort(column)}
                    >
                      <div className="flex items-center gap-1">
                        {column.label}
                        {column.sortable && sortKey === column.key && (
                          <span className="text-xs">
                            {sortDirection === 'asc' ? '↑' : '↓'}
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                  {actions && actions.length > 0 && (
                    <th scope="col" className={cn('relative', tableHeaderCellVariants({ size, condensed }))}>
                      <span className="sr-only">Actions</span>
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className={tableBodyVariants({ variant, darkMode })}>
                {loading ? (
                  <tr>
                    <td colSpan={columns.length + (actions ? 1 : 0) + (selectable ? 1 : 0)} className={tableEmptyStateVariants({ darkMode })}>
                      Loading...
                    </td>
                  </tr>
                ) : data.length === 0 ? (
                  <tr>
                    <td colSpan={columns.length + (actions ? 1 : 0) + (selectable ? 1 : 0)} className={tableEmptyStateVariants({ darkMode })}>
                      {emptyMessage}
                    </td>
                  </tr>
                ) : (
                  data.map((item, index) => (
                    <tr key={index} className={tableRowVariants({ variant, darkMode, showVerticalLines })}>
                      {selectable && (
                        <td className={cn('relative', tableCellVariants({ size, condensed }))}>
                          <input
                            type="checkbox"
                            checked={selectedItems.has(index)}
                            onChange={(e) => onSelectItem?.(index, e.target.checked)}
                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </td>
                      )}
                      {columns.map((column) => (
                        <td
                          key={column.key}
                          className={tableCellVariants({
                            size,
                            condensed,
                            darkMode,
                            align: column.align,
                            sticky: column.sticky,
                            hiddenOnMobile: column.hiddenOnMobile,
                            showVerticalLines
                          })}
                        >
                          {renderCell(column, item, index)}
                        </td>
                      ))}
                      {renderActions(item, index)}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )
    }

    return (
      <div ref={ref} className={cn('overflow-x-auto', darkMode && 'bg-gray-900', className)} {...props}>
        <table className={tableVariants({ variant, fullWidth, darkMode })}>
          <thead className={tableHeaderVariants({ variant, darkMode, stickyHeader, hiddenHeaders })}>
            <tr>
              {selectable && (
                <th scope="col" className={cn('relative', tableHeaderCellVariants({ size, condensed }))}>
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    ref={(el) => {
                      if (el) el.indeterminate = isIndeterminate
                    }}
                    onChange={(e) => onSelectAll?.(e.target.checked)}
                    className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </th>
              )}
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  style={{ width: column.width }}
                  className={cn(
                    'font-semibold',
                    darkMode ? 'text-gray-100' : 'text-gray-900',
                    tableHeaderCellVariants({ size, condensed }),
                    column.align === 'center' && 'text-center',
                    column.align === 'right' && 'text-right',
                    column.sortable && (darkMode ? 'cursor-pointer hover:bg-gray-700' : 'cursor-pointer hover:bg-gray-100'),
                    column.sticky && (darkMode ? 'sticky left-0 bg-gray-800' : 'sticky left-0 bg-white'),
                    column.hiddenOnMobile && 'hidden sm:table-cell',
                    uppercaseHeaders && 'uppercase tracking-wider text-xs',
                    showVerticalLines && (darkMode ? 'border-r border-gray-700' : 'border-r border-gray-200')
                  )}
                  onClick={() => handleSort(column)}
                >
                  <div className="flex items-center gap-1">
                    {column.label}
                    {column.sortable && sortKey === column.key && (
                      <span className="text-xs">
                        {sortDirection === 'asc' ? '↑' : '↓'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
              {actions && actions.length > 0 && (
                <th scope="col" className={cn('relative', tableHeaderCellVariants({ size, condensed }))}>
                  <span className="sr-only">Actions</span>
                </th>
              )}
            </tr>
          </thead>
          <tbody className={cn(
            darkMode ? 'bg-gray-900' : 'bg-white', 
            variant !== 'bordered' && (darkMode ? 'divide-y divide-gray-700' : 'divide-y divide-gray-200')
          )}>
            {loading ? (
              <tr>
                <td colSpan={columns.length + (actions ? 1 : 0) + (selectable ? 1 : 0)} className={cn(
                  'text-center py-8',
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                )}>
                  Loading...
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (actions ? 1 : 0) + (selectable ? 1 : 0)} className={cn(
                  'text-center py-8',
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                )}>
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index} className={tableRowVariants({ variant, darkMode, showVerticalLines })}>
                  {selectable && (
                    <td className={cn('relative', tableCellVariants({ size, condensed }))}>
                      <input
                        type="checkbox"
                        checked={selectedItems.has(index)}
                        onChange={(e) => onSelectItem?.(index, e.target.checked)}
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </td>
                  )}
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={cn(
                        'whitespace-nowrap',
                        darkMode ? 'text-gray-100' : 'text-gray-900',
                        tableCellVariants({ size, condensed }),
                        column.align === 'center' && 'text-center',
                        column.align === 'right' && 'text-right',
                        column.sticky && (darkMode ? 'sticky left-0 bg-gray-900' : 'sticky left-0 bg-white'),
                        column.hiddenOnMobile && 'hidden sm:table-cell',
                        showVerticalLines && (darkMode ? 'border-r border-gray-700' : 'border-r border-gray-200')
                      )}
                    >
                      {renderCell(column, item, index)}
                    </td>
                  ))}
                  {renderActions(item, index)}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    )
  }
)

Table.displayName = 'Table'

export {
  tableContainerVariants,
  tableVariants,
  tableHeaderVariants,
  tableHeaderCellVariants,
  tableRowVariants,
  tableCellVariants,
  tableActionCellVariants,
  tableActionButtonVariants,
  tableBodyVariants,
  tableEmptyStateVariants
}
export type { TableProps }