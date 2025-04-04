import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { ProgressBar } from '@cerberus-design/react'

describe('ProgressBar', () => {
  test('should render a progress bar element', () => {
    render(<ProgressBar id="test" label="test label" now={0} />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-label',
      'test label',
    )
  })

  test('should render a progress bar element with a now', () => {
    render(<ProgressBar id="test" label="test label" now={50} />)
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '50',
    )
  })

  test('should render a progress bar element with an indeterminate state', () => {
    render(<ProgressBar id="test" label="test label" indeterminate />)
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '0',
    )
  })
})
