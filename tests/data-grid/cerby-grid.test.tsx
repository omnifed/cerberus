import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import {
  CerberusDataGrid,
  createColumnHelper,
} from '@cerberus-design/data-grid'

describe('CerberusDataGrid', () => {
  const data = [
    {
      one: 'one',
      two: 'two',
      three: 'three',
    },
  ]
  type Row = (typeof data)[0]
  type TData = typeof data

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
    expect(screen.getByText('Display')).toBeInTheDocument()
    expect(screen.getByText('static content')).toBeInTheDocument()
    expect(screen.getByText('Second')).toBeInTheDocument()
    expect(screen.getByText('two')).toBeInTheDocument()
    expect(screen.getByText('Third')).toBeInTheDocument()
    expect(screen.getByText('three')).toBeInTheDocument()
  })
})
