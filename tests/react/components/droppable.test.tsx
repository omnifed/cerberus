import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Droppable } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Droppable', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render children', () => {
    render(
      <Droppable id="test">
        <div>children</div>
      </Droppable>,
    )
    expect(screen.getByText('children')).toBeTruthy()
  })
})
