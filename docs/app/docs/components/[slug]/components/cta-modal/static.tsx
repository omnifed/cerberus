import { CTAModal } from '@cerberus-design/react'
import { CTAFeature, CTALinkFeature } from './cta-modal-features'

export function OverviewPreview() {
  return (
    <CTAModal>
      <CTAFeature />
    </CTAModal>
  )
}

export function WithLinksDemo() {
  return (
    <CTAModal>
      <CTALinkFeature />
    </CTAModal>
  )
}
