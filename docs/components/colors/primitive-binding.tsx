import { Text } from '@cerberus-design/react'
import { formatRgba } from './helpers'

interface PrimitiveBindingProps {
  reference: string | null
}

export function PrimitiveBinding(props: PrimitiveBindingProps) {
  const name = props.reference ?? ''
  if (!name) return null
  return (
    <Text as="small" color="page.text.200" textStyle="body-xs" textAlign="center">
      {name.includes('rgba') ? formatRgba(name) : name}
    </Text>
  )
}
