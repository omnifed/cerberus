import { Stack } from '@/styled-system/jsx'
import { For, Slider, SliderProps } from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'
import { getSacredNumber } from './utils'

const variants = (recipesSpec.data.find((r) => r.name === 'slider')?.variants.usage ??
  []) as SliderProps['usage'][]

export function DisabledDemo() {
  return (
    <Stack gap="md" w="3/4">
      <For each={variants}>
        {(usage, idx) => (
          <Slider
            key={String(usage)}
            disabled
            defaultValue={[getSacredNumber(idx)]}
            size={usage === 'filled' ? 'sm' : 'lg'}
            usage={usage}
          >
            <Slider.Label>Slider - {usage} </Slider.Label>
          </Slider>
        )}
      </For>
    </Stack>
  )
}
