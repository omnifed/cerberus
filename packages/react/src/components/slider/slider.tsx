import { SliderRootProvider } from '@ark-ui/react'
import {
  SliderLabel,
  SliderRoot,
  SliderControl,
  SliderTrack,
  SliderRange,
  SliderThumb,
  SliderMarkerGroup,
  SliderMarker,
  SliderHiddenInput,
} from './primitives'

/**
 * ## Slider Component
 * Slider component that wraps the slider primitives. This provides an abstraction to streamline basic slider usage.
 *
 * For more advanced use cases, use the slider
 * primitives directly via the `Slider.[Slot]` component's parts.
 *
 * @see {@link https://cerberus.digitalu.design/docs/components/slider}
 */
export function Slider() {
  return <div role="slider" />
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
