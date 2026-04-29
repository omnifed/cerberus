import { table, type TableVariantProps } from 'styled-system/recipes'
import { type CerberusProps, createCerberusPrimitive } from '../../system/index'

/**
 * This module contains the primitives of the Table component.
 * @module 'table/primitives'
 */

const { withSlotRecipe } = createCerberusPrimitive(table)

// Root

export type TableRootProps = CerberusProps<'div'> & TableVariantProps
export const TableRoot = withSlotRecipe('div', 'root', {
  defaultProps: {
    'data-scope': 'table',
    'data-part': 'root',
  },
})

// TableEl

export type TableElProps = CerberusProps<'table'>
export const TableEl = withSlotRecipe('table', 'table', {
  defaultProps: {
    'data-scope': 'table',
    'data-part': 'table',
  },
})

// Caption

export type CaptionProps = CerberusProps<'caption'>
export const Caption = withSlotRecipe('caption', 'caption', {
  defaultProps: {
    'data-scope': 'table',
    'data-part': 'caption',
  },
})

// Thead

export type TheadProps = CerberusProps<'thead'>
export const Thead = withSlotRecipe('thead', 'thead', {
  defaultProps: {
    'data-scope': 'table',
    'data-part': 'header',
  },
})

// Th

export type ThProps = CerberusProps<'th'>
export const Th = withSlotRecipe('th', 'th', {
  defaultProps: {
    'data-scope': 'table',
    'data-part': 'header-col',
  },
})

// Tbody

export type TbodyProps = CerberusProps<'tbody'>
export const Tbody = withSlotRecipe('tbody', 'tbody', {
  defaultProps: {
    'data-scope': 'table',
    'data-part': 'body',
  },
})

// Tr
export type TrProps = CerberusProps<'tr'>
export const Tr = withSlotRecipe('tr', 'tr', {
  defaultProps: {
    'data-scope': 'table',
    'data-part': 'row',
  },
})

// Td

export type TdProps = CerberusProps<'td'>
export const Td = withSlotRecipe('td', 'td', {
  defaultProps: {
    'data-scope': 'table',
    'data-part': 'cell',
  },
})

// Tfoot

export type TfootProps = CerberusProps<'tfoot'>
export const Tfoot = withSlotRecipe('tfoot', 'tfoot', {
  defaultProps: {
    'data-scope': 'table',
    'data-part': 'footer',
  },
})

// TableTrigger

export type TableTriggerProps = CerberusProps<'button'>
export const TableTrigger = withSlotRecipe('button', 'trigger', {
  defaultProps: {
    'data-scope': 'table',
    'data-part': 'trigger',
  },
})
