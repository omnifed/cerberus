import { Center, HStack, Square, Stack } from '@/styled-system/jsx'
import { For, Marquee } from '@cerberus-design/react'
import { items, socials } from './data'

export function EdgesDemo() {
  return (
    <Stack gap="lg" w="full">
      <Marquee edges={['both']} spacing="5rem">
        <For each={socials}>
          {(item) => (
            <Marquee.Item key={item.label}>
              <Square size="4rem" style={{ color: item.color }}>
                <item.icon size="3rem" />
              </Square>
            </Marquee.Item>
          )}
        </For>
      </Marquee>

      <Marquee edges={['both']} side="bottom" spacing="2rem" maxH="15rem" px="lg">
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
    </Stack>
  )
}
