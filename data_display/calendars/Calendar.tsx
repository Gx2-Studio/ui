import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { 
  ChevronDownIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon,
  EllipsisHorizontalIcon 
} from '@heroicons/react/20/solid'
import { cn } from '../../utils/cn'

export interface CalendarEvent {
  id: number | string
  name: string
  time?: string
  datetime?: string
  href?: string
}

export interface CalendarDay {
  date: string
  isCurrentMonth?: boolean
  isToday?: boolean
  isSelected?: boolean
  events?: CalendarEvent[]
}

const calendarContainerVariants = cva(
  '',
  {
    variants: {
      variant: {
        month: '',
        week: '',
        day: '',
        year: '',
        'borderless-side-by-side': 'md:grid md:grid-cols-2 md:divide-x md:divide-gray-200',
        'borderless-stacked': '',
        double: '',
        'small-with-meetings': ''
      }
    },
    defaultVariants: {
      variant: 'month'
    }
  }
)

const calendarDayButtonVariants = cva(
  'mx-auto flex size-8 items-center justify-center rounded-full',
  {
    variants: {
      isSelected: {
        true: 'text-white font-semibold',
        false: ''
      },
      isToday: {
        true: 'font-semibold',
        false: ''
      },
      isCurrentMonth: {
        true: 'text-gray-900',
        false: 'text-gray-400'
      }
    },
    compoundVariants: [
      {
        isSelected: true,
        isToday: true,
        class: 'bg-indigo-600'
      },
      {
        isSelected: true,
        isToday: false,
        class: 'bg-gray-900'
      },
      {
        isSelected: false,
        isToday: true,
        class: 'text-indigo-600'
      },
      {
        isSelected: false,
        class: 'hover:bg-gray-200'
      }
    ],
    defaultVariants: {
      isSelected: false,
      isToday: false,
      isCurrentMonth: true
    }
  }
)

const calendarNavigationButtonVariants = cva(
  'flex flex-none items-center justify-center text-gray-400 hover:text-gray-500',
  {
    variants: {
      variant: {
        borderless: '-my-1.5 p-1.5',
        bordered: 'h-9 border-y border-gray-300 focus:relative md:hover:bg-gray-50'
      },
      position: {
        left: '',
        right: '',
        middle: ''
      }
    },
    compoundVariants: [
      {
        variant: 'bordered',
        position: 'left',
        class: 'w-12 rounded-l-md border-l pr-1 md:w-9 md:pr-0'
      },
      {
        variant: 'bordered',
        position: 'right',
        class: 'w-12 rounded-r-md border-r pl-1 md:w-9 md:pl-0'
      },
      {
        variant: 'borderless',
        position: 'left',
        class: '-my-1.5 p-1.5'
      },
      {
        variant: 'borderless',
        position: 'right',
        class: '-my-1.5 -mr-1.5 ml-2 p-1.5'
      }
    ],
    defaultVariants: {
      variant: 'borderless',
      position: 'left'
    }
  }
)

const calendarEventItemVariants = cva(
  'group flex items-center gap-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100',
  {
    variants: {
      variant: {
        simple: '',
        meeting: 'rounded-xl px-4 py-2'
      }
    },
    defaultVariants: {
      variant: 'simple'
    }
  }
)

export interface CalendarProps extends VariantProps<typeof calendarContainerVariants> {
  days: CalendarDay[]
  meetings?: CalendarEvent[]
  selectedDay?: CalendarDay | null
  currentMonth?: string
  className?: string
  onDateSelect?: (day: CalendarDay) => void
  onPreviousMonth?: () => void
  onNextMonth?: () => void
}


