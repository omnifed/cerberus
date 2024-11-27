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

  test('should render a text element with a custom element', () => {
    render(<Text as="h1">Hello, world!</Text>)
    expect(screen.getByText(/Hello, world!/i)).toBeTruthy()
    expect(screen.getByRole('heading')).toBeTruthy()
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
