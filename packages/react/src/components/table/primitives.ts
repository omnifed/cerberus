'use client'

import { ark } from '@ark-ui/react/factory'
import { createSlotRecipeContext, type ComponentProps } from 'styled-system/jsx'
import { table } from 'styled-system/recipes'

/**
 * This module contains the Table component primitives. Each part renders the
 * native table element of its recipe slot (`Table.Header` → `<thead>`, `thead`
 * slot), so the browser's table semantics apply as they are.
 * @module @cerberus/react/components/table/primitives
 */

const { withProvider, withContext } = createSlotRecipeContext(table)

// `data-part` keeps the v1 values (`header`, `header-col`, `body`…)
const getDefaultProps = (part: string) => ({
  'data-scope': 'table',
  'data-part': part,
})

// Root -----------------------------------------------------

export type TableRootProps = ComponentProps<typeof TableRoot>
export const TableRoot = withProvider(ark.div, 'root', {
  defaultProps: getDefaultProps('root'),
})

// Table ----------------------------------------------------

export type TableTableProps = ComponentProps<typeof TableTable>
export const TableTable = withContext(ark.table, 'table', {
  defaultProps: getDefaultProps('table'),
})

// Caption --------------------------------------------------

export type TableCaptionProps = ComponentProps<typeof TableCaption>
export const TableCaption = withContext(ark.caption, 'caption', {
  defaultProps: getDefaultProps('caption'),
})

// Header ---------------------------------------------------

export type TableHeaderProps = ComponentProps<typeof TableHeader>
export const TableHeader = withContext(ark.thead, 'thead', {
  defaultProps: getDefaultProps('header'),
})

// HeaderCol ------------------------------------------------

export type TableHeaderColProps = ComponentProps<typeof TableHeaderCol>
export const TableHeaderCol = withContext(ark.th, 'th', {
  defaultProps: getDefaultProps('header-col'),
})

// Body -----------------------------------------------------

export type TableBodyProps = ComponentProps<typeof TableBody>
export const TableBody = withContext(ark.tbody, 'tbody', {
  defaultProps: getDefaultProps('body'),
})

// Row ------------------------------------------------------

export type TableRowProps = ComponentProps<typeof TableRow>
export const TableRow = withContext(ark.tr, 'tr', {
  defaultProps: getDefaultProps('row'),
})

// Cell -----------------------------------------------------

export type TableCellProps = ComponentProps<typeof TableCell>
export const TableCell = withContext(ark.td, 'td', {
  defaultProps: getDefaultProps('cell'),
})

// Footer ---------------------------------------------------

export type TableFooterProps = ComponentProps<typeof TableFooter>
export const TableFooter = withContext(ark.tfoot, 'tfoot', {
  defaultProps: getDefaultProps('footer'),
})

// Trigger --------------------------------------------------

export type TableTriggerProps = ComponentProps<typeof TableTrigger>
export const TableTrigger = withContext(ark.button, 'trigger', {
  // A plain button: it must not submit a form the table sits in
  defaultProps: { ...getDefaultProps('trigger'), type: 'button' },
})
