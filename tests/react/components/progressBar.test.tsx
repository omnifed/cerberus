import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { ProgressBar } from '@cerberus-design/react'

describe('ProgressBar', () => {
  test('should render a progress bar element', () => {
    render(<ProgressBar id="test" label="test label" now={0} />)
    const root = screen.getByRole('progressbar')
    expect(root).toBeInTheDocument()
    expect(root).toHaveAttribute('id', 'test')
    expect(root).toHaveAttribute('aria-label', 'test label')
    expect(root).toHaveAttribute('aria-valuemin', '0')
    expect(root).toHaveAttribute('aria-valuemax', '100')
    expect(root).toHaveAttribute('data-scope', 'progress-bar')
    expect(root).toHaveAttribute('data-part', 'root')
  })

  test('should render a progress bar element with a now', () => {
    render(<ProgressBar id="test" label="test label" now={50} />)
    const root = screen.getByRole('progressbar')
    expect(root).toHaveAttribute('aria-valuenow', '50')

    const bar = root.querySelector('[data-part="bar"]') as HTMLElement
    expect(bar).toHaveAttribute('data-scope', 'progress-bar')
    expect(bar.style.width).toBe('50%')
    expect(bar).toHaveAttribute('data-complete', 'false')
    expect(bar).not.toHaveAttribute('data-state')
  })

  test('should clamp the now value and mark the bar complete', () => {
    render(<ProgressBar id="test" label="test label" now={150} />)
    const root = screen.getByRole('progressbar')
    expect(root).toHaveAttribute('aria-valuenow', '100')

    const bar = root.querySelector('[data-part="bar"]') as HTMLElement
    expect(bar.style.width).toBe('100%')
    expect(bar).toHaveAttribute('data-complete', 'true')
  })

  test('should render a progress bar element with an indeterminate state', () => {
    render(<ProgressBar id="test" label="test label" indeterminate />)
    const root = screen.getByRole('progressbar')
    expect(root).toHaveAttribute('aria-valuenow', '0')

    const bar = root.querySelector('[data-part="bar"]') as HTMLElement
    expect(bar).toHaveAttribute('data-state', 'indeterminate')
    expect(bar.style.width).toBe('50%')
  })

  test('should expose the primitives on the compound component', () => {
    expect(ProgressBar.El).toBe(ProgressBar)

    render(
      <ProgressBar.Root aria-label="custom" aria-valuenow={25} size="sm">
        <ProgressBar.Bar style={{ width: '25%' }} />
      </ProgressBar.Root>,
    )
    const root = screen.getByRole('progressbar', { name: 'custom' })
    expect(root).toHaveAttribute('aria-valuemin', '0')
    expect(root).toHaveAttribute('aria-valuemax', '100')
    expect(root).toHaveAttribute('aria-valuenow', '25')
    expect(root.querySelector('[data-part="bar"]')).toBeInTheDocument()
  })
})
