import { describe, test, expect } from 'bun:test'
import {
  NEUTRAL,
  ACTION,
  INFO,
  SUCCESS,
  WARNING,
  DANGER,
  action,
  neutral,
  info,
  success,
  warning,
  danger,
  allPalettes,
} from '@cerberus-design/panda-preset'

describe('recipe palettes', () => {
  test('should export NEUTRAL', () => {
    expect(NEUTRAL).toBeDefined()
  })

  test('should export ACTION', () => {
    expect(ACTION).toBeDefined()
  })

  test('should export INFO', () => {
    expect(INFO).toBeDefined()
  })

  test('should export SUCCESS', () => {
    expect(SUCCESS).toBeDefined()
  })

  test('should export WARNING', () => {
    expect(WARNING).toBeDefined()
  })

  test('should export DANGER', () => {
    expect(DANGER).toBeDefined()
  })

  test('should export action', () => {
    expect(action).toBeDefined()
    expect(action).toMatchObject({
      colorPalette: ACTION,
    })
  })

  test('should export neutral', () => {
    expect(neutral).toBeDefined()
    expect(neutral).toMatchObject({
      colorPalette: NEUTRAL,
    })
  })

  test('should export info', () => {
    expect(info).toBeDefined()
    expect(info).toMatchObject({
      colorPalette: INFO,
    })
  })

  test('should export success', () => {
    expect(success).toBeDefined()
    expect(success).toMatchObject({
      colorPalette: SUCCESS,
    })
  })

  test('should export warning', () => {
    expect(warning).toBeDefined()
    expect(warning).toMatchObject({
      colorPalette: WARNING,
    })
  })

  test('should export danger', () => {
    expect(danger).toBeDefined()
    expect(danger).toMatchObject({
      colorPalette: DANGER,
    })
  })

  test('should export allPalettes', () => {
    expect(allPalettes).toBeDefined()
    expect(allPalettes).toMatchObject({
      action,
      neutral,
      info,
      success,
      warning,
      danger,
    })
  })
})
