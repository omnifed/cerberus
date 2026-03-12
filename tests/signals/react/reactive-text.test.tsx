import { describe, test, expect } from 'bun:test'
import { act, render, screen, waitFor } from '@testing-library/react'
import { createSignal, ReactiveText } from '@cerberus-design/signals'

describe('ReactiveText', () => {
  test('renders the text', () => {
    const [value] = createSignal('Hello, World!')
    render(<ReactiveText data={value} />)
    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
  })

  test('updates the text when the signal changes', async () => {
    const [value, setValue] = createSignal('Hello, World!')
    render(<ReactiveText data={value} />)
    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
    // change outside of React context
    act(() => setValue('Goodbye, World!'))
    await waitFor(() =>
      expect(screen.getByText('Goodbye, World!')).toBeInTheDocument(),
    )
  })
})
