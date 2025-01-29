import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup } from '@testing-library/react'
import { FieldParts } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('FieldParts', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should contain all the parts', () => {
    expect(FieldParts).toBeDefined()
    expect(FieldParts.Root).not.toBeNull()
    expect(FieldParts.Label).not.toBeNull()
    expect(FieldParts.Input).not.toBeNull()
    expect(FieldParts.Textarea).not.toBeNull()
    expect(FieldParts.HelperText).not.toBeNull()
    expect(FieldParts.ErrorText).not.toBeNull()
    expect(FieldParts.StartIndicator).not.toBeNull()
    expect(FieldParts.StatusIndicator).not.toBeNull()
  })
})
