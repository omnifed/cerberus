import { describe, test, expect } from 'bun:test'
import { render, screen, waitFor } from '@testing-library/react'
import { Slider, useSlider } from '@cerberus-design/react'

// Thumbs are `visibility: hidden` until measured, which hides them from
// `getByRole` in happy-dom, so query them by part
const thumbs = (container: HTMLElement) => part(container, 'thumb')
const hiddenInputs = (container: HTMLElement) =>
  container.querySelectorAll('[data-part="thumb"] > input[hidden]')
const hasSlot = (el: Element, cls: string) =>
  el.className.split(' ').some((c) => c.endsWith(cls))

function part(container: HTMLElement, name: string) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      `[data-scope="slider"][data-part="${name}"]`,
    ),
  )
}

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

  test('should render the control, track, range and a thumb per value', () => {
    const { container } = render(<Slider defaultValue={[30, 80]} />)
    expect(part(container, 'control')).toHaveLength(1)
    expect(part(container, 'track')).toHaveLength(1)
    expect(part(container, 'range')).toHaveLength(1)

    const all = thumbs(container)
    expect(all).toHaveLength(2)
    expect(all[0]).toHaveAttribute('aria-valuenow', '30')
    expect(all[1]).toHaveAttribute('aria-valuenow', '80')
    expect(hiddenInputs(container)).toHaveLength(2)
  })

  test('should follow a controlled value', () => {
    const { container, rerender } = render(<Slider value={[10]} />)
    expect(thumbs(container)[0]).toHaveAttribute('aria-valuenow', '10')

    rerender(<Slider value={[20, 60]} />)
    const all = thumbs(container)
    expect(all).toHaveLength(2)
    expect(all[1]).toHaveAttribute('aria-valuenow', '60')
  })

  test('should not render a header without content children', () => {
    const { container } = render(<Slider defaultValue={[30]} />)
    const root = part(container, 'root')[0]
    expect(root.firstElementChild).toHaveAttribute('data-part', 'control')
  })

  test('should render marks with numbers and custom labels', () => {
    const { container } = render(
      <Slider
        defaultValue={[0]}
        marks={[25, { value: 50, label: 'half' }, { value: 75 }]}
      />,
    )
    expect(part(container, 'marker-group')).toHaveLength(1)
    const markers = part(container, 'marker')
    expect(markers).toHaveLength(3)
    expect(markers[0]).toHaveTextContent('25')
    expect(markers[1]).toHaveTextContent('half')
    expect(markers[2]).toHaveTextContent('75')
    const indicators = markers.map((m) => m.firstElementChild!)
    expect(
      indicators.filter((el) => hasSlot(el, 'slider__markerIndicator')),
    ).toHaveLength(3)
  })

  test('should not render marks by default', () => {
    const { container } = render(<Slider defaultValue={[0]} />)
    expect(part(container, 'marker-group')).toHaveLength(0)
  })

  test('should render the dragging indicator with showIndicator', () => {
    const { container, rerender } = render(<Slider defaultValue={[30]} />)
    expect(part(container, 'dragging-indicator')).toHaveLength(0)

    rerender(<Slider defaultValue={[30]} showIndicator />)
    expect(part(container, 'dragging-indicator')).toHaveLength(1)
  })

  test('should map orientation to the direction variant', () => {
    const { container } = render(
      <Slider defaultValue={[30]} orientation="vertical" />,
    )
    expect(
      hasSlot(part(container, 'root')[0], 'slider__root--direction_vertical'),
    ).toBe(true)
    expect(
      hasSlot(part(container, 'track')[0], 'slider__track--direction_vertical'),
    ).toBe(true)
  })

  test('should patch parts with direct part children', () => {
    const { container } = render(
      <Slider defaultValue={[30, 60]} marks={[50]}>
        <Slider.Label>Amount</Slider.Label>
        <Slider.Control data-testid="control" />
        <Slider.Track data-testid="track" />
        <Slider.Range data-testid="range" />
        <Slider.Thumb index={9} data-testid="thumb" />
        <Slider.DraggingIndicator>dragging</Slider.DraggingIndicator>
        <Slider.MarkerGroup data-testid="marker-group" />
        <Slider.Marker value={0} data-testid="marker" />
        <Slider.MarkerIndicator data-testid="marker-indicator" />
      </Slider>,
    )
    expect(screen.getByText('Amount')).toBeInTheDocument()
    expect(screen.getByTestId('control')).toHaveAttribute(
      'data-part',
      'control',
    )
    expect(screen.getByTestId('track')).toHaveAttribute('data-part', 'track')
    expect(screen.getByTestId('range')).toHaveAttribute('data-part', 'range')

    const thumbs = screen.getAllByTestId('thumb')
    expect(thumbs).toHaveLength(2)
    expect(thumbs[0]).toHaveAttribute('data-index', '0')
    expect(thumbs[1]).toHaveAttribute('data-index', '1')
    expect(screen.getAllByText('dragging')).toHaveLength(2)

    expect(screen.getByTestId('marker-group')).toBeInTheDocument()
    const marker = screen.getByTestId('marker')
    expect(marker).toHaveAttribute('data-value', '50')
    expect(
      hasSlot(
        screen.getByTestId('marker-indicator'),
        'slider__markerIndicator',
      ),
    ).toBe(true)
    // part children never leak into the header
    expect(part(container, 'control')).toHaveLength(1)
  })

  test('should replace the default thumbs and marks with Thumbs and Marks children', () => {
    const { container } = render(
      <Slider defaultValue={[30]} marks={[10, 20]}>
        <Slider.Thumbs showIndicator />
        <Slider.Marks marks={[25, 50, 75]} />
      </Slider>,
    )
    expect(thumbs(container)).toHaveLength(1)
    expect(part(container, 'dragging-indicator')).toHaveLength(1)
    expect(part(container, 'marker')).toHaveLength(3)
  })

  test('should render the primitives', () => {
    const { container } = render(
      <Slider.Root defaultValue={[20, 40]} direction="vertical">
        <Slider.Label>Primitives</Slider.Label>
        <Slider.ValueText />
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs>
            <Slider.Thumb index={0} data-testid="thumb" />
          </Slider.Thumbs>
          <Slider.Marks marks={[0, 100]}>
            <Slider.MarkerIndicator data-testid="indicator" />
          </Slider.Marks>
        </Slider.Control>
      </Slider.Root>,
    )
    expect(screen.getByText('Primitives')).toBeInTheDocument()
    expect(screen.getAllByTestId('thumb')).toHaveLength(2)
    expect(screen.getAllByTestId('indicator')).toHaveLength(2)
    expect(hiddenInputs(container)).toHaveLength(2)
    expect(
      hasSlot(thumbs(container)[0], 'slider__thumb--direction_vertical'),
    ).toBe(true)
  })

  test('should render a RootProvider driven by useSlider', () => {
    function StoreSlider() {
      const slider = useSlider({ defaultValue: [40] })
      return (
        <Slider.RootProvider value={slider}>
          <Slider.Label>Store</Slider.Label>
          <Slider.Control>
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumbs />
          </Slider.Control>
        </Slider.RootProvider>
      )
    }
    const { container } = render(<StoreSlider />)
    expect(screen.getByText('Store')).toBeInTheDocument()
    expect(thumbs(container)).toHaveLength(1)
    expect(thumbs(container)[0]).toHaveAttribute('aria-valuenow', '40')
    expect(hiddenInputs(container)).toHaveLength(1)
  })
})
