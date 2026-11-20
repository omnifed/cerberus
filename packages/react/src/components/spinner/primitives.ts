'use client'

import type { ComponentProps } from 'react'
import { cerberus } from '../../system/index'

/**
 * This module contains the Spinner component primitives.
 * @module @cerberus/react/components/spinner/primitives
 */

// Root -----------------------------------------------------

export type SpinnerRootProps = ComponentProps<typeof SpinnerRoot>
/**
 * The `<svg>` of the Spinner, with Panda style props. It renders no artwork of its
 * own: `<Spinner>` draws the animated arcs inside it.
 */
export const SpinnerRoot = cerberus('svg', undefined, {
  defaultProps: {
    'data-scope': 'spinner',
    'data-part': 'root',
    role: 'status',
    'aria-busy': true,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
  },
  // SVG presentation attributes, not CSS: `size` sets them, and Panda would
  // otherwise turn them into (unextractable) atomic styles
  forwardProps: ['width', 'height'],
})
