import { describe, test, expect, jest } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Table, TableParts } from '@cerberus-design/react'
import userEvent from '@testing-library/user-event'

describe('Table', () => {
  test('should render a table element', () => {
    render(
      <Table.Root caption="Basic table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCol>Header 1</Table.HeaderCol>
            <Table.HeaderCol>Header 2</Table.HeaderCol>
            <Table.HeaderCol>Header 3</Table.HeaderCol>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Row 1, Cell 1</Table.Cell>
            <Table.Cell>Row 1, Cell 2</Table.Cell>
            <Table.Cell>Row 1, Cell 3</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Row 2, Cell 1</Table.Cell>
            <Table.Cell>Row 2, Cell 2</Table.Cell>
            <Table.Cell>Row 2, Cell 3</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Row 3, Cell 1</Table.Cell>
            <Table.Cell>Row 3, Cell 2</Table.Cell>
            <Table.Cell>Row 3, Cell 3</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>,
    )

    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getByRole('caption')).toBeInTheDocument()
    expect(screen.getByText(/Header 1/i)).toBeInTheDocument()
    expect(screen.getByText(/Header 2/i)).toBeInTheDocument()
    expect(screen.getByText(/Header 3/i)).toBeInTheDocument()
    expect(screen.getByText(/Row 1, Cell 1/i)).toBeInTheDocument()
    expect(screen.getByText(/Row 1, Cell 2/i)).toBeInTheDocument()
    expect(screen.getByText(/Row 1, Cell 3/i)).toBeInTheDocument()
    expect(screen.getByText(/Row 2, Cell 1/i)).toBeInTheDocument()
    expect(screen.getByText(/Row 2, Cell 2/i)).toBeInTheDocument()
    expect(screen.getByText(/Row 2, Cell 3/i)).toBeInTheDocument()
    expect(screen.getByText(/Row 3, Cell 1/i)).toBeInTheDocument()
    expect(screen.getByText(/Row 3, Cell 2/i)).toBeInTheDocument()
    expect(screen.getByText(/Row 3, Cell 3/i)).toBeInTheDocument()
  })

  test('should allow clickable headers', async () => {
    const handleClick = jest.fn()
    render(
      <Table.Root caption="Basic table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCol>
              <Table.Trigger onClick={handleClick}>Header 1</Table.Trigger>
            </Table.HeaderCol>
            <Table.HeaderCol>Header 2</Table.HeaderCol>
            <Table.HeaderCol>Header 3</Table.HeaderCol>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Row 1, Cell 1</Table.Cell>
            <Table.Cell>Row 1, Cell 2</Table.Cell>
            <Table.Cell>Row 1, Cell 3</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Row 2, Cell 1</Table.Cell>
            <Table.Cell>Row 2, Cell 2</Table.Cell>
            <Table.Cell>Row 2, Cell 3</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Row 3, Cell 1</Table.Cell>
            <Table.Cell>Row 3, Cell 2</Table.Cell>
            <Table.Cell>Row 3, Cell 3</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>,
    )

    expect(screen.getByText(/Header 1/i)).toBeInTheDocument()
    expect(screen.getByText(/Header 2/i)).toBeInTheDocument()
    expect(screen.getByText(/Header 3/i)).toBeInTheDocument()

    await userEvent.click(screen.getByText(/Header 1/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('should have a TableParts object', () => {
    render(
      <TableParts.Root>
        <TableParts.Table>
          <TableParts.Caption>Caption</TableParts.Caption>
          <TableParts.Header>
            <TableParts.Row>
              <TableParts.HeaderCol>Header 1</TableParts.HeaderCol>
              <TableParts.HeaderCol>Header 2</TableParts.HeaderCol>
              <TableParts.HeaderCol>Header 3</TableParts.HeaderCol>
            </TableParts.Row>
          </TableParts.Header>
          <TableParts.Body>
            <TableParts.Row>
              <TableParts.Cell>Row 1, Cell 1</TableParts.Cell>
              <TableParts.Cell>Row 1, Cell 2</TableParts.Cell>
              <TableParts.Cell>Row 1, Cell 3</TableParts.Cell>
            </TableParts.Row>
            <TableParts.Row>
              <TableParts.Cell>Row 2, Cell 1</TableParts.Cell>
              <TableParts.Cell>Row 2, Cell 2</TableParts.Cell>
              <TableParts.Cell>Row 2, Cell 3</TableParts.Cell>
            </TableParts.Row>
            <TableParts.Row>
              <TableParts.Cell>Row 3, Cell 1</TableParts.Cell>
              <TableParts.Cell>Row 3, Cell 2</TableParts.Cell>
              <TableParts.Cell>Row 3, Cell 3</TableParts.Cell>
            </TableParts.Row>
          </TableParts.Body>
          <TableParts.Footer>
            <TableParts.Row>
              <TableParts.Cell>Footer 1</TableParts.Cell>
              <TableParts.Cell>Footer 2</TableParts.Cell>
              <TableParts.Cell>Footer 3</TableParts.Cell>
            </TableParts.Row>
          </TableParts.Footer>
        </TableParts.Table>
      </TableParts.Root>,
    )

    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getByRole('caption')).toBeInTheDocument()
    expect(screen.getByText(/Header 1/i)).toBeInTheDocument()
    expect(screen.getByText(/Header 2/i)).toBeInTheDocument()
    expect(screen.getByText(/Header 3/i)).toBeInTheDocument()
    expect(screen.getByText(/Row 1, Cell 1/i)).toBeInTheDocument()
    expect(screen.getByText(/Row 1, Cell 2/i)).toBeInTheDocument()
    expect(screen.getByText(/Row 1, Cell 3/i)).toBeInTheDocument()
    expect(screen.getByText(/Row 2, Cell 1/i)).toBeInTheDocument()
    expect(screen.getByText(/Row 2, Cell 2/i)).toBeInTheDocument()
    expect(screen.getByText(/Row 2, Cell 3/i)).toBeInTheDocument()
    expect(screen.getByText(/Row 3, Cell 1/i)).toBeInTheDocument()
    expect(screen.getByText(/Row 3, Cell 2/i)).toBeInTheDocument()
    expect(screen.getByText(/Row 3, Cell 3/i)).toBeInTheDocument()
    expect(screen.getByText(/Footer 1/i)).toBeInTheDocument()
    expect(screen.getByText(/Footer 2/i)).toBeInTheDocument()
    expect(screen.getByText(/Footer 3/i)).toBeInTheDocument()
  })
})
