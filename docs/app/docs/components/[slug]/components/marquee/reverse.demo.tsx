import { Square } from '@/styled-system/jsx'
import { For, Marquee } from '@cerberus-design/react'
import { socials } from './data'

export function ReverseDemo() {
  return (
    <Marquee reverse spacing="5rem">
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
  )
}
