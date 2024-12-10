import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

describe('select recipe', () => {
  const { select } = slotRecipes

  test('should be exported', () => {
    expect(select).toBeDefined()
  })

  test('should have a base style', () => {
    expect(select.base?.root).toMatchObject({
      h: '3.7rem',
      position: 'relative',
      py: '1',
      w: 'full',
    })
  })

  test('should have a input style', () => {
    expect(select.base?.input).toMatchObject({
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
        '&:not(button)': {
          cursor: 'default',
        },
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

  test('should have a iconStack style', () => {
    expect(select.base?.iconStack).toMatchObject({
      position: 'absolute',
      right: '4',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 'decorator',
    })
  })

  test('should have a stateIcon style', () => {
    expect(select.base?.stateIcon).toMatchObject({
      _invalid: {
        color: 'danger.text.200',
      },
    })
  })

  test('should have a arrowIcon style', () => {
    expect(select.base?.arrowIcon).toMatchObject({
      color: 'action.text.inverse',
    })
  })

  test('should have a size variant', () => {
    expect(select.variants?.size).toMatchObject({
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
    expect(select.defaultVariants).toMatchObject({
      size: 'lg',
    })
  })
})
