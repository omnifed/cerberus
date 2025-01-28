import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

describe('checkbox recipe', () => {
  const { checkbox } = slotRecipes

  test('should be exported', () => {
    expect(checkbox).toBeDefined()
  })

  test('should have a base style', () => {
    expect(checkbox.base?.root).toMatchObject({
      flexShrink: '0',
      position: 'relative',
    })
  })

  test('should have a input style', () => {
    expect(checkbox.base?.input).toMatchObject({
      appearance: 'none',
      bgColor: 'action.bg.100',
      border: '1px solid',
      borderColor: 'action.border.initial',
      color: 'page.text.initial',
      h: 'full',
      left: '0',
      position: 'absolute',
      pxi: '0',
      rounded: 'sm',
      transitionProperty: 'border-color',
      transitionDuration: '200ms',
      transitionTimingFunction: 'ease-in-out',
      top: '0',
      w: 'full',
      zIndex: 'base',
      _focusVisible: {
        boxShadow: 'none',
        outline: '3px solid',
        outlineColor: 'action.border.focus',
        outlineOffset: '2px',
      },
      _readOnly: {
        '&:not(button)': {
          cursor: 'default',
        },
      },
      _userInvalid: {
        bgColor: 'page.surface.100',
        borderColor: 'danger.border.initial',
      },
      _checked: {
        bgColor: 'action.bg.initial',
      },
      _disabled: {
        bgColor: 'page.bg.200',
        opacity: '0.5',
        cursor: 'not-allowed',
      },
    })
  })

  test('should have a icon style', () => {
    expect(checkbox.base?.icon).toMatchObject({
      bottom: '0',
      color: 'action.text.initial',
      display: 'inline-block',
      w: 'full',
      zIndex: 'decorator',
      _peerInvalid: {
        color: 'danger.text.initial',
      },
      _peerDisabled: {
        opacity: '0.5',
      },
    })
  })

  test('should have a size variant', () => {
    expect(checkbox.variants!.size).toMatchObject({
      md: {
        root: {
          h: '1rem',
          w: '1rem',
        },
      },
      lg: {
        root: {
          h: '1.25rem',
          w: '1.25rem',
        },
      },
    })
  })

  test('should have a default variant', () => {
    expect(checkbox.defaultVariants).toMatchObject({
      size: 'md',
    })
  })
})
