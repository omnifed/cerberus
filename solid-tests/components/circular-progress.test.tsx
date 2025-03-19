import { describe, test, expect } from 'vitest'
import { render, screen } from '@solidjs/testing-library'
import { CircularProgress } from '@cerberus-design/solid'

describe('CircularProgress', () => {
  test('should render a progress element', () => {
    render(() => (
      <CircularProgress id="test" label="test label" title="test-0" now={0} />
    ))
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
    expect(screen.getByText('0%')).toBeInTheDocument()
    expect(screen.getByText('Done')).toBeInTheDocument()
  })

  test('should render a progress element with a now', () => {
    render(() => (
      <CircularProgress id="test" label="test label" title="test-50" now={50} />
    ))
    expect(
      screen.getByRole('progressbar').getAttribute('aria-valuenow'),
    ).toEqual('50')
    expect(screen.getByText('50%')).toBeInTheDocument()
    expect(screen.getByText('Done')).toBeInTheDocument()
  })

  test('should render a progress element with a syntax', () => {
    render(() => (
      <CircularProgress
        id="test"
        label="test label"
        title="test-100"
        now={100}
        syntax="Complete"
      />
    ))
    expect(screen.getByText('Complete')).toBeInTheDocument()
  })
})
