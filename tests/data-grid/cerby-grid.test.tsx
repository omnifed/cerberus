import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { CerberusDataGrid, createColumnHelper } from '@cerberus-design/data-grid'

describe('CerberusDataGrid', () => {
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
    render(<CerberusDataGrid data={data} columns={columns} />)
    expect(screen.getAllByText('Display')).toHaveLength(3)
    // expect(screen.getByText('static content')).toBeInTheDocument()
    expect(screen.getAllByText('Second')).toHaveLength(3)
    // expect(screen.getByText('two')).toBeInTheDocument()
    expect(screen.getAllByText('Third')).toHaveLength(3)
    // expect(screen.getByText('three')).toBeInTheDocument()
  })
})
