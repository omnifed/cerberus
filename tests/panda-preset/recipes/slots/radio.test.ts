import { describe, test, expect } from 'bun:test'
import { focusStates, slotRecipes } from '@cerberus-design/panda-preset'

describe('radio recipe', () => {
  const { radio } = slotRecipes

  test('should be exported', () => {
    expect(radio).toBeDefined()
  })

  test('should have a base style', () => {
    expect(radio.base?.root).toMatchObject({
      rounded: 'lg',
      p: '1',
      ...focusStates,
    })
  })

  test('should have a input style', () => {
    expect(radio.base?.input).toMatchObject({
      appearance: 'none',
      bgColor: 'inherit',
      border: '1px solid',
      borderColor: 'action.border.initial',
      rounded: 'full',
      _motionSafe: {
        transitionProperty: 'background-color, background',
        transitionDuration: '150ms',
        transitionTimingFunction: 'ease-in-out',
      },
      _checked: {
        bg: 'radial-gradient(circle, var(--cerberus-colors-action-border-initial) 35%, var(--cerberus-colors-page-surface-initial) 35%)',
      },
      _disabled: {
        cursor: 'not-allowed',
        borderColor: 'action.border.100',
      },
      _userInvalid: {
        borderColor: 'danger.border.initial',
        _checked: {
          bgColor: 'danger.bg.initial',
          bg: 'radial-gradient(circle, var(--cerberus-colors-danger-border-initial) 35%, var(--cerberus-colors-danger-bg-initial) 35%)',
        },
      },
      _groupHover: {
        bgColor: 'action.bg.100.hover',
        _checked: {
          bgColor: 'action.bg.initial',
        },
      },
    })
  })

  test('should have a size variant', () => {
    expect(radio.variants!.size).toMatchObject({
      sm: {
        input: {
          h: '1rem',
          w: '1rem',
        },
      },
      md: {
        input: {
          h: '1.25rem',
          w: '1.25rem',
        },
      },
    })
  })

  test('should have a default size variant', () => {
    const defaultVariants = radio.defaultVariants as { size: string }
    expect(defaultVariants.size).toBe('md')
  })
})
