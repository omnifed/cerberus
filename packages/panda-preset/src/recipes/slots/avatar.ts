import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { avatarAnatomy } from '@ark-ui/anatomy'
import { focusStates } from '../shared/states'
import { createSlotGradientVariants } from '../shared/helpers'

/**
 * This module contains the avatar recipe.
 * @module
 */

/**
 * Styles for the avatar family components
 */
export const avatar: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'avatar',
  slots: avatarAnatomy.keys(),
  jsx: [
    // primitives
    'AvatarRoot',
    'AvatarImage',
    'AvatarFallback',
    // abstractions
    'Avatar',
  ],

  base: {
    root: {
      alignItems: 'center',
      borderRadius: 'var(--avatar-border-radius)',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
      fontFamily: 'mono',
      fontSize: 'var(--avatar-font-size)',
      justifyContent: 'center',
      overflow: 'hidden',
      size: 'var(--avatar-size)',
      textTransform: 'uppercase',
      _focusVisible: focusStates._focusVisible,
    },
    image: {
      objectFit: 'cover',
    },
    fallback: {
      color: 'inherit',
      fontFamily: 'inherit',
      fontSize: 'inherit',
    },
  },

  variants: {
    gradient: {
      ...createSlotGradientVariants(),
      none: {
        root: {},
      },
    },
    size: {
      xs: {
        root: {
          '--avatar-font-size': '0.75rem',
          '--avatar-size': '1.5rem',
        },
      },
      sm: {
        root: {
          '--avatar-font-size': '0.75rem',
          '--avatar-size': '2rem',
        },
      },
      md: {
        root: {
          '--avatar-font-size': '0.875rem',
          '--avatar-size': '2.5rem',
        },
      },
      lg: {
        root: {
          '--avatar-font-size': '1.25rem',
          '--avatar-size': '3rem',
        },
      },
      xl: {
        root: {
          '--avatar-font-size': '1.5rem',
          '--avatar-size': '4rem',
        },
      },
      '2xl': {
        root: {
          '--avatar-font-size': '2rem',
          '--avatar-size': '7rem',
        },
      },
      '3xl': {
        root: {
          '--avatar-font-size': '2.625rem',
          '--avatar-size': '10rem',
        },
      },
      '4xl': {
        root: {
          '--avatar-font-size': '3.5rem',
          '--avatar-size': '12rem',
        },
      },
    },
    shape: {
      circle: {
        root: {
          '--avatar-border-radius': '50%',
        },
      },
      square: {
        root: {
          '--avatar-border-radius': 'var(--cerberus-radii-md)',
        },
      },
    },
  },

  defaultVariants: {
    gradient: 'none',
    size: 'md',
    shape: 'circle',
  },
})
