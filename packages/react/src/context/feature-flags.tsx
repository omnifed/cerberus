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
 * @param flags - The flags data for the provider.
 * @example
 * ```tsx
 * // This should be a JSON file or a server response.
 * const flags = {
 *  featureOne: true,
 *  featureTwo: false
 * }
 *
 * // Wrap the Provider around the root of your application.
 * <FeatureFlagProvider flags={flags}>
 *    <FeatureFlag flag="featureOne">
 *      This is visible.
 *    </FeatureFlag>
 *   <FeatureFlag flag="featureTwo">
 *     This is hidden.
 *   </FeatureFlag>
 * </FeatureFlagProvider>
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

export function useFeatureFlags(key: string): boolean {
  const context = useContext(FeatureFlagContext)
  if (context === null) {
    throw new Error(
      'useFeatureFlag must be used within a FeatureFlags Provider',
    )
  }
  return context[key] ?? false
}
