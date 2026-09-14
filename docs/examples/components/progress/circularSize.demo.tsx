import { HStack } from '@/styled-system/jsx'
import {
  CircularProgress,
  CircularProgressCircleProps,
  For,
} from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'

const variants = (recipesSpec.data.find((r) => r.name === 'circularProgress')?.variants
  .size ?? []) as CircularProgressCircleProps['size'][]

export function CircularSizeDemo() {
  return (
    <HStack gap="md" w="3/4">
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
