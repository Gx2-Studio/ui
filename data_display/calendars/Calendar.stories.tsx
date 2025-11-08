import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from './Calendar'
import type { CalendarDay, CalendarEvent } from './Calendar'

const meta: Meta<typeof Calendar> = {
  title: 'Data Display/Calendar',
  component: Calendar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Calendar>

// Generate sample days for a month
const generateDays = (selectedDate?: string, todayDate?: string): CalendarDay[] => {
  const days: CalendarDay[] = []

  // Previous month days
  for (let i = 26; i <= 31; i++) {
    days.push({
      date: `2024-11-${i}`,
      isCurrentMonth: false,
    })
  }

  // Current month days
  for (let i = 1; i <= 31; i++) {
    const dateStr = `2024-12-${i.toString().padStart(2, '0')}`
    days.push({
      date: dateStr,
      isCurrentMonth: true,
      isToday: dateStr === todayDate,
      isSelected: dateStr === selectedDate,
      events: i === 12 ? [
        { id: 1, name: 'Design review', time: '10AM', datetime: '2024-12-12T10:00' },
        { id: 2, name: 'Team standup', time: '2PM', datetime: '2024-12-12T14:00' },
      ] : i === 15 ? [
        { id: 3, name: 'Sales meeting', time: '11AM', datetime: '2024-12-15T11:00' },
      ] : undefined,
    })
  }

  // Next month days
  for (let i = 1; i <= 7; i++) {
    days.push({
      date: `2025-01-${i.toString().padStart(2, '0')}`,
      isCurrentMonth: false,
    })
  }

  return days
}

const sampleMeetings: CalendarEvent[] = [
  { id: 1, name: 'Design review', time: '10AM', datetime: '2024-12-12T10:00', href: '#' },
  { id: 2, name: 'Team standup', time: '2PM', datetime: '2024-12-12T14:00', href: '#' },
  { id: 3, name: 'Sales meeting', time: '6PM', datetime: '2024-12-12T18:00', href: '#' },
]

export const MonthView: Story = {
  args: {
    variant: 'month',
    days: generateDays('2024-12-12', '2024-12-15'),
    currentMonth: 'December 2024',
  },
}

export const BorderlessSideBySide: Story = {
  args: {
    variant: 'borderless-side-by-side',
    days: generateDays('2024-12-12', '2024-12-15'),
    selectedDay: {
      date: '2024-12-12',
      isCurrentMonth: true,
      isToday: false,
      isSelected: true,
    },
    meetings: sampleMeetings,
    currentMonth: 'December 2024',
  },
}

export const BorderlessStacked: Story = {
  args: {
    variant: 'borderless-stacked',
    days: generateDays('2024-12-12', '2024-12-15'),
    selectedDay: {
      date: '2024-12-12',
      isCurrentMonth: true,
      isToday: false,
      isSelected: true,
    },
    meetings: sampleMeetings,
    currentMonth: 'December 2024',
  },
}

export const WithTodayHighlighted: Story = {
  args: {
    variant: 'borderless-side-by-side',
    days: generateDays(undefined, '2024-12-15'),
    currentMonth: 'December 2024',
  },
}

export const WithEvents: Story = {
  args: {
    variant: 'month',
    days: generateDays('2024-12-12', '2024-12-15'),
    currentMonth: 'December 2024',
  },
}

export const Interactive: Story = {
  args: {
    variant: 'borderless-side-by-side',
    days: generateDays('2024-12-12', '2024-12-15'),
    selectedDay: {
      date: '2024-12-12',
      isCurrentMonth: true,
      isToday: false,
      isSelected: true,
      events: sampleMeetings,
    },
    meetings: sampleMeetings,
    currentMonth: 'December 2024',
    onDateSelect: (day) => console.log('Date selected:', day),
    onPreviousMonth: () => console.log('Previous month clicked'),
    onNextMonth: () => console.log('Next month clicked'),
  },
}
