'use client'

import { useThemeContext } from '@cerberus-design/react'
import type { SemanticToken, Sentiment } from '@cerberus-design/panda-preset'
import { useEffect, useMemo, useState } from 'react'
import { css } from '@cerberus/styled-system/css'
import { circle } from '@cerberus/styled-system/patterns'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

// We have to use !important to override the .MDX styles

const paletteTextStyles = css({
  textAlign: 'center',

  _pagePalette: {
    color: 'page.text.initial !important',
    '&[data-has-white="true"]': {
      color: 'page.text.inverse !important',
    },
  },
  _actionPalette: {
    color: 'action.text.initial !important',
    '&[data-has-white="true"]': {
      color: 'action.bg.100.initial !important',
    },
    '&[data-mode="light"]': {
      color: 'action.text.inverse !important',
      '&[data-has-white="true"]': {
        color: 'action.text.initial !important',
      },
    },
  },
  _secondaryActionPalette: {
    color: 'secondaryAction.text.initial !important',
    '&[data-has-white="true"]': {
      color: 'secondaryAction.bg.initial !important',
    },
    '&[data-mode="light"]': {
      color: 'secondaryAction.text.inverse !important',
      '&[data-has-white="true"]': {
        color: 'secondaryAction.bg.initial !important',
      },
    },
  },
  _infoPalette: {
    color: 'info.text.initial !important',
    '&[data-has-white="true"]': {
      color: 'info.surface.100 !important',
    },
  },
  _successPalette: {
    color: 'success.text.initial !important',
    '&[data-has-white="true"]': {
      color: 'success.text.inverse !important',
    },
  },
  _warningPalette: {
    color: 'warning.text.initial !important',
    '&[data-has-white="true"]': {
      color: 'white !important',
    },
    _darkMode: {
      color: 'white !important',
      '&[data-has-white="true"]': {
        color: 'warning.text.initial !important',
      },
    },
  },
  _dangerPalette: {
    color: 'danger.text.initial !important',
    '&[data-has-white="true"]': {
      color: 'danger.text.inverse !important',
    },
  },
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
  const searchParams = useSearchParams()

  const modeValue = useMemo(() => {
    return mode === 'dark' ? '_darkMode' : '_lightMode'
  }, [mode])
  const color = _cerberusTheme[modeValue]

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
      aria-current={
        props.tokenName === searchParams.get('token') ? 'page' : undefined
      }
      data-palette={props.palette}
      className={circle({
        border: '1px solid',
        size: '12',
        _currentPage: {
          border: '3px solid',
          borderColor: 'action.navigation.visited',
        },
        _pagePalette: {
          borderColor: 'page.border.initial',
        },
        _actionPalette: {
          borderColor: 'action.border.initial',
        },
        _secondaryActionPalette: {
          borderColor: 'secondaryAction.border.initial',
        },
        _infoPalette: {
          borderColor: 'info.border.initial',
        },
        _successPalette: {
          borderColor: 'success.border.initial',
        },
        _warningPalette: {
          borderColor: 'warning.border.initial',
        },
        _dangerPalette: {
          borderColor: 'danger.border.initial',
        },
        _motionSafe: {
          _hover: {},
        },
      })}
      href={`/preset/colors?token=${props.tokenName}`}
      style={bgColor}
    />
  )
}
