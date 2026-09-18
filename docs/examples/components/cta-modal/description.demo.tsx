'use client'

import { HStack, VStack } from '@/styled-system/jsx'
import {
  Button,
  createCTAModalActions,
  CTAModal,
  Field,
  Input,
  Textarea,
  useCTAModal,
} from '@cerberus-design/react'

export function DescriptionDemo() {
  return (
    <CTAModal>
      <CTADescriptionFeature />
    </CTAModal>
  )
}

function CTADescriptionFeature() {
  const { show } = useCTAModal()

  const handleClick = () => {
    show({
      heading: 'Copy or create a Cohort',
      content: (
        <VStack alignItems="flex-start" gap="lg" w="full">
          <Field label="Name">
            <Input placeholder="e.g., Cerberus" />
          </Field>
          <Field label="Description">
            <Textarea placeholder="e.g., Cerberus is a design system..." />
          </Field>
        </VStack>
      ),
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
