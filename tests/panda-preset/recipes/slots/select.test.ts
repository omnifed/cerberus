import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus/panda-preset'

describe('select recipe', () => {
  const { select } = slotRecipes

  test('should be exported', () => {
    expect(select).toBeDefined()
  })

  test('should have a base style', () => {
    expect(select.base?.root).toMatchObject({
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
      w: 'full',
    })
  })

  test('should have a label style', () => {
    expect(select.base?.label).toMatchObject({
      color: 'page.text.initial',
      userSelect: 'none',
      _disabled: {
        color: 'page.text.100',
      },
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      textStyle: 'label-sm',
      w: 'full',
    })
  })

  test('should have a trigger style', () => {
    expect(select.base?.trigger).toMatchObject({
      appearance: 'none',
      alignItems: 'center',
      bgColor: 'page.surface.100',
      border: '1px solid',
      borderColor: 'action.border.100',
      color: 'page.text.initial',
      display: 'inline-flex',
      gap: 'sm',
      h: 'var(--select-trigger-height)',
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
      _placeholderShown: {
        color: 'page.text.100',
      },
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
      _open: {
        borderColor: 'action.border.focus',
      },
    })
  })

  test('should have an indicator style', () => {
    expect(select.base?.indicator).toMatchObject({
      transitionProperty: 'transform',
      transitionDuration: 'normal',
      _open: {
        transform: 'rotate(180deg)',
      },
    })
  })

  test('should have a positioner style', () => {
    expect(select.base?.positioner).toMatchObject({
      w: 'var(--reference-width)',
      zIndex: 'dropdown!',
    })
  })

  test('should have a content style', () => {
    expect(select.base?.content).toMatchObject({
      bgColor: 'page.surface.100',
      border: '1px solid',
      borderColor: 'page.border.200',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--select-content-gap)',
      maxH: '15.5rem',
      minW: '10rem',
      overflowY: 'auto',
      p: 'xs',
      rounded: 'md',
      shadow: 'lg',
      _focusVisible: {
        boxShadow: 'none',
        outline: '3px solid',
        outlineColor: 'action.border.focus',
        outlineOffset: '2px',
      },
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

  test('should have a item style', () => {
    expect(select.base?.item).toMatchObject({
      alignItems: 'center',
      cursor: 'pointer',
      color: 'page.text.initial',
      display: 'flex',
      flexShrink: 0,
      h: 'var(--select-item-height)',
      justifyContent: 'space-between',
      pxi: 'md',
      rounded: 'sm',
      textStyle: 'body-sm',
      transitionDuration: 'fast',
      transitionProperty: 'background, color',
      transitionTimingFunction: 'default',
      _focusVisible: {
        boxShadow: 'none',
        outline: '3px solid',
        outlineColor: 'action.border.focus',
        outlineOffset: '2px',
      },
      _highlighted: {
        bgColor: 'page.bg.200',
      },
      _checked: {
        color: 'page.text.initial',
      },
      _disabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
      },
    })
  })

  test('should have a itemGroupLabel style', () => {
    expect(select.base?.itemGroupLabel).toMatchObject({
      color: 'page.text.initial',
      pxi: 'md',
      py: '0.5rem',
      textStyle: 'label-sm',
      userSelect: 'none',
    })
  })

  test('should have a itemIndicator style', () => {
    expect(select.base?.itemIndicator).toMatchObject({
      color: 'page.text.initial',
    })
  })

  test('should have a size variant', () => {
    expect(select.variants?.size).toMatchObject({
      sm: {
        root: {
          '--select-trigger-height': '2rem',
        },
        content: {
          '--select-item-height': '2.5rem',
          '--select-content-gap': '0',
        },
      },
      md: {
        root: {
          '--select-trigger-height': '2.5rem',
        },
        content: {
          '--select-item-height': '2.5rem',
          '--select-content-gap': '0',
        },
      },
      lg: {
        root: {
          '--select-trigger-height': '3rem',
        },
        content: {
          '--select-item-height': '3rem',
          '--select-content-gap': '0.25rem',
        },
      },
    })
  })

  test('should have a default variant', () => {
    expect(select.defaultVariants).toMatchObject({
      size: 'md',
    })
  })
})
