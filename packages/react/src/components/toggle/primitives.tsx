import {
  Toggle,
  type ToggleIndicatorProps,
  type ToggleRootProps,
} from '@ark-ui/react/toggle'

/**
 * This module provides the Toggle primitives.
 * @module 'react/toggle'
 */

/**
 * The ToggleRoot is used to manage the state of the Toggle component.
 */
export function ToggleRoot(props: ToggleRootProps) {
  return <Toggle.Root {...props} />
}

/**
 * The ToggleIndicator is used to render the indicator of the Toggle component
 * based on the pressed state.
 */
export function ToggleIndicator(props: ToggleIndicatorProps) {
  return <Toggle.Indicator {...props} />
}
