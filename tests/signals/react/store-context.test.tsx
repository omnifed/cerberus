import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import {
  Accessor,
  createSignal,
  createStoreContext,
  ReactiveText,
} from '@cerberus-design/signals'
import { user } from '@/utils'

describe('StoreContext', () => {
  type Store = {
    count: Accessor<number>
    increment: () => void
    decrement: () => void
  }

  const [count, setCount] = createSignal<number>(0)
  const store: Store = {
    count,
    increment: () => setCount(count() + 1),
    decrement: () => setCount(count() - 1),
  }
  const { StoreProvider, useStore } = createStoreContext<Store>()

  function Feature() {
    const { count, increment, decrement } = useStore()
    return (
      <div>
        <ReactiveText data={count} />
        <button onClick={increment}>add</button>
        <button onClick={decrement}>subtract</button>
      </div>
    )
  }

  test('should helpers for accessing the store', () => {
    render(
      <StoreProvider createStore={() => store}>
        <Feature />
      </StoreProvider>,
    )
    expect(screen.getByText(0)).toBeInTheDocument()
    expect(screen.getByText('add')).toBeInTheDocument()
    expect(screen.getByText('subtract')).toBeInTheDocument()
  })

  test('should provide the latest store values', async () => {
    render(
      <StoreProvider createStore={() => store}>
        <Feature />
      </StoreProvider>,
    )
    expect(screen.getByText(0)).toBeInTheDocument()
    expect(screen.getByText('add')).toBeInTheDocument()
    expect(screen.getByText('subtract')).toBeInTheDocument()
    await user.click(screen.getByText('add'))
    expect(screen.getByText(1)).toBeInTheDocument()
    await user.click(screen.getByText('subtract'))
    expect(screen.getByText(0)).toBeInTheDocument()
  })
})
