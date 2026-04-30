import { defineLayerStyles } from '@pandacss/dev'

export const layerStyles = defineLayerStyles({
  // outline: some border color + color combination
  outline: {
    subtle: {
      value: {
        borderWidth: '1px',
        color: '{colorPalette.border.100}',
      },
    },
    solid: {
      value: {
        borderWidth: '2px',
        borderColor: '{colorPalette.border.initial}',
      },
    },
  },

  // indicator: floating border color or left/bottom border
  indicator: {
    bottom: {
      value: {
        position: 'relative',
        '--indicator-color-fallback': '{colors.colorPalette.border.initial}',
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
    top: {
      value: {
        position: 'relative',
        '--indicator-color-fallback': '{colors.colorPalette.border.initial}',
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
    start: {
      value: {
        position: 'relative',
        '--indicator-color-fallback': '{colors.colorPalette.border.initial}',
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
    end: {
      value: {
        position: 'relative',
        '--indicator-color-fallback': '{colors.colorPalette.border.initial}',
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
  },

  // states
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
