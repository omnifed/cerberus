import { describe, test, expect } from 'bun:test'
import { recipes } from '@cerberus/panda-preset'

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
      focusVisibleRing: 'outside',
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
      flexShrink: 0,
      h: 'var(--btn-h)',
      minW: 'initial',
      pxi: '0',
      rounded: 'full',
      w: 'var(--btn-w)',
      _disabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
      },
      _notify: {
        position: 'relative',
        _after: {
          alignItems: 'center',
          bgColor: 'danger.surface.200',
          color: 'danger.text.200',
          content: 'attr(data-notify-count)',
          display: 'inline-flex',
          fontFamily: 'mono',
          fontSize: '0.625rem',
          h: '1rem',
          insetBlockEnd: 'auto',
          insetInlineStart: 'auto',
          insetInlineEnd: 0,
          justifyContent: 'center',
          pos: 'absolute',
          paddingInlineStart: 'calc(0.25rem + 2px)',
          paddingInlineEnd: 'xs',
          rounded: 'full',
          translate: '50% -50%',
          top: 'var(--notify-top)',
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

  test('should have a square shape variant', () => {
    expect(iconButton.variants?.shape.square).toMatchObject({
      rounded: 'lg',
    })
  })

  test('should have a circle shape variant', () => {
    expect(iconButton.variants?.shape.circle).toMatchObject({
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

  test('should have a size variant', () => {
    expect(iconButton.variants?.size).toMatchObject({
      xs: {
        '--btn-h': '1.5rem',
        '--btn-w': '1.5rem',
        '--notify-top': '-0.25rem',
      },
      sm: {
        '--btn-h': '2rem',
        '--btn-w': '2rem',
        '--notify-top': '-0.25rem',
      },
      md: {
        '--btn-h': '2.5rem',
        '--btn-w': '2.5rem',
        '--notify-top': '-0.25rem',
      },
      lg: {
        '--btn-h': '2.75rem',
        '--btn-w': '2.75rem',
        '--notify-top': '0.4rem',
      },
    })
  })
})
