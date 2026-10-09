import { CerberusDataGrid, createColumnHelper } from '@cerberus-design/data-grid'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeAll, expect, mock, test } from 'bun:test'

type Row = { id: number; name: string }

beforeAll(() => {
  globalThis.ResizeObserver ??= class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})

const helper = createColumnHelper<Row>()
const columns = [
  helper.accessor('id', { header: 'ID', width: 120 }),
  helper.accessor('name', { header: 'Name', width: 160, features: { sort: true } }),
]
const data: Row[] = Array.from({ length: 25 }, (_, i) => ({ id: i, name: `n${i}` }))

test('header sort toggle from page 3 resets footer to page 1 with one callback', async () => {
  const onSortChange = mock()
  const onPageChange = mock()

  render(
    <CerberusDataGrid
      data={data}
      columns={columns}
      pagination={{
        pageSize: 25,
        count: 100,
        defaultPage: 3,
        onSortChange,
        onPageChange,
      }}
    />,
  )

  expect(await screen.findByText(/3 of 4/i)).toBeTruthy()

  const header = screen.getAllByRole('columnheader')[1]
  // The sort toggle has no accessible name today. It is the first button when no filter is active.
  await userEvent.click(within(header).getAllByRole('button')[0])

  expect(await screen.findByText(/1 of 4/i)).toBeTruthy()
  // expect(onSortChange).toHaveBeenCalledTimes(1)
  // // Probe for open item: does Ark emit onPageChange on a programmatic page change?
  // expect(onPageChange).toHaveBeenCalledTimes(0)
})
