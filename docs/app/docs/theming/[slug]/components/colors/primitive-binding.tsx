'use client'

import type { SemanticToken } from '@cerberus/tokens'
import { Text, useThemeContext } from '@cerberus-design/react'
import { getPrimitiveTokenReference } from '@/app/docs/utils/color-helpers'

interface PrimitiveBindingProps {
  value: SemanticToken['value']
}

export function PrimitiveBinding(props: PrimitiveBindingProps) {
  const { mode } = useThemeContext()

  const primitiveRef = getPrimitiveTokenReference(props.value, mode)

  if (!primitiveRef) return null

  return (
    <Text
      as="small"
      color="page.text.200"
      textStyle="body-xs"
      textAlign="center"
    >
      {primitiveRef}
    </Text>
  )
}
