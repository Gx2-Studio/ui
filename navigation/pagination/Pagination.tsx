import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'
import { 
  ArrowLongLeftIcon, 
  ArrowLongRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon 
} from '@heroicons/react/20/solid'

const paginationVariants = cva(
  'flex items-center justify-between',
  {
    variants: {
      variant: {
        simple: 'border-t border-gray-200 bg-white px-4 py-3 sm:px-6',
        numbered: 'border-t border-gray-200 px-4 sm:px-0',
        card: 'border-t border-gray-200 bg-white px-4 py-3 sm:px-6'
      }
    },
    defaultVariants: {
      variant: 'numbered'
    }
  }
)

const paginationButtonVariants = cva(
  'relative inline-flex items-center transition-colors',
  {
    variants: {
      variant: {
        simple: 'rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus-visible:outline-offset-0',
        numbered: 'border-t-2 border-transparent pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700',
        card: 'rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
      },
      isDisabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: ''
      }
    },
    compoundVariants: [
      {
        variant: 'numbered',
        class: 'pr-1'
      }
    ],
    defaultVariants: {
      variant: 'numbered',
      isDisabled: false
    }
  }
)

const pageButtonVariants = cva(
  'inline-flex items-center px-4 pt-4 text-sm font-medium transition-colors',
  {
    variants: {
      variant: {
        numbered: 'border-t-2',
        card: 'px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0 ring-1 ring-gray-300 ring-inset'
      },
      isActive: {
        true: '',
        false: ''
      }
    },
    compoundVariants: [
      {
        variant: 'numbered',
        isActive: true,
        class: 'border-indigo-500 text-indigo-600'
      },
      {
        variant: 'numbered',
        isActive: false,
        class: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
      },
      {
        variant: 'card',
        isActive: true,
        class: 'z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      },
      {
        variant: 'card',
        isActive: false,
        class: 'text-gray-900 hover:bg-gray-50'
      }
    ],
    defaultVariants: {
      variant: 'numbered',
      isActive: false
    }
  }
)

interface PaginationProps extends BaseComponentProps,
  VariantProps<typeof paginationVariants> {
  currentPage: number
  totalPages: number
  onPageChange?: (page: number) => void
  onPrevious?: () => void
  onNext?: () => void
  showPageNumbers?: boolean
  showInfo?: boolean
  totalItems?: number
  itemsPerPage?: number
  pageRangeDisplayed?: number
  previousLabel?: string
  nextLabel?: string
  showFirstAndLast?: boolean
}

export const Pagination = forwardRef<HTMLDivElement | HTMLElement, PaginationProps>(
  ({ 
    className,
    currentPage,
    totalPages,
    onPageChange,
    onPrevious,
    onNext,
    variant = 'numbered',
    showPageNumbers = true,
    showInfo = true,
    totalItems,
    itemsPerPage = 10,
    pageRangeDisplayed = 3,
    previousLabel = 'Previous',
    nextLabel = 'Next',
    showFirstAndLast = true,
    ...props
  }, ref) => {
    const handlePageChange = (page: number) => {
      if (page >= 1 && page <= totalPages && page !== currentPage) {
        onPageChange?.(page)
      }
    }

    const handlePrevious = () => {
      if (onPrevious) {
        onPrevious()
      } else if (currentPage > 1) {
        handlePageChange(currentPage - 1)
      }
    }

    const handleNext = () => {
      if (onNext) {
        onNext()
      } else if (currentPage < totalPages) {
        handlePageChange(currentPage + 1)
      }
    }

    const getVisiblePages = () => {
      const pages: (number | 'ellipsis')[] = []
      const halfRange = Math.floor(pageRangeDisplayed / 2)
      
      let startPage = Math.max(1, currentPage - halfRange)
      let endPage = Math.min(totalPages, currentPage + halfRange)
      
      // Adjust if we're near the beginning
      if (currentPage <= halfRange) {
        endPage = Math.min(totalPages, pageRangeDisplayed)
      }
      
      // Adjust if we're near the end
      if (currentPage + halfRange >= totalPages) {
        startPage = Math.max(1, totalPages - pageRangeDisplayed + 1)
      }
      
      // Add first page and ellipsis if needed
      if (showFirstAndLast && startPage > 1) {
        pages.push(1)
        if (startPage > 2) {
          pages.push('ellipsis')
        }
      }
      
      // Add visible pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
      }
      
      // Add ellipsis and last page if needed
      if (showFirstAndLast && endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push('ellipsis')
        }
        pages.push(totalPages)
      }
      
      return pages
    }

    const startItem = totalItems ? (currentPage - 1) * itemsPerPage + 1 : 0
    const endItem = totalItems ? Math.min(currentPage * itemsPerPage, totalItems) : 0

    const renderInfo = () => {
      if (!showInfo || !totalItems) return null
      
      return (
        <div className={variant === 'simple' ? 'hidden sm:block' : ''}>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{startItem}</span> to{' '}
            <span className="font-medium">{endItem}</span> of{' '}
            <span className="font-medium">{totalItems}</span> results
          </p>
        </div>
      )
    }

    const renderPageNumbers = () => {
      if (variant === 'simple' || (!showPageNumbers && variant === 'numbered')) return null

      const pages = getVisiblePages()
      
      return pages.map((page, index) => (
        page === 'ellipsis' ? (
          <span 
            key={`ellipsis-${index}`}
            className={cn(
              variant === 'card' 
                ? 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0'
                : 'inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500'
            )}
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            aria-current={page === currentPage ? 'page' : undefined}
            className={cn(
              pageButtonVariants({ 
                variant: variant === 'card' ? 'card' : 'numbered',
                isActive: page === currentPage 
              }),
              variant === 'card' && index === 0 && 'rounded-l-md',
              variant === 'card' && index === pages.length - 1 && 'rounded-r-md'
            )}
          >
            {page}
          </button>
        )
      ))
    }

    const renderNavButtons = () => {
      const prevDisabled = currentPage <= 1
      const nextDisabled = currentPage >= totalPages

      if (variant === 'simple') {
        return (
          <div className="flex flex-1 justify-between sm:justify-end">
            <button
              onClick={handlePrevious}
              disabled={prevDisabled}
              className={paginationButtonVariants({ variant, isDisabled: prevDisabled })}
            >
              {previousLabel}
            </button>
            <button
              onClick={handleNext}
              disabled={nextDisabled}
              className={cn(
                paginationButtonVariants({ variant, isDisabled: nextDisabled }),
                'ml-3'
              )}
            >
              {nextLabel}
            </button>
          </div>
        )
      }

      if (variant === 'card') {
        return (
          <>
            <div className="flex flex-1 justify-between sm:hidden">
              <button
                onClick={handlePrevious}
                disabled={prevDisabled}
                className={paginationButtonVariants({ variant, isDisabled: prevDisabled })}
              >
                {previousLabel}
              </button>
              <button
                onClick={handleNext}
                disabled={nextDisabled}
                className={cn(
                  paginationButtonVariants({ variant, isDisabled: nextDisabled }),
                  'ml-3'
                )}
              >
                {nextLabel}
              </button>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              {renderInfo()}
              <div>
                <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-xs">
                  <button
                    onClick={handlePrevious}
                    disabled={prevDisabled}
                    className={cn(
                      'relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 transition-colors',
                      prevDisabled && 'opacity-50 cursor-not-allowed'
                    )}
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon aria-hidden="true" className="size-5" />
                  </button>
                  {renderPageNumbers()}
                  <button
                    onClick={handleNext}
                    disabled={nextDisabled}
                    className={cn(
                      'relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 transition-colors',
                      nextDisabled && 'opacity-50 cursor-not-allowed'
                    )}
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon aria-hidden="true" className="size-5" />
                  </button>
                </nav>
              </div>
            </div>
          </>
        )
      }

      // Numbered variant
      return (
        <>
          <div className="-mt-px flex w-0 flex-1">
            <button
              onClick={handlePrevious}
              disabled={prevDisabled}
              className={paginationButtonVariants({ variant, isDisabled: prevDisabled })}
            >
              <ArrowLongLeftIcon aria-hidden="true" className="mr-3 size-5 text-gray-400" />
              {previousLabel}
            </button>
          </div>
          
          {showPageNumbers && (
            <div className="hidden md:-mt-px md:flex">
              {renderPageNumbers()}
            </div>
          )}
          
          <div className="-mt-px flex w-0 flex-1 justify-end">
            <button
              onClick={handleNext}
              disabled={nextDisabled}
              className={cn(
                paginationButtonVariants({ variant, isDisabled: nextDisabled }),
                'pl-1'
              )}
            >
              {nextLabel}
              <ArrowLongRightIcon aria-hidden="true" className="ml-3 size-5 text-gray-400" />
            </button>
          </div>
        </>
      )
    }

    const Element = variant === 'numbered' ? 'nav' : 'div'

    return (
      <Element 
        ref={ref as any}
        aria-label={variant === 'numbered' ? 'Pagination' : undefined}
        className={cn(paginationVariants({ variant }), className)}
        {...props}
      >
        {variant === 'simple' && renderInfo()}
        {renderNavButtons()}
      </Element>
    )
  }
)

Pagination.displayName = 'Pagination'

export { paginationVariants, paginationButtonVariants, pageButtonVariants }
export type { PaginationProps }