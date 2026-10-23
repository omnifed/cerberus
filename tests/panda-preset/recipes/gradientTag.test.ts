import { createGradientVariants, recipes } from '@cerberus/panda-preset'
import { getGradients } from '@cerberus/tokens'
import { describe, expect, test } from 'bun:test'

describe('gradientTag recipe', () => {
  const { gradientTag } = recipes

  test('should be exported', () => {
    expect(gradientTag).toBeDefined()
  })

  test('should have a base style', () => {
    expect(gradientTag.base).toMatchObject({
      alignItems: 'center',
      display: 'inline-flex',
      gap: 'xs',
      justifyContent: 'center',
      lineHeight: '0',
      textTransform: 'capitalize',
      userSelect: 'none',
      whiteSpace: 'nowrap',
    })
  })

  test('should have gradient variants', () => {
    expect(gradientTag.variants.gradient).toMatchObject(createGradientVariants())
  })

  test('should have an outlined usage variant', () => {
    expect(gradientTag.variants?.usage.outlined).toMatchObject({
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

  test('should have a pill shape variant', () => {
    expect(gradientTag.variants?.shape.pill).toMatchObject({
      fontWeight: 400,
      h: '1.5rem',
      pxi: '2',
      rounded: 'full',
      textStyle: 'label-sm',
    })
  })

  test('should have a square shape variant', () => {
    expect(gradientTag.variants?.shape.square).toMatchObject({
      fontWeight: 600,
      h: '1.625rem',
      pxi: '3',
      rounded: 'md',
      textStyle: 'label-md',
    })
  })

  test('should have compound variants', () => {
    expect(gradientTag.compoundVariants).toMatchObject(
      getGradients().map((name) => ({
        gradient: name,
        usage: 'outlined',
        css: {
          borderColor: 'transparent',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
          bgColor: 'page.surface.initial',
          borderGradient: name,
          color: 'page.text.initial',
        },
      })),
    )
  })

  test('should have default variants', () => {
    expect(gradientTag.defaultVariants).toMatchObject({
      gradient: 'charon-light',
      shape: 'pill',
    })
  })
})
