import type { SVGProps } from 'react'

/**
 * This module contains the Spinner component.
 * @module
 */

export type SpinnerProps = SVGProps<SVGSVGElement> & {
  size?: number | string
}

/**
 * The Spinner component is used to display a loading indicator.
 * @param props - SVG element attributes
 * @param props.size - The size of the spinner
 * @description [Spinner Docs](https://cerberus.digitalu.design/react/loading-states/)
 * @example
 * ```tsx
 * <Spinner size={24} />
 * ```
 */
export function Spinner(props: SpinnerProps) {
  return (
    <svg
      aria-busy="true"
      role="status"
      xmlns="http://www.w3.org/2000/svg"
      height={props.size}
      width={props.size}
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path
          strokeDasharray={16}
          strokeDashoffset={16}
          d="M12 3c4.97 0 9 4.03 9 9"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.15s"
            values="16;0"
          ></animate>
          <animateTransform
            attributeName="transform"
            dur="0.75s"
            repeatCount="indefinite"
            type="rotate"
            values="0 12 12;360 12 12"
          ></animateTransform>
        </path>
        <path
          strokeDasharray={64}
          strokeDashoffset={64}
          strokeOpacity={0.3}
          d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="64;0"
          ></animate>
        </path>
      </g>
    </svg>
  )
}
