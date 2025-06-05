import {
  Progress,
  type ProgressRootProps,
  type ProgressLabelProps,
  type ProgressValueTextProps,
  type ProgressCircleProps,
  type ProgressCircleTrackProps,
  type ProgressCircleRangeProps,
} from '@ark-ui/react/progress'
import { ark, type HTMLArkProps } from '@ark-ui/react/factory'
import {
  circularProgress,
  type CircularProgressVariantProps,
} from 'styled-system/recipes'
import {
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
// @ts-expect-error this is a workaround for the type
export const CircularProgressRoot = withSlotRecipe<CircularProgressRootProps>(
  Progress.Root,
  'root',
)

// Label

export type CircularProgressLabelProps =
  CerberusPrimitiveProps<ProgressLabelProps>
export const CircularProgressLabel = withSlotRecipe<CircularProgressLabelProps>(
  Progress.Label,
  'label',
)

// ValueText

export type CircularProgressValueTextProps =
  CerberusPrimitiveProps<ProgressValueTextProps>
export const CircularProgressValueText =
  withSlotRecipe<CircularProgressValueTextProps>(
    Progress.ValueText,
    'valueText',
  )

// Circle

export type CircularProgressCircleProps =
  CerberusPrimitiveProps<ProgressCircleProps>
export const CircularProgressCircle =
  withSlotRecipe<CircularProgressCircleProps>(Progress.Circle, 'circle')

// CircleTrack

export type CircularProgressCircleTrackProps =
  CerberusPrimitiveProps<ProgressCircleTrackProps>
export const CircularProgressCircleTrack =
  withSlotRecipe<CircularProgressCircleTrackProps>(
    Progress.CircleTrack,
    'circleTrack',
  )

// CircleRange

export type CircularProgressCircleRangeProps =
  CerberusPrimitiveProps<ProgressCircleRangeProps>
export const CircularProgressCircleRange =
  withSlotRecipe<CircularProgressCircleRangeProps>(
    Progress.CircleRange,
    'circleRange',
  )

// InfoGroup

export type CircularProgressInfoGroupProps = HTMLArkProps<'div'>
export const CircularProgressInfoGroup =
  withSlotRecipe<CircularProgressInfoGroupProps>(ark.div, 'infoGroup')
