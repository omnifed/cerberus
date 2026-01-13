import allTokens from '@/styled-system/specs/tokens.json'
import { Box } from 'styled-system/jsx'

interface SpacingRowProps {
  value: string
}

export default function SpacingVisual(props: SpacingRowProps) {
  const tokens = allTokens.data.find((token) => token.type === 'spacing')
  const values = tokens?.values ?? []

  const style =
    values.find((value) => value.name === props.value)?.cssVar ?? 'initial'

  return (
    <Box
      aria-hidden="true"
      bgColor="page.bg.200"
      flexShrink="0"
      h="8"
      rounded="md"
      textStyle="body-sm"
      style={{ width: style }}
    />
  )
}
