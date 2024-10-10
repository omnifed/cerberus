import { css } from '@cerberus/styled-system/css'
import type { SVGProps } from 'react'

/**
 * This module contains the CircularProgress component.
 * @module
 */

export interface CircularProgressProps extends SVGProps<SVGSVGElement> {
  /**
   * The current value of the CircularProgress
   */
  now: number
  /**
   * The title of the CircularProgress for a11y
   */
  title: string
  /**
   * The label of the CircularProgress for a11y
   */
  label?: string
}

/**
 * The CircularProgress component is used to display a loading indicator.
 * @param props - SVG element attributes
 * @param props.now - The current value of the CircularProgress
 * @param props.title - The title of the CircularProgress for a11y
 * @param props.label - The label of the CircularProgress for a11y
 * @description [CircularProgress Docs](https://cerberus.digitalu.design/react/progress/)
 * @example
 * ```tsx
 * <CircularProgress now={24} title="Course completion" label="done" />
 * ```
 */
export function CircularProgress(props: CircularProgressProps) {
  return (
    <div
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={props.now}
      role="progressbar"
    >
      <svg viewBox="0 0 4800 4800" xmlns="http://www.w3.org/2000/svg">
        <title>{props.title}</title>
        <circle
          className={css({
            stroke: 'page.bg.100',
          })}
          pathLength="100"
        />
        <circle fill="url(#a)" strokeDashoffset="40" pathLength="100">
          <text x="50%" y="50%">
            {props.now}%
          </text>
          <text x="50%" y="52%">
            {props.label ?? 'Complete'}
          </text>
        </circle>
      </svg>

      <defs>
        <linearGradient
          id="a"
          x1="106.333"
          x2=".541"
          y1="-16.917"
          y2="58.756"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--cerberus-colors-action-bg-initial)" />
          <stop
            offset="1"
            stopColor="var(--cerberus-colors-info-surface-initial)"
          />
        </linearGradient>
      </defs>
    </div>
  )
}
