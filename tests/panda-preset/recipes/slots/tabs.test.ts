import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus/panda-preset'

describe('tabs recipe', () => {
  const { tabs } = slotRecipes

  test('should be exported', () => {
    expect(tabs).toBeDefined()
  })

  test('should have a base.root style', () => {
    expect(tabs.base?.root).toMatchObject({
      rounded: 'md',
      w: 'full',
    })
  })

  test('should have a base.list style', () => {
    expect(tabs.base?.list).toMatchObject({
      borderBottom: '1px solid',
      borderBottomColor: 'action.border.100',
      display: 'flex',
      gap: '0',
      position: 'relative',
      w: 'full',
    })
  })

  test('should have a base.trigger style', () => {
    expect(tabs.base?.trigger).toMatchObject({
      alignItems: 'center',
      display: 'inline-flex',
      borderTopLeftRadius: 'md',
      borderTopRightRadius: 'md',
      fontSize: 'sm',
      fontWeight: '600',
      gap: '2',
      h: '2.75rem',
      justifyContent: 'center',
      position: 'relative',
      px: '4',
      zIndex: 'base',
      _disabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
      },
      _readOnly: {
        '&:not(button)': {
          cursor: 'default',
        },
      },
      _focusVisible: {
        boxShadow: 'none',
        outline: '3px solid',
        outlineColor: 'action.border.focus',
        outlineOffset: '2px',
      },
      _motionSafe: {
        transition: 'all 200ms ease-in-out',
        _after: {
          transitionProperty: 'height, width',
          transitionDuration: '200ms',
          transitionTimingFunction: 'ease-in-out',
        },
        _before: {
          transitionProperty: 'height, width',
          transitionDuration: '200ms',
          transitionTimingFunction: 'ease-in-out',
        },
      },
      _after: {
        borderTopLeftRadius: 'md',
        borderTopRightRadius: 'md',
        bottom: '0',
        bgColor: 'page.surface.100',
        content: '""',
        left: '0',
        position: 'absolute',
        right: '0',
        h: '0',
        w: 'full',
        willChange: 'height, width',
        zIndex: '-1',
      },
      _hover: {
        color: 'colorPalette.text.200',
        _after: {
          h: 'full',
        },
      },
      _selected: {
        color: 'colorPalette.text.200',
        _before: {
          h: '3px',
        },
        _hover: {
          _after: {
            h: '0',
          },
        },
      },
    })
  })

  test('should have a base.content style', () => {
    expect(tabs.base?.content).toMatchObject({
      rounded: 'md',
      w: 'full',
      _focusVisible: {
        boxShadow: 'none',
        outline: '3px solid',
        outlineColor: 'action.border.focus',
        outlineOffset: '2px',
      },
    })
  })

  test('should have a base.indicator style', () => {
    expect(tabs.base?.indicator).toMatchObject({
      animationName: 'fadeIn',
      animationDuration: 'fast',
      animationDelay: '200ms',
      animationFillMode: 'forwards',
      bgColor: 'colorPalette.border.initial',
      bottom: '0',
      h: '4px',
      insetBlockEnd: 'var(--tabs-indicator-block-end)',
      insetBlockStart: 'var(--tabs-indicator-block-start)',
      opacity: 0,
      w: 'var(--width)',
      zIndex: 'decorator',
    })
  })

  test('should have a variant for the tab', () => {
    expect(tabs.variants?.palette).toMatchObject({
      action: {
        root: {
          colorPalette: 'action',
        },
      },
      secondaryAction: {
        root: {
          colorPalette: 'secondaryAction',
        },
      },
    })
  })

  test('should have a default variant', () => {
    expect(tabs.defaultVariants).toMatchObject({
      palette: 'action',
      indicatorPlacement: 'end',
    })
  })

  test('should have vertical orientation styles', () => {
    expect(tabs.base?.root).toMatchObject({
      _vertical: {
        alignItems: 'stretch',
        display: 'flex',
        gap: '4',
      },
    })

    expect(tabs.base?.list).toMatchObject({
      _vertical: {
        alignItems: 'stretch',
        borderBottom: 'none',
        borderRight: '1px solid',
        borderRightColor: 'action.border.100',
        flexDirection: 'column',
        flexShrink: 0,
        w: 'auto',
      },
    })

    expect(tabs.base?.indicator).toMatchObject({
      _vertical: {
        h: 'var(--height)',
        insetBlockEnd: 'auto',
        insetBlockStart: 'var(--top)',
        insetInlineEnd: 'var(--tabs-indicator-inline-end)',
        insetInlineStart: 'var(--tabs-indicator-inline-start)',
        w: '4px',
      },
    })
  })

  test('should have indicatorPlacement variants', () => {
    expect(tabs.variants?.indicatorPlacement).toMatchObject({
      start: {
        root: {
          '--tabs-indicator-block-end': 'auto',
          '--tabs-indicator-block-start': '0',
          '--tabs-indicator-inline-end': 'auto',
          '--tabs-indicator-inline-start': '0',
        },
      },
      end: {
        root: {
          '--tabs-indicator-block-end': '0',
          '--tabs-indicator-block-start': 'auto',
          '--tabs-indicator-inline-end': '0',
          '--tabs-indicator-inline-start': 'auto',
        },
      },
    })
  })
})
