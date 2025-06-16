'use client'

import type { SemanticToken } from '@cerberus-design/panda-preset'
import { Text, useThemeContext } from '@cerberus-design/react'

interface HexValueProps {
  value: SemanticToken['value']
}

export function HexValue(props: HexValueProps) {
  const { mode } = useThemeContext()

  // Get the current value based on the active mode
  const formattedMode = `_${mode}` as const
  const modeValue = props.value[formattedMode as keyof typeof props.value]

  // Format the token to match the root CSS Property
  const tokenValue = (modeValue ?? props.value.base)
    .replace(/[{}]/g, '')
    .replaceAll('.', '-')
  const value = `--cerberus-${tokenValue}`

  // TODO: Figure out how to get the correct value from the theme. Right now it
  // just returns cerberus tokens
  const colorValue = value

  function formatHex() {
    if (!colorValue) return null
    return null
  }

  return (
    <Text as="small" color="page.text.100" textStyle="label-sm">
      {formatHex()}
    </Text>
  )
}
