import {
  Pagination,
  type PaginationContextProps as ArkPaginationContextProps,
  type PaginationEllipsisProps as ArkPaginationEllipsisProps,
  type PaginationItemProps as ArkPaginationItemProps,
  type PaginationNextTriggerProps as ArkPaginationNextTriggerProps,
  type PaginationPrevTriggerProps as ArkPaginationPrevTriggerProps,
  type PaginationRootProps as ArkPaginationRootProps,
  type PaginationRootProviderProps as ArkPaginationRootProviderProps,
  type UsePaginationReturn as ArkUsePaginationReturn,
} from '@ark-ui/react/pagination'
import { createCerberusPrimitive } from '../../system/index'

const { withNoRecipe } = createCerberusPrimitive()

export type PaginationRootProps = ArkPaginationRootProps
export const PaginationRoot = withNoRecipe(Pagination.Root)

export type PaginationPrevTriggerProps = ArkPaginationPrevTriggerProps
export const PaginationPrevTrigger = withNoRecipe(Pagination.PrevTrigger)

export type PaginationNextTriggerProps = ArkPaginationNextTriggerProps
export const PaginationNextTrigger = withNoRecipe(Pagination.NextTrigger)

export type PaginationContextProps = ArkPaginationContextProps
export const PaginationContext = withNoRecipe(Pagination.Context)

export type PaginationItemProps = ArkPaginationItemProps
export const PaginationItem = withNoRecipe(Pagination.Item)

export type PaginationEllipsisProps = ArkPaginationEllipsisProps
export const PaginationEllipsis = withNoRecipe(Pagination.Ellipsis)

export type PaginationRootProviderProps = ArkPaginationRootProviderProps
export const PaginationRootProvider = withNoRecipe(Pagination.RootProvider)

export type PaginationContextDetails = ArkUsePaginationReturn
