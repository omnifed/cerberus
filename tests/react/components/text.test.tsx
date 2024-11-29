import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Text } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Text', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a text element', () => {
    render(<Text>Hello, world!</Text>)
    expect(screen.getByText(/Hello, world!/i)).toBeTruthy()
  })

  test('should render a text element with a h1 element', () => {
    render(<Text as="h1">Hello, world!</Text>)
    expect(screen.getByText(/Hello, world!/i)).toBeTruthy()
    expect(screen.getByRole('heading')).toBeTruthy()
  })

  test('should render a text element with a h2 element', () => {
    render(<Text as="h2">Hello, world!</Text>)
    expect(screen.getByText(/Hello, world!/i)).toBeTruthy()
    expect(screen.getByRole('heading')).toBeTruthy()
  })

  test('should render a text element with a h3 element', () => {
    render(<Text as="h3">Hello, world!</Text>)
    expect(screen.getByText(/Hello, world!/i)).toBeTruthy()
    expect(screen.getByRole('heading')).toBeTruthy()
  })

  test('should render a text element with a h4 element', () => {
    render(<Text as="h4">Hello, world!</Text>)
    expect(screen.getByText(/Hello, world!/i)).toBeTruthy()
    expect(screen.getByRole('heading')).toBeTruthy()
  })

  test('should render a text element with a h5 element', () => {
    render(<Text as="h5">Hello, world!</Text>)
    expect(screen.getByText(/Hello, world!/i)).toBeTruthy()
    expect(screen.getByRole('heading')).toBeTruthy()
  })

  test('should render a text element with a h6 element', () => {
    render(<Text as="h6">Hello, world!</Text>)
    expect(screen.getByText(/Hello, world!/i)).toBeTruthy()
    expect(screen.getByRole('heading')).toBeTruthy()
  })

  test('should render a text element with a strong element', () => {
    render(<Text as="strong">Hello, world!</Text>)
    expect(screen.getByText(/Hello, world!/i)).toBeTruthy()
    expect(screen.getByRole('strong')).toBeTruthy()
  })

  test('should render a text element with an em element', () => {
    render(<Text as="em">Hello, world!</Text>)
    expect(screen.getByText(/Hello, world!/i)).toBeTruthy()
    expect(screen.getByRole('emphasis')).toBeTruthy()
  })

  test('should render a text element with a small element', () => {
    // not sure how to validate small element
    render(<Text as="small">Hello, world!</Text>)
    expect(screen.getByText(/Hello, world!/i)).toBeTruthy()
  })

  test('should render a text element with a span element', () => {
    // not sure how to validate span element
    render(<Text as="span">Hello, world!</Text>)
    expect(screen.getByText(/Hello, world!/i)).toBeTruthy()
  })

  test('should render a text element with custom styles', () => {
    render(
      <Text
        color="page.text.100"
        textStyle={{
          base: 'heading-md',
          md: 'heading-lg',
        }}
      >
        Hello, world!
      </Text>,
    )
    expect(screen.getByText(/Hello, world!/i).classList).toContain(
      'cerberus-textStyle_heading-md',
    )
  })

  test('should render a text element with an id', () => {
    render(<Text id="test-id">Hello, world!</Text>)
    expect(screen.getByText(/Hello, world!/i).id).toBe('test-id')
  })
})
