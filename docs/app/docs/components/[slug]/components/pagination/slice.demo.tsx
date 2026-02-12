'use client'

import {
  Group,
  Pagination,
  Text,
  usePaginationContext,
} from '@cerberus-design/react'
import { HStack, VStack } from 'styled-system/jsx'

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

const users = [
  { id: 1, name: 'Emma Wilson', email: 'emma@example.com' },
  { id: 2, name: 'Liam Johnson', email: 'liam@example.com' },
  { id: 3, name: 'Olivia Brown', email: 'olivia@example.com' },
  { id: 4, name: 'Noah Davis', email: 'noah@example.com' },
  { id: 5, name: 'Ava Martinez', email: 'ava@example.com' },
  { id: 6, name: 'Ethan Garcia', email: 'ethan@example.com' },
  { id: 7, name: 'Sophia Rodriguez', email: 'sophia@example.com' },
  { id: 8, name: 'Mason Lee', email: 'mason@example.com' },
  { id: 9, name: 'Isabella Walker', email: 'isabella@example.com' },
  { id: 10, name: 'James Hall', email: 'james@example.com' },
  { id: 11, name: 'Mia Allen', email: 'mia@example.com' },
  { id: 12, name: 'Benjamin Young', email: 'benjamin@example.com' },
  { id: 13, name: 'Charlotte King', email: 'charlotte@example.com' },
  { id: 14, name: 'William Wright', email: 'william@example.com' },
  { id: 15, name: 'Amelia Scott', email: 'amelia@example.com' },
  { id: 16, name: 'Henry Green', email: 'henry@example.com' },
  { id: 17, name: 'Harper Adams', email: 'harper@example.com' },
  { id: 18, name: 'Sebastian Baker', email: 'sebastian@example.com' },
  { id: 19, name: 'Evelyn Nelson', email: 'evelyn@example.com' },
  { id: 20, name: 'Jack Carter', email: 'jack@example.com' },
]
