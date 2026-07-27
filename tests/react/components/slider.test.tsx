import { describe, test, expect } from 'bun:test'
import { render, screen, waitFor } from '@testing-library/react'
import { Slider } from '@cerberus-design/react'

describe('Slider Component', () => {
  test('should render a slider element', async () => {
    render(
      <Slider defaultValue={[50]}>
        <Slider.Label>Test</Slider.Label>
        <Slider.ValueText />
      </Slider>,
    )
    await waitFor(() => {
      expect(screen.getByText(/test/i)).toBeInTheDocument()
      expect(screen.getByText(/50/i)).toBeInTheDocument()
    })
  })
})
