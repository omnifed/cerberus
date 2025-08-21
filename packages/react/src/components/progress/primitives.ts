import { type HTMLArkProps } from '@ark-ui/react/factory'
import {
  progressBar,
  type ProgressBarVariantProps,
} from 'styled-system/recipes'
import {
  cerberus,
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module contains the ProgressBar component primitives.
 * @module @cerberus-design/react/components/progress-bar/primitives
 */

const { withSlotRecipe } = createCerberusPrimitive(progressBar)

// Root

export type ProgressBarRootProps = CerberusPrimitiveProps<
  HTMLArkProps<'div'> & ProgressBarVariantProps
>
export const ProgressBarRoot = withSlotRecipe(cerberus.div, 'root', {
  defaultProps: {
    'aria-valuemin': '0',
    'aria-valuemax': '100',
    role: 'progressbar',
  },
})

// Bar

export type ProgressBarBarProps = CerberusPrimitiveProps<
  HTMLArkProps<'div'> & ProgressBarVariantProps
>
export const ProgressBarBar = withSlotRecipe(cerberus.div, 'bar')
