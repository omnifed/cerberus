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
