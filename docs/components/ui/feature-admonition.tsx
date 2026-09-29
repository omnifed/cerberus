import { getFeatureLifecycle } from '@/lib/versions'
import { Chemistry, Corn } from '@carbon/icons-react'
import { Admonition, AdmonitionProps, Avatar, Text } from '@cerberus-design/react'
import { FEATURES } from './feature-badge'

type Props = AdmonitionProps & {
  since: string
}

export function FeatureAdmonition({ since, ...admonitionProps }: Props) {
  const state = getFeatureLifecycle(since)
  if (!state) return null
  if (state === 'preview') return <Experimental {...admonitionProps} />
  if (state === 'new') return <New since={since} {...admonitionProps} />
}

function Experimental(props: AdmonitionProps) {
  return (
    <Admonition
      {...props}
      heading={FEATURES.PREVIEW}
      icon={<Avatar gradient="amphiaraus-light" fallback={<Chemistry />} />}
      palette="warning"
      usage="outlined"
      css={{
        mb: 'md',
        rounded: 'lg',
      }}
    >
      This feature is experimental and may change in future releases. To use this
      feature upgrade to the <Text as="strong">latest next version</Text>
    </Admonition>
  )
}

function New(props: Props) {
  const { since, ...admonitionProps } = props
  return (
    <Admonition
      {...admonitionProps}
      heading={FEATURES.NEW}
      icon={<Avatar gradient="amphiaraus-light" fallback={<Corn />} />}
      palette="success"
      usage="outlined"
      css={{
        mb: 'md',
        rounded: 'lg',
      }}
    >
      This feature was introduced in <Text as="strong">{since}</Text>. To use this
      feature upgrade to the <Text as="strong">latest version</Text>
    </Admonition>
  )
}
