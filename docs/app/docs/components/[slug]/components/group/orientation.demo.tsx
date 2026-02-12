import { DecorativeBox } from '@/app/components/decorative-box'
import { Group } from '@cerberus-design/react'

export function OrientationDemo() {
  return (
    <Group orientation="vertical">
      <DecorativeBox h="20" w="40">
        1
      </DecorativeBox>
      <DecorativeBox h="20" w="40">
        2
      </DecorativeBox>
    </Group>
  )
}
