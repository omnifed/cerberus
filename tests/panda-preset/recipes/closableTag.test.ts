import { actionPalettes, danger, recipes } from '@cerberus/panda-preset'
import { describe, expect, test } from 'bun:test'

describe('closableTag recipe', () => {
  const { closableTag } = recipes

  test('should be exported', () => {
    expect(closableTag).toBeDefined()
  })

  test('should have a base style', () => {
    expect(closableTag.base).toMatchObject({
      alignItems: 'center',
      display: 'inline-flex',
      gap: 'xs',
      justifyContent: 'center',
      lineHeight: '0',
      textTransform: 'capitalize',
      userSelect: 'none',
      whiteSpace: 'nowrap',
      fontWeight: 400,
      h: '1.5rem',
      px: 2,
      pe: 0,
      rounded: 'full',
      textStyle: 'label-sm',
    })
  })

  test('should have palette variants', () => {
    expect(closableTag.variants?.palette).toMatchObject({ ...actionPalettes, danger })
  })

  test('should have an outlined usage variant', () => {
    expect(closableTag.variants?.usage.outlined).toMatchObject({
      bgColor: 'inherit',
      border: '1.5px solid',
      borderColor: 'colorPalette.border.initial',
      color: 'colorPalette.text.100',
      _pagePalette: {
        color: 'page.text.initial',
      },
      _warningPalette: {
        color: 'colorPalette.text.initial',
      },
    })
  })

  test('should have a usage.filled variant', () => {
    expect(closableTag.variants?.usage.filled).toMatchObject({
      bgColor: 'colorPalette.bg.initial',
      color: 'colorPalette.text.inverse',
    })
  })

  test('should have default variants', () => {
    expect(closableTag.defaultVariants).toMatchObject({
      palette: 'secondaryAction',
      usage: 'filled',
    })
  })
})
