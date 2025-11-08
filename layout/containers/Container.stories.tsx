import type { Meta, StoryObj } from '@storybook/react'
import { Container } from './Container'

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Container>

const DemoContent = () => (
  <div className="rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-8">
    <p className="text-center text-sm text-gray-600">Container Content</p>
  </div>
)

export const Default: Story = {
  render: () => (
    <Container>
      <DemoContent />
    </Container>
  ),
}

export const Small: Story = {
  render: () => (
    <Container size="sm">
      <DemoContent />
    </Container>
  ),
}

export const Medium: Story = {
  render: () => (
    <Container size="md">
      <DemoContent />
    </Container>
  ),
}

export const Large: Story = {
  render: () => (
    <Container size="lg">
      <DemoContent />
    </Container>
  ),
}

export const ExtraLarge: Story = {
  render: () => (
    <Container size="xl">
      <DemoContent />
    </Container>
  ),
}

export const TwoExtraLarge: Story = {
  render: () => (
    <Container size="2xl">
      <DemoContent />
    </Container>
  ),
}

export const Full: Story = {
  render: () => (
    <Container size="full">
      <DemoContent />
    </Container>
  ),
}

export const NoPadding: Story = {
  render: () => (
    <Container padding="none">
      <div className="rounded-lg border-2 border-dashed border-red-300 bg-red-50 p-8">
        <p className="text-center text-sm text-red-600">No horizontal padding</p>
      </div>
    </Container>
  ),
}

export const SmallPadding: Story = {
  render: () => (
    <Container padding="sm">
      <DemoContent />
    </Container>
  ),
}

export const MediumPadding: Story = {
  render: () => (
    <Container padding="md">
      <DemoContent />
    </Container>
  ),
}

export const LargePadding: Story = {
  render: () => (
    <Container padding="lg">
      <DemoContent />
    </Container>
  ),
}

export const NotCentered: Story = {
  render: () => (
    <Container center={false}>
      <div className="rounded-lg border-2 border-dashed border-yellow-300 bg-yellow-50 p-8">
        <p className="text-center text-sm text-yellow-600">Not centered (no mx-auto)</p>
      </div>
    </Container>
  ),
}

export const Centered: Story = {
  render: () => (
    <Container center={true}>
      <DemoContent />
    </Container>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-8 py-8">
      <div>
        <h3 className="mb-4 text-center text-sm font-semibold text-gray-700">Small (max-w-sm)</h3>
        <Container size="sm">
          <DemoContent />
        </Container>
      </div>

      <div>
        <h3 className="mb-4 text-center text-sm font-semibold text-gray-700">Medium (max-w-md)</h3>
        <Container size="md">
          <DemoContent />
        </Container>
      </div>

      <div>
        <h3 className="mb-4 text-center text-sm font-semibold text-gray-700">Large (max-w-4xl)</h3>
        <Container size="lg">
          <DemoContent />
        </Container>
      </div>

      <div>
        <h3 className="mb-4 text-center text-sm font-semibold text-gray-700">
          Extra Large (max-w-6xl)
        </h3>
        <Container size="xl">
          <DemoContent />
        </Container>
      </div>

      <div>
        <h3 className="mb-4 text-center text-sm font-semibold text-gray-700">
          2XL (max-w-7xl)
        </h3>
        <Container size="2xl">
          <DemoContent />
        </Container>
      </div>

      <div>
        <h3 className="mb-4 text-center text-sm font-semibold text-gray-700">Full (max-w-full)</h3>
        <Container size="full">
          <DemoContent />
        </Container>
      </div>
    </div>
  ),
}

