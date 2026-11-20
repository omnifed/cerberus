'use client'

import {
  Pagination,
  Text,
  type PaginationContextDetails,
} from '@cerberus-design/react'
import { HStack } from 'styled-system/jsx'

export function CustomDemo() {
  return (
    <Pagination.Root count={1000} pageSize={10} asChild>
      <HStack bgColor="page.bg.100" justify="space-between" p="md" w="full">
        <Pagination.Context>
          {(pagination: PaginationContextDetails) => (
            <>
              <Text as="small" textStyle="label-sm">
                {pagination.page} of {pagination.totalPages}
              </Text>

              <Pagination.ItemList />
            </>
          )}
        </Pagination.Context>
      </HStack>
    </Pagination.Root>
  )
}
