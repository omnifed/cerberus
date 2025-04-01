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
      cursor: 'pointer',
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
      h: '2rem',
      marginBlock: '0.375rem', // add a11y target size
      pxi: '3',
      textStyle: 'button-sm',
      md: {
        marginBlock: 'initial',
      },
    })
  })

  test('should have a medium size variant', () => {
    expect(button.variants?.size.md).toMatchObject({
      h: '2.75rem',
      textStyle: 'button-md',
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
      size: 'md',
    })
  })
})
