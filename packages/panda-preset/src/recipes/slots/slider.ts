import { sliderAnatomy } from '@ark-ui/react'
import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { noPageSlotPalettes } from '../shared/palettes'

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
  slots: [...sliderAnatomy.keys(), 'markerIndicator'],
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
    'SliderMarkerIndicator',
    'SliderDraggingIndicator',
    // abstractions
    'Slider',
  ],

  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'sm',
      isolation: 'isolate',
      position: 'relative',
      textStyle: 'body-sm',
      touchAction: 'none',
      w: 'full',
    },
    control: {
      alignItems: 'center',
      display: 'inline-flex',
      position: 'relative',
    },
    track: {
      bgColor: 'page.surface.300',
      borderRadius: 'full',
      flex: '1',
      overflow: 'hidden',
    },
    range: {
      height: 'inherit',
      width: 'inherit',
    },
    markerGroup: {
      position: 'absolute!',
      zIndex: '1',
    },
    marker: {
      '--marker-bg': {
        base: '{colors.page.text.100}',
        _underValue: '{colors.page.surface.initial}',
      },
      alignItems: 'center',
      color: 'page.text.100',
      display: 'flex',
      fontFamily: 'mono',
      gap: 'calc(var(--slider-thumb-size) / 2.5)',
      textStyle: 'label-sm',
    },
    markerIndicator: {
      bgColor: 'var(--marker-bg)',
      borderRadius: 'full',
      height: 'calc(var(--slider-track-size) - (var(--slider-marker-size) * 2))',
      width: 'calc(var(--slider-track-size) - (var(--slider-marker-size) * 2))',
    },
    draggingIndicator: {},
    thumb: {
      alignItems: 'center',
      borderRadius: 'full',
      cursor: 'pointer',
      display: 'flex',
      height: 'var(--slider-thumb-size)',
      justifyContent: 'center',
      outline: 0,
      transitionProperty: 'box-shadow, background-color',
      transitionDuration: 'fast',
      width: 'var(--slider-thumb-size)',
      zIndex: '2',
      _focusVisible: {
        ring: '3px',
        ringColor: 'action.border.focus',
      },
    },
  },

  variants: {
    palette: noPageSlotPalettes,
    size: {
      sm: {
        root: {
          '--slider-thumb-size': '1.5rem',
          '--slider-track-size': '0.5rem',
          '--slider-marker-center': '9px',
          '--slider-marker-size': '0.06rem',
          '--slider-marker-inset': '3px',
          _label: {
            textStyle: 'label-sm',
          },
        },
      },
      md: {
        root: {
          '--slider-thumb-size': '1.75rem',
          '--slider-track-size': '0.75rem',
          '--slider-marker-center': '10px',
          '--slider-marker-size': '0.12rem',
          '--slider-marker-inset': '4px',
          _label: {
            textStyle: 'label-sm',
          },
        },
      },
      lg: {
        root: {
          '--slider-thumb-size': '2rem',
          '--slider-track-size': '1rem',
          '--slider-marker-center': '11px',
          '--slider-marker-size': '0.19rem',
          '--slider-marker-inset': '5px',
          _label: {
            textStyle: 'label-md',
          },
        },
      },
    },
    usage: {
      gradient: {
        range: {
          gradient: 'charon-dark',
          _disabled: {
            bgColor: 'page.bg.300',
            gradient: 'none',
          },
        },
        thumb: {
          bgColor: 'action.ghost.initial',
          borderWidth: '2px',
          borderColor: 'action.border.initial',
          _disabled: {
            bgColor: 'page.bg.initial',
            borderColor: 'page.border.initial',
            cursor: 'not-allowed',
            _hover: {
              bgColor: 'page.bg.initial',
            },
          },
          _hover: {
            bgColor: 'action.ghost.hover',
          },
          _dragging: {
            bgColor: 'action.ghost.active!',
          },
        },
      },
      filled: {
        range: {
          bgColor: 'colorPalette.bg.initial',
          _disabled: {
            bgColor: 'page.bg.300',
          },
        },
        thumb: {
          bgColor: 'colorPalette.bg.initial',
          _disabled: {
            bgColor: 'page.bg.300',
            cursor: 'not-allowed',
          },
        },
      },
      outlined: {
        track: {
          border: '1px solid',
          borderColor: 'colorPalette.bg.initial/50',
          shadow: 'inset',
          _disabled: {
            borderColor: 'page.bg.300',
          },
        },
        range: {
          bgColor: 'colorPalette.bg.initial',
          _disabled: {
            bgColor: 'page.bg.300',
          },
        },
        thumb: {
          bgColor: 'page.surface.initial',
          borderWidth: '2px',
          borderColor: 'colorPalette.bg.initial',
          _disabled: {
            bgColor: 'page.bg.initial',
            borderColor: 'page.border.initial',
            cursor: 'not-allowed',
            _hover: {
              bgColor: 'page.bg.initial',
            },
          },
          _hover: {
            bgColor: 'action.ghost.hover',
          },
          _dragging: {
            bgColor: 'action.ghost.active!',
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
