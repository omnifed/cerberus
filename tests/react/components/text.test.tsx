import { describe, test, expect } from 'bun:test'
import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import {
  Text,
  type Headings,
  type TextElements,
  type TextProps,
  type TextRootProps,
} from '@cerberus-design/react'

const ELEMENTS: (Headings | TextElements)[] = [
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'strong',
  'em',
  'small',
  'span',
]

describe('Text', () => {
  test('renders a paragraph by default', () => {
    render(<Text>Hello, world!</Text>)
    expect(screen.getByText(/Hello, world!/i).tagName).toBe('P')
  })

  for (const as of ELEMENTS) {
    test(`renders a ${as} element with as="${as}"`, () => {
      render(<Text as={as}>Hello, world!</Text>)
      expect(screen.getByText(/Hello, world!/i).tagName).toBe(as.toUpperCase())
    })
  }

  test('headings have the heading role', () => {
    render(<Text as="h1">Hello, world!</Text>)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  test('strong and em have their roles', () => {
    render(
      <>
        <Text as="strong">Strong</Text>
        <Text as="em">Emphasis</Text>
      </>,
    )
    expect(screen.getByRole('strong')).toHaveTextContent('Strong')
    expect(screen.getByRole('emphasis')).toHaveTextContent('Emphasis')
  })

  test('falls back to a paragraph for an unknown as value', () => {
    // @ts-expect-error `div` is not a Text element
    render(<Text as="div">Hello, world!</Text>)
    expect(screen.getByText(/Hello, world!/i).tagName).toBe('P')
  })

  test('forwards style props as atomic classes', () => {
    render(
      <Text
        as="small"
        color="page.text.100"
        textStyle={{
          base: 'heading-md',
          md: 'heading-lg',
        }}
        userSelect="none"
      >
        Hello, world!
      </Text>,
    )
    const el = screen.getByText(/Hello, world!/i)
    expect(el).toHaveClass('cerberus-textStyle_heading-md')
    expect(el).toHaveClass('md:cerberus-textStyle_heading-lg')
    expect(el).toHaveClass('cerberus-c_page.text.100')
    expect(el).toHaveClass('cerberus-us_none')
  })

  test('merges className with the style prop classes', () => {
    render(
      <Text className="custom" textStyle="body-sm">
        Hello, world!
      </Text>,
    )
    const el = screen.getByText(/Hello, world!/i)
    expect(el).toHaveClass('custom')
    expect(el).toHaveClass('cerberus-textStyle_body-sm')
  })

  test('forwards HTML attributes', () => {
    render(
      <Text
        as="h2"
        id="test-id"
        title="A title"
        aria-describedby="other"
        data-testid="text"
      >
        Hello, world!
      </Text>,
    )
    const el = screen.getByTestId('text')
    expect(el.id).toBe('test-id')
    expect(el).toHaveAttribute('title', 'A title')
    expect(el).toHaveAttribute('aria-describedby', 'other')
  })

  test('forwards ref to the default paragraph', () => {
    const ref = createRef<HTMLParagraphElement>()
    render(<Text ref={ref}>Hello, world!</Text>)
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement)
  })

  test('forwards ref to the as element', () => {
    const ref = createRef<HTMLHeadingElement>()
    render(
      <Text as="h3" ref={ref}>
        Hello, world!
      </Text>,
    )
    expect(ref.current).toBeInstanceOf(HTMLHeadingElement)
    expect(ref.current?.tagName).toBe('H3')
  })

  test('renders asChild onto its child', () => {
    render(
      <Text asChild textStyle="body-sm">
        <label htmlFor="x">Label</label>
      </Text>,
    )
    const el = screen.getByText('Label')
    expect(el.tagName).toBe('LABEL')
    expect(el).toHaveClass('cerberus-textStyle_body-sm')
  })

  test('exposes Root and El', () => {
    expect(Text.El).toBe(Text)
    render(
      <Text.Root textStyle="body-sm" data-testid="root">
        Root
      </Text.Root>,
    )
    const el = screen.getByTestId('root')
    expect(el.tagName).toBe('P')
    expect(el).toHaveClass('cerberus-textStyle_body-sm')
  })

  test('props types', () => {
    const props: TextProps<'h1'> = { as: 'h1', textStyle: 'heading-lg' }
    const rootProps: TextRootProps = { textStyle: 'body-sm' }
    expect(props.as).toBe('h1')
    expect(rootProps.textStyle).toBe('body-sm')
  })
})
