import { tokens } from '@cerberus-design/panda-preset'
import { Box } from 'styled-system/jsx'

interface SpacingRowProps {
  value: keyof typeof tokens.spacing
}

export default function SpacingVisual(props: SpacingRowProps) {
  return (
    <Box
      aria-hidden="true"
      bgColor="page.bg.200"
      flexShrink="0"
      h="8"
      rounded="md"
      textStyle="body-sm"
      style={{ width: tokens.spacing[props.value].value }}
    />
  )
}
