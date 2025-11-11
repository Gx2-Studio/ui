import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'
import { EnvelopeIcon } from '@heroicons/react/20/solid'

describe('Button', () => {
  describe('Rendering', () => {
    it('renders with children', () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
    })

    it('renders with default variant and size', () => {
      render(<Button>Default</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-indigo-600') // primary variant
    })

    it('applies custom className', () => {
      render(<Button className="custom-class">Custom</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('custom-class')
    })
  })

  describe('Variants', () => {
    it('renders primary variant', () => {
      render(<Button variant="primary">Primary</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-indigo-600')
    })

    it('renders secondary variant', () => {
      render(<Button variant="secondary">Secondary</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-white')
      expect(button).toHaveClass('ring-1')
    })

    it('renders soft variant', () => {
      render(<Button variant="soft">Soft</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-indigo-100')
    })

    it('renders ghost variant', () => {
      render(<Button variant="ghost">Ghost</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('text-gray-700')
    })
  })

  describe('Sizes', () => {
    it('renders extra small size', () => {
      render(<Button size="xs">XS</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-2', 'py-1', 'text-xs')
    })

    it('renders medium size (default)', () => {
      render(<Button size="md">MD</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-2.5', 'py-1.5', 'text-sm')
    })

    it('renders extra large size', () => {
      render(<Button size="xl">XL</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-3.5', 'py-2.5', 'text-sm')
    })
  })

  describe('Rounded', () => {
    it('renders with small border radius', () => {
      render(<Button rounded="sm">Small</Button>)
      expect(screen.getByRole('button')).toHaveClass('rounded-sm')
    })

    it('renders with medium border radius (default)', () => {
      render(<Button rounded="md">Medium</Button>)
      expect(screen.getByRole('button')).toHaveClass('rounded-md')
    })

    it('renders with full border radius', () => {
      render(<Button rounded="full">Full</Button>)
      expect(screen.getByRole('button')).toHaveClass('rounded-full')
    })
  })

  describe('Icons', () => {
    it('renders with leading icon', () => {
      render(
        <Button leadingIcon={<EnvelopeIcon data-testid="leading-icon" />}>
          With Icon
        </Button>
      )
      expect(screen.getByTestId('leading-icon')).toBeInTheDocument()
      expect(screen.getByRole('button')).toHaveClass('inline-flex', 'items-center')
    })

    it('renders with trailing icon', () => {
      render(
        <Button trailingIcon={<EnvelopeIcon data-testid="trailing-icon" />}>
          With Icon
        </Button>
      )
      expect(screen.getByTestId('trailing-icon')).toBeInTheDocument()
      expect(screen.getByRole('button')).toHaveClass('inline-flex', 'items-center')
    })

    it('renders with both leading and trailing icons', () => {
      render(
        <Button
          leadingIcon={<EnvelopeIcon data-testid="leading-icon" />}
          trailingIcon={<EnvelopeIcon data-testid="trailing-icon" />}
        >
          Both Icons
        </Button>
      )
      expect(screen.getByTestId('leading-icon')).toBeInTheDocument()
      expect(screen.getByTestId('trailing-icon')).toBeInTheDocument()
    })

    it('renders icon-only button with aria-label', () => {
      render(
        <Button
          leadingIcon={<EnvelopeIcon />}
          aria-label="Send email"
        />
      )
      expect(screen.getByRole('button', { name: 'Send email' })).toBeInTheDocument()
    })
  })

  describe('Interactions', () => {
    it('calls onClick when clicked', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(<Button onClick={handleClick}>Click me</Button>)

      await user.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('does not call onClick when disabled', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(<Button onClick={handleClick} disabled>Disabled</Button>)

      await user.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })

    it('respects disabled state', () => {
      render(<Button disabled>Disabled</Button>)
      expect(screen.getByRole('button')).toBeDisabled()
    })
  })

  describe('HTML Attributes', () => {
    it('accepts type attribute', () => {
      render(<Button type="submit">Submit</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
    })

    it('accepts form attribute', () => {
      render(<Button form="my-form">Submit</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('form', 'my-form')
    })

    it('accepts aria-label', () => {
      render(<Button aria-label="Custom label">Button</Button>)
      expect(screen.getByRole('button', { name: 'Custom label' })).toBeInTheDocument()
    })
  })

  describe('Forwarded Ref', () => {
    it('forwards ref to button element', () => {
      const ref = vi.fn()
      render(<Button ref={ref}>Button</Button>)
      expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement))
    })
  })

  describe('Accessibility', () => {
    it('has button role', () => {
      render(<Button>Button</Button>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('is keyboard accessible', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(<Button onClick={handleClick}>Button</Button>)
      const button = screen.getByRole('button')

      button.focus()
      expect(button).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(handleClick).toHaveBeenCalled()
    })

    it('shows focus-visible styles', () => {
      render(<Button>Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('focus-visible:outline')
    })
  })
})
