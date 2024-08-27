import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Table, Tbody, Td, Th, Thead, Tr } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Table', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a table element', () => {
    render(
      <Table caption="Basic table">
        <Thead>
          <Tr>
            <Th>Header 1</Th>
            <Th>Header 2</Th>
            <Th>Header 3</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Row 1, Cell 1</Td>
            <Td>Row 1, Cell 2</Td>
            <Td>Row 1, Cell 3</Td>
          </Tr>
          <Tr>
            <Td>Row 2, Cell 1</Td>
            <Td>Row 2, Cell 2</Td>
            <Td>Row 2, Cell 3</Td>
          </Tr>
          <Tr>
            <Td>Row 3, Cell 1</Td>
            <Td>Row 3, Cell 2</Td>
            <Td>Row 3, Cell 3</Td>
          </Tr>
        </Tbody>
      </Table>,
    )

    expect(screen.getByRole('table')).toBeTruthy()
    expect(screen.getByRole('caption')).toBeTruthy()
    expect(screen.getByText(/Header 1/i)).toBeTruthy()
    expect(screen.getByText(/Header 2/i)).toBeTruthy()
    expect(screen.getByText(/Header 3/i)).toBeTruthy()
    expect(screen.getByText(/Row 1, Cell 1/i)).toBeTruthy()
    expect(screen.getByText(/Row 1, Cell 2/i)).toBeTruthy()
    expect(screen.getByText(/Row 1, Cell 3/i)).toBeTruthy()
    expect(screen.getByText(/Row 2, Cell 1/i)).toBeTruthy()
    expect(screen.getByText(/Row 2, Cell 2/i)).toBeTruthy()
    expect(screen.getByText(/Row 2, Cell 3/i)).toBeTruthy()
    expect(screen.getByText(/Row 3, Cell 1/i)).toBeTruthy()
    expect(screen.getByText(/Row 3, Cell 2/i)).toBeTruthy()
    expect(screen.getByText(/Row 3, Cell 3/i)).toBeTruthy()
  })
})