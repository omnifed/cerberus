import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'
import { inputStyles } from '@cerberus-design/panda-preset/src/recipes/slots/field'

describe('pin input recipe', () => {
  const { pinInput } = slotRecipes

  test('should have a className property', () => {
    expect(pinInput.className).toBe('pin-input')
  })

  test('should have slots defined', () => {
    // We expect at least these core slots
    expect(pinInput.slots).toEqual(
      expect.arrayContaining(['root', 'label', 'control', 'input']),
    )
  })

  test('should have JSX elements defined', () => {
    expect(pinInput.jsx).toMatchObject([
      'PinInputRoot',
      'PinInputLabel',
      'PinInputControl',
      'PinInputInput',
      'PinInput',
    ])
  })

  test('should have base.root styles defined', () => {
    expect(pinInput.base?.root).toMatchObject({
      display: 'flex',
      flexDirection: 'column',
      gap: '2',
      w: 'fit-content',
    })
  })

  test('should have base.label styles defined', () => {
    expect(pinInput.base?.label).toMatchObject({
      color: 'page.text.initial',
      fontWeight: 'medium',
      textStyle: 'body-sm',
    })
  })

  test('should have base.control styles defined', () => {
    expect(pinInput.base?.control).toMatchObject({
      display: 'flex',
      gap: '2',
    })
  })

  test('should have base.input styles defined', () => {
    expect(pinInput.base?.input).toMatchObject({
      alignItems: 'center',
      appearance: 'none',
      bgColor: inputStyles.bgColor,
      border: inputStyles.border,
      borderColor: inputStyles.borderColor,
      color: inputStyles.color,
      display: 'flex',
      h: 'var(--pin-input-h)',
      justifyContent: 'center',
      outline: 'none',
      rounded: inputStyles.rounded,
      textAlign: 'center',
      transitionDuration: inputStyles.transitionDuration,
      transitionProperty: inputStyles.transitionProperty,
      w: 'var(--pin-input-w)',
      _hover: inputStyles._hover,
      _invalid: inputStyles._userInvalid,
    })
  })

  test('should have variants defined', () => {
    expect(pinInput.variants).toMatchObject({
      size: {
        md: {
          root: {
            '--pin-input-h': '3.125rem',
            '--pin-input-w': '2.5rem',
          },
          input: {
            textStyle: 'heading-md',
          },
        },
        lg: {
          root: {
            '--pin-input-h': '5rem',
            '--pin-input-w': '4rem',
          },
          input: {
            textStyle: 'heading-xl',
          },
        },
      },
    })
  })

  test('should have default variants defined', () => {
    expect(pinInput.defaultVariants).toMatchObject({
      size: 'lg',
    })
  })
})
