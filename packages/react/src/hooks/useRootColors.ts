'use client'

import { useEffect, useReducer } from 'react'

/**
 * This module provides a hook to get Cerberus colors from the document root.
 * @module useRootColors
 */

export type RootColorsResult = Record<string, string>

/**
 * This hook returns a record of Cerberus colors from the document root.
 * This is useful when you are working with a component that uses the `<canvas>`
 * element.
 * @param colors - An array of Cerberus tokens to get from the document root (i.e. `['dataViz.diverging.50', 'dataViz.diverging.200']`).
 * @returns A record of Cerberus colors where the key is the token name provided and the value is the color hex.
 */
export function useRootColors(colors: string[] = []): RootColorsResult {
  const [state, dispatch] = useReducer(rootColorsReducer, {})

  useEffect(() => {
    if (Object.keys(state).length === colors.length) return

    const rootStyles = getComputedStyle(document.body)
    const rootColors = colors.reduce((acc, color) => {
      const formattedColor = color
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .toLowerCase()
        .replaceAll('.', '-')
      acc[color as keyof typeof acc] = rootStyles
        .getPropertyValue(`--cerberus-colors-${formattedColor}`)
        .trim()
      return acc
    }, {} as RootColorsResult)

    dispatch(rootColors)
  }, [colors])

  // reducer is already memoized
  return state
}

function rootColorsReducer(
  state: Record<string, string>,
  action: Record<string, string>,
): Record<string, string> {
  return { ...state, ...action }
}
