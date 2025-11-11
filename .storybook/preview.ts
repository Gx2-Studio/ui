import type { Preview } from '@storybook/react-vite'
import './preview.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
      sort: 'requiredFirst',
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1f2937' },
        { name: 'gray', value: '#f3f4f6' },
      ],
    },
    a11y: {
      disable: false,
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Overview',
          'Getting Started',
          'Foundations',
          ['Colors', 'Typography', 'Icons', 'Spacing'],
          'Components',
          [
            'Inputs',
            ['Button', 'Input', 'Textarea', 'Select', 'Checkbox', 'RadioGroup', 'Toggle', 'Combobox'],
            'Data Display',
            ['Badge', 'Avatar', 'Stats', 'DescriptionList', 'Calendar'],
            'Navigation',
            ['Breadcrumbs', 'Tabs', 'Pagination', 'Navbar', 'VerticalNavigation', 'SidebarNavigation', 'CommandPalette', 'ProgressBar'],
            'Feedback',
            ['Alert', 'EmptyState', 'Notification'],
            'Overlays',
            ['Modal', 'Drawer'],
            'Layout',
            ['Card', 'Container', 'Divider', 'MediaObject', 'ListContainer'],
            'Lists',
            ['Table', 'StackedList', 'GridList', 'Feed'],
            'Typography',
            ['PageHeading', 'SectionHeading', 'CardHeading'],
            'Forms',
            ['ActionPanel', 'FormLayout', 'SignInForm'],
            'Utilities',
          ],
          'Patterns',
          'Changelog',
        ],
      },
    },
  },
}

export default preview
