import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus/panda-preset'

describe('fieldset recipe', () => {
  const { fieldset } = slotRecipes

  test('should be exported', () => {
    expect(fieldset).toBeDefined()
  })

  test('should support jsx components', () => {
    expect(fieldset.jsx).toEqual([
      'FieldsetRoot',
      'FieldsetLegend',
      'FieldsetHelperText',
      'FieldsetErrorText',
      'Fieldset',
    ])
  })

  test('should support base.root styles', () => {
    expect(fieldset.base?.root).toMatchObject({
      display: 'flex',
      flexDirection: 'column',
      gap: 'sm',
      width: 'full',
    })
  })

  test('should support base.legend styles', () => {
    expect(fieldset.base?.legend).toMatchObject({
      _disabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
        color: 'page.text.100',
      },
    })
  })

  test('should support base.errorText styles', () => {
    expect(fieldset.base?.errorText).toMatchObject({
      color: 'danger.text.initial',
      textStyle: 'label-sm',
    })
  })

  test('should support variants.usage.fieldGroup', () => {
    expect(fieldset.variants?.usage?.fieldGroup).toMatchObject({
      legend: {
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
      helperText: {
        color: 'page.text.initial',
        textStyle: 'body-xs',
      },
    })
  })

  test('should support variants.usage.formSection', () => {
    expect(fieldset.variants?.usage?.formSection).toMatchObject({
      legend: {
        color: 'page.text.200',
        textStyle: 'heading-sm',
      },
      helperText: {
        color: 'page.text.200',
        paddingBlockStart: 'xs',
        textStyle: 'body-md',
      },
    })
  })

  test('should support defaultVariants.usage', () => {
    const defaultVariants = fieldset.defaultVariants as {
      usage: 'fieldGroup' | 'formSection'
    }
    expect(defaultVariants.usage).toEqual('fieldGroup')
  })
})
