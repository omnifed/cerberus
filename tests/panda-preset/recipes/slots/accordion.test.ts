import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

describe('accordion recipe', () => {
  const { accordion } = slotRecipes

  test('should be exported', () => {
    expect(accordion).toBeDefined()
  })

  test('should have a base style', () => {
    expect(accordion.base?.root).toMatchObject({
      display: 'flex',
      flexDirection: 'column',
      w: 'full',
    })
  })

  test('should have an item style', () => {
    expect(accordion.base?.item).toMatchObject({
      borderBlockEnd: '2px solid',
      borderColor: 'page.border.initial',
    })
  })

  test('should have an itemTrigger style', () => {
    expect(accordion.base?.itemTrigger).toMatchObject({
      alignItems: 'center',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      pxi: 'sm',
      transitionProperty: 'background-color',
      transitionDuration: 'fast',
      w: 'full',
      _hover: {
        bgColor: 'action.ghost.hover',
      },
    })
  })

  test('should have an itemContent style', () => {
    expect(accordion.base?.itemContent).toMatchObject({
      overflow: 'hidden',
      _motionSafe: {
        animationDuration: 'fast',
        animationFillMode: 'forwards',
        transitionProperty: 'padding',
        transitionDuration: 'fast',
        _open: {
          animationName: 'expandHeight, fadeIn',
        },
        _closed: {
          animationName: 'collapseHeight, fadeOut',
        },
      },
    })
  })

  test('should have an itemIndicator style', () => {
    expect(accordion.base?.itemIndicator).toMatchObject({
      _motionSafe: {
        transitionProperty: 'transform',
        transitionDuration: 'fast',
      },
      _open: {
        transform: 'rotate(180deg)',
      },
      _closed: {
        transform: 'rotate(0deg)',
      },
    })
  })

  test('should have a size variant for itemTrigger', () => {
    expect(accordion.variants?.size?.sm.itemTrigger).toMatchObject({
      paddingBlock: 'sm',
      rounded: 'lg',
      textStyle: 'heading-xs',
    })
  })

  test('should have a size variant for itemContent', () => {
    expect(accordion.variants?.size?.sm.itemContent).toMatchObject({
      textStyle: 'body-sm',
      _open: {
        paddingBlock: 'sm',
      },
    })
  })

  test('should have a size variant for lg', () => {
    expect(accordion.variants?.size?.lg).toMatchObject({
      item: {
        paddingBlock: 'sm',
      },
    })
  })

  test('should have a size variant for itemTrigger with lg', () => {
    expect(accordion.variants?.size?.lg.itemTrigger).toMatchObject({
      paddingBlock: 'md',
      rounded: 'xl',
      textStyle: 'heading-sm',
    })
  })

  test('should have a size variant for itemContent with lg', () => {
    expect(accordion.variants?.size?.lg.itemContent).toMatchObject({
      textStyle: 'body-md',
      _open: {
        paddingBlock: 'md',
      },
    })
  })

  test('should have a default variant size', () => {
    const defaultVariants = accordion.defaultVariants as { size: string }
    expect(defaultVariants.size).toBe('lg')
  })
})
