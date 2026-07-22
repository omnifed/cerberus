import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Slider } from '@cerberus-design/react'

describe('Slider Component', () => {
  test('should render a slider element', () => {
    render(<Slider />)
    expect(screen.getByRole('slider')).toBeInTheDocument()
  })
})
