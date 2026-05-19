import { marqueeAnatomy } from '@ark-ui/react'
import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'

/**
 * This module contains the avatar recipe.
 * @module
 */

/**
 * Styles for the marquee family components
 */
export const marquee: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'marquee',
  slots: marqueeAnatomy.keys(),
  jsx: [
    // primitives
    'MarqueeRoot',
    'MarqueeViewport',
    'MarqueeContent',
    'MarqueeEdge',
    'MarqueeItem',
    // abstractions
    'Marquee',
  ],

  base: {
    root: {
      '--marquee-edge-color': '{colors.page.surface.initial}',
      '--marquee-edge-size': '20%',
      position: 'relative',
      width: 'full',
      _paused: {
        animationPlayState: 'paused !important',
        '& *': {
          animationPlayState: 'paused !important',
        },
      },
    },
    viewport: {
      display: 'flex',
      height: 'full',
      overflow: 'hidden',
      width: 'full',
    },
    content: {
      animationTimingFunction: 'linear',
      animationFillMode: 'forwards',
      animationDuration: 'var(--marquee-duration)',
      animationDelay: 'var(--marquee-delay)',
      animationIterationCount: 'var(--marquee-loop-count)',
      display: 'flex',
      minWidth: 'max-content',
      _motionReduce: {
        animation: 'none !important',
      },
      "&[data-side='start'], &[data-side='end']": {
        animationName: 'marqueeX',
      },
      "&[data-side='top'], &[data-side='bottom']": {
        animationName: 'marqueeY',
      },
      _reverse: {
        animationDirection: 'reverse',
      },
      _horizontal: {
        flexDirection: 'row',
      },
      _vertical: {
        flexDirection: 'column',
      },
    },
    edge: {
      position: 'absolute',
      pointerEvents: 'none',
      zIndex: '1',

      _sideStart: {
        background:
          'linear-gradient(to right, var(--marquee-edge-color, white), transparent)',
        insetInlineStart: '0',
        insetY: '0',
        width: 'var(--marquee-edge-size)',
        _rtl: {
          background:
            'linear-gradient(to left, var(--marquee-edge-color, white), transparent)',
        },
      },
      _sideEnd: {
        background:
          'linear-gradient(to left, var(--marquee-edge-color, white), transparent)',
        insetY: '0',
        insetInlineEnd: '0',
        width: 'var(--marquee-edge-size)',
        _rtl: {
          background:
            'linear-gradient(to right, var(--marquee-edge-color, white), transparent)',
        },
      },
      _sideTop: {
        background:
          'linear-gradient(to bottom, var(--marquee-edge-color, white), transparent)',
        height: 'var(--marquee-edge-size)',
        insetX: '0',
        top: '0',
      },
      _sideBottom: {
        background:
          'linear-gradient(to top, var(--marquee-edge-color, white), transparent)',
        height: 'var(--marquee-edge-size)',
        insetX: '0',
        bottom: '0',
      },
    },
  },
})
