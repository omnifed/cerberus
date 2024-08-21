import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

describe('notification recipe', () => {
  const { notification } = slotRecipes

  test('should be exported', () => {
    expect(notification).toBeDefined()
  })

  test('should have a base style', () => {
    expect(notification.base?.dialog).toMatchObject({
      bgColor: 'colorPalette.surface.initial',
      bottom: '4',
      minH: '3.125rem',
      left: '4',
      opacity: '0',
      position: 'absolute',
      right: '4',
      rounded: 'sm',
      shadow: 'md',
      w: 'full',
      zIndex: 'toast',
      _motionSafe: {
        animationName: 'fadeInDown',
        animationDuration: '250ms',
        animationTimingFunction: 'ease-in',
        animationFillMode: 'forwards',
      },
      _motionReduce: {
        opacity: '1',
      },
      md: {
        bottom: 'initial',
        left: 'initial',
      },
    })
  })

  test('should have an icon style', () => {
    expect(notification.base?.icon).toMatchObject({
      color: 'colorPalette.text.100',
      paddingInlineStart: '4',
    })
  })

  test('should have a heading style', () => {
    expect(notification.base?.heading).toMatchObject({
      color: 'colorPalette.text.initial',
      textStyle: 'label-md',
      fontWeight: '600',
      userSelect: 'none',
    })
  })

  test('should have a description style', () => {
    expect(notification.base?.description).toMatchObject({
      color: 'colorPalette.text.initial',
      textStyle: 'body-sm',
      userSelect: 'none',
      ['& :is(a)']: {
        rounded: 'sm',
        textStyle: 'link',
      },
    })
  })

  test('should had a default variant', () => {
    expect(notification.defaultVariants).toMatchObject({
      palette: 'info',
    })
  })
})
