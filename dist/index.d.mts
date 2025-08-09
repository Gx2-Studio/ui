import * as react from 'react';
import react__default, { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { ClassValue } from 'clsx';

interface BaseComponentProps {
    className?: string;
    children?: ReactNode;
}
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type SimpleSize = 'sm' | 'md' | 'lg';
type BaseColor = 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';
type BrandColor = Extract<BaseColor, 'indigo' | 'blue' | 'green' | 'purple' | 'red'>;
type StatusColor = 'success' | 'error' | 'warning' | 'info';
type Position = 'top' | 'right' | 'bottom' | 'left';
type Alignment = 'left' | 'center' | 'right';
type NotificationPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
type Status = 'online' | 'offline' | 'away' | 'busy';
type TaskStatus = 'complete' | 'current' | 'upcoming' | 'pending';
type ColorVariant = 'flat' | 'pill' | 'outline';
type LayoutVariant = 'simple' | 'cards' | 'list' | 'grid';
interface BaseAction {
    label: string;
    onClick?: () => void;
    href?: string;
    disabled?: boolean;
    icon?: React.ComponentType<{
        className?: string;
    }>;
}
interface ActionWithVariant extends BaseAction {
    variant?: 'primary' | 'secondary' | 'danger' | 'soft' | 'ghost';
    type?: 'button' | 'link';
}
interface NavigationItem {
    name: string;
    href?: string;
    current?: boolean;
    onClick?: () => void;
    icon?: React.ComponentType<{
        className?: string;
    }>;
}
interface DropdownItem$1 extends Omit<BaseAction, 'label'> {
    label: string;
    divider?: boolean;
}
interface BreadcrumbItem {
    label: string;
    href?: string;
    current?: boolean;
    onClick?: () => void;
}
interface MetaItem {
    label: string;
    value: string;
    icon?: React.ComponentType<{
        className?: string;
    }>;
}
interface FormFieldProps extends BaseComponentProps {
    label?: string;
    error?: string;
    helpText?: string;
    required?: boolean;
}
interface SelectableOption {
    id?: string | number;
    value: string | number;
    label: string;
    disabled?: boolean;
    description?: string;
}
interface TableColumn$1<T = any> {
    key: keyof T | string;
    label: string;
    sortable?: boolean;
    align?: Alignment;
    width?: string;
    render?: (value: any, item: T, index: number) => ReactNode;
}
interface ListItemWithAvatar {
    id: string | number;
    name: string;
    avatar?: string;
    description?: string;
    meta?: string;
}
interface StepItem {
    id: string | number;
    name: string;
    description?: string;
    status: TaskStatus;
    href?: string;
    onClick?: () => void;
}
type ButtonVariant = 'primary' | 'secondary' | 'soft' | 'ghost';
type ButtonSize = Size;
type ButtonRounded = 'sm' | 'md' | 'lg' | 'full';
interface ButtonProps$1 extends ButtonHTMLAttributes<HTMLButtonElement>, BaseComponentProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    rounded?: ButtonRounded;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
}
type BadgeColor = BaseColor;
type BadgeSize = Extract<Size, 'xs' | 'sm' | 'md'>;
type BadgeVariant = ColorVariant;
interface BadgeProps$1 extends BaseComponentProps {
    color?: BadgeColor;
    size?: BadgeSize;
    variant?: BadgeVariant;
    dot?: boolean;
    removable?: boolean;
    onRemove?: () => void;
}
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    helpText?: string;
    error?: string;
    leadingAddon?: ReactNode;
    trailingAddon?: ReactNode;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
    corner?: ReactNode;
}
type AvatarSize = Size;
type AvatarShape = 'circle' | 'rounded';
type AvatarNotificationPosition = 'top' | 'bottom' | 'top-right' | 'bottom-right';
type AvatarNotificationColor = Extract<BaseColor, 'gray' | 'red' | 'green' | 'blue' | 'yellow'>;
interface AvatarProps$1 extends BaseComponentProps {
    src?: string;
    alt?: string;
    size?: AvatarSize;
    shape?: AvatarShape;
    initials?: string;
    status?: Status;
    statusPosition?: Extract<Position, 'top' | 'bottom'>;
    notification?: AvatarNotificationPosition;
    notificationColor?: AvatarNotificationColor;
}

declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "soft" | "ghost" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    rounded?: "sm" | "md" | "lg" | "full" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants>, BaseComponentProps {
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

declare const buttonOnDarkVariants: (props?: ({
    variant?: "primary" | "secondary" | "soft" | "ghost" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    rounded?: "sm" | "md" | "lg" | "full" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonOnDarkProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonOnDarkVariants>, BaseComponentProps {
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
}
declare const ButtonOnDark: react.ForwardRefExoticComponent<ButtonOnDarkProps & react.RefAttributes<HTMLButtonElement>>;

declare const circularButtonVariants: (props?: ({
    variant?: "primary" | "secondary" | "soft" | "ghost" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface CircularButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof circularButtonVariants>, BaseComponentProps {
    icon: React.ReactNode;
    'aria-label': string;
}
declare const CircularButton: react.ForwardRefExoticComponent<CircularButtonProps & react.RefAttributes<HTMLButtonElement>>;

declare const badgeVariants: (props?: ({
    variant?: "flat" | "pill" | "outline" | null | undefined;
    color?: "gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink" | null | undefined;
    size?: "xs" | "sm" | "md" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>, VariantProps<typeof badgeVariants>, BaseComponentProps {
    dot?: boolean;
    removable?: boolean;
    onRemove?: () => void;
}
declare const Badge: react.ForwardRefExoticComponent<BadgeProps & react.RefAttributes<HTMLSpanElement>>;

declare const badgeOnDarkVariants: (props?: ({
    variant?: "flat" | "pill" | "outline" | null | undefined;
    color?: "gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink" | null | undefined;
    size?: "xs" | "sm" | "md" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeOnDarkProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>, VariantProps<typeof badgeOnDarkVariants>, BaseComponentProps {
    dot?: boolean;
    removable?: boolean;
    onRemove?: () => void;
}
declare const BadgeOnDark: react.ForwardRefExoticComponent<BadgeOnDarkProps & react.RefAttributes<HTMLSpanElement>>;

declare const avatarVariants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    shape?: "rounded" | "circle" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants>, BaseComponentProps {
    src?: string;
    alt?: string;
    initials?: string;
    status?: 'online' | 'offline' | 'away' | 'busy';
    statusPosition?: 'top' | 'bottom';
    notification?: 'top' | 'bottom' | 'top-right' | 'bottom-right';
    notificationColor?: 'gray' | 'red' | 'green' | 'blue' | 'yellow';
}
declare const Avatar: react.ForwardRefExoticComponent<AvatarProps & react.RefAttributes<HTMLDivElement>>;

interface AvatarGroupProps extends BaseComponentProps, VariantProps<typeof avatarGroupVariants> {
    max?: number;
}
declare const avatarGroupVariants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    direction?: "ltr" | "rtl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const AvatarGroup: react.ForwardRefExoticComponent<AvatarGroupProps & react.RefAttributes<HTMLDivElement>>;

declare const buttonGroupVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
    variant?: "default" | "segmented" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof buttonGroupVariants>, BaseComponentProps {
}
declare const ButtonGroup: react.ForwardRefExoticComponent<ButtonGroupProps & react.RefAttributes<HTMLDivElement>>;

interface DropdownItem extends Omit<DropdownItem$1, 'icon'> {
    icon?: React.ReactNode;
}
declare const dropdownVariants: (props?: ({} & class_variance_authority_types.ClassProp) | undefined) => string;
interface DropdownProps extends BaseComponentProps, VariantProps<typeof dropdownVariants> {
    trigger: React.ReactNode;
    items: DropdownItem[];
    align?: 'left' | 'right';
    disabled?: boolean;
}
declare const Dropdown: react.ForwardRefExoticComponent<DropdownProps & react.RefAttributes<HTMLDivElement>>;

declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

declare const textInputVariants: (props?: ({
    variant?: "pill" | "default" | "borderless" | "with-icon" | "with-shortcut" | "with-addon" | "with-error" | "with-trailing-icon" | "gray-with-bottom-border" | "inset-label" | "overlapping-label" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof textInputVariants> {
    label?: string;
    helpText?: string;
    error?: string;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    addon?: ReactNode | string;
    addonPosition?: 'left' | 'right';
    shortcut?: string;
    containerClassName?: string;
    cornerHint?: string;
    hideLabel?: boolean;
}
declare const TextInput: react.ForwardRefExoticComponent<TextInputProps & react.RefAttributes<HTMLInputElement>>;

declare const textareaVariants: (props?: ({
    hasError?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> {
    label?: string;
    helpText?: string;
    error?: string;
    corner?: React.ReactNode;
}
declare const Textarea: react.ForwardRefExoticComponent<TextareaProps & react.RefAttributes<HTMLTextAreaElement>>;

interface SelectOption extends SelectableOption {
    avatar?: string;
}
declare const selectButtonVariants: (props?: ({
    hasError?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SelectProps extends VariantProps<typeof selectButtonVariants> {
    options: SelectOption[];
    value?: string | number;
    onChange?: (value: string | number) => void;
    placeholder?: string;
    label?: string;
    error?: string;
    helpText?: string;
    className?: string;
}
declare const Select: react.ForwardRefExoticComponent<SelectProps & react.RefAttributes<HTMLDivElement>>;
interface NativeSelectProps {
    options: SelectOption[];
    value?: string | number;
    onChange?: (value: string | number) => void;
    placeholder?: string;
    label?: string;
    error?: string;
    helpText?: string;
    disabled?: boolean;
    className?: string;
}
declare const NativeSelect: react.ForwardRefExoticComponent<NativeSelectProps & react.RefAttributes<HTMLSelectElement>>;

interface RadioOption {
    value: string | number;
    label: string;
    description?: string;
    disabled?: boolean;
}
interface RadioGroupProps {
    options: RadioOption[];
    value?: string | number;
    onChange?: (value: string | number) => void;
    label?: string;
    description?: string;
    error?: string;
    layout?: 'vertical' | 'horizontal' | 'cards';
    className?: string;
}
declare const RadioGroup: react.ForwardRefExoticComponent<RadioGroupProps & react.RefAttributes<HTMLDivElement>>;

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    description?: string;
    error?: string;
    position?: 'left' | 'right';
}
declare const Checkbox: react.ForwardRefExoticComponent<CheckboxProps & react.RefAttributes<HTMLInputElement>>;

declare const toggleSwitchVariants: (props?: ({
    size?: "sm" | "md" | null | undefined;
    checked?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ToggleProps extends VariantProps<typeof toggleSwitchVariants> {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
    description?: string;
    labelPosition?: 'left' | 'right';
    srOnly?: string;
    icon?: React.ReactNode;
}
declare const Toggle: react.ForwardRefExoticComponent<ToggleProps & react.RefAttributes<HTMLButtonElement>>;

interface ActionPanelAction {
    label: string;
    onClick?: () => void;
    href?: string;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
}
declare const actionPanelVariants: (props?: ({
    variant?: "simple" | "card" | "well" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ActionPanelProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof actionPanelVariants>, BaseComponentProps {
    title: string;
    description?: string;
    actions?: ActionPanelAction[];
    actionPosition?: 'bottom' | 'right' | 'top';
}
declare const ActionPanel: react.ForwardRefExoticComponent<ActionPanelProps & react.RefAttributes<HTMLDivElement>>;

interface ComboboxOption {
    id: string | number;
    name: string;
    value?: any;
    disabled?: boolean;
    description?: string;
    image?: string;
    status?: {
        color: string;
        label: string;
    };
}
declare const comboboxInputVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
    hasError?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ComboboxProps extends Omit<BaseComponentProps, 'children'>, VariantProps<typeof comboboxInputVariants> {
    label?: string;
    placeholder?: string;
    options: ComboboxOption[];
    value?: ComboboxOption | null;
    onChange?: (option: ComboboxOption | null) => void;
    allowCustom?: boolean;
    displayField?: keyof ComboboxOption;
    searchField?: keyof ComboboxOption;
    error?: string;
    helpText?: string;
}
declare const ComboboxComponent: react.ForwardRefExoticComponent<ComboboxProps & react.RefAttributes<HTMLDivElement>>;

interface FormField {
    id: string;
    name: string;
    label: string;
    type?: 'text' | 'email' | 'password' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'file';
    placeholder?: string;
    description?: string;
    required?: boolean;
    disabled?: boolean;
    value?: string;
    defaultValue?: string;
    options?: Array<{
        value: string;
        label: string;
    }>;
    rows?: number;
    autoComplete?: string;
    colSpan?: 'full' | '1' | '2' | '3' | '4' | '5' | '6';
}
interface FormSection {
    title: string;
    description?: string;
    fields: FormField[];
}
declare const formLayoutContainerVariants: (props?: ({
    variant?: "default" | "card" | "dark" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface FormLayoutProps extends BaseComponentProps, VariantProps<typeof formLayoutContainerVariants> {
    sections: FormSection[];
    layout?: 'stacked' | 'two-column' | 'labels-left';
    onSubmit?: (data: Record<string, any>) => void;
    submitLabel?: string;
    cancelLabel?: string;
    showActions?: boolean;
}
declare const FormLayout: react.ForwardRefExoticComponent<FormLayoutProps & react.RefAttributes<HTMLFormElement>>;

declare const signInFormContainerVariants: (props?: ({
    variant?: "simple" | "card" | "dark" | "no-labels" | "split-screen" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SignInFormProps extends BaseComponentProps, VariantProps<typeof signInFormContainerVariants> {
    title?: string;
    subtitle?: string;
    onSubmit?: (data: {
        email: string;
        password: string;
        rememberMe?: boolean;
    }) => void;
    showRememberMe?: boolean;
    showForgotPassword?: boolean;
    forgotPasswordLabel?: string;
    onForgotPassword?: () => void;
    submitLabel?: string;
    loading?: boolean;
    error?: string;
    logoSrc?: string;
    backgroundImage?: string;
}
declare const SignInForm: react.ForwardRefExoticComponent<SignInFormProps & react.RefAttributes<HTMLFormElement>>;

interface StatItem {
    name: string;
    value: string | number;
    unit?: string;
    change?: string;
    changeType?: 'increase' | 'decrease' | 'neutral';
    icon?: React.ReactNode;
}
declare const statsContainerVariants: (props?: ({
    variant?: "simple" | "cards" | "dark" | "trend" | null | undefined;
    columns?: 1 | 2 | 3 | 4 | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface StatsProps extends BaseComponentProps, VariantProps<typeof statsContainerVariants> {
    stats: StatItem[];
}
declare const Stats: react.ForwardRefExoticComponent<StatsProps & react.RefAttributes<HTMLDivElement>>;

interface DescriptionListItem {
    term: string;
    description: React.ReactNode | string;
    action?: React.ReactNode;
}
interface Attachment {
    name: string;
    size: string;
    url?: string;
    icon?: React.ReactNode;
}
declare const descriptionListContainerVariants: (props?: ({
    variant?: "default" | "card" | "dark" | "striped" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface DescriptionListProps extends BaseComponentProps, VariantProps<typeof descriptionListContainerVariants> {
    items: DescriptionListItem[];
    attachments?: Attachment[];
    title?: string;
    subtitle?: string;
    layout?: 'stacked' | 'horizontal';
}
declare const DescriptionList: react.ForwardRefExoticComponent<DescriptionListProps & react.RefAttributes<HTMLDivElement>>;

interface CalendarEvent {
    id: number | string;
    name: string;
    time?: string;
    datetime?: string;
    href?: string;
}
interface CalendarDay {
    date: string;
    isCurrentMonth?: boolean;
    isToday?: boolean;
    isSelected?: boolean;
    events?: CalendarEvent[];
}
declare const calendarContainerVariants: (props?: ({
    variant?: "month" | "week" | "day" | "year" | "borderless-side-by-side" | "borderless-stacked" | "double" | "small-with-meetings" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface CalendarProps extends VariantProps<typeof calendarContainerVariants> {
    days: CalendarDay[];
    meetings?: CalendarEvent[];
    selectedDay?: CalendarDay | null;
    currentMonth?: string;
    className?: string;
    onDateSelect?: (day: CalendarDay) => void;
    onPreviousMonth?: () => void;
    onNextMonth?: () => void;
}
declare function Calendar({ variant, days, meetings, selectedDay, currentMonth, className, onDateSelect, onPreviousMonth, onNextMonth }: CalendarProps): react_jsx_runtime.JSX.Element;

interface SectionHeadingAction extends ActionWithVariant {
    variant?: 'primary' | 'secondary';
}
type SectionHeadingTab = NavigationItem;
declare const sectionHeadingContainerVariants: (props?: ({
    variant?: "simple" | "with-description" | "with-action" | "with-actions" | "with-tabs" | "with-actions-and-tabs" | "with-inline-tabs" | "with-label" | "with-badge-and-dropdown" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SectionHeadingProps extends VariantProps<typeof sectionHeadingContainerVariants> {
    title: string;
    description?: string;
    action?: SectionHeadingAction;
    actions?: SectionHeadingAction[];
    tabs?: SectionHeadingTab[];
    tabsVariant?: 'default' | 'inline';
    label?: string;
    badge?: {
        text: string;
        variant?: 'default' | 'success' | 'warning' | 'error';
    };
    className?: string;
    children?: react__default.ReactNode;
}
declare function SectionHeading({ title, description, action, actions, tabs, tabsVariant, label, badge, variant, className, children }: SectionHeadingProps): react_jsx_runtime.JSX.Element;

interface PageHeadingAction extends ActionWithVariant {
    variant?: 'primary' | 'secondary';
    hideOnMobile?: boolean;
}
type PageHeadingMeta = MetaItem;
type PageHeadingBreadcrumb = Omit<BreadcrumbItem, 'onClick'>;
declare const pageHeadingContainerVariants: (props?: ({
    variant?: "simple" | "with-actions" | "with-meta-and-actions" | "with-avatar-and-actions" | "with-logo-meta-and-actions" | "with-actions-and-breadcrumbs" | "with-meta-actions-and-breadcrumbs" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface PageHeadingProps extends VariantProps<typeof pageHeadingContainerVariants> {
    title: string;
    subtitle?: string;
    meta?: PageHeadingMeta[];
    actions?: PageHeadingAction[];
    breadcrumbs?: PageHeadingBreadcrumb[];
    avatar?: {
        src: string;
        alt?: string;
    };
    logo?: {
        src: string;
        alt?: string;
    };
    theme?: 'light' | 'dark';
    className?: string;
    children?: react__default.ReactNode;
}
declare function PageHeading({ title, subtitle, meta, actions, breadcrumbs, avatar, logo, variant, theme, className, children }: PageHeadingProps): react_jsx_runtime.JSX.Element;

interface CardHeadingAction extends ActionWithVariant {
    variant?: 'primary' | 'secondary';
}
type CardHeadingDropdownItem = Omit<DropdownItem$1, 'divider' | 'disabled'>;
type CardHeadingMeta = Omit<MetaItem, 'icon'>;
declare const cardHeadingContainerVariants: (props?: ({
    variant?: "simple" | "with-description" | "with-action" | "with-avatar-and-actions" | "with-description-and-action" | "with-avatar-meta-and-dropdown" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface CardHeadingProps extends VariantProps<typeof cardHeadingContainerVariants> {
    title: string;
    description?: string;
    action?: CardHeadingAction;
    actions?: CardHeadingAction[];
    dropdownItems?: CardHeadingDropdownItem[];
    avatar?: {
        src: string;
        alt?: string;
        name?: string;
    };
    meta?: CardHeadingMeta[];
    className?: string;
    children?: react__default.ReactNode;
}
declare function CardHeading({ title, description, action, actions, dropdownItems, avatar, meta, variant, className, children }: CardHeadingProps): react_jsx_runtime.JSX.Element;

declare const cardVariants: (props?: ({
    variant?: "flat" | "default" | "well" | "outlined" | "well-on-gray" | "shadow" | null | undefined;
    padding?: "sm" | "md" | "lg" | "none" | null | undefined;
    bodyVariant?: "gray" | "default" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants>, BaseComponentProps {
    edgeToEdge?: boolean;
}
declare const Card: react.ForwardRefExoticComponent<CardProps & react.RefAttributes<HTMLDivElement>>;

declare const cardHeaderVariants: (props?: ({} & class_variance_authority_types.ClassProp) | undefined) => string;
interface CardHeaderProps extends BaseComponentProps, VariantProps<typeof cardHeaderVariants> {
    title?: string;
    description?: string;
    action?: React.ReactNode;
    avatar?: React.ReactNode;
}
declare const CardHeader: react.ForwardRefExoticComponent<CardHeaderProps & react.RefAttributes<HTMLDivElement>>;

declare const cardBodyVariants: (props?: ({
    variant?: "gray" | "default" | null | undefined;
    padding?: "sm" | "md" | "lg" | "none" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardBodyVariants>, BaseComponentProps {
}
declare const CardBody: react.ForwardRefExoticComponent<CardBodyProps & react.RefAttributes<HTMLDivElement>>;

declare const cardFooterVariants: (props?: ({
    variant?: "gray" | "default" | null | undefined;
    justify?: "center" | "end" | "start" | "between" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardFooterVariants>, BaseComponentProps {
    actions?: React.ReactNode;
}
declare const CardFooter: react.ForwardRefExoticComponent<CardFooterProps & react.RefAttributes<HTMLDivElement>>;

declare const containerVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xl" | "full" | "2xl" | null | undefined;
    padding?: "sm" | "md" | "lg" | "none" | null | undefined;
    center?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ContainerProps extends BaseComponentProps, VariantProps<typeof containerVariants> {
}
declare const Container: react.ForwardRefExoticComponent<ContainerProps & react.RefAttributes<HTMLDivElement>>;

type DividerPosition = 'left' | 'center' | 'right';
type DividerOrientation = 'horizontal' | 'vertical';
declare const dividerVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
    variant?: "simple" | "with-icon" | "with-label" | "with-title" | "with-button" | "with-toolbar" | null | undefined;
    position?: "right" | "left" | "center" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface DividerProps extends BaseComponentProps, VariantProps<typeof dividerVariants> {
    /** The text content to display (for title or label variants) */
    title?: string;
    label?: string;
    /** Position of the content on the divider */
    position?: DividerPosition;
    /** Orientation of the divider */
    orientation?: DividerOrientation;
    /** Icon element to display */
    icon?: React.ReactNode;
    /** Button element to display */
    button?: React.ReactNode;
    /** Toolbar content for complex dividers */
    toolbar?: React.ReactNode;
}
declare const Divider: react.ForwardRefExoticComponent<DividerProps & react.RefAttributes<HTMLDivElement>>;

declare const listContainerVariants: (props?: ({
    variant?: "flat" | "simple" | "card" | "separate" | null | undefined;
    fullWidthMobile?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ListContainerProps extends BaseComponentProps, VariantProps<typeof listContainerVariants> {
    items: React.ReactNode[];
    spacing?: 'sm' | 'md' | 'lg';
    as?: 'ul' | 'ol' | 'div';
}
declare const ListContainer: react.ForwardRefExoticComponent<ListContainerProps & react.RefAttributes<HTMLDivElement | HTMLOListElement | HTMLUListElement>>;

declare const mediaObjectVariants: (props?: ({
    mediaAlignment?: "top" | "bottom" | "center" | null | undefined;
    responsive?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface MediaObjectProps extends BaseComponentProps, VariantProps<typeof mediaObjectVariants> {
    media: React.ReactNode;
    title?: string;
    children: React.ReactNode;
    mediaPosition?: 'left' | 'right';
    spacing?: 'sm' | 'md' | 'lg';
}
declare const MediaObject: react.ForwardRefExoticComponent<MediaObjectProps & react.RefAttributes<HTMLDivElement>>;

declare const breadcrumbsNavVariants: (props?: ({
    variant?: "simple" | "fullWidth" | "contained" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const breadcrumbsListVariants: (props?: ({
    variant?: "simple" | "fullWidth" | "contained" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BreadcrumbsProps extends BaseComponentProps, VariantProps<typeof breadcrumbsNavVariants>, VariantProps<typeof breadcrumbsListVariants> {
    items: BreadcrumbItem[];
    showHome?: boolean;
    homeHref?: string;
    onHomeClick?: () => void;
    separator?: 'chevron' | 'slash' | 'arrow';
}
declare const Breadcrumbs: react.ForwardRefExoticComponent<BreadcrumbsProps & react.RefAttributes<HTMLElement>>;

interface CommandPaletteOption {
    id: string | number;
    name: string;
    description?: string;
    icon?: React.ReactNode;
    badge?: string;
    url?: string;
    group?: string;
    disabled?: boolean;
    onSelect?: () => void;
}
interface CommandPaletteGroup {
    id: string;
    name: string;
    options: CommandPaletteOption[];
}
declare const commandPaletteContainerVariants: (props?: ({
    variant?: "default" | "dark" | "semi-transparent" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const commandPaletteInputVariants: (props?: ({
    variant?: "default" | "dark" | "semi-transparent" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const commandPaletteOptionVariants: (props?: ({
    variant?: "default" | "dark" | "semi-transparent" | null | undefined;
    disabled?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const commandPaletteGroupHeaderVariants: (props?: ({
    variant?: "default" | "dark" | "semi-transparent" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const commandPaletteDescriptionVariants: (props?: ({
    variant?: "default" | "dark" | "semi-transparent" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const commandPaletteBadgeVariants: (props?: ({
    variant?: "default" | "dark" | "semi-transparent" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const commandPaletteEmptyStateVariants: (props?: ({
    variant?: "default" | "dark" | "semi-transparent" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const commandPaletteEmptyIconVariants: (props?: ({
    variant?: "default" | "dark" | "semi-transparent" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const commandPaletteFooterVariants: (props?: ({
    variant?: "default" | "dark" | "semi-transparent" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface CommandPaletteProps extends Omit<BaseComponentProps, 'children'>, VariantProps<typeof commandPaletteContainerVariants> {
    open: boolean;
    onClose: () => void;
    options?: CommandPaletteOption[];
    groups?: CommandPaletteGroup[];
    placeholder?: string;
    emptyMessage?: string;
    showGroups?: boolean;
    showIcons?: boolean;
    footer?: React.ReactNode;
    onOptionSelect?: (option: CommandPaletteOption) => void;
}
declare const CommandPalette: react.ForwardRefExoticComponent<CommandPaletteProps & react.RefAttributes<HTMLDivElement>>;

declare const paginationVariants: (props?: ({
    variant?: "simple" | "card" | "numbered" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface PaginationProps extends BaseComponentProps, VariantProps<typeof paginationVariants> {
    currentPage: number;
    totalPages: number;
    onPageChange?: (page: number) => void;
    onPrevious?: () => void;
    onNext?: () => void;
    showPageNumbers?: boolean;
    showInfo?: boolean;
    totalItems?: number;
    itemsPerPage?: number;
    pageRangeDisplayed?: number;
    previousLabel?: string;
    nextLabel?: string;
    showFirstAndLast?: boolean;
}
declare const Pagination: react.ForwardRefExoticComponent<PaginationProps & react.RefAttributes<HTMLElement | HTMLDivElement>>;

interface TabItem {
    name: string;
    href?: string;
    content?: React.ReactNode;
    disabled?: boolean;
    icon?: React.ReactNode;
    count?: number;
    badge?: React.ReactNode;
}
declare const tabsContainerVariants: (props?: ({
    variant?: "bordered" | "underline" | "pills" | "simple_dark" | "pills_gray" | "pills_brand" | "bar_underline" | "full_width" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const tabButtonVariants: (props?: ({
    variant?: "bordered" | "underline" | "pills" | "simple_dark" | "pills_gray" | "pills_brand" | "bar_underline" | "full_width" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    isActive?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface TabsProps extends BaseComponentProps, VariantProps<typeof tabsContainerVariants>, VariantProps<typeof tabButtonVariants> {
    tabs: TabItem[];
    activeTab?: string;
    onTabChange?: (tabName: string) => void;
    showMobileSelect?: boolean;
    dark?: boolean;
    fullWidth?: boolean;
}
declare const Tabs: react.ForwardRefExoticComponent<TabsProps & react.RefAttributes<HTMLDivElement>>;

interface NavbarItem {
    id: string;
    label: string;
    href?: string;
    onClick?: () => void;
    active?: boolean;
    icon?: React.ReactNode;
    badge?: {
        text: string;
        color?: 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';
    };
}
declare const navbarContainerVariants: (props?: ({
    variant?: "simple" | "dark" | "with-search" | "with-menu-button" | "centered-search" | "with-quick-action" | "column-layout" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface NavbarProps extends BaseComponentProps, VariantProps<typeof navbarContainerVariants> {
    brand?: {
        name: string;
        logo?: string;
        href?: string;
    };
    items?: NavbarItem[];
    secondaryItems?: NavbarItem[];
    user?: {
        name: string;
        email?: string;
        avatar?: string;
        initials?: string;
    };
    searchPlaceholder?: string;
    onSearch?: (query: string) => void;
    showMenuButton?: boolean;
    onMenuClick?: () => void;
    actions?: Array<{
        label: string;
        onClick?: () => void;
        href?: string;
        variant?: 'primary' | 'secondary';
        icon?: React.ReactNode;
    }>;
}
declare const Navbar: react.ForwardRefExoticComponent<NavbarProps & react.RefAttributes<HTMLElement>>;

interface ProgressStep {
    id: string;
    name: string;
    description?: string;
    status: 'complete' | 'current' | 'upcoming';
    href?: string;
    onClick?: () => void;
}
declare const progressStepVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
    color?: "red" | "green" | "blue" | "indigo" | "purple" | null | undefined;
    status?: "complete" | "current" | "upcoming" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const progressTextVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ProgressBarProps extends BaseComponentProps, VariantProps<typeof progressStepVariants>, VariantProps<typeof progressTextVariants> {
    steps: ProgressStep[];
    variant?: 'simple' | 'bullets' | 'bullets-text' | 'circles' | 'circles-text' | 'panels' | 'panels-border' | 'progress-bar';
    orientation?: 'horizontal' | 'vertical';
    showConnectors?: boolean;
}
declare const ProgressBar: react.ForwardRefExoticComponent<ProgressBarProps & react.RefAttributes<HTMLDivElement>>;

interface SidebarNavigationItem {
    id: string;
    name: string;
    href?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    badge?: {
        text: string;
        color?: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';
    };
    active?: boolean;
    children?: SidebarNavigationItem[];
}
interface SidebarNavigationSection {
    title?: string;
    items: SidebarNavigationItem[];
}
declare const sidebarContainerVariants: (props?: ({
    variant?: "secondary" | "dark" | "light" | "brand" | "expandable" | null | undefined;
    width?: "narrow" | "normal" | "wide" | null | undefined;
    collapsed?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SidebarNavigationProps extends BaseComponentProps, VariantProps<typeof sidebarContainerVariants> {
    sections: SidebarNavigationSection[];
    brand?: {
        name: string;
        logo?: string;
        href?: string;
    };
    collapsible?: boolean;
    onToggleCollapse?: () => void;
}
declare const SidebarNavigation: react.ForwardRefExoticComponent<SidebarNavigationProps & react.RefAttributes<HTMLElement>>;

interface VerticalNavigationItem {
    id: string;
    name: string;
    href?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    badge?: {
        text: string;
        color?: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';
    };
    active?: boolean;
    count?: number;
    description?: string;
    children?: VerticalNavigationItem[];
}
interface VerticalNavigationGroup {
    title?: string;
    items: VerticalNavigationItem[];
}
declare const verticalNavigationContainerVariants: (props?: ({
    variant?: "simple" | "on-gray" | "with-badges" | "with-icons" | "with-icons-badges" | "with-secondary" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface VerticalNavigationProps extends BaseComponentProps, VariantProps<typeof verticalNavigationContainerVariants> {
    groups: VerticalNavigationGroup[];
    spacing?: 'compact' | 'normal' | 'relaxed';
    showDividers?: boolean;
}
declare const VerticalNavigation: react.ForwardRefExoticComponent<VerticalNavigationProps & react.RefAttributes<HTMLElement>>;

interface StackedListItem {
    id: string | number;
    title: string;
    subtitle?: string;
    description?: string;
    image?: string;
    badge?: {
        text: string;
        variant?: 'success' | 'warning' | 'error' | 'info' | 'gray';
    };
    status?: {
        text: string;
        online?: boolean;
    };
    actions?: React.ReactNode;
    metadata?: string;
    href?: string;
    onClick?: () => void;
}
declare const stackedListVariants: (props?: ({
    variant?: "simple" | "fullWidth" | "card" | "narrow" | null | undefined;
    showDividers?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const stackedListItemVariants: (props?: ({
    variant?: "simple" | "fullWidth" | "card" | "narrow" | null | undefined;
    spacing?: "sm" | "md" | "lg" | null | undefined;
    isClickable?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const stackedListAvatarVariants: (props?: ({
    avatarSize?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface StackedListProps extends BaseComponentProps, VariantProps<typeof stackedListVariants>, VariantProps<typeof stackedListItemVariants>, VariantProps<typeof stackedListAvatarVariants> {
    items: StackedListItem[];
    loading?: boolean;
    emptyMessage?: string;
    onItemClick?: (item: StackedListItem) => void;
}
declare const StackedList: react.ForwardRefExoticComponent<StackedListProps & react.RefAttributes<HTMLUListElement>>;

interface TableColumn<T = any> {
    key: string;
    label: string;
    render?: (value: any, item: T, index: number) => React.ReactNode;
    sortable?: boolean;
    width?: string;
    align?: 'left' | 'center' | 'right';
    sticky?: boolean;
    hiddenOnMobile?: boolean;
}
interface TableAction<T = any> {
    label: string;
    onClick?: (item: T, index: number) => void;
    href?: string;
    variant?: 'primary' | 'secondary' | 'danger';
    disabled?: (item: T) => boolean;
}
interface TableProps<T = any> extends BaseComponentProps, Omit<VariantProps<typeof tableContainerVariants>, 'darkMode' | 'fullWidth'> {
    columns: TableColumn<T>[];
    data: T[];
    actions?: TableAction<T>[];
    variant?: 'simple' | 'striped' | 'bordered' | 'card';
    size?: 'sm' | 'md' | 'lg';
    stickyHeader?: boolean;
    loading?: boolean;
    emptyMessage?: string;
    onSort?: (key: string, direction: 'asc' | 'desc') => void;
    sortKey?: string;
    sortDirection?: 'asc' | 'desc';
    selectable?: boolean;
    selectedItems?: Set<number>;
    onSelectItem?: (index: number, selected: boolean) => void;
    onSelectAll?: (selected: boolean) => void;
    condensed?: boolean;
    darkMode?: boolean;
    fullWidth?: boolean;
    showVerticalLines?: boolean;
    uppercaseHeaders?: boolean;
    hiddenHeaders?: boolean;
}
declare const tableContainerVariants: (props?: ({
    variant?: "simple" | "card" | "striped" | "bordered" | null | undefined;
    darkMode?: boolean | null | undefined;
    fullWidth?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const Table: react.ForwardRefExoticComponent<TableProps<any> & react.RefAttributes<HTMLDivElement>>;

interface FeedItem {
    id: string;
    type?: 'comment' | 'assignment' | 'tags' | 'default';
    user: {
        name: string;
        avatar?: string;
        initials?: string;
    };
    content: string;
    timestamp: string;
    icon?: React.ReactNode;
    href?: string;
    target?: {
        name: string;
        href?: string;
    };
    tags?: string[];
    comments?: Array<{
        id: string;
        user: {
            name: string;
            avatar?: string;
        };
        content: string;
        timestamp: string;
    }>;
}
declare const feedIconVariants: (props?: ({
    type?: "default" | "comment" | "assignment" | "tags" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface FeedProps extends BaseComponentProps, VariantProps<typeof feedIconVariants> {
    items: FeedItem[];
    variant?: 'simple' | 'with-comments' | 'multiple-types';
    showIcons?: boolean;
}
declare const Feed: react.ForwardRefExoticComponent<FeedProps & react.RefAttributes<HTMLDivElement>>;

interface GridListItem {
    id: string;
    title: string;
    subtitle?: string;
    description?: string;
    image?: string;
    avatar?: string;
    initials?: string;
    href?: string;
    badge?: {
        text: string;
        color?: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';
    };
    stats?: Array<{
        label: string;
        value: string;
    }>;
    tags?: string[];
    metadata?: Record<string, string>;
    actions?: Array<{
        label: string;
        onClick?: () => void;
        href?: string;
        variant?: 'primary' | 'secondary';
    }>;
}
declare const gridListVariants: (props?: ({
    columns?: 1 | 2 | 3 | 4 | 6 | null | undefined;
    gap?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface GridListProps extends BaseComponentProps, VariantProps<typeof gridListVariants> {
    items: GridListItem[];
    variant?: 'simple' | 'contact-cards' | 'small-portraits' | 'horizontal-links' | 'images-details' | 'logos-descriptions' | 'actions-borders';
}
declare const GridList: react.ForwardRefExoticComponent<GridListProps & react.RefAttributes<HTMLDivElement>>;

interface ModalAction extends ActionWithVariant {
    variant?: 'primary' | 'secondary' | 'soft' | 'ghost';
    autoFocus?: boolean;
}
declare const modalVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xl" | "full" | null | undefined;
    position?: "top" | "center" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ModalProps extends Omit<BaseComponentProps, 'children'>, VariantProps<typeof modalVariants> {
    open: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    iconColor?: 'red' | 'yellow' | 'green' | 'blue' | 'gray';
    actions?: ModalAction[];
    showCloseButton?: boolean;
    closeOnBackdropClick?: boolean;
    variant?: 'alert' | 'default';
}
declare const Modal: react.ForwardRefExoticComponent<ModalProps & react.RefAttributes<HTMLDivElement>>;

interface NotificationAction extends Omit<BaseAction, 'onClick'> {
    onClick: () => void;
    variant?: 'primary' | 'secondary';
}
declare const notificationVariants: (props?: ({
    type?: "success" | "error" | "warning" | "info" | null | undefined;
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface NotificationProps extends BaseComponentProps, VariantProps<typeof notificationVariants> {
    show: boolean;
    onClose?: () => void;
    title: string;
    description?: string;
    actions?: NotificationAction[];
    autoClose?: boolean;
    autoCloseDelay?: number;
    showCloseButton?: boolean;
    avatar?: React.ReactNode;
    customIcon?: React.ReactNode;
}
declare const Notification: react.ForwardRefExoticComponent<NotificationProps & react.RefAttributes<HTMLDivElement>>;

interface DrawerAction extends ActionWithVariant {
    variant?: 'primary' | 'secondary' | 'danger';
}
declare const drawerVariants: (props?: ({
    position?: "top" | "right" | "bottom" | "left" | null | undefined;
    size?: "sm" | "md" | "lg" | "xl" | "full" | null | undefined;
    open?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface DrawerProps extends BaseComponentProps, VariantProps<typeof drawerVariants> {
    onClose: () => void;
    title?: string;
    description?: string;
    children: React.ReactNode;
    variant?: 'default' | 'branded' | 'wide' | 'close-outside' | 'sticky-footer' | 'background-overlay';
    showOverlay?: boolean;
    closeOnOverlayClick?: boolean;
    closeOnEscape?: boolean;
    actions?: DrawerAction[];
    header?: React.ReactNode;
    footer?: React.ReactNode;
    brandColor?: BrandColor;
}
declare const Drawer: react.ForwardRefExoticComponent<DrawerProps & react.RefAttributes<HTMLDivElement>>;

declare const alertVariants: (props?: ({
    variant?: "success" | "error" | "warning" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants>, BaseComponentProps {
    title?: string;
    description?: React.ReactNode;
    dismissible?: boolean;
    onDismiss?: () => void;
    actions?: React.ReactNode;
    icon?: React.ReactNode | boolean;
}
declare const Alert: react.ForwardRefExoticComponent<AlertProps & react.RefAttributes<HTMLDivElement>>;

interface EmptyStateAction {
    label: string;
    onClick?: () => void;
    href?: string;
    variant?: 'primary' | 'secondary';
    icon?: React.ReactNode;
}
declare const emptyStateContainerVariants: (props?: ({
    variant?: "default" | "card" | "dashed" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface EmptyStateProps extends BaseComponentProps, VariantProps<typeof emptyStateContainerVariants> {
    icon?: React.ReactNode;
    title: string;
    description?: string;
    actions?: EmptyStateAction[];
}
declare const EmptyState: react.ForwardRefExoticComponent<EmptyStateProps & react.RefAttributes<HTMLDivElement>>;

declare function cn(...inputs: ClassValue[]): string;

export { ActionPanel, type ActionPanelAction, type ActionWithVariant, Alert, type Alignment, type Attachment, Avatar, AvatarGroup, type AvatarNotificationColor, type AvatarNotificationPosition, type AvatarProps$1 as AvatarProps, type AvatarShape, type AvatarSize, Badge, type BadgeColor, BadgeOnDark, type BadgeProps$1 as BadgeProps, type BadgeSize, type BadgeVariant, type BaseAction, type BaseColor, type BaseComponentProps, type BrandColor, type BreadcrumbItem, Breadcrumbs, Button, ButtonGroup, ButtonOnDark, type ButtonProps$1 as ButtonProps, type ButtonRounded, type ButtonSize, type ButtonVariant, Calendar, type CalendarDay, type CalendarEvent, type CalendarProps, Card, CardBody, CardFooter, CardHeader, CardHeading, type CardHeadingAction, type CardHeadingDropdownItem, type CardHeadingMeta, type CardHeadingProps, Checkbox, CircularButton, type ColorVariant, ComboboxComponent as Combobox, type ComboboxOption, CommandPalette, type CommandPaletteGroup, type CommandPaletteOption, type CommandPaletteProps, Container, DescriptionList, type DescriptionListItem, Divider, Drawer, type DrawerAction, Dropdown, type DropdownItem, EmptyState, type EmptyStateAction, Feed, type FeedItem, type FormField, type FormFieldProps, FormLayout, type FormSection, GridList, type GridListItem, Input, type InputProps, type LayoutVariant, ListContainer, type ListItemWithAvatar, MediaObject, type MetaItem, Modal, type ModalAction, NativeSelect, Navbar, type NavbarItem, type NavbarProps, type NavigationItem, Notification, type NotificationAction, type NotificationPosition, PageHeading, type PageHeadingAction, type PageHeadingBreadcrumb, type PageHeadingMeta, type PageHeadingProps, Pagination, type Position, ProgressBar, type ProgressStep, RadioGroup, type RadioOption, SectionHeading, type SectionHeadingAction, type SectionHeadingProps, type SectionHeadingTab, Select, type SelectOption, type SelectableOption, SidebarNavigation, type SidebarNavigationItem, type SidebarNavigationSection, SignInForm, type SimpleSize, type Size, StackedList, type StackedListItem, type StatItem, Stats, type Status, type StatusColor, type StepItem, type TabItem, Table, type TableAction, type TableColumn$1 as TableColumn, Tabs, type TaskStatus, TextInput, Textarea, Toggle, VerticalNavigation, type VerticalNavigationGroup, type VerticalNavigationItem, cn, commandPaletteBadgeVariants, commandPaletteContainerVariants, commandPaletteDescriptionVariants, commandPaletteEmptyIconVariants, commandPaletteEmptyStateVariants, commandPaletteFooterVariants, commandPaletteGroupHeaderVariants, commandPaletteInputVariants, commandPaletteOptionVariants };
