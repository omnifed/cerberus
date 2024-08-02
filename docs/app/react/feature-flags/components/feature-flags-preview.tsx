'use client'

import { FeatureFlag, FeatureFlags } from '@cerberus-design/react'
import { useMemo } from 'react'

export default function FeatureFlagsPreview() {
  const flags = useMemo(
    () => ({
      featureOne: true,
      featureTwo: false,
    }),
    [],
  )

  return (
    <FeatureFlags flags={flags}>
      <FeatureFlag flag="featureOne">This is a visible feature</FeatureFlag>
      <FeatureFlag flag="featureTwo">This is a hidden feature</FeatureFlag>
    </FeatureFlags>
  )
}
