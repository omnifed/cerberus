import { circularProgress } from 'styled-system/recipes'
import type { SVGProps } from 'react'
import { Show } from './Show'
import { For } from './for'

/**
 * This module contains the CircularProgress component.
 * @module
 */

export interface CircularProgressProps extends SVGProps<SVGSVGElement> {
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
 * @param props - SVG element attributes
 * @param props.now - The current value of the CircularProgress
 * @param props.title - The title of the CircularProgress for a11y
 * @param props.label - What is shown below the now value (default: 'Done')
 * @see https://cerberus.digitalu.design/react/progress-indicators
 * @example
 * ```tsx
 * <CircularProgress now={24} title="Course completion" label="done" />
 * ```
 */
export function CircularProgress(props: CircularProgressProps) {
  const { size = '1.1em' } = props
  const sizeProps = props.size
    ? {
        height: size,
        width: size,
      }
    : {}

  const strokeW: number = 14
  const radius = `calc(50% * (1 - ${strokeW}/100))`
  const status: string = props.syntax ?? 'Done'
  const now: number = props.now >= 100 ? 100 : props.now
  const bgStyle: string = props.bgStyle ?? 'filled'

  const styles = circularProgress()

  return (
    <div
      id={props.id}
      aria-label={props.label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={now}
      className={styles.root}
      role="progressbar"
    >
      <svg
        data-complete={now === 100}
        className={styles.group}
        fill="none"
        strokeLinecap="round"
        strokeWidth={strokeW}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        {...sizeProps}
      >
        <title>{props.title}</title>
        <desc>{`${now}% ${status}`}</desc>

        <defs>
          <linearGradient id="gradient">
            <stop
              offset="0%"
              stopColor="var(--cerberus-colors-data-viz-progress-start)"
            />
            <stop
              offset="100%"
              stopColor="var(--cerberus-colors-data-viz-progress-end)"
            />
          </linearGradient>
        </defs>

        <Show when={bgStyle === 'filled'}>
          <circle
            className={styles.base}
            cx="50%"
            cy="50%"
            r={`calc(50% * (1 - ${strokeW}/100))`}
            pathLength="100"
          />
        </Show>

        <circle
          className={styles.track}
          cx="50%"
          cy="50%"
          r={radius}
          pathLength="100"
        />

        <Show
          when={now > 0}
          fallback={
            <text
              data-fallback
              className={styles.description}
              x="50%"
              y="27%"
              dominantBaseline="middle"
              textAnchor="middle"
              textLength="65%"
            >
              <For each={status.split(' ')}>
                {(word, idx) => (
                  <tspan key={`${word}:${idx}`} x="50%" dy="1.2em">
                    {word}
                  </tspan>
                )}
              </For>
            </text>
          }
        >
          <circle
            data-complete={now === 100}
            className={styles.path}
            cx="50%"
            cy="50%"
            fill="none"
            r={radius}
            pathLength="100"
            strokeDasharray="100"
            strokeDashoffset={100 - now}
            transform="rotate(-90 50 50)"
          />
          <g>
            <text
              className={styles.title}
              x="50%"
              y="47%"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              {now}%
            </text>
            <text
              className={styles.description}
              x="50%"
              y="59%"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              {status}
            </text>
          </g>
        </Show>
      </svg>
    </div>
  )
}
