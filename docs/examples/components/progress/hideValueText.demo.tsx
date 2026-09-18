import { HStack } from '@/styled-system/jsx'
import { CircularProgress } from '@cerberus-design/react'
import { NotStartedText } from './not-started'

export function HideValueTextDemo() {
  return (
    <HStack justify="center" w="1/2">
      <CircularProgress defaultValue={0} label={<NotStartedText />} hideValueText />
    </HStack>
  )
}
