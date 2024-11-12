'use client'

import { Button, useCTAModal } from '@cerberus-design/react'
import { HStack } from '@cerberus-design/styled-system/jsx'
import { useCallback } from 'react'

export function CTAFeature() {
  const { show } = useCTAModal()

  const handleClick = useCallback(() => {
    show({
      heading: 'Copy or create a Cohort',
      description: 'Create a new cohort or copy an existing one.',
      actions: [
        {
          text: 'Create new',
          onClick: () => alert('Create new'),
        },
        {
          text: 'Copy existing',
          onClick: () => alert('Copy existing'),
        },
      ],
    })
  }, [show])

  return (
    <HStack gap="4">
      <Button onClick={handleClick}>Update Cohorts</Button>
    </HStack>
  )
}
