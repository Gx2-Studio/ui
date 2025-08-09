# @gx2-studio/ui

A modern React component library built with Tailwind CSS, TypeScript, and Class Variance Authority (CVA). Production-ready components with full type safety and customization options.

[![npm version](https://img.shields.io/npm/v/@gx2-studio/ui.svg)](https://www.npmjs.com/package/@gx2-studio/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎨 **50+ Components** - Comprehensive set of UI components
- 🎯 **TypeScript** - Full type safety and IntelliSense support
- 🎭 **CVA Variants** - Powerful variant system with Class Variance Authority
- 🌈 **Tailwind CSS** - Utility-first styling with Tailwind
- 📱 **Responsive** - Mobile-first responsive design
- 🎪 **Headless UI** - Accessible components built on Headless UI
- 🚀 **Tree Shakeable** - Import only what you need
- 🎡 **Customizable** - Easy to customize with className and variants

## 📦 Installation

```bash
npm install @gx2-studio/ui
```

### Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install react react-dom
```

### Tailwind Configuration

Add the package to your `tailwind.config.js` content array:

```js
module.exports = {
  content: [
    // ... your other content paths
    "./node_modules/@gx2-studio/ui/**/*.{js,ts,jsx,tsx}"
  ],
  // ... rest of your config
}
```

### Required Tailwind Plugins

Install these Tailwind CSS plugins for full component styling:

```bash
npm install @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio
```

Add them to your `tailwind.config.js`:

```js
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
```

## 🚀 Quick Start

```tsx
import { Button, Alert, Input, Badge } from '@gx2-studio/ui'

function App() {
  return (
    <div className="space-y-4">
      <Button variant="primary" size="lg">
        Click me
      </Button>
      
      <Alert 
        variant="success" 
        title="Success!"
        description="Your changes have been saved."
        dismissible
      />
      
      <Input
        label="Email"
        type="email"
        placeholder="you@example.com"
        helpText="We'll never share your email"
      />
      
      <Badge variant="success">Active</Badge>
    </div>
  )
}
```

## 📚 Components

### Elements
- **Button** - Primary, secondary, soft, and ghost variants
- **Badge** - Status badges with various colors and styles
- **Avatar** - User avatars with status indicators
- **ButtonGroup** - Group related actions together
- **Dropdown** - Dropdown menus with Headless UI

### Forms
- **Input** - Text inputs with labels, errors, and addons
- **Textarea** - Multi-line text inputs
- **Select** - Native and custom select menus
- **Checkbox** - Single and grouped checkboxes
- **RadioGroup** - Radio button groups
- **Toggle** - Switch toggles
- **Combobox** - Searchable select with autocomplete

### Feedback
- **Alert** - Informational alerts with various states
- **EmptyState** - Empty state placeholders
- **Notification** - Toast notifications

### Data Display
- **Table** - Data tables with sorting and selection
- **Stats** - Statistics display components
- **DescriptionList** - Key-value pairs display

### Navigation
- **Breadcrumb** - Navigation breadcrumbs
- **Pagination** - Page navigation
- **Tabs** - Tab navigation
- **Navbar** - Navigation bars
- **VerticalNavigation** - Sidebar navigation

### Layout
- **Container** - Responsive containers
- **Card** - Content cards with headers and footers
- **Divider** - Visual separators
- **MediaObject** - Media with text layouts

### Overlays
- **Modal** - Dialog modals
- **SlideOver** - Slide-over panels
- **Notification** - Toast notifications

## 🎨 Customization

### Using Variants

Components use CVA for powerful variant support:

```tsx
<Button 
  variant="primary"  // 'primary' | 'secondary' | 'soft' | 'ghost'
  size="md"          // 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  rounded="md"       // 'none' | 'sm' | 'md' | 'lg' | 'full'
>
  Click me
</Button>
```

### Extending with className

All components accept `className` for additional styling:

```tsx
<Button 
  variant="primary"
  className="hover:scale-105 transition-transform"
>
  Hover me
</Button>
```

### Custom Themes

Override default styles with Tailwind utilities:

```tsx
<Alert 
  variant="info"
  className="bg-blue-50 border-blue-200"
  title="Custom styled alert"
/>
```

## 💻 TypeScript Support

Full TypeScript support with exported types:

```tsx
import type { ButtonProps, AlertProps } from '@gx2-studio/ui'

interface MyButtonProps extends ButtonProps {
  customProp?: string
}

const MyButton: React.FC<MyButtonProps> = ({ customProp, ...props }) => {
  return <Button {...props} />
}
```

## 📖 Examples

### Form with Validation

```tsx
import { Input, Button, Alert } from '@gx2-studio/ui'
import { useState } from 'react'

function ContactForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.includes('@')) {
      setError('Please enter a valid email')
      return
    }
    // Submit form
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={error}
      />
      
      {error && (
        <Alert variant="error" title="Validation Error">
          {error}
        </Alert>
      )}
      
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  )
}
```

### Data Table

```tsx
import { Table } from '@gx2-studio/ui'

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
]

function UserTable() {
  return (
    <Table
      columns={[
        { key: 'name', label: 'Name', sortable: true },
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Role' },
      ]}
      data={users}
      onRowClick={(user) => console.log('Clicked:', user)}
    />
  )
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/@gx2-studio/ui)
- [GitHub Repository](https://github.com/Gx2-Studio/ui)
- [Documentation](https://github.com/Gx2-Studio/ui#readme)
- [Issue Tracker](https://github.com/Gx2-Studio/ui/issues)

## 💖 Credits

Built with ❤️ by [Gx2 Studio](https://github.com/Gx2-Studio)

---

**Note**: This library is actively maintained. If you encounter any issues or have feature requests, please open an issue on GitHub.