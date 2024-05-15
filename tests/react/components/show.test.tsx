import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Show } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Show', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render children when condition is true', () => {
    render(
      <Show when={true}>
        <div>children</div>
      </Show>,
    )
    expect(screen.getByText('children')).toBeTruthy()
  })

  test('should render fallback when condition is false', () => {
    render(
      <Show when={false} fallback={<div>fallback</div>}>
        <div>children</div>
      </Show>,
    )
    expect(screen.getByText('fallback')).toBeTruthy()
    expect(screen.queryByText('children')).toBeNull()
  })

  test('should render fallback when condition is undefined', () => {
    render(
      <Show when={undefined} fallback={<div>fallback</div>}>
        <div>children</div>
      </Show>,
    )
    expect(screen.getByText('fallback')).toBeTruthy()
    expect(screen.queryByText('children')).toBeNull()
  })

  test('should render fallback when condition is null', () => {
    render(
      <Show when={null} fallback={<div>fallback</div>}>
        <div>children</div>
      </Show>,
    )
    expect(screen.getByText('fallback')).toBeTruthy()
    expect(screen.queryByText('children')).toBeNull()
  })
})
