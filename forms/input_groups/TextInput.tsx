import { forwardRef, ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { InputHTMLAttributes } from 'react'

const textInputVariants = cva(
  'block text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6',
  {
    variants: {
      variant: {
        default: 'w-full rounded-md bg-white px-3 py-1.5 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:outline-gray-200',
        pill: 'w-full rounded-full bg-white px-4 py-1.5 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:outline-gray-200',
        borderless: 'w-full border-0 border-b border-gray-300 bg-transparent px-0 py-1.5 focus:border-indigo-600 focus:ring-0 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500',
        'with-icon': 'block min-w-0 grow bg-transparent py-1.5 disabled:cursor-not-allowed disabled:text-gray-500',
        'with-shortcut': 'block min-w-0 grow px-3 py-1.5 disabled:cursor-not-allowed disabled:text-gray-500',
        'with-addon': 'block min-w-0 grow py-1.5 disabled:cursor-not-allowed disabled:text-gray-500',
        'with-error': 'col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-10 pl-3 text-red-900 outline-1 -outline-offset-1 outline-red-300 placeholder:text-red-300 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 sm:pr-9',
        'with-trailing-icon': 'col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-10 pl-3 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pr-9 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:outline-gray-200',
        'gray-with-bottom-border': 'peer block w-full bg-gray-50 px-3 py-1.5 text-gray-900 placeholder:text-gray-500 focus:outline-none sm:text-sm/6',
        'inset-label': 'block w-full text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6',
        'overlapping-label': 'peer block w-full bg-transparent px-0 pb-1 pt-2.5 text-gray-900 placeholder:text-transparent focus:outline-none sm:text-sm/6'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof textInputVariants> {
  label?: string
  helpText?: string
  error?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  addon?: ReactNode | string
  addonPosition?: 'left' | 'right'
  shortcut?: string
  containerClassName?: string
  cornerHint?: string
  hideLabel?: boolean
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ 
    className, 
    variant, 
    label,
    helpText,
    error,
    icon,
    iconPosition = 'left',
    addon,
    addonPosition = 'left',
    shortcut,
    containerClassName,
    cornerHint,
    hideLabel = false,
    id,
    ...props 
  }, ref) => {
    const baseInputClasses = 'block text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6'

    // Handle with-icon variant
    if (variant === 'with-icon' && icon) {
      return (
        <div className={containerClassName}>
          {label && (
            <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
              {label}
            </label>
          )}
          <div className={label ? 'mt-2' : ''}>
            <div className="flex rounded-md bg-white px-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              {iconPosition === 'left' && (
                <div className="flex items-center pr-3">
                  {icon}
                </div>
              )}
              <input
                ref={ref}
                id={id}
                className={cn(textInputVariants({ variant }), className)}
                {...props}
              />
              {iconPosition === 'right' && (
                <div className="flex items-center pl-3">
                  {icon}
                </div>
              )}
            </div>
          </div>
          {helpText && <p className="mt-2 text-sm text-gray-600">{helpText}</p>}
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      )
    }

    // Handle with-shortcut variant
    if (variant === 'with-shortcut' && shortcut) {
      return (
        <div className={containerClassName}>
          {label && (
            <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
              {label}
            </label>
          )}
          <div className={label ? 'mt-2' : ''}>
            <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <input
                ref={ref}
                id={id}
                className={cn(textInputVariants({ variant }), className)}
                {...props}
              />
              <div className="flex py-1.5 pr-1.5">
                <kbd className="inline-flex items-center rounded-sm border border-gray-200 px-1 font-sans text-xs text-gray-400">
                  {shortcut}
                </kbd>
              </div>
            </div>
          </div>
          {helpText && <p className="mt-2 text-sm text-gray-600">{helpText}</p>}
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      )
    }

    // Handle with-addon variant
    if (variant === 'with-addon' && addon) {
      return (
        <div className={containerClassName}>
          {label && (
            <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
              {label}
            </label>
          )}
          <div className={label ? 'mt-2' : ''}>
            <div className="flex">
              {addonPosition === 'left' && (
                <div className="flex shrink-0 items-center rounded-l-md bg-white px-3 text-base text-gray-500 outline-1 -outline-offset-1 outline-gray-300 sm:text-sm/6">
                  {addon}
                </div>
              )}
              <input
                ref={ref}
                id={id}
                className={cn(
                  textInputVariants({ variant }),
                  addonPosition === 'left' ? '-ml-px block w-full grow rounded-r-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6' :
                  addonPosition === 'right' ? '-mr-px block w-full grow rounded-l-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6' :
                  'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6',
                  className
                )}
                {...props}
              />
              {addonPosition === 'right' && (
                <div className="flex shrink-0 items-center rounded-r-md bg-white px-3 text-base text-gray-500 outline-1 -outline-offset-1 outline-gray-300 sm:text-sm/6">
                  {addon}
                </div>
              )}
            </div>
          </div>
          {helpText && <p className="mt-2 text-sm text-gray-600">{helpText}</p>}
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      )
    }

    // Handle with-error variant
    if (variant === 'with-error' || error) {
      return (
        <div className={containerClassName}>
          {label && !hideLabel && (
            <div className={cornerHint ? 'flex justify-between' : ''}>
              <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
                {label}
              </label>
              {cornerHint && (
                <span className="text-sm/6 text-gray-500">
                  {cornerHint}
                </span>
              )}
            </div>
          )}
          <div className={label && !hideLabel ? 'mt-2' : ''}>
            <div className="grid grid-cols-1">
              <input
                ref={ref}
                id={id}
                aria-invalid="true"
                aria-describedby={error ? `${id}-error` : undefined}
                className={cn(textInputVariants({ variant: 'with-error' }), className)}
                {...props}
              />
              <svg
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-red-500 sm:size-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-3a1 1 0 0 0-.867.5 1 1 0 1 1-1.731-1A3 3 0 0 1 13 8a3.001 3.001 0 0 1-2 2.83V11a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1 1 1 0 1 0 0-2Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          {helpText && <p className="mt-2 text-sm text-gray-600">{helpText}</p>}
          {error && <p id={`${id}-error`} className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      )
    }

    // Handle with-trailing-icon variant
    if (variant === 'with-trailing-icon' && icon) {
      return (
        <div className={containerClassName}>
          {label && !hideLabel && (
            <div className={cornerHint ? 'flex justify-between' : ''}>
              <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
                {label}
              </label>
              {cornerHint && (
                <span className="text-sm/6 text-gray-500">
                  {cornerHint}
                </span>
              )}
            </div>
          )}
          <div className={label && !hideLabel ? 'mt-2' : ''}>
            <div className="grid grid-cols-1">
              <input
                ref={ref}
                id={id}
                className={cn(textInputVariants({ variant: 'with-trailing-icon' }), className)}
                {...props}
              />
              <div className="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end sm:size-4">
                {icon}
              </div>
            </div>
          </div>
          {helpText && <p className="mt-2 text-sm text-gray-600">{helpText}</p>}
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      )
    }

    // Handle gray-with-bottom-border variant
    if (variant === 'gray-with-bottom-border') {
      return (
        <div className={containerClassName}>
          {label && !hideLabel && (
            <div className={cornerHint ? 'flex justify-between' : ''}>
              <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
                {label}
              </label>
              {cornerHint && (
                <span className="text-sm/6 text-gray-500">
                  {cornerHint}
                </span>
              )}
            </div>
          )}
          <div className={cn('relative', label && !hideLabel ? 'mt-2' : '')}>
            <input
              ref={ref}
              id={id}
              className={cn(textInputVariants({ variant }), className)}
              {...props}
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
            />
          </div>
          {helpText && <p className="mt-2 text-sm text-gray-600">{helpText}</p>}
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      )
    }

    // Handle inset-label variant
    if (variant === 'inset-label') {
      return (
        <div className={containerClassName}>
          <div className="rounded-md bg-white px-3 pt-2.5 pb-1.5 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            {label && (
              <label htmlFor={id} className="block text-xs font-medium text-gray-900">
                {label}
              </label>
            )}
            <input
              ref={ref}
              id={id}
              className={cn(textInputVariants({ variant }), className)}
              {...props}
            />
          </div>
          {helpText && <p className="mt-2 text-sm text-gray-600">{helpText}</p>}
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      )
    }

    // Handle overlapping-label variant
    if (variant === 'overlapping-label') {
      return (
        <div className={containerClassName}>
          <div className="relative">
            {label && (
              <label
                htmlFor={id}
                className="absolute -top-2 left-2 inline-block rounded-lg bg-white px-1 text-xs font-medium text-gray-900"
              >
                {label}
              </label>
            )}
            <input
              ref={ref}
              id={id}
              className={cn(
                baseInputClasses,
                textInputVariants({ variant: 'default' }),
                className
              )}
              {...props}
            />
          </div>
          {helpText && <p className="mt-2 text-sm text-gray-600">{helpText}</p>}
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      )
    }

    // Default variant handling
    return (
      <div className={containerClassName}>
        {label && !hideLabel && (
          <div className={cornerHint ? 'flex justify-between' : ''}>
            <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
              {label}
            </label>
            {cornerHint && (
              <span className="text-sm/6 text-gray-500">
                {cornerHint}
              </span>
            )}
          </div>
        )}
        <div className={label && !hideLabel ? 'mt-2' : ''}>
          <input
            ref={ref}
            id={id}
            className={cn(
              baseInputClasses,
              textInputVariants({ variant }),
              className
            )}
            {...props}
          />
        </div>
        {helpText && <p className="mt-2 text-sm text-gray-600">{helpText}</p>}
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>
    )
  }
)

TextInput.displayName = 'TextInput'

export { textInputVariants }
export type { TextInputProps }