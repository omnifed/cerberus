import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Show } from '@cerberus-design/react'

describe('Show', () => {
  test('should render children when condition is true', () => {
    render(
      <Show when={true}>
        <div>children</div>
      </Show>,
    )
    expect(screen.getByText('children')).toBeInTheDocument()
  })

  test('should render fallback when condition is false', () => {
    render(
      <Show when={false} fallback={<div>fallback</div>}>
        <div>children</div>
      </Show>,
    )
    expect(screen.getByText('fallback')).toBeInTheDocument()
    expect(screen.queryByText('children')).not.toBeInTheDocument()
  })

  test('should render fallback when condition is undefined', () => {
    render(
      <Show when={undefined} fallback={<div>fallback</div>}>
        <div>children</div>
      </Show>,
    )
    expect(screen.getByText('fallback')).toBeInTheDocument()
    expect(screen.queryByText('children')).not.toBeInTheDocument()
  })

  test('should render fallback when condition is null', () => {
    render(
      <Show when={null} fallback={<div>fallback</div>}>
        <div>children</div>
      </Show>,
    )
    expect(screen.getByText('fallback')).toBeInTheDocument()
    expect(screen.queryByText('children')).not.toBeInTheDocument()
  })
})
