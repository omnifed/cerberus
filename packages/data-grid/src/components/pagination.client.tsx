'use client'

import {
  Group,
  NextTrigger,
  type PageDetails,
  type PageSizeChangeDetails,
  type PaginationContextDetails,
  PaginationParts,
  PrevTrigger,
  SelectValueChangeDetails,
  Show,
  Text,
} from '@cerberus-design/react'
import { Divider, HStack } from 'styled-system/jsx'
import { useDataGridContext } from '../context.client'
import { CountMenu } from './count-menu.client'
import { useRead } from '@cerberus-design/signals'

export function GridPagination() {
  const store = useDataGridContext()

  const pageIndex = useRead(store.pageIndex)
  const pageSize = useRead(store.pageSize)
  const rowCount = useRead(store.rowCount)

  function handlePageChange(details: PageDetails) {
    store.setPage(details)
  }

  function handlePageSizeChange(details: PageSizeChangeDetails) {
    store.setPageSize(details.pageSize)
  }

  return (
    <Show when={pageSize}>
      {() => (
        <PaginationParts.Root
          defaultPage={pageIndex ? pageIndex : 1}
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
                    {pagination.pageRange.start}-{pagination.pageRange.end} of{' '}
                    {pagination.count}
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

                  <CountMenu
                    onValueChange={(details: SelectValueChangeDetails) => {
                      pagination.setPageSize(Number(details.value))
                    }}
                  />
                </HStack>

                <Group>
                  <PrevTrigger size="sm" />
                  <Text
                    as="small"
                    color="page.text.200"
                    lineHeight="inherit"
                    textStyle="label-sm"
                  >
                    {pagination.page} of {pagination.totalPages}
                  </Text>
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
