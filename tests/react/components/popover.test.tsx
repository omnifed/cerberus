import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Popover } from '@cerberus-design/react'

describe('Popover', () => {
  test('renders a basic usage', () => {
    render(<Popover trigger={<button>Open</button>}>This is content</Popover>)
    expect(screen.getByText('This is content')).toBeInTheDocument()
  })

  test('renders the trigger prop as the trigger element', async () => {
    render(
      <Popover trigger={<button type="button">Open</button>}>
        <Popover.Body>This is content</Popover.Body>
      </Popover>,
    )
    const trigger = screen.getByRole('button', { name: 'Open' })
    expect(trigger).toHaveAttribute('data-scope', 'popover')
    expect(trigger).toHaveAttribute('data-part', 'trigger')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    await userEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByText('This is content').closest('[data-part="content"]'),
    ).toHaveAttribute('data-state', 'open')
  })

  test('renders a size variant on the content', () => {
    render(
      <Popover trigger={<button>Open</button>} size="lg">
        <Popover.Body>This is content</Popover.Body>
      </Popover>,
    )
    const content = screen
      .getByText('This is content')
      .closest('[data-part="content"]')
    expect(content).toHaveClass('cerberus-popover__content--size_lg')
  })

  test('renders the arrow when usage is arrow', () => {
    const { container, rerender } = render(
      <Popover trigger={<button>Open</button>}>content</Popover>,
    )
    expect(container.querySelector('[data-part="arrow"]')).toBeNull()

    rerender(
      <Popover trigger={<button>Open</button>} usage="arrow">
        content
      </Popover>,
    )
    expect(container.querySelector('[data-part="arrow"]')).toBeInTheDocument()
    expect(
      container.querySelector('[data-part="arrow-tip"]'),
    ).toBeInTheDocument()
  })

  test('portals the positioner when positioning is set', () => {
    const { container, rerender } = render(
      <Popover trigger={<button>Open</button>}>content</Popover>,
    )
    expect(container.querySelector('[data-part="positioner"]')).not.toBeNull()

    rerender(
      <Popover
        trigger={<button>Open</button>}
        positioning={{ placement: 'left-start' }}
      >
        content
      </Popover>,
    )
    expect(container.querySelector('[data-part="positioner"]')).toBeNull()
    expect(screen.getByText('content')).toBeInTheDocument()
  })

  test('applies direct part children as overrides', () => {
    render(
      <Popover>
        <Popover.Trigger data-testid="trigger">Custom trigger</Popover.Trigger>
        <Popover.Content data-testid="content" />
        body
      </Popover>,
    )
    expect(screen.getByTestId('trigger')).toHaveTextContent('Custom trigger')
    expect(screen.getByTestId('content')).toHaveTextContent('body')
  })

  test('renders the header, body and footer slots', () => {
    render(
      <Popover trigger={<button>Open</button>}>
        <Popover.Header>header</Popover.Header>
        <Popover.Body>body</Popover.Body>
        <Popover.Footer>footer</Popover.Footer>
      </Popover>,
    )
    for (const part of ['header', 'body', 'footer']) {
      const el = screen.getByText(part)
      expect(el.tagName).toBe('DIV')
      expect(el).toHaveAttribute('data-scope', 'popover')
      expect(el).toHaveAttribute('data-part', part)
      expect(el).toHaveClass(`cerberus-popover__${part}`)
    }
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
      <Popover.Root>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Positioner>
          <Popover.Content>This is content</Popover.Content>
        </Popover.Positioner>
      </Popover.Root>,
    )
    expect(screen.getByText('This is content')).toBeInTheDocument()
  })

  test('Popover.Trigger asChild renders the child as the trigger', async () => {
    render(
      <Popover.Root size="sm">
        <Popover.Trigger asChild>
          <button type="button" className="custom">
            Open
          </button>
        </Popover.Trigger>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Body>This is content</Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Popover.Root>,
    )
    const trigger = screen.getByRole('button', { name: 'Open' })
    expect(trigger).toHaveClass('custom')
    expect(trigger).toHaveAttribute('data-part', 'trigger')
    expect(trigger.querySelector('button')).toBeNull()

    await userEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByText('This is content').closest('[data-part="content"]'),
    ).toHaveClass('cerberus-popover__content--size_sm')
  })
})
