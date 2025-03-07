import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Portal } from '@cerberus-design/react'

describe('Portal', () => {
  test('should render children provided', () => {
    render(
      <Portal>
        <div>children</div>
      </Portal>,
    )
    expect(screen.getByText('children')).toBeInTheDocument()
  })

  test('should return null if window is undefined', () => {
    const { container } = render(
      <Portal>
        <div>children</div>
      </Portal>,
    )
    expect(container.firstChild).not.toBeInTheDocument()
  })
})
