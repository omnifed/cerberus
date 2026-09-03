'use client'

import { useSignal } from '@cerberus-design/signals'
import { textStyles } from '@cerberus/panda-preset'
import { useMemo, type ChangeEvent } from 'react'
import { css } from 'styled-system/css'
import { TypographyBlock } from './block'

export default function TypographyList() {
  const [temporaryText, setTemporaryText] = useSignal<string>('')
  const textStylesWithoutHTags = useMemo(() => {
    return Object.keys(textStyles).reduce((acc: Record<string, unknown>, key) => {
      if (!/^(h[1-6])$/.test(key)) {
        acc[key] = textStyles[key]
      }
      return acc
    }, {})
  }, [])

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

      {Object.keys(textStylesWithoutHTags).map((textStyleName) => (
        <TypographyBlock
          key={textStyleName}
          group={textStyleName}
          liveText={temporaryText}
        />
      ))}
    </div>
  )
}
