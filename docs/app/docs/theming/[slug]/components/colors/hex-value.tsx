'use client'

import { useEffect, useState } from 'react'
import type { SemanticToken } from '@cerberus/tokens'
import { Text, useThemeContext } from '@cerberus-design/react'
import { getSemanticTokenHexValue } from '@/app/docs/utils/color-helpers'

interface HexValueProps {
  value: SemanticToken['value']
}

export function HexValue(props: HexValueProps) {
  const { mode, theme } = useThemeContext()
  const [hexValue, setHexValue] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)

  // Handle client-side hydration
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Get the resolved hex color value based on the current theme and mode
  useEffect(() => {
    if (isClient) {
      const value = getSemanticTokenHexValue(props.value, mode)
      setHexValue(value)
    }
  }, [props.value, mode, theme, isClient])

  if (!isClient || !hexValue) return null

  return (
    <Text as="small" color="page.text.100" textStyle="label-sm">
      {hexValue}
    </Text>
  )
}
