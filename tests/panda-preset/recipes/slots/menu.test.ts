import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

describe('menu recipe', () => {
  const { menu } = slotRecipes

  test('should be exported', () => {
    expect(menu).toBeDefined()
  })

  test('should have a base style', () => {
    expect(menu.base?.content).toMatchObject({
      '--menu-z-index': 'zIndex.popover',
      bgColor: 'page.surface.100',
      border: '1px solid',
      borderColor: 'page.border.200',
      boxShadow: 'lg',
      overflow: 'hidden',
      p: 'xs',
      minW: '10rem',
      rounded: 'md',
      shadow: 'lg',
      zIndex: 'calc(var(--menu-z-index) + var(--layer-index, 0))',
      _open: {
        '&[data-placement^=top]': {
          animationName: 'slideFromBottom, fadeIn',
        },
        '&[data-placement^=bottom]': {
          animationName: 'slideFromTop, fadeIn',
        },
        '&[data-placement^=left]': {
          animationName: 'slideFromRight, fadeIn',
        },
        '&[data-placement^=right]': {
          animationName: 'slideFromLeft, fadeIn',
        },
        animationDuration: 'fast',
      },
      _closed: {
        '&[data-placement^=top]': {
          animationName: 'slideToBottom, fadeOut',
        },
        '&[data-placement^=bottom]': {
          animationName: 'slideToTop, fadeOut',
        },
        '&[data-placement^=left]': {
          animationName: 'slideToRight, fadeOut',
        },
        '&[data-placement^=right]': {
          animationName: 'slideToLeft, fadeOut',
        },
        animationDuration: 'faster',
      },
    })
  })

  test('should have a item style', () => {
    expect(menu.base?.item).toMatchObject({
      colorPalette: 'action',
      alignItems: 'center',
      borderRadius: 'l1',
      cursor: 'menuitem',
      display: 'flex',
      flex: '0 0 auto',
      gap: 1,
      outline: 0,
      position: 'relative',
      pxi: 'md',
      py: '0.75rem',
      rounded: 'sm',
      textAlign: 'start',
      textDecoration: 'none',
      userSelect: 'none',
      width: 'full',
      _highlighted: {
        bgColor: 'colorPalette.ghost.hover',
      },
      _disabled: {
        layerStyle: 'disabled',
      },
    })
  })

  test('should have a itemText style', () => {
    expect(menu.base?.itemText).toMatchObject({
      flex: '1',
    })
  })

  test('should have a itemGroupLabel style', () => {
    expect(menu.base?.itemGroupLabel).toMatchObject({
      color: 'page.text.100',
      fontSize: 'sm',
      fontWeight: 'semibold',
      pxi: 'md',
      py: '0.5rem',
    })
  })

  test('should have a indicator style', () => {
    expect(menu.base?.indicator).toMatchObject({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: '0',
    })
  })

  test('should have a separator style', () => {
    expect(menu.base?.separator).toMatchObject({
      height: '1px',
      borderColor: 'page.border.200',
      my: '1',
      mx: '-1',
    })
  })

  test('should have a variants object', () => {
    expect(menu.variants).toMatchObject({})
  })
})
