import { describe, test, expect } from 'bun:test'
import {
  getSlotRecipePalettes,
  NEUTRAL,
  ACTION,
  INFO,
  SUCCESS,
  WARNING,
  DANGER,
  BRAND,
  type Sentiment,
} from '@cerberus-design/panda-preset'

describe('recipe helpers', () => {
  const slots = ['usage', 'size', 'kind']
  const palettes: Sentiment[] = [
    NEUTRAL,
    ACTION,
    INFO,
    SUCCESS,
    WARNING,
    DANGER,
    BRAND,
  ]

  test('getSlotRecipePalettes returns all palettes', () => {
    const result = getSlotRecipePalettes(slots, palettes)
    expect(result).toEqual({
      neutral: {
        usage: { colorPalette: NEUTRAL },
        size: { colorPalette: NEUTRAL },
        kind: { colorPalette: NEUTRAL },
      },
      action: {
        usage: { colorPalette: ACTION },
        size: { colorPalette: ACTION },
        kind: { colorPalette: ACTION },
      },
      info: {
        usage: { colorPalette: INFO },
        size: { colorPalette: INFO },
        kind: { colorPalette: INFO },
      },
      success: {
        usage: { colorPalette: SUCCESS },
        size: { colorPalette: SUCCESS },
        kind: { colorPalette: SUCCESS },
      },
      warning: {
        usage: { colorPalette: WARNING },
        size: { colorPalette: WARNING },
        kind: { colorPalette: WARNING },
      },
      danger: {
        usage: { colorPalette: DANGER },
        size: { colorPalette: DANGER },
        kind: { colorPalette: DANGER },
      },
      brand: {
        usage: { colorPalette: BRAND },
        size: { colorPalette: BRAND },
        kind: { colorPalette: BRAND },
      },
    })
  })
})
