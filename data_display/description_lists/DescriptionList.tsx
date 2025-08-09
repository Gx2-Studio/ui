import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'

export interface DescriptionListItem {
  term: string
  description: React.ReactNode | string
  action?: React.ReactNode
}

export interface Attachment {
  name: string
  size: string
  url?: string
  icon?: React.ReactNode
}

const descriptionListContainerVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: '',
        striped: '',
        card: 'bg-white rounded-lg border border-gray-200 p-6',
        dark: 'bg-gray-900'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const descriptionListTitleVariants = cva(
  'text-base/7 font-semibold',
  {
    variants: {
      variant: {
        default: 'text-gray-900',
        striped: 'text-gray-900',
        card: 'text-gray-900',
        dark: 'text-white'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const descriptionListSubtitleVariants = cva(
  'mt-1 max-w-2xl text-sm/6',
  {
    variants: {
      variant: {
        default: 'text-gray-500',
        striped: 'text-gray-500',
        card: 'text-gray-500',
        dark: 'text-gray-300'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const descriptionListItemContainerVariants = cva(
  'px-4 py-6 sm:px-0',
  {
    variants: {
      layout: {
        horizontal: 'sm:grid sm:grid-cols-3 sm:gap-4',
        stacked: ''
      },
      variant: {
        default: '',
        striped: '',
        card: 'px-0',
        dark: ''
      },
      isStriped: {
        true: '',
        false: ''
      }
    },
    compoundVariants: [
      {
        variant: 'striped',
        isStriped: true,
        class: 'bg-gray-50'
      },
      {
        variant: 'dark',
        isStriped: true,
        class: 'bg-gray-800'
      },
      {
        variant: 'card',
        class: 'px-0'
      }
    ],
    defaultVariants: {
      layout: 'horizontal',
      variant: 'default',
      isStriped: false
    }
  }
)

const descriptionListTermVariants = cva(
  'text-sm/6 font-medium',
  {
    variants: {
      variant: {
        default: 'text-gray-900',
        striped: 'text-gray-900',
        card: 'text-gray-900',
        dark: 'text-gray-300'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const descriptionListDescriptionVariants = cva(
  'mt-1 text-sm/6 sm:mt-0',
  {
    variants: {
      layout: {
        horizontal: 'sm:col-span-2',
        stacked: ''
      },
      variant: {
        default: 'text-gray-700',
        striped: 'text-gray-700',
        card: 'text-gray-700',
        dark: 'text-gray-400'
      }
    },
    defaultVariants: {
      layout: 'horizontal',
      variant: 'default'
    }
  }
)

interface DescriptionListProps extends BaseComponentProps,
  VariantProps<typeof descriptionListContainerVariants> {
  items: DescriptionListItem[]
  attachments?: Attachment[]
  title?: string
  subtitle?: string
  layout?: 'stacked' | 'horizontal'
}

export const DescriptionList = forwardRef<HTMLDivElement, DescriptionListProps>(
  ({ 
    className,
    items,
    attachments,
    title,
    subtitle,
    variant = 'default',
    layout = 'horizontal',
    ...props
  }, ref) => {

    return (
      <div
        ref={ref}
        className={cn(descriptionListContainerVariants({ variant }), className)}
        {...props}
      >
        {(title || subtitle) && (
          <div className={cn('px-4 sm:px-0', variant === 'card' && 'px-0')}>
            {title && (
              <h3 className={descriptionListTitleVariants({ variant })}>
                {title}
              </h3>
            )}
            {subtitle && (
              <p className={descriptionListSubtitleVariants({ variant })}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className={cn(
          (title || subtitle) && 'mt-6 border-t',
          variant === 'dark' ? 'border-gray-700' : 'border-gray-100'
        )}>
          <dl className={cn(
            'divide-y',
            variant === 'dark' ? 'divide-gray-700' : 'divide-gray-100'
          )}>
            {items.map((item, index) => (
              <div 
                key={index} 
                className={descriptionListItemContainerVariants({
                  layout,
                  variant,
                  isStriped: variant === 'striped' && index % 2 === 1
                })}
              >
                <dt className={descriptionListTermVariants({ variant })}>
                  {item.term}
                </dt>
                <dd className={descriptionListDescriptionVariants({ layout, variant })}>
                  <div className="flex items-center justify-between">
                    <div>{item.description}</div>
                    {item.action && (
                      <div className="ml-4 flex-shrink-0">
                        {item.action}
                      </div>
                    )}
                  </div>
                </dd>
              </div>
            ))}
            
            {attachments && attachments.length > 0 && (
              <div className={descriptionListItemContainerVariants({ layout, variant })}>
                <dt className={descriptionListTermVariants({ variant })}>
                  Attachments
                </dt>
                <dd className={descriptionListDescriptionVariants({ layout, variant })}>
                  <ul role="list" className={cn(
                    'divide-y rounded-md border',
                    variant === 'dark' ? 'divide-gray-700 border-gray-700' : 'divide-gray-100 border-gray-200'
                  )}>
                    {attachments.map((attachment, index) => (
                      <li key={index} className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                        <div className="flex w-0 flex-1 items-center">
                          {attachment.icon && (
                            <span className={cn(
                              'size-5 shrink-0',
                              variant === 'dark' ? 'text-gray-500' : 'text-gray-400'
                            )}>
                              {attachment.icon}
                            </span>
                          )}
                          <div className={cn('flex min-w-0 flex-1 gap-2', attachment.icon && 'ml-4')}>
                            <span className={cn(
                              'truncate font-medium',
                              variant === 'dark' ? 'text-gray-200' : 'text-gray-900'
                            )}>
                              {attachment.name}
                            </span>
                            <span className={cn(
                              'shrink-0',
                              variant === 'dark' ? 'text-gray-500' : 'text-gray-400'
                            )}>
                              {attachment.size}
                            </span>
                          </div>
                        </div>
                        {attachment.url && (
                          <div className="ml-4 shrink-0">
                            <a 
                              href={attachment.url} 
                              className={cn(
                                'font-medium hover:text-indigo-500',
                                variant === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                              )}
                            >
                              Download
                            </a>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    )
  }
)

DescriptionList.displayName = 'DescriptionList'
export { descriptionListContainerVariants, descriptionListTitleVariants, descriptionListSubtitleVariants, descriptionListItemContainerVariants, descriptionListTermVariants, descriptionListDescriptionVariants }
export type { DescriptionListProps }
