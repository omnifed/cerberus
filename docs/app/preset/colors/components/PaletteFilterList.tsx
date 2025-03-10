'use client'

import { hstack } from 'styled-system/patterns'
import type { Sentiment } from '@cerberus-design/panda-preset'
import { tag } from 'styled-system/recipes'
import type { ButtonHTMLAttributes } from 'react'
import { css, cx } from 'styled-system/css'
import paletteData from '@/app/data/palettes.json'

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
      {paletteData.items.map((palette) => (
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
            {
              paletteData.results[palette as keyof typeof paletteData.results]
                .slug
            }
          </button>
        </li>
      ))}
    </ul>
  )
}
