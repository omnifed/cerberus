'use client'

import { Suspense, lazy, useState, type ChangeEvent } from 'react'
import { css } from '@cerberus/styled-system/css'
import { container } from '@cerberus/styled-system/patterns'

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
      })}
    >
      <div
        className={css({
          bgColor: 'page.surface.initial',
          position: 'sticky',
          py: '2',
          top: '-1.75rem',
          zIndex: 'sticky',
          _after: {
            bottom: '-1.8rem',
            bgGradient: 'to-b',
            content: '""',
            gradientFrom: 'page.surface.initial',
            gradientTo: 'transparent',
            h: '8',
            left: '0',
            position: 'absolute',
            right: '0',
          },
          lg: {
            top: '-2.5rem',
          },
        })}
      >
        <label aria-label="search icons">
          <input
            className={css({
              border: '1px solid',
              borderColor: 'page.border.initial',
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
