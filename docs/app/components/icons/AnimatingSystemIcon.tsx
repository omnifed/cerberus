import { type SVGProps } from 'react'

export function AnimatingSystemIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
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
        <path strokeDasharray={6} strokeDashoffset={6} d="M12 21h5M12 21h-5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.225s"
            values="6;0"
          ></animate>
        </path>
        <path strokeDasharray={6} strokeDashoffset={6} d="M12 21v-4">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.225s"
            values="6;0"
          ></animate>
        </path>
        <path
          fill="currentColor"
          fillOpacity={0}
          strokeDasharray={64}
          strokeDashoffset={64}
          d="M12 17h-9v-12h18v12Z"
        >
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.75s"
            dur="0.112s"
            values="0;0.3"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.225s"
            dur="0.45s"
            values="64;0"
          ></animate>
        </path>
      </g>
    </svg>
  )
}
