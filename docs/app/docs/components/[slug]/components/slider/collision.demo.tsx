import { Stack } from '@/styled-system/jsx'
import { Slider } from '@cerberus-design/react'

export function CollisionDemo() {
  return (
    <Stack gap="lg" w="3/4">
      <Slider defaultValue={[30, 80]} thumbCollisionBehavior="none">
        <Slider.Label>None</Slider.Label>
      </Slider>

      <Slider defaultValue={[30, 80]} thumbCollisionBehavior="push">
        <Slider.Label>Push</Slider.Label>
      </Slider>

      <Slider defaultValue={[30, 80]} thumbCollisionBehavior="swap">
        <Slider.Label>Swap</Slider.Label>
      </Slider>
    </Stack>
  )
}
