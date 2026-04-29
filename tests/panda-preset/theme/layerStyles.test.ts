import { describe, test, expect } from 'bun:test'
import { layerStyles } from '@cerberus/panda-preset'

describe('layerStyles', () => {
  test('should export a layerStyles object', () => {
    expect(layerStyles).toBeDefined()
  })

  test('should have a bottom indicator layer style', () => {
    expect(layerStyles['indicator.bottom']).toBeDefined()
  })

  test('should have a top indicator layer style', () => {
    expect(layerStyles['indicator.top']).toBeDefined()
  })

  test('should have a start indicator layer style', () => {
    expect(layerStyles['indicator.start']).toBeDefined()
  })

  test('should have an end indicator layer style', () => {
    expect(layerStyles['indicator.end']).toBeDefined()
  })

  test('should have a disabled layer style', () => {
    expect(layerStyles.disabled).toBeDefined()
  })

  test('should have a none layer style', () => {
    expect(layerStyles.none).toBeDefined()
  })
})
