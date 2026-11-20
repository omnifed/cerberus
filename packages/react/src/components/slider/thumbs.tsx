'use client'

import { useSliderContext } from '@ark-ui/react/slider'
import type { ReactNode } from 'react'
import { extractParts, type ExtractedParts } from '../../internal/extract-parts'
import { For } from '../for/for'
import { Show } from '../show/show'
import {
  SliderDraggingIndicator,
  SliderHiddenInput,
  SliderThumb,
} from './primitives'

export const THUMB_PARTS = {
  thumb: SliderThumb,
  draggingIndicator: SliderDraggingIndicator,
  hiddenInput: SliderHiddenInput,
}

export type SliderThumbsProps = {
  /**
   * Shows a dragging indicator with the thumb's value while it is dragged or
   * focused. A direct `Slider.DraggingIndicator` child also shows it.
   * @default false
   */
  showIndicator?: boolean
  /**
   * Direct `Slider.Thumb`, `Slider.DraggingIndicator` and `Slider.HiddenInput`
   * children patch those parts on every thumb (a thumb's `index` is ignored);
   * other children render inside every thumb.
   */
  children?: ReactNode
}

/**
 * Renders one `Slider.Thumb` per slider value, each with its
 * `Slider.HiddenInput` and an optional `Slider.DraggingIndicator`. The number
 * of thumbs follows the slider's current value, so it must be rendered inside
 * `Slider.Root` or `Slider.RootProvider`.
 * @description [Cerberus Docs] https://cerberus.digitalu.design/docs/components/slider
 */
export function SliderThumbs(props: SliderThumbsProps) {
  const { parts, content } = extractParts(props.children, THUMB_PARTS)
  return (
    <ThumbList
      showIndicator={props.showIndicator}
      parts={parts}
      content={content}
    />
  )
}

/** @internal Shared by `Slider.Thumbs` and `Slider` */
export function ThumbList(props: {
  showIndicator?: boolean
  parts: ExtractedParts<typeof THUMB_PARTS>
  content?: ReactNode
}) {
  const { parts, content } = props
  const slider = useSliderContext()

  const {
    index: _index,
    children: thumbChildren,
    ...thumbOverrideProps
  } = parts.thumb ?? {}
  const showIndicator =
    props.showIndicator || parts.draggingIndicator !== undefined

  return (
    <For each={slider.value}>
      {(_, index) => (
        <SliderThumb key={index} {...thumbOverrideProps} index={index}>
          <SliderHiddenInput {...parts.hiddenInput} />
          {thumbChildren ?? (
            <>
              <Show when={showIndicator}>
                {() => <SliderDraggingIndicator {...parts.draggingIndicator} />}
              </Show>
              {content}
            </>
          )}
        </SliderThumb>
      )}
    </For>
  )
}
