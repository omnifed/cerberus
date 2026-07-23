import { Stack } from '@/styled-system/jsx'
import { For, Slider, SliderProps } from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'
import { getSacredNumber } from './utils'

const sizes = (recipesSpec.data.find((r) => r.name === 'slider')?.variants.size ??
  []) as SliderProps['size'][]

export function SizesDemo() {
  return (
    <Stack gap="md" w="3/4">
      <For each={sizes}>
        {(size, idx) => (
          <Slider key={String(size)} defaultValue={[getSacredNumber(idx)]} size={size}>
            <Slider.Label>Slider - {size} </Slider.Label>
          </Slider>
        )}
      </For>
    </Stack>
  )
}
