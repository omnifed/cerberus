import { Show, splitProps } from 'solid-js'
import { circularProgress } from 'styled-system/recipes'

/**
 * This module contains the CircularProgress component.
 * @module
 */

export interface CircularProgressProps {
  /**
   * A unique identifier for the progress bar. Required for accessibility.
   */
  id: string
  /**
   * A description label for the progress bar. Required for accessibility.
   */
  label: string
  /**
   * The current value of the CircularProgress
   */
  now: number
  /**
   * The title of the CircularProgress for a11y
   */
  title: string
  /**
   * What is shown below the now value (default: 'Done')
   */
  syntax?: string
  /**
   * The background style of the CircularProgress
   */
  bgStyle?: 'filled' | 'transparent'
  /**
   * The size of the CircularProgress
   * @default '1.1em'
   */
  size?: string
}

/**
 * The CircularProgress component is used to display a loading indicator.
 * @see https://cerberus.digitalu.design/components/progress-indicators
 * @example
 * ```tsx
 * <CircularProgress now={24} title="Course completion" label="done" />
 * ```
 */
export function CircularProgress(props: CircularProgressProps) {
  const [elProps] = splitProps(props, [
    'id',
    'label',
    'now',
    'title',
    'syntax',
    'bgStyle',
    'size',
  ])

  const strokeW: number = 14
  const radius = `calc(50% * (1 - ${strokeW}/100))`
  const status: string = elProps.syntax ?? 'Done'
  const now: number = elProps.now >= 100 ? 100 : elProps.now
  const bgStyle: string = elProps.bgStyle ?? 'filled'
  const fallbackSize = '1.1em'

  const sizeProps = elProps.size
    ? {
        width: elProps.size ?? fallbackSize,
        height: elProps.size ?? fallbackSize,
      }
    : {}

  const styles = circularProgress()

  return (
    <div
      id={elProps.id}
      aria-label={elProps.label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={now}
      class={styles.root}
      role="progressbar"
    >
      <svg
        data-complete={now === 100}
        class={styles.group}
        fill="none"
        stroke-linecap="round"
        stroke-width={strokeW}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        {...sizeProps}
      >
        <title>{elProps.title}</title>
        <desc>{`${now}% ${status}`}</desc>
        <defs>
          <linearGradient id="gradient">
            <stop
              offset="0%"
              stop-color="var(--cerberus-colors-data-viz-progress-start)"
            />
            <stop
              offset="100%"
              stop-color="var(--cerberus-colors-data-viz-progress-end)"
            />
          </linearGradient>
        </defs>

        <Show when={bgStyle === 'filled'}>
          <circle
            class={styles.base}
            cx="50%"
            cy="50%"
            r={`calc(50% * (1 - ${strokeW}/100))`}
            pathLength="100"
          />
        </Show>
        <circle
          class={styles.track}
          cx="50%"
          cy="50%"
          r={radius}
          pathLength="100"
        />
        <circle
          data-complete={now === 100}
          class={styles.path}
          cx="50%"
          cy="50%"
          fill="none"
          r={radius}
          pathLength="100"
          stroke-dasharray="100"
          stroke-dashoffset={100 - now}
          transform="rotate(-90 50 50)"
        />

        <g>
          <text
            class={styles.title}
            x="50%"
            y="47%"
            dominant-baseline="middle"
            text-anchor="middle"
          >
            {now}%
          </text>
          <text
            class={styles.description}
            x="50%"
            y="59%"
            dominant-baseline="middle"
            text-anchor="middle"
          >
            {status}
          </text>
        </g>
      </svg>
    </div>
  )
}
