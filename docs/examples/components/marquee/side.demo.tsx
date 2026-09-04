import { Center, HStack } from '@/styled-system/jsx'
import { For, Marquee } from '@cerberus-design/react'
import { items } from './data'

export function SideDemo() {
  return (
    <Marquee side="bottom" spacing="2rem" maxH="15rem" px="lg">
      <For each={items}>
        {(item) => (
          <Marquee.Item key={item.name}>
            <Center
              bgColor="page.surface.100"
              borderColor="page.border.initial"
              h="5rem"
              layerStyle="outline.subtle"
              rounded="md"
              shadow="md"
            >
              <HStack gap="sm" h="full">
                {item.name} {item.logo}
              </HStack>
            </Center>
          </Marquee.Item>
        )}
      </For>
    </Marquee>
  )
}
