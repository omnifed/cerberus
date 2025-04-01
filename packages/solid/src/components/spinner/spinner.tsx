/**
 * This module contains the Spinner component.
 * @module
 */

export interface SpinnerProps {
  /**
   * The size of the spinner
   */
  size?: number | string
}

/**
 * The Spinner component is used to display a loading indicator. Typically used
 * in buttons, modals, and other components that require a loading state.
 * @see https://cerberus.digitalu.design/components/loading-states/
 * @example
 * ```tsx
 * <Button>
 *   <Show when={loading} fallback={<>Save</>}>
 *      Saving
 *      <Spinner size={24} />
 *   </Show>
 * </Button>
 * ```
 */
export function Spinner(props: SpinnerProps) {
  const fallbackSize = '1.1em'
  return (
    <svg
      aria-busy="true"
      data-scope="spinner"
      data-part="root"
      role="status"
      xmlns="http://www.w3.org/2000/svg"
      height={props.size ?? fallbackSize}
      width={props.size ?? fallbackSize}
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={2}
      >
        <path
          stroke-dasharray="16"
          stroke-dashoffset="16"
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
          stroke-dasharray="64"
          stroke-dashoffset="64"
          stroke-opacity="0.3"
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
