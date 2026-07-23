import { For } from '../for'
import { SliderMarker, SliderMarkerGroup } from './primitives'

export type SliderMarksProps = {
  value: Array<number>
}

/**
 * ## SliderMarks
 *
 * An abstraction over the `SliderMarkerGroup` and `SliderMarker` slots which provides a simple way to render slider marks without needing to manually manage the `SliderMarkerGroup` and `SliderMarker` slots.
 *
 * | Prop | Type | Description |
 * | --- | --- | --- |
 * | `value` | `Array<number>` | The value of the slider as an array of numbers representing the mark values. |
 */
export function SliderMarks(props: SliderMarksProps) {
  return (
    <SliderMarkerGroup>
      <For each={props.value}>
        {(value, idx) => <SliderMarker key={`${value}:${idx}`} value={value} />}
      </For>
    </SliderMarkerGroup>
  )
}
