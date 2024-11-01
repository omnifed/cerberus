import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

describe('notification recipe', () => {
  const { notification } = slotRecipes
  const TEXT_2OO = 'colorPalette.text.200'

  test('should be exported', () => {
    expect(notification).toBeDefined()
  })

  test('should have a center style', () => {
    expect(notification.base?.center).toMatchObject({
      color: TEXT_2OO,
      position: 'fixed',
      right: '4',
      textAlign: 'right',
      top: '24',
      zIndex: 'toast',
    })
  })

  test('should have a base style', () => {
    expect(notification.base?.dialog).toMatchObject({
      bgColor: 'colorPalette.surface.200',
      color: TEXT_2OO,
      maxW: '29rem',
      minH: '3.125rem',
      opacity: '0',
      rounded: 'sm',
      shadow: 'md',
      _motionSafe: {
        animationName: 'fadeInDown',
        animationDuration: '250ms',
        animationTimingFunction: 'ease-in',
        animationFillMode: 'forwards',
      },
      _motionReduce: {
        opacity: '1',
      },
    })
  })

  test('should have an icon style', () => {
    expect(notification.base?.icon).toMatchObject({
      color: TEXT_2OO,
      paddingInlineStart: '4',
    })
  })

  test('should have a heading style', () => {
    expect(notification.base?.heading).toMatchObject({
      color: 'inherit',
      textStyle: 'label-md',
      fontWeight: '600',
      userSelect: 'none',
    })
  })

  test('should have a description style', () => {
    expect(notification.base?.description).toMatchObject({
      color: 'inherit',
      textStyle: 'body-sm',
      userSelect: 'none',
      ['& :is(a)']: {
        rounded: 'sm',
        textStyle: 'link',
      },
    })
  })

  test('should have a close style', () => {
    expect(notification.base?.close).toMatchObject({
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
      rounded: 'full',
      w: '2.75rem',
      bgColor: 'transparent',
      color: 'inherit',
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
      _hover: {
        bgColor: 'colorPalette.ghost.hover',
        color: 'colorPalette.text.100',
      },
    })
  })

  test('should have a close all style', () => {
    expect(notification.base?.closeAll).toMatchObject({
      bgColor: 'transparent',
      color: 'action.text.inverse',
      pxi: '0',
      _hover: {
        bgColor: 'transparent',
        color: 'action.bg.hover',
      },
    })
  })

  test('should had a default variant', () => {
    expect(notification.defaultVariants).toMatchObject({
      palette: 'info',
    })
  })
})
