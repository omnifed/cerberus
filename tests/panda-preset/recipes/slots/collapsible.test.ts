import { describe, it, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

// Basic test to validate the collapsible recipe structure

describe('collapsible slot recipe', () => {
  const { collapsible } = slotRecipes

  it('should be defined', () => {
    expect(collapsible).toBeTruthy()
  })

  it('should have correct className', () => {
    expect(collapsible.className).toBe('collapsible')
  })

  it('should have jsx defined as array', () => {
    expect(Array.isArray(collapsible.jsx)).toBe(true)
    expect(collapsible.jsx).toMatchObject([
      'CollapsibleRoot',
      'CollapsibleTrigger',
      'CollapsibleIndicator',
      'CollapsibleContent',
      'Collapsible',
    ])
  })

  it('should have a content slot defined in base styles', () => {
    expect(collapsible.base).toHaveProperty('content')
    expect(collapsible.base?.content).toMatchObject({ overflow: 'hidden' })
  })

  it('should have variants defined', () => {
    expect(collapsible.variants).toMatchObject({
      effect: {
        default: {
          content: {
            _open: {
              animationName: 'expandHeight, fadeIn',
              animationDuration: 'moderate',
            },
            _closed: {
              animationName: 'collapseHeight, fadeOut',
              animationDuration: 'moderate',
            },
          },
        },
        fade: {
          content: {
            _open: {
              animationName: 'fadeIn',
              animationDuration: 'moderate',
            },
            _closed: {
              animationName: 'fadeOut',
              animationDuration: 'moderate',
            },
          },
        },
      },
    })
  })

  it('should have defaultVariants defined', () => {
    expect(collapsible.defaultVariants).toMatchObject({ effect: 'default' })
  })
})
