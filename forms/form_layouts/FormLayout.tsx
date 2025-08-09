import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'

export interface FormField {
  id: string
  name: string
  label: string
  type?: 'text' | 'email' | 'password' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'file'
  placeholder?: string
  description?: string
  required?: boolean
  disabled?: boolean
  value?: string
  defaultValue?: string
  options?: Array<{ value: string; label: string }>
  rows?: number
  autoComplete?: string
  colSpan?: 'full' | '1' | '2' | '3' | '4' | '5' | '6'
}

export interface FormSection {
  title: string
  description?: string
  fields: FormField[]
}

const formLayoutContainerVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: '',
        dark: 'bg-gray-900 text-white',
        card: 'bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const formLayoutInputVariants = cva(
  'block w-full rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6',
  {
    variants: {
      variant: {
        default: 'bg-white text-gray-900 outline-gray-300 focus:outline-indigo-600',
        dark: 'bg-white/5 text-white outline-white/10 focus:outline-white',
        card: 'bg-white text-gray-900 outline-gray-300 focus:outline-indigo-600'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const formLayoutLabelVariants = cva(
  'block text-sm/6 font-medium',
  {
    variants: {
      variant: {
        default: 'text-gray-900',
        dark: 'text-white',
        card: 'text-gray-900'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const formLayoutDescriptionVariants = cva(
  'mt-3 text-sm/6',
  {
    variants: {
      variant: {
        default: 'text-gray-600',
        dark: 'text-gray-400',
        card: 'text-gray-600'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const formLayoutSectionVariants = cva(
  'text-base/7 font-semibold',
  {
    variants: {
      variant: {
        default: 'text-gray-900',
        dark: 'text-white',
        card: 'text-gray-900'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const formLayoutCancelButtonVariants = cva(
  'text-sm/6 font-semibold',
  {
    variants: {
      variant: {
        default: 'text-gray-900',
        dark: 'text-gray-300',
        card: 'text-gray-900'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

interface FormLayoutProps extends BaseComponentProps,
  VariantProps<typeof formLayoutContainerVariants> {
  sections: FormSection[]
  layout?: 'stacked' | 'two-column' | 'labels-left'
  onSubmit?: (data: Record<string, any>) => void
  submitLabel?: string
  cancelLabel?: string
  showActions?: boolean
}

export const FormLayout = forwardRef<HTMLFormElement, FormLayoutProps>(
  ({
    className,
    sections,
    layout = 'stacked',
    variant = 'default',
    onSubmit,
    submitLabel = 'Save',
    cancelLabel = 'Cancel',
    showActions = true,
    ...props
  }, ref) => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      if (onSubmit) {
        const formData = new FormData(e.currentTarget as HTMLFormElement)
        const data = Object.fromEntries(formData.entries())
        onSubmit(data)
      }
    }

    const renderField = (field: FormField) => {
      const baseInputClasses = formLayoutInputVariants({ variant })

      const labelClasses = formLayoutLabelVariants({ variant })

      const getColSpanClass = (colSpan?: string) => {
        if (!colSpan || colSpan === 'full') return 'col-span-full'
        if (layout === 'two-column') {
          return colSpan === '1' ? 'sm:col-span-3' : 'sm:col-span-6'
        }
        return `sm:col-span-${colSpan}`
      }

      const fieldWrapper = (children: React.ReactNode) => (
        <div className={getColSpanClass(field.colSpan)}>
          {layout !== 'labels-left' && (
            <label htmlFor={field.id} className={labelClasses}>
              {field.label}
            </label>
          )}
          {layout === 'labels-left' ? (
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
              <label htmlFor={field.id} className={cn(labelClasses, 'sm:mt-px sm:pt-2')}>
                {field.label}
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                {children}
              </div>
            </div>
          ) : (
            <div className="mt-2">
              {children}
            </div>
          )}
          {field.description && (
            <p className={formLayoutDescriptionVariants({ variant })}>
              {field.description}
            </p>
          )}
        </div>
      )

      switch (field.type) {
        case 'textarea':
          return fieldWrapper(
            <textarea
              id={field.id}
              name={field.name}
              rows={field.rows || 3}
              placeholder={field.placeholder}
              required={field.required}
              disabled={field.disabled}
              defaultValue={field.defaultValue}
              className={baseInputClasses}
            />
          )

        case 'select':
          return fieldWrapper(
            <div className="grid grid-cols-1">
              <select
                id={field.id}
                name={field.name}
                required={field.required}
                disabled={field.disabled}
                defaultValue={field.defaultValue}
                className={cn(
                  baseInputClasses,
                  'col-start-1 row-start-1 appearance-none pr-8'
                )}
              >
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <svg
                className={cn('pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end sm:size-4', variant === 'dark' ? 'text-gray-400' : 'text-gray-500')}
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          )

        case 'checkbox':
          return (
            <div className={getColSpanClass(field.colSpan)}>
              <div className="flex gap-3">
                <div className="flex h-6 shrink-0 items-center">
                  <div className="group grid size-4 grid-cols-1">
                    <input
                      id={field.id}
                      name={field.name}
                      type="checkbox"
                      defaultChecked={field.defaultValue === 'true'}
                      required={field.required}
                      disabled={field.disabled}
                      className={cn('col-start-1 row-start-1 appearance-none rounded-sm border checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600', variant === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-300 bg-white')}
                    />
                    <svg
                      fill="none"
                      viewBox="0 0 14 14"
                      className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
                    >
                      <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-checked:opacity-100"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-sm/6">
                  <label htmlFor={field.id} className={labelClasses}>
                    {field.label}
                  </label>
                  {field.description && (
                    <p className={cn(variant === 'dark' ? 'text-gray-400' : 'text-gray-500')}>
                      {field.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )

        case 'file':
          return fieldWrapper(
            <input
              id={field.id}
              name={field.name}
              type="file"
              required={field.required}
              disabled={field.disabled}
              className={baseInputClasses}
            />
          )

        default:
          return fieldWrapper(
            <input
              id={field.id}
              name={field.name}
              type={field.type || 'text'}
              placeholder={field.placeholder}
              required={field.required}
              disabled={field.disabled}
              defaultValue={field.defaultValue}
              autoComplete={field.autoComplete}
              className={baseInputClasses}
            />
          )
      }
    }

    const renderSection = (section: FormSection, index: number) => (
      <div
        key={index}
        className={cn(index < sections.length - 1 && 'border-b pb-12', variant === 'dark' ? 'border-white/10' : 'border-gray-900/10')}
      >
        <h2 className={formLayoutSectionVariants({ variant })}>
          {section.title}
        </h2>
        {section.description && (
          <p className={cn('mt-1 text-sm/6', variant === 'dark' ? 'text-gray-400' : 'text-gray-600')}>
            {section.description}
          </p>
        )}

        <div className={cn(
          'mt-10',
          layout === 'labels-left'
            ? 'space-y-6 sm:space-y-5'
            : layout === 'two-column'
            ? 'grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'
            : 'grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'
        )}>
          {section.fields.map(renderField)}
        </div>
      </div>
    )

    const formContent = (
      <>
        <div className="space-y-12">
          {sections.map(renderSection)}
        </div>

        {showActions && (
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className={formLayoutCancelButtonVariants({ variant })}
            >
              {cancelLabel}
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {submitLabel}
            </button>
          </div>
        )}
      </>
    )

    if (variant === 'card') {
      return (
        <div className={cn('bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl', className)}>
          <form ref={ref} onSubmit={handleSubmit} className="px-4 py-6 sm:p-8" {...props}>
            {formContent}
          </form>
        </div>
      )
    }

    return (
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className={cn(formLayoutContainerVariants({ variant }), className)}
        {...props}
      >
        {formContent}
      </form>
    )
  }
)

FormLayout.displayName = 'FormLayout'

export { formLayoutContainerVariants, formLayoutInputVariants, formLayoutLabelVariants, formLayoutDescriptionVariants, formLayoutSectionVariants, formLayoutCancelButtonVariants }
export type { FormLayoutProps }