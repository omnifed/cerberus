import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { CircularProgress } from '@cerberus-design/react'

describe('CircularProgress', () => {
  test('should render a progress element', () => {
    render(<CircularProgress label="not started" defaultValue={0} />)
    expect(screen.getByText(/not started/i)).toBeInTheDocument()
  })

  test('should render a progress element with a now', () => {
    render(<CircularProgress defaultValue={50} />)
    expect(
      screen.getByRole('progressbar').getAttribute('aria-valuenow'),
    ).toEqual('50')
    expect(screen.getByText('50%')).toBeInTheDocument()
    expect(screen.getByText('Done')).toBeInTheDocument()
  })
})
