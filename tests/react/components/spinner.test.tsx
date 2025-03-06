import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Spinner } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Spinner', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a spinner', () => {
    render(<Spinner />)
    expect(screen.getByRole('status')).toBeTruthy()
  })

  test('should allow a custom size', () => {
    render(<Spinner size="1em" />)
    expect(
      screen.getByRole('status').attributes.getNamedItem('width')?.value,
    ).toEqual('1em')
    expect(
      screen.getByRole('status').attributes.getNamedItem('height')?.value,
    ).toEqual('1em')
  })
})
