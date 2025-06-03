'use client'

import { type HTMLArkProps } from '@ark-ui/react/factory'
import {
  type PropsWithChildren,
  createContext,
  useContext,
  useMemo,
} from 'react'
import { type ButtonVariantProps } from 'styled-system/recipes'
import { Box } from 'styled-system/jsx'
import type { CerberusPrimitiveProps } from '../../system/types'
import { Show } from '../Show'
import { Spinner } from '../Spinner'
import { ButtonRoot } from './primitives'

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

export type ButtonProps = CerberusPrimitiveProps<
  HTMLArkProps<'button'> &
    ButtonVariantProps & {
      pending?: boolean
    }
>

/**
 * A component that allows the user to perform actions
 * @see https://cerberus.digitalu.design/react/button
 */
export function Button(props: ButtonProps) {
  const { pending = false, ...nativeProps } = props
  const value = useMemo(() => ({ pending }), [pending])
  return (
    <ButtonContext.Provider value={value}>
      <ButtonRoot {...nativeProps} disabled={pending || nativeProps.disabled} />
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
