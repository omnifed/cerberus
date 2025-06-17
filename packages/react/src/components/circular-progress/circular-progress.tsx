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

export interface CircularProgressProps extends CircularProgressRootProps {
  /**
   * The background style of the CircularProgress
   */
  bgStyle?: 'filled' | 'transparent'
  /**
   * The label for the circular progress.
   */
  label?: string
}

export function CircularProgress(props: CircularProgressProps) {
  const { label, ...rootProps } = props

  return (
    <CircularProgressRoot {...rootProps}>
      <CircularProgressCircle>
        <CircularProgressCircleTrack />
        <CircularProgressCircleRange />
      </CircularProgressCircle>

      <CircularProgressInfoGroup>
        <CircularProgressValueText />
        <CircularProgressLabel>{label ?? 'Done'}</CircularProgressLabel>
      </CircularProgressInfoGroup>
    </CircularProgressRoot>
  )
}
