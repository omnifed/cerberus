import { beforeAll, afterAll, afterEach, expect } from 'bun:test'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'

expect.extend(matchers)

// Optional: cleans up `render` after each test
afterEach(() => {
  cleanup()
})

const originalConsoleError = console.error

beforeAll(() => {
  console.error = (...args: any[]) => {
    const message = typeof args[0] === 'string' ? args[0] : ''
    // Suppress React 18 act() warnings caused by Zag.js state machines
    if (message.includes('was not wrapped in act(...)')) {
      return
    }
    // Suppress React 19 transition warnings if they appear
    if (message.includes('Cannot update a component')) {
      return
    }
    originalConsoleError(...args)
  }
})

afterAll(() => {
  console.error = originalConsoleError
})
