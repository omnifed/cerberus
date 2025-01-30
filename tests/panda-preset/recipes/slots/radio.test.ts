import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

describe('radioGroup recipe', () => {
  const { radioGroup } = slotRecipes

  test('should be exported', () => {
    expect(radioGroup).toBeDefined()
  })

  test('should have a jsx props', () => {
    expect(radioGroup.jsx).toMatchObject([
      'RadioGroupRoot',
      'RadioGroupLabel',
      'RadioGroupIndicator',
      'RadioGroupItem',
      'RadioGroupItemText',
      'RadioGroupItemControl',
      'RadioGroupItemHiddenInput',
      'RadioGroup',
      'Radio',
    ])
  })

  test('should have a base.root style', () => {
    expect(radioGroup.base?.root).toMatchObject({
      display: 'flex',
      gap: 'md',
    })
  })

  test('should have an base.item style', () => {
    expect(radioGroup.base?.item).toMatchObject({
      alignItems: 'center',
      cursor: 'pointer',
      display: 'inline-flex',
      gap: 'sm',
      position: 'relative',
      _disabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
      },
    })
  })

  test('should have an base.itemControl style', () => {
    expect(radioGroup.base?.itemControl).toMatchObject({
      colorPalette: 'action',
      alignItems: 'center',
      border: '1px solid',
      borderColor: 'colorPalette.border.initial',
      bgColor: 'page.surface.initial',
      cursor: 'radio',
      display: 'inline-flex',
      flexShrink: 0,
      justifyContent: 'center',
      rounded: 'full',
      verticalAlign: 'top',
      _focusVisible: {
        boxShadow: 'none',
        outline: '3px solid',
        outlineColor: 'action.border.focus',
        outlineOffset: '2px',
      },
      _checked: {
        bg: 'radial-gradient(circle, var(--cerberus-colors-action-border-initial) 35%, var(--cerberus-colors-page-surface-initial) 35%)',
      },
      _userInvalid: {
        colorPalette: 'danger',
        _checked: {
          bgColor: 'colorPalette.bg.initial',
          bg: 'radial-gradient(circle, var(--cerberus-colors-danger-border-initial) 35%, var(--cerberus-colors-danger-bg-initial) 35%)',
        },
      },
      _disabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
        borderColor: 'colorPalette.border.100',
      },
    })
  })

  test('should have a size variant', () => {
    expect(radioGroup.variants!.size).toMatchObject({
      sm: {
        itemControl: {
          h: '1rem',
          w: '1rem',
        },
        itemText: {
          alignItems: 'center',
          display: 'inline-flex',
          color: 'page.text.initial',
          justifyContent: 'space-between',
          textStyle: 'label-sm',
          w: 'full',
          _disabled: {
            color: 'page.text.100',
          },
          '& > [data-part=required-indicator]': {
            display: 'inline-block',
            color: 'page.text.100',
            textStyle: 'label-sm',
          },
        },
      },
      md: {
        itemControl: {
          h: '1.25rem',
          w: '1.25rem',
        },
        itemText: {
          alignItems: 'center',
          display: 'inline-flex',
          color: 'page.text.initial',
          justifyContent: 'space-between',
          textStyle: 'label-md',
          w: 'full',
          _disabled: {
            color: 'page.text.200',
          },
          '& > [data-part=required-indicator]': {
            display: 'inline-block',
            color: 'page.text.100',
            textStyle: 'label-sm',
          },
        },
      },
    })
  })

  test('should have a default size variant', () => {
    const defaultVariants = radioGroup.defaultVariants as {
      orientation: string
      size: string
    }
    expect(defaultVariants.orientation).toBe('horizontal')
    expect(defaultVariants.size).toBe('sm')
  })
})
