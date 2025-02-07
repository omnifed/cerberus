import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

describe('ratingGroup recipe', () => {
  const { ratingGroup } = slotRecipes

  test('should be exported', () => {
    expect(ratingGroup).toBeDefined()
  })

  test('should support all the JSX elements', () => {
    expect(ratingGroup.jsx).toEqual([
      'RatingRoot',
      'RatingLabel',
      'RatingControl',
      'RatingItem',
      'Rating',
    ])
  })

  test('should have base styles', () => {
    expect(ratingGroup.base).toEqual({
      root: {
        display: 'flex',
        flexDirection: 'var(--rating-orientation, column)',
        gap: 'xs',
        justifyContent: 'var(--rating-root-justify, initial)',
        w: 'var(--rating-w, auto)',
      },
      label: {
        color: 'page.text.initial',
        fontSize: 'var(--rating-label, 0.75rem)',
      },
      control: {
        alignItems: 'center',
        display: 'flex',
        gap: 'xs',
      },
      item: {
        color: 'page.bg.100',
        cursor: 'pointer',
        rounded: 'xs',
        _focusVisible: {
          boxShadow: 'none',
          outline: '3px solid',
          outlineColor: 'action.border.focus',
          outlineOffset: '2px',
        },
        _highlighted: {
          color: 'colorPalette.bg.hover',
        },
        _readOnly: {
          cursor: 'default',
        },
      },
    })
  })

  test('should have variant styles', () => {
    expect(ratingGroup.variants).toEqual({
      palette: {
        action: {
          item: {
            colorPalette: 'action',
          },
        },
        warning: {
          item: {
            colorPalette: 'warning',
          },
        },
      },
      orientation: {
        horizontal: {
          root: {
            '--rating-orientation': 'row',
            '--rating-root-justify': 'space-between',
            '--rating-w': '100%',
          },
        },
        vertical: {
          root: {
            '--rating-orientation': 'column',
            '--rating-root-justify': 'initial',
            '--rating-w': 'auto',
          },
        },
      },
      size: {
        sm: {
          root: {
            '--rating-label': '0.75rem',
          },
        },
        md: {
          root: {
            '--rating-label': '1rem',
          },
        },
      },
    })
  })

  test('should have default variants', () => {
    expect(ratingGroup.defaultVariants).toEqual({
      palette: 'action',
      orientation: 'vertical',
      size: 'sm',
    })
  })
})
