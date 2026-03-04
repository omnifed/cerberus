'use client'

import {
  Group,
  NextTrigger,
  type PageDetails,
  type PageSizeChangeDetails,
  type PaginationContextDetails,
  PaginationParts,
  PrevTrigger,
  Show,
  Text,
} from '@cerberus-design/react'
import { Divider, HStack } from 'styled-system/jsx'
import { useSignalValue } from '../adapter.client'
import { useDataGridContext } from '../context.client'

export function GridPagination() {
  const store = useDataGridContext()

  const pageIndex = useSignalValue(store.pageIndex)
  const pageCount = useSignalValue(store.pageCount)
  const pageSize = useSignalValue(store.pageSize)
  const rowCount = useSignalValue(store.rowCount)

  function handlePageChange(details: PageDetails) {
    console.log(details)
  }

  function handlePageSizeChange(details: PageSizeChangeDetails) {
    console.log(details)
  }

  return (
    <Show when={pageSize && pageCount > 1}>
      {() => (
        <PaginationParts.Root
          count={rowCount}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
          page={pageIndex}
          pageSize={pageSize}
        >
          <PaginationParts.Context>
            {(pagination: PaginationContextDetails) => (
              <HStack
                bgColor="page.surface.100"
                borderTop="1px solid"
                borderTopColor="page.border.initial"
                justify="space-between"
                px="md"
                py="sm"
                w="full"
              >
                <HStack gap="sm">
                  <Text as="small" color="page.text.100" textStyle="label-sm">
                    {pagination.page}-{pagination.pageSize} of{' '}
                    {pagination.totalPages}
                  </Text>
                  <Divider
                    color="page.border.200"
                    orientation="vertical"
                    h="1rem"
                    thickness="1px"
                  />
                  <Text
                    as="small"
                    color="page.text.initial"
                    textStyle="label-sm"
                  >
                    Rows per page:
                  </Text>
                  <Text
                    as="small"
                    color="page.text.initial"
                    textStyle="label-sm"
                  >
                    {pagination.pageSize}
                  </Text>
                </HStack>

                <Group>
                  <PrevTrigger size="sm" />
                  <NextTrigger size="sm" />
                </Group>
              </HStack>
            )}
          </PaginationParts.Context>
        </PaginationParts.Root>
      )}
    </Show>
  )
}
