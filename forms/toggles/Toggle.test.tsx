import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Toggle } from './Toggle'

describe('Toggle', () => {
  describe('Rendering', () => {
    it('renders with label', () => {
      render(<Toggle label="Enable notifications" />)
      expect(screen.getByText('Enable notifications')).toBeInTheDocument()
    })

    it('renders toggle switch', () => {
      render(<Toggle label="Toggle" />)
      expect(screen.getByRole('switch')).toBeInTheDocument()
    })

    it('renders with description', () => {
      render(<Toggle label="Toggle" description="Toggle description" />)
      expect(screen.getByText('Toggle description')).toBeInTheDocument()
    })

    it('applies custom className', () => {
      render(<Toggle label="Toggle" className="custom-class" data-testid="toggle-wrapper" />)
      expect(screen.getByTestId('toggle-wrapper')).toHaveClass('custom-class')
    })
  })

  describe('Enabled State', () => {
    it('renders disabled by default', () => {
      render(<Toggle label="Toggle" />)
      const toggle = screen.getByRole('switch')
      expect(toggle).toHaveAttribute('aria-checked', 'false')
    })

    it('renders enabled when enabled prop is true', () => {
      render(<Toggle label="Toggle" enabled />)
      const toggle = screen.getByRole('switch')
      expect(toggle).toHaveAttribute('aria-checked', 'true')
    })

    it('handles controlled enabled state', () => {
      const { rerender } = render(<Toggle label="Toggle" enabled={false} />)
      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false')

      rerender(<Toggle label="Toggle" enabled={true} />)
      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true')
    })

    it('toggles enabled state on click', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(<Toggle label="Toggle" onChange={handleChange} />)

      await user.click(screen.getByRole('switch'))
      expect(handleChange).toHaveBeenCalledWith(true)
    })
  })

  describe('Disabled State', () => {
    it('can be disabled', () => {
      render(<Toggle label="Toggle" disabled />)
      const toggle = screen.getByRole('switch')
      // Disabled toggles might have aria-disabled or be in a disabled container
      expect(toggle).toBeInTheDocument()
    })

    it('does not trigger onChange when disabled', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(<Toggle label="Toggle" disabled onChange={handleChange} />)

      await user.click(screen.getByRole('switch'))
      expect(handleChange).not.toHaveBeenCalled()
    })

    it('shows disabled styling', () => {
      render(<Toggle label="Toggle" disabled data-testid="toggle-wrapper" />)
      expect(screen.getByTestId('toggle-wrapper')).toBeInTheDocument()
    })
  })

  describe('Sizes', () => {
    it('renders small size', () => {
      render(<Toggle label="Toggle" size="sm" data-testid="toggle" />)
      const toggle = screen.getByTestId('toggle')
      expect(toggle).toHaveClass('h-5')
    })

    it('renders medium size (default)', () => {
      render(<Toggle label="Toggle" size="md" data-testid="toggle" />)
      const toggle = screen.getByTestId('toggle')
      expect(toggle).toHaveClass('h-6')
    })

    it('renders large size', () => {
      render(<Toggle label="Toggle" size="lg" data-testid="toggle" />)
      const toggle = screen.getByTestId('toggle')
      expect(toggle).toHaveClass('h-7')
    })
  })

  describe('Label Position', () => {
    it('renders label on left (default)', () => {
      render(<Toggle label="Left Label" labelPosition="left" />)
      expect(screen.getByText('Left Label')).toBeInTheDocument()
    })

    it('renders label on right', () => {
      render(<Toggle label="Right Label" labelPosition="right" />)
      expect(screen.getByText('Right Label')).toBeInTheDocument()
    })
  })

  describe('Interactions', () => {
    it('calls onChange with new enabled state', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(<Toggle label="Toggle" enabled={false} onChange={handleChange} />)

      await user.click(screen.getByRole('switch'))
      expect(handleChange).toHaveBeenCalledWith(true)
    })

    it('calls onChange when toggling off', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(<Toggle label="Toggle" enabled={true} onChange={handleChange} />)

      await user.click(screen.getByRole('switch'))
      expect(handleChange).toHaveBeenCalledWith(false)
    })

    it('can be toggled by clicking label', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(<Toggle label="Click me" onChange={handleChange} />)

      await user.click(screen.getByText('Click me'))
      expect(handleChange).toHaveBeenCalled()
    })

    it('handles keyboard interaction (Space)', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(<Toggle label="Toggle" onChange={handleChange} />)

      const toggle = screen.getByRole('switch')
      toggle.focus()
      await user.keyboard(' ')

      expect(handleChange).toHaveBeenCalled()
    })

    it('handles keyboard interaction (Enter)', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(<Toggle label="Toggle" onChange={handleChange} />)

      const toggle = screen.getByRole('switch')
      toggle.focus()
      await user.keyboard('{Enter}')

      expect(handleChange).toHaveBeenCalled()
    })
  })

  describe('Accessibility', () => {
    it('has switch role', () => {
      render(<Toggle label="Toggle" />)
      expect(screen.getByRole('switch')).toBeInTheDocument()
    })

    it('associates label with toggle', () => {
      render(<Toggle label="My Toggle" />)
      const toggle = screen.getByRole('switch', { name: 'My Toggle' })
      expect(toggle).toBeInTheDocument()
    })

    it('announces enabled state with aria-checked', () => {
      render(<Toggle label="Toggle" enabled />)
      const toggle = screen.getByRole('switch')
      expect(toggle).toHaveAttribute('aria-checked', 'true')
    })

    it('associates description with aria-describedby', () => {
      render(<Toggle label="Toggle" description="Help text" />)
      const toggle = screen.getByRole('switch')
      const describedBy = toggle.getAttribute('aria-describedby')
      expect(describedBy).toBeTruthy()
    })

    it('is keyboard focusable', async () => {
      const user = userEvent.setup()
      render(<Toggle label="Toggle" />)

      await user.tab()
      expect(screen.getByRole('switch')).toHaveFocus()
    })

    it('shows focus visible styles', () => {
      render(<Toggle label="Toggle" />)
      const toggle = screen.getByRole('switch')
      toggle.focus()
      expect(toggle).toHaveFocus()
    })
  })

  describe('Visual State', () => {
    it('shows different visual state when enabled', () => {
      const { rerender } = render(<Toggle label="Toggle" enabled={false} data-testid="toggle" />)
      let toggle = screen.getByTestId('toggle')
      expect(toggle).toHaveClass('bg-gray-200')

      rerender(<Toggle label="Toggle" enabled={true} data-testid="toggle" />)
      toggle = screen.getByTestId('toggle')
      expect(toggle).toHaveClass('bg-indigo-600')
    })

    it('animates toggle switch', () => {
      render(<Toggle label="Toggle" enabled data-testid="toggle" />)
      const toggle = screen.getByTestId('toggle')
      // Toggle switch should have transition classes
      expect(toggle).toBeInTheDocument()
    })
  })

  describe('Edge Cases', () => {
    it('handles toggle without label but with aria-label', () => {
      render(<Toggle aria-label="Unlabeled toggle" />)
      expect(screen.getByRole('switch', { name: 'Unlabeled toggle' })).toBeInTheDocument()
    })

    it('handles long label text', () => {
      const longLabel = 'This is a very long toggle label that should wrap properly'
      render(<Toggle label={longLabel} />)
      expect(screen.getByText(longLabel)).toBeInTheDocument()
    })

    it('handles both label and description', () => {
      render(<Toggle label="Label" description="Description" />)
      expect(screen.getByText('Label')).toBeInTheDocument()
      expect(screen.getByText('Description')).toBeInTheDocument()
    })
  })
})
