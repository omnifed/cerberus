import { SliderRootProvider } from '@ark-ui/react'
import { ReactNode } from 'react'
import { HStack } from 'styled-system/jsx'
import { Show } from '../show/show'
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

export type SliderProps = SliderRootProps & {
  label?: ReactNode
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
  return (
    <SliderRoot {...props}>
      <HStack justify="space-between" w="full">
        <Show when={props.label}>{() => <SliderLabel>{props.label}</SliderLabel>}</Show>
        <SliderValueText />
      </HStack>

      <SliderControl>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>

        <SliderThumb>
          <SliderDraggingIndicator />
          <SliderHiddenInput />
        </SliderThumb>

        <SliderMarkerGroup>
          <SliderMarker />
        </SliderMarkerGroup>
      </SliderControl>
    </SliderRoot>
  )
}

// Parts

Slider.Provider = SliderRootProvider
Slider.Root = SliderRoot
Slider.Label = SliderLabel
Slider.Control = SliderControl
Slider.Track = SliderTrack
Slider.Range = SliderRange
Slider.Thumb = SliderThumb
Slider.MarkerGroup = SliderMarkerGroup
Slider.Marker = SliderMarker
Slider.HiddenInput = SliderHiddenInput
