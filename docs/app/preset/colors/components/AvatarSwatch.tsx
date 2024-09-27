'use client'

import { useThemeContext } from '@cerberus-design/react'
import type { SemanticToken, Sentiment } from '@cerberus-design/panda-preset'
import { useMemo } from 'react'
import { circle } from '@cerberus/styled-system/patterns'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface ColorSwatchProps {
  token: SemanticToken
  tokenName: string
  palette: Sentiment
}

export default function ColorSwatch(props: ColorSwatchProps) {
  const { _cerberusTheme } = props.token.value
  const { mode } = useThemeContext()
  const searchParams = useSearchParams()

  const modeValue = useMemo(() => {
    return mode === 'dark' ? '_darkMode' : '_lightMode'
  }, [mode])
  const color = useMemo(() => {
    if (props.tokenName === 'action-border-focus') {
      return _cerberusTheme[modeValue]
    }
    return `var(--cerberus-${_cerberusTheme[modeValue].replace(/\./g, '-').replace(/[{}]/g, '')})`
  }, [modeValue, _cerberusTheme, props.tokenName])

  const bgColor = {
    backgroundColor: color,
  }

  return (
    <Link
      aria-current={
        props.tokenName === searchParams.get('token') ? 'page' : undefined
      }
      data-palette={props.palette}
      className={circle({
        border: '1px solid',
        size: '12',
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
        _currentPage: {
          border: '3px solid',
          borderColor: 'action.navigation.visited !important',
        },
      })}
      href={`/preset/colors?token=${props.tokenName}`}
      style={bgColor}
    />
  )
}
