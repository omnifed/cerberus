'use client'

import { HStack } from '@/styled-system/jsx'
import { ArrowRight } from '@carbon/icons-react'
import {
  Button,
  createCTAModalActions,
  CTAModal,
  useCTAModal,
} from '@cerberus-design/react'
import Link from 'next/link'

export function LinksDemo() {
  return (
    <CTAModal>
      <CTALinkFeature />
    </CTAModal>
  )
}

function CTALinkFeature() {
  const { show } = useCTAModal()

  const handleLinkClick = () => {
    show({
      heading: 'Copy or create a Cohort',
      description: 'Create a new cohort or copy an existing one.',
      actions: createCTAModalActions([
        <Link key="cta:link:btn" href="/docs/components/button">
          See Button Docs
          <ArrowRight />
        </Link>,
        <Link key="cta:link:docs" href="/docs/components/dialog">
          See Dialog Docs
          <ArrowRight />
        </Link>,
      ]),
    })
  }

  return (
    <HStack gap="4">
      <Button onClick={handleLinkClick}>Update Cohorts</Button>
    </HStack>
  )
}
