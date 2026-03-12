'use client'

import {
  Group,
  Pagination,
  Text,
  usePaginationContext,
} from '@cerberus-design/react'
import { HStack, VStack } from 'styled-system/jsx'
import { users } from './users'

export function SliceDemo() {
  return (
    <VStack textAlign="center" w="3/4">
      <Pagination count={users.length} pageSize={5}>
        <UserList />
      </Pagination>
    </VStack>
  )
}

function UserList() {
  const pagination = usePaginationContext()
  return (
    <Group orientation="vertical" pb="lg" w="full">
      {pagination.slice(users).map((user) => (
        <HStack
          key={user.id}
          bgColor="page.bg.100"
          gap="md"
          p="md"
          rounded="sm"
          w="full"
        >
          <Text color="page.text.initial" textStyle="body-md">
            {user.name}
          </Text>
          <Text as="small" color="page.text.100" textStyle="label-sm">
            {user.email}
          </Text>
        </HStack>
      ))}
    </Group>
  )
}
