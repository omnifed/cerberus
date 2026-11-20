'use client'

import type { ComponentProps } from 'react'
import { group } from 'styled-system/recipes'
import { cerberus } from '../../system/index'

/**
 * This module contains the Group component primitives.
 * @module @cerberus/react/components/group/primitives
 */

// Root -----------------------------------------------------

export type GroupRootProps = ComponentProps<typeof GroupRoot>
export const GroupRoot = cerberus('div', group, {
  defaultProps: { 'data-scope': 'group', 'data-part': 'root' },
})

// v1 name of the root props (`Group` itself renders `Group.Root`)
export type GroupProps = GroupRootProps
