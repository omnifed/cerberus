import { createColumnHelper, PaginationOptions } from '@cerberus-design/data-grid'
import { createGridStore } from '@cerberus-design/data-grid/src/store'
import type { PageSizeChangeDetails } from '@cerberus-design/react'
import { createEffect } from '@cerberus-design/signals'
import { describe, expect, mock, test } from 'bun:test'

type Row = { id: number; name: string }

const helper = createColumnHelper<Row>()
const features = { sort: true, filter: true, pinning: true, visibility: true } as const
const columns = [
  helper.accessor('id', { header: 'ID', width: 120, features }),
  helper.accessor('name', { header: 'Name', width: 160, features }),
]
const data: Row[] = Array.from({ length: 25 }, (_, i) => ({ id: i, name: `n${i}` }))

function setup(overrides: Partial<PaginationOptions> = {}) {
  const spies = {
    onPageChange: mock(),
    onPageSizeChange: mock(),
    onSortChange: mock(),
    onFilterChange: mock(),
  }
  const store = createGridStore<Row>({
    data,
    columns,
    pagination: { pageSize: 25, count: 1000, defaultPage: 1, ...spies, ...overrides },
  })
  return { store, spies }
}

describe('SS pagination: sort resets to page 1', () => {
  test('setSort resets page and fires onSortChange exactly once', () => {
    const { store, spies } = setup()
    store.setPageIndex(3)
    store.setSort('name', 'asc')
    expect(store.pageIndex()).toBe(1)
    expect(spies.onSortChange).toHaveBeenCalledTimes(1)
    expect(spies.onSortChange.mock.calls[0].slice(0, 2)).toEqual(['name', 'asc'])
    expect(spies.onPageChange).not.toHaveBeenCalled()
  })

  test('clearing a sort resets page', () => {
    const { store, spies } = setup()
    store.setSort('name', 'asc')
    store.setPageIndex(3)
    store.setSort('name', null)
    expect(store.pageIndex()).toBe(1)
    expect(spies.onSortChange).toHaveBeenCalledTimes(2)
  })

  test('toggleSort reports the direction it stores', () => {
    const { store, spies } = setup()
    for (let i = 0; i < 3; i++) store.toggleSort('name')
    const reported = spies.onSortChange.mock.calls.map((c) => c[1])
    expect(reported).toEqual(['desc', 'asc', 'desc'])
    expect(store.sorting()[0].desc).toBe(true)
  })

  test('multi toggle does not duplicate entries', () => {
    const { store } = setup()
    store.toggleSort('id', true)
    store.toggleSort('name', true)
    store.toggleSort('id', true)
    expect(store.sorting().map((s) => s.id)).toEqual(['id', 'name'])
  })

  test('sort and page never update separately', () => {
    const { store } = setup()
    store.setPageIndex(3)
    const seen: Array<{ sorted: boolean; page: number }> = []
    const dispose = createEffect(() => {
      seen.push({ sorted: store.sorting().length > 0, page: store.pageIndex() })
    })
    store.setSort('name', 'asc')
    dispose()
    expect(seen.some((s) => s.sorted && s.page === 3)).toBe(false)
    expect(seen.some((s) => !s.sorted && s.page === 1)).toBe(false)
    // Limitation: if effects flush on a microtask, this cannot detect a missing batch.
  })

  test('client-side pagination is unchanged', () => {
    const { store, spies } = setup({ count: undefined })
    store.setPageIndex(3)
    store.setSort('name', 'asc')
    expect(store.pageIndex()).toBe(3)
    expect(spies.onSortChange).not.toHaveBeenCalled()
  })

  test('page-size change keeps resetting in SS mode', () => {
    const { store } = setup()
    store.setPageIndex(3)
    store.setPageSize({ pageSize: 50 } as PageSizeChangeDetails)
    expect(store.pageIndex()).toBe(1)
  })
})

describe('matrix: SS pagination x column features', () => {
  const actions: Array<[string, (s: ReturnType<typeof setup>['store']) => void]> = [
    ['pinning', (s) => s.togglePinned('name', 'left')],
    ['visibility', (s) => s.columns()[0].setVisible(false)],
    ['sizing', (s) => s.resizeColumn('name', 40)],
  ]

  test.each(actions)('%s leaves page and callbacks untouched', (_name, act) => {
    const { store, spies } = setup()
    store.setPageIndex(3)
    act(store)
    expect(store.pageIndex()).toBe(3)
    for (const spy of Object.values(spies)) expect(spy).not.toHaveBeenCalled()
  })

  test.each(actions)('sort then %s keeps page 1, one sort callback', (_name, act) => {
    const { store, spies } = setup()
    store.setPageIndex(3)
    store.setSort('name', 'desc')
    act(store)
    expect(store.pageIndex()).toBe(1)
    expect(spies.onSortChange).toHaveBeenCalledTimes(1)
  })

  // Expected RED until the filter wiring exists (needs filter.ts).
  test('filter resets page and fires onFilterChange once', () => {
    const { store, spies } = setup()
    store.setPageIndex(3)
    store.setColFilter((prev) => ({
      ...prev,
      active: ['name'],
      filters: { name: { id: 'name', operator: 'contains', value: 'n1' } },
      editing: null,
    }))
    expect(store.pageIndex()).toBe(1)
    expect(spies.onFilterChange).toHaveBeenCalledTimes(1)
  })
})
