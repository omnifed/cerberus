import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus/panda-preset'

describe('accordion recipe', () => {
  const { field } = slotRecipes
  const smallLabel = 'label-sm'
  const disabledText = 'page.text.100'

  const inputStyles = {
    bgColor: 'page.surface.initial',
    border: '1px solid',
    borderColor: 'action.border.100',
    color: 'page.text.initial',
    paddingInline: 'md',
    position: 'relative',
    rounded: 'sm',
    textStyle: 'body-sm',
    transitionProperty: 'border, background-color',
    transitionDuration: 'fast',
    w: 'full',
    _hover: {
      borderColor: 'action.border.initial',
    },
    _placeholder: {
      color: 'page.text.100',
    },
    _focus: {
      bgColor: 'page.surface.100',
    },
    _userInvalid: {
      borderColor: 'danger.border.initial',
    },
    _focusVisible: {
      boxShadow: 'none',
      outline: '3px solid',
      outlineColor: 'action.border.focus',
      outlineOffset: '2px',
    },
  }

  const endIndicatorStyles = {
    position: 'absolute',
    right: 4,
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 'decorator',
  }

  test('should be exported', () => {
    expect(field).toBeDefined()
  })

  test('should support all the JSX elements', () => {
    expect(field.jsx).toEqual([
      'FieldRoot',
      'FieldLabel',
      'FieldInput',
      'FieldTextarea',
      'FieldHelperText',
      'FieldErrorText',
      'FieldStartIndicator',
      'FieldStatusIndicator',
      'Input',
      'Textarea',
    ])
  })

  test('should have a base style', () => {
    expect(field.base?.root).toMatchObject({
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      gap: 'xs',
      w: 'full',
    })
  })

  test('should have a label style', () => {
    expect(field.base?.label).toMatchObject({
      alignItems: 'center',
      display: 'inline-flex',
      color: 'page.text.initial',
      justifyContent: 'space-between',
      textStyle: smallLabel,
      userSelect: 'none',
      w: 'full',
      _disabled: {
        color: disabledText,
      },
      '& > [data-part=required-indicator]': {
        display: 'inline-block',
        color: 'page.text.100',
        textStyle: smallLabel,
      },
    })
  })

  test('should have an inputRoot style', () => {
    expect(field.base?.inputRoot).toMatchObject({
      position: 'relative',
      w: 'full',
    })
  })

  test('should have an input style', () => {
    expect(field.base?.input).toMatchObject({
      ...inputStyles,
      h: '3.7rem',
      paddingInlineEnd: 10,
      '&:is([data-has=start-indicator])': {
        paddingInlineStart: 10,
      },
    })
  })

  test('should have a textarea style', () => {
    expect(field.base?.textarea).toMatchObject({
      ...inputStyles,
      minH: '6.5rem',
      minW: '13.25rem',
      paddingBlock: '0.75rem',
    })
  })

  test('should have an helperText style', () => {
    expect(field.base?.helperText).toMatchObject({
      color: 'page.text.200',
      textStyle: smallLabel,
      '&:is([data-has-content=false])': {
        display: 'flex',
        flex: 1,
      },
    })
  })

  test('should have an errorText style', () => {
    expect(field.base?.errorText).toMatchObject({
      color: 'danger.text.initial',
      textStyle: smallLabel,
    })
  })

  test('should have a startIndicator style', () => {
    expect(field.base?.startIndicator).toMatchObject({
      ...endIndicatorStyles,
      left: 4,
      right: 'initial',
    })
  })

  test('should have an endIndicator style', () => {
    expect(field.base?.endIndicator).toMatchObject(endIndicatorStyles)
  })

  test('should have a statusIndicator style', () => {
    expect(field.base?.statusIndicator).toMatchObject({
      ...endIndicatorStyles,
      color: 'danger.text.100',
    })
  })

  test('should have a size style', () => {
    expect(field.variants?.size).toMatchObject({
      sm: {
        input: {
          md: {
            h: '2rem',
          },
        },
      },
      md: {
        input: {
          md: {
            h: '2.5rem',
          },
        },
      },
      lg: {
        input: {
          h: '3rem',
        },
      },
    })
  })

  test('should have a default size', () => {
    const variants = field.defaultVariants as { size: string }
    expect(variants.size).toEqual('lg')
  })
})
