'use client'

import { Suspense, lazy, useState, type ChangeEvent } from 'react'
import { css } from '@/styled-system/css'
import { container } from '@/styled-system/patterns'

const IconsList = lazy(() => import('./icons-list'))

export default function SearchableIcons() {
  const [filter, setFilter] = useState<string>('')

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFilter(event.currentTarget.value)
  }

  return (
    <div
      className={container({
        position: 'relative',
        mt: '4',
      })}
    >
      <div
        className={css({
          bgColor: 'neutral.surface.100',
          position: 'sticky',
          py: '2',
          top: '0',
          zIndex: 'sticky',
          _after: {
            bottom: '-1.8rem',
            bgGradient: 'to-b',
            content: '""',
            gradientFrom: 'neutral.surface.100',
            gradientTo: 'transparent',
            h: '8',
            left: '0',
            position: 'absolute',
            right: '0',
          },
        })}
      >
        <label aria-label="search icons">
          <input
            className={css({
              border: '1px solid',
              borderColor: 'neutral.border.initial',
              borderRadius: 'full',
              p: '4',
              w: 'full',
              _focus: {
                outlineOffset: '4px',
                outline: '2px solid',
                outlineColor: 'info.border.initial',
              },
            })}
            name="search"
            placeholder="Search icons"
            onChange={handleChange}
            type="text"
            value={filter}
          />
        </label>
      </div>

      <Suspense>
        <IconsList filter={filter} />
      </Suspense>
    </div>
  )
}
