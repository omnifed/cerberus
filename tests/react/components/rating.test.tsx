import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import {
  CerberusProvider,
  Rating,
  useRatingGroup,
  type UseRatingGroupContext,
  type UseRatingGroupItemContext,
} from '@cerberus-design/react'
import { StarFilled } from '@carbon/icons-react'
import { makeConfig } from '@/utils'

describe('Rating', () => {
  const config = makeConfig()

  test('should render a rating element', () => {
    render(
      <CerberusProvider config={config}>
        <Rating defaultValue={3}>{() => <StarFilled size={24} />}</Rating>
      </CerberusProvider>,
    )
    expect(screen.getByRole('radiogroup')).toBeInTheDocument()
  })

  test('should render one item per count', () => {
    const { container, rerender } = render(
      <CerberusProvider config={config}>
        <Rating defaultValue={1} />
      </CerberusProvider>,
    )
    expect(container.querySelectorAll('[data-part="item"]')).toHaveLength(5)

    rerender(
      <CerberusProvider config={config}>
        <Rating count={3} defaultValue={1} />
      </CerberusProvider>,
    )
    expect(container.querySelectorAll('[data-part="item"]')).toHaveLength(3)
  })

  test('should highlight items up to the value', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <Rating name="score" defaultValue={3} />
      </CerberusProvider>,
    )
    expect(
      container.querySelectorAll('[data-part="item"][data-highlighted]'),
    ).toHaveLength(3)
    expect(container.querySelector('input[name="score"]')).toHaveValue('3')
  })

  test('should pass the item state to the render function', () => {
    render(
      <CerberusProvider config={config}>
        <Rating count={4} defaultValue={2.5} allowHalf>
          {({ half, highlighted }: UseRatingGroupItemContext) => {
            if (half) return <span>half</span>
            if (highlighted) return <span>full</span>
            return <span>empty</span>
          }}
        </Rating>
      </CerberusProvider>,
    )
    expect(screen.getAllByText('full')).toHaveLength(2)
    expect(screen.getAllByText('half')).toHaveLength(1)
    expect(screen.getAllByText('empty')).toHaveLength(1)
  })

  test('should render the default star icons', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <Rating defaultValue={2} />
      </CerberusProvider>,
    )
    const items = container.querySelectorAll('[data-part="item"]')
    items.forEach((item) => expect(item.querySelector('svg')).not.toBeNull())
  })

  test('should render a label and readOnly state', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <Rating defaultValue={2} label="Rate it" readOnly />
      </CerberusProvider>,
    )
    expect(screen.getByText('Rate it')).toHaveAttribute('data-part', 'label')
    expect(container.querySelector('[data-part="control"]')).toHaveAttribute(
      'data-readonly',
    )
  })

  test('should not render a label without one', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <Rating defaultValue={2} />
      </CerberusProvider>,
    )
    expect(container.querySelector('[data-part="label"]')).toBeNull()
  })

  test('should patch parts with empty part children', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <Rating defaultValue={2} label="Patched label" name="patched">
          <Rating.Label data-testid="label" />
          <Rating.Control data-testid="control" />
          <Rating.Item index={0} data-testid="item" />
          <Rating.HiddenInput data-testid="input" />
        </Rating>
      </CerberusProvider>,
    )
    expect(screen.getByTestId('label')).toHaveTextContent('Patched label')
    expect(screen.getByTestId('control')).toHaveAttribute(
      'data-part',
      'control',
    )
    // The item patch applies to every item and keeps its index
    const items = screen.getAllByTestId('item')
    expect(items).toHaveLength(5)
    expect(items[0].querySelector('svg')).not.toBeNull()
    expect(screen.getByTestId('input')).toHaveValue('2')
    expect(container.querySelectorAll('[data-part="item"]')).toHaveLength(5)
  })

  test('should replace part content with part children', () => {
    render(
      <CerberusProvider config={config}>
        <Rating count={3} defaultValue={1} label="Ignored">
          <Rating.Label>Custom label</Rating.Label>
          <Rating.ItemContext>
            {({ highlighted }) => <span>{highlighted ? 'on' : 'off'}</span>}
          </Rating.ItemContext>
        </Rating>
      </CerberusProvider>,
    )
    expect(screen.getByText('Custom label')).toBeInTheDocument()
    expect(screen.queryByText('Ignored')).toBeNull()
    expect(screen.getAllByText('on')).toHaveLength(1)
    expect(screen.getAllByText('off')).toHaveLength(2)
  })

  test('should replace the control content with control children', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <Rating defaultValue={1}>
          <Rating.Control>
            <span>custom control</span>
          </Rating.Control>
        </Rating>
      </CerberusProvider>,
    )
    expect(screen.getByText('custom control')).toBeInTheDocument()
    expect(container.querySelector('[data-part="item"]')).toBeNull()
  })

  test('should contain all the parts', () => {
    expect(Rating.El).toBe(Rating)
    expect(Rating.Root).not.toBeNull()
    expect(Rating.Label).not.toBeNull()
    expect(Rating.Control).not.toBeNull()
    expect(Rating.Item).not.toBeNull()
    expect(Rating.Context).not.toBeNull()
    expect(Rating.ItemContext).not.toBeNull()
    expect(Rating.HiddenInput).not.toBeNull()
    expect(Rating.RootProvider).not.toBeNull()
  })

  test('should render the primitives', () => {
    render(
      <CerberusProvider config={config}>
        <Rating.Root
          defaultValue={3}
          orientation="horizontal"
          palette="warning"
          size="md"
        >
          <Rating.Label>This is a custom rating</Rating.Label>

          <Rating.Control>
            <Rating.Context>
              {(context: UseRatingGroupContext) =>
                context.items.map((item) => (
                  <Rating.Item key={item} index={item}>
                    <Rating.ItemContext>
                      {() => <StarFilled size={24} />}
                    </Rating.ItemContext>
                  </Rating.Item>
                ))
              }
            </Rating.Context>
          </Rating.Control>
          <Rating.HiddenInput />
        </Rating.Root>
      </CerberusProvider>,
    )

    expect(screen.getByRole('radiogroup')).toBeInTheDocument()
    expect(screen.getByText('This is a custom rating')).toBeInTheDocument()
  })

  test('should render the root asChild and keep providing context', () => {
    render(
      <CerberusProvider config={config}>
        <Rating.Root asChild defaultValue={1} count={2}>
          <section data-testid="root">
            <Rating.Control>
              <Rating.Context>
                {(context) =>
                  context.items.map((item) => (
                    <Rating.Item key={item} index={item}>
                      {String(item)}
                    </Rating.Item>
                  ))
                }
              </Rating.Context>
            </Rating.Control>
          </section>
        </Rating.Root>
      </CerberusProvider>,
    )
    const root = screen.getByTestId('root')
    expect(root.tagName).toBe('SECTION')
    expect(root).toHaveAttribute('data-part', 'root')
    expect(screen.getAllByRole('radio')).toHaveLength(2)
  })

  test('should render the item asChild and keep providing item context', () => {
    render(
      <CerberusProvider config={config}>
        <Rating.Root defaultValue={1} count={1}>
          <Rating.Control>
            <Rating.Item asChild index={1}>
              <span data-testid="item">
                <Rating.ItemContext>
                  {({ highlighted }) => (highlighted ? 'lit' : 'dim')}
                </Rating.ItemContext>
              </span>
            </Rating.Item>
          </Rating.Control>
        </Rating.Root>
      </CerberusProvider>,
    )
    expect(screen.getByTestId('item').tagName).toBe('SPAN')
    expect(screen.getByTestId('item')).toHaveTextContent('lit')
  })

  test('should render a RootProvider driven by useRatingGroup', () => {
    function Controlled() {
      const rating = useRatingGroup({ count: 4, defaultValue: 2 })
      return (
        <Rating.RootProvider value={rating} data-testid="root">
          <Rating.Label>Provided label</Rating.Label>
          <Rating.Control>
            <Rating.Context>
              {(context) =>
                context.items.map((item) => (
                  <Rating.Item key={item} index={item} />
                ))
              }
            </Rating.Context>
          </Rating.Control>
        </Rating.RootProvider>
      )
    }
    const { container } = render(
      <CerberusProvider config={config}>
        <Controlled />
      </CerberusProvider>,
    )
    expect(screen.getByTestId('root')).toHaveAttribute('data-part', 'root')
    expect(container.querySelectorAll('[data-part="item"]')).toHaveLength(4)
    expect(
      container.querySelectorAll('[data-part="item"][data-highlighted]'),
    ).toHaveLength(2)
  })
})
