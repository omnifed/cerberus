'use client'

import { HStack } from 'styled-system/jsx'
import { extractParts } from '../../internal/extract-parts'
import { splitProps } from '../../utils/index'
import { Show } from '../show/show'
import { MARK_PARTS, MarkList, SliderMarks, type SliderMark } from './marks'
import {
  SliderControl,
  SliderMarkerGroup,
  SliderRange,
  SliderRoot,
  SliderTrack,
  type SliderRootProps,
} from './primitives'
import { SliderThumbs, THUMB_PARTS, ThumbList } from './thumbs'

const PARTS = {
  control: SliderControl,
  track: SliderTrack,
  range: SliderRange,
  markerGroup: SliderMarkerGroup,
  thumbs: SliderThumbs,
  marks: SliderMarks,
  ...THUMB_PARTS,
  ...MARK_PARTS,
}

export type SliderProps = SliderRootProps & {
  /**
   * The marks to render along the track. A number renders as its own label;
   * an object renders `label` (or its `value` when no label is given).
   */
  marks?: SliderMark[]
  /**
   * Shows a dragging indicator with the thumb's value while a thumb is dragged
   * or focused.
   * @default false
   */
  showIndicator?: boolean
}

/**
 * The Slider component is an abstraction of the primitives that renders the
 * control, track, range, one thumb per value and optional marks. The
 * `direction` variant follows `orientation` unless it is set. Non-part
 * children (e.g. `Slider.Label`, `Slider.ValueText`) render as a header above
 * the control. A direct `Slider.Thumbs` or `Slider.Marks` child replaces the
 * default thumbs or marks; direct `Slider.Control`, `Slider.Track`,
 * `Slider.Range`, `Slider.Thumb`, `Slider.DraggingIndicator`,
 * `Slider.HiddenInput`, `Slider.MarkerGroup`, `Slider.Marker` or
 * `Slider.MarkerIndicator` children patch that part (on every thumb or
 * marker).
 * @description [Cerberus Docs] https://cerberus.digitalu.design/docs/components/slider
 * @description [Ark Docs] https://ark-ui.com/docs/components/slider
 * @example
 * ```tsx
 * <Slider defaultValue={[30]} />
 * ```
 */
export function SliderEl(props: SliderProps) {
  const [localProps, rootProps] = splitProps(props, [
    'marks',
    'showIndicator',
    'children',
  ])
  const { marks, showIndicator } = localProps

  const { parts, content } = extractParts(localProps.children, PARTS)
  const { children: controlChildren, ...controlOverrideProps } =
    parts.control ?? {}
  const { children: trackChildren, ...trackOverrideProps } = parts.track ?? {}
  const { children: _markerGroupChildren, ...markerGroupOverrideProps } =
    parts.markerGroup ?? {}

  return (
    <SliderRoot
      {...rootProps}
      direction={rootProps.direction ?? rootProps.orientation}
    >
      <Show when={content != null}>
        {() => (
          <HStack justify="space-between" w="full">
            {content}
          </HStack>
        )}
      </Show>

      <SliderControl {...controlOverrideProps}>
        {controlChildren ?? (
          <>
            <SliderTrack {...trackOverrideProps}>
              {trackChildren ?? <SliderRange {...parts.range} />}
            </SliderTrack>

            {parts.thumbs ? (
              <SliderThumbs {...parts.thumbs} />
            ) : (
              <ThumbList
                showIndicator={showIndicator}
                parts={{
                  thumb: parts.thumb,
                  draggingIndicator: parts.draggingIndicator,
                  hiddenInput: parts.hiddenInput,
                }}
              />
            )}

            {parts.marks ? (
              <SliderMarks {...parts.marks} />
            ) : (
              <Show when={marks?.length}>
                {() => (
                  <MarkList
                    {...markerGroupOverrideProps}
                    marks={marks ?? []}
                    parts={{
                      marker: parts.marker,
                      markerIndicator: parts.markerIndicator,
                    }}
                  />
                )}
              </Show>
            )}
          </>
        )}
      </SliderControl>
    </SliderRoot>
  )
}
