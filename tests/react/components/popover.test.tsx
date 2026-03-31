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
    screen.debug()
    expect(screen.getByText('This is content')).toBeInTheDocument()
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
