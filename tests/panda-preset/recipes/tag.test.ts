import { describe, test, expect } from 'bun:test'
import { recipes } from '@cerberus-design/panda-preset'

describe('tag recipe', () => {
  const { tag } = recipes

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

  test('should have an neutral palette variant', () => {
    expect(tag.variants?.palette.neutral).toMatchObject({
      colorPalette: 'neutral',
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
      color: 'neutral.text.initial',
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

  test('should have a rounded shape variant', () => {
    expect(tag.variants?.shape.rounded).toMatchObject({
      fontWeight: 600,
      h: '1.625rem',
      pxi: '3',
      rounded: 'md',
      textStyle: 'label-md',
    })
  })

  test('should have default variants', () => {
    expect(tag.defaultVariants).toMatchObject({
      palette: 'neutral',
      usage: 'filled',
      shape: 'pill',
    })
  })
})
