import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus/panda-preset'

describe('admonition recipe', () => {
  const { admonition } = slotRecipes

  test('should be exported', () => {
    expect(admonition).toBeDefined()
  })

  test('should have a base style', () => {
    expect(admonition.base?.root).toMatchObject({
      color: 'colorPalette.text.100',
      p: 'lg',
      rounded: 'sm',
    })
  })

  test('should have a heading style', () => {
    expect(admonition.base?.heading).toMatchObject({
      color: 'inherit',
      mb: 'xs',
      textStyle: 'heading-xs',
    })
  })

  test('should have a description style', () => {
    expect(admonition.base?.description).toMatchObject({
      color: 'inherit',
      textStyle: 'body-sm',
      textWrap: 'pretty',
      '& > :is(a)': {
        rounded: 'sm',
        textStyle: 'link',
      },
    })
  })

  test('should have a page palette variant', () => {
    expect(admonition.variants?.palette?.page).toMatchObject({
      root: {
        colorPalette: 'page',
      },
      heading: {
        colorPalette: 'page',
      },
      description: {
        colorPalette: 'page',
      },
    })
  })

  test('should have an info palette variant', () => {
    expect(admonition.variants?.palette?.info).toMatchObject({
      root: {
        colorPalette: 'info',
      },
      heading: {
        colorPalette: 'info',
      },
      description: {
        colorPalette: 'info',
      },
    })
  })

  test('should have a success palette variant', () => {
    expect(admonition.variants?.palette?.success).toMatchObject({
      root: {
        colorPalette: 'success',
      },
      heading: {
        colorPalette: 'success',
      },
      description: {
        colorPalette: 'success',
      },
    })
  })

  test('should have a warning palette variant', () => {
    expect(admonition.variants?.palette?.warning).toMatchObject({
      root: {
        colorPalette: 'warning',
      },
      heading: {
        colorPalette: 'warning',
      },
      description: {
        colorPalette: 'warning',
      },
    })
  })

  test('should have a danger palette variant', () => {
    expect(admonition.variants?.palette?.danger).toMatchObject({
      root: {
        colorPalette: 'danger',
      },
      heading: {
        colorPalette: 'danger',
      },
      description: {
        colorPalette: 'danger',
      },
    })
  })

  test('should have a filled usage variant', () => {
    expect(admonition.variants?.usage?.filled).toMatchObject({
      root: {
        bgColor: 'colorPalette.surface.100',
      },
    })
  })

  test('should have an outlined usage variant', () => {
    expect(admonition.variants?.usage?.outlined).toMatchObject({
      root: {
        bgColor: 'page.surface.initial',
        border: '1px solid',
        borderColor: 'colorPalette.border.initial',
      },
    })
  })

  test('should have a page filled compound variant', () => {
    expect(admonition.compoundVariants?.[0]).toMatchObject({
      palette: 'page',
      usage: 'filled',
      css: {
        root: {
          bgColor: 'page.surface.200',
          color: 'page.text.initial',
        },
      },
    })
  })

  test('should have a page outlined compound variant', () => {
    expect(admonition.compoundVariants?.[1]).toMatchObject({
      palette: 'page',
      usage: 'outlined',
      css: {
        root: {
          bgColor: 'page.surface.100',
          borderColor: 'page.border.200',
          color: 'page.text.initial',
        },
      },
    })
  })

  test('should have a default palette variant', () => {
    const defaultVariants = admonition.defaultVariants as { palette: string }
    expect(defaultVariants.palette).toBe('page')
  })
})
