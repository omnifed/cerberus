'use client'

import { Accessor, createSignal, Setter } from '@cerberus-design/signals'

export type SearchStore = {
  open: Accessor<boolean>
  search: Accessor<string>
  filter: Accessor<string>
  copiedUrl: Accessor<string | null>
  // actions
  setSearch: Setter<string>
  setFilter: Setter<string>
  setOpen: Setter<boolean>
  setCopiedUrl: Setter<string | null>
}

export function searchStore(): SearchStore {
  const [search, setSearch] = createSignal<string>('')
  const [filter, setFilter] = createSignal<string>('')
  const [open, setOpen] = createSignal<boolean>(false)
  const [copiedUrl, setCopiedUrl] = createSignal<string | null>(null)

  return {
    open,
    search,
    filter,
    copiedUrl,
    setSearch,
    setFilter,
    setOpen,
    setCopiedUrl,
  }
}
