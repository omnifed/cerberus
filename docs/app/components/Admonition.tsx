import { css } from '@/styled-system/css'
import { hstack } from '@/styled-system/patterns'
import { Information } from '@cerberus-design/icons'
import type { PropsWithChildren } from 'react'

// TODO: Replace with React version when available

interface AdmonitionProps {
  heading: string
  description: string
}

export function Admonition(props: PropsWithChildren<AdmonitionProps>) {
  return (
    <div
      className={css({
        borderColor: 'info.border.initial',
        bgColor: 'info.surface.initial',
        color: 'info.text.initial',
        mb: '6',
        p: '4',
        rounded: 'xl',
      })}
    >
      <div
        className={hstack({
          pb: '2',
        })}
      >
        <Information aria-hidden size="1.25rem" />
        <p
          className={css({
            pb: 'initial !important',
            textStyle: 'h5 !important',
          })}
        >
          {props.heading}
        </p>
      </div>
      <p>{props.description}</p>
    </div>
  )
}
