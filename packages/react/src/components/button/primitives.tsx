'use client'

import type { ComponentProps } from 'react'
import { button, buttonGroup } from 'styled-system/recipes'
import { cerberus } from '../../system/index'

const getDefaultProps = (slot: string) => ({
  defaultProps: { 'data-scope': slot, 'data-part': 'root' },
})

// Button -------------------------------------------------------

export type ButtonRootProps = ComponentProps<typeof ButtonRoot>
export const ButtonRoot = cerberus('button', button, getDefaultProps('button'))

// ButtonGroup --------------------------------------------------

export type ButtonGroupProps = ComponentProps<typeof ButtonGroup>
export const ButtonGroup = cerberus('div', buttonGroup, getDefaultProps('button-group'))
