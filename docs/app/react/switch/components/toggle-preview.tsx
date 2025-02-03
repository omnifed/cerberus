import { hstack } from '@cerberus/styled-system/patterns'
import { Box } from '@cerberus-design/styled-system/jsx'

export function DefaultTogglePreview() {
  return <Box w="1/2">todo</Box>
}

export function DisabledTogglePreview() {
  return <Box w="1/2">todo</Box>
}

export function WithMessageTogglePreview() {
  return <Box w="1/2">todo</Box>
}

export function WithLabelTogglePreview() {
  return <Box w="1/2">todo</Box>
}

export function OverviewToggleGroup() {
  return (
    <div
      className={hstack({
        gap: 4,
      })}
    >
      todo
    </div>
  )
}

export function OverviewToggleSizes() {
  return (
    <div
      className={hstack({
        gap: 4,
        w: '1/2',
      })}
    >
      todo
    </div>
  )
}
