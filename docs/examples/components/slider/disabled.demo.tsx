import { Stack } from '@/styled-system/jsx'
import { For, Slider, SliderProps } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'
import { getSacredNumber } from './utils'

const variants = data.slotRecipes.slider.variants.usage.values as SliderProps['usage'][]

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
