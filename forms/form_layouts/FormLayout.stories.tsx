import type { Meta, StoryObj } from '@storybook/react'
import { FormLayout, FormSection } from './FormLayout'

const meta: Meta<typeof FormLayout> = {
  title: '2. Forms/FormLayout',
  component: FormLayout,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FormLayout>

const profileSections: FormSection[] = [
  {
    title: 'Profile',
    description: 'This information will be displayed publicly so be careful what you share.',
    fields: [
      {
        id: 'username',
        name: 'username',
        label: 'Username',
        type: 'text',
        placeholder: 'johndoe',
        colSpan: 'full',
      },
      {
        id: 'about',
        name: 'about',
        label: 'About',
        type: 'textarea',
        rows: 3,
        description: 'Write a few sentences about yourself.',
        colSpan: 'full',
      },
      {
        id: 'photo',
        name: 'photo',
        label: 'Photo',
        type: 'file',
        colSpan: 'full',
      },
    ],
  },
]

const personalInfoSections: FormSection[] = [
  {
    title: 'Personal Information',
    description: 'Use a permanent address where you can receive mail.',
    fields: [
      {
        id: 'first-name',
        name: 'first-name',
        label: 'First name',
        type: 'text',
        autoComplete: 'given-name',
        colSpan: '3',
      },
      {
        id: 'last-name',
        name: 'last-name',
        label: 'Last name',
        type: 'text',
        autoComplete: 'family-name',
        colSpan: '3',
      },
      {
        id: 'email',
        name: 'email',
        label: 'Email address',
        type: 'email',
        autoComplete: 'email',
        colSpan: 'full',
      },
      {
        id: 'country',
        name: 'country',
        label: 'Country',
        type: 'select',
        options: [
          { value: 'us', label: 'United States' },
          { value: 'ca', label: 'Canada' },
          { value: 'mx', label: 'Mexico' },
        ],
        colSpan: '3',
      },
      {
        id: 'street',
        name: 'street',
        label: 'Street address',
        type: 'text',
        autoComplete: 'street-address',
        colSpan: 'full',
      },
      {
        id: 'city',
        name: 'city',
        label: 'City',
        type: 'text',
        autoComplete: 'address-level2',
        colSpan: '2',
      },
      {
        id: 'region',
        name: 'region',
        label: 'State / Province',
        type: 'text',
        autoComplete: 'address-level1',
        colSpan: '2',
      },
      {
        id: 'postal-code',
        name: 'postal-code',
        label: 'ZIP / Postal code',
        type: 'text',
        autoComplete: 'postal-code',
        colSpan: '2',
      },
    ],
  },
]

const notificationSections: FormSection[] = [
  {
    title: 'Notifications',
    description: 'We\'ll always let you know about important changes, but you pick what else you want to hear about.',
    fields: [
      {
        id: 'comments',
        name: 'comments',
        label: 'Comments',
        type: 'checkbox',
        description: 'Get notified when someone posts a comment on a posting.',
        colSpan: 'full',
      },
      {
        id: 'candidates',
        name: 'candidates',
        label: 'Candidates',
        type: 'checkbox',
        description: 'Get notified when a candidate applies for a job.',
        colSpan: 'full',
      },
      {
        id: 'offers',
        name: 'offers',
        label: 'Offers',
        type: 'checkbox',
        description: 'Get notified when a candidate accepts or rejects an offer.',
        colSpan: 'full',
      },
    ],
  },
]

const multiSectionForm: FormSection[] = [
  {
    title: 'Profile',
    description: 'This information will be displayed publicly.',
    fields: [
      {
        id: 'username',
        name: 'username',
        label: 'Username',
        type: 'text',
        colSpan: 'full',
      },
    ],
  },
  {
    title: 'Personal Information',
    description: 'Use a permanent address where you can receive mail.',
    fields: [
      {
        id: 'first-name',
        name: 'first-name',
        label: 'First name',
        type: 'text',
        colSpan: '3',
      },
      {
        id: 'last-name',
        name: 'last-name',
        label: 'Last name',
        type: 'text',
        colSpan: '3',
      },
      {
        id: 'email',
        name: 'email',
        label: 'Email address',
        type: 'email',
        colSpan: 'full',
      },
    ],
  },
]

export const StackedLayout: Story = {
  args: {
    sections: personalInfoSections,
    layout: 'stacked',
    variant: 'default',
  },
}

export const TwoColumnLayout: Story = {
  args: {
    sections: personalInfoSections,
    layout: 'two-column',
    variant: 'default',
  },
}

export const LabelsLeftLayout: Story = {
  args: {
    sections: personalInfoSections,
    layout: 'labels-left',
    variant: 'default',
  },
}

export const DefaultVariant: Story = {
  args: {
    sections: profileSections,
    variant: 'default',
    layout: 'stacked',
  },
}

export const CardVariant: Story = {
  args: {
    sections: profileSections,
    variant: 'card',
    layout: 'stacked',
  },
}

export const DarkVariant: Story = {
  args: {
    sections: profileSections,
    variant: 'dark',
    layout: 'stacked',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const WithoutActions: Story = {
  args: {
    sections: personalInfoSections,
    showActions: false,
  },
}

export const CustomLabels: Story = {
  args: {
    sections: personalInfoSections,
    submitLabel: 'Update Profile',
    cancelLabel: 'Reset',
  },
}

export const ProfileForm: Story = {
  args: {
    sections: profileSections,
    variant: 'card',
    layout: 'stacked',
  },
}

export const NotificationForm: Story = {
  args: {
    sections: notificationSections,
    variant: 'card',
    layout: 'stacked',
  },
}

export const MultiSectionForm: Story = {
  args: {
    sections: multiSectionForm,
    variant: 'card',
    layout: 'stacked',
  },
}

export const AllLayouts: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Stacked Layout</h3>
        <FormLayout
          sections={personalInfoSections}
          layout="stacked"
          variant="card"
        />
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Two Column Layout</h3>
        <FormLayout
          sections={personalInfoSections}
          layout="two-column"
          variant="card"
        />
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Labels Left Layout</h3>
        <FormLayout
          sections={personalInfoSections}
          layout="labels-left"
          variant="card"
        />
      </div>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Default Variant</h3>
        <FormLayout
          sections={profileSections}
          variant="default"
        />
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Card Variant</h3>
        <FormLayout
          sections={profileSections}
          variant="card"
        />
      </div>

      <div className="bg-gray-900 p-8 rounded-lg">
        <h3 className="text-lg font-medium text-white mb-4">Dark Variant</h3>
        <FormLayout
          sections={profileSections}
          variant="dark"
        />
      </div>
    </div>
  ),
}

export const CompleteExample: Story = {
  render: () => {
    const handleSubmit = (data: Record<string, any>) => {
      console.log('Form submitted:', data)
      alert('Form submitted! Check console for data.')
    }

    return (
      <FormLayout
        sections={[
          {
            title: 'Profile',
            description: 'This information will be displayed publicly so be careful what you share.',
            fields: [
              {
                id: 'username',
                name: 'username',
                label: 'Username',
                type: 'text',
                placeholder: 'johndoe',
                required: true,
                colSpan: 'full',
              },
              {
                id: 'about',
                name: 'about',
                label: 'About',
                type: 'textarea',
                rows: 3,
                description: 'Write a few sentences about yourself.',
                colSpan: 'full',
              },
            ],
          },
          {
            title: 'Personal Information',
            description: 'Use a permanent address where you can receive mail.',
            fields: [
              {
                id: 'first-name',
                name: 'first-name',
                label: 'First name',
                type: 'text',
                autoComplete: 'given-name',
                required: true,
                colSpan: '3',
              },
              {
                id: 'last-name',
                name: 'last-name',
                label: 'Last name',
                type: 'text',
                autoComplete: 'family-name',
                required: true,
                colSpan: '3',
              },
              {
                id: 'email',
                name: 'email',
                label: 'Email address',
                type: 'email',
                autoComplete: 'email',
                required: true,
                colSpan: 'full',
              },
            ],
          },
          {
            title: 'Notifications',
            description: 'We\'ll always let you know about important changes.',
            fields: [
              {
                id: 'comments',
                name: 'comments',
                label: 'Comments',
                type: 'checkbox',
                description: 'Get notified when someone posts a comment.',
                colSpan: 'full',
              },
              {
                id: 'candidates',
                name: 'candidates',
                label: 'Candidates',
                type: 'checkbox',
                description: 'Get notified when a candidate applies for a job.',
                colSpan: 'full',
              },
            ],
          },
        ]}
        variant="card"
        layout="stacked"
        onSubmit={handleSubmit}
        submitLabel="Save Changes"
      />
    )
  },
}
