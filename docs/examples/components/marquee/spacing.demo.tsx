import { HStack } from '@/styled-system/jsx'
import { For, Marquee } from '@cerberus-design/react'
import { items } from './data'

export function SpacingDemo() {
  return (
    <Marquee spacing="2rem">
      <For each={items}>
        {(item) => (
          <Marquee.Item key={item.name}>
            <HStack
              bgColor="page.surface.100"
              borderColor="page.border.initial"
              gap="sm"
              h="5rem"
              layerStyle="outline.subtle"
              px="md"
              rounded="md"
              shadow="md"
              w="full"
            >
              {item.name} {item.logo}
            </HStack>
          </Marquee.Item>
        )}
      </For>
    </Marquee>
  )
}
