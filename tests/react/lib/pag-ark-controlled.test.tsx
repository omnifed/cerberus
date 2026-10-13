import { PaginationParts, type PaginationContextDetails } from '@cerberus-design/react'
import {
  Pagination as ArkPagination,
  PaginationRootProps,
} from '@ark-ui/react/pagination'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test } from 'bun:test'
import { useState, type ElementType } from 'react'

type Variant = 'cerb-page-only' | 'cerb-both' | 'ark-page-only' | 'ark-both'
const VARIANTS: Variant[] = ['cerb-page-only', 'cerb-both', 'ark-page-only', 'ark-both']

function Harness(props: { variant: Variant; onPageChange: (page: number) => void }) {
  const [page, setPage] = useState(3)
  const isArk = props.variant.startsWith('ark')
  const Root: ElementType = isArk ? ArkPagination.Root : PaginationParts.Root
  const Context: ElementType = isArk ? ArkPagination.Context : PaginationParts.Context
  const rootProps: PaginationRootProps = {
    count: 100,
    pageSize: 25,
    page,
    onPageChange: (details: { page: number }) => props.onPageChange(details.page),
    ...(props.variant.endsWith('both') ? { defaultPage: 3 } : {}),
  }

  return (
    <>
      <button type="button" onClick={() => setPage(1)}>
        to-1
      </button>
      <Root {...rootProps}>
        <Context>
          {(api: PaginationContextDetails) => (
            <span data-testid="ark-page">{api.page}</span>
          )}
        </Context>
      </Root>
    </>
  )
}

for (const variant of VARIANTS) {
  test(`Cerby/Ark Pagination Integration: ${variant}`, async () => {
    const calls: number[] = []
    render(<Harness variant={variant} onPageChange={(p) => calls.push(p)} />)
    expect(screen.getByTestId('ark-page').textContent).toBe('3')

    await userEvent.click(screen.getByRole('button', { name: 'to-1' }))

    expect(screen.getByTestId('ark-page').textContent).toBe('1')
    expect(calls.length).toEqual(0)
  })
}
