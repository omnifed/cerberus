import { For } from '../for'
import { Show } from '../show/show'
import { SliderDraggingIndicator, SliderHiddenInput, SliderThumb } from './primitives'
import { SliderProps } from './slider'

type SliderThumbsProps = {
  value: SliderProps['value'] | SliderProps['defaultValue']
  direction?: SliderProps['orientation']
  usage?: SliderProps['usage']
  showIndicator?: SliderProps['showIndicator']
}

export function SliderThumbs(props: SliderThumbsProps) {
  return (
    <For each={props.value}>
      {(num, idx) => (
        <SliderThumb
          key={`thumb:${num}`}
          index={idx}
          direction={props.direction}
          usage={props.usage}
        >
          <SliderHiddenInput />
          <Show when={props.showIndicator}>
            {() => <SliderDraggingIndicator direction={props.direction} />}
          </Show>
        </SliderThumb>
      )}
    </For>
  )
}
