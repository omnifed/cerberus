import { vstack } from '@cerberus/styled-system/patterns'

export default function SquigglyDivider() {
  return (
    <div
      className={vstack({
        py: '10rem',
        w: 'full',
      })}
    >
      <svg
        aria-hidden="true"
        width="155"
        height="9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 4.5c5.067-4.667 10.133-4.667 15.2 0s10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0"
          stroke="var(--cerberus-colors-info-border-initial)"
          strokeWidth="2"
          strokeLinecap="round"
        ></path>
      </svg>
    </div>
  )
}