export function Calendar({ 
  variant = 'month', 
  days, 
  meetings = [],
  selectedDay = null,
  currentMonth = 'January 2022',
  className,
  onDateSelect,
  onPreviousMonth,
  onNextMonth
}: CalendarProps) {
  
  if (variant === 'borderless-side-by-side') {
    return (
      <div className={cn(calendarContainerVariants({ variant }), className)}>
        <div className="md:pr-14">
          <div className="flex items-center">
            <h2 className="flex-auto text-sm font-semibold text-gray-900">{currentMonth}</h2>
            <button
              type="button"
              onClick={onPreviousMonth}
              className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={onNextMonth}
              className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className="size-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-10 grid grid-cols-7 text-center text-xs/6 text-gray-500">
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            <div>S</div>
          </div>
          <div className="mt-2 grid grid-cols-7 text-sm">
            {days.map((day, dayIdx) => (
              <div key={day.date} className={cn(dayIdx > 6 && 'border-t border-gray-200', 'py-2')}>
                <button
                  type="button"
                  onClick={() => onDateSelect?.(day)}
                  className={cn(
                    day.isSelected && 'text-white',
                    !day.isSelected && day.isToday && 'text-indigo-600',
                    !day.isSelected && !day.isToday && day.isCurrentMonth && 'text-gray-900',
                    !day.isSelected && !day.isToday && !day.isCurrentMonth && 'text-gray-400',
                    day.isSelected && day.isToday && 'bg-indigo-600',
                    day.isSelected && !day.isToday && 'bg-gray-900',
                    !day.isSelected && 'hover:bg-gray-200',
                    (day.isSelected || day.isToday) && 'font-semibold',
                    'mx-auto flex size-8 items-center justify-center rounded-full',
                  )}
                >
                  <time dateTime={day.date}>{day.date.split('-').pop()?.replace(/^0/, '')}</time>
                </button>
              </div>
            ))}
          </div>
        </div>
        <section className="mt-12 md:mt-0 md:pl-14">
          <h2 className="text-base font-semibold text-gray-900">
            Schedule for <time dateTime={selectedDay?.date}>{selectedDay?.date ? new Date(selectedDay.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Select a date'}</time>
          </h2>
          <ol className="mt-4 flex flex-col gap-y-1 text-sm/6 text-gray-500">
            {(selectedDay?.events || meetings).map((meeting) => (
              <li
                key={meeting.id}
                className="group flex items-center gap-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100"
              >
                <div className="flex-auto">
                  <p className="text-gray-900">{meeting.name}</p>
                  {meeting.time && (
                    <p className="mt-0.5">
                      <time dateTime={meeting.datetime}>{meeting.time}</time>
                    </p>
                  )}
                </div>
                <Menu as="div" className="relative opacity-0 group-hover:opacity-100 focus-within:opacity-100">
                  <div>
                    <MenuButton className="relative flex items-center rounded-full text-gray-500 outline-offset-6 hover:text-gray-600">
                      <span className="absolute -inset-2"></span>
                      <span className="sr-only">Open options</span>
                      <EllipsisHorizontalIcon className="size-6" aria-hidden="true" />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    <div className="py-1">
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900"
                        >
                          Edit
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900"
                        >
                          Cancel
                        </a>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>
              </li>
            ))}
          </ol>
        </section>
      </div>
    )
  }

  if (variant === 'borderless-stacked') {
    return (
      <div className={cn("", className)}>
        <div className="flex items-center text-gray-900">
          <button
            type="button"
            onClick={onPreviousMonth}
            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="size-5" aria-hidden="true" />
          </button>
          <div className="flex-auto text-sm font-semibold">{currentMonth}</div>
          <button
            type="button"
            onClick={onNextMonth}
            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="size-5" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-10 grid grid-cols-7 text-center text-xs/6 text-gray-500">
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
          <div>S</div>
        </div>
        <div className="mt-2 grid grid-cols-7 text-sm">
          {days.map((day, dayIdx) => (
            <div key={day.date} className={cn(dayIdx > 6 && 'border-t border-gray-200', 'py-2')}>
              <button
                type="button"
                onClick={() => onDateSelect?.(day)}
                className={cn(
                  day.isSelected && 'text-white',
                  !day.isSelected && day.isToday && 'text-indigo-600',
                  !day.isSelected && !day.isToday && day.isCurrentMonth && 'text-gray-900',
                  !day.isSelected && !day.isToday && !day.isCurrentMonth && 'text-gray-400',
                  day.isSelected && day.isToday && 'bg-indigo-600',
                  day.isSelected && !day.isToday && 'bg-gray-900',
                  !day.isSelected && 'hover:bg-gray-200',
                  (day.isSelected || day.isToday) && 'font-semibold',
                  'mx-auto flex size-8 items-center justify-center rounded-full',
                )}
              >
                <time dateTime={day.date}>{day.date.split('-').pop()?.replace(/^0/, '')}</time>
              </button>
            </div>
          ))}
        </div>
        <section className="mt-12">
          <h2 className="text-base font-semibold text-gray-900">
            Schedule for <time dateTime={selectedDay?.date}>{selectedDay?.date ? new Date(selectedDay.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Select a date'}</time>
          </h2>
          <ol className="mt-4 flex flex-col gap-y-1 text-sm/6 text-gray-500">
            {(selectedDay?.events || meetings).map((meeting) => (
              <li
                key={meeting.id}
                className="group flex items-center gap-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100"
              >
                <div className="flex-auto">
                  <p className="text-gray-900">{meeting.name}</p>
                  {meeting.time && (
                    <p className="mt-0.5">
                      <time dateTime={meeting.datetime}>{meeting.time}</time>
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    )
  }

  // Default month view
  return (
    <div className={cn("", className)}>
      <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
        <h1 className="text-base font-semibold text-gray-900">
          <time dateTime="2022-01">{currentMonth}</time>
        </h1>
        <div className="flex items-center">
          <div className="relative flex items-center rounded-md bg-white shadow-xs md:items-stretch">
            <button
              type="button"
              onClick={onPreviousMonth}
              className="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
            >
              Today
            </button>
            <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
            <button
              type="button"
              onClick={onNextMonth}
              className="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className="size-5" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:ml-4 md:flex md:items-center">
            <Menu as="div" className="relative">
              <MenuButton
                type="button"
                className="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
              >
                Month view
                <ChevronDownIcon className="-mr-1 size-5 text-gray-400" aria-hidden="true" />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Day view
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Week view
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Month view
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Year view
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </header>
      <div className="shadow-sm ring-1 ring-black/5 lg:flex lg:flex-auto lg:flex-col">
        <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs/6 font-semibold text-gray-700 lg:flex-none">
          <div className="bg-white py-2">
            M<span className="sr-only sm:not-sr-only">on</span>
          </div>
          <div className="bg-white py-2">
            T<span className="sr-only sm:not-sr-only">ue</span>
          </div>
          <div className="bg-white py-2">
            W<span className="sr-only sm:not-sr-only">ed</span>
          </div>
          <div className="bg-white py-2">
            T<span className="sr-only sm:not-sr-only">hu</span>
          </div>
          <div className="bg-white py-2">
            F<span className="sr-only sm:not-sr-only">ri</span>
          </div>
          <div className="bg-white py-2">
            S<span className="sr-only sm:not-sr-only">at</span>
          </div>
          <div className="bg-white py-2">
            S<span className="sr-only sm:not-sr-only">un</span>
          </div>
        </div>
        <div className="flex bg-gray-200 text-xs/6 text-gray-700 lg:flex-auto">
          <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
            {days.map((day) => (
              <div
                key={day.date}
                className={cn(
                  day.isCurrentMonth ? 'bg-white' : 'bg-gray-50 text-gray-500',
                  'relative px-3 py-2',
                )}
              >
                <time
                  dateTime={day.date}
                  className={
                    day.isToday
                      ? 'flex size-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white'
                      : undefined
                  }
                >
                  {day.date.split('-').pop()?.replace(/^0/, '')}
                </time>
                {day.events && day.events.length > 0 && (
                  <ol className="mt-2">
                    {day.events.slice(0, 2).map((event) => (
                      <li key={event.id}>
                        <a href={event.href} className="group flex">
                          <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
                            {event.name}
                          </p>
                          <time
                            dateTime={event.datetime}
                            className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
                          >
                            {event.time}
                          </time>
                        </a>
                      </li>
                    ))}
                    {day.events.length > 2 && <li className="text-gray-500">+ {day.events.length - 2} more</li>}
                  </ol>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export { calendarContainerVariants, calendarDayButtonVariants, calendarNavigationButtonVariants, calendarEventItemVariants }
