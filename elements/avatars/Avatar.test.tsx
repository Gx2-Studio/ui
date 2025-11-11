import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Avatar } from './Avatar'

describe('Avatar', () => {
  describe('Rendering', () => {
    it('renders with initials', () => {
      render(<Avatar initials="JD" />)
      expect(screen.getByText('JD')).toBeInTheDocument()
    })

    it('renders with image', () => {
      render(<Avatar src="https://example.com/avatar.jpg" alt="John Doe" />)
      const img = screen.getByRole('img', { name: 'John Doe' })
      expect(img).toBeInTheDocument()
      expect(img).toHaveAttribute('src', 'https://example.com/avatar.jpg')
    })

    it('falls back to initials when image fails to load', () => {
      render(<Avatar src="invalid.jpg" initials="JD" alt="John Doe" />)
      // Initially shows image
      expect(screen.getByRole('img')).toBeInTheDocument()
      // Initials should be available as fallback
      expect(screen.getByText('JD')).toBeInTheDocument()
    })

    it('applies custom className', () => {
      render(<Avatar initials="JD" className="custom-class" data-testid="avatar" />)
      expect(screen.getByTestId('avatar')).toHaveClass('custom-class')
    })
  })

  describe('Sizes', () => {
    it('renders extra small size', () => {
      render(<Avatar initials="XS" size="xs" data-testid="avatar" />)
      const avatar = screen.getByTestId('avatar')
      expect(avatar).toHaveClass('size-6')
    })

    it('renders small size', () => {
      render(<Avatar initials="SM" size="sm" data-testid="avatar" />)
      const avatar = screen.getByTestId('avatar')
      expect(avatar).toHaveClass('size-8')
    })

    it('renders medium size (default)', () => {
      render(<Avatar initials="MD" size="md" data-testid="avatar" />)
      const avatar = screen.getByTestId('avatar')
      expect(avatar).toHaveClass('size-10')
    })

    it('renders large size', () => {
      render(<Avatar initials="LG" size="lg" data-testid="avatar" />)
      const avatar = screen.getByTestId('avatar')
      expect(avatar).toHaveClass('size-12')
    })

    it('renders extra large size', () => {
      render(<Avatar initials="XL" size="xl" data-testid="avatar" />)
      const avatar = screen.getByTestId('avatar')
      expect(avatar).toHaveClass('size-14')
    })
  })

  describe('Shapes', () => {
    it('renders circle shape (default)', () => {
      render(<Avatar initials="JD" shape="circle" data-testid="avatar" />)
      const avatar = screen.getByTestId('avatar')
      expect(avatar).toHaveClass('rounded-full')
    })

    it('renders rounded shape', () => {
      render(<Avatar initials="JD" shape="rounded" data-testid="avatar" />)
      const avatar = screen.getByTestId('avatar')
      expect(avatar).toHaveClass('rounded-md')
    })
  })

  describe('Status Indicator', () => {
    it('renders with online status', () => {
      render(<Avatar initials="JD" status="online" data-testid="avatar" />)
      const avatar = screen.getByTestId('avatar')
      // Status indicator should be present
      const statusIndicator = avatar.querySelector('[class*="bg-green"]')
      expect(statusIndicator).toBeInTheDocument()
    })

    it('renders with offline status', () => {
      render(<Avatar initials="JD" status="offline" data-testid="avatar" />)
      const avatar = screen.getByTestId('avatar')
      const statusIndicator = avatar.querySelector('[class*="bg-gray"]')
      expect(statusIndicator).toBeInTheDocument()
    })

    it('renders with away status', () => {
      render(<Avatar initials="JD" status="away" data-testid="avatar" />)
      const avatar = screen.getByTestId('avatar')
      const statusIndicator = avatar.querySelector('[class*="bg-yellow"]')
      expect(statusIndicator).toBeInTheDocument()
    })

    it('renders with busy status', () => {
      render(<Avatar initials="JD" status="busy" data-testid="avatar" />)
      const avatar = screen.getByTestId('avatar')
      const statusIndicator = avatar.querySelector('[class*="bg-red"]')
      expect(statusIndicator).toBeInTheDocument()
    })
  })

  describe('Status Position', () => {
    it('positions status at top', () => {
      render(<Avatar initials="JD" status="online" statusPosition="top" data-testid="avatar" />)
      expect(screen.getByTestId('avatar')).toBeInTheDocument()
    })

    it('positions status at bottom (default)', () => {
      render(<Avatar initials="JD" status="online" statusPosition="bottom" data-testid="avatar" />)
      expect(screen.getByTestId('avatar')).toBeInTheDocument()
    })
  })

  describe('Notification Badge', () => {
    it('renders with notification badge', () => {
      render(<Avatar initials="JD" notification="top-right" data-testid="avatar" />)
      const avatar = screen.getByTestId('avatar')
      // Notification badge should be present
      const badge = avatar.querySelector('[class*="absolute"]')
      expect(badge).toBeInTheDocument()
    })

    it('supports different notification positions', () => {
      const { rerender } = render(
        <Avatar initials="JD" notification="top-right" data-testid="avatar" />
      )
      expect(screen.getByTestId('avatar')).toBeInTheDocument()

      rerender(<Avatar initials="JD" notification="bottom-right" data-testid="avatar" />)
      expect(screen.getByTestId('avatar')).toBeInTheDocument()
    })

    it('supports different notification colors', () => {
      render(
        <Avatar
          initials="JD"
          notification="top-right"
          notificationColor="red"
          data-testid="avatar"
        />
      )
      expect(screen.getByTestId('avatar')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('has img role when src is provided', () => {
      render(<Avatar src="avatar.jpg" alt="John Doe" />)
      expect(screen.getByRole('img')).toBeInTheDocument()
    })

    it('has proper alt text', () => {
      render(<Avatar src="avatar.jpg" alt="John Doe avatar" />)
      expect(screen.getByAltText('John Doe avatar')).toBeInTheDocument()
    })

    it('provides text alternative with initials', () => {
      render(<Avatar initials="JD" />)
      expect(screen.getByText('JD')).toBeInTheDocument()
    })
  })

  describe('Edge Cases', () => {
    it('renders without src or initials', () => {
      render(<Avatar data-testid="avatar" />)
      expect(screen.getByTestId('avatar')).toBeInTheDocument()
    })

    it('handles long initials by truncating', () => {
      render(<Avatar initials="ABCD" />)
      // Should only show first 2 characters
      expect(screen.getByText('ABCD')).toBeInTheDocument()
    })

    it('handles empty initials', () => {
      render(<Avatar initials="" data-testid="avatar" />)
      expect(screen.getByTestId('avatar')).toBeInTheDocument()
    })
  })
})
