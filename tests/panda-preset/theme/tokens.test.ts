import { describe, test, expect } from 'bun:test'
import { tokens } from '@cerberus-design/panda-preset'

describe('tokens', () => {
  test('should have a fonts key', () => {
    expect(tokens.fonts).toBeDefined()
  })

  test('should have a fonts.display key', () => {
    expect(tokens.fonts.display).toBeDefined()
  })

  test('should have a fonts.sans key', () => {
    expect(tokens.fonts.sans).toBeDefined()
  })

  test('should have a fonts.mono key', () => {
    expect(tokens.fonts.mono).toBeDefined()
  })

  test('should have a fonts.monoStrong key', () => {
    expect(tokens.fonts.monoStrong).toBeDefined()
  })

  test('should have a zIndex key', () => {
    expect(tokens.zIndex).toBeDefined()
  })

  test('should have a zIndex.hide key', () => {
    expect(tokens.zIndex.hide).toBeDefined()
  })

  test('should have a zIndex.base key', () => {
    expect(tokens.zIndex.base).toBeDefined()
  })

  test('should have a zIndex.decorator key', () => {
    expect(tokens.zIndex.decorator).toBeDefined()
  })

  test('should have a zIndex.dropdown key', () => {
    expect(tokens.zIndex.dropdown).toBeDefined()
  })

  test('should have a zIndex.sticky key', () => {
    expect(tokens.zIndex.sticky).toBeDefined()
  })

  test('should have a zIndex.banner key', () => {
    expect(tokens.zIndex.banner).toBeDefined()
  })

  test('should have a zIndex.overlay key', () => {
    expect(tokens.zIndex.overlay).toBeDefined()
  })

  test('should have a zIndex.modal key', () => {
    expect(tokens.zIndex.modal).toBeDefined()
  })

  test('should have a zIndex.popover key', () => {
    expect(tokens.zIndex.popover).toBeDefined()
  })

  test('should have a zIndex.toast key', () => {
    expect(tokens.zIndex.toast).toBeDefined()
  })

  test('should have a zIndex.tooltip key', () => {
    expect(tokens.zIndex.tooltip).toBeDefined()
  })
})
