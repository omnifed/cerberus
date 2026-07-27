import { HStack } from 'styled-system/jsx'
import { Show } from '../show/show'
import { Marker, SliderMarks } from './marks'
import {
  SliderControl,
  SliderDraggingIndicator,
  SliderHiddenInput,
  SliderLabel,
  SliderMarker,
  SliderMarkerGroup,
  SliderMarkerIndicator,
  SliderRange,
  SliderRoot,
  SliderRootProps,
  SliderProvider,
  SliderThumb,
  SliderTrack,
  SliderValueText,
} from './primitives'
import { SliderThumbs } from './thumbs'

export type SliderProps = SliderRootProps & {
  marks?: Array<Marker>
  showIndicator?: boolean
}

/**
 * ## Slider Component
 * Slider component that wraps the slider primitives. This provides an abstraction to streamline basic slider usage.
 *
 * For more advanced use cases, use the slider
 * primitives directly via the `Slider.[Slot]` component's parts.
 *
 * @see {@link https://cerberus.digitalu.design/docs/components/slider}
 */
export function Slider(props: SliderProps) {
  const { showIndicator, ...rootProps } = props
  return (
    <SliderRoot {...rootProps} direction={props.orientation}>
      <Show when={props.children}>
        {() => (
          <HStack justify="space-between" w="full">
            {props.children}
          </HStack>
        )}
      </Show>

      <SliderControl direction={props.orientation}>
        <SliderTrack direction={props.orientation} usage={props.usage}>
          <SliderRange usage={props.usage} />
        </SliderTrack>

        <SliderThumbs
          direction={props.orientation}
          showIndicator={showIndicator}
          usage={props.usage}
          value={props.defaultValue ?? props.value}
        />

        <Show when={props.marks?.length}>
          {() => (
            <SliderMarks direction={props.orientation} marks={props.marks ?? []} />
          )}
        </Show>
      </SliderControl>
    </SliderRoot>
  )
}

// Parts

Slider.Provider = SliderProvider
Slider.Root = SliderRoot
Slider.Label = SliderLabel
Slider.ValueText = SliderValueText
Slider.Control = SliderControl
Slider.Track = SliderTrack
Slider.Range = SliderRange
Slider.Thumb = SliderThumb
Slider.Thumbs = SliderThumbs
Slider.DraggingIndicator = SliderDraggingIndicator
Slider.MarkerGroup = SliderMarkerGroup
Slider.Marker = SliderMarker
Slider.MarkerIndicator = SliderMarkerIndicator
Slider.Marks = SliderMarks
Slider.HiddenInput = SliderHiddenInput
