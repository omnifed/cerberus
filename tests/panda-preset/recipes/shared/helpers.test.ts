import { describe, test, expect } from 'bun:test'
import {
  getSlotRecipePalettes,
  PAGE,
  ACTION,
  SECONDARY_ACTION,
  INFO,
  SUCCESS,
  WARNING,
  DANGER,
} from '@cerberus-design/panda-preset'
import { type Sentiment } from '@cerberus/tokens'

describe('recipe helpers', () => {
  const slots = ['usage', 'size', 'kind']
  const palettes: Exclude<Sentiment, 'dataViz'>[] = [
    PAGE,
    ACTION,
    SECONDARY_ACTION,
    INFO,
    SUCCESS,
    WARNING,
    DANGER,
  ]

  test('getSlotRecipePalettes returns all palettes', () => {
    const result = getSlotRecipePalettes(slots, palettes)
    expect(result).toEqual({
      page: {
        usage: { colorPalette: PAGE },
        size: { colorPalette: PAGE },
        kind: { colorPalette: PAGE },
      },
      action: {
        usage: { colorPalette: ACTION },
        size: { colorPalette: ACTION },
        kind: { colorPalette: ACTION },
      },
      secondaryAction: {
        usage: { colorPalette: SECONDARY_ACTION },
        size: { colorPalette: SECONDARY_ACTION },
        kind: { colorPalette: SECONDARY_ACTION },
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
    })
  })
})
