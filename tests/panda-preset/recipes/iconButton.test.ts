import { describe, test, expect } from 'bun:test'
import { recipes } from '@cerberus-design/panda-preset'

describe('iconButton recipe', () => {
  const { iconButton } = recipes
  const initialText = 'colorPalette.text.initial'
  const bgInitial = 'colorPalette.bg.initial'

  test('should be exported', () => {
    expect(iconButton).toBeDefined()
  })

  test('should have a base style', () => {
    expect(iconButton.base).toMatchObject({
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
      h: '2.75rem',
      pxi: '0',
      w: '2.75rem',
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
    expect(iconButton.variants?.palette.action).toMatchObject({
      colorPalette: 'action',
    })
  })

  test('should have a secondaryAction palette variant', () => {
    expect(iconButton.variants?.palette.secondaryAction).toMatchObject({
      colorPalette: 'secondaryAction',
    })
  })

  test('should have an info palette variant', () => {
    expect(iconButton.variants?.palette.info).toMatchObject({
      colorPalette: 'info',
    })
  })

  test('should have a success palette variant', () => {
    expect(iconButton.variants?.palette.success).toMatchObject({
      colorPalette: 'success',
    })
  })

  test('should have a warning palette variant', () => {
    expect(iconButton.variants?.palette.warning).toMatchObject({
      colorPalette: 'warning',
    })
  })

  test('should have an danger palette variant', () => {
    expect(iconButton.variants?.palette.danger).toMatchObject({
      colorPalette: 'danger',
    })
  })

  test('should have a text usage variant', () => {
    expect(iconButton.variants?.usage.text).toMatchObject({
      color: 'colorPalette.text.200',
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

  test('should have a filled usage variant', () => {
    expect(iconButton.variants?.usage.filled).toMatchObject({
      bgColor: bgInitial,
      color: initialText,
      _hover: {
        bgColor: 'colorPalette.bg.hover',
        _disabled: {
          bgColor: bgInitial,
        },
      },
      _active: {
        bgColor: 'colorPalette.bg.active',
      },
    })
  })

  test('should have an outlined usage variant', () => {
    expect(iconButton.variants?.usage.outlined).toMatchObject({
      color: 'colorPalette.text.200',
      bgColor: 'colorPalette.ghost.initial',
      border: '2px solid',
      borderColor: 'colorPalette.border.initial',
      _hover: {
        bgColor: 'colorPalette.ghost.hover',
        _disabled: {
          bgColor: bgInitial,
        },
      },
      _active: {
        bgColor: 'colorPalette.ghost.active',
      },
    })
  })

  test('should have a circle shape variant', () => {
    expect(iconButton.variants?.shape.circle).toMatchObject({
      pxi: '0',
      rounded: 'full',
    })
  })

  test('should have default variants', () => {
    expect(iconButton.defaultVariants).toMatchObject({
      palette: 'action',
      usage: 'text',
      shape: 'circle',
      size: 'lg',
    })
  })

  test('should have a small size variant', () => {
    expect(iconButton.variants?.size.sm).toMatchObject({
      md: {
        h: '1.5rem',
        w: '1.5rem',
      },
    })
  })

  test('should have a large size variant', () => {
    expect(iconButton.variants?.size.lg).toMatchObject({})
  })
})
