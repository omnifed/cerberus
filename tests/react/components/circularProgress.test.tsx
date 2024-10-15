import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { CircularProgress } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('CircularProgress', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a progress element', () => {
    render(<CircularProgress title="test-0" now={0} />)
    expect(screen.getByRole('progressbar')).toBeTruthy()
    expect(screen.getByText('0%')).toBeTruthy()
    expect(screen.getByText('Done')).toBeTruthy()
  })

  test('should render a progress element with a now', () => {
    render(<CircularProgress title="test-50" now={50} />)
    expect(
      screen.getByRole('progressbar').getAttribute('aria-valuenow'),
    ).toEqual('50')
    expect(screen.getByText('50%')).toBeTruthy()
    expect(screen.getByText('Done')).toBeTruthy()
  })

  test('should render a progress element with a label', () => {
    render(<CircularProgress title="test-100" now={100} label="Complete" />)
    expect(screen.getByText('Complete')).toBeTruthy()
  })
})
