import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Droppable } from '@cerberus-design/react'

describe('Droppable', () => {
  test('should render children', () => {
    render(
      <Droppable id="test">
        <div>children</div>
      </Droppable>,
    )
    expect(screen.getByText('children')).toBeInTheDocument()
  })
})
