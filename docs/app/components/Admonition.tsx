import { css, cx } from '@/styled-system/css'
import { hstack } from '@/styled-system/patterns'
import {
  DataEnrichmentAdd,
  Information,
  Light,
  WarningHex,
} from '@cerberus-design/icons'
import type { Sentiment } from '@cerberus-design/panda-preset'
import type { PropsWithChildren, ReactNode } from 'react'

// TODO: Replace with React version when available

interface AdmonitionProps {
  description: string
  heading: string
  icon: ReactNode
  palette: Sentiment
}

function getPaletteStyles(palette: Sentiment) {
  switch (palette) {
    case 'success':
      return css({
        bgColor: 'success.surface.initial',
        color: 'success.border.initial',
      })

    case 'warning':
      return css({
        bgColor: 'warning.surface.initial',
        color: 'warning.border.initial',
      })

    case 'danger':
      return css({
        bgColor: 'danger.surface.initial',
        color: 'danger.border.initial',
      })

    case 'info':
    default:
      return css({
        bgColor: 'info.surface.initial',
        color: 'info.border.initial',
      })
  }
}

function getPaletteTextStyles(palette: Sentiment) {
  switch (palette) {
    case 'success':
      return css({
        color: 'success.text.initial !important',
      })

    case 'warning':
      return css({
        color: 'warning.text.initial !important',
      })

    case 'danger':
      return css({
        color: 'danger.text.initial !important',
        _darkMode: {
          color: 'danger.text.inverse !important',
        },
      })

    case 'info':
    default:
      return css({
        color: 'info.text.initial !important',
      })
  }
}

export function Admonition(props: PropsWithChildren<AdmonitionProps>) {
  const paletteStyles = getPaletteStyles(props.palette)
  const textStyles = getPaletteTextStyles(props.palette)

  return (
    <div
      className={cx(
        paletteStyles,
        css({
          mb: '6',
          mt: '4',
          pb: '4',
          pxi: '6',
          pt: '6',
          rounded: '2xl',
        }),
      )}
    >
      <div
        className={hstack({
          color: 'inherit !important',
          pb: '2',
        })}
      >
        {props.icon}
        <p
          className={cx(
            textStyles,
            css({
              pb: 'initial !important',
              paddingInlineStart: '2',
              textStyle: 'h5 !important',
            }),
          )}
        >
          {props.heading}
        </p>
      </div>
      <p
        className={cx(
          textStyles,
          css({
            paddingInlineStart: '10',
            pt: '2',
            textWrap: 'pretty',
          }),
        )}
      >
        {props.description}
      </p>
    </div>
  )
}

interface AdmonitionTypeProps {
  description: string
}

export function NoteAdmonition(props: AdmonitionTypeProps) {
  return (
    <Admonition
      heading="Note"
      description={props.description}
      icon={<Information aria-hidden size="1.5rem" />}
      palette="info"
    />
  )
}

export function WhenToUseAdmonition(props: AdmonitionTypeProps) {
  return (
    <Admonition
      heading="When to use"
      description={props.description}
      icon={<DataEnrichmentAdd aria-hidden size="1.5rem" />}
      palette="success"
    />
  )
}

export function WhenNotToUseAdmonition(props: AdmonitionTypeProps) {
  return (
    <Admonition
      heading="When not to use"
      description={props.description}
      icon={<WarningHex aria-hidden size="1.5rem" />}
      palette="danger"
    />
  )
}
