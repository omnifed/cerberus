import type { Sentiment } from '@cerberus-design/panda-preset'
import { circle, hstack } from '@cerberus/styled-system/patterns'
import type { PropsWithChildren } from 'react'

interface PaletteAvatar {
  palette: Sentiment
}

export function PaletteAvatar(props: PropsWithChildren<PaletteAvatar>) {
  const bgColor =
    props.palette == 'action'
      ? `${props.palette}.bg.initial`
      : `${props.palette}.surface.initial`

  return (
    <div className={hstack()}>
      <span
        className={circle({
          bgColor,
          border: '1px solid',
          borderColor: 'neutral.border.initial',
          size: '4',
        })}
      />
      {props.children}
    </div>
  )
}
