import { describe, test, expect } from 'bun:test'
import { useMemo } from 'react'
import { act, render, screen, waitFor } from '@testing-library/react'
import {
  createComputed,
  createSignal,
  useRead,
  useSignal,
} from '@cerberus-design/signals'
import { user } from '@/utils'

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

describe('useRead subscriptions', () => {
  test('should unsubscribe from the signal graph on unmount', () => {
    const [value, setValue] = createSignal(0)
    let evaluations = 0
    const doubled = createComputed(() => {
      evaluations++
      return value() * 2
    })

    const Component = () => <div>{useRead(doubled)}</div>

    const { unmount } = render(<Component />)
    expect(screen.getByText(0)).toBeInTheDocument()

    unmount()
    evaluations = 0
    act(() => setValue(1))
    // No live subscriber pulls the computed anymore
    expect(evaluations).toBe(0)
  })

  test('should re-render with a computed that sorts into a new Array', async () => {
    const people = [
      { id: '1', age: 30 },
      { id: '2', age: 25 },
    ]

    const Component = () => {
      const [order, setOrder, getOrder] = useSignal<'asc' | 'desc'>('asc')
      const sorted = useRead(
        useMemo(
          () =>
            createComputed(() =>
              getOrder() === 'asc'
                ? people.toSorted((a, b) => a.age - b.age)
                : people.toSorted((a, b) => b.age - a.age),
            ),
          [getOrder],
        ),
      )
      return (
        <>
          <button
            onClick={() =>
              setOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
            }
          >
            {order}
          </button>
          <ul>
            {sorted.map((person) => (
              <li key={person.id}>{person.age}</li>
            ))}
          </ul>
        </>
      )
    }

    render(<Component />)
    const ages = () =>
      screen.getAllByRole('listitem').map((item) => item.textContent)
    expect(ages()).toEqual(['25', '30'])

    await user.click(screen.getByText('asc'))
    await waitFor(() => expect(screen.getByText('desc')).toBeInTheDocument())
    expect(ages()).toEqual(['30', '25'])

    await user.click(screen.getByText('desc'))
    await waitFor(() => expect(screen.getByText('asc')).toBeInTheDocument())
    expect(ages()).toEqual(['25', '30'])
  })
})
