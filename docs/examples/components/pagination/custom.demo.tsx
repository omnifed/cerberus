'use client'

import {
  ItemList,
  PaginationParts,
  Text,
  type PaginationContextDetails,
} from '@cerberus-design/react'
import { HStack } from 'styled-system/jsx'

export function CustomDemo() {
  return (
    <PaginationParts.Root count={1000} pageSize={10} asChild>
      <HStack bgColor="page.bg.100" justify="space-between" p="md" w="full">
        <PaginationParts.Context>
          {(pagination: PaginationContextDetails) => (
            <>
              <Text as="small" textStyle="label-sm">
                {pagination.page} of {pagination.totalPages}
              </Text>

              <ItemList {...pagination} />
            </>
          )}
        </PaginationParts.Context>
      </HStack>
    </PaginationParts.Root>
  )
}
