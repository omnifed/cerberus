import { describe, test, expect } from 'bun:test'
import {
  focusStates,
  formStates,
  slotRecipes,
} from '@cerberus-design/panda-preset'
import { label } from 'styled-system/recipes'

describe('combobox recipe', () => {
  const { combobox } = slotRecipes

  test('should be exported', () => {
    expect(combobox).toBeDefined()
  })

  test('should have a jsx property', () => {
    expect(combobox.jsx).toMatchObject([
      // primitives
      'ComboboxRoot',
      'ComboboxLabel',
      'ComboboxControl',
      'ComboboxInput',
      'ComboboxTrigger',
      'ComboboxClearTrigger',
      'ComboboxPositioner',
      'ComboboxContent',
      'ComboboxItemGroup',
      'ComboboxItemGroupLabel',
      'ComboboxItem',
      'ComboboxItemText',
      'ComboboxItemIndicator',
      'ComboboxStartIcon',
      // abstractions
      'Combobox',
      'ComboItemGroup',
      'ComboboxItemWithIndicator',
    ])
  })

  test('should have base.root styles', () => {
    expect(combobox.base?.root).toMatchObject({
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      gap: '1.5',
      w: 'full',
    })
  })

  test('should have base.label styles', () => {
    const labelStyles = (label as unknown as { base: Record<string, string> })
      .base
    expect(combobox.base?.label).toMatchObject({
      ...labelStyles,
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      textStyle: 'label-sm',
      w: 'full',
    })
  })

  test('should have base.input styles', () => {
    expect(combobox.base?.input).toMatchObject({
      appearance: 'none',
      alignItems: 'center',
      bgColor: 'page.surface.100',
      border: '1px solid',
      borderColor: 'action.border.100',
      color: 'page.text.initial',
      display: 'inline-flex',
      gap: 'sm',
      h: 'var(--combobox-trigger-height)',
      justifyContent: 'space-between',
      outline: 0,
      minW: 9,
      position: 'relative',
      pxi: 'md',
      rounded: 'md',
      textStyle: 'body-sm',
      transitionDuration: 'normal',
      transitionProperty: 'background, box-shadow, border-color',
      transitionTimingFunction: 'default',
      w: 'full',
      '&:is([data-has=start-indicator])': {
        paddingInlineStart: 10,
      },
      _placeholderShown: {
        color: 'page.text.100',
      },
      _open: {
        borderColor: 'action.border.focus',
      },
      _focusVisible: focusStates._focusVisible,
      _disabled: {
        color: 'page.text.100',
        cursor: 'not-allowed',
        '& :where(svg)': {
          color: 'page.text.100',
        },
      },
      _invalid: {
        borderColor: 'danger.border.initial',
      },
      '& :where(svg)': {
        color: 'page.text.100',
      },
    })
  })

  test('should have base.startIcon styles', () => {
    expect(combobox.base?.startIcon).toMatchObject({
      alignItems: 'center',
      bottom: '0',
      color: 'action.text.inverse',
      display: 'flex',
      flexDirection: 'column',
      h: 'var(--combobox-trigger-height)',
      justifyContent: 'center',
      position: 'absolute',
      userSelect: 'none',
      w: '2rem',
      zIndex: 'decorator',
      left: 2,
    })
  })

  test('should have base.trigger styles', () => {
    expect(combobox.base?.trigger).toMatchObject({
      alignItems: 'center',
      bottom: '0',
      color: 'action.text.inverse',
      display: 'flex',
      flexDirection: 'column',
      h: 'var(--combobox-trigger-height)',
      justifyContent: 'center',
      position: 'absolute',
      userSelect: 'none',
      w: '2rem',
      zIndex: 'decorator',
      right: 2,
      transformOrigin: 'center',
      transitionDuration: 'normal',
      transitionProperty: 'transform',
      _open: {
        transform: 'rotate(180deg)',
      },
    })
  })

  test('should have base.clearTrigger styles', () => {
    expect(combobox.base?.clearTrigger).toMatchObject({
      alignItems: 'center',
      bottom: '0',
      color: 'action.text.inverse',
      display: 'flex',
      flexDirection: 'column',
      h: 'var(--combobox-trigger-height)',
      justifyContent: 'center',
      position: 'absolute',
      userSelect: 'none',
      w: '2rem',
      zIndex: 'decorator',
      right: 10,
    })
  })

  test('should have base.positioner styles', () => {
    expect(combobox.base?.positioner).toMatchObject({
      w: 'var(--reference-width)',
      zIndex: 'dropdown!',
    })
  })

  test('should have base.content styles', () => {
    expect(combobox.base?.content).toMatchObject({
      bgColor: 'page.surface.100',
      border: '1px solid',
      borderColor: 'page.border.200',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--combobox-content-gap)',
      maxH: '15.5rem',
      minW: '10rem',
      overflowY: 'auto',
      p: 'xs',
      rounded: 'md',
      shadow: 'lg',
      ...focusStates,
      _open: {
        animationStyle: 'slide-fade-in',
        animationDuration: 'fast',
      },
      _closed: {
        animationStyle: 'slide-fade-out',
        animationDuration: 'faster',
      },
    })
  })

  test('should have base.item styles', () => {
    expect(combobox.base?.item).toMatchObject({
      alignItems: 'center',
      cursor: 'pointer',
      color: 'page.text.initial',
      display: 'flex',
      flexShrink: 0,
      gap: 'md',
      h: 'var(--combobox-item-height)',
      pxi: 'md',
      rounded: 'sm',
      textStyle: 'body-sm',
      transitionDuration: 'fast',
      transitionProperty: 'background, color',
      transitionTimingFunction: 'default',
      ...focusStates,
      _highlighted: {
        bgColor: 'page.bg.200',
      },
      _checked: {
        color: 'page.text.initial',
      },
      _disabled: formStates._disabled,
    })
  })

  test('should have base.itemGroupLabel styles', () => {
    expect(combobox.base?.itemGroupLabel).toMatchObject({
      color: 'page.text.initial',
      pxi: 'md',
      py: '0.5rem',
      textStyle: 'label-sm',
      userSelect: 'none',
    })
  })

  test('should have base.itemIndicator styles', () => {
    expect(combobox.base?.itemIndicator).toMatchObject({
      color: 'page.text.initial',
    })
  })

  test('should have variants styles', () => {
    expect(combobox.variants).toMatchObject({
      size: {
        sm: {
          root: {
            '--combobox-trigger-height': '2rem',
          },
          content: {
            '--combobox-item-height': '2.5rem',
            '--combobox-content-gap': '0',
          },
        },
        md: {
          root: {
            '--combobox-trigger-height': '2.5rem',
          },
          content: {
            '--combobox-item-height': '2.5rem',
            '--combobox-content-gap': '0',
          },
        },
        lg: {
          root: {
            '--combobox-trigger-height': '3rem',
          },
          content: {
            '--combobox-item-height': '3rem',
            '--combobox-content-gap': '0.25rem',
          },
        },
      },
    })
  })

  test('should have default variants', () => {
    expect(combobox.defaultVariants).toMatchObject({
      size: 'md',
    })
  })
})
