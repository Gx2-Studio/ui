import { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes } from 'react'

// =============================================================================
// BASE TYPES
// =============================================================================

// Base component props that all components extend
export interface BaseComponentProps {
  className?: string
  children?: ReactNode
}

// =============================================================================
// PRIMITIVE TYPES
// =============================================================================

// Size variants used across components
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type SimpleSize = 'sm' | 'md' | 'lg'

// Color schemes
export type BaseColor = 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'
export type BrandColor = Extract<BaseColor, 'indigo' | 'blue' | 'green' | 'purple' | 'red'>
export type StatusColor = 'success' | 'error' | 'warning' | 'info'

// Position and alignment
export type Position = 'top' | 'right' | 'bottom' | 'left'
export type Alignment = 'left' | 'center' | 'right'
export type NotificationPosition = 
  | 'top-right' 
  | 'top-left' 
  | 'bottom-right' 
  | 'bottom-left' 
  | 'top-center' 
  | 'bottom-center'

// Status indicators
export type Status = 'online' | 'offline' | 'away' | 'busy'
export type TaskStatus = 'complete' | 'current' | 'upcoming' | 'pending'

// Style variants
export type ColorVariant = 'flat' | 'pill' | 'outline'
export type LayoutVariant = 'simple' | 'cards' | 'list' | 'grid'

// =============================================================================
// COMMON INTERFACES
// =============================================================================

// Action button/link interface
export interface BaseAction {
  label: string
  onClick?: () => void
  href?: string
  disabled?: boolean
  icon?: React.ComponentType<{ className?: string }>
}

// Extended action with variant and type
export interface ActionWithVariant extends BaseAction {
  variant?: 'primary' | 'secondary' | 'danger' | 'soft' | 'ghost'
  type?: 'button' | 'link'
}

// Navigation and menu items
export interface NavigationItem {
  name: string
  href?: string
  current?: boolean
  onClick?: () => void
  icon?: React.ComponentType<{ className?: string }>
}

// Dropdown menu item
export interface DropdownItem extends Omit<BaseAction, 'label'> {
  label: string
  divider?: boolean
}

// Breadcrumb navigation
export interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
  onClick?: () => void
}

// Metadata display
export interface MetaItem {
  label?: string
  value: string
  icon?: React.ComponentType<{ className?: string }>
}

// =============================================================================
// FORM INTERFACES
// =============================================================================

// Base form field props
export interface FormFieldProps extends BaseComponentProps {
  label?: string
  error?: string
  helpText?: string
  required?: boolean
}

// Selectable option for dropdowns/selects
export interface SelectableOption {
  id?: string | number
  value: string | number
  label: string
  disabled?: boolean
  description?: string
}

// =============================================================================
// DATA DISPLAY INTERFACES
// =============================================================================

// Table column definition
export interface TableColumn<T = any> {
  key: keyof T | string
  label: string
  sortable?: boolean
  align?: Alignment
  width?: string
  render?: (value: any, item: T, index: number) => ReactNode
}

// List item with avatar
export interface ListItemWithAvatar {
  id: string | number
  name: string
  avatar?: string
  description?: string
  meta?: string
}

// Progress/stepper item
export interface StepItem {
  id: string | number
  name: string
  description?: string
  status: TaskStatus
  href?: string
  onClick?: () => void
}

// =============================================================================
// COMPONENT-SPECIFIC PROPS
// =============================================================================

// Button component
export type ButtonVariant = 'primary' | 'secondary' | 'soft' | 'ghost'
export type ButtonSize = Size
export type ButtonRounded = 'sm' | 'md' | 'lg' | 'full'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, BaseComponentProps {
  variant?: ButtonVariant
  size?: ButtonSize
  rounded?: ButtonRounded
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
}

// Badge component
export type BadgeColor = BaseColor
export type BadgeSize = Extract<Size, 'xs' | 'sm' | 'md'>
export type BadgeVariant = ColorVariant

export interface BadgeProps extends BaseComponentProps {
  color?: BadgeColor
  size?: BadgeSize
  variant?: BadgeVariant
  dot?: boolean
  removable?: boolean
  onRemove?: () => void
}

// Input component
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helpText?: string
  error?: string
  leadingAddon?: ReactNode
  trailingAddon?: ReactNode
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
  corner?: ReactNode
}

// Avatar component
export type AvatarSize = Size
export type AvatarShape = 'circle' | 'rounded'
export type AvatarNotificationPosition = 'top' | 'bottom' | 'top-right' | 'bottom-right'
export type AvatarNotificationColor = Extract<BaseColor, 'gray' | 'red' | 'green' | 'blue' | 'yellow'>

export interface AvatarProps extends BaseComponentProps {
  src?: string
  alt?: string
  size?: AvatarSize
  shape?: AvatarShape
  initials?: string
  status?: Status
  statusPosition?: Extract<Position, 'top' | 'bottom'>
  notification?: AvatarNotificationPosition
  notificationColor?: AvatarNotificationColor
}