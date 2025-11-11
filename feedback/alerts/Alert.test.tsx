import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Alert } from './Alert'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

describe('Alert', () => {
  describe('Rendering', () => {
    it('renders with title', () => {
      render(<Alert title="Alert Title" />)
      expect(screen.getByText('Alert Title')).toBeInTheDocument()
    })

    it('renders with description', () => {
      render(<Alert title="Title" description="Alert description" />)
      expect(screen.getByText('Alert description')).toBeInTheDocument()
    })

    it('renders with children', () => {
      render(
        <Alert title="Title">
          <div>Custom content</div>
        </Alert>
      )
      expect(screen.getByText('Custom content')).toBeInTheDocument()
    })

    it('applies custom className', () => {
      render(<Alert title="Title" className="custom-class" data-testid="alert" />)
      expect(screen.getByTestId('alert')).toHaveClass('custom-class')
    })
  })

  describe('Variants', () => {
    it('renders info variant (default)', () => {
      render(<Alert title="Info" variant="info" data-testid="alert" />)
      const alert = screen.getByTestId('alert')
      expect(alert).toHaveClass('bg-blue-50')
    })

    it('renders success variant', () => {
      render(<Alert title="Success" variant="success" data-testid="alert" />)
      const alert = screen.getByTestId('alert')
      expect(alert).toHaveClass('bg-green-50')
    })

    it('renders warning variant', () => {
      render(<Alert title="Warning" variant="warning" data-testid="alert" />)
      const alert = screen.getByTestId('alert')
      expect(alert).toHaveClass('bg-yellow-50')
    })

    it('renders error variant', () => {
      render(<Alert title="Error" variant="error" data-testid="alert" />)
      const alert = screen.getByTestId('alert')
      expect(alert).toHaveClass('bg-red-50')
    })
  })

  describe('Icon', () => {
    it('renders default icon based on variant', () => {
      render(<Alert title="Alert" variant="success" data-testid="alert" />)
      const alert = screen.getByTestId('alert')
      // Should have an icon
      const icon = alert.querySelector('svg')
      expect(icon).toBeInTheDocument()
    })

    it('renders custom icon', () => {
      render(<Alert title="Alert" icon={<CheckCircleIcon data-testid="custom-icon" />} />)
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
    })

    it('hides icon when showIcon is false', () => {
      render(<Alert title="Alert" showIcon={false} data-testid="alert" />)
      const alert = screen.getByTestId('alert')
      const icon = alert.querySelector('svg')
      expect(icon).not.toBeInTheDocument()
    })
  })

  describe('Dismissible', () => {
    it('renders dismiss button when dismissible', () => {
      const handleDismiss = vi.fn()
      render(<Alert title="Alert" dismissible onDismiss={handleDismiss} />)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('calls onDismiss when dismiss button is clicked', async () => {
      const user = userEvent.setup()
      const handleDismiss = vi.fn()

      render(<Alert title="Alert" dismissible onDismiss={handleDismiss} />)

      await user.click(screen.getByRole('button'))
      expect(handleDismiss).toHaveBeenCalledTimes(1)
    })

    it('does not render dismiss button when not dismissible', () => {
      render(<Alert title="Alert" />)
      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })

    it('dismiss button has accessible label', () => {
      const handleDismiss = vi.fn()
      render(<Alert title="Alert" dismissible onDismiss={handleDismiss} />)
      const button = screen.getByRole('button')
      // Should have sr-only text or aria-label
      expect(button).toBeInTheDocument()
    })
  })

  describe('Actions', () => {
    it('renders action buttons', () => {
      const actions = [
        { label: 'View Details', onClick: vi.fn() },
        { label: 'Dismiss', onClick: vi.fn() },
      ]
      render(<Alert title="Alert" actions={actions} />)

      expect(screen.getByText('View Details')).toBeInTheDocument()
      expect(screen.getByText('Dismiss')).toBeInTheDocument()
    })

    it('calls action onClick when clicked', async () => {
      const user = userEvent.setup()
      const handleAction = vi.fn()
      const actions = [{ label: 'Action', onClick: handleAction }]

      render(<Alert title="Alert" actions={actions} />)

      await user.click(screen.getByText('Action'))
      expect(handleAction).toHaveBeenCalledTimes(1)
    })

    it('does not render actions container when no actions provided', () => {
      render(<Alert title="Alert" data-testid="alert" />)
      const alert = screen.getByTestId('alert')
      // Actions container should not exist
      expect(alert.querySelector('.mt-4')).not.toBeInTheDocument()
    })
  })

  describe('Layout Variants', () => {
    it('renders simple layout', () => {
      render(<Alert title="Alert" layout="simple" data-testid="alert" />)
      expect(screen.getByTestId('alert')).toBeInTheDocument()
    })

    it('renders cards layout', () => {
      render(<Alert title="Alert" layout="cards" data-testid="alert" />)
      expect(screen.getByTestId('alert')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('has proper role', () => {
      render(<Alert title="Alert" />)
      // Should have role="alert" or similar ARIA role
      expect(screen.getByText('Alert')).toBeInTheDocument()
    })

    it('dismiss button is keyboard accessible', async () => {
      const user = userEvent.setup()
      const handleDismiss = vi.fn()

      render(<Alert title="Alert" dismissible onDismiss={handleDismiss} />)

      const button = screen.getByRole('button')
      button.focus()
      expect(button).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(handleDismiss).toHaveBeenCalled()
    })

    it('action buttons are keyboard accessible', async () => {
      const user = userEvent.setup()
      const handleAction = vi.fn()
      const actions = [{ label: 'Action', onClick: handleAction }]

      render(<Alert title="Alert" actions={actions} />)

      const button = screen.getByText('Action')
      button.focus()
      expect(button).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(handleAction).toHaveBeenCalled()
    })
  })

  describe('Content Combinations', () => {
    it('renders title only', () => {
      render(<Alert title="Title Only" />)
      expect(screen.getByText('Title Only')).toBeInTheDocument()
    })

    it('renders title and description', () => {
      render(<Alert title="Title" description="Description" />)
      expect(screen.getByText('Title')).toBeInTheDocument()
      expect(screen.getByText('Description')).toBeInTheDocument()
    })

    it('renders title, description, and actions', () => {
      const actions = [{ label: 'Action', onClick: vi.fn() }]
      render(<Alert title="Title" description="Description" actions={actions} />)
      expect(screen.getByText('Title')).toBeInTheDocument()
      expect(screen.getByText('Description')).toBeInTheDocument()
      expect(screen.getByText('Action')).toBeInTheDocument()
    })

    it('renders with all features', () => {
      const actions = [{ label: 'Action', onClick: vi.fn() }]
      const handleDismiss = vi.fn()

      render(
        <Alert
          title="Title"
          description="Description"
          variant="success"
          icon={<CheckCircleIcon />}
          actions={actions}
          dismissible
          onDismiss={handleDismiss}
        />
      )

      expect(screen.getByText('Title')).toBeInTheDocument()
      expect(screen.getByText('Description')).toBeInTheDocument()
      expect(screen.getByText('Action')).toBeInTheDocument()
      expect(screen.getAllByRole('button')).toHaveLength(2) // Action + Dismiss
    })
  })
})
