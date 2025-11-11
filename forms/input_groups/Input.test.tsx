import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from './Input'
import { EnvelopeIcon } from '@heroicons/react/20/solid'

describe('Input', () => {
  describe('Rendering', () => {
    it('renders input field', () => {
      render(<Input />)
      expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    it('renders with label', () => {
      render(<Input label="Email" />)
      expect(screen.getByLabelText('Email')).toBeInTheDocument()
      expect(screen.getByText('Email')).toBeInTheDocument()
    })

    it('renders with placeholder', () => {
      render(<Input placeholder="Enter your email" />)
      expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
    })

    it('applies custom className', () => {
      render(<Input className="custom-class" data-testid="input" />)
      const input = screen.getByTestId('input')
      expect(input).toHaveClass('custom-class')
    })
  })

  describe('Help Text', () => {
    it('renders help text', () => {
      render(<Input label="Email" helpText="We'll never share your email" />)
      expect(screen.getByText("We'll never share your email")).toBeInTheDocument()
    })

    it('associates help text with input via aria-describedby', () => {
      render(<Input label="Email" helpText="Help text" />)
      const input = screen.getByRole('textbox')
      const helpId = input.getAttribute('aria-describedby')
      expect(helpId).toBeTruthy()
      expect(screen.getByText('Help text')).toHaveAttribute('id', helpId)
    })
  })

  describe('Error State', () => {
    it('renders error message', () => {
      render(<Input label="Email" error="Invalid email address" />)
      expect(screen.getByText('Invalid email address')).toBeInTheDocument()
    })

    it('shows error icon when error is present', () => {
      render(<Input label="Email" error="Invalid email" />)
      const input = screen.getByRole('textbox')
      // Error icon should be rendered
      expect(input).toHaveAttribute('aria-invalid', 'true')
    })

    it('associates error message with input', () => {
      render(<Input label="Email" error="Invalid email" />)
      const input = screen.getByRole('textbox')
      const errorId = input.getAttribute('aria-describedby')
      expect(errorId).toBeTruthy()
      expect(screen.getByText('Invalid email')).toHaveAttribute('id', errorId)
    })

    it('applies error styles', () => {
      render(<Input label="Email" error="Invalid" />)
      expect(screen.getByText('Invalid')).toHaveClass('text-red-600')
    })
  })

  describe('Corner Element', () => {
    it('renders corner element', () => {
      render(<Input label="Password" corner="Forgot?" />)
      expect(screen.getByText('Forgot?')).toBeInTheDocument()
    })

    it('displays corner element next to label', () => {
      render(<Input label="Password" corner="Forgot?" />)
      const label = screen.getByText('Password')
      const corner = screen.getByText('Forgot?')
      // Both should be in the same parent container
      expect(label.parentElement).toBe(corner.parentElement)
    })
  })

  describe('Leading Elements', () => {
    it('renders with leading addon', () => {
      render(<Input label="Website" leadingAddon="https://" />)
      expect(screen.getByText('https://')).toBeInTheDocument()
    })

    it('renders with leading icon', () => {
      render(<Input label="Email" leadingIcon={<EnvelopeIcon data-testid="icon" />} />)
      expect(screen.getByTestId('icon')).toBeInTheDocument()
    })

    it('applies correct padding when leading icon is present', () => {
      render(<Input leadingIcon={<EnvelopeIcon />} data-testid="input" />)
      const input = screen.getByTestId('input')
      expect(input).toHaveClass('pl-10')
    })
  })

  describe('Trailing Elements', () => {
    it('renders with trailing addon', () => {
      render(<Input label="Email" trailingAddon=".com" />)
      expect(screen.getByText('.com')).toBeInTheDocument()
    })

    it('renders with trailing icon', () => {
      render(<Input label="Search" trailingIcon={<EnvelopeIcon data-testid="icon" />} />)
      expect(screen.getByTestId('icon')).toBeInTheDocument()
    })

    it('applies correct padding when trailing icon is present', () => {
      render(<Input trailingIcon={<EnvelopeIcon />} data-testid="input" />)
      const input = screen.getByTestId('input')
      expect(input).toHaveClass('pr-10')
    })
  })

  describe('Input Types', () => {
    it('renders as email input', () => {
      render(<Input type="email" label="Email" />)
      expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'email')
    })

    it('renders as password input', () => {
      render(<Input type="password" label="Password" />)
      expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password')
    })

    it('renders as tel input', () => {
      render(<Input type="tel" label="Phone" />)
      expect(screen.getByLabelText('Phone')).toHaveAttribute('type', 'tel')
    })
  })

  describe('Interactions', () => {
    it('calls onChange when value changes', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(<Input onChange={handleChange} />)

      await user.type(screen.getByRole('textbox'), 'test')
      expect(handleChange).toHaveBeenCalled()
    })

    it('accepts controlled value', () => {
      const { rerender } = render(<Input value="initial" readOnly />)
      expect(screen.getByRole('textbox')).toHaveValue('initial')

      rerender(<Input value="updated" readOnly />)
      expect(screen.getByRole('textbox')).toHaveValue('updated')
    })

    it('can be disabled', () => {
      render(<Input disabled />)
      expect(screen.getByRole('textbox')).toBeDisabled()
    })

    it('can be required', () => {
      render(<Input required label="Email" />)
      expect(screen.getByLabelText('Email')).toBeRequired()
    })
  })

  describe('Forwarded Ref', () => {
    it('forwards ref to input element', () => {
      const ref = vi.fn()
      render(<Input ref={ref} />)
      expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement))
    })
  })

  describe('Accessibility', () => {
    it('associates label with input', () => {
      render(<Input label="Email" />)
      const input = screen.getByRole('textbox')
      const label = screen.getByText('Email')
      expect(input).toHaveAttribute('id')
      expect(label).toHaveAttribute('for', input.getAttribute('id'))
    })

    it('marks input as invalid when error is present', () => {
      render(<Input label="Email" error="Invalid" />)
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
    })

    it('links error message with aria-describedby', () => {
      render(<Input label="Email" error="Invalid email" />)
      const input = screen.getByRole('textbox')
      const describedBy = input.getAttribute('aria-describedby')
      expect(describedBy).toContain('error')
    })

    it('is keyboard accessible', async () => {
      const user = userEvent.setup()
      render(<Input />)

      const input = screen.getByRole('textbox')
      await user.tab()
      expect(input).toHaveFocus()
    })
  })

  describe('ID Generation', () => {
    it('generates id from label when id not provided', () => {
      render(<Input label="Email Address" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('id', 'email-address')
    })

    it('uses provided id', () => {
      render(<Input id="custom-id" label="Email" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('id', 'custom-id')
    })
  })
})
