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
  type PaginationPageUrlDetails,
  type PaginationPageSizeChangeDetails,
} from '@ark-ui/react/pagination'
import { CerberusPrimitiveProps, createCerberusPrimitive } from '../../system/index'

const { withNoRecipe } = createCerberusPrimitive()

export type PaginationRootProps = CerberusPrimitiveProps<ArkPaginationRootProps>
export const PaginationRoot = withNoRecipe(Pagination.Root, {
  forwardProps: ['page'],
})

export type PaginationPrevTriggerProps =
  CerberusPrimitiveProps<ArkPaginationPrevTriggerProps>
export const PaginationPrevTrigger = withNoRecipe(Pagination.PrevTrigger)

export type PaginationNextTriggerProps =
  CerberusPrimitiveProps<ArkPaginationNextTriggerProps>
export const PaginationNextTrigger = withNoRecipe(Pagination.NextTrigger)

export type PaginationContextProps = CerberusPrimitiveProps<ArkPaginationContextProps>
export const PaginationContext = withNoRecipe(Pagination.Context)

export type PaginationItemProps = CerberusPrimitiveProps<ArkPaginationItemProps>
export const PaginationItem = withNoRecipe(Pagination.Item)

export type PaginationEllipsisProps = CerberusPrimitiveProps<ArkPaginationEllipsisProps>
export const PaginationEllipsis = withNoRecipe(Pagination.Ellipsis)

export type PaginationRootProviderProps =
  CerberusPrimitiveProps<ArkPaginationRootProviderProps>
export const PaginationRootProvider = withNoRecipe(Pagination.RootProvider)

export type PaginationContextDetails = ArkUsePaginationReturn
export type PageDetails = PaginationPageUrlDetails
export type PageSizeChangeDetails = PaginationPageSizeChangeDetails
