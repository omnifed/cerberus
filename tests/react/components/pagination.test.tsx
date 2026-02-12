import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Pagination, CerberusProvider } from '@cerberus-design/react'
import { makeConfig } from '@/utils'

describe('Pagination', () => {
  const config = makeConfig()

  test('should render', () => {
    render(
      <CerberusProvider config={config}>
        <Pagination count={5000} pageSize={10} siblingCount={2} />
      </CerberusProvider>,
    )
    expect(screen.getByText(/1/i)).toBeInTheDocument()
  })

  test('should allow a layout prop', () => {
    render(
      <CerberusProvider config={config}>
        <Pagination
          count={5000}
          pageSize={10}
          siblingCount={2}
          layout="attached"
        />
      </CerberusProvider>,
    )
    expect(screen.getByText(/1/i)).toBeInTheDocument()
  })

  test('should allow a compact prop', () => {
    render(
      <CerberusProvider config={config}>
        <Pagination
          compact
          count={5000}
          pageSize={10}
          siblingCount={2}
          layout="attached"
        />
      </CerberusProvider>,
    )
    expect(screen.getByText(/1/i)).toBeInTheDocument()
  })

  test('should allow a css prop', () => {
    render(
      <CerberusProvider config={config}>
        <Pagination
          data-testid="pagination"
          count={5000}
          pageSize={10}
          siblingCount={2}
          css={{ bgColor: 'black' }}
        />
      </CerberusProvider>,
    )
    expect(screen.getByText(/1/i)).toBeInTheDocument()
    expect(screen.getByTestId('pagination')).toHaveClass('cerberus-bg-c_black')
  })
})
