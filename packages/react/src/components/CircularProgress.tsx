'use client'

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
   * What is shown below the now value (default: 'Done')
   */
  label?: string
}

/**
 * The CircularProgress component is used to display a loading indicator.
 * @param props - SVG element attributes
 * @param props.now - The current value of the CircularProgress
 * @param props.title - The title of the CircularProgress for a11y
 * @param props.label - What is shown below the now value (default: 'Done')
 * @description [CircularProgress Docs](https://cerberus.digitalu.design/react/progress/)
 * @example
 * ```tsx
 * <CircularProgress now={24} title="Course completion" label="done" />
 * ```
 */
export function CircularProgress(props: CircularProgressProps) {
  const strokeW: number = 14
  const radius = `calc(50% * (1 - ${strokeW}/100))`
  const status: string = props.label ?? 'Done'
  const now: number = props.now >= 100 ? 100 : props.now

  return (
    <div
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={now}
      className={cq({
        alignSelf: 'stretch',
        flex: 1,
        m: '4px',
        position: 'relative',
      })}
      role="progressbar"
    >
      <svg
        data-complete={now === 100}
        className={css({
          display: 'block',
          rounded: 'full',
          transition: 'all 0.5s ease',
        })}
        fill="none"
        strokeLinecap="round"
        strokeWidth={strokeW}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{props.title}</title>
        <desc>{`${now}% ${status}`}</desc>
        <mask id="progMask">
          <rect fill="white" width="100%" height="100%" />
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
            className={css({
              transition: 'stroke-dashoffset 0.5s ease',
            })}
            cx="50%"
            cy="50%"
            r={radius}
            pathLength="100"
            stroke="black"
            strokeDasharray="100"
            strokeDashoffset={100 - now}
            transform="rotate(-90 50 50)"
          />
        </mask>

        {/* <circle
          fill="var(--cerberus-colors-page-surface-initial)"
          cx="50%"
          cy="50%"
          r={`calc(50% * (1.15 - ${strokeW}/100))`}
          pathLength="100"
          mask="url(#progMask)"
        /> */}

        <circle
          className={css({
            fill: 'page.surface.initial',
          })}
          cx="50%"
          cy="50%"
          r={`calc(50% * (1 - ${strokeW}/100))`}
          pathLength="100"
        />
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
          data-complete={now === 100}
          className={css({
            stroke: 'action.bg.initial',
            transition: 'stroke-dashoffset 0.5s ease',
            '&:is([data-complete=true])': {
              stroke: 'success.bg.initial',
            },
          })}
          cx="50%"
          cy="50%"
          r={radius}
          pathLength="100"
          strokeDasharray="100"
          strokeDashoffset={100 - now}
          transform="rotate(-90 50 50)"
        />

        <g>
          <text
            className={css({
              fill: 'page.text.initial',
              fontFamily: 'mono',
              textStyle: '1.25rem',
            })}
            x="35%"
            y="50%"
          >
            {now}%
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
        </g>
      </svg>
    </div>
  )
}
