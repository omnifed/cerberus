import { describe, test, expect } from 'bun:test'
import { localVarsMixin } from '@cerberus/figma'

describe('localVarsMixin', () => {
  test('mixin is exposed', () => {
    expect(localVarsMixin).toBeDefined()
  })

  test('contains public properties', () => {
    expect(localVarsMixin.localCollections()).toBeNull()
    expect(localVarsMixin.localVariables()).toBeNull()
    expect(localVarsMixin.getLocalVariables).toBeInstanceOf(Function)
  })
})
