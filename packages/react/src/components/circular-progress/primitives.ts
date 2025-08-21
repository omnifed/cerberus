import {
  Progress,
  type ProgressRootProps,
  type ProgressLabelProps,
  type ProgressValueTextProps,
  type ProgressCircleProps,
  type ProgressCircleTrackProps,
  type ProgressCircleRangeProps,
} from '@ark-ui/react/progress'
import { type HTMLArkProps } from '@ark-ui/react/factory'
import {
  circularProgress,
  type CircularProgressVariantProps,
} from 'styled-system/recipes'
import {
  cerberus,
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module contains the CircularProgress component primitives.
 * @module @cerberus-design/react/components/circular-progress/primitives
 */

const { withSlotRecipe } = createCerberusPrimitive(circularProgress)

// Root

export type CircularProgressRootProps = CerberusPrimitiveProps<
  ProgressRootProps & CircularProgressVariantProps
>
export const CircularProgressRoot = withSlotRecipe(Progress.Root, 'root')

// Label

export type CircularProgressLabelProps =
  CerberusPrimitiveProps<ProgressLabelProps>
export const CircularProgressLabel = withSlotRecipe(Progress.Label, 'label')

// ValueText

export type CircularProgressValueTextProps =
  CerberusPrimitiveProps<ProgressValueTextProps>
export const CircularProgressValueText = withSlotRecipe(
  Progress.ValueText,
  'valueText',
)

// Circle

export type CircularProgressCircleProps =
  CerberusPrimitiveProps<ProgressCircleProps>
export const CircularProgressCircle = withSlotRecipe(Progress.Circle, 'circle')

// CircleTrack

export type CircularProgressCircleTrackProps =
  CerberusPrimitiveProps<ProgressCircleTrackProps>
export const CircularProgressCircleTrack = withSlotRecipe(
  Progress.CircleTrack,
  'circleTrack',
)

// CircleRange

export type CircularProgressCircleRangeProps =
  CerberusPrimitiveProps<ProgressCircleRangeProps>
export const CircularProgressCircleRange = withSlotRecipe(
  Progress.CircleRange,
  'circleRange',
)

// InfoGroup

export type CircularProgressInfoGroupProps = HTMLArkProps<'div'>
export const CircularProgressInfoGroup = withSlotRecipe(
  cerberus.div,
  'infoGroup',
)
