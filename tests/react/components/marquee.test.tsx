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
})
