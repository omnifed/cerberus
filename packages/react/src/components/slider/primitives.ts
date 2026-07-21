import {} from '@ark-ui/react/slider'
import { slider, type SliderVariantProps } from 'styled-system/recipes'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module contains the primitives of the Slider component.
 * @module 'slider/primitives'
 */

const { withSlotRecipe } = createCerberusPrimitive(slider)
