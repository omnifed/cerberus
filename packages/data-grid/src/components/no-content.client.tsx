'use client'

import { Avatar, Text, useCerberusContext } from '@cerberus-design/react'
import { VStack } from 'styled-system/jsx'

export function NoContent() {
  const { icons } = useCerberusContext()
  const Icon = icons.table

  return (
    <VStack gap="md">
      <Avatar fallback={<Icon />} gradient="charon-light" size="sm" />
      <Text textStyle="label-sm">No rows found</Text>
    </VStack>
  )
}
