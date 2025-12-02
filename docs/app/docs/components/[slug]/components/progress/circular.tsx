'use client'

import { HStack } from '@/styled-system/jsx'
import { CircularProgress, Text } from '@cerberus-design/react'

function NotStartedText() {
  return (
    <Text textAlign="center" textStyle="heading-2xs" px="md">
      Not Started
    </Text>
  )
}

export function CircularPreview() {
  return (
    <HStack>
      <CircularProgress
        id="0"
        defaultValue={0}
        label={<NotStartedText />}
        hideValueText
      />
      <CircularProgress id="25" defaultValue={25} />
      <CircularProgress id="50" defaultValue={50} />
      <CircularProgress id="75" defaultValue={75} />
      <CircularProgress id="complete" label="complete" defaultValue={100} />
    </HStack>
  )
}

export function SizesPreview() {
  return (
    <HStack justify="center" w="full">
      <CircularProgress id="25" defaultValue={25} size="xs" />
      <CircularProgress id="50" defaultValue={50} size="sm" />
      <CircularProgress id="75" defaultValue={75} size="md" />
      <CircularProgress
        id="complete"
        label="complete"
        defaultValue={100}
        size="lg"
      />
    </HStack>
  )
}

export function HideValueTextPreview() {
  return (
    <HStack justify="center" w="1/2">
      <CircularProgress
        defaultValue={0}
        label={<NotStartedText />}
        hideValueText
      />
    </HStack>
  )
}

export function CustomLabelPreview() {
  return (
    <CircularProgress
      defaultValue={60}
      label={
        <Text color="yellow" textStyle="heading-sm">
          Loading
        </Text>
      }
      size="md"
    />
  )
}
