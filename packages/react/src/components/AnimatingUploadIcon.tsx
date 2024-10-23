import { type CarbonIconProps } from '@cerberus/icons'

/**
 * This module contains an animating icon to use for the FileStatus component.
 * @module
 */

export type AnimatingUploadIconProps = CarbonIconProps

export function AnimatingUploadIcon(props: AnimatingUploadIconProps) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? '1em'}
      height={props.size ?? '1em'}
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path
          data-name="animating-trail"
          strokeDasharray="2 4"
          strokeDashoffset={6}
          d="M12 21c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="0.45s"
            repeatCount="indefinite"
            values="6;0"
          ></animate>
        </path>

        <path
          data-name="half-circle"
          strokeDasharray={32}
          strokeDashoffset={32}
          d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.075s"
            dur="0.3s"
            values="32;0"
          ></animate>
        </path>

        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="0.8em"
          height="0.8em"
          x="27%"
          y="27%"
          viewBox="0 0 24 24"
        >
          <polygon
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={0.8}
            opacity="1"
            points="3.7,6.7 7.5,2.9 7.5,15 8.5,15 8.5,2.9 12.3,6.7 13,6 8,1 3,6 "
          >
            <animate
              fill="freeze"
              attributeName="opacity"
              values="1;0;1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </polygon>
        </svg>
      </g>
    </svg>
  )
}
