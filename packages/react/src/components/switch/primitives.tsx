import {
  Switch,
  type SwitchControlProps,
  type SwitchLabelProps,
  type SwitchRootProps,
  type SwitchThumbProps,
} from '@ark-ui/react'
import { cx } from '@cerberus/styled-system/css'
import {
  switchRecipe,
  type SwitchRecipeVariantProps,
} from '@cerberus/styled-system/recipes'

/**
 * This module contains the Switch primitives
 * @module 'react/switch'
 */

/**
 * The SwitchRoot component is the context provider for the Switch components.
 */
export function SwitchRoot(props: SwitchRootProps & SwitchRecipeVariantProps) {
  const { size, ...rootProps } = props
  const styles = switchRecipe({ size })
  return (
    <Switch.Root
      {...rootProps}
      className={cx(styles.root, rootProps.className)}
    />
  )
}

/**
 * The SwitchLabel component is the label for the Switch.
 */
export function SwitchLabel(props: SwitchLabelProps) {
  const styles = switchRecipe()
  return (
    <Switch.Label {...props} className={cx(styles.label, props.className)} />
  )
}

/**
 * The SwitchControl component is the visual input for the Switch.
 */
export function SwitchControl(props: SwitchControlProps) {
  const styles = switchRecipe()
  return (
    <Switch.Control
      {...props}
      className={cx(styles.control, props.className)}
    />
  )
}

/**
 * The SwitchThumb component is the thumb for the Switch.
 */
export function SwitchThumb(props: SwitchThumbProps) {
  const styles = switchRecipe()
  return (
    <Switch.Thumb {...props} className={cx(styles.thumb, props.className)} />
  )
}

/**
 * The SwitchHiddenInput component is the native input for the Switch.
 */
export const SwitchHiddenInput = Switch.HiddenInput
