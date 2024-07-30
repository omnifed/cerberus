import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

describe('tabs recipe', () => {
  const { tabs } = slotRecipes

  test('should be exported', () => {
    expect(tabs).toBeDefined()
  })

  test('should have a base style', () => {
    expect(tabs.base?.tabList).toMatchObject({
      borderBottom: '1px solid',
      borderBottomColor: 'action.border.100',
      gap: '0',
      w: 'full',
    })
    expect(tabs.base?.tab).toMatchObject({
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
      _motionSafe: {
        transition: 'all 200ms ease-in-out',
        _before: {
          transitionProperty: 'height',
          transitionDuration: '200ms',
          transitionTimingFunction: 'ease-in-out',
        },
        _after: {
          transitionProperty: 'height',
          transitionDuration: '200ms',
          transitionTimingFunction: 'ease-in-out',
        },
      },
      _before: {
        bgColor: 'colorPalette.border.initial',
        bottom: '0',
        content: '""',
        h: '0',
        position: 'absolute',
        left: '0',
        right: '0',
        w: 'full',
        willChange: 'height',
        zIndex: 'decorator',
      },
      _after: {
        borderTopLeftRadius: 'md',
        borderTopRightRadius: 'md',
        bottom: '0',
        bgColor: 'neutral.surface.100',
        content: '""',
        left: '0',
        position: 'absolute',
        right: '0',
        h: '0',
        w: 'full',
        willChange: 'height',
        zIndex: '-1',
      },
      _focusVisible: {
        boxShadow: 'none',
        outline: '3px solid',
        outlineColor: 'action.border.focus',
        outlineOffset: '2px',
      },
    })
    expect(tabs.base?.tabPanel).toMatchObject({
      rounded: 'md',
      _focusVisible: {
        boxShadow: 'none',
        outline: '3px solid',
        outlineColor: 'action.border.focus',
        outlineOffset: '2px',
      },
    })
  })

  test('should have a variant for the tab', () => {
    expect(tabs.variants?.palette).toMatchObject({
      action: {
        tab: {
          colorPalette: 'action',
          _before: {
            colorPalette: 'action',
          },
          _after: {
            colorPalette: 'action',
          },
        },
      },
      secondaryAction: {
        tab: {
          colorPalette: 'secondaryAction',
          _before: {
            colorPalette: 'secondaryAction',
          },
          _after: {
            colorPalette: 'secondaryAction',
          },
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
