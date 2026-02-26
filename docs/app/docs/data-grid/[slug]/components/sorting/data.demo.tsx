export type SortOptions<TData, TKey extends keyof TData> = {
  firstSortDirection?: SortDirection
  comparator?: Comparator<TData[TKey]>
}

export type SortDirection = 'asc' | 'desc' | null
export type Comparator<TValue> = (a: TValue, b: TValue) => number
