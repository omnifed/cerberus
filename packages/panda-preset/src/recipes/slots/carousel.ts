import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { carouselAnatomy } from '@ark-ui/react'

/**
 * This module contains the carousel recipe.
 * @module
 */

/**
 * Styles for the carousel family components
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/carousel)
 * @definition [Carousel docs](https://cerberus.digitalu.design/react/carousel)
 */
export const carousel: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'carousel',
  slots: carouselAnatomy.keys(),
  jsx: [
    // primitives
    'CarouselRoot',
    'CarouselControl',
    'CarouselPrevTrigger',
    'CarouselNextTrigger',
    'CarouselIndicatorGroup',
    'CarouselIndicator',
    'CarouselItemGroup',
    'CarouselItem',
    // abstractions
    'Carousel',
  ],

  base: {
    root: {
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      _horizontal: {
        w: 'full',
      },
      _vertical: {
        h: 'full',
      },
    },
    control: {
      alignItems: 'stretch',
      display: 'flex',
      gap: 'md',
    },
    prevTrigger: {},
    nextTrigger: {},
    indicatorGroup: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 2,
    },
    indicator: {
      width: 2,
      height: 2,
      borderRadius: 'full',
      backgroundColor: 'currentColor',
      marginX: 1,
    },
    itemGroup: {
      alignSelf: 'stretch',
      paddingBlock: '3rem',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    item: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      pos: 'relative',
    },
  },
})
