import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Popover, PopoverParts } from '@cerberus-design/react'

describe('Popover', () => {
  test('renders a basic usage', () => {
    render(<Popover trigger={<button>Open</button>}>This is content</Popover>)
    expect(screen.getByText('This is content')).toBeInTheDocument()
  })

  test('renders a size variant', () => {
    render(
      <Popover trigger={<button>Open</button>} size="lg">
        <Popover.Body>This is content</Popover.Body>
      </Popover>,
    )
    expect(screen.getByText('This is content')).toBeInTheDocument()
  })

  test('appended components are available', () => {
    render(
      <Popover trigger={<button>Open</button>}>
        <Popover.Title>title</Popover.Title>
        <Popover.Description>description</Popover.Description>
        <Popover.Header>header</Popover.Header>
        <Popover.Body>body</Popover.Body>
        <Popover.Footer>footer</Popover.Footer>
      </Popover>,
    )
    expect(screen.getByText(/title/i)).toBeInTheDocument()
    expect(screen.getByText(/description/i)).toBeInTheDocument()
    expect(screen.getByText(/header/i)).toBeInTheDocument()
    expect(screen.getByText(/body/i)).toBeInTheDocument()
    expect(screen.getByText(/footer/i)).toBeInTheDocument()
  })

  test('renders a custom build', () => {
    render(
      <PopoverParts.Root>
        <PopoverParts.Trigger>Open</PopoverParts.Trigger>
        <PopoverParts.Positioner>
          <PopoverParts.Content>This is content</PopoverParts.Content>
        </PopoverParts.Positioner>
      </PopoverParts.Root>,
    )
    expect(screen.getByText('This is content')).toBeInTheDocument()
  })
})
