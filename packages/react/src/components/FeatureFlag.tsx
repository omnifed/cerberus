'use client'

import type { PropsWithChildren } from 'react'
import { useFeatureFlags } from '../context/feature-flags'
import { Show } from './Show'

export interface FeatureFlagProps {
  flag: string
}

export function FeatureFlag(props: PropsWithChildren<FeatureFlagProps>) {
  const showContent = useFeatureFlags(props.flag)
  return <Show when={showContent}>{props.children}</Show>
}
