'use client'

import type { SemanticToken, Sentiment } from '@cerberus-design/panda-preset'
import { useMemo } from 'react'
import { circle } from 'styled-system/patterns'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface ColorSwatchProps {
  token: SemanticToken
  tokenName: string
  palette: Sentiment
}

export default function ColorSwatch(props: ColorSwatchProps) {
  const searchParams = useSearchParams()
  const color = useMemo(() => {
    const snakeCaseToken = props.tokenName
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
    return `var(--cerberus-colors-${snakeCaseToken})`
  }, [props.tokenName])

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
