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

  test('should reflect a controlled value', () => {
    const { rerender } = render(<CircularProgress value={25} />)
    expect(
      screen.getByRole('progressbar').getAttribute('aria-valuenow'),
    ).toEqual('25')
    expect(screen.getByText('25%')).toBeInTheDocument()

    rerender(<CircularProgress value={80} />)
    expect(
      screen.getByRole('progressbar').getAttribute('aria-valuenow'),
    ).toEqual('80')
    expect(screen.getByText('80%')).toBeInTheDocument()
  })

  test('should render a ReactNode label', () => {
    render(
      <CircularProgress
        defaultValue={60}
        label={<strong data-testid="custom-label">Loading</strong>}
      />,
    )
    const label = screen.getByTestId('custom-label')
    expect(label).toHaveTextContent('Loading')
    expect(label.parentElement?.getAttribute('data-part')).toEqual('label')
    expect(screen.queryByText('Done')).not.toBeInTheDocument()
  })

  test('should hide the value text with hideValueText', () => {
    const { container } = render(
      <CircularProgress defaultValue={40} label="Uploading" hideValueText />,
    )
    expect(screen.queryByText('40%')).not.toBeInTheDocument()
    expect(container.querySelector('[data-part="value-text"]')).toBeNull()
    expect(screen.getByText('Uploading')).toBeInTheDocument()
  })

  test('should apply the size variant to the root', () => {
    const { container: xs } = render(<CircularProgress defaultValue={10} />)
    const { container: lg } = render(
      <CircularProgress defaultValue={10} size="lg" />,
    )
    const xsRoot = xs.querySelector('[data-part="root"]')!
    const lgRoot = lg.querySelector('[data-part="root"]')!
    expect(xsRoot.className).toContain('circular-progress__root--size_xs')
    expect(lgRoot.className).toContain('circular-progress__root--size_lg')
  })

  test('should render the parts in the circle and the info group', () => {
    const { container } = render(<CircularProgress defaultValue={50} />)
    const circle = container.querySelector('[data-part="circle"]')!
    expect(circle.querySelector('[data-part="circle-track"]')).not.toBeNull()
    expect(circle.querySelector('[data-part="circle-range"]')).not.toBeNull()

    const infoGroup = container.querySelector('[data-part="info-group"]')!
    expect(infoGroup.getAttribute('data-scope')).toEqual('progress')
    expect(infoGroup.className).toContain('circular-progress__infoGroup')
    expect(infoGroup).toHaveTextContent('50%')
    expect(infoGroup).toHaveTextContent('Done')
  })

  test('should override a part with a direct part child', () => {
    render(
      <CircularProgress defaultValue={50}>
        <CircularProgress.InfoGroup data-testid="info">
          <span>Custom</span>
        </CircularProgress.InfoGroup>
      </CircularProgress>,
    )
    const info = screen.getByTestId('info')
    expect(info).toHaveTextContent('Custom')
    expect(screen.queryByText('Done')).not.toBeInTheDocument()
    expect(screen.queryByText('50%')).not.toBeInTheDocument()
  })

  test('should compose the primitives with InfoGroup', () => {
    const { container } = render(
      <CircularProgress.Root defaultValue={30} size="sm">
        <CircularProgress.Circle>
          <CircularProgress.CircleTrack />
          <CircularProgress.CircleRange />
        </CircularProgress.Circle>
        <CircularProgress.InfoGroup>
          <CircularProgress.ValueText />
          <CircularProgress.Label>Syncing</CircularProgress.Label>
        </CircularProgress.InfoGroup>
      </CircularProgress.Root>,
    )
    const root = container.querySelector('[data-part="root"]')!
    expect(root.className).toContain('circular-progress__root--size_sm')
    const infoGroup = container.querySelector('[data-part="info-group"]')!
    expect(infoGroup).toHaveTextContent('30%')
    expect(infoGroup).toHaveTextContent('Syncing')
  })
  test('should render the root asChild and keep providing context', () => {
    render(
      <CircularProgress.Root asChild defaultValue={40} size="sm">
        <section data-testid="root">
          <CircularProgress.InfoGroup>
            <CircularProgress.ValueText />
          </CircularProgress.InfoGroup>
          <CircularProgress.Context>
            {(progress) => <p data-testid="percent">{progress.percent}</p>}
          </CircularProgress.Context>
        </section>
      </CircularProgress.Root>,
    )
    const root = screen.getByTestId('root')
    expect(root.tagName).toBe('SECTION')
    expect(root).toHaveAttribute('data-part', 'root')
    expect(root.className).toContain('circular-progress__root--size_sm')
    expect(screen.getByText('40%')).toBeInTheDocument()
    expect(screen.getByTestId('percent')).toHaveTextContent('40')
  })
})
