'use client'

import { TypographyBlock } from './typography-block'
import { css } from '@cerberus-design/styled-system/css'
import { useState, type ChangeEvent } from 'react'

interface TypographyListProps {}

export default function TypographyList(props: TypographyListProps) {
  const [temporaryText, setTemporaryText] = useState<string>('')

  function handleUpdateText(e: ChangeEvent<HTMLInputElement>) {
    setTemporaryText(e.currentTarget.value)
  }

  return (
    <div
      className={css({
        mt: '8',
      })}
    >
      <div
        className={css({
          mb: '8',
        })}
      >
        <label aria-label="update text">
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
            placeholder="Type here to preview text"
            type="text"
            value={temporaryText}
            onChange={handleUpdateText}
          />
        </label>
      </div>

      <TypographyBlock group="display" liveText={temporaryText} />
      <TypographyBlock group="h" liveText={temporaryText} />
      <TypographyBlock group="body" liveText={temporaryText} />
      <TypographyBlock group="mono" liveText={temporaryText} />
      <TypographyBlock group="link" liveText={temporaryText} />
    </div>
  )
}
