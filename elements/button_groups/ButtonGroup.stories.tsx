import type { Meta, StoryObj } from '@storybook/react'
import { ButtonGroup } from './ButtonGroup'
import { Button } from '../buttons/Button'

const meta: Meta<typeof ButtonGroup> = {
  title: 'Elements/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

export const Horizontal: Story = {
  render: () => (
    <ButtonGroup orientation="horizontal">
      <Button variant="secondary">Years</Button>
      <Button variant="secondary">Months</Button>
      <Button variant="secondary">Days</Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="secondary">Years</Button>
      <Button variant="secondary">Months</Button>
      <Button variant="secondary">Days</Button>
    </ButtonGroup>
  ),
}

export const SegmentedHorizontal: Story = {
  render: () => (
    <ButtonGroup variant="segmented" orientation="horizontal">
      <Button variant="secondary">Years</Button>
      <Button variant="secondary">Months</Button>
      <Button variant="secondary">Days</Button>
    </ButtonGroup>
  ),
}

export const SegmentedVertical: Story = {
  render: () => (
    <ButtonGroup variant="segmented" orientation="vertical">
      <Button variant="secondary">Years</Button>
      <Button variant="secondary">Months</Button>
      <Button variant="secondary">Days</Button>
    </ButtonGroup>
  ),
}

export const ManyButtons: Story = {
  render: () => (
    <ButtonGroup variant="segmented" orientation="horizontal">
      <Button variant="secondary">1</Button>
      <Button variant="secondary">2</Button>
      <Button variant="secondary">3</Button>
      <Button variant="secondary">4</Button>
      <Button variant="secondary">5</Button>
      <Button variant="secondary">6</Button>
    </ButtonGroup>
  ),
}

export const TwoButtons: Story = {
  render: () => (
    <ButtonGroup variant="segmented" orientation="horizontal">
      <Button variant="secondary">Yes</Button>
      <Button variant="secondary">No</Button>
    </ButtonGroup>
  ),
}

export const WithPrimaryButtons: Story = {
  render: () => (
    <ButtonGroup orientation="horizontal">
      <Button variant="primary">Save</Button>
      <Button variant="primary">Save & Close</Button>
      <Button variant="secondary">Cancel</Button>
    </ButtonGroup>
  ),
}

export const DefaultVariant: Story = {
  render: () => (
    <ButtonGroup variant="default" orientation="horizontal">
      <Button variant="secondary">Button 1</Button>
      <Button variant="secondary">Button 2</Button>
      <Button variant="secondary">Button 3</Button>
    </ButtonGroup>
  ),
}
