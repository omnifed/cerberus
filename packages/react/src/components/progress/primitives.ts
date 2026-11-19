'use client'

import { ark } from '@ark-ui/react/factory'
import { createSlotRecipeContext, type ComponentProps } from 'styled-system/jsx'
import { progressBar } from 'styled-system/recipes'

/**
 * This module contains the ProgressBar component primitives.
 * @module @cerberus/react/components/progress/primitives
 */

const { withProvider, withContext } = createSlotRecipeContext(progressBar)

// `progress` is the scope Ark's Progress (CircularProgress) renders; keep them apart
const getDefaultProps = (part: string) => ({
  'data-scope': 'progress-bar',
  'data-part': part,
})

// Root -----------------------------------------------------

export type ProgressBarRootProps = ComponentProps<typeof ProgressBarRoot>
export const ProgressBarRoot = withProvider(ark.div, 'root', {
  defaultProps: {
    ...getDefaultProps('root'),
    role: 'progressbar',
    'aria-valuemin': 0,
    'aria-valuemax': 100,
  },
})

// Bar ------------------------------------------------------

export type ProgressBarBarProps = ComponentProps<typeof ProgressBarBar>
export const ProgressBarBar = withContext(ark.div, 'bar', {
  defaultProps: getDefaultProps('bar'),
})
