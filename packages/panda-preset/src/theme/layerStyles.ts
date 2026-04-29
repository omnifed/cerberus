import { defineLayerStyles } from '@pandacss/dev'

export const layerStyles = defineLayerStyles({
  // indicator: floating border color or left/bottom border
  'indicator.bottom': {
    value: {
      position: 'relative',
      '--indicator-color-fallback': 'inherit',
      _before: {
        content: `""`,
        position: 'absolute',
        bottom: 'var(--indicator-offset-y, 0)',
        insetInline: 'var(--indicator-offset-x, 0)',
        height: 'var(--indicator-thickness, 2px)',
        background: 'var(--indicator-color, var(--indicator-color-fallback))',
      },
    },
  },
  'indicator.top': {
    value: {
      position: 'relative',
      '--indicator-color-fallback': 'inherit',
      _before: {
        content: `""`,
        position: 'absolute',
        top: 'var(--indicator-offset-y, 0)',
        insetInline: 'var(--indicator-offset-x, 0)',
        height: 'var(--indicator-thickness, 2px)',
        background: 'var(--indicator-color, var(--indicator-color-fallback))',
      },
    },
  },
  'indicator.start': {
    value: {
      position: 'relative',
      '--indicator-color-fallback': 'inherit',
      _before: {
        content: `""`,
        position: 'absolute',
        insetInlineStart: 'var(--indicator-offset-x, 0)',
        insetBlock: 'var(--indicator-offset-y, 0)',
        width: 'var(--indicator-thickness, 2px)',
        background: 'var(--indicator-color, var(--indicator-color-fallback))',
      },
    },
  },
  'indicator.end': {
    value: {
      position: 'relative',
      '--indicator-color-fallback': 'inherit',
      _before: {
        content: `""`,
        position: 'absolute',
        insetInlineEnd: 'var(--indicator-offset-x, 0)',
        insetBlock: 'var(--indicator-offset-y, 0)',
        width: 'var(--indicator-thickness, 2px)',
        background: 'var(--indicator-color, var(--indicator-color-fallback))',
      },
    },
  },

  disabled: {
    value: {
      opacity: '0.5',
      cursor: 'not-allowed',
    },
  },

  none: {
    value: {},
  },
})
