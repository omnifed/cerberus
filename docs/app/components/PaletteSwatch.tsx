import { type Sentiment } from '@cerberus-design/panda-preset'
import { circle, hstack } from '@cerberus/styled-system/patterns'
import type { PropsWithChildren } from 'react'

interface PaletteAvatar {
  palette: Sentiment
}

export function PaletteAvatar(props: PropsWithChildren<PaletteAvatar>) {
  return (
    <div className={hstack()}>
      <span
        data-palette={props.palette}
        className={circle({
          border: '1px solid',
          borderColor: 'page.border.initial',
          size: '4',
          _pagePalette: {
            bgColor: 'page.surface.initial',
          },
          _actionPalette: {
            bgColor: 'action.bg.initial',
          },
          _secondaryActionPalette: {
            bgColor: 'secondaryAction.bg.initial',
          },
          _infoPalette: {
            bgColor: 'info.surface.initial',
          },
          _successPalette: {
            bgColor: 'success.surface.initial',
          },
          _warningPalette: {
            bgColor: 'warning.surface.initial',
          },
          _dangerPalette: {
            bgColor: 'danger.surface.initial',
          },
        })}
      />
      {props.children}
    </div>
  )
}
