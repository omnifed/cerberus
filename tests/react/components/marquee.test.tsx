import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Marquee } from '@cerberus-design/react'

describe('Marquee', () => {
  test('renders', () => {
    render(<Marquee />)
    expect(screen.getByRole('region')).toBeInTheDocument()
  })

  test('it accepts edges', () => {
    render(<Marquee edges={['both']} />)
    // not sure how to test this since it's a child that contains no content
    expect(screen.getByRole('region')).toBeInTheDocument()
  })

  test('renders the El abstraction as the compound component', () => {
    expect(Marquee.El).toBe(Marquee)
  })

  test('accepts part overrides as direct children', () => {
    render(
      <Marquee edges={['both']}>
        <Marquee.Viewport data-testid="viewport" />
        {/* Patch children may omit what the abstraction supplies: Content's
            children and Edge's side */}
        <Marquee.Content data-testid="content" />
        <Marquee.Edge data-testid="edge" />
        <Marquee.Item>Item</Marquee.Item>
      </Marquee>,
    )
    expect(screen.getByTestId('viewport')).toBeInTheDocument()
    expect(screen.getAllByTestId('content')[0]).toContainElement(
      screen.getAllByText('Item')[0],
    )
    expect(screen.getAllByTestId('edge')).toHaveLength(2)
  })
})
