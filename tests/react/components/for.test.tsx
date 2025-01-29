import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { For } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('For', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render children when condition is true', () => {
    const items: string[] = ['a', 'b', 'c']
    render(
      <For each={items}>{(item: string) => <div key={item}>{item}</div>}</For>,
    )
    expect(screen.getByText(/a/i)).toBeTruthy()
    expect(screen.getByText(/b/i)).toBeTruthy()
    expect(screen.getByText(/c/i)).toBeTruthy()
  })

  test('should render fallback when condition is false', () => {
    const items: string[] = []
    render(
      <For each={items} fallback={<div>Fallback</div>}>
        {(item: string) => <div key={item}>{item}</div>}
      </For>,
    )
    expect(screen.getByText(/fallback/i)).toBeTruthy()
  })
})
