import { For } from '../for'
import { Show } from '../show/show'
import { SliderDraggingIndicator, SliderHiddenInput, SliderThumb } from './primitives'
import { SliderProps } from './slider'

type SliderThumbsProps = {
  defaultValue: SliderProps['defaultValue']
  orientation: SliderProps['orientation']
  usage: SliderProps['usage']
  showIndicator?: boolean
}

export function SliderThumbs(props: SliderThumbsProps) {
  return (
    <For each={props.defaultValue}>
      {(num, idx) => (
        <SliderThumb
          key={`thumb:${num}`}
          index={idx}
          orientation={props.orientation}
          usage={props.usage}
        >
          <SliderHiddenInput />
          <Show when={props.showIndicator}>{() => <SliderDraggingIndicator />}</Show>
        </SliderThumb>
      )}
    </For>
  )
}
