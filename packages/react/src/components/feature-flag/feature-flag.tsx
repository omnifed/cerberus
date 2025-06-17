'use client'

import type { PropsWithChildren } from 'react'
import { useFeatureFlags } from '../../context/feature-flags'
import { Show } from '../show/index'

export interface FeatureFlagProps {
  /**
   * The name of the feature flag to check.
   */
  flag: string
}

/**
 * A component that allows you to show or hide content based on a feature flag.
 * @see https://cerberus.digitalu.design/react/feature-flags
 */
export function FeatureFlag(props: PropsWithChildren<FeatureFlagProps>) {
  const showContent = useFeatureFlags(props.flag)
  return <Show when={showContent}>{props.children}</Show>
}
