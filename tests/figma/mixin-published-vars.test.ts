import { describe, test, expect } from 'bun:test'
import { publishedVarsMixin } from '@cerberus/figma'

describe('publishedVarsMixin', () => {
  test('mixin is exposed', () => {
    expect(publishedVarsMixin).toBeDefined()
  })

  test('contains public properties', () => {
    expect(publishedVarsMixin.collections()).toMatchObject({})
    expect(publishedVarsMixin.variables()).toMatchObject({})
    expect(publishedVarsMixin.createVariableList()).toMatchObject([])
    expect(publishedVarsMixin.createCollectionList()).toMatchObject([])
    expect(publishedVarsMixin.getPublishedVariables).toBeInstanceOf(Function)
  })
})
