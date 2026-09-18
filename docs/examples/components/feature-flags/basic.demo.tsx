import { FeatureFlag, FeatureFlags } from '@cerberus-design/react'

const flags = {
  featureOne: true,
  featureTwo: false,
}

export function BasicDemo() {
  return (
    <FeatureFlags flags={flags}>
      <FeatureFlag flag="featureOne">This is a visible feature</FeatureFlag>
      <FeatureFlag flag="featureTwo">This is a hidden feature</FeatureFlag>
    </FeatureFlags>
  )
}
