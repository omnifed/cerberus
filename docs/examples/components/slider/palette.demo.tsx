import { Stack } from '@/styled-system/jsx'
import { For, Slider, SliderProps } from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'
import { getSacredNumber } from './utils'

const palettes = (recipesSpec.data.find((r) => r.name === 'slider')?.variants.palette ??
  []) as SliderProps['palette'][]

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
