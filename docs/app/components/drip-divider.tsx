import { RainDrop } from '@carbon/icons-react'
import { HStack } from '@cerberus-design/styled-system/jsx'

export default function DripDivider() {
  return (
    <HStack
      color="danger.surface.initial"
      gap="4"
      py="10rem"
      justify="center"
      w="full"
    >
      <RainDrop size={32} />
      <RainDrop size="5rem" />
      <RainDrop size={32} />
    </HStack>
  )
}
