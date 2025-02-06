'use client'

import {
  Button,
  useCTAModal,
  createCTAModalActions,
} from '@cerberus-design/react'
import { HStack } from '@cerberus-design/styled-system/jsx'
import { useCallback } from 'react'
import Link from 'next/link'
import { ArrowRight } from '@carbon/icons-react'

export function CTAFeature() {
  const { show } = useCTAModal()

  const handleClick = useCallback(() => {
    show({
      heading: 'Copy or create a Cohort',
      description: 'Create a new cohort or copy an existing one.',
      actions: createCTAModalActions([
        {
          text: 'Create new',
          handleClick: () => alert('Create new'),
        },
        {
          text: 'Copy existing',
          handleClick: () => alert('Copy existing'),
        },
      ]),
    })
  }, [show])

  return (
    <HStack gap="4">
      <Button onClick={handleClick}>Update Cohorts</Button>
    </HStack>
  )
}

export function CTALinkFeature() {
  const { show } = useCTAModal()

  const handleLinkClick = useCallback(() => {
    show({
      heading: 'Copy or create a Cohort',
      description: 'Create a new cohort or copy an existing one.',
      actions: createCTAModalActions([
        <Link key="cta:link:btn" href="/react/button">
          See Button Docs
          <ArrowRight />
        </Link>,
        <Link key="cta:link:docs" href="/react/dialog">
          See Dialog Docs
          <ArrowRight />
        </Link>,
      ]),
    })
  }, [show])

  return (
    <HStack gap="4">
      <Button onClick={handleLinkClick}>Update Cohorts</Button>
    </HStack>
  )
}
