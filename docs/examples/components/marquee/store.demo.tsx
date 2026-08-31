'use client'

import { Box, Square, Stack } from '@/styled-system/jsx'
import { Button, For, Marquee, Show, useMarquee } from '@cerberus-design/react'
import { socials } from './data'
import { Pause, Play } from '@carbon/icons-react'

export function StoreDemo() {
  const marquee = useMarquee({
    autoFill: true,
    spacing: '5rem',
  })

  return (
    <Stack gap="lg" w="full">
      <Marquee.RootProvider value={marquee}>
        <Marquee.Viewport>
          <Marquee.Content>
            <For each={socials}>
              {(item) => (
                <Marquee.Item key={item.label}>
                  <Square size="4rem" style={{ color: item.color }}>
                    <item.icon size="3rem" />
                  </Square>
                </Marquee.Item>
              )}
            </For>
          </Marquee.Content>
        </Marquee.Viewport>
      </Marquee.RootProvider>

      <Box ps="md">
        <Show
          when={marquee.paused}
          fallback={
            <Button onClick={marquee.pause} size="sm">
              <Pause />
              Pause
            </Button>
          }
        >
          <Button onClick={marquee.resume} size="sm" usage="outlined-subtle">
            <Play />
            Resume
          </Button>
        </Show>
      </Box>
    </Stack>
  )
}
