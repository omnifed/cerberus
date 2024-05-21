import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Button } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Button', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a button element', () => {
    render(<Button>it works</Button>)
    expect(screen.getByText(/it works/i)).toBeTruthy()
  })

  test('should render a danger button', () => {
    render(<Button palette="danger">it works</Button>)
    expect(
      screen.getByText(/it works/i).classList.contains('danger'),
    ).toBeTrue()
  })
})
