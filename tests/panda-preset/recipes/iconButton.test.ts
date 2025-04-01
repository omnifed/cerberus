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
      _notify: {
        position: 'relative',
        _after: {
          alignItems: 'center',
          backgroundColor: 'var(--cerberus-colors-danger-surface-200)',
          borderRadius: 'full',
          display: 'flex',
          color: 'var(--cerberus-colors-danger-text-200)',
          content: 'attr(data-notify-count)',
          flexDirection: 'column',
          fontFamily: 'mono',
          fontSize: '0.625rem',
          height: '1rem',
          justifyContent: 'center',
          left: '50%',
          lineHeight: '0.5625rem',
          position: 'absolute',
          paddingInlineStart: 'calc(0.25rem + 2px)',
          paddingInlineEnd: 'xs',
          textAlign: 'center',
        },
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

  test('should have a ghost usage variant', () => {
    expect(iconButton.variants?.usage.ghost).toMatchObject({
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

  test('should have a filled usage variant', () => {
    expect(iconButton.variants?.usage.filled).toMatchObject({
      bgColor: bgInitial,
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

  test('should have an outlined usage variant', () => {
    expect(iconButton.variants?.usage.outlined).toMatchObject({
      color: 'colorPalette.text.200',
      bgColor: 'colorPalette.ghost.initial',
      border: '2px solid',
      borderColor: 'colorPalette.border.initial',
      _hover: {
        _notDisabled: {
          bgColor: 'colorPalette.ghost.hover',
        },
      },
      _enabled: {
        _active: {
          bgColor: 'colorPalette.ghost.active',
        },
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
      usage: 'ghost',
      shape: 'circle',
      size: 'lg',
    })
  })

  test('should have a small size variant', () => {
    expect(iconButton.variants?.size.sm).toMatchObject({
      md: {
        h: '1.5rem',
        w: '1.5rem',
        _notify: {
          _after: {
            top: '-0.25rem',
          },
        },
      },
    })
  })

  test('should have a large size variant', () => {
    expect(iconButton.variants?.size.lg).toMatchObject({
      _notify: {
        _after: {
          top: '0.4rem',
        },
      },
    })
  })
})
