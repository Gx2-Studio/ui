import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { BaseComponentProps } from '../../utils/types'

const mediaObjectVariants = cva(
  'flex',
  {
    variants: {
      mediaAlignment: {
        top: 'items-start',
        center: 'items-center',
        bottom: 'items-end'
      },
      responsive: {
        true: 'flex-col sm:flex-row',
        false: ''
      }
    },
    defaultVariants: {
      mediaAlignment: 'top',
      responsive: false
    }
  }
)

const mediaObjectMediaVariants = cva(
  'shrink-0',
  {
    variants: {
      spacing: {
        sm: '',
        md: '',
        lg: ''
      },
      position: {
        left: '',
        right: ''
      }
    },
    compoundVariants: [
      { spacing: 'sm', position: 'left', class: 'mr-2' },
      { spacing: 'md', position: 'left', class: 'mr-4' },
      { spacing: 'lg', position: 'left', class: 'mr-6' },
      { spacing: 'sm', position: 'right', class: 'ml-2' },
      { spacing: 'md', position: 'right', class: 'ml-4' },
      { spacing: 'lg', position: 'right', class: 'ml-6' }
    ],
    defaultVariants: {
      spacing: 'md',
      position: 'left'
    }
  }
)

const mediaObjectContentVariants = cva(
  'min-w-0 flex-1',
  {
    variants: {
      responsive: {
        true: 'w-full',
        false: ''
      }
    },
    defaultVariants: {
      responsive: false
    }
  }
)

const mediaObjectTitleVariants = cva(
  'text-lg font-bold text-gray-900',
  {
    variants: {},
    defaultVariants: {}
  }
)

interface MediaObjectProps extends BaseComponentProps,
  VariantProps<typeof mediaObjectVariants> {
  media: React.ReactNode
  title?: string
  children: React.ReactNode
  mediaPosition?: 'left' | 'right'
  spacing?: 'sm' | 'md' | 'lg'
}

export const MediaObject = forwardRef<HTMLDivElement, MediaObjectProps>(
  ({ 
    className,
    media,
    title,
    children,
    mediaPosition = 'left',
    mediaAlignment = 'top',
    spacing = 'md',
    responsive = false,
    ...props
  }, ref) => {
    const mediaElement = (
      <div className={mediaObjectMediaVariants({ spacing, position: mediaPosition })}>
        {media}
      </div>
    )

    const contentElement = (
      <div className={mediaObjectContentVariants({ responsive })}>
        {title && (
          <h4 className={mediaObjectTitleVariants()}>
            {title}
          </h4>
        )}
        <div className={cn(title && 'mt-1')}>
          {children}
        </div>
      </div>
    )

    return (
      <div 
        ref={ref}
        className={cn(mediaObjectVariants({ mediaAlignment, responsive }), className)}
        {...props}
      >
        {mediaPosition === 'left' ? (
          <>
            {mediaElement}
            {contentElement}
          </>
        ) : (
          <>
            {contentElement}
            {mediaElement}
          </>
        )}
      </div>
    )
  }
)

MediaObject.displayName = 'MediaObject'

export { mediaObjectVariants, mediaObjectMediaVariants, mediaObjectContentVariants, mediaObjectTitleVariants }
export type { MediaObjectProps }