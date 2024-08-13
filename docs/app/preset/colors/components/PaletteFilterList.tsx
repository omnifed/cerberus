'use client'

import { hstack } from '@cerberus/styled-system/patterns'
import { PALETTES } from './FilterablePaletteSection'
import { Tag, type ClickableTagProps } from '@cerberus-design/react'
import type { Sentiment } from '@cerberus-design/panda-preset'
import { tag } from '@cerberus/styled-system/recipes'
import type { ButtonHTMLAttributes } from 'react'
import { css, cx } from '@cerberus/styled-system/css'

const nonActiveTagStyles = cx(
  tag({
    usage: 'outlined',
  }),
  css({
    transitionProperty: 'border-color',
    transitionDuration: 'slow',
    _hover: {
      borderColor: 'action.border.initial',
    },
  }),
)
const activeTagStyles = tag({
  palette: 'success',
  usage: 'filled',
})

interface PaletteFilterListProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  activePalette: Sentiment
}

export function PaletteFilterList(props: PaletteFilterListProps) {
  return (
    <ul
      className={hstack({
        overflowX: 'auto',
        pb: '4',
        pt: '2',
        w: 'full',
      })}
    >
      {PALETTES.map((palette) => (
        <li key={palette}>
          <button
            className={
              palette === props.activePalette
                ? activeTagStyles
                : nonActiveTagStyles
            }
            onClick={props.onClick}
            value={palette}
          >
            {palette}
          </button>
        </li>
      ))}
    </ul>
  )
}
