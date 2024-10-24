'use client'

import { TypographyBlock } from './typography-block'
import { css } from '@cerberus/styled-system/css'
import { textStyles } from '@cerberus-design/panda-preset'
import { useState, type ChangeEvent } from 'react'

export default function TypographyList() {
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
            placeholder="Type here to preview text"
            type="text"
            value={temporaryText}
            onChange={handleUpdateText}
          />
        </label>
      </div>
      {Object.keys(textStyles).map((textStyle) => (
        <TypographyBlock
          key={textStyle}
          group={textStyle}
          liveText={temporaryText}
        />
      ))}
    </div>
  )
}
