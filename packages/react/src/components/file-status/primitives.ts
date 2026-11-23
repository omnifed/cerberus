'use client'

import { ark } from '@ark-ui/react/factory'
import { createSlotRecipeContext, type ComponentProps } from 'styled-system/jsx'
import { fileStatus } from 'styled-system/recipes'

/**
 * This module contains the FileStatus primitives: the layers of the status
 * card, styled by the `fileStatus` slot recipe.
 * @module
 */

const { withProvider, withContext } = createSlotRecipeContext(fileStatus)

const getDefaultProps = (part: string) => ({
  'data-scope': 'file-status',
  'data-part': part,
})

// Root -----------------------------------------------------

export type FileStatusRootProps = ComponentProps<typeof FileStatusRoot>
export const FileStatusRoot = withProvider(ark.div, 'root', {
  defaultProps: getDefaultProps('root'),
})

// Icon -----------------------------------------------------

export type FileStatusIconProps = ComponentProps<typeof FileStatusIcon>
export const FileStatusIcon = withContext(ark.div, 'icon', {
  defaultProps: getDefaultProps('icon'),
})

// Info -----------------------------------------------------

export type FileStatusInfoProps = ComponentProps<typeof FileStatusInfo>
export const FileStatusInfo = withContext(ark.div, 'info', {
  defaultProps: getDefaultProps('info'),
})

// Name -----------------------------------------------------

export type FileStatusNameProps = ComponentProps<typeof FileStatusName>
export const FileStatusName = withContext(ark.small, 'name', {
  defaultProps: getDefaultProps('name'),
})

// StatusText -----------------------------------------------

export type FileStatusStatusTextProps = ComponentProps<
  typeof FileStatusStatusText
>
export const FileStatusStatusText = withContext(ark.span, 'statusText', {
  defaultProps: getDefaultProps('status-text'),
})
