import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'

export interface ProgressStep {
  id: string
  name: string
  description?: string
  status: 'complete' | 'current' | 'upcoming'
  href?: string
  onClick?: () => void
}

const progressStepVariants = cva(
  'flex items-center justify-center rounded-full border-2',
  {
    variants: {
      size: {
        sm: 'h-8 w-8 text-sm',
        md: 'h-10 w-10 text-base',
        lg: 'h-12 w-12 text-lg'
      },
      color: {
        indigo: '',
        blue: '',
        green: '',
        purple: '',
        red: ''
      },
      status: {
        complete: '',
        current: '',
        upcoming: ''
      }
    },
    compoundVariants: [
      // Indigo variants
      { color: 'indigo', status: 'complete', class: 'bg-indigo-600 text-white border-indigo-600' },
      { color: 'indigo', status: 'current', class: 'bg-white text-indigo-600 border-indigo-600' },
      { color: 'indigo', status: 'upcoming', class: 'bg-white text-gray-400 border-gray-300' },
      // Blue variants
      { color: 'blue', status: 'complete', class: 'bg-blue-600 text-white border-blue-600' },
      { color: 'blue', status: 'current', class: 'bg-white text-blue-600 border-blue-600' },
      { color: 'blue', status: 'upcoming', class: 'bg-white text-gray-400 border-gray-300' },
      // Green variants
      { color: 'green', status: 'complete', class: 'bg-green-600 text-white border-green-600' },
      { color: 'green', status: 'current', class: 'bg-white text-green-600 border-green-600' },
      { color: 'green', status: 'upcoming', class: 'bg-white text-gray-400 border-gray-300' },
      // Purple variants
      { color: 'purple', status: 'complete', class: 'bg-purple-600 text-white border-purple-600' },
      { color: 'purple', status: 'current', class: 'bg-white text-purple-600 border-purple-600' },
      { color: 'purple', status: 'upcoming', class: 'bg-white text-gray-400 border-gray-300' },
      // Red variants
      { color: 'red', status: 'complete', class: 'bg-red-600 text-white border-red-600' },
      { color: 'red', status: 'current', class: 'bg-white text-red-600 border-red-600' },
      { color: 'red', status: 'upcoming', class: 'bg-white text-gray-400 border-gray-300' }
    ],
    defaultVariants: {
      size: 'md',
      color: 'indigo',
      status: 'upcoming'
    }
  }
)

const progressTextVariants = cva(
  '',
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
)

