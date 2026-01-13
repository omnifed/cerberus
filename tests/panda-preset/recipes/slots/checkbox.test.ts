import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus/panda-preset'

describe('checkbox recipe', () => {
  const { checkbox } = slotRecipes

  test('should be exported', () => {
    expect(checkbox).toBeDefined()
  })

  test('should have a JSX structure', () => {
    expect(checkbox.jsx).toMatchObject([
      'CheckboxRoot',
      'CheckboxLabel',
      'CheckboxControl',
      'CheckboxIndicator',
      'Checkbox',
    ])
  })

  test('should have a root style', () => {
    expect(checkbox.base?.root).toMatchObject({
      alignItems: 'center',
      cursor: 'pointer',
      display: 'inline-flex',
      gap: 'sm',
      position: 'relative',
      userSelect: 'none',
      verticalAlign: 'top',
    })
  })

  test('should have a label style', () => {
    expect(checkbox.base?.label).toMatchObject({
      gap: 'sm',
      flexShrink: 0,
      w: 'initial!',
    })
  })

  test('should have a control style', () => {
    expect(checkbox.base?.control).toMatchObject({
      appearance: 'none',
      bgColor: 'page.surface.initial',
      border: '1px solid',
      borderColor: 'action.border.initial',
      color: 'page.text.initial',
      flexShrink: 0,
      rounded: 'sm',
      transitionProperty: 'border-color,background-color',
      transitionDuration: 'fast',
      transitionTimingFunction: 'ease-in-out',
      _focusVisible: {
        boxShadow: 'none',
        outline: '3px solid',
        outlineColor: 'action.border.focus',
        outlineOffset: '2px',
      },
      _checked: {
        bgColor: 'action.bg.initial',
        _userInvalid: {
          bgColor: 'danger.bg.initial',
          borderColor: 'danger.border.initial',
          color: 'danger.text.initial',
        },
      },
      _indeterminate: {
        bgColor: 'action.bg.initial',
      },
      _disabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
        bgColor: 'page.bg.200',
      },
      _userInvalid: {
        bgColor: 'danger.bg.initial',
        borderColor: 'danger.border.initial',
        color: 'danger.text.initial',
      },
    })
  })

  test('should have a indicator style', () => {
    expect(checkbox.base?.indicator).toMatchObject({
      color: 'action.text.initial',
      h: 'full',
      w: 'full',
      _peerInvalid: {
        color: 'danger.text.initial',
      },
      _peerDisabled: {
        opacity: '0.5',
      },
    })
  })

  test('should have a group style', () => {
    expect(checkbox.base?.group).toMatchObject({
      display: 'flex',
      flexDirection: 'column',
      gap: 'md',
    })
  })

  test('should have a size variant', () => {
    expect(checkbox.variants!.size).toMatchObject({
      sm: {
        control: {
          h: '1rem',
          w: '1rem',
        },
        label: {
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
        control: {
          h: '1.25rem',
          w: '1.25rem',
        },
        label: {
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

  test('should have a default variant', () => {
    expect(checkbox.defaultVariants).toMatchObject({
      size: 'sm',
    })
  })
})
