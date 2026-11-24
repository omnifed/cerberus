'use client'

import type { ReactNode } from 'react'
import { extractParts } from '../../internal/extract-parts'
import {
  CircularProgressCircle,
  CircularProgressCircleRange,
  CircularProgressCircleTrack,
  CircularProgressInfoGroup,
  CircularProgressLabel,
  CircularProgressRoot,
  CircularProgressValueText,
  type CircularProgressRootProps,
} from './primitives'

const PARTS = {
  circle: CircularProgressCircle,
  circleTrack: CircularProgressCircleTrack,
  circleRange: CircularProgressCircleRange,
  infoGroup: CircularProgressInfoGroup,
  valueText: CircularProgressValueText,
  label: CircularProgressLabel,
}

export type CircularProgressProps = CircularProgressRootProps & {
  /**
   * The text rendered below the value text, in the center of the circle.
   * @default 'Done'
   */
  label?: ReactNode
  /**
   * Whether to hide the value text in the center of the circle, leaving only
   * the label.
   * @default false
   */
  hideValueText?: boolean
}

/**
 * The CircularProgress component is an abstraction of the primitives that
 * renders the circle with its track and range, and an info group in the
 * center of the circle with the value text and the `label`. Non-part children
 * render inside the info group, after the label; direct
 * `CircularProgress.Circle`, `CircularProgress.CircleTrack`,
 * `CircularProgress.CircleRange`, `CircularProgress.InfoGroup`,
 * `CircularProgress.ValueText` or `CircularProgress.Label` children override
 * that part. A part child with children replaces its default content.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/progress)
 * @description [Ark Docs](https://ark-ui.com/docs/components/progress-circular)
 * @example
 * ```tsx
 * <CircularProgress value={50} label="Uploading" size="md" />
 * ```
 */
export function CircularProgressEl(props: CircularProgressProps) {
  const { label, hideValueText, children, ...rootProps } = props

  const { parts, content } = extractParts(children, PARTS)

  const { children: circleChildren, ...circleOverrideProps } =
    parts.circle ?? {}
  const { children: infoGroupChildren, ...infoGroupOverrideProps } =
    parts.infoGroup ?? {}
  const { children: labelChildren, ...labelOverrideProps } = parts.label ?? {}

  return (
    <CircularProgressRoot {...rootProps}>
      <CircularProgressCircle {...circleOverrideProps}>
        {circleChildren ?? (
          <>
            <CircularProgressCircleTrack {...parts.circleTrack} />
            <CircularProgressCircleRange {...parts.circleRange} />
          </>
        )}
      </CircularProgressCircle>

      <CircularProgressInfoGroup {...infoGroupOverrideProps}>
        {infoGroupChildren ?? (
          <>
            {!hideValueText && (
              <CircularProgressValueText {...parts.valueText} />
            )}
            <CircularProgressLabel {...labelOverrideProps}>
              {labelChildren ?? label ?? 'Done'}
            </CircularProgressLabel>
            {content}
          </>
        )}
      </CircularProgressInfoGroup>
    </CircularProgressRoot>
  )
}
