import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

describe('tooltip recipe', () => {
  const { tooltip } = slotRecipes
  const tooltipBg = 'page.surface.inverse'

  test('should be exported', () => {
    expect(tooltip).toBeDefined()
  })

  test('should have a base style', () => {
    expect(tooltip.base?.content).toMatchObject({
      bg: tooltipBg,
      color: 'page.text.inverse',
      pxi: '3',
      py: 2,
      rounded: 'sm',
      maxH: '6rem',
      maxW: '17rem',
      shadow: 'lg',
      textStyle: 'label-sm',
      textWrap: 'pretty',
      w: 'max-content',
      zIndex: 'tooltip',
      _open: {
        animationStyle: 'scale-fade-in',
        animationDuration: 'fast',
      },
      _closed: {
        animationStyle: 'scale-fade-out',
        animationDuration: 'fast',
      },
    })
  })

  test('should have an arrow style', () => {
    expect(tooltip.base?.arrow).toMatchObject({
      '--arrow-size': 'sizes.2',
      '--arrow-background': tooltipBg,
    })
  })

  test('should have an arrowTip style', () => {
    expect(tooltip.base?.arrowTip).toMatchObject({
      borderTopWidth: '4px',
      borderInlineStartWidth: '4px',
      borderColor: tooltipBg,
    })
  })

  test('should have a trigger style', () => {
    expect(tooltip.base?.trigger).toMatchObject({
      color: 'action.text.100',
      transitionProperty: 'color',
      transitionDuration: 'fast',
      _hover: {
        color: tooltipBg,
      },
    })
  })
})
