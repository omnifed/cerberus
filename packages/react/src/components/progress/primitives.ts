import { progressBar, type ProgressBarVariantProps } from 'styled-system/recipes'
import { type CerberusProps, createCerberusPrimitive } from '../../system/index'

/**
 * This module contains the ProgressBar component primitives.
 * @module @cerberus-design/react/components/progress-bar/primitives
 */

const { withSlotRecipe } = createCerberusPrimitive(progressBar)

// Root

export type ProgressBarRootProps = CerberusProps<'div'> & ProgressBarVariantProps
export const ProgressBarRoot = withSlotRecipe('div', 'root', {
  defaultProps: {
    'aria-valuemin': '0',
    'aria-valuemax': '100',
    role: 'progressbar',
  },
})

// Bar

export type ProgressBarBarProps = CerberusProps<'div'> & ProgressBarVariantProps
export const ProgressBarBar = withSlotRecipe('div', 'bar')
