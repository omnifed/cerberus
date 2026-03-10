import { describe, test, expect } from 'bun:test'
import { act, render, screen, waitFor } from '@testing-library/react'
import { createSignal, useRead } from '@cerberus-design/signals'

describe('useRead', () => {
  test('should read the signal value', async () => {
    const [value, setValue] = createSignal(0)

    const Component = () => {
      const readValue = useRead(value)
      return <div>{readValue}</div>
    }

    render(<Component />)
    expect(screen.getByText(0)).toBeInTheDocument()
    act(() => setValue(1))
    await waitFor(() => {
      expect(screen.getByText(1)).toBeInTheDocument()
    })
  })
})
