import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus/panda-preset'
import { inputStyles } from '@cerberus/panda-preset/src/recipes/slots/field'

describe('number input recipe', () => {
  const { numberInput } = slotRecipes

  const trigger = {
    alignItems: 'center',
    borderColor: 'action.border.100',
    color: 'action.text.inverse',
    cursor: 'pointer',
    display: 'inline-flex',
    justifyContent: 'center',
    transitionDuration: 'normal',
    transitionProperty: 'background, border-color, color',
    transitionTimingFunction: 'default',
    _hover: {
      bgColor: 'page.bg.100',
      color: 'action.text.100',
    },
    _active: {
      bgColor: 'action.ghost.hover',
      color: 'action.text.200',
    },
    _disabled: {
      cursor: 'not-allowed',
      opacity: 0.5,
      _hover: {
        bgColor: 'transparent',
      },
    },
  }

  test('should have a className property', () => {
    expect(numberInput.className).toBe('number-input')
  })

  test('should have slots defined', () => {
    expect(numberInput.slots).toEqual(
      expect.arrayContaining([
        'root',
        'label',
        'input',
        'control',
        'incrementTrigger',
        'decrementTrigger',
        'scrubber',
      ]),
    )
  })

  test('should have JSX elements defined', () => {
    expect(numberInput.jsx).toMatchObject([
      'NumberInput',
      'NumberInputRoot',
      'NumberInputLabel',
      'NumberInputInput',
      'NumberInputControl',
      'NumberInputIncrementTrigger',
      'NumberInputDecrementTrigger',
      'NumberInputScrubber',
    ])
  })

  test('should have base.root styles defined', () => {
    expect(numberInput.base?.root).toMatchObject({
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      w: 'fit-content',
    })
  })

  test('should have base.input styles defined', () => {
    expect(numberInput.base?.input).toMatchObject({
      background: 'transparent',
      border: 'none',
      color: 'page.text.initial',
      gridRow: 'span 2 / span 2',
      h: 'var(--number-input-h)',
      outline: 'none',
      ps: 'md',
      w: 'full',
      _placeholder: {
        color: 'page.text.100',
      },
      _disabled: {
        cursor: 'not-allowed',
      },
    })
  })

  test('should have base.control styles defined', () => {
    expect(numberInput.base?.control).toMatchObject({
      ...inputStyles,
      display: 'grid',
      divideX: '1px',
      gridTemplateColumns: '1fr 2.75rem',
      gridTemplateRows: '1fr 1fr',
      overflow: 'hidden',
      paddingInline: 'initial',
      transitionDuration: 'normal',
      transitionProperty: 'border-color, box-shadow',
      transitionTimingFunction: 'default',
      w: '10.75rem',
    })
  })

  test('should have base.decrementTrigger styles defined', () => {
    expect(numberInput.base?.decrementTrigger).toMatchObject({
      ...trigger,
      borderTopWidth: '1px',
    })
  })

  test('should have base.incrementTrigger styles defined', () => {
    expect(numberInput.base?.incrementTrigger).toMatchObject(trigger)
  })

  test('should have base.scrubber styles defined', () => {
    expect(numberInput.base?.scrubber).toMatchObject({})
  })

  test('should have variants defined', () => {
    expect(numberInput.variants).toMatchObject({
      size: {
        sm: {
          root: {
            '--number-input-h': '2rem',
          },
        },
        md: {
          root: {
            '--number-input-h': '2.5rem',
          },
        },
        lg: {
          root: {
            '--number-input-h': '3rem',
          },
        },
      },
    })
  })

  test('should have default variants defined', () => {
    expect(numberInput.defaultVariants).toMatchObject({
      size: 'md',
    })
  })
})
