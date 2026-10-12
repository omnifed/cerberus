import {
  CerberusDataGrid,
  createColumnHelper,
  GridStore,
  useDataGridContext,
} from '@cerberus-design/data-grid'
import { createEffect } from '@cerberus-design/signals'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mock, test } from 'bun:test'

type Row = { id: number; name: string }

const rows: Row[] = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: `row-${i + 1}`,
}))
const columnHelper = createColumnHelper<Row>()
const columns = [
  columnHelper.accessor('name', { header: 'Name', features: { sort: true } }),
]

let probed: GridStore<Row> | undefined

function StoreProbe() {
  probed = useDataGridContext<Row>() // toolbar renders inside the grid context
  return null
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function footerText(): string {
  return screen.getByText(/ of 4/).textContent?.replace(/\s+/g, ' ').trim() ?? '<none>'
}

function sortButton(): HTMLElement {
  return within(screen.getAllByRole('columnheader')[0]).getAllByRole('button')[0]
}

function mountGrid(defaultPage: number) {
  const onSortChange = mock(() => {})
  const onPageChange = mock(() => {})
  render(
    <CerberusDataGrid
      data={rows}
      columns={columns}
      pagination={{ defaultPage, pageSize: 25, count: 100, onSortChange, onPageChange }}
      toolbar={<StoreProbe />}
    />,
  )
  if (!probed) throw new Error('StoreProbe did not run')
  return { store: probed, onSortChange, onPageChange }
}

test('diag D1: header sort from page 3', async () => {
  const { store, onSortChange, onPageChange } = mountGrid(3)
  const stop = createEffect(() => {
    console.log('[diag] signal pageIndex =', store.pageIndex())
  })

  console.log('[diag] before:', footerText())
  await userEvent.click(sortButton())
  await wait(300)
  console.log('[diag] after: footer =', footerText(), '| signal =', store.pageIndex())
  console.log(
    '[diag] onSortChange =',
    onSortChange.mock.calls.length,
    '| onPageChange =',
    onPageChange.mock.calls.length,
  )

  // Footer HTML for missing item 4:
  screen.debug(
    screen.getByText(/Rows per page/).parentElement?.parentElement ?? undefined,
    100000,
  )
  stop()
})

// Unknown 4: does the first click work but a later one fail, or the reverse?
// The Next-trigger selector is an Ark naming convention I cannot confirm from the
// supplied files. Verify it against the footer HTML dumped above.
test('diag D1b: next then sort, 3 rounds', async () => {
  const { store } = mountGrid(1)
  for (let round = 1; round <= 3; round++) {
    const next = document.querySelector<HTMLButtonElement>('[data-part="next-trigger"]')
    if (!next)
      throw new Error('next-trigger selector did not match; inspect footer HTML')
    await userEvent.click(next)
    await wait(200)
    console.log(
      `[diag] r${round} after next: footer=${footerText()} signal=${store.pageIndex()}`,
    )
    await userEvent.click(sortButton())
    await wait(200)
    console.log(
      `[diag] r${round} after sort: footer=${footerText()} signal=${store.pageIndex()}`,
    )
  }
})
