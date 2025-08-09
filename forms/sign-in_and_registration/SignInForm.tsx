import { forwardRef, useState } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'
import { Button } from '../../elements/buttons'

const signInFormContainerVariants = cva(
  'flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8',
  {
    variants: {
      variant: {
        simple: '',
        card: '',
        'no-labels': '',
        dark: 'bg-gray-900',
        'split-screen': 'flex-row'
      }
    },
    defaultVariants: {
      variant: 'simple'
    }
  }
)

const signInFormInputVariants = cva(
  'block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6',
  {
    variants: {
      theme: {
        light: 'bg-white text-gray-900 ring-gray-300 focus:ring-indigo-600',
        dark: 'bg-white/5 text-white ring-white/10 focus:ring-white'
      }
    },
    defaultVariants: {
      theme: 'light'
    }
  }
)

const signInFormLabelVariants = cva(
  'block text-sm font-medium leading-6',
  {
    variants: {
      theme: {
        light: 'text-gray-900',
        dark: 'text-white'
      }
    },
    defaultVariants: {
      theme: 'light'
    }
  }
)

const signInFormTitleVariants = cva(
  'mt-10 text-center text-2xl font-bold leading-9 tracking-tight',
  {
    variants: {
      theme: {
        light: 'text-gray-900',
        dark: 'text-white'
      }
    },
    defaultVariants: {
      theme: 'light'
    }
  }
)

const signInFormSubtitleVariants = cva(
  'mt-2 text-center text-sm',
  {
    variants: {
      theme: {
        light: 'text-gray-600',
        dark: 'text-gray-400'
      }
    },
    defaultVariants: {
      theme: 'light'
    }
  }
)

const signInFormCheckboxVariants = cva(
  'h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600',
  {
    variants: {
      theme: {
        light: '',
        dark: 'border-white/10 bg-white/5'
      }
    },
    defaultVariants: {
      theme: 'light'
    }
  }
)

const signInFormCheckboxLabelVariants = cva(
  'ml-3 block text-sm',
  {
    variants: {
      theme: {
        light: 'text-gray-900',
        dark: 'text-gray-300'
      }
    },
    defaultVariants: {
      theme: 'light'
    }
  }
)

const signInFormForgotPasswordVariants = cva(
  'font-semibold hover:text-indigo-500',
  {
    variants: {
      theme: {
        light: 'text-indigo-600',
        dark: 'text-white'
      }
    },
    defaultVariants: {
      theme: 'light'
    }
  }
)

interface SignInFormProps extends BaseComponentProps,
  VariantProps<typeof signInFormContainerVariants> {
  title?: string
  subtitle?: string
  onSubmit?: (data: { email: string; password: string; rememberMe?: boolean }) => void
  showRememberMe?: boolean
  showForgotPassword?: boolean
  forgotPasswordLabel?: string
  onForgotPassword?: () => void
  submitLabel?: string
  loading?: boolean
  error?: string
  logoSrc?: string
  backgroundImage?: string
}

export const SignInForm = forwardRef<HTMLFormElement, SignInFormProps>(
  ({
    className,
    variant = 'simple',
    title = 'Sign in to your account',
    subtitle,
    onSubmit,
    showRememberMe = true,
    showForgotPassword = true,
    forgotPasswordLabel = 'Forgot your password?',
    onForgotPassword,
    submitLabel = 'Sign in',
    loading = false,
    error,
    logoSrc,
    backgroundImage,
    ...props
  }, ref) => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
      rememberMe: false
    })

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      if (onSubmit) {
        onSubmit(formData)
      }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type, checked } = e.target
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }))
    }

    const isDark = variant === 'dark'
    const isCard = variant === 'card'
    const isNoLabels = variant === 'no-labels'
    const isSplitScreen = variant === 'split-screen'
    const theme = isDark ? 'dark' : 'light'

    const formContent = (
      <form ref={ref} onSubmit={handleSubmit} className="space-y-6" {...props}>
        {error && (
          <div className="rounded-md bg-red-50 p-4">
            <div className="text-sm text-red-700">{error}</div>
          </div>
        )}

        <div>
          {!isNoLabels && (
            <label htmlFor="email" className={signInFormLabelVariants({ theme })}>
              Email address
            </label>
          )}
          <div className={isNoLabels ? '' : 'mt-2'}>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder={isNoLabels ? 'Email address' : 'Enter your email'}
              value={formData.email}
              onChange={handleChange}
              className={signInFormInputVariants({ theme })}
            />
          </div>
        </div>

        <div>
          {!isNoLabels && (
            <label htmlFor="password" className={signInFormLabelVariants({ theme })}>
              Password
            </label>
          )}
          <div className={isNoLabels ? '' : 'mt-2'}>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder={isNoLabels ? 'Password' : 'Enter your password'}
              value={formData.password}
              onChange={handleChange}
              className={signInFormInputVariants({ theme })}
            />
          </div>
        </div>

        {(showRememberMe || showForgotPassword) && (
          <div className="flex items-center justify-between">
            {showRememberMe && (
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className={signInFormCheckboxVariants({ theme })}
                />
                <label htmlFor="remember-me" className={signInFormCheckboxLabelVariants({ theme })}>
                  Remember me
                </label>
              </div>
            )}

            {showForgotPassword && (
              <div className="text-sm leading-6">
                <button
                  type="button"
                  onClick={onForgotPassword}
                  className={signInFormForgotPasswordVariants({ theme })}
                >
                  {forgotPasswordLabel}
                </button>
              </div>
            )}
          </div>
        )}

        <div>
          <Button
            type="submit"
            variant="primary"
            size="md"
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Signing in...' : submitLabel}
          </Button>
        </div>
      </form>
    )

    const headerContent = (
      <>
        {logoSrc && (
          <img
            className="mx-auto h-10 w-auto"
            src={logoSrc}
            alt="Your Company"
          />
        )}
        <h2 className={signInFormTitleVariants({ theme })}>
          {title}
        </h2>
        {subtitle && (
          <p className={signInFormSubtitleVariants({ theme })}>
            {subtitle}
          </p>
        )}
      </>
    )

    if (isSplitScreen) {
      return (
        <div className={cn('flex min-h-full', className)}>
          <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              {headerContent}
              <div className="mt-10">
                {formContent}
              </div>
            </div>
          </div>
          <div className="relative hidden w-0 flex-1 lg:block">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={backgroundImage || "https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"}
              alt=""
            />
          </div>
        </div>
      )
    }

    if (isCard) {
      return (
        <div className={cn('flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8', className)}>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {headerContent}
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
              {formContent}
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className={cn(signInFormContainerVariants({ variant }), className)}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {headerContent}
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {formContent}
        </div>
      </div>
    )
  }
)

SignInForm.displayName = 'SignInForm'

export { 
  signInFormContainerVariants, 
  signInFormInputVariants, 
  signInFormLabelVariants, 
  signInFormTitleVariants, 
  signInFormSubtitleVariants, 
  signInFormCheckboxVariants, 
  signInFormCheckboxLabelVariants, 
  signInFormForgotPasswordVariants 
}
export type { SignInFormProps }