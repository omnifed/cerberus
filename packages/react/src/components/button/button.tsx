'use client'

import {
  type ButtonHTMLAttributes,
  type PropsWithChildren,
  createContext,
  useContext,
  useMemo,
} from 'react'
import { cx } from '@cerberus/styled-system/css'
import {
  button,
  type ButtonVariantProps,
} from '@cerberus/styled-system/recipes'
import { Show } from '../Show'
import { Spinner } from '../Spinner'
import { Box } from '@cerberus/styled-system/jsx'

/**
 * This module contains the Button component.
 * @module
 */

interface ButtonContextValue {
  pending: boolean
}

const ButtonContext = createContext<ButtonContextValue>({
  pending: false,
})

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariantProps & {
    pending?: boolean
  }

/**
 * A component that allows the user to perform actions
 * @see https://cerberus.digitalu.design/react/button
 */
export function Button(props: ButtonProps): JSX.Element {
  const { palette, usage, shape, size, pending = false, ...nativeProps } = props
  const value = useMemo(() => ({ pending }), [pending])

  return (
    <ButtonContext.Provider value={value}>
      <button
        {...nativeProps}
        disabled={pending || nativeProps.disabled}
        className={cx(
          nativeProps.className,
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

/**
 * An icon to display in a button that utilizes the pending state to display
 * a loading spinner.
 */
export function ButtonIcon(props: PropsWithChildren<object>) {
  const { pending } = useContext(ButtonContext)
  return (
    <Show when={pending} fallback={<>{props.children}</>}>
      <Box w="4">
        <Spinner />
      </Box>
    </Show>
  )
}
