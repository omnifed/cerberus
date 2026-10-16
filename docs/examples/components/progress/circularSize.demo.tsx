import { HStack } from '@/styled-system/jsx'
import {
  CircularProgress,
  CircularProgressCircleProps,
  For,
} from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const variants = data.slotRecipes.circularProgress.variants.size
  .values as CircularProgressCircleProps['size'][]

export function CircularSizeDemo() {
  return (
    <HStack gap="md">
      <For each={variants}>
        {(size, idx) => (
          <CircularProgress
            key={`${size}-${idx}`}
            defaultValue={25 * idx}
            size={size}
          />
        )}
      </For>
    </HStack>
  )
}
