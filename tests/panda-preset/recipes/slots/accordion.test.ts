import { describe, test, expect } from 'bun:test'
import { focusStates, slotRecipes } from '@cerberus/panda-preset'

describe('accordion recipe', () => {
  const { accordion } = slotRecipes

  test('should be exported', () => {
    expect(accordion).toBeDefined()
  })

  test('should have a base style', () => {
    expect(accordion.base?.root).toMatchObject({
      display: 'flex',
      flexDirection: 'column',
      w: 'full',
      _smSize: {
        '& :is([data-part=item-trigger])': {
          textStyle: 'heading-xs',
        },
        '& :is([data-part=item-content])': {
          textStyle: 'body-sm',
        },
        '& :is([data-part=item-indicator] > svg)': {
          h: '16px',
          w: '16px',
        },
      },
      _lgSize: {
        '& :is([data-part=item-trigger])': {
          textStyle: 'heading-sm',
        },
        '& :is([data-part=item-content])': {
          textStyle: 'body-md',
        },
        '& :is([data-part=item-indicator] > svg)': {
          h: '24px',
          w: '24px',
        },
      },
    })
  })

  test('should have an item style', () => {
    expect(accordion.base?.item).toMatchObject({
      borderBlockEnd: '2px solid',
      borderColor: 'page.border.initial',
      paddingBlock: 'var(--accordion-item-padding)',
    })
  })

  test('should have an itemTrigger style', () => {
    expect(accordion.base?.itemTrigger).toMatchObject({
      alignItems: 'center',
      cursor: 'pointer',
      color: 'page.text.initial',
      display: 'flex',
      paddingBlock: 'var(--accordion-item-trigger-padding)',
      pxi: 'sm',
      rounded: 'var(--accordion-item-trigger-radii)',
      transitionProperty: 'background-color',
      transitionDuration: 'fast',
      w: 'full',
      ...focusStates,
      _hover: {
        bgColor: 'action.ghost.hover',
      },
      _startIndicator: {
        gap: 'md',
        justifyContent: 'flex-start',
      },
      _endIndicator: {
        justifyContent: 'space-between',
      },
    })
  })

  test('should have an itemContent style', () => {
    expect(accordion.base?.itemContent).toMatchObject({
      color: 'page.text.initial',
      overflow: 'hidden',
      _motionSafe: {
        animationDuration: 'fast',
        animationFillMode: 'forwards',
        transitionProperty: 'padding',
        transitionDuration: 'fast',
        _open: {
          animationName: 'expandHeight, fadeIn',
        },
        _closed: {
          animationName: 'collapseHeight, fadeOut',
        },
      },
    })
  })

  test('should have an itemIndicator style', () => {
    expect(accordion.base?.itemIndicator).toMatchObject({
      _motionSafe: {
        transitionProperty: 'transform',
        transitionDuration: 'fast',
      },
      _open: {
        transform: 'rotate(180deg)',
      },
      _closed: {
        transform: 'rotate(0deg)',
      },
    })
  })

  test('should have a size variant for itemTrigger with lg', () => {
    expect(accordion.variants).toMatchObject({
      size: {
        sm: {
          root: {
            '--accordion-item-padding': '{spacing.xs}',
            '--accordion-item-trigger-padding': '{spacing.sm}',
            '--accordion-item-trigger-radii': '{radii.lg}',
          },
        },
        lg: {
          root: {
            '--accordion-item-padding': '{spacing.sm}',
            '--accordion-item-trigger-padding': '{spacing.md}',
            '--accordion-item-trigger-radii': '{radii.md}',
          },
        },
      },
    })
  })

  test('should have a default variant size', () => {
    const defaultVariants = accordion.defaultVariants as { size: string }
    expect(defaultVariants.size).toBe('lg')
  })
})
