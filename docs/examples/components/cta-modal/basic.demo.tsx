'use client'

import { HStack } from '@/styled-system/jsx'
import {
  Button,
  createCTAModalActions,
  CTAModal,
  useCTAModal,
} from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <CTAModal>
      <CTAFeature />
    </CTAModal>
  )
}

function CTAFeature() {
  const { show } = useCTAModal()

  const handleClick = () => {
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
  }

  return (
    <HStack gap="4">
      <Button onClick={handleClick}>Update Cohorts</Button>
    </HStack>
  )
}
