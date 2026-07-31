import { type GridStore } from '@cerberus-design/data-grid'
import { type PaginationRootProps } from '@cerberus-design/react'

export type PaginationOptions = {
  defaultPage?: PaginationRootProps['defaultPage']
  pageSize?: PaginationRootProps['pageSize']
  customRange?: number[]
  onPageChange?: PaginationRootProps['onPageChange']
  onPageSizeChange?: PaginationRootProps['onPageSizeChange']
  onSortChange?: GridStore<unknown>['setSort']
}
