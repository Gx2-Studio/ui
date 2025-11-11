import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Badge } from './Badge'

describe('Badge', () => {
  describe('Rendering', () => {
    it('renders with children', () => {
      render(<Badge>Badge Text</Badge>)
      expect(screen.getByText('Badge Text')).toBeInTheDocument()
    })

    it('applies custom className', () => {
      render(<Badge className="custom-class">Badge</Badge>)
      const badge = screen.getByText('Badge')
      expect(badge).toHaveClass('custom-class')
    })
  })

  describe('Variants', () => {
    it('renders flat variant (default)', () => {
      render(<Badge variant="flat">Flat</Badge>)
      const badge = screen.getByText('Flat')
      // Flat variant should not have rounded-full
      expect(badge).not.toHaveClass('rounded-full')
    })

    it('renders pill variant', () => {
      render(<Badge variant="pill">Pill</Badge>)
      const badge = screen.getByText('Pill')
      expect(badge).toHaveClass('rounded-full')
    })
  })

  describe('Colors', () => {
    it('renders with gray color (default)', () => {
      render(<Badge color="gray">Gray</Badge>)
      const badge = screen.getByText('Gray')
      expect(badge).toHaveClass('bg-gray-50')
    })

    it('renders with blue color', () => {
      render(<Badge color="blue">Blue</Badge>)
      const badge = screen.getByText('Blue')
      expect(badge).toHaveClass('bg-blue-50')
    })

    it('renders with green color', () => {
      render(<Badge color="green">Green</Badge>)
      const badge = screen.getByText('Green')
      expect(badge).toHaveClass('bg-green-50')
    })

    it('renders with red color', () => {
      render(<Badge color="red">Red</Badge>)
      const badge = screen.getByText('Red')
      expect(badge).toHaveClass('bg-red-50')
    })
  })

  describe('Sizes', () => {
    it('renders extra small size', () => {
      render(<Badge size="xs">XS</Badge>)
      const badge = screen.getByText('XS')
      expect(badge).toHaveClass('px-1.5', 'py-0.5', 'text-xs')
    })

    it('renders small size (default)', () => {
      render(<Badge size="sm">SM</Badge>)
      const badge = screen.getByText('SM')
      expect(badge).toHaveClass('px-2', 'py-1', 'text-xs')
    })

    it('renders medium size', () => {
      render(<Badge size="md">MD</Badge>)
      const badge = screen.getByText('MD')
      expect(badge).toHaveClass('px-2.5', 'py-1.5', 'text-sm')
    })
  })

  describe('Dot Indicator', () => {
    it('renders with dot indicator', () => {
      render(<Badge dot>With Dot</Badge>)
      const badge = screen.getByText('With Dot')
      // Check that dot indicator is rendered
      const dot = badge.querySelector('svg')
      expect(dot).toBeInTheDocument()
    })

    it('renders without dot by default', () => {
      render(<Badge>Without Dot</Badge>)
      const badge = screen.getByText('Without Dot')
      const dot = badge.querySelector('svg')
      expect(dot).not.toBeInTheDocument()
    })
  })

  describe('Removable Badge', () => {
    it('renders remove button when removable', () => {
      const handleRemove = vi.fn()
      render(<Badge removable onRemove={handleRemove}>Removable</Badge>)

      // Should have a remove button
      const removeButton = screen.getByRole('button')
      expect(removeButton).toBeInTheDocument()
    })

    it('calls onRemove when remove button is clicked', async () => {
      const user = userEvent.setup()
      const handleRemove = vi.fn()

      render(<Badge removable onRemove={handleRemove}>Removable</Badge>)

      await user.click(screen.getByRole('button'))
      expect(handleRemove).toHaveBeenCalledTimes(1)
    })

    it('does not render remove button when not removable', () => {
      render(<Badge>Not Removable</Badge>)
      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('remove button has accessible label', () => {
      const handleRemove = vi.fn()
      render(<Badge removable onRemove={handleRemove}>Badge</Badge>)

      const removeButton = screen.getByRole('button')
      // Should have sr-only text or aria-label
      expect(removeButton).toBeInTheDocument()
    })

    it('remove button is keyboard accessible', async () => {
      const user = userEvent.setup()
      const handleRemove = vi.fn()

      render(<Badge removable onRemove={handleRemove}>Badge</Badge>)

      const removeButton = screen.getByRole('button')
      removeButton.focus()
      expect(removeButton).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(handleRemove).toHaveBeenCalled()
    })
  })
})
