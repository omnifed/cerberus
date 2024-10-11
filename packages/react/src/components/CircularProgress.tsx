import { cq } from '@cerberus/styled-system/patterns'
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
  const strokeW = 14
  const radius = `calc(50% * (1 - ${strokeW}/100))`
  const status = props.label ?? 'Done'

  return (
    <div
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={props.now}
      className={cq({
        alignSelf: 'stretch',
        flex: 1,
        m: '4px',
        position: 'relative',
      })}
      role="progressbar"
    >
      {/* <span
        className={vstack({
          gap: 'max(0em, 1 * 0.25cqi)',
          h: 'full',
          justify: 'center',
          position: 'absolute',
          w: 'full',
        })}
      >
        <p
          className={css({
            fontFamily: 'mono',
            fontSize: 'max(1.25em, 3 * 5cqi)',
          })}
        >
          {props.now}%
        </p>
        <p
          className={css({
            color: 'page.text.100',
            fontSize: 'max(0.75em, 2 * 4cqi)',
            maxW: '1/2',
            mx: 'auto',
            textStyle: 'label-sm',
            wordBreak: 'break-word',
          })}
        >
          {status}
        </p>
      </span> */}

      <svg
        viewBox="0 0 100 100"
        fill="none"
        strokeLinecap="round"
        strokeWidth={strokeW}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{props.title}</title>
        <desc>{`${props.now}% ${status}`}</desc>

        <text
          className={css({
            fill: 'page.text.initial',
            fontFamily: 'mono',
            textStyle: '1.25rem',
          })}
          x="35%"
          y="50%"
        >
          {props.now}%
        </text>
        <text
          className={css({
            fill: 'page.text.100',
            fontSize: '0.5rem',
          })}
          x="39%"
          y="60%"
        >
          {status}
        </text>

        <circle
          className={css({
            stroke: 'page.bg.100',
          })}
          cx="50%"
          cy="50%"
          r={radius}
          pathLength="100"
        />
        <circle
          data-complete={props.now === 100}
          className={css({
            stroke: 'action.bg.initial',
            '&:is([data-complete=true])': {
              stroke: 'success.bg.initial',
            },
          })}
          cx="50%"
          cy="50%"
          r={radius}
          pathLength="100"
          strokeDasharray="100"
          strokeDashoffset={100 - props.now}
          transform="rotate(-90 50 50)"
        />
      </svg>
    </div>
  )
}