export const AllPaddings: Story = {
  render: () => (
    <div className="space-y-8 py-8">
      <div>
        <h3 className="mb-4 text-center text-sm font-semibold text-gray-700">None</h3>
        <Container padding="none" size="lg">
          <div className="rounded-lg border-2 border-dashed border-blue-300 bg-blue-50 p-8">
            <p className="text-center text-sm text-blue-600">No padding</p>
          </div>
        </Container>
      </div>

      <div>
        <h3 className="mb-4 text-center text-sm font-semibold text-gray-700">
          Small (px-4 sm:px-6)
        </h3>
        <Container padding="sm" size="lg">
          <div className="rounded-lg border-2 border-dashed border-blue-300 bg-blue-50 p-8">
            <p className="text-center text-sm text-blue-600">Small padding</p>
          </div>
        </Container>
      </div>

      <div>
        <h3 className="mb-4 text-center text-sm font-semibold text-gray-700">
          Medium (px-4 sm:px-6 lg:px-8)
        </h3>
        <Container padding="md" size="lg">
          <div className="rounded-lg border-2 border-dashed border-blue-300 bg-blue-50 p-8">
            <p className="text-center text-sm text-blue-600">Medium padding (default)</p>
          </div>
        </Container>
      </div>

      <div>
        <h3 className="mb-4 text-center text-sm font-semibold text-gray-700">
          Large (px-6 sm:px-8 lg:px-12)
        </h3>
        <Container padding="lg" size="lg">
          <div className="rounded-lg border-2 border-dashed border-blue-300 bg-blue-50 p-8">
            <p className="text-center text-sm text-blue-600">Large padding</p>
          </div>
        </Container>
      </div>
    </div>
  ),
}

export const WithContent: Story = {
  render: () => (
    <Container size="lg">
      <div className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-gray-950/5">
        <h2 className="text-2xl font-bold text-gray-900">Welcome to Our Platform</h2>
        <p className="mt-4 text-gray-600">
          This is a typical page layout using a container to constrain the maximum width of the
          content and center it on the page.
        </p>
        <div className="mt-6 flex gap-4">
          <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
            Get Started
          </button>
          <button className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Learn More
          </button>
        </div>
      </div>
    </Container>
  ),
}

export const ArticleLayout: Story = {
  render: () => (
    <Container size="md" padding="lg">
      <article className="prose prose-gray">
        <h1 className="text-3xl font-bold text-gray-900">Article Title</h1>
        <p className="mt-2 text-sm text-gray-500">Published on March 16, 2024</p>
        <div className="mt-6 space-y-4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </article>
    </Container>
  ),
}

export const DashboardLayout: Story = {
  render: () => (
    <Container size="2xl" padding="md">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Welcome back! Here's what's happening with your projects today.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-950/5"
            >
              <h3 className="text-sm font-medium text-gray-500">Metric {i}</h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">12,345</p>
              <p className="mt-2 text-sm text-green-600">+12.5% from last month</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  ),
}

export const NestedContainers: Story = {
  render: () => (
    <div className="bg-gray-100 py-12">
      <Container size="2xl">
        <div className="rounded-lg bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">Outer Container (2xl)</h2>
          <div className="mt-6">
            <Container size="lg" center={true} padding="none">
              <div className="rounded-lg border-2 border-dashed border-indigo-300 bg-indigo-50 p-6">
                <p className="text-center text-sm text-indigo-600">
                  Inner Container (lg, centered, no padding)
                </p>
              </div>
            </Container>
          </div>
        </div>
      </Container>
    </div>
  ),
}

export const FullWidthSection: Story = {
  render: () => (
    <div>
      <div className="bg-indigo-600 py-16">
        <Container size="lg">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold">Hero Section</h2>
            <p className="mt-4 text-lg">
              Full-width background with constrained content
            </p>
          </div>
        </Container>
      </div>
      <Container size="lg" className="py-12">
        <div className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-gray-950/5">
          <h3 className="text-xl font-semibold text-gray-900">Content Section</h3>
          <p className="mt-2 text-gray-600">
            This pattern is commonly used for landing pages with alternating full-width sections.
          </p>
        </div>
      </Container>
    </div>
  ),
}
