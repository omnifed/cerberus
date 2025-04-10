import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

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
      pxi: '4',
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
          transitionProperty: 'height',
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
        willChange: 'height',
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
      bottom: 0,
      h: '4px',
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
    })
  })
})
