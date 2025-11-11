import { forwardRef, useState } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Switch } from '@headlessui/react'
import { cn } from '../../utils/cn'

const toggleSwitchVariants = cva(
  'relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2',
  {
    variants: {
      size: {
        sm: 'h-5 w-9',
        md: 'h-6 w-11'
      },
      checked: {
        true: 'bg-indigo-600',
        false: 'bg-gray-200'
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
        false: ''
      }
    },
    defaultVariants: {
      size: 'md',
      checked: false,
      disabled: false
    }
  }
)

const toggleThumbVariants = cva(
  'pointer-events-none inline-flex items-center justify-center rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out',
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5'
      },
      checked: {
        true: '',
        false: 'translate-x-0'
      }
    },
    compoundVariants: [
      {
        size: 'sm',
        checked: true,
        class: 'translate-x-4'
      },
      {
        size: 'md',
        checked: true,
        class: 'translate-x-5'
      }
    ],
    defaultVariants: {
      size: 'md',
      checked: false
    }
  }
)

const toggleIconVariants = cva(
  'text-gray-700',
  {
    variants: {
      size: {
        sm: 'size-3',
        md: 'size-3.5'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
)

interface ToggleProps extends VariantProps<typeof toggleSwitchVariants> {
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  label?: string
  description?: string
  labelPosition?: 'left' | 'right'
  srOnly?: string
  icon?: React.ReactNode
}

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  ({
    checked: controlledChecked,
    defaultChecked = false,
    onChange,
    disabled = false,
    label,
    description,
    size = 'md',
    labelPosition = 'right',
    srOnly,
    icon,
    ...props
  }, ref) => {
    const [uncontrolledChecked, setUncontrolledChecked] = useState(defaultChecked)
    const isControlled = controlledChecked !== undefined
    const checked = isControlled ? controlledChecked : uncontrolledChecked
    
    const handleChange = (newChecked: boolean) => {
      if (onChange) {
        onChange(newChecked)
      }
      if (!isControlled) {
        setUncontrolledChecked(newChecked)
      }
    }
    
    const toggleElement = (
      <Switch
        ref={ref}
        checked={checked}
        onChange={handleChange}
        disabled={disabled || undefined}
        className={toggleSwitchVariants({ size, checked, disabled })}
        {...props}
      >
        {srOnly && <span className="sr-only">{srOnly}</span>}
        <span
          aria-hidden="true"
          className={toggleThumbVariants({ size, checked })}
        >
          {icon && (
            <span className={toggleIconVariants({ size })}>
              {icon}
            </span>
          )}
        </span>
      </Switch>
    )
    
    if (!label && !description) {
      return toggleElement
    }
    
    return (
      <Switch.Group as="div" className={cn(
        'flex items-center',
        labelPosition === 'left' && 'flex-row-reverse justify-between'
      )}>
        {toggleElement}
        <div className={cn(
          labelPosition === 'left' ? 'mr-3' : 'ml-3'
        )}>
          {label && (
            <Switch.Label as="label" className="text-sm font-medium text-gray-900 cursor-pointer">
              {label}
            </Switch.Label>
          )}
          {description && (
            <Switch.Description as="p" className="text-sm text-gray-500">
              {description}
            </Switch.Description>
          )}
        </div>
      </Switch.Group>
    )
  }
)

Toggle.displayName = 'Toggle'

export { toggleSwitchVariants, toggleThumbVariants, toggleIconVariants }
export type { ToggleProps }