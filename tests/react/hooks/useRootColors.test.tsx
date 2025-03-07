import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { useRootColors } from '@cerberus-design/react'
import { user } from '@/utils'

describe('useRootColors', () => {
  function Test() {
    const { colors, refetch } = useRootColors([
      'dataViz.diverging.50',
      'dataViz.diverging.200',
    ])

    return (
      <div>
        {Object.keys(colors).map((color) => (
          <div key={color}>
            <span>{color}</span>
          </div>
        ))}

        <button onClick={refetch}>refetch</button>
      </div>
    )
  }

  test('should return a record of colors', () => {
    render(<Test />)
    // There's no document to store styles in a test environment, so we can't
    // test this hook to the full extent.
    expect(screen.getByText(/dataViz.diverging.50/i)).toBeInTheDocument()
    expect(screen.getByText(/dataViz.diverging.200/i)).toBeInTheDocument()
  })

  test('should refetch colors', async () => {
    render(<Test />)
    // There's no document to store styles in a test environment, so we can't
    // test this hook to the full extent.
    await user.click(screen.getByText(/refetch/i))
    expect(screen.getByText(/dataViz.diverging.50/i)).toBeInTheDocument()
    expect(screen.getByText(/dataViz.diverging.200/i)).toBeInTheDocument()
  })
})
