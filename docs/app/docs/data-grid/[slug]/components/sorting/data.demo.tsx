export type SortDirection = 'asc' | 'desc' | null

export type SortOptions = {
  firstSortDirection?: SortDirection
  comparator?: (a: unknown, b: unknown) => number
}
