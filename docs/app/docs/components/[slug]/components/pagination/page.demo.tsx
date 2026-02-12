'use client'

import {
  createSelectCollection,
  Field,
  For,
  Group,
  Option,
  Pagination,
  Select,
  type SelectValueChangeDetails,
  Text,
  usePaginationContext,
} from '@cerberus-design/react'
import { HStack, VStack } from 'styled-system/jsx'
import { users } from './users'

export function PageDemo() {
  return (
    <VStack textAlign="center" w="3/4">
      <Pagination count={20} defaultPageSize={2}>
        <HStack justify="flex-end" pb="md" w="full">
          <PageSize />
        </HStack>

        <UserList />
      </Pagination>
    </VStack>
  )
}

function PageSize() {
  const pagination = usePaginationContext()
  const collection = createSelectCollection([
    { label: '2', value: '2' },
    { label: '4', value: '4' },
    { label: '6', value: '6' },
    { label: '8', value: '8' },
    { label: '10', value: '10' },
  ])

  return (
    <HStack justify="flex-end" w="full">
      <Text as="small" color="page.text.100" textStyle="label-sm">
        Items per page:
      </Text>

      <Field label="Select page size" hideLabel w="initial">
        <Select
          collection={collection}
          onValueChange={(details: SelectValueChangeDetails) =>
            pagination.setPageSize(Number(details.value))
          }
          value={[String(pagination.pageSize)]}
          w="fit-content"
        >
          <For each={collection.items}>
            {(item) => <Option key={item.value} item={item} />}
          </For>
        </Select>
      </Field>
    </HStack>
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
