import { describe, test, expect } from 'bun:test'
import { fileNodesMixin } from '@cerberus/figma'

describe('fileNodesMixin', () => {
  test('mixin is exposed', () => {
    expect(fileNodesMixin).toBeDefined()
  })

  test('contains public properties', () => {
    expect(fileNodesMixin.fileNodes()).toBeNull()
    expect(fileNodesMixin.getNodes).toBeInstanceOf(Function)
  })
})
