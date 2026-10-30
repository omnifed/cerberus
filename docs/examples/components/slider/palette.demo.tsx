import { Stack } from '@/styled-system/jsx'
import { For, Slider, SliderProps } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'
import { getSacredNumber } from './utils'

const palettes = data.slotRecipes.slider.variants.palette
  .values as SliderProps['palette'][]

export function PaletteDemo() {
  return (
    <Stack gap="md" w="3/4">
      <For each={palettes}>
        {(palette, idx) => (
          <Slider
            key={String(palette)}
            defaultValue={[getSacredNumber(idx)]}
            palette={palette}
            usage="outlined"
          >
            <Slider.Label>Slider - {palette} </Slider.Label>
          </Slider>
        )}
      </For>
    </Stack>
  )
}
