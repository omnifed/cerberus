import { getTokenByPath } from '@/lib/design-system'
import type { TokenPath } from '@/styled-system/types'
import { Box } from 'styled-system/jsx'

interface SpacingRowProps {
  value: string
}

export default function SpacingVisual(props: SpacingRowProps) {
  const token = getTokenByPath(`spacing.${props.value}` as TokenPath)
  if (!token) return null
  return (
    <Box
      aria-hidden="true"
      bgColor="page.bg.200"
      h="8"
      rounded="md"
      style={{ width: `var(${token.cssVar})` }}
    />
  )
}
