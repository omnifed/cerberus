import { createContext } from 'solid-js'

/**
 * This module contains the context for the Button component.
 * @module 'button/context'
 */

interface ButtonContextValue {
  pending: boolean
}

export const ButtonContext = createContext<ButtonContextValue>({
  pending: false,
})
