import { ReactNode } from 'react'
import { For } from '../for'
import { SliderMarker, SliderMarkerGroup, SliderMarkerIndicator } from './primitives'
import { SliderProps } from './slider'

export type SliderMarksProps = {
  direction?: SliderProps['orientation']
  marks: Array<Marker>
}
export type Marker = number | { value: number; label: ReactNode }

/**
 * ## SliderMarks
 *
 * An abstraction over the `SliderMarkerGroup` and `SliderMarker` slots which provides a simple way to render slider marks without needing to manually manage the `SliderMarkerGroup` and `SliderMarker` slots.
 *
 * | Prop | Type | Description |
 * | --- | --- | --- |
 * | `direction` | `'horizontal' | 'vertical'` | The direction of the slider. |
 * | `marks` | `Array<number>` | The value of the slider as an array of numbers representing the mark values. |
 */
export function SliderMarks(props: SliderMarksProps) {
  return (
    <SliderMarkerGroup direction={props.direction}>
      <For each={props.marks}>
        {(mark, idx) => <Mark key={idx} direction={props.direction} mark={mark} />}
      </For>
    </SliderMarkerGroup>
  )
}

function Mark(props: Omit<SliderMarksProps, 'marks'> & { mark: Marker }) {
  const { mark } = props
  const value = typeof mark === 'number' ? mark : mark.value
  const label = typeof mark === 'number' ? mark : (mark.label ?? mark.value)
  return (
    <SliderMarker direction={props.direction} value={value}>
      <SliderMarkerIndicator />
      {label}
    </SliderMarker>
  )
}