const progressPanelVariants = cva(
  '',
  {
    variants: {
      size: {
        sm: 'px-4 py-3',
        md: 'px-6 py-4',
        lg: 'px-8 py-5'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
)

const progressConnectorVariants = cva(
  'h-0.5 w-full',
  {
    variants: {
      color: {
        indigo: '',
        blue: '',
        green: '',
        purple: '',
        red: ''
      },
      isComplete: {
        true: '',
        false: 'bg-gray-200'
      }
    },
    compoundVariants: [
      { color: 'indigo', isComplete: true, class: 'bg-indigo-600' },
      { color: 'blue', isComplete: true, class: 'bg-blue-600' },
      { color: 'green', isComplete: true, class: 'bg-green-600' },
      { color: 'purple', isComplete: true, class: 'bg-purple-600' },
      { color: 'red', isComplete: true, class: 'bg-red-600' }
    ],
    defaultVariants: {
      color: 'indigo',
      isComplete: false
    }
  }
)

interface ProgressBarProps extends BaseComponentProps,
  VariantProps<typeof progressStepVariants>,
  VariantProps<typeof progressTextVariants> {
  steps: ProgressStep[]
  variant?: 'simple' | 'bullets' | 'bullets-text' | 'circles' | 'circles-text' | 'panels' | 'panels-border' | 'progress-bar'
  orientation?: 'horizontal' | 'vertical'
  showConnectors?: boolean
}

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ({
    className,
    steps,
    variant = 'simple',
    orientation = 'horizontal',
    showConnectors = true,
    size = 'md',
    color = 'indigo',
    ...props
  }, ref) => {
    const currentStepIndex = steps.findIndex(step => step.status === 'current')
    const completedSteps = steps.filter(step => step.status === 'complete').length
    const progressPercentage = (completedSteps / steps.length) * 100


    const renderSimpleStep = (step: ProgressStep, index: number) => {
      const isLast = index === steps.length - 1

      return (
        <li key={step.id} className={cn('relative', !isLast && 'pr-8 sm:pr-20')}>
          {!isLast && showConnectors && (
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className={progressConnectorVariants({ 
                color, 
                isComplete: step.status === 'complete' 
              })} />
            </div>
          )}
          <div className="relative flex items-center justify-center">
            {step.href ? (
              <a href={step.href} className={progressStepVariants({
                size,
                color,
                status: step.status
              })}>
                {step.status === 'complete' ? (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <span>{index + 1}</span>
                )}
              </a>
            ) : (
              <button onClick={step.onClick} className={progressStepVariants({
                size,
                color,
                status: step.status
              })}>
                {step.status === 'complete' ? (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <span>{index + 1}</span>
                )}
              </button>
            )}
          </div>
        </li>
      )
    }

    const getSizeClasses = () => ({
      step: progressStepVariants({ size }),
      text: progressTextVariants({ size }),
      panel: progressPanelVariants({ size })
    })

    const getColorClasses = (status: 'complete' | 'current' | 'upcoming') => {
      return progressStepVariants({ color, status, size })
    }

    const renderBulletStep = (step: ProgressStep, index: number) => {
      const isLast = index === steps.length - 1
      const sizeClasses = getSizeClasses()
      const showText = variant === 'bullets-text'

      return (
        <li key={step.id} className={cn('relative', !isLast && 'pb-10')}>
          {!isLast && showConnectors && (
            <div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true" />
          )}
          <div className="group relative flex items-start">
            <span className="flex h-9 items-center">
              <span className={cn(
                'relative z-10',
                getColorClasses(step.status)
              )}>
                {step.status === 'complete' ? (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <span>{index + 1}</span>
                )}
              </span>
            </span>
            {showText && (
              <span className={cn('ml-4 flex min-w-0 flex-col', sizeClasses.text)}>
                <span className={cn(
                  'font-medium',
                  step.status === 'complete' ? 'text-gray-900' : 
                  step.status === 'current' ? `text-${color}-600` : 'text-gray-500'
                )}>
                  {step.name}
                </span>
                {step.description && (
                  <span className="text-sm text-gray-500">{step.description}</span>
                )}
              </span>
            )}
          </div>
        </li>
      )
    }

    const renderCircleStep = (step: ProgressStep, index: number) => {
      const showText = variant === 'circles-text'
      const sizeClasses = getSizeClasses()

      return (
        <div key={step.id} className="flex flex-col items-center">
          <div className={cn(
            getColorClasses(step.status)
          )}>
            {step.status === 'complete' ? (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <span>{index + 1}</span>
            )}
          </div>
          {showText && (
            <div className="mt-2 text-center">
              <div className={cn(
                'font-medium',
                sizeClasses.text,
                step.status === 'complete' ? 'text-gray-900' : 
                step.status === 'current' ? `text-${color}-600` : 'text-gray-500'
              )}>
                {step.name}
              </div>
              {step.description && (
                <div className="text-sm text-gray-500">{step.description}</div>
              )}
            </div>
          )}
        </div>
      )
    }

    const renderPanelStep = (step: ProgressStep, index: number) => {
      const sizeClasses = getSizeClasses()
      const hasBorder = variant === 'panels-border'

      return (
        <div key={step.id} className={cn(
          'rounded-lg',
          hasBorder && 'border',
          step.status === 'complete' 
            ? `bg-${color}-600 text-white` + (hasBorder ? ` border-${color}-600` : '')
            : step.status === 'current'
            ? `bg-${color}-50 text-${color}-600` + (hasBorder ? ` border-${color}-200` : '')
            : 'bg-gray-50 text-gray-500' + (hasBorder ? ' border-gray-200' : ''),
          sizeClasses.panel
        )}>
          <div className="flex items-center">
            <div className={cn(
              'flex items-center justify-center rounded-full mr-3',
              step.status === 'complete' ? 'bg-white/20' : `bg-${color}-100`,
              size === 'sm' ? 'h-6 w-6' : size === 'lg' ? 'h-10 w-10' : 'h-8 w-8'
            )}>
              {step.status === 'complete' ? (
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <span className={cn(
                  'font-medium',
                  size === 'sm' ? 'text-xs' : 'text-sm'
                )}>
                  {index + 1}
                </span>
              )}
            </div>
            <div>
              <div className={cn('font-medium', sizeClasses.text)}>{step.name}</div>
              {step.description && (
                <div className="text-sm opacity-75">{step.description}</div>
              )}
            </div>
          </div>
        </div>
      )
    }

    const renderProgressBarStep = () => (
      <div className="w-full">
        <div className="mb-4">
          <div className="flex justify-between text-sm font-medium text-gray-700">
            <span>Progress</span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <div className="mt-1 flex h-2 overflow-hidden rounded-full bg-gray-200">
            <div
              className={cn('flex flex-col justify-center overflow-hidden text-xs text-white text-center whitespace-nowrap transition duration-500', `bg-${color}-600`)}
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="text-center">
              <div className={cn(
                'text-sm font-medium',
                step.status === 'complete' ? 'text-gray-900' : 
                step.status === 'current' ? `text-${color}-600` : 'text-gray-500'
              )}>
                {step.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    )

    if (variant === 'progress-bar') {
      return (
        <div ref={ref} className={cn('w-full', className)} {...props}>
          {renderProgressBarStep()}
        </div>
      )
    }

    if (variant === 'bullets' || variant === 'bullets-text') {
      return (
        <nav ref={ref} className={className} {...props}>
          <ol className="space-y-6">
            {steps.map(renderBulletStep)}
          </ol>
        </nav>
      )
    }

    if (variant === 'circles' || variant === 'circles-text') {
      return (
        <nav ref={ref} className={cn('flex justify-between', className)} {...props}>
          {steps.map(renderCircleStep)}
        </nav>
      )
    }

    if (variant === 'panels' || variant === 'panels-border') {
      return (
        <nav ref={ref} className={cn('space-y-4', className)} {...props}>
          {steps.map(renderPanelStep)}
        </nav>
      )
    }

    // Default simple variant
    return (
      <nav ref={ref} className={className} {...props}>
        <ol className="flex items-center">
          {steps.map(renderSimpleStep)}
        </ol>
      </nav>
    )
  }
)

ProgressBar.displayName = 'ProgressBar'

export { progressStepVariants, progressTextVariants, progressPanelVariants, progressConnectorVariants }
export type { ProgressBarProps }