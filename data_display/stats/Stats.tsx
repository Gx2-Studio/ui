import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'

export interface StatItem {
  name: string
  value: string | number
  unit?: string
  change?: string
  changeType?: 'increase' | 'decrease' | 'neutral'
  icon?: React.ReactNode
}

const statsContainerVariants = cva(
  '',
  {
    variants: {
      variant: {
        simple: '',
        cards: 'grid gap-6',
        trend: '',
        dark: 'bg-gray-900'
      },
      columns: {
        1: 'grid-cols-1',
        2: 'grid-cols-1 sm:grid-cols-2',
        3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
      }
    },
    compoundVariants: [
      {
        variant: 'cards',
        class: 'grid gap-6'
      },
      {
        variant: 'dark',
        columns: 1,
        class: 'grid gap-px bg-white/10 grid-cols-1'
      },
      {
        variant: 'dark',
        columns: 2,
        class: 'grid gap-px bg-white/10 grid-cols-1 sm:grid-cols-2'
      },
      {
        variant: 'dark',
        columns: 3,
        class: 'grid gap-px bg-white/10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      },
      {
        variant: 'dark',
        columns: 4,
        class: 'grid gap-px bg-white/10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
      }
    ],
    defaultVariants: {
      variant: 'simple',
      columns: 4
    }
  }
)

const statsItemVariants = cva(
  '',
  {
    variants: {
      variant: {
        simple: 'px-4 py-6 sm:px-6 lg:px-8',
        cards: 'overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6',
        trend: 'px-4 py-6 sm:px-6 lg:px-8',
        dark: 'bg-gray-900 px-4 py-6 sm:px-6 lg:px-8'
      }
    },
    defaultVariants: {
      variant: 'simple'
    }
  }
)

const statsChangeVariants = cva(
  'mt-1 text-sm font-medium',
  {
    variants: {
      changeType: {
        increase: 'text-green-400',
        decrease: 'text-red-400',
        neutral: 'text-gray-400'
      },
      variant: {
        simple: 'text-green-600',
        cards: '',
        trend: '',
        dark: ''
      }
    },
    compoundVariants: [
      { variant: 'cards', changeType: 'increase', class: 'text-green-600' },
      { variant: 'cards', changeType: 'decrease', class: 'text-red-600' },
      { variant: 'cards', changeType: 'neutral', class: 'text-gray-500' }
    ],
    defaultVariants: {
      changeType: 'neutral',
      variant: 'simple'
    }
  }
)

interface StatsProps extends BaseComponentProps,
  VariantProps<typeof statsContainerVariants> {
  stats: StatItem[]
}

export const Stats = forwardRef<HTMLDivElement, StatsProps>(
  ({ 
    className,
    stats,
    variant = 'simple',
    columns = 4,
    ...props
  }, ref) => {
    const gridCols = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 sm:grid-cols-2',
      3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
    }

    if (variant === 'dark') {
      return (
        <div
          ref={ref}
          className={cn('bg-gray-900', className)}
          {...props}
        >
          <div className="mx-auto max-w-7xl">
            <div className={cn(
              'grid gap-px bg-white/10',
              gridCols[columns || 4]
            )}>
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
                  <p className="text-sm/6 font-medium text-gray-400">{stat.name}</p>
                  <p className="mt-2 flex items-baseline gap-x-2">
                    <span className="text-4xl font-semibold tracking-tight text-white">
                      {stat.value}
                    </span>
                    {stat.unit && (
                      <span className="text-sm text-gray-400">{stat.unit}</span>
                    )}
                  </p>
                  {stat.change && (
                    <p className={cn(
                      'mt-1 text-sm font-medium',
                      stat.changeType === 'increase' && 'text-green-400',
                      stat.changeType === 'decrease' && 'text-red-400',
                      stat.changeType === 'neutral' && 'text-gray-400'
                    )}>
                      {stat.change}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }

    if (variant === 'cards') {
      return (
        <div
          ref={ref}
          className={cn('grid gap-6', gridCols[columns || 4], className)}
          {...props}
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 px-6 py-4">
              <div className="flex items-center">
                {stat.icon && (
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-md bg-indigo-500 flex items-center justify-center">
                      <span className="text-white text-sm">{stat.icon}</span>
                    </div>
                  </div>
                )}
                <div className={cn('w-0 flex-1', stat.icon && 'ml-4')}>
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      {stat.unit && (
                        <div className="ml-2 text-sm text-gray-500">
                          {stat.unit}
                        </div>
                      )}
                      {stat.change && (
                        <div className={cn(
                          'ml-2 flex items-baseline text-sm font-semibold',
                          stat.changeType === 'increase' && 'text-green-600',
                          stat.changeType === 'decrease' && 'text-red-600',
                          stat.changeType === 'neutral' && 'text-gray-500'
                        )}>
                          {stat.change}
                        </div>
                      )}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    }

    // Simple variant (default)
    return (
      <div
        ref={ref}
        className={cn('grid gap-6', gridCols[columns || 4], className)}
        {...props}
      >
        {stats.map((stat, index) => (
          <div key={index} className="px-4 py-6 sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-gray-500 truncate">
              {stat.name}
            </p>
            <p className="mt-2 flex items-baseline gap-x-2">
              <span className="text-3xl font-semibold tracking-tight text-gray-900">
                {stat.value}
              </span>
              {stat.unit && (
                <span className="text-sm text-gray-500">{stat.unit}</span>
              )}
            </p>
            {stat.change && (
              <p className={cn(
                'mt-1 text-sm font-medium',
                stat.changeType === 'increase' && 'text-green-600',
                stat.changeType === 'decrease' && 'text-red-600',
                stat.changeType === 'neutral' && 'text-gray-500'
              )}>
                {stat.change}
              </p>
            )}
          </div>
        ))}
      </div>
    )
  }
)

Stats.displayName = 'Stats'