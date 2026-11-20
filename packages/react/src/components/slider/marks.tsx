'use client'

import type { ReactNode } from 'react'
import { extractParts, type ExtractedParts } from '../../internal/extract-parts'
import { For } from '../for/for'
import { SliderMarkerIndicator } from './marker-indicator'
import {
  SliderMarker,
  SliderMarkerGroup,
  type SliderMarkerGroupProps,
} from './primitives'

export const MARK_PARTS = {
  marker: SliderMarker,
  markerIndicator: SliderMarkerIndicator,
}

/** A mark value, or a value with a custom label. */
export type SliderMark = number | { value: number; label?: ReactNode }

export type SliderMarksProps = SliderMarkerGroupProps & {
  /**
   * The marks to render along the track. A number renders as its own label;
   * an object renders `label` (or its `value` when no label is given).
   */
  marks: SliderMark[]
}

/**
 * Renders a `Slider.MarkerGroup` with one `Slider.Marker`,
 * `Slider.MarkerIndicator` and label per mark. Direct `Slider.Marker` and
 * `Slider.MarkerIndicator` children patch every marker and indicator (a
 * marker's `value` and `children` are ignored).
 * @description [Cerberus Docs] https://cerberus.digitalu.design/docs/components/slider
 */
export function SliderMarks(props: SliderMarksProps) {
  const { marks, children, ...groupProps } = props
  const { parts } = extractParts(children, MARK_PARTS)
  return <MarkList {...groupProps} marks={marks} parts={parts} />
}

/** @internal Shared by `Slider.Marks` and `Slider` */
export function MarkList(
  props: Omit<SliderMarksProps, 'children'> & {
    parts: ExtractedParts<typeof MARK_PARTS>
  },
) {
  const { marks, parts, ...groupProps } = props
  const {
    value: _value,
    children: _children,
    ...markerOverrideProps
  } = parts.marker ?? {}

  return (
    <SliderMarkerGroup {...groupProps}>
      <For each={marks}>
        {(mark, idx) => {
          const value = typeof mark === 'number' ? mark : mark.value
          const label =
            typeof mark === 'number' ? mark : (mark.label ?? mark.value)
          return (
            <SliderMarker key={idx} {...markerOverrideProps} value={value}>
              <SliderMarkerIndicator {...parts.markerIndicator} />
              {label}
            </SliderMarker>
          )
        }}
      </For>
    </SliderMarkerGroup>
  )
}
