'use client'

import { getSemanticTokenHexValue } from '@/app/docs/utils/color-helpers'
import { Text, useThemeContext } from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'
import type { SemanticToken } from '@cerberus/tokens'
import { useEffect, useRef } from 'react'

interface HexValueProps {
  value: SemanticToken['value']
}

export function HexValue(props: HexValueProps) {
  const { mode, theme } = useThemeContext()
  const prevTheme = useRef(theme)

  const [hexValue, setHexValue] = useSignal<string | null>(
    getSemanticTokenHexValue(props.value, mode),
  )

  useEffect(() => {
    if (prevTheme.current !== theme) {
      setHexValue(getSemanticTokenHexValue(props.value, mode))
      prevTheme.current = theme
    }
  }, [theme, setHexValue, mode, props.value])

  if (!hexValue) return null

  return (
    <Text as="small" color="page.text.100" textStyle="label-sm">
      {hexValue}
    </Text>
  )
}
