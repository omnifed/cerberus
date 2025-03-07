import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { For } from '@cerberus-design/react'

describe('For', () => {
  test('should render children when condition is true', () => {
    const items: string[] = ['a', 'b', 'c']
    render(
      <For each={items}>{(item: string) => <div key={item}>{item}</div>}</For>,
    )
    expect(screen.getByText(/a/i)).toBeInTheDocument()
    expect(screen.getByText(/b/i)).toBeInTheDocument()
    expect(screen.getByText(/c/i)).toBeInTheDocument()
  })

  test('should render fallback when condition is false', () => {
    const items: string[] = []
    render(
      <For each={items} fallback={<div>Fallback</div>}>
        {(item: string) => <div key={item}>{item}</div>}
      </For>,
    )
    expect(screen.getByText(/fallback/i)).toBeInTheDocument()
  })
})
