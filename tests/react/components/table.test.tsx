import { describe, test, expect, jest } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Table } from '@cerberus-design/react'
import userEvent from '@testing-library/user-event'

function Rows() {
  return (
    <>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCol scope="col">Header 1</Table.HeaderCol>
          <Table.HeaderCol scope="col">Header 2</Table.HeaderCol>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Row 1, Cell 1</Table.Cell>
          <Table.Cell>Row 1, Cell 2</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Row 2, Cell 1</Table.Cell>
          <Table.Cell>Row 2, Cell 2</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell>Footer 1</Table.Cell>
          <Table.Cell>Footer 2</Table.Cell>
        </Table.Row>
      </Table.Footer>
    </>
  )
}

const part = (container: HTMLElement, name: string) =>
  container.querySelector(
    `[data-scope="table"][data-part="${name}"]`,
  ) as HTMLElement

describe('Table', () => {
  test('should render every part with native table semantics', () => {
    const { container } = render(
      <Table caption="Basic table">
        <Rows />
      </Table>,
    )

    const table = screen.getByRole('table', { name: 'Basic table' })
    expect(table.tagName).toBe('TABLE')
    expect(table).toHaveAttribute('data-part', 'table')

    const root = part(container, 'root')
    expect(root.tagName).toBe('DIV')
    expect(root).toHaveAttribute('data-sticky', 'false')
    expect(root).toContainElement(table)

    expect(screen.getByRole('caption')).toHaveTextContent('Basic table')
    expect(part(container, 'caption').tagName).toBe('CAPTION')
    expect(part(container, 'header').tagName).toBe('THEAD')
    expect(part(container, 'header-col').tagName).toBe('TH')
    expect(part(container, 'body').tagName).toBe('TBODY')
    expect(part(container, 'row').tagName).toBe('TR')
    expect(part(container, 'cell').tagName).toBe('TD')
    expect(part(container, 'footer').tagName).toBe('TFOOT')

    expect(screen.getAllByRole('columnheader')).toHaveLength(2)
    expect(screen.getAllByRole('row')).toHaveLength(4)
    expect(screen.getAllByRole('cell')).toHaveLength(6)
    expect(screen.getByText('Row 2, Cell 2')).toBeInTheDocument()
    expect(screen.getByText('Footer 2')).toBeInTheDocument()

    // Default variants
    expect(root.className).toContain('table__root--size_md')
    expect(root.className).toContain('table__root--decoration_default')
  })

  test('should expose the parts on the compound component', () => {
    expect(Table.El).toBe(Table)
    for (const member of [
      'Root',
      'Table',
      'Caption',
      'Header',
      'HeaderCol',
      'Body',
      'Row',
      'Cell',
      'Footer',
      'Trigger',
    ] as const) {
      expect(Table[member]).toBeDefined()
    }
  })

  test('should mark the header as sticky', () => {
    const { container } = render(
      <Table caption="Sticky table" sticky>
        <Rows />
      </Table>,
    )
    expect(part(container, 'root')).toHaveAttribute('data-sticky', 'true')
  })

  test('should cascade the variants from the root to every part', () => {
    const { container } = render(
      <Table caption="Small table" size="sm" decoration="zebra">
        <Rows />
      </Table>,
    )

    const root = part(container, 'root')
    expect(root.className).toContain('table__root--size_sm')
    expect(root.className).toContain('table__root--decoration_zebra')
    expect(root).not.toHaveAttribute('size')
    expect(part(container, 'cell').className).toContain('table__td--size_sm')
    expect(part(container, 'row').className).toContain(
      'table__tr--decoration_zebra',
    )
  })

  test('should accept style props on the abstraction and the parts', () => {
    const { container } = render(
      <Table caption="Styled table" border="3px solid" data-testid="root">
        <Table.Body>
          <Table.Row>
            <Table.Cell bgColor="info.bg.initial" fontWeight="bold">
              Styled
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    )

    const root = screen.getByTestId('root')
    expect(root).toHaveAttribute('data-part', 'root')
    expect(root).not.toHaveAttribute('border')
    expect(root.className).toContain('bd_3px_solid')

    const cell = part(container, 'cell')
    expect(cell).not.toHaveAttribute('bgColor')
    expect(cell.className).toContain('bg-c_info.bg.initial')
    expect(cell.className).toContain('fw_bold')
    expect(cell.className).toContain('table__td')
  })

  test('should override the table and caption parts with direct children', () => {
    const { container } = render(
      <Table size="lg">
        <Table.Table data-testid="table-el" />
        <Table.Caption data-testid="caption-el">Custom caption</Table.Caption>
        <Rows />
      </Table>,
    )

    const table = screen.getByTestId('table-el')
    expect(table).toHaveAttribute('data-part', 'table')
    expect(screen.getAllByRole('table')).toHaveLength(1)

    const caption = screen.getByTestId('caption-el')
    expect(caption).toHaveTextContent('Custom caption')
    expect(table.firstElementChild).toBe(caption)
    expect(screen.getByRole('table', { name: 'Custom caption' })).toBe(table)
    expect(part(container, 'cell').className).toContain('table__td--size_lg')
  })

  test('should replace the table content with a Table.Table child with children', () => {
    render(
      <Table caption="Ignored">
        <Table.Table data-testid="table-el">
          <Table.Caption>Replaced</Table.Caption>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Only cell</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Table>
      </Table>,
    )

    expect(screen.getByRole('caption')).toHaveTextContent('Replaced')
    expect(screen.queryByText('Ignored')).not.toBeInTheDocument()
    expect(screen.getAllByRole('cell')).toHaveLength(1)
  })

  test('should render without a caption', () => {
    render(
      <Table>
        <Rows />
      </Table>,
    )
    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.queryByRole('caption')).not.toBeInTheDocument()
  })

  test('should compose the primitives with variants set on the root', () => {
    const { container } = render(
      <Table.Root size="sm" decoration="zebra" data-testid="root">
        <Table.Table>
          <Table.Caption>Primitives</Table.Caption>
          <Rows />
        </Table.Table>
      </Table.Root>,
    )

    expect(
      screen.getByRole('table', { name: 'Primitives' }),
    ).toBeInTheDocument()
    expect(screen.getByTestId('root').className).toContain(
      'table__root--size_sm',
    )
    expect(part(container, 'header-col').className).toContain(
      'table__th--size_sm',
    )
  })

  test('should provide the recipe context through an asChild root', () => {
    render(
      <Table.Root asChild size="lg">
        <section data-testid="section">
          <Table.Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>As child</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Table>
        </section>
      </Table.Root>,
    )

    const section = screen.getByTestId('section')
    expect(section.tagName).toBe('SECTION')
    expect(section).toHaveAttribute('data-part', 'root')
    expect(section.className).toContain('table__root--size_lg')
    expect(screen.getByRole('cell').className).toContain('table__td--size_lg')
  })

  test('should allow clickable headers', async () => {
    const handleClick = jest.fn()
    render(
      <Table caption="Clickable table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCol scope="col" aria-sort="ascending">
              <Table.Trigger onClick={handleClick}>Header 1</Table.Trigger>
            </Table.HeaderCol>
            <Table.HeaderCol scope="col">Header 2</Table.HeaderCol>
          </Table.Row>
        </Table.Header>
      </Table>,
    )

    const trigger = screen.getByRole('button', { name: 'Header 1' })
    expect(trigger).toHaveAttribute('type', 'button')
    expect(trigger).toHaveAttribute('data-part', 'trigger')
    expect(trigger.className).toContain('table__trigger')
    expect(
      screen.getByRole('columnheader', { name: 'Header 1' }),
    ).toHaveAttribute('aria-sort', 'ascending')

    await userEvent.click(trigger)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
