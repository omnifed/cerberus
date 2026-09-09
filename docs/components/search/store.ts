'use client'

import { Accessor, createSignal, Setter } from '@cerberus-design/signals'

export type SearchStore = {
  open: Accessor<boolean>
  search: Accessor<string>
  filter: Accessor<string>
  // actions
  setSearch: Setter<string>
  setFilter: Setter<string>
  setOpen: Setter<boolean>
}

export function searchStore(): SearchStore {
  const [search, setSearch] = createSignal<string>('')
  const [filter, setFilter] = createSignal<string>('')
  const [open, setOpen] = createSignal<boolean>(false)

  return {
    open,
    search,
    filter,
    setSearch,
    setFilter,
    setOpen,
  }
}
