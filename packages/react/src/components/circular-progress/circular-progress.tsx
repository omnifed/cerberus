import type { ReactNode } from 'react'
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
import { Show } from '../show/show'

export interface CircularProgressProps extends CircularProgressRootProps {
  /**
   * The background style of the CircularProgress
   */
  bgStyle?: 'filled' | 'transparent'
  /**
   * The label for the circular progress.
   * @default 'Done'
   */
  label?: ReactNode
  /**
   * Whether to hide the value text inside the circular progress.
   * @default false
   */
  hideValueText?: boolean
}

export function CircularProgress(props: CircularProgressProps) {
  const { label, hideValueText, ...rootProps } = props

  return (
    <CircularProgressRoot {...rootProps}>
      <CircularProgressCircle>
        <CircularProgressCircleTrack />
        <CircularProgressCircleRange />
      </CircularProgressCircle>

      <CircularProgressInfoGroup>
        <Show when={!hideValueText}>
          <CircularProgressValueText />
        </Show>
        <CircularProgressLabel>{label ?? 'Done'}</CircularProgressLabel>
      </CircularProgressInfoGroup>
    </CircularProgressRoot>
  )
}
