import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup } from '@testing-library/react'
import { RadioParts } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('RadioParts', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should contain all the parts', () => {
    expect(RadioParts).toBeDefined()
    expect(RadioParts.Root).not.toBeNull()
    expect(RadioParts.Label).not.toBeNull()
    expect(RadioParts.Indicator).not.toBeNull()
    expect(RadioParts.Item).not.toBeNull()
    expect(RadioParts.ItemText).not.toBeNull()
    expect(RadioParts.ItemControl).not.toBeNull()
    expect(RadioParts.ItemHiddenInput).not.toBeNull()
  })
})
