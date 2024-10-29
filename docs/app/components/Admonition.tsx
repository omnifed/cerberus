import { css } from '@cerberus/styled-system/css'
import { hstack } from '@cerberus/styled-system/patterns'
import {
  DataEnrichmentAdd,
  Information,
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

export function Admonition(props: PropsWithChildren<AdmonitionProps>) {
  return (
    <div
      data-palette={props.palette}
      className={css({
        mb: '6',
        mt: '4',
        pxi: '6',
        py: '6',
        rounded: '2xl',
        _infoPalette: {
          bgColor: 'info.surface.100',
          color: 'info.text.100',
        },
        _successPalette: {
          bgColor: 'success.surface.100',
          color: 'success.text.100',
        },
        _warningPalette: {
          bgColor: 'warning.surface.100',
          color: 'warning.text.100',
        },
        _dangerPalette: {
          bgColor: 'danger.surface.100',
          color: 'danger.text.100',
        },
      })}
    >
      <div
        className={hstack({
          color: 'inherit',
          pb: '2',
        })}
      >
        <span
          data-palette={props.palette}
          className={css({
            _infoPalette: {
              color: 'info.border.initial',
            },
            _successPalette: {
              color: 'success.border.initial',
            },
            _warningPalette: {
              color: 'warning.border.initial',
            },
            _dangerPalette: {
              color: 'danger.border.initial',
            },
          })}
        >
          {props.icon}
        </span>
        <p
          className={css({
            pb: 'initial',
            paddingInlineStart: '2',
            textStyle: 'h5',
          })}
        >
          {props.heading}
        </p>
      </div>
      <p
        className={css({
          paddingInlineStart: '10',
          pt: '2',
          textWrap: 'pretty',
        })}
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
