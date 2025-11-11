import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Textarea } from './Textarea'

describe('Textarea', () => {
  describe('Rendering', () => {
    it('renders textarea element', () => {
      render(<Textarea />)
      expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    it('renders with label', () => {
      render(<Textarea label="Description" />)
      expect(screen.getByLabelText('Description')).toBeInTheDocument()
    })

    it('renders with placeholder', () => {
      render(<Textarea placeholder="Enter description" />)
      expect(screen.getByPlaceholderText('Enter description')).toBeInTheDocument()
    })

    it('applies custom className', () => {
      render(<Textarea className="custom-class" data-testid="textarea" />)
      expect(screen.getByTestId('textarea')).toHaveClass('custom-class')
    })
  })

  describe('Help Text', () => {
    it('renders help text', () => {
      render(<Textarea label="Description" helpText="Enter a detailed description" />)
      expect(screen.getByText('Enter a detailed description')).toBeInTheDocument()
    })

    it('associates help text with textarea', () => {
      render(<Textarea label="Description" helpText="Help text" />)
      const textarea = screen.getByRole('textbox')
      const helpId = textarea.getAttribute('aria-describedby')
      expect(helpId).toBeTruthy()
      expect(screen.getByText('Help text')).toHaveAttribute('id', helpId)
    })
  })

  describe('Error State', () => {
    it('renders error message', () => {
      render(<Textarea label="Description" error="Description is required" />)
      expect(screen.getByText('Description is required')).toBeInTheDocument()
    })

    it('marks textarea as invalid', () => {
      render(<Textarea label="Description" error="Error" />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('aria-invalid', 'true')
    })

    it('associates error with textarea', () => {
      render(<Textarea label="Description" error="Error message" />)
      const textarea = screen.getByRole('textbox')
      const errorId = textarea.getAttribute('aria-describedby')
      expect(errorId).toBeTruthy()
      expect(screen.getByText('Error message')).toHaveAttribute('id', errorId)
    })

    it('applies error styles', () => {
      render(<Textarea label="Description" error="Error" />)
      expect(screen.getByText('Error')).toHaveClass('text-red-600')
    })
  })

  describe('Character Count', () => {
    it('shows character count when maxLength is provided', () => {
      render(<Textarea label="Description" maxLength={100} />)
      expect(screen.getByText('0 / 100')).toBeInTheDocument()
    })

    it('updates character count as user types', async () => {
      const user = userEvent.setup()
      render(<Textarea label="Description" maxLength={100} />)

      const textarea = screen.getByRole('textbox')
      await user.type(textarea, 'Hello')

      expect(screen.getByText('5 / 100')).toBeInTheDocument()
    })

    it('shows warning when approaching limit', async () => {
      const user = userEvent.setup()
      render(<Textarea label="Description" maxLength={10} />)

      const textarea = screen.getByRole('textbox')
      await user.type(textarea, '123456789')

      expect(screen.getByText('9 / 10')).toBeInTheDocument()
    })
  })

  describe('Rows', () => {
    it('accepts custom rows', () => {
      render(<Textarea label="Description" rows={10} />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('rows', '10')
    })

    it('defaults to 3 rows', () => {
      render(<Textarea label="Description" />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('rows', '3')
    })
  })

  describe('Resize', () => {
    it('allows vertical resize by default', () => {
      render(<Textarea label="Description" data-testid="textarea" />)
      const textarea = screen.getByTestId('textarea')
      expect(textarea).toHaveClass('resize-y')
    })

    it('allows no resize', () => {
      render(<Textarea label="Description" resize="none" data-testid="textarea" />)
      const textarea = screen.getByTestId('textarea')
      expect(textarea).toHaveClass('resize-none')
    })

    it('allows both horizontal and vertical resize', () => {
      render(<Textarea label="Description" resize="both" data-testid="textarea" />)
      const textarea = screen.getByTestId('textarea')
      expect(textarea).toHaveClass('resize')
    })
  })

  describe('States', () => {
    it('can be disabled', () => {
      render(<Textarea label="Description" disabled />)
      expect(screen.getByRole('textbox')).toBeDisabled()
    })

    it('can be required', () => {
      render(<Textarea label="Description" required />)
      expect(screen.getByRole('textbox')).toBeRequired()
    })

    it('can be readonly', () => {
      render(<Textarea label="Description" readOnly />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('readonly')
    })
  })

  describe('Interactions', () => {
    it('calls onChange when text is entered', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(<Textarea onChange={handleChange} />)

      await user.type(screen.getByRole('textbox'), 'test')
      expect(handleChange).toHaveBeenCalled()
    })

    it('accepts controlled value', () => {
      const { rerender } = render(<Textarea value="initial" readOnly />)
      expect(screen.getByRole('textbox')).toHaveValue('initial')

      rerender(<Textarea value="updated" readOnly />)
      expect(screen.getByRole('textbox')).toHaveValue('updated')
    })

    it('supports multiline input', async () => {
      const user = userEvent.setup()
      render(<Textarea label="Description" />)

      const textarea = screen.getByRole('textbox')
      await user.type(textarea, 'Line 1{Enter}Line 2{Enter}Line 3')

      expect(textarea).toHaveValue('Line 1\nLine 2\nLine 3')
    })

    it('respects maxLength attribute', async () => {
      const user = userEvent.setup()
      render(<Textarea label="Description" maxLength={10} />)

      const textarea = screen.getByRole('textbox')
      await user.type(textarea, '12345678901234567890')

      // Should only accept 10 characters
      expect(textarea).toHaveValue('1234567890')
    })
  })

  describe('Corner Element', () => {
    it('renders corner element', () => {
      render(<Textarea label="Description" corner="Optional" />)
      expect(screen.getByText('Optional')).toBeInTheDocument()
    })

    it('displays corner element next to label', () => {
      render(<Textarea label="Description" corner="Optional" />)
      const label = screen.getByText('Description')
      const corner = screen.getByText('Optional')
      expect(label.parentElement).toBe(corner.parentElement)
    })
  })

  describe('Forwarded Ref', () => {
    it('forwards ref to textarea element', () => {
      const ref = vi.fn()
      render(<Textarea ref={ref} />)
      expect(ref).toHaveBeenCalledWith(expect.any(HTMLTextAreaElement))
    })
  })

  describe('Accessibility', () => {
    it('associates label with textarea', () => {
      render(<Textarea label="Description" />)
      const textarea = screen.getByRole('textbox')
      const label = screen.getByText('Description')
      expect(textarea).toHaveAttribute('id')
      expect(label).toHaveAttribute('for', textarea.getAttribute('id'))
    })

    it('is keyboard accessible', async () => {
      const user = userEvent.setup()
      render(<Textarea />)

      const textarea = screen.getByRole('textbox')
      await user.tab()
      expect(textarea).toHaveFocus()
    })

    it('supports keyboard navigation within text', async () => {
      const user = userEvent.setup()
      render(<Textarea value="Test text" readOnly />)

      const textarea = screen.getByRole('textbox')
      textarea.focus()

      // Arrow keys should work
      await user.keyboard('{ArrowRight}')
      expect(textarea).toHaveFocus()
    })
  })

  describe('ID Generation', () => {
    it('generates id from label when id not provided', () => {
      render(<Textarea label="User Comments" />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('id', 'user-comments')
    })

    it('uses provided id', () => {
      render(<Textarea id="custom-id" label="Description" />)
      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('id', 'custom-id')
    })
  })

  describe('Edge Cases', () => {
    it('handles very long text', () => {
      const longText = 'a'.repeat(1000)
      render(<Textarea value={longText} readOnly />)
      expect(screen.getByRole('textbox')).toHaveValue(longText)
    })

    it('handles empty value', () => {
      render(<Textarea value="" />)
      expect(screen.getByRole('textbox')).toHaveValue('')
    })

    it('handles undefined value', () => {
      render(<Textarea />)
      expect(screen.getByRole('textbox')).toHaveValue('')
    })

    it('handles both helpText and error', () => {
      render(
        <Textarea label="Description" helpText="Enter details" error="This field is required" />
      )
      // Error takes precedence
      expect(screen.getByText('This field is required')).toBeInTheDocument()
    })
  })
})
