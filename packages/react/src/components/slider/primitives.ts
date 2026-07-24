import { Slider } from '@ark-ui/react/slider'
import { slider, type SliderVariantProps } from 'styled-system/recipes'
import {
  CerberusProps,
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module contains the primitives of the Slider component.
 * @module 'slider/primitives'
 */

const { withSlotRecipe, withNoRecipe } = createCerberusPrimitive(slider)

// Root

export type SliderRootProps = CerberusPrimitiveProps<
  Slider.RootProps & SliderVariantProps
>
export const SliderRoot = withSlotRecipe(Slider.Root, 'root')

// Label

export type SliderLabelProps = CerberusPrimitiveProps<Slider.LabelProps>
export const SliderLabel = withSlotRecipe(Slider.Label, 'label')

// ValueText

export type SliderValueTextProps = CerberusPrimitiveProps<Slider.ValueTextProps>
export const SliderValueText = withSlotRecipe(Slider.ValueText, 'valueText')

// Control

export type SliderControlProps = CerberusPrimitiveProps<Slider.ControlProps>
export const SliderControl = withSlotRecipe(Slider.Control, 'control')

// Track

export type SliderTrackProps = CerberusPrimitiveProps<Slider.TrackProps>
export const SliderTrack = withSlotRecipe(Slider.Track, 'track')

// Range

export type SliderRangeProps = CerberusPrimitiveProps<Slider.RangeProps>
export const SliderRange = withSlotRecipe(Slider.Range, 'range')

// Thumb

export type SliderThumbProps = CerberusPrimitiveProps<Slider.ThumbProps>
export const SliderThumb = withSlotRecipe(Slider.Thumb, 'thumb')

// DraggingIndicator

export type SliderDraggingIndicatorProps =
  CerberusPrimitiveProps<Slider.DraggingIndicatorProps>
export const SliderDraggingIndicator = withSlotRecipe(
  Slider.DraggingIndicator,
  'draggingIndicator',
)

// MarkerGroup

export type SliderMarkerGroupProps = CerberusPrimitiveProps<Slider.MarkerGroupProps>
export const SliderMarkerGroup = withSlotRecipe(Slider.MarkerGroup, 'markerGroup')

// Marker

export type SliderMarkerProps = CerberusPrimitiveProps<Slider.MarkerProps>
export const SliderMarker = withSlotRecipe(Slider.Marker, 'marker')

// MarkerIndicator

export type SliderMarkerIndicatorProps = CerberusProps<'div'>
export const SliderMarkerIndicator = withSlotRecipe('div', 'markerIndicator')

// HiddenInput

export type SliderHiddenInputProps = CerberusPrimitiveProps<Slider.HiddenInputProps>
export const SliderHiddenInput = withNoRecipe(Slider.HiddenInput)
