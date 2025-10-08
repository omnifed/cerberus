/**
 * This module contains substitute icons for the Checkbox component.
 * @module
 */

/**
 * Checkmark icon for Checkbox component
 */
export function CheckmarkIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      role="img"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M9.714 18 4 12.335l1.818-1.764 3.896 3.824L18.181 6 20 7.803 9.714 18Z"
      />
    </svg>
  )
}

/**
 * Indeterminate icon for Checkbox component
 */
export function IndeterminateIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path fill="currentColor" d="M4 11h16v2.667H4z" />
    </svg>
  )
}

/**
 * Animated checkmark icon for Clipboard.Indicator component
 */
export function AnimatedCheckmarkIcon() {
  return (
    <svg
      aria-hidden="true"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeDasharray={24}
        strokeDashoffset={24}
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 11l6 6l10 -10"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.28s"
          values="24;0"
        ></animate>
      </path>
    </svg>
  )
}

/**
 * Copy icon for Clipboard.Indicator component
 */
export function CopyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      viewBox="0 0 32 32"
    >
      <title>copy</title>
      <path
        d="M28 10v18H10V10zm0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2"
        fill="currentColor"
      />
      <path d="M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z" fill="currentColor" />
      <path
        fill="none"
        d="M0 0h32v32H0z"
        data-name="&lt;Transparent Rectangle&gt;"
      />
    </svg>
  )
}
