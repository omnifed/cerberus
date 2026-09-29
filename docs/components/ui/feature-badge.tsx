import { Tag, TagProps } from '@cerberus-design/react'
import { getFeatureLifecycle } from '@/lib/versions'

export const FEATURES = {
  NEW: 'New',
  PREVIEW: 'Preview',
}

type Props = TagProps & {
  since: string
}

export function FeatureBadge({ since, ...tagProps }: Props) {
  const state = getFeatureLifecycle(since)

  if (!state) return null

  if (state === 'preview') {
    return (
      <Tag usage="outlined" {...tagProps}>
        {FEATURES.PREVIEW}
      </Tag>
    )
  }

  return (
    <Tag gradient="amphiaraus-dark" usage="outlined" {...tagProps}>
      {FEATURES.NEW}
    </Tag>
  )
}
