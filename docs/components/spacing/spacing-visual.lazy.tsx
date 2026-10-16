import { getTokenByPath } from '@/lib/design-system'
import { TokenPath } from '@/styled-system/types'
import { Box } from 'styled-system/jsx'

interface SpacingRowProps {
  value: TokenPath
}

export default function SpacingVisual(props: SpacingRowProps) {
  const token = getTokenByPath(props.value)
  if (!token) return null
  return (
    <Box
      aria-hidden="true"
      bgColor="page.bg.200"
      flexShrink="0"
      h="8"
      rounded="md"
      textStyle="body-sm"
      style={{ width: token.cssVar }}
    />
  )
}
