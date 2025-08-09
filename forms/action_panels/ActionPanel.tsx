import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'
import { Button } from '../../elements/buttons'

export interface ActionPanelAction {
  label: string
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

const actionPanelVariants = cva(
  '',
  {
    variants: {
      variant: {
        card: 'bg-white shadow-sm sm:rounded-lg',
        well: 'bg-gray-50 px-4 py-5 sm:rounded-lg sm:p-6',
        simple: 'px-4 py-5 sm:p-6'
      }
    },
    defaultVariants: {
      variant: 'card'
    }
  }
)

interface ActionPanelProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof actionPanelVariants>, BaseComponentProps {
  title: string
  description?: string
  actions?: ActionPanelAction[]
  actionPosition?: 'bottom' | 'right' | 'top'
}

export const ActionPanel = forwardRef<HTMLDivElement, ActionPanelProps>(
  ({ 
    className,
    title,
    description,
    actions,
    variant,
    actionPosition = 'bottom',
    children,
    ...props
  }, ref) => {
    const renderActions = () => {
      if (!actions || actions.length === 0) return null
      
      return (
        <div className={cn(
          'flex gap-3',
          actionPosition === 'bottom' && 'mt-5',
          actionPosition === 'right' && 'mt-5 sm:mt-0 sm:ml-6 sm:shrink-0 sm:items-center',
          actionPosition === 'top' && 'mb-4'
        )}>
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant || 'primary'}
              onClick={action.onClick}
              disabled={action.disabled}
              size="sm"
            >
              {action.label}
            </Button>
          ))}
        </div>
      )
    }

    const renderContent = () => (
      <>
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        {actionPosition === 'top' && renderActions()}
        
        {(description || children) && (
          <div className={cn(
            actionPosition === 'right' ? 'sm:flex sm:items-start sm:justify-between' : 'mt-2'
          )}>
            <div className={cn(
              'text-sm text-gray-500',
              actionPosition === 'right' ? 'max-w-xl' : 'mt-2 max-w-xl'
            )}>
              {description && <p>{description}</p>}
              {children}
            </div>
            {actionPosition === 'right' && renderActions()}
          </div>
        )}
        
        {actionPosition === 'bottom' && renderActions()}
      </>
    )

    const needsContentWrapper = variant === 'card'
    
    return (
      <div 
        ref={ref}
        className={cn(actionPanelVariants({ variant }), className)}
        {...props}
      >
        {needsContentWrapper ? (
          <div className="px-4 py-5 sm:p-6">
            {renderContent()}
          </div>
        ) : (
          renderContent()
        )}
      </div>
    )
  }
)

ActionPanel.displayName = 'ActionPanel'

export { actionPanelVariants }
export type { ActionPanelProps }