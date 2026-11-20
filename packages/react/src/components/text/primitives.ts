import type { ComponentProps } from 'react'
import { cerberus } from '../../system/index'

/**
 * This module contains the Text primitive.
 * @module @cerberus/react/components/text/primitives
 */

// Root -----------------------------------------------------

/**
 * A `<p>` with Panda style props, `css` and `asChild`. Text has no recipe, so
 * nothing is styled until you pass style props (e.g. `textStyle`).
 */
export type TextRootProps = ComponentProps<typeof TextRoot>
export const TextRoot = cerberus.p
