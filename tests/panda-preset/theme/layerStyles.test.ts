import { describe, test, expect } from 'bun:test'
import { layerStyles } from '@cerberus/panda-preset'

describe('layerStyles', () => {
  type LayerStyles = {
    outline: {
      subtle: Record<string, unknown>
      solid: Record<string, unknown>
    }
    indicator: {
      bottom: Record<string, unknown>
      top: Record<string, unknown>
      start: Record<string, unknown>
      end: Record<string, unknown>
    }
    disabled: Record<string, unknown>
    none: Record<string, unknown>
  }

  const layerStylesTyped = layerStyles as unknown as LayerStyles

  test('should export a layerStyles object', () => {
    expect(layerStyles).toBeDefined()
  })

  test('should have a outline.subtle layer style', () => {
    expect(layerStylesTyped.outline.subtle).toBeDefined()
  })

  test('should have a outline.solid layer style', () => {
    expect(layerStylesTyped.outline.solid).toBeDefined()
  })

  test('should have a bottom indicator layer style', () => {
    expect(layerStylesTyped.indicator.bottom).toBeDefined()
  })

  test('should have a top indicator layer style', () => {
    expect(layerStylesTyped.indicator.top).toBeDefined()
  })

  test('should have a start indicator layer style', () => {
    expect(layerStylesTyped.indicator.start).toBeDefined()
  })

  test('should have an end indicator layer style', () => {
    expect(layerStylesTyped.indicator.end).toBeDefined()
  })

  test('should have a disabled layer style', () => {
    expect(layerStylesTyped.disabled).toBeDefined()
  })

  test('should have a none layer style', () => {
    expect(layerStylesTyped.none).toBeDefined()
  })
})
