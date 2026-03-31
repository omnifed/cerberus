import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus/panda-preset'

describe('popover recipe', () => {
  const { popover } = slotRecipes

  test('should be exported', () => {
    expect(popover).toBeDefined()
  })

  test('should have a className', () => {
    expect(popover.className).toEqual('popover')
  })

  test('should have slots', () => {
    expect(popover.slots).toMatchObject([
      'arrow',
      'arrowTip',
      'anchor',
      'trigger',
      'indicator',
      'positioner',
      'content',
      'title',
      'description',
      'closeTrigger',
      'header',
      'body',
      'footer',
    ])
  })

  test('should have jsx aliases', () => {
    expect(popover.jsx).toMatchObject([
      // primitives
      'PopoverTrigger',
      'PopoverAnchor',
      'PopoverPositioner',
      'PopoverArrow',
      'PopoverArrowTip',
      'PopoverContent',
      'PopoverTitle',
      'PopoverDescription',
      'PopoverCloseTrigger',
      'PopoverIndicator',
      // custom layout helpers
      'PopoverHeader',
      'PopoverBody',
      'PopoverFooter',
      // abstractions
      'Popover',
    ])
  })

  test('should have a base styles', () => {
    expect(popover.base).toMatchObject({
      content: {
        '--popover-bg': 'colors.page.bg.initial',
        '--popover-size': 'sizes.xs',
        '--popover-mobile-size': 'calc(100dvw - 1rem)',
        '--popover-z-index': 'zIndex.popover',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        textStyle: 'sm',
        bgColor: 'var(--popover-bg)',
        border: '1px solid',
        borderColor: 'page.border.100',
        maxHeight: 'var(--available-height)',
        outline: '0',
        pos: 'relative',
        rounded: 'sm',
        shadow: 'sm',
        transformOrigin: 'var(--transform-origin)',
        width: {
          base: 'min(var(--popover-mobile-size), var(--popover-size))',
          sm: 'var(--popover-size)',
        },
        zIndex: 'calc(var(--popover-z-index) + var(--layer-index, 0))',
        _open: {
          animationStyle: 'scale-fade-in',
          animationDuration: 'fast',
        },
        _closed: {
          animationStyle: 'scale-fade-out',
          animationDuration: 'faster',
        },
      },
      header: {
        px: 'var(--popover-padding)',
        pt: 'var(--popover-padding)',
      },
      body: {
        p: 'var(--popover-padding)',
        flex: '1',
      },
      footer: {
        alignItems: 'center',
        display: 'flex',
        px: 'var(--popover-padding)',
        pb: 'var(--popover-padding)',
      },
      arrow: {
        '--arrow-background': 'var(--popover-bg)',
        '--arrow-shadow-color': 'colors.page.border.100',
        '--arrow-size': '0.75rem',
      },
      arrowTip: {
        borderLeftColor: 'var(--arrow-shadow-color)',
        borderLeftWidth: '1px',
        borderTopColor: 'var(--arrow-shadow-color)',
        borderTopWidth: '1px',
      },
      closeTrigger: {
        position: 'absolute',
        right: 'md',
        top: 'md',
        zIndex: 'decorator',
      },
    })
  })

  test('should have a size variant', () => {
    expect(popover.variants?.size).toMatchObject({
      xs: {
        content: {
          '--popover-padding': 'spacing.xs',
        },
      },
      sm: {
        content: {
          '--popover-padding': 'spacing.sm',
        },
      },
      md: {
        content: {
          '--popover-padding': 'spacing.md',
        },
      },
      lg: {
        content: {
          '--popover-padding': 'spacing.lg',
        },
      },
    })
  })

  test('should have a default palette variant', () => {
    const defaultVariants = popover.defaultVariants as { size: string }
    expect(defaultVariants.size).toBe('md')
  })
})
