import type {
  PaginationPageSizeChangeDetails,
  PaginationPageUrlDetails,
  UsePaginationReturn,
} from '@ark-ui/react/pagination'

/**
 * The pagination state exposed by `Pagination.Context`, `usePagination()` and
 * `usePaginationContext()`.
 */
export type PaginationContextDetails = UsePaginationReturn

/**
 * The details passed to `onPageChange`: the new `page` and the `pageSize`.
 */
export type PageDetails = PaginationPageUrlDetails

/**
 * The details passed to `onPageSizeChange`: the new `pageSize`.
 */
export type PageSizeChangeDetails = PaginationPageSizeChangeDetails
