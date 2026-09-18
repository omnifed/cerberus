import { Square } from '@/styled-system/jsx'
import { Spinner } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <Square color="warning.bg.active" size="10rem">
      <Spinner />
    </Square>
  )
}
