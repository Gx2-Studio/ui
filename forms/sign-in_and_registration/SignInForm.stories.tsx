import type { Meta, StoryObj } from '@storybook/react'
import { SignInForm } from './SignInForm'

const meta: Meta<typeof SignInForm> = {
  title: '2. Forms/SignInForm',
  component: SignInForm,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SignInForm>

const handleSubmit = (data: { email: string; password: string; rememberMe?: boolean }) => {
  console.log('Form submitted:', data)
  alert('Sign in attempted! Check console for form data.')
}

const handleForgotPassword = () => {
  alert('Forgot password clicked!')
}

export const Simple: Story = {
  args: {
    variant: 'simple',
    title: 'Sign in to your account',
    onSubmit: handleSubmit,
  },
}

export const Card: Story = {
  args: {
    variant: 'card',
    title: 'Sign in to your account',
    onSubmit: handleSubmit,
  },
}

export const NoLabels: Story = {
  args: {
    variant: 'no-labels',
    title: 'Sign in to your account',
    onSubmit: handleSubmit,
  },
}

export const Dark: Story = {
  args: {
    variant: 'dark',
    title: 'Sign in to your account',
    onSubmit: handleSubmit,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const SplitScreen: Story = {
  args: {
    variant: 'split-screen',
    title: 'Sign in to your account',
    onSubmit: handleSubmit,
    backgroundImage: 'https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80',
  },
}

export const WithLogo: Story = {
  args: {
    variant: 'simple',
    title: 'Sign in to your account',
    logoSrc: 'https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600',
    onSubmit: handleSubmit,
  },
}

export const WithSubtitle: Story = {
  args: {
    variant: 'simple',
    title: 'Welcome back',
    subtitle: 'Sign in to access your account',
    onSubmit: handleSubmit,
  },
}

export const WithoutRememberMe: Story = {
  args: {
    variant: 'simple',
    title: 'Sign in to your account',
    showRememberMe: false,
    onSubmit: handleSubmit,
  },
}

export const WithoutForgotPassword: Story = {
  args: {
    variant: 'simple',
    title: 'Sign in to your account',
    showForgotPassword: false,
    onSubmit: handleSubmit,
  },
}

export const CustomLabels: Story = {
  args: {
    variant: 'simple',
    title: 'Sign in to your account',
    submitLabel: 'Log in',
    forgotPasswordLabel: 'Reset password',
    onSubmit: handleSubmit,
    onForgotPassword: handleForgotPassword,
  },
}

export const Loading: Story = {
  args: {
    variant: 'simple',
    title: 'Sign in to your account',
    loading: true,
    onSubmit: handleSubmit,
  },
}

export const WithError: Story = {
  args: {
    variant: 'simple',
    title: 'Sign in to your account',
    error: 'Invalid email or password. Please try again.',
    onSubmit: handleSubmit,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-12 pb-12">
      <div>
        <h3 className="text-lg font-medium text-gray-900 text-center mb-8">Simple Variant</h3>
        <SignInForm
          variant="simple"
          title="Sign in to your account"
          onSubmit={handleSubmit}
        />
      </div>

      <div className="border-t border-gray-200 pt-12">
        <h3 className="text-lg font-medium text-gray-900 text-center mb-8">Card Variant</h3>
        <SignInForm
          variant="card"
          title="Sign in to your account"
          onSubmit={handleSubmit}
        />
      </div>

      <div className="border-t border-gray-200 pt-12">
        <h3 className="text-lg font-medium text-gray-900 text-center mb-8">No Labels Variant</h3>
        <SignInForm
          variant="no-labels"
          title="Sign in to your account"
          onSubmit={handleSubmit}
        />
      </div>

      <div className="border-t border-gray-200 pt-12 bg-gray-900">
        <h3 className="text-lg font-medium text-white text-center mb-8">Dark Variant</h3>
        <SignInForm
          variant="dark"
          title="Sign in to your account"
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  ),
}

export const WithAllFeatures: Story = {
  args: {
    variant: 'card',
    title: 'Welcome back',
    subtitle: 'Sign in to continue to your account',
    logoSrc: 'https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600',
    showRememberMe: true,
    showForgotPassword: true,
    submitLabel: 'Sign in',
    forgotPasswordLabel: 'Forgot your password?',
    onSubmit: handleSubmit,
    onForgotPassword: handleForgotPassword,
  },
}

export const MinimalFeatures: Story = {
  args: {
    variant: 'simple',
    title: 'Sign in',
    showRememberMe: false,
    showForgotPassword: false,
    onSubmit: handleSubmit,
  },
}

export const CompleteExampleSimple: Story = {
  render: () => (
    <SignInForm
      variant="simple"
      title="Sign in to your account"
      logoSrc="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
      showRememberMe={true}
      showForgotPassword={true}
      onSubmit={(data) => {
        console.log('Login attempt:', data)
        alert(`Attempting to sign in as: ${data.email}`)
      }}
      onForgotPassword={() => {
        alert('Redirecting to password reset...')
      }}
    />
  ),
}

export const CompleteExampleCard: Story = {
  render: () => (
    <SignInForm
      variant="card"
      title="Welcome back"
      subtitle="Sign in to continue"
      logoSrc="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
      showRememberMe={true}
      showForgotPassword={true}
      submitLabel="Sign in"
      onSubmit={(data) => {
        console.log('Login attempt:', data)
        alert(`Attempting to sign in as: ${data.email}`)
      }}
      onForgotPassword={() => {
        alert('Redirecting to password reset...')
      }}
    />
  ),
}

export const CompleteExampleDark: Story = {
  render: () => (
    <SignInForm
      variant="dark"
      title="Sign in to your account"
      logoSrc="https://tailwindui.com/plus/img/logos/mark.svg?color=white&shade=500"
      showRememberMe={true}
      showForgotPassword={true}
      onSubmit={(data) => {
        console.log('Login attempt:', data)
        alert(`Attempting to sign in as: ${data.email}`)
      }}
      onForgotPassword={() => {
        alert('Redirecting to password reset...')
      }}
    />
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const CompleteExampleSplitScreen: Story = {
  render: () => (
    <SignInForm
      variant="split-screen"
      title="Sign in to your account"
      subtitle="Welcome back! Please enter your details."
      logoSrc="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
      showRememberMe={true}
      showForgotPassword={true}
      backgroundImage="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
      onSubmit={(data) => {
        console.log('Login attempt:', data)
        alert(`Attempting to sign in as: ${data.email}`)
      }}
      onForgotPassword={() => {
        alert('Redirecting to password reset...')
      }}
    />
  ),
}

export const ErrorState: Story = {
  args: {
    variant: 'card',
    title: 'Sign in to your account',
    error: 'Invalid email or password. Please try again.',
    logoSrc: 'https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600',
    onSubmit: handleSubmit,
  },
}

export const LoadingState: Story = {
  args: {
    variant: 'card',
    title: 'Sign in to your account',
    loading: true,
    logoSrc: 'https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600',
    onSubmit: handleSubmit,
  },
}
