import { ark, type HTMLArkProps } from '@ark-ui/solid/factory'
import { splitProps } from 'solid-js'
import { cx } from 'styled-system/css'
import { button, type ButtonVariantProps } from 'styled-system/recipes'
import { ButtonContext } from './context'

/**
 * This module contains the Button component.
 * @module
 */

export interface ButtonProps
  extends HTMLArkProps<'button'>,
    ButtonVariantProps {
  /**
   * The pending state of the button.
   * @default false
   */
  pending?: boolean
}

/**
 * A component that allows the user to perform actions
 * @see https://cerberus.digitalu.design/components/button
 */
export function Button(props: ButtonProps) {
  const [{ palette, usage, shape, size }, { pending = false }, nativeProps] =
    splitProps(props, ['palette', 'usage', 'shape', 'size'], ['pending'])

  return (
    <ButtonContext.Provider value={{ pending }}>
      <ark.button
        {...nativeProps}
        disabled={pending ?? nativeProps.disabled}
        class={cx(
          props.class,
          button({
            palette,
            usage,
            shape,
            size,
          }),
        )}
      />
    </ButtonContext.Provider>
  )
}
