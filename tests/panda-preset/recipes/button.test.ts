import { describe, test, expect } from 'bun:test'
import { recipes } from '@cerberus-design/panda-preset'

describe('button recipe', () => {
  const { button } = recipes
  const initialText = 'colorPalette.text.initial'

  test('should be exported', () => {
    expect(button).toBeDefined()
  })

  test('should have a base style', () => {
    expect(button.base).toMatchObject({
      alignItems: 'center',
      display: 'inline-flex',
      fontWeight: '600',
      gap: '2',
      justifyContent: 'center',
      lineHeight: '0',
      outline: 'none',
      textDecoration: 'none',
      transitionProperty: 'background-color, color',
      transitionDuration: 'fast',
      transitionTimingFunction: 'ease-in-out',
      userSelect: 'none',
      whiteSpace: 'nowrap',
      h: '3.5rem',
      pxi: '4',
      _focusVisible: {
        boxShadow: 'none',
        outline: '3px solid',
        outlineColor: 'action.border.focus',
        outlineOffset: '2px',
      },
      _disabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
      },
      _readOnly: {
        cursor: 'default',
      },
    })
  })

  test('should have an action palette variant', () => {
    expect(button.variants?.palette.action).toMatchObject({
      colorPalette: 'action',
    })
  })

  test('should have a secondaryAction palette variant', () => {
    expect(button.variants?.palette.secondaryAction).toMatchObject({
      colorPalette: 'secondaryAction',
    })
  })

  test('should have an info palette variant', () => {
    expect(button.variants?.palette.info).toMatchObject({
      colorPalette: 'info',
    })
  })

  test('should have a success palette variant', () => {
    expect(button.variants?.palette.success).toMatchObject({
      colorPalette: 'success',
    })
  })

  test('should have a warning palette variant', () => {
    expect(button.variants?.palette.warning).toMatchObject({
      colorPalette: 'warning',
    })
  })

  test('should have an danger palette variant', () => {
    expect(button.variants?.palette.danger).toMatchObject({
      colorPalette: 'danger',
    })
  })

  test('should have a text usage variant', () => {
    expect(button.variants?.usage.text).toMatchObject({
      colorPalette: 'secondaryAction',
      color: initialText,
      bgColor: 'transparent',
      border: 'none',
      transitionProperty: 'background-color, color',
      transitionDuration: 'fast',
      transitionTimingFunction: 'ease-in-out',
      _hover: {
        bgColor: 'colorPalette.ghost.hover',
      },
      _active: {
        bgColor: 'colorPalette.ghost.active',
        color: 'colorPalette.text.active',
      },
      _disabled: {
        bgColor: 'transparent',
        _active: {
          color: initialText,
        },
      },
    })
  })

  test('should have an outlined usage variant', () => {
    expect(button.variants?.usage.outlined).toMatchObject({
      bgColor: 'colorPalette.ghost.initial',
      border: '4px solid',
      borderColor: 'colorPalette.border.initial',
    })
  })

  test('should have a filled usage variant', () => {
    expect(button.variants?.usage.filled).toMatchObject({
      bgColor: 'colorPalette.bg.initial',
      color: initialText,
      _hover: {
        bgColor: 'colorPalette.bg.hover',
        _disabled: {
          bgColor: 'colorPalette.bg.initial',
        },
      },
      _active: {
        bgColor: 'colorPalette.bg.active',
      },
    })
  })

  test('should have a sharp shape variant', () => {
    expect(button.variants?.shape.sharp).toMatchObject({})
  })

  test('should have a rounded shape variant', () => {
    expect(button.variants?.shape.rounded).toMatchObject({
      pxi: '8',
      rounded: 'full',
    })
  })

  test('should have a small size variant', () => {
    expect(button.variants?.size.sm).toMatchObject({
      h: '2.75rem',
      pxi: '3',
    })
  })

  test('should have a medium size variant', () => {
    expect(button.variants?.size.md).toMatchObject({
      md: {
        h: '2.75rem',
      },
    })
  })

  test('should have default variants', () => {
    expect(button.defaultVariants).toMatchObject({
      palette: 'action',
      usage: 'filled',
      shape: 'sharp',
      size: 'md',
    })
  })
})
