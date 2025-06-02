'use client'

import { useCallback, useEffect, useMemo, useReducer } from 'react'

/**
 * This module provides a hook to get Cerberus colors from the document root.
 * @module useRootColors
 */

export interface RootColorsResult {
  /**
   * A record of Cerberus colors where the key is the token name provided and the value is the color hex.
   */
  colors: Record<string, string>
  /**
   * A function to refetch the Cerberus colors from the document root. Useful when you need the latest colors after a theme/mode change.
   */
  refetch: () => Promise<void>
}

/**
 * This hook returns a record of Cerberus colors from the document root.
 * This is useful when you are working with a component that uses the `<canvas>`
 * element.
 * @param colors - An array of Cerberus tokens to get from the document root (i.e. `['dataViz.diverging.50', 'dataViz.diverging.200']`).
 * @returns A record of Cerberus colors where the key is the token name provided and the value is the color hex.
 */
export function useRootColors(colors: string[] = []): RootColorsResult {
  const [state, dispatch] = useReducer(rootColorsReducer, {})

  const handleRefetch = useCallback(() => {
    return new Promise<void>((resolve) => {
      dispatch(formatColors(colors))
      resolve()
    })
  }, [colors])

  useEffect(() => {
    if (Object.keys(state).length === colors.length) return
    dispatch(formatColors(colors))
  }, [colors, state])

  // reducer is already memoized
  return useMemo(
    () => ({ colors: state, refetch: handleRefetch }),
    [state, handleRefetch],
  )
}

function formatColors(colors: string[]): Record<string, string> {
  const rootStyles = getComputedStyle(document.body)
  return colors.reduce(
    (acc, color) => {
      const formattedColor = color
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .toLowerCase()
        .replaceAll('.', '-')
      acc[color] = rootStyles
        .getPropertyValue(`--cerberus-colors-${formattedColor}`)
        .trim()
      return acc
    },
    {} as Record<string, string>,
  )
}

function rootColorsReducer(
  state: Record<string, string>,
  action: Record<string, string>,
): Record<string, string> {
  return { ...state, ...action }
}
