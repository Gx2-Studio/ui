import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Textarea } from './Textarea'

const meta: Meta<typeof Textarea> = {
  title: '2. Forms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {
    label: 'Comment',
    placeholder: 'Add your comment...',
  },
}

export const WithHelpText: Story = {
  args: {
    label: 'About',
    placeholder: 'Tell us about yourself...',
    helpText: 'Write a few sentences about yourself.',
  },
}

export const WithError: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
    error: 'This field is required.',
  },
}

export const WithCorner: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter description...',
    corner: 'Optional',
  },
}

export const WithCornerElement: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
    corner: <span className="text-sm text-gray-500">Max. 500 characters</span>,
  },
}

export const ThreeRows: Story = {
  args: {
    label: 'Comment',
    placeholder: 'Add your comment...',
    rows: 3,
  },
}

export const FiveRows: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter a detailed description...',
    rows: 5,
  },
}

export const TenRows: Story = {
  args: {
    label: 'Content',
    placeholder: 'Write your content here...',
    rows: 10,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Comment',
    placeholder: 'Add your comment...',
    disabled: true,
    value: 'This textarea is disabled',
  },
}

export const Required: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
    required: true,
  },
}

export const WithDefaultValue: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
    defaultValue: 'I am a software developer passionate about building great user experiences.',
  },
}

export const MaxLength: Story = {
  args: {
    label: 'Tweet',
    placeholder: 'What\'s happening?',
    maxLength: 280,
    helpText: 'Maximum 280 characters',
  },
}

export const AllStates: Story = {
  render: () => (
    <div className="space-y-6">
      <Textarea
        label="Default"
        placeholder="Enter text..."
        rows={3}
      />
      <Textarea
        label="With value"
        value="This is some text content"
        rows={3}
      />
      <Textarea
        label="With help text"
        placeholder="Enter text..."
        helpText="This is helpful information."
        rows={3}
      />
      <Textarea
        label="With error"
        placeholder="Enter text..."
        error="This field is required."
        rows={3}
      />
      <Textarea
        label="With corner hint"
        placeholder="Enter text..."
        corner="Optional"
        rows={3}
      />
      <Textarea
        label="Disabled"
        placeholder="Enter text..."
        disabled
        value="This is disabled"
        rows={3}
      />
      <Textarea
        label="Required"
        placeholder="Enter text..."
        required
        rows={3}
      />
    </div>
  ),
}

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <Textarea
        label="Small (2 rows)"
        placeholder="Enter text..."
        rows={2}
      />
      <Textarea
        label="Medium (4 rows)"
        placeholder="Enter text..."
        rows={4}
      />
      <Textarea
        label="Large (6 rows)"
        placeholder="Enter text..."
        rows={6}
      />
      <Textarea
        label="Extra Large (10 rows)"
        placeholder="Enter text..."
        rows={10}
      />
    </div>
  ),
}

export const FormExample: Story = {
  render: () => (
    <form className="space-y-6 max-w-lg">
      <div>
        <h2 className="text-base font-semibold text-gray-900">Feedback Form</h2>
        <p className="mt-1 text-sm text-gray-500">
          We'd love to hear your thoughts.
        </p>
      </div>

      <Textarea
        label="What do you like most?"
        placeholder="Tell us what you enjoy..."
        rows={3}
        helpText="Share your positive experiences."
      />

      <Textarea
        label="What could be improved?"
        placeholder="Tell us what needs work..."
        rows={3}
        helpText="We appreciate constructive feedback."
      />

      <Textarea
        label="Additional comments"
        placeholder="Any other thoughts?"
        rows={5}
        corner="Optional"
      />

      <div className="pt-4">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
        >
          Submit Feedback
        </button>
      </div>
    </form>
  ),
}

export const CommentBox: Story = {
  render: () => (
    <div className="max-w-2xl">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold text-gray-900">Leave a comment</h3>
          <div className="mt-4">
            <Textarea
              label="Comment"
              placeholder="Share your thoughts..."
              rows={4}
              helpText="Be respectful and constructive."
            />
          </div>
          <div className="mt-4 flex justify-end gap-3">
            <button
              type="button"
              className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const CharacterCounter: Story = {
  render: () => {
    const maxChars = 500
    const [value, setValue] = useState('')

    return (
      <div className="max-w-lg">
        <Textarea
          label="Bio"
          placeholder="Tell us about yourself..."
          rows={5}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={maxChars}
          corner={
            <span className={value.length > maxChars * 0.9 ? 'text-red-500' : 'text-gray-500'}>
              {value.length} / {maxChars}
            </span>
          }
          helpText="Write a brief bio for your profile."
        />
      </div>
    )
  },
}

export const MessageComposer: Story = {
  render: () => (
    <div className="max-w-3xl">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold text-gray-900">Send a message</h3>
          <div className="mt-4 space-y-4">
            <div>
              <label htmlFor="to" className="block text-sm font-medium text-gray-900">
                To
              </label>
              <input
                type="text"
                id="to"
                className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                placeholder="recipient@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                placeholder="Enter subject..."
              />
            </div>

            <Textarea
              label="Message"
              placeholder="Write your message..."
              rows={8}
            />
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Save Draft
            </button>
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
}
