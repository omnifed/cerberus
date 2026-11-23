import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import {
  Pagination,
  CerberusProvider,
  usePagination,
  usePaginationContext,
  type PageDetails,
  type PaginationContextDetails,
} from '@cerberus-design/react'
import { makeConfig } from '@/utils'

describe('Pagination', () => {
  const config = makeConfig()

  function renderWithProvider(ui: React.ReactNode) {
    return render(<CerberusProvider config={config}>{ui}</CerberusProvider>)
  }

  test('should expose the compound members', () => {
    expect(Pagination.Root).not.toBeNull()
    expect(Pagination.RootProvider).not.toBeNull()
    expect(Pagination.Context).not.toBeNull()
    expect(Pagination.Item).not.toBeNull()
    expect(Pagination.Ellipsis).not.toBeNull()
    expect(Pagination.FirstTrigger).not.toBeNull()
    expect(Pagination.PrevTrigger).not.toBeNull()
    expect(Pagination.NextTrigger).not.toBeNull()
    expect(Pagination.LastTrigger).not.toBeNull()
    expect(Pagination.ItemList).not.toBeNull()
    expect(Pagination.CompactList).not.toBeNull()
    expect(Pagination.PrevTriggerWithIcon).not.toBeNull()
    expect(Pagination.NextTriggerWithIcon).not.toBeNull()
    expect(Pagination.ItemButton).not.toBeNull()
    expect(Pagination.EllipsisButton).not.toBeNull()
  })

  test('should render', () => {
    renderWithProvider(
      <Pagination count={5000} pageSize={10} siblingCount={2} />,
    )
    expect(screen.getByText(/1/i)).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toHaveAttribute(
      'aria-label',
      'pagination',
    )
    expect(screen.getByLabelText('previous page')).toBeDisabled()
    expect(screen.getByLabelText('next page')).toBeEnabled()
    expect(screen.getByLabelText('page 1')).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(screen.getByLabelText('last page, page 500')).toBeInTheDocument()
    expect(screen.getAllByText('…')).toHaveLength(1)
  })

  test('should render the items and triggers as Cerberus buttons', () => {
    renderWithProvider(<Pagination count={50} pageSize={10} />)
    const item = screen.getByLabelText('page 2')
    expect(item).toHaveAttribute('data-scope', 'pagination')
    expect(item).toHaveAttribute('data-part', 'item')
    expect(item.className).toContain('cerberus-button')
    expect(item.className).toContain('--usage_outlined-subtle')
    expect(item.className).toContain('--shape_squared')

    const prev = screen.getByLabelText('previous page')
    expect(prev).toHaveAttribute('data-part', 'prev-trigger')
    expect(prev.className).toContain('cerberus-icon-btn')
    expect(prev.className).toContain('--shape_square')
    expect(prev.className).not.toContain('--usage_outlined-subtle')
  })

  test('should go to the next, previous and selected page', async () => {
    const pages: number[] = []
    renderWithProvider(
      <Pagination
        count={50}
        pageSize={10}
        onPageChange={(details: PageDetails) => pages.push(details.page)}
      />,
    )
    await userEvent.click(screen.getByLabelText('next page'))
    expect(screen.getByLabelText('page 2')).toHaveAttribute(
      'aria-current',
      'page',
    )
    await userEvent.click(screen.getByLabelText('last page, page 5'))
    expect(screen.getByLabelText('next page')).toBeDisabled()
    await userEvent.click(screen.getByLabelText('previous page'))
    expect(pages).toEqual([2, 5, 4])
  })

  test('should allow a layout prop', () => {
    renderWithProvider(
      <Pagination
        count={5000}
        pageSize={10}
        siblingCount={2}
        layout="attached"
      />,
    )
    expect(screen.getByText(/1/i)).toBeInTheDocument()
    expect(screen.getByLabelText('previous page').className).toContain(
      '--usage_outlined-subtle',
    )
  })

  test('should allow a compact prop', () => {
    renderWithProvider(
      <Pagination
        compact
        count={5000}
        pageSize={10}
        siblingCount={2}
        layout="attached"
      />,
    )
    expect(screen.getByText('1 of 500')).toBeInTheDocument()
    expect(screen.queryByLabelText('page 1')).not.toBeInTheDocument()
    expect(screen.getByLabelText('previous page')).toBeInTheDocument()
    expect(screen.getByLabelText('next page')).toBeInTheDocument()
  })

  test('should allow a css prop', () => {
    renderWithProvider(
      <Pagination
        data-testid="pagination"
        count={5000}
        pageSize={10}
        siblingCount={2}
        css={{ bgColor: 'black' }}
      />,
    )
    expect(screen.getByText(/1/i)).toBeInTheDocument()
    expect(screen.getByTestId('pagination')).toHaveClass('cerberus-bg-c_black')
  })

  test('should forward a controlled page', async () => {
    function Controlled() {
      const [page, setPage] = useState(3)
      return (
        <>
          <button type="button" onClick={() => setPage(1)}>
            to-1
          </button>
          <Pagination
            count={100}
            pageSize={10}
            page={page}
            onPageChange={(details: PageDetails) => setPage(details.page)}
          />
        </>
      )
    }
    renderWithProvider(<Controlled />)
    expect(screen.getByLabelText('page 3')).toHaveAttribute(
      'aria-current',
      'page',
    )
    await userEvent.click(screen.getByRole('button', { name: 'to-1' }))
    expect(screen.getByLabelText('page 1')).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  test('should render non-part children inside the root context', () => {
    function PageText() {
      const pagination = usePaginationContext()
      return <p data-testid="slice">{pagination.slice([1, 2, 3]).join(',')}</p>
    }
    renderWithProvider(
      <Pagination count={3} pageSize={2} defaultPage={2}>
        <PageText />
      </Pagination>,
    )
    expect(screen.getByTestId('slice')).toHaveTextContent('3')
  })

  test('should let direct part children override the parts', () => {
    renderWithProvider(
      <Pagination count={100} pageSize={10}>
        <Pagination.PrevTrigger data-testid="prev" aria-label="Back" />
        <Pagination.NextTrigger data-testid="next">
          Forward
        </Pagination.NextTrigger>
        {/* type/value/index are required by the primitive types, the abstraction drops them */}
        <Pagination.Item
          data-testid="item"
          type="page"
          value={1}
          {...({ usage: 'filled' } as object)}
        />
        <Pagination.Ellipsis data-testid="ellipsis" index={0}>
          ...
        </Pagination.Ellipsis>
        <p>Extra content</p>
      </Pagination>,
    )
    const prev = screen.getByTestId('prev')
    expect(prev).toHaveAttribute('data-part', 'prev-trigger')
    expect(prev).toHaveAttribute('aria-label', 'Back')
    expect(prev.querySelector('svg')).not.toBeNull()

    expect(screen.getByTestId('next')).toHaveTextContent('Forward')
    expect(screen.getByTestId('next').querySelector('svg')).toBeNull()

    const items = screen.getAllByTestId('item')
    expect(items.length).toBeGreaterThan(1)
    expect(items[0]).toHaveTextContent('1')
    expect(items[0].className).toContain('--usage_filled')

    expect(screen.getByTestId('ellipsis')).toHaveTextContent('...')
    expect(screen.getByText('Extra content')).toBeInTheDocument()
    // parts are not rendered twice
    expect(screen.getAllByTestId('prev')).toHaveLength(1)
  })

  test('should let an asChild part child replace the Cerberus button', () => {
    renderWithProvider(
      <Pagination count={30} pageSize={10}>
        <Pagination.Item type="page" value={1} asChild>
          <a href="#page" data-testid="link-item">
            page
          </a>
        </Pagination.Item>
      </Pagination>,
    )
    const items = screen.getAllByTestId('link-item')
    expect(items).toHaveLength(3)
    expect(items[2]).toHaveAttribute('data-part', 'item')
    expect(items[2]).toHaveAttribute('aria-label', 'last page, page 3')
    expect(items[2].className).not.toContain('cerberus-button')
  })

  test('should let compact Pagination override the triggers', () => {
    renderWithProvider(
      <Pagination compact count={30} pageSize={10}>
        <Pagination.NextTrigger data-testid="next" />
      </Pagination>,
    )
    expect(screen.getByTestId('next')).toHaveAttribute(
      'data-part',
      'next-trigger',
    )
    expect(screen.getByText('1 of 3')).toBeInTheDocument()
  })

  test('should render the primitives', async () => {
    renderWithProvider(
      <Pagination.Root count={30} pageSize={10} data-testid="root">
        <Pagination.FirstTrigger>First</Pagination.FirstTrigger>
        <Pagination.PrevTrigger>Prev</Pagination.PrevTrigger>
        <Pagination.Context>
          {(pagination: PaginationContextDetails) =>
            pagination.pages.map((page, index) =>
              page.type === 'page' ? (
                <Pagination.Item key={index} {...page} p="sm">
                  {page.value}
                </Pagination.Item>
              ) : (
                <Pagination.Ellipsis key={index} index={index}>
                  &#8230;
                </Pagination.Ellipsis>
              ),
            )
          }
        </Pagination.Context>
        <Pagination.NextTrigger>Next</Pagination.NextTrigger>
        <Pagination.LastTrigger>Last</Pagination.LastTrigger>
      </Pagination.Root>,
    )
    expect(screen.getByTestId('root').tagName).toBe('NAV')
    expect(screen.getByLabelText('page 2')).toHaveClass('cerberus-p_sm')
    await userEvent.click(screen.getByText('Last'))
    expect(screen.getByLabelText('last page, page 3')).toHaveAttribute(
      'aria-current',
      'page',
    )
    await userEvent.click(screen.getByText('First'))
    expect(screen.getByLabelText('page 1')).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  test('should render a RootProvider driven by usePagination', async () => {
    function Provided() {
      const pagination = usePagination({ count: 40, pageSize: 10 })
      return (
        <>
          <button type="button" onClick={() => pagination.setPage(3)}>
            external
          </button>
          <Pagination.RootProvider value={pagination} data-testid="root" p="md">
            <Pagination.ItemList />
          </Pagination.RootProvider>
        </>
      )
    }
    renderWithProvider(<Provided />)
    const root = screen.getByTestId('root')
    expect(root).toHaveAttribute('data-part', 'root')
    expect(root).toHaveClass('cerberus-p_md')
    expect(screen.getAllByRole('button', { name: /page \d/ })).toHaveLength(4)
    await userEvent.click(screen.getByRole('button', { name: 'external' }))
    expect(screen.getByLabelText('page 3')).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  test('should provide context from an asChild Root', async () => {
    renderWithProvider(
      <Pagination.Root count={20} pageSize={10} asChild>
        <section data-testid="section">
          <Pagination.CompactList />
        </section>
      </Pagination.Root>,
    )
    const section = screen.getByTestId('section')
    expect(section.tagName).toBe('SECTION')
    expect(section).toHaveAttribute('data-part', 'root')
    expect(screen.getByText('1 of 2')).toBeInTheDocument()
    await userEvent.click(screen.getByLabelText('next page'))
    expect(screen.getByText('2 of 2')).toBeInTheDocument()
  })

  test('should render the ItemList abstraction', () => {
    renderWithProvider(
      <Pagination.Root count={100} pageSize={10}>
        <Pagination.ItemList layout="attached" data-testid="list">
          <Pagination.Ellipsis data-testid="gap" index={0} />
        </Pagination.ItemList>
      </Pagination.Root>,
    )
    const list = screen.getByTestId('list')
    expect(list.firstElementChild).toHaveAttribute('data-part', 'prev-trigger')
    expect(list.lastElementChild).toHaveAttribute('data-part', 'next-trigger')
    expect(list.querySelectorAll('[data-part="item"]').length).toBeGreaterThan(
      1,
    )
    expect(screen.getByTestId('gap')).toHaveTextContent('…')
    expect(screen.getByTestId('gap').className).toContain('cerberus-button')
  })

  test('should render the CompactList abstraction', () => {
    renderWithProvider(
      <Pagination.Root count={100} pageSize={10} defaultPage={4}>
        <Pagination.CompactList data-testid="list">
          <Pagination.PrevTrigger>Back</Pagination.PrevTrigger>
        </Pagination.CompactList>
      </Pagination.Root>,
    )
    expect(screen.getByText('4 of 10')).toBeInTheDocument()
    expect(screen.getByLabelText('previous page')).toHaveTextContent('Back')
    expect(
      screen.getByTestId('list').querySelectorAll('[data-part="item"]'),
    ).toHaveLength(0)
  })

  test('should render the trigger abstractions', async () => {
    renderWithProvider(
      <Pagination.Root count={20} pageSize={10}>
        <Pagination.PrevTriggerWithIcon data-testid="prev" size="sm" />
        <Pagination.NextTriggerWithIcon data-testid="next" usage="filled">
          <span>Next</span>
        </Pagination.NextTriggerWithIcon>
        <Pagination.Context>
          {(pagination: PaginationContextDetails) => (
            <span data-testid="page">{pagination.page}</span>
          )}
        </Pagination.Context>
      </Pagination.Root>,
    )
    const prev = screen.getByTestId('prev')
    expect(prev).toHaveAttribute('data-part', 'prev-trigger')
    expect(prev).toHaveAttribute('aria-label', 'previous page')
    expect(prev.className).toContain('--size_sm')
    expect(prev.querySelector('svg')).not.toBeNull()
    expect(prev).toBeDisabled()

    const next = screen.getByTestId('next')
    expect(next).toHaveTextContent('Next')
    expect(next.className).toContain('--usage_filled')
    await userEvent.click(next)
    expect(screen.getByTestId('page')).toHaveTextContent('2')
    expect(next).toBeDisabled()
  })

  test('should render the item and ellipsis abstractions', async () => {
    renderWithProvider(
      <Pagination.Root count={20} pageSize={10}>
        <Pagination.ItemButton type="page" value={2} data-testid="item" />
        <Pagination.ItemButton type="page" value={1} size="sm">
          One
        </Pagination.ItemButton>
        <Pagination.EllipsisButton index={1} data-testid="ellipsis" />
      </Pagination.Root>,
    )
    const item = screen.getByTestId('item')
    expect(item).toHaveTextContent('2')
    expect(item).toHaveAttribute('data-part', 'item')
    expect(item.className).toContain('--usage_outlined-subtle')
    expect(screen.getByText('One').className).toContain('--size_sm')
    await userEvent.click(item)
    expect(item).toHaveAttribute('aria-current', 'page')

    const ellipsis = screen.getByTestId('ellipsis')
    expect(ellipsis).toHaveAttribute('data-part', 'ellipsis')
    expect(ellipsis).toHaveTextContent('…')
  })
})
