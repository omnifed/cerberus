'use client'

import { useThemeContext } from '@cerberus-design/react'
import type { SemanticToken, Sentiment } from '@cerberus-design/panda-preset'
import { useEffect, useMemo, useState } from 'react'
import { css, cx } from '@/styled-system/css'
import { hstack, vstack } from '@/styled-system/patterns'
import { Checkmark } from '@cerberus-design/icons'
import { hasWhiteBase } from '@/app/utils/colors'
import Link from 'next/link'

// We have to use !important to override the .MDX styles
const paletteTextStyles = css({
  textAlign: 'center',

  '&[data-palette="neutral"]': {
    color: 'neutral.text.initial !important',
    '&[data-has-white="true"]': {
      color: 'neutral.text.inverse !important',
    },
  },
  '&[data-palette="action"]': {
    color: 'action.text.initial !important',
    '&[data-has-white="true"]': {
      color: 'action.text.inverse !important',
    },
    '&[data-mode="light"]': {
      color: 'action.text.inverse !important',
      '&[data-has-white="true"]': {
        color: 'action.text.initial !important',
      },
    },
  },
  '&[data-palette="info"]': {
    color: 'info.text.initial !important',
    '&[data-has-white="true"]': {
      color: 'info.surface.initial !important',
    },
  },
  '&[data-palette="success"]': {
    color: 'success.text.initial !important',
    '&[data-has-white="true"]': {
      color: 'success.text.inverse !important',
    },
    '&[data-mode="light"]': {
      color: 'success.surface.initial !important',
      '&[data-has-white="false"]': {
        color: 'success.text.initial !important',
      },
    },
  },
  '&[data-palette="warning"]': {
    color: 'warning.text.initial !important',
    '&[data-has-white="true"]': {
      color: 'warning.surface.initial !important',
    },
  },
  '&[data-palette="danger"]': {
    color: 'danger.text.inverse !important',
    '&[data-has-white="true"]': {
      color: 'danger.text.initial !important',
    },
    '&[data-mode="light"]': {
      color: 'danger.surface.initial !important',
      '&[data-has-white="false"]': {
        color: 'danger.text.initial !important',
      },
    },
  },
})

const noPB = css({
  color: 'inherit !important',
  pb: '0 !important',
  textStyle: 'body-sm !important',
})

interface ColorSwatchProps {
  token: SemanticToken
  tokenName: string
  palette: Sentiment
}

export default function ColorSwatch(props: ColorSwatchProps) {
  const { _cerberusTheme } = props.token.value
  const { mode } = useThemeContext()
  const [copied, setCopied] = useState<boolean>(false)
  const objName = useMemo(
    () => props.tokenName.replace(/-/g, '.'),
    [props.tokenName],
  )

  const modeValue = useMemo(() => {
    return mode === 'dark' ? '_darkMode' : '_lightMode'
  }, [mode])
  const color = _cerberusTheme[modeValue]
  const isWhite = useMemo(() => hasWhiteBase(color, mode), [color, mode])
  const bgColor = {
    backgroundColor: color,
  }

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [copied])

  return (
    <Link
      className={vstack({
        alignItems: 'center',
        justifyContent: 'center',
        h: '10rem',
        gap: '4',
        rounded: 'xl',
        textDecoration: 'none',
        transition: 'scale 250ms ease-in-out',
        w: 'full',
        _hover: {
          scale: '105%',
          textDecoration: 'none !important',
        },
      })}
      href={`/preset/colors/${props.tokenName}`}
      style={bgColor}
    >
      {copied && (
        <span
          className={hstack({
            bgColor: 'success.surface.active',
            color: 'success.text.inverse',
            gap: '1',
            pxi: '2',
            mb: '2',
            rounded: 'md',
            textStyle: 'body-xs',
          })}
        >
          <Checkmark />
          Copied
        </span>
      )}
      <div
        data-palette={props.palette}
        data-mode={mode}
        data-has-white={isWhite}
        className={paletteTextStyles}
      >
        <p className={noPB}>{objName}</p>
        <p
          className={cx(
            css({
              textTransform: 'uppercase',
            }),
            noPB,
          )}
        >
          {color}
        </p>
      </div>
    </Link>
  )
}
