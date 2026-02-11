import { DecorativeBox } from '@/app/components/decorative-box'
import { Group } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <Group>
      <DecorativeBox h="20" w="40">
        1
      </DecorativeBox>
      <DecorativeBox h="20" w="40">
        2
      </DecorativeBox>
    </Group>
  )
}
