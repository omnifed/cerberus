import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { DataGrid, createColumnHelper } from '@cerberus-design/data-grid'
import { CerberusProvider } from '@cerberus-design/react'

describe('DataGrid', () => {
  const data = [
    {
      one: 'one',
      two: 'two',
      three: 'three',
    },
  ]
  type Row = (typeof data)[0]

  const helper = createColumnHelper<Row>()

  const columns = [
    helper.display({
      id: 'one',
      header: 'Display',
      cell: () => <>static content</>,
    }),
    helper.accessor('two', {
      header: 'Second',
    }),
    helper.accessorFn((row) => row.three, {
      header: 'Third',
      id: 'three',
    }),
  ]

  test('renders without crashing', () => {
    render(
      <CerberusProvider>
        <DataGrid data={data} columns={columns} />
      </CerberusProvider>,
    )
    expect(screen.getAllByText('Display')).toHaveLength(3)
    // expect(screen.getAllByText('static content')).toHaveLength(3)
    expect(screen.getAllByText('Second')).toHaveLength(3)
    // expect(screen.getAllByText('two')).toHaveLength(3)
    expect(screen.getAllByText('Third')).toHaveLength(3)
    // expect(screen.getByText('three')).toHaveLength(3)
  })

  test('renders a toolbar', () => {
    function Toolbar() {
      return <div>This is a toolbar</div>
    }
    render(
      <CerberusProvider>
        <DataGrid data={data} columns={columns} toolbar={<Toolbar />} />
      </CerberusProvider>,
    )
    expect(screen.getByText('This is a toolbar')).toBeInTheDocument()
  })

  test('renders footer', () => {
    function Footer() {
      return <div>This is a footer</div>
    }
    render(
      <CerberusProvider>
        <DataGrid data={data} columns={columns} footer={<Footer />} />
      </CerberusProvider>,
    )
    expect(screen.getByText('This is a footer')).toBeInTheDocument()
  })

  test('renders with custom theme variables', () => {
    const theme = {
      headCellBgColor: 'black',
      gridCellPinnedBorderColor: 'black',
    }
    render(
      <CerberusProvider>
        <DataGrid data={data} columns={columns} theme={theme} />
      </CerberusProvider>,
    )
    // Not sure the best way to test this
    expect(screen.getAllByText('Display')).toHaveLength(3)
  })

  test('renders fallback no content overlay', () => {
    render(
      <CerberusProvider>
        <DataGrid data={[]} columns={columns} />
      </CerberusProvider>,
    )
    expect(screen.getByText(/no rows found/i)).toBeInTheDocument()
  })

  test('renders custom no content overlay', () => {
    const NoContent = () => <div>Custom no content</div>
    render(
      <CerberusProvider>
        <DataGrid
          data={[]}
          columns={columns}
          overlays={{
            noContent: <NoContent />,
          }}
        />
      </CerberusProvider>,
    )
    expect(screen.getByText(/custom no content/i)).toBeInTheDocument()
  })
})
