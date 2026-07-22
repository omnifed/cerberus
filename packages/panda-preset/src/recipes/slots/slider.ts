import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { sliderAnatomy } from '@ark-ui/react'
import { allPalettes, allSlotPalettes } from '../shared/palettes'

/**
 * This module contains the slider recipe.
 * @module
 */

/**
 * Styles for the slider family components
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/slider)
 * @definition [Slider docs](https://cerberus.digitalu.design/react/slider)
 */
export const slider: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'slider',
  slots: sliderAnatomy.keys(),
  jsx: [
    // primitives
    'SliderRoot',
    'SliderLabel',
    'SliderValueText',
    'SliderControl',
    'SliderTrack',
    'SliderRange',
    'SliderThumb',
    'SliderMarkerGroup',
    'SliderMarker',
    // abstractions
    'Slider',
  ],

  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1',
      isolation: 'isolate',
      position: 'relative',
      textStyle: 'body-sm',
      touchAction: 'none',
      w: 'full',
    },
    label: {
      textStyle: 'label-sm',
    },
    control: {
      alignItems: 'center',
      display: 'inline-flex',
      position: 'relative',
    },
    track: {
      borderRadius: 'full',
      flex: '1',
      overflow: 'hidden',
    },
    range: {
      height: 'inherit',
      width: 'inherit',
      _disabled: { bg: 'border.emphasized!' },
    },
    markerGroup: {
      position: 'absolute!',
      zIndex: '1',
    },
    marker: {
      '--marker-bg': { base: 'white', _underValue: 'colors.bg' },
      alignItems: 'center',
      color: 'fg.muted',
      display: 'flex',
      gap: 'calc(var(--slider-thumb-size) / 2)',
      textStyle: 'body-xs',
    },
    draggingIndicator: {
      bgColor: 'var(--marker-bg)',
      borderRadius: 'full',
      height: 'calc(var(--slider-track-size) - var(--slider-marker-size))',
      width: 'calc(var(--slider-track-size) - var(--slider-marker-size))',
    },
    thumb: {
      alignItems: 'center',
      borderRadius: 'full',
      display: 'flex',
      height: 'var(--slider-thumb-size)',
      justifyContent: 'center',
      outline: 0,
      transition: 'shadow',
      width: 'var(--slider-thumb-size)',
      zIndex: '2',
      _focusVisible: {
        ring: '3px',
        ringColor: 'action.border.focus',
      },
    },
  },

  variants: {
    palette: allSlotPalettes,
    size: {
      sm: {
        root: {
          '--slider-thumb-size': '1.5rem',
          '--slider-track-size': '0.5rem',
          '--slider-marker-center': '6px',
          '--slider-marker-size': '0.06rem',
          '--slider-marker-inset': '3px',
        },
      },
      md: {
        root: {
          '--slider-thumb-size': '1.75rem',
          '--slider-track-size': '0.75rem',
          '--slider-marker-center': '7px',
          '--slider-marker-size': '0.12rem',
          '--slider-marker-inset': '4px',
        },
      },
      lg: {
        root: {
          '--slider-thumb-size': '2rem',
          '--slider-track-size': '1rem',
          '--slider-marker-center': '9px',
          '--slider-marker-size': '0.19rem',
          '--slider-marker-inset': '5px',
        },
      },
    },
    usage: {
      gradient: {
        track: {
          bgColor: 'page.surface.300',
          _disabled: {
            opacity: '0.5',
          },
        },
        range: {
          gradient: 'charon-dark',
        },
        thumb: {
          bgColor: 'action.ghost.initial',
          borderWidth: '2px',
          borderColor: 'action.border.initial',
          _disabled: {
            opacity: '0.5',
          },
        },
      },
      filled: {
        track: {
          bgColor: 'page.surface.300',
          _disabled: {
            opacity: '0.5',
          },
        },
        range: {
          bgColor: 'colorPalette.bg.initial',
        },
        thumb: {
          bgColor: 'action.ghost.initial',
          _disabled: {
            opacity: '0.5',
          },
        },
      },
      outlined: {
        track: {
          bgColor: 'colorPalette.surface.300',
          shadow: 'inset',
        },
        range: {
          bgColor: 'colorPalette.bg.initial',
        },
        thumb: {
          borderWidth: '2px',
          borderColor: 'action.border.initial',
          bgColor: 'colorPalette.bg.100',
          _disabled: {
            opacity: '0.5',
          },
        },
      },
    },
    orientation: {
      vertical: {
        root: {
          display: 'inline-flex',
        },
        control: {
          flexDirection: 'column',
          height: '100%',
          minWidth: 'var(--slider-thumb-size)',
          '&:has(.chakra-slider__markerLabel)': {
            marginEnd: 'md',
          },
        },
        track: {
          width: 'var(--slider-track-size)',
        },
        thumb: {
          left: '50%',
          translate: '-50% 0',
        },
        markerGroup: {
          insetStart: 'var(--slider-marker-center)',
          insetBlock: 'var(--slider-marker-inset)',
        },
        marker: {
          flexDirection: 'row',
        },
      },
      horizontal: {
        control: {
          flexDirection: 'row',
          width: '100%',
          minHeight: 'var(--slider-thumb-size)',
          '&:has(.chakra-slider__markerLabel)': {
            marginBottom: 'md',
          },
        },
        track: {
          height: 'var(--slider-track-size)',
        },
        thumb: {
          top: '50%',
          translate: '0 -50%',
        },
        markerGroup: {
          top: 'var(--slider-marker-center)',
          insetInline: 'var(--slider-marker-inset)',
        },
        marker: {
          flexDirection: 'column',
        },
      },
    },
  },

  defaultVariants: {
    palette: 'action',
    size: 'lg',
    orientation: 'horizontal',
    usage: 'gradient',
  },
})
