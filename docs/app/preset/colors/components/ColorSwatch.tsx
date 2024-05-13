'use client'

import { useThemeContext } from '@cerberus-design/react'
import type { SemanticToken, Sentiment } from '@cerberus-design/panda-preset'
import { useEffect, useMemo, useState } from 'react'
import { css, cx } from '@/styled-system/css'
import { hstack, vstack } from '@/styled-system/patterns'
import { Checkmark } from '@cerberus-design/icons'
import { hasWhiteBase } from '@/app/utils/colors'

// TODO: Figure out how to validate color contrast a11y for text on background

interface ColorSwatchProps {
  token: SemanticToken
  tokenName: string
  palette: Sentiment
}

const noPB = css({
  pb: '0 !important',
  textStyle: 'body-sm !important',

  '&[data-palette="neutral"]': {
    color: 'neutral.text.initial !important',
  },
  '&[data-palette="action"]': {
    color: 'action.text.initial !important',
  },
  '&[data-palette="info"]': {
    color: 'info.text.initial !important',
  },
  '&[data-palette="success"]': {
    color: 'success.text.initial !important',
  },
  '&[data-palette="warning"]': {
    color: 'warning.text.initial !important',
  },
  '&[data-palette="danger"]': {
    color: 'danger.text.initial !important',
  },
})

const inverseTextStyles = css({
  '&[data-palette="neutral"]': {
    color: 'neutral.text.inverse !important',
  },
  '&[data-palette="action"]': {
    color: 'action.text.inverse !important',
  },
  '&[data-palette="info"]': {
    color: 'info.text.inverse !important',
  },
  '&[data-palette="success"]': {
    color: 'success.text.inverse !important',
  },
  '&[data-palette="warning"]': {
    color: 'warning.text.inverse !important',
  },
  '&[data-palette="danger"]': {
    color: 'danger.text.inverse !important',
  },
})

export default function ColorSwatch(props: ColorSwatchProps) {
  const { _cerberusTheme } = props.token.value
  const { mode } = useThemeContext()
  const [copied, setCopied] = useState<boolean>(false)

  const modeValue = useMemo(() => {
    return mode === 'dark' ? '_darkMode' : '_lightMode'
  }, [mode])
  const color = _cerberusTheme[modeValue]
  const swatchStyles = useMemo(() => {
    if (hasWhiteBase(color, mode)) {
      return cx(noPB, inverseTextStyles)
    }
    return noPB
  }, [color, mode])
  const bgColor = {
    backgroundColor: color,
  }

  function handleCopyToClipboard() {
    navigator.clipboard.writeText(props.tokenName)
    setCopied(true)
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
    <button
      className={vstack({
        justifyContent: 'center',
        h: '10rem',
        gap: '4',
        rounded: 'xl',
        transition: 'scale 250ms ease-in-out',
        w: 'full',
        _hover: {
          scale: '105%',
        },
      })}
      onClick={handleCopyToClipboard}
      style={bgColor}
    >
      {copied && (
        <span
          className={hstack({
            bgColor: 'success.surface.initial',
            color: 'success.text.initial',
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
      <div>
        <p data-palette={props.palette} className={swatchStyles}>
          {props.tokenName}
        </p>
        <p
          data-palette={props.palette}
          className={cx(
            css({
              textTransform: 'uppercase',
            }),
            swatchStyles,
          )}
        >
          {color}
        </p>
      </div>

      {/* <AccessibilityAlt aria-hidden /> */}
    </button>
  )
}
