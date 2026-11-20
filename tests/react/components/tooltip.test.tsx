import { describe, test, expect } from 'bun:test'
import { render, screen, waitFor } from '@testing-library/react'
import { Tooltip } from '@cerberus-design/react'
import userEvent from '@testing-library/user-event'

describe('Tooltip', () => {
  test('should render a tooltip element', async () => {
    render(
      <Tooltip content="It works">
        <span>trigger</span>
      </Tooltip>,
    )
    await userEvent.hover(screen.getByText(/trigger/i))
    await waitFor(() => {
      expect(screen.getByText(/it works/i)).toBeInTheDocument()
    })
  })

  test('should render a tooltip with a custom position', async () => {
    render(
      <Tooltip content="It works" positioning={{ placement: 'bottom' }}>
        <span>trigger</span>
      </Tooltip>,
    )
    await userEvent.hover(screen.getByText(/trigger/i))
    await waitFor(() => {
      expect(screen.getByText(/it works/i)).toHaveAttribute(
        'data-placement',
        'bottom',
      )
    })
  })

  test('should render the child as the trigger and place the bubble on top by default', async () => {
    render(
      <Tooltip content="Top bubble" openDelay={0}>
        <button type="button">trigger</button>
      </Tooltip>,
    )
    const trigger = screen.getByRole('button', { name: /trigger/i })
    // The child is the trigger element itself (asChild), not wrapped in one
    expect(trigger).toHaveAttribute('data-scope', 'tooltip')
    expect(trigger).toHaveAttribute('data-part', 'trigger')

    await userEvent.hover(trigger)
    await waitFor(() => {
      const content = screen.getByText(/top bubble/i)
      expect(content).toHaveAttribute('data-part', 'content')
      expect(content).toHaveAttribute('data-placement', 'top')
      expect(
        content.querySelector('[data-part="arrow"] [data-part="arrow-tip"]'),
      ).not.toBeNull()
    })
    expect(trigger).toHaveAttribute('aria-describedby')
  })

  test('should apply direct part children as overrides', async () => {
    render(
      <Tooltip content="ignored" open>
        <Tooltip.Content data-testid="bubble">Custom content</Tooltip.Content>
        <Tooltip.Positioner data-testid="positioner" />
        <button type="button">trigger</button>
      </Tooltip>,
    )
    expect(screen.getByRole('button', { name: /trigger/i })).toHaveAttribute(
      'data-part',
      'trigger',
    )
    const bubble = screen.getByTestId('bubble')
    expect(bubble).toHaveTextContent('Custom content')
    expect(bubble).not.toHaveTextContent('ignored')
    expect(screen.getByTestId('positioner')).toContainElement(bubble)
  })

  test('should render the bubble in a Portal', () => {
    const { container } = render(
      <Tooltip content="Portaled" open portal>
        <button type="button">trigger</button>
      </Tooltip>,
    )
    const bubble = screen.getByText(/portaled/i)
    expect(container).not.toContainElement(bubble)
    expect(document.body).toContainElement(bubble)
  })

  test('should compose the primitives with Tooltip.Trigger asChild', async () => {
    render(
      <Tooltip.Root openDelay={0}>
        <Tooltip.Trigger asChild>
          <button type="button">composed trigger</button>
        </Tooltip.Trigger>
        <Tooltip.Positioner>
          <Tooltip.Content>
            <Tooltip.Arrow>
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
            Composed content
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Tooltip.Root>,
    )
    const trigger = screen.getByRole('button', { name: /composed trigger/i })
    expect(trigger).toHaveAttribute('data-part', 'trigger')
    // asChild merges onto the child: no extra wrapping button
    expect(screen.getAllByRole('button')).toHaveLength(1)

    await userEvent.hover(trigger)
    await waitFor(() => {
      expect(screen.getByText(/composed content/i)).toHaveAttribute(
        'data-state',
        'open',
      )
    })
  })

  test('should expose the state through Tooltip.Context', () => {
    render(
      <Tooltip.Root open>
        <Tooltip.Trigger>trigger</Tooltip.Trigger>
        <Tooltip.Context>
          {(tooltip) => <span>{tooltip.open ? 'is open' : 'is closed'}</span>}
        </Tooltip.Context>
      </Tooltip.Root>,
    )
    expect(screen.getByText('is open')).toBeInTheDocument()
  })
})
