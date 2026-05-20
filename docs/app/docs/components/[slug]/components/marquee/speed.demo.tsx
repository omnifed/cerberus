import { Stack } from '@/styled-system/jsx'
import { For, Marquee, Text } from '@cerberus-design/react'
import { socials, speeds } from './data'

export function SpeedDemo() {
  return (
    <Stack gap="12" px="md" w="full">
      <For each={speeds}>
        {(speed) => (
          <Stack key={speed.value} gap="4">
            <Text textStyle="label-sm">{speed.label}</Text>
            <Marquee speed={speed.value}>
              <For each={socials}>
                {(platform) => (
                  <Marquee.Item key={platform.label} px="2rem">
                    <platform.icon color={platform.color} size="3rem" />
                  </Marquee.Item>
                )}
              </For>
            </Marquee>
          </Stack>
        )}
      </For>
    </Stack>
  )
}
