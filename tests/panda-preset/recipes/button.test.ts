import { describe, test, expect } from 'bun:test'
import { recipes } from '@cerberus/panda-preset'

describe('button recipe', () => {
  const { button } = recipes
  const initialText = 'colorPalette.text.initial'

  test('should be exported', () => {
    expect(button).toBeDefined()
  })

  test('should have a base style', () => {
    expect(button.base).toMatchObject({
      alignItems: 'center',
      appearance: 'none',
      borderWidth: '1px',
      borderColor: 'transparent',
      cursor: 'button',
      display: 'inline-flex',
      gap: 'sm',
      justifyContent: 'center',
      flexShrink: '0',
      focusVisibleRing: 'outside',
      fontWeight: '600',
      isolation: 'isolate',
      lineHeight: '0',
      outline: 'none',
      position: 'relative',
      textDecoration: 'none',
      transitionProperty: 'common',
      transitionDuration: 'moderate',
      userSelect: 'none',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',
      _disabled: {
        layerStyle: 'disabled',
      },
      _icon: {
        flexShrink: '0',
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

  test('should have a ghost usage variant', () => {
    expect(button.variants?.usage.ghost).toMatchObject({
      color: 'colorPalette.text.200',
      bgColor: 'transparent',
      border: 'none',
      transitionProperty: 'background-color, color',
      transitionDuration: 'fast',
      transitionTimingFunction: 'ease-in-out',
      _hover: {
        _notDisabled: {
          bgColor: 'colorPalette.ghost.hover',
        },
      },
      _enabled: {
        _active: {
          bgColor: 'colorPalette.ghost.active',
          color: 'colorPalette.text.active',
        },
      },
      _disabled: {
        _hover: {
          bgColor: 'transparent',
        },
        _active: {
          color: initialText,
        },
      },
    })
  })

  test('should have an outlined usage variant', () => {
    expect(button.variants?.usage.outlined).toMatchObject({
      bgColor: 'colorPalette.ghost.initial',
      border: '2px solid',
      borderColor: 'colorPalette.border.initial',
    })
  })

  test('should have an outlined-subtle usage variant', () => {
    expect(button.variants?.usage['outlined-subtle']).toMatchObject({
      bgColor: 'colorPalette.ghost.initial',
      borderColor: 'colorPalette.border.initial',
      border: '1px solid',
      _selected: {
        bgColor: 'action.bg.active',
        color: 'action.text.initial',
        _hover: {
          color: 'action.text.200',
        },
      },
    })
  })

  test('should have a filled usage variant', () => {
    expect(button.variants?.usage.filled).toMatchObject({
      bgColor: 'colorPalette.bg.initial',
      color: initialText,
      _hover: {
        _notDisabled: {
          bgColor: 'colorPalette.bg.hover',
        },
      },
      _enabled: {
        _active: {
          bgColor: 'colorPalette.bg.active',
        },
      },
    })
  })

  test('should have a default shape variant', () => {
    expect(button.variants?.shape.default).toMatchObject({
      rounded: 'sm',
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

  test('should have a xs size variant', () => {
    expect(button.variants?.size.xs).toMatchObject({
      h: '6',
      minW: '6',
      fontSize: 'xs',
      textStyle: 'button-sm',
      px: '2',
      gap: '1',
      _icon: {
        width: '3.5',
        height: '3.5',
      },
    })
  })

  test('should have a small size variant', () => {
    expect(button.variants?.size.sm).toMatchObject({
      h: '9',
      minW: '9',
      px: '3.5',
      textStyle: 'button-sm',
      gap: '2',
      _icon: {
        width: '4',
        height: '4',
      },
    })
  })

  test('should have a medium size variant', () => {
    expect(button.variants?.size.md).toMatchObject({
      h: '10',
      minW: '10',
      textStyle: 'button-md',
      px: '4',
      gap: '2',
      _icon: {
        width: '5',
        height: '5',
      },
    })
  })

  test('should have a large size variant', () => {
    expect(button.variants?.size.lg).toMatchObject({
      h: '11',
      minW: '11',
      textStyle: 'button-md',
      px: '5',
      gap: '3',
      _icon: {
        width: '5',
        height: '5',
      },
    })
  })

  test('should have a xl size variant', () => {
    expect(button.variants?.size.xl).toMatchObject({
      h: '12',
      minW: '12',
      textStyle: 'button-md',
      px: '5',
      gap: '2.5',
      _icon: {
        width: '5',
        height: '5',
      },
    })
  })

  test('should have a 2xl size variant', () => {
    expect(button.variants?.size['2xl']).toMatchObject({
      h: '16',
      minW: '16',
      fontSize: 'lg',
      textStyle: 'button-md',
      px: '7',
      gap: '3',
      _icon: {
        width: '6',
        height: '6',
      },
    })
  })

  test('should have a compound variant', () => {
    expect(button.compoundVariants).toMatchObject([
      {
        palette: 'danger',
        usage: 'filled',
        css: {
          _hover: {
            _notDisabled: {
              color: 'colorPalette.text.inverse',
            },
          },
        },
      },
      {
        palette: 'danger',
        usage: 'ghost',
        css: {
          color: 'colorPalette.text.initial',
          _hover: {
            _notDisabled: {
              color: 'colorPalette.text.100',
            },
          },
        },
      },
    ])
  })

  test('should have default variants', () => {
    expect(button.defaultVariants).toMatchObject({
      palette: 'action',
      usage: 'filled',
      shape: 'sharp',
      size: 'lg',
    })
  })
})
