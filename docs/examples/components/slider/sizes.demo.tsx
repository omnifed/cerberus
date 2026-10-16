import { Stack } from '@/styled-system/jsx'
import { For, Slider, SliderProps } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'
import { getSacredNumber } from './utils'

const sizes = data.slotRecipes.slider.variants.size.values as SliderProps['size'][]

export function SizesDemo() {
  return (
    <Stack gap="md" w="3/4">
      <For each={sizes}>
        {(size, idx) => (
          <Slider key={String(size)} defaultValue={[getSacredNumber(idx)]} size={size}>
            <Slider.Label>Slider - {String(size)} </Slider.Label>
          </Slider>
        )}
      </For>
    </Stack>
  )
}
