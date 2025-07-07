import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { carouselAnatomy } from '@ark-ui/react'
import { focusStates } from '../shared/states'

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
      alignItems: 'center',
      display: 'flex',
      gap: 'sm',
      mx: 'auto',
    },
    indicatorGroup: {
      alignItems: 'center',
      color: 'page.bg.100',
      display: 'flex',
      justifyContent: 'center',
      gap: 'sm',
      mx: 'auto',
    },
    indicator: {
      bgColor: 'currentColor',
      rounded: '0.25rem',
      height: '0.25rem',
      mx: 1,
      width: '4rem',
      ...focusStates,
      '&:is([data-current])': {
        bgColor: 'action.bg.initial',
      },
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
