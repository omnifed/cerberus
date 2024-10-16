'use client'

import { createContext, useContext, type PropsWithChildren } from 'react'

/**
 * This module provides a context and hook for feature flags.
 * @module
 */

export interface FeatureFlagValue {
  [key: string]: boolean
}

const FeatureFlagContext = createContext<FeatureFlagValue | null>(null)

export interface FeatureFlagProviderProps {
  flags: FeatureFlagValue
}

/**
 * Provides feature flags to the application.
 * @see https://cerberus.digitalu.design/react/feature-flags
 * @example
 * ```tsx
 * // This should be a JSON file or a server response.
 * const flags = {
 *  featureOne: true,
 *  featureTwo: false
 * }
 *
 * // Wrap the Provider around the root of your application.
 * <FeatureFlags flags={flags}>
 *    <FeatureFlag flag="featureOne">
 *      This is visible.
 *    </FeatureFlag>
 *   <FeatureFlag flag="featureTwo">
 *     This is hidden.
 *   </FeatureFlag>
 * </FeatureFlags>
 * ```
 */
export function FeatureFlags(
  props: PropsWithChildren<FeatureFlagProviderProps>,
) {
  return (
    <FeatureFlagContext.Provider value={props.flags}>
      {props.children}
    </FeatureFlagContext.Provider>
  )
}

/**
 * Used to retrieve the context of the FeatureFlags provider.
 */
export function useFeatureFlags(key: string): boolean {
  const context = useContext(FeatureFlagContext)
  if (context === null) {
    throw new Error(
      'useFeatureFlag must be used within a FeatureFlags Provider',
    )
  }
  return context[key] ?? false
}
