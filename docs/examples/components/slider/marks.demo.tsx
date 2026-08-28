import { Stack } from '@/styled-system/jsx'
import { Corn } from '@carbon/icons-react'
import { Slider } from '@cerberus-design/react'

export function MarksDemo() {
  return (
    <Stack gap="lg" w="3/4">
      <Slider defaultValue={[0]} marks={[25, 50, 75]} step={25}>
        <Slider.Label>With numbers</Slider.Label>
      </Slider>
      <Slider
        defaultValue={[0]}
        marks={[
          { value: 25, label: '25%' },
          { value: 50, label: '50%' },
          { value: 75, label: '75%' },
        ]}
      >
        <Slider.Label>With custom labels</Slider.Label>
      </Slider>
      <Slider
        defaultValue={[0]}
        marks={[
          { value: 25, label: <Corn /> },
          { value: 50, label: <Corn /> },
          { value: 75, label: <Corn /> },
        ]}
      >
        <Slider.Label>With Corn</Slider.Label>
      </Slider>

      <Slider defaultValue={[0]} marks={[25, 50, 75]} usage="filled" size="sm">
        <Slider.Label>Filled small size</Slider.Label>
      </Slider>
      <Slider defaultValue={[0]} marks={[25, 50, 75]} usage="outlined" size="md">
        <Slider.Label>Outlined medium size</Slider.Label>
      </Slider>
    </Stack>
  )
}
