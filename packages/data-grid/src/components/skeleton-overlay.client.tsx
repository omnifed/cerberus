'use client'

import { For } from '@cerberus-design/react'
import { useRead } from '@cerberus-design/signals'
import { HStack } from 'styled-system/jsx'
import { useDataGridContext } from '../context.client'

export function SkeletonOverlay() {
  const store = useDataGridContext()
  const rowCount = useRead(store.rowCount)

  return (
    <For each={Array.from({ length: rowCount })}>
      {(_, idx: number) => (
        <HStack
          key={idx}
          bgColor="var(--row-bg-color)"
          borderBottom="1px solid"
          borderBottomColor="var(--grid-cell-border-color)"
          h="var(--row-height)"
          w="full"
          _lastOfType={{
            borderBottom: 'none',
          }}
        >
          {idx}
        </HStack>
      )}
    </For>
  )
}
