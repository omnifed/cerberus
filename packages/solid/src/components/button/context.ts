/**
 * This module contains the context for the Button component.
 * @module 'button/context'
 */

import { createContext } from 'solid-js'

interface ButtonContextValue {
  pending: boolean
}

export const ButtonContext = createContext<ButtonContextValue>({
  pending: false,
})
