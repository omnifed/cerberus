import { Text } from '@cerberus-design/react'

interface HexValueProps {
  value: string | null
}

export function HexValue(props: HexValueProps) {
  if (!props.value) return null
  return (
    <Text as="small" color="page.text.100" textStyle="label-sm">
      {props.value}
    </Text>
  )
}
