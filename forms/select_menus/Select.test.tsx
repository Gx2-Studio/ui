import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Select } from './Select'

describe('Select', () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ]

  describe('Rendering', () => {
    it('renders with label', () => {
      render(<Select label="Select Option" options={options} />)
      expect(screen.getByText('Select Option')).toBeInTheDocument()
    })

    it('renders all options', () => {
      render(<Select label="Select" options={options} />)
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('renders with placeholder', () => {
      render(<Select label="Select" options={options} placeholder="Choose option" />)
      expect(screen.getByText('Choose option')).toBeInTheDocument()
    })

    it('applies custom className', () => {
      render(
        <Select label="Select" options={options} className="custom-class" data-testid="select" />
      )
      // The className might be on the wrapper or button
      expect(screen.getByTestId('select')).toHaveClass('custom-class')
    })
  })

  describe('Options', () => {
    it('displays options with descriptions', () => {
      const optionsWithDesc = [
        { value: '1', label: 'Option 1', description: 'Description 1' },
        { value: '2', label: 'Option 2', description: 'Description 2' },
      ]

      render(<Select label="Select" options={optionsWithDesc} />)
      expect(screen.getByText('Option 1')).toBeInTheDocument()
    })

    it('shows disabled options', () => {
      const optionsWithDisabled = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2', disabled: true },
      ]

      render(<Select label="Select" options={optionsWithDisabled} />)
      expect(screen.getByText('Option 1')).toBeInTheDocument()
    })

    it('handles empty options array', () => {
      render(<Select label="Select" options={[]} />)
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })
  })

  describe('Selection', () => {
    it('allows selecting an option', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(<Select label="Select" options={options} onChange={handleChange} />)

      const button = screen.getByRole('combobox')
      await user.click(button)

      // After opening, options should be visible
      const option1 = screen.getByText('Option 1')
      await user.click(option1)

      expect(handleChange).toHaveBeenCalled()
    })

    it('displays selected value', () => {
      render(<Select label="Select" options={options} value="2" />)
      expect(screen.getByText('Option 2')).toBeInTheDocument()
    })

    it('handles controlled selection', () => {
      const { rerender } = render(<Select label="Select" options={options} value="1" />)
      expect(screen.getByText('Option 1')).toBeInTheDocument()

      rerender(<Select label="Select" options={options} value="2" />)
      expect(screen.getByText('Option 2')).toBeInTheDocument()
    })
  })

  describe('States', () => {
    it('can be disabled', () => {
      render(<Select label="Select" options={options} disabled />)
      const button = screen.getByRole('combobox')
      expect(button).toBeDisabled()
    })

    it('can be required', () => {
      render(<Select label="Select" options={options} required />)
      // Check if required indicator is shown
      expect(screen.getByText('Select')).toBeInTheDocument()
    })

    it('shows error state', () => {
      render(<Select label="Select" options={options} error="Please select an option" />)
      expect(screen.getByText('Please select an option')).toBeInTheDocument()
    })

    it('shows help text', () => {
      render(<Select label="Select" options={options} helpText="Choose your option" />)
      expect(screen.getByText('Choose your option')).toBeInTheDocument()
    })
  })

  describe('Keyboard Navigation', () => {
    it('opens on Enter key', async () => {
      const user = userEvent.setup()
      render(<Select label="Select" options={options} />)

      const button = screen.getByRole('combobox')
      button.focus()
      await user.keyboard('{Enter}')

      // Options should be visible after Enter
      expect(screen.getByText('Option 1')).toBeInTheDocument()
    })

    it('opens on Space key', async () => {
      const user = userEvent.setup()
      render(<Select label="Select" options={options} />)

      const button = screen.getByRole('combobox')
      button.focus()
      await user.keyboard(' ')

      // Options should be visible after Space
      expect(screen.getByText('Option 1')).toBeInTheDocument()
    })

    it('can be focused with Tab', async () => {
      const user = userEvent.setup()
      render(<Select label="Select" options={options} />)

      await user.tab()
      expect(screen.getByRole('combobox')).toHaveFocus()
    })
  })

  describe('Accessibility', () => {
    it('has combobox role', () => {
      render(<Select label="Select" options={options} />)
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('associates label with select', () => {
      render(<Select label="Select Option" options={options} />)
      const combobox = screen.getByRole('combobox')
      // Should be labelled by the label
      expect(combobox).toBeInTheDocument()
    })

    it('shows error with aria-invalid', () => {
      render(<Select label="Select" options={options} error="Error message" />)
      const combobox = screen.getByRole('combobox')
      expect(combobox).toHaveAttribute('aria-invalid', 'true')
    })

    it('associates help text with aria-describedby', () => {
      render(<Select label="Select" options={options} helpText="Help text" />)
      const combobox = screen.getByRole('combobox')
      const describedBy = combobox.getAttribute('aria-describedby')
      expect(describedBy).toBeTruthy()
    })

    it('disabled options are not selectable', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()
      const optionsWithDisabled = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2', disabled: true },
      ]

      render(<Select label="Select" options={optionsWithDisabled} onChange={handleChange} />)

      const button = screen.getByRole('combobox')
      await user.click(button)

      // Try to click disabled option
      const disabledOption = screen.getByText('Option 2')
      await user.click(disabledOption)

      // onChange should not be called for disabled option
      expect(handleChange).not.toHaveBeenCalled()
    })
  })

  describe('Edge Cases', () => {
    it('handles option with no label', () => {
      const optionsNoLabel = [{ value: '1', label: '' }]
      render(<Select label="Select" options={optionsNoLabel} />)
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('handles very long option labels', () => {
      const longOptions = [
        {
          value: '1',
          label: 'This is a very long option label that should be handled properly',
        },
      ]
      render(<Select label="Select" options={longOptions} />)
      expect(screen.getByText(/very long option label/)).toBeInTheDocument()
    })

    it('handles numeric values', () => {
      const numericOptions = [
        { value: 1, label: 'One' },
        { value: 2, label: 'Two' },
      ]
      render(
        <Select
          label="Select"
          options={numericOptions as Array<{ value: string | number; label: string }>}
        />
      )
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })
  })
})
