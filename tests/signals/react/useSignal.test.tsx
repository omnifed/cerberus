import { describe, test, expect } from 'bun:test'
import { render, screen, waitFor } from '@testing-library/react'
import { useSignal } from '@cerberus-design/signals'
import { user } from '@/utils'

describe('useSignal', () => {
  test('should create and read the signal value', async () => {
    const Component = () => {
      const [val, set, get] = useSignal<number>(0)
      return (
        <>
          <div>{val}</div>
          <button onClick={() => set(get() + 1)}>Increment</button>
        </>
      )
    }

    render(<Component />)
    expect(screen.getByText(0)).toBeInTheDocument()
    await user.click(screen.getByText('Increment'))
    await waitFor(() => {
      expect(screen.getByText(1)).toBeInTheDocument()
    })
  })
})
