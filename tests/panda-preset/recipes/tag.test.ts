import { describe, test, expect } from 'bun:test'
import { recipes } from '@cerberus-design/panda-preset'

describe('tag recipe', () => {
  const { tag } = recipes
  const PAGE_TEXT_INITIAL = 'page.text.initial'
  const outlineGradientCss = {
    borderColor: 'transparent',
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
    color: PAGE_TEXT_INITIAL,
  }

  test('should be exported', () => {
    expect(tag).toBeDefined()
  })

  test('should have a base style', () => {
    expect(tag.base).toMatchObject({
      alignItems: 'center',
      display: 'inline-flex',
      gap: '2',
      justifyContent: 'center',
      lineHeight: '0',
      userSelect: 'none',
      whiteSpace: 'nowrap',
    })
  })

  test('should have an page palette variant', () => {
    expect(tag.variants?.palette.page).toMatchObject({
      colorPalette: 'page',
    })
  })

  test('should have an info palette variant', () => {
    expect(tag.variants?.palette.info).toMatchObject({
      colorPalette: 'info',
    })
  })

  test('should have an success palette variant', () => {
    expect(tag.variants?.palette.success).toMatchObject({
      colorPalette: 'success',
    })
  })

  test('should have an warning palette variant', () => {
    expect(tag.variants?.palette.warning).toMatchObject({
      colorPalette: 'warning',
    })
  })

  test('should have an danger palette variant', () => {
    expect(tag.variants?.palette.danger).toMatchObject({
      colorPalette: 'danger',
    })
  })

  test('should have an outlined usage variant', () => {
    expect(tag.variants?.usage.outlined).toMatchObject({
      bgColor: 'inherit',
      border: '1.5px solid',
      borderColor: 'colorPalette.border.initial',
      _pagePalette: {
        color: PAGE_TEXT_INITIAL,
      },
      _warningPalette: {
        color: PAGE_TEXT_INITIAL,
      },
    })
  })

  test('should have a filled usage variant', () => {
    expect(tag.variants?.usage.filled).toMatchObject({
      bgColor: 'colorPalette.surface.200',
    })
  })

  test('should have a pill shape variant', () => {
    expect(tag.variants?.shape.pill).toMatchObject({
      fontWeight: 400,
      h: '1.5rem',
      pxi: '2',
      rounded: 'full',
      textStyle: 'label-sm',
    })
  })

  test('should have a square shape variant', () => {
    expect(tag.variants?.shape.square).toMatchObject({
      fontWeight: 600,
      h: '1.625rem',
      pxi: '3',
      rounded: 'md',
      textStyle: 'label-md',
    })
  })

  test('should have default variants', () => {
    expect(tag.defaultVariants).toMatchObject({
      palette: 'page',
      usage: 'filled',
      shape: 'pill',
    })
  })

  test('should have a compound variants for outlined usage with a gradient and square shape', () => {
    expect(tag.compoundVariants).toMatchObject([
      {
        usage: 'outlined',
        gradient: 'amphiaraus-light',
        shape: 'square',
        css: {
          ...outlineGradientCss,
          backgroundImage:
            'conic-gradient(var(--cerberus-colors-page-surface-initial) 0 0), linear-gradient(to top right, #9ACFEE, #E6F3FB)',
        },
      },
      {
        usage: 'outlined',
        gradient: 'thanatos-light',
        shape: 'square',
        css: {
          ...outlineGradientCss,
          backgroundImage:
            'conic-gradient(var(--cerberus-colors-page-surface-initial) 0 0), linear-gradient(to top right, #71D192, #E8F8ED)',
        },
      },
      {
        usage: 'outlined',
        gradient: 'charon-dark',
        shape: 'square',
        css: {
          ...outlineGradientCss,
          backgroundImage:
            'conic-gradient(var(--cerberus-colors-page-surface-initial) 0 0), linear-gradient(to top right, #BB93E1, #EFE5F8)',
        },
      },
    ])
  })
})
