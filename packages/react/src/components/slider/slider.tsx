import { SliderRootProvider } from '@ark-ui/react'
import { HStack } from 'styled-system/jsx'
import { Show } from '../show/show'
import { SliderMarks } from './marks'
import {
  SliderControl,
  SliderDraggingIndicator,
  SliderHiddenInput,
  SliderLabel,
  SliderMarker,
  SliderMarkerGroup,
  SliderRange,
  SliderRoot,
  SliderRootProps,
  SliderThumb,
  SliderTrack,
  SliderValueText,
} from './primitives'

export type SliderProps = SliderRootProps

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
  return (
    <SliderRoot {...props}>
      <Show when={props.children}>
        {() => (
          <HStack justify="space-between" w="full">
            {props.children}
          </HStack>
        )}
      </Show>

      <SliderControl orientation={props.orientation}>
        <SliderTrack orientation={props.orientation} usage={props.usage}>
          <SliderRange usage={props.usage} />
        </SliderTrack>

        <SliderThumb orientation={props.orientation} usage={props.usage}>
          <SliderDraggingIndicator />
          <SliderHiddenInput />
        </SliderThumb>

        <SliderMarkerGroup orientation={props.orientation}>
          <SliderMarker orientation={props.orientation} />
        </SliderMarkerGroup>
      </SliderControl>
    </SliderRoot>
  )
}

// Parts

Slider.Provider = SliderRootProvider
Slider.Root = SliderRoot
Slider.Label = SliderLabel
Slider.ValueText = SliderValueText
Slider.Control = SliderControl
Slider.Track = SliderTrack
Slider.Range = SliderRange
Slider.Thumb = SliderThumb
Slider.MarkerGroup = SliderMarkerGroup
Slider.Marker = SliderMarker
Slider.Marks = SliderMarks
Slider.HiddenInput = SliderHiddenInput
