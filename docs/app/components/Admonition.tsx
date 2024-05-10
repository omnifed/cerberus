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
        bgColor: 'info.surface.initial',
        color: 'info.text.100',
        mb: '6',
        mt: '4',
        p: '4',
        rounded: 'xl',
      })}
    >
      <div
        className={hstack({
          color: 'info.text.initial !important',
          pb: '2',
        })}
      >
        <Information aria-hidden size="1.25rem" />
        <p
          className={css({
            color: 'info.text.initial !important',
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
