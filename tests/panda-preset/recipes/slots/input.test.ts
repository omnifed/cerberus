import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

describe('input recipe', () => {
  const { input } = slotRecipes

  test('should be exported', () => {
    expect(input).toBeDefined()
  })

  test('should have a base style', () => {
    expect(input.base?.root).toMatchObject({
      h: '3.7rem',
      position: 'relative',
      py: '1',
      w: 'full',
    })
  })

  test('should have a input style', () => {
    expect(input.base?.input).toMatchObject({
      bgColor: 'page.surface.initial',
      border: '1px solid',
      borderColor: 'action.border.100',
      color: 'page.text.initial',
      h: 'full',
      pxi: '4',
      rounded: 'sm',
      transitionProperty: 'border-color',
      transitionDuration: '200ms',
      transitionTimingFunction: 'ease-in-out',
      w: 'full',
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
      _readOnly: {
        cursor: 'default',
      },
      _userInvalid: {
        bgColor: 'page.surface.100',
        borderColor: 'danger.border.initial',
      },
      _placeholderShown: {
        color: 'page.text.100',
      },
      _startIcon: {
        display: 'inline-block',
        paddingInlineStart: '7',
      },
    })
  })

  test('should have a icon style', () => {
    expect(input.base?.icon).toMatchObject({
      position: 'absolute',
      right: '0.5rem',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 'decorator',
      _peerInvalid: {
        color: 'danger.text.100',
      },
    })
  })

  test('should have a startIcon style', () => {
    expect(input.base?.startIcon).toMatchObject({
      position: 'absolute',
      left: '0.5rem',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 'decorator',
    })
  })

  test('should have a size variant', () => {
    expect(input.variants?.size).toMatchObject({
      sm: {
        root: {
          md: {
            h: '2rem',
          },
        },
        input: {
          fontSize: 'sm',
        },
      },
      md: {
        root: {
          md: {
            h: '2.5rem',
          },
        },
        input: {
          fontSize: 'sm',
        },
      },
      lg: {
        root: {
          h: '3rem',
        },
      },
    })
  })

  test('should have a default variant', () => {
    expect(input.defaultVariants).toMatchObject({
      size: 'lg',
    })
  })
})
