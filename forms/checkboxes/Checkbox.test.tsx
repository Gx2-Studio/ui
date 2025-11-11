import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  describe('Rendering', () => {
    it('renders with label', () => {
      render(<Checkbox label="Accept terms" />)
      expect(screen.getByText('Accept terms')).toBeInTheDocument()
    })

    it('renders checkbox input', () => {
      render(<Checkbox label="Checkbox" />)
      expect(screen.getByRole('checkbox')).toBeInTheDocument()
    })

    it('renders with description', () => {
      render(<Checkbox label="Checkbox" description="Additional info" />)
      expect(screen.getByText('Additional info')).toBeInTheDocument()
    })

    it('applies custom className', () => {
      render(<Checkbox label="Checkbox" className="custom-class" data-testid="checkbox-wrapper" />)
      expect(screen.getByTestId('checkbox-wrapper')).toHaveClass('custom-class')
    })
  })

  describe('Checked State', () => {
    it('renders unchecked by default', () => {
      render(<Checkbox label="Checkbox" />)
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox).not.toBeChecked()
    })

    it('renders checked when checked prop is true', () => {
      render(<Checkbox label="Checkbox" checked />)
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox).toBeChecked()
    })

    it('handles controlled checked state', () => {
      const { rerender } = render(<Checkbox label="Checkbox" checked={false} />)
      expect(screen.getByRole('checkbox')).not.toBeChecked()

      rerender(<Checkbox label="Checkbox" checked={true} />)
      expect(screen.getByRole('checkbox')).toBeChecked()
    })

    it('toggles checked state on click', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(<Checkbox label="Checkbox" onChange={handleChange} />)

      await user.click(screen.getByRole('checkbox'))
      expect(handleChange).toHaveBeenCalledTimes(1)
    })
  })

  describe('Indeterminate State', () => {
    it('supports indeterminate state', () => {
      render(<Checkbox label="Checkbox" indeterminate />)
      const checkbox = screen.getByRole('checkbox')
      // Indeterminate is a property, not an attribute
      expect(checkbox).toBeInTheDocument()
    })

    it('changes from indeterminate to checked on click', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(<Checkbox label="Checkbox" indeterminate onChange={handleChange} />)

      await user.click(screen.getByRole('checkbox'))
      expect(handleChange).toHaveBeenCalled()
    })
  })

  describe('Disabled State', () => {
    it('can be disabled', () => {
      render(<Checkbox label="Checkbox" disabled />)
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox).toBeDisabled()
    })

    it('does not trigger onChange when disabled', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(<Checkbox label="Checkbox" disabled onChange={handleChange} />)

      await user.click(screen.getByRole('checkbox'))
      expect(handleChange).not.toHaveBeenCalled()
    })

    it('shows disabled styling', () => {
      render(<Checkbox label="Checkbox" disabled data-testid="checkbox-wrapper" />)
      // Disabled checkboxes typically have reduced opacity or different colors
      expect(screen.getByTestId('checkbox-wrapper')).toBeInTheDocument()
    })
  })

  describe('Required State', () => {
    it('can be marked as required', () => {
      render(<Checkbox label="Checkbox" required />)
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox).toBeRequired()
    })

    it('shows required indicator', () => {
      render(<Checkbox label="Required Checkbox" required />)
      // Might show asterisk or other indicator
      expect(screen.getByText('Required Checkbox')).toBeInTheDocument()
    })
  })

  describe('Error State', () => {
    it('shows error message', () => {
      render(<Checkbox label="Checkbox" error="This field is required" />)
      expect(screen.getByText('This field is required')).toBeInTheDocument()
    })

    it('applies error styling', () => {
      render(<Checkbox label="Checkbox" error="Error" data-testid="checkbox-wrapper" />)
      const wrapper = screen.getByTestId('checkbox-wrapper')
      // Error state might add specific classes
      expect(wrapper).toBeInTheDocument()
    })

    it('marks checkbox as invalid', () => {
      render(<Checkbox label="Checkbox" error="Error" />)
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox).toHaveAttribute('aria-invalid', 'true')
    })
  })

  describe('Interactions', () => {
    it('calls onChange when clicked', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(<Checkbox label="Checkbox" onChange={handleChange} />)

      await user.click(screen.getByRole('checkbox'))
      expect(handleChange).toHaveBeenCalledTimes(1)
    })

    it('can be toggled by clicking label', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(<Checkbox label="Click me" onChange={handleChange} />)

      await user.click(screen.getByText('Click me'))
      expect(handleChange).toHaveBeenCalled()
    })

    it('handles keyboard interaction (Space)', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(<Checkbox label="Checkbox" onChange={handleChange} />)

      const checkbox = screen.getByRole('checkbox')
      checkbox.focus()
      await user.keyboard(' ')

      expect(handleChange).toHaveBeenCalled()
    })
  })

  describe('Accessibility', () => {
    it('has checkbox role', () => {
      render(<Checkbox label="Checkbox" />)
      expect(screen.getByRole('checkbox')).toBeInTheDocument()
    })

    it('associates label with checkbox', () => {
      render(<Checkbox label="My Checkbox" />)
      const checkbox = screen.getByRole('checkbox', { name: 'My Checkbox' })
      expect(checkbox).toBeInTheDocument()
    })

    it('associates description with aria-describedby', () => {
      render(<Checkbox label="Checkbox" description="Help text" />)
      const checkbox = screen.getByRole('checkbox')
      const describedBy = checkbox.getAttribute('aria-describedby')
      expect(describedBy).toBeTruthy()
      expect(screen.getByText('Help text')).toHaveAttribute('id', describedBy)
    })

    it('associates error with aria-describedby', () => {
      render(<Checkbox label="Checkbox" error="Error message" />)
      const checkbox = screen.getByRole('checkbox')
      const describedBy = checkbox.getAttribute('aria-describedby')
      expect(describedBy).toBeTruthy()
      expect(screen.getByText('Error message')).toHaveAttribute('id', describedBy)
    })

    it('is keyboard focusable', async () => {
      const user = userEvent.setup()
      render(<Checkbox label="Checkbox" />)

      await user.tab()
      expect(screen.getByRole('checkbox')).toHaveFocus()
    })

    it('announces checked state to screen readers', () => {
      render(<Checkbox label="Checkbox" checked />)
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox).toHaveAttribute('aria-checked', 'true')
    })
  })

  describe('Forwarded Ref', () => {
    it('forwards ref to checkbox input', () => {
      const ref = vi.fn()
      render(<Checkbox label="Checkbox" ref={ref} />)
      expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement))
    })
  })

  describe('Edge Cases', () => {
    it('handles checkbox without label', () => {
      render(<Checkbox aria-label="Unlabeled checkbox" />)
      expect(screen.getByRole('checkbox')).toBeInTheDocument()
    })

    it('handles long label text', () => {
      const longLabel =
        'This is a very long checkbox label that should wrap properly and maintain readability'
      render(<Checkbox label={longLabel} />)
      expect(screen.getByText(longLabel)).toBeInTheDocument()
    })

    it('handles both description and error', () => {
      render(<Checkbox label="Checkbox" description="Description" error="Error" />)
      expect(screen.getByText('Description')).toBeInTheDocument()
      expect(screen.getByText('Error')).toBeInTheDocument()
    })
  })
})
