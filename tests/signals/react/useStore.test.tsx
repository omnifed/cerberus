import { user } from '@/utils'
import { createSignal, ReactiveText, useStore } from '@cerberus-design/signals'
import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, test } from 'bun:test'

describe('useStore', () => {
  function testStore() {
    const [value, setValue] = createSignal(0)
    return { value, setValue }
  }

  test('should read the signal value', async () => {
    const Component = () => {
      const store = useStore(testStore)
      return (
        <div>
          <ReactiveText data={store.value} />
          <button onClick={() => store.setValue(1)}>Set to 1</button>
        </div>
      )
    }

    render(<Component />)

    expect(screen.getByText(0)).toBeInTheDocument()
    await user.click(screen.getByText('Set to 1'))
    await waitFor(() => {
      expect(screen.getByText(1)).toBeInTheDocument()
    })
  })
})
