import { describe, test, expect } from 'bun:test'
import { textStyles } from '@cerberus/panda-preset'

describe('textStyles', () => {
  test('should export a textStyles object', () => {
    expect(textStyles).toBeDefined()
  })

  test('should export a textStyles object with a display-sm key', () => {
    expect(textStyles['display-sm']).toBeDefined()
  })

  test('should export a textStyles object with a display-md key', () => {
    expect(textStyles['display-md']).toBeDefined()
  })

  test('should export a textStyles object with a display-lg key', () => {
    expect(textStyles['display-lg']).toBeDefined()
  })

  test('should export a textStyles object with a h1 key', () => {
    expect(textStyles.h1).toBeDefined()
  })

  test('should export a textStyles object with a h2 key', () => {
    expect(textStyles.h2).toBeDefined()
  })

  test('should export a textStyles object with a h3 key', () => {
    expect(textStyles.h3).toBeDefined()
  })

  test('should export a textStyles object with a h4 key', () => {
    expect(textStyles.h4).toBeDefined()
  })

  test('should export a textStyles object with a h5 key', () => {
    expect(textStyles.h5).toBeDefined()
  })

  test('should export a textStyles object with a h6 key', () => {
    expect(textStyles.h6).toBeDefined()
  })

  test('should export a textStyles object with a body-xs key', () => {
    expect(textStyles['body-xs']).toBeDefined()
  })

  test('should export a textStyles object with a body-sm key', () => {
    expect(textStyles['body-sm']).toBeDefined()
  })

  test('should export a textStyles object with a body-md key', () => {
    expect(textStyles['body-md']).toBeDefined()
  })

  test('should export a textStyles object with a body-lg key', () => {
    expect(textStyles['body-lg']).toBeDefined()
  })

  test('should export a textStyles object with a body-xl key', () => {
    expect(textStyles['body-xl']).toBeDefined()
  })

  test('should export a textStyles object with a body-2xl key', () => {
    expect(textStyles['body-2xl']).toBeDefined()
  })

  test('should export a textStyles object with a mono-xs key', () => {
    expect(textStyles['mono-xs']).toBeDefined()
  })

  test('should export a textStyles object with a mono-sm key', () => {
    expect(textStyles['mono-sm']).toBeDefined()
  })

  test('should export a textStyles object with a mono-md key', () => {
    expect(textStyles['mono-md']).toBeDefined()
  })

  test('should export a textStyles object with a mono-lg key', () => {
    expect(textStyles['mono-lg']).toBeDefined()
  })

  test('should export a textStyles object with a link key', () => {
    expect(textStyles.link).toBeDefined()
  })
})
