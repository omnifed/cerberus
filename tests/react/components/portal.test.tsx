import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Portal } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Portal', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render children provided', () => {
    render(
      <Portal>
        <div>children</div>
      </Portal>,
    )
    expect(screen.getByText('children')).toBeTruthy()
  })

  test('should return null if window is undefined', () => {
    const { container } = render(
      <Portal>
        <div>children</div>
      </Portal>,
    )
    expect(container.firstChild).toBeNull()
  })
})
