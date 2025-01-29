import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup } from '@testing-library/react'
import { CheckboxParts } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('CheckboxParts', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should contain all the parts', () => {
    expect(CheckboxParts).toBeDefined()
    expect(CheckboxParts.Root).not.toBeNull()
    expect(CheckboxParts.Label).not.toBeNull()
    expect(CheckboxParts.Control).not.toBeNull()
    expect(CheckboxParts.Group).not.toBeNull()
    expect(CheckboxParts.Indicator).not.toBeNull()
    expect(CheckboxParts.HiddenInput).not.toBeNull()
  })
})
