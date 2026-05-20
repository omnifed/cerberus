'use client'

import { Square, Stack } from '@/styled-system/jsx'
import { For, Marquee } from '@cerberus-design/react'
import { createSignal, ReactiveText } from '@cerberus-design/signals'
import { socials } from './data'

function finiteStore() {
  const [loopCount, setLoopCount] = createSignal(0)
  const [completedCount, setCompletedCount] = createSignal(0)
  return { loopCount, setLoopCount, completedCount, setCompletedCount }
}

const store = finiteStore()

export function FiniteDemo() {
  return (
    <Stack gap="lg" px="md" w="full">
      <Marquee
        loopCount={3}
        onLoopComplete={() => store.setLoopCount((prev) => prev + 1)}
        onComplete={() => store.setCompletedCount((prev) => prev + 1)}
        spacing="5rem"
      >
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

      <Stack m="4" textStyle="label-sm">
        <p>
          Loop completed: <ReactiveText data={store.loopCount} />
        </p>
        <p>
          Animation completed: <ReactiveText data={store.completedCount} />
        </p>
      </Stack>
    </Stack>
  )
}
