import { HStack, VStack } from '@/styled-system/jsx'
import { VolumeMute } from '@carbon/icons-react'
import { Slider } from '@cerberus-design/react'

// TODO: Fine tune marker styles for vert pos

export function VerticalDemo() {
  return (
    <HStack gap="4xl" justify="center" w="3/4">
      <Slider defaultValue={[30]} height="200px" orientation="vertical" />

      <VStack gap="md">
        <Slider defaultValue={[0]} height="168px" orientation="vertical" />
        <VolumeMute />
      </VStack>

      <Slider
        defaultValue={[30]}
        marks={[0, 25, 50, 75, 100]}
        orientation="vertical"
        height="200px"
      />
    </HStack>
  )
}
