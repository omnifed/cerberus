import { type HTMLArkProps } from '@ark-ui/react/factory'
import { table, type TableVariantProps } from 'styled-system/recipes'
import {
  cerberus,
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module contains the primitives of the Table component.
 * @module 'table/primitives'
 */

const { withSlotRecipe } = createCerberusPrimitive(table)

// Root

export type TableRootProps = CerberusPrimitiveProps<
  HTMLArkProps<'div'> & TableVariantProps
>
export const TableRoot = withSlotRecipe(cerberus.div, 'root', {
  defaultProps: {
    'data-scope': 'table',
    'data-part': 'root',
  },
})

// TableEl

export type TableElProps = CerberusPrimitiveProps<HTMLArkProps<'table'>>
export const TableEl = withSlotRecipe(cerberus.table, 'table', {
  defaultProps: {
    'data-scope': 'table',
    'data-part': 'table',
  },
})

// Caption

export type CaptionProps = CerberusPrimitiveProps<HTMLArkProps<'caption'>>
export const Caption = withSlotRecipe(cerberus.caption, 'caption', {
  defaultProps: {
    'data-scope': 'table',
    'data-part': 'caption',
  },
})

// Thead

export type TheadProps = CerberusPrimitiveProps<HTMLArkProps<'thead'>>
export const Thead = withSlotRecipe(cerberus.thead, 'thead', {
  defaultProps: {
    'data-scope': 'table',
    'data-part': 'header',
  },
})

// Th

export type ThProps = CerberusPrimitiveProps<HTMLArkProps<'th'>>
export const Th = withSlotRecipe(cerberus.th, 'th', {
  defaultProps: {
    'data-scope': 'table',
    'data-part': 'header-col',
  },
})

// Tbody

export type TbodyProps = CerberusPrimitiveProps<HTMLArkProps<'tbody'>>
export const Tbody = withSlotRecipe(cerberus.tbody, 'tbody', {
  defaultProps: {
    'data-scope': 'table',
    'data-part': 'body',
  },
})

// Tr
export type TrProps = CerberusPrimitiveProps<HTMLArkProps<'tr'>>
export const Tr = withSlotRecipe(cerberus.tr, 'tr', {
  defaultProps: {
    'data-scope': 'table',
    'data-part': 'row',
  },
})

// Td

export type TdProps = CerberusPrimitiveProps<HTMLArkProps<'td'>>
export const Td = withSlotRecipe(cerberus.td, 'td', {
  defaultProps: {
    'data-scope': 'table',
    'data-part': 'cell',
  },
})

// Tfoot

export type TfootProps = CerberusPrimitiveProps<HTMLArkProps<'tfoot'>>
export const Tfoot = withSlotRecipe(cerberus.tfoot, 'tfoot', {
  defaultProps: {
    'data-scope': 'table',
    'data-part': 'footer',
  },
})

// TableTrigger

export type TableTriggerProps = CerberusPrimitiveProps<HTMLArkProps<'button'>>
export const TableTrigger = withSlotRecipe(cerberus.button, 'trigger', {
  defaultProps: {
    'data-scope': 'table',
    'data-part': 'trigger',
  },
})
