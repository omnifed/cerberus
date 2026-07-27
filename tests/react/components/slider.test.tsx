import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Slider } from '@cerberus-design/react'

describe('Slider Component', () => {
  test('should render a slider element', () => {
    render(
      <Slider>
        <Slider.Label>Test</Slider.Label>
      </Slider>,
    )
    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })
})
