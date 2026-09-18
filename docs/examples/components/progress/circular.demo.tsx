import { HStack } from '@/styled-system/jsx'
import { CircularProgress } from '@cerberus-design/react'
import { NotStartedText } from './not-started'

export function CircularDemo() {
  return (
    <HStack gap="md">
      <CircularProgress defaultValue={0} label={<NotStartedText />} hideValueText />
      <CircularProgress defaultValue={25} />
      <CircularProgress defaultValue={50} />
      <CircularProgress defaultValue={75} />
      <CircularProgress label="complete" defaultValue={100} />
    </HStack>
  )
}
