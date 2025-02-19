import type { ElementType } from 'react'
import {
  TableRoot,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
  Tfoot,
  TableEl,
  Caption,
  TableTrigger,
} from './primitives'

/**
 * This module contains the parts of the Table parts.
 * @module 'table/parts'
 */

export interface TablePartsValue {
  /**
   * The container of the table.
   */
  Root: ElementType
  /**
   * The table element.
   */
  Table: ElementType
  /**
   * The table caption element.
   */
  Caption: ElementType
  /**
   * The table head element.
   */
  Header: ElementType
  /**
   * The table header cell element.
   */
  HeaderCol: ElementType
  /**
   * The table body element.
   */
  Body: ElementType
  /**
   * The table row element.
   */
  Row: ElementType
  /**
   * The table cell element.
   */
  Cell: ElementType
  /**
   * The table footer element.
   */
  Footer: ElementType
  /**
   * The table trigger element.
   */
  Trigger: ElementType
}

/**
 * An Object containing the parts of the Table component. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the TableParts object and
 * the entire family of components vs. only what you use.
 */
export const TableParts: TablePartsValue = {
  Root: TableRoot,
  Table: TableEl,
  Caption: Caption,
  Header: Thead,
  HeaderCol: Th,
  Body: Tbody,
  Row: Tr,
  Cell: Td,
  Footer: Tfoot,
  Trigger: TableTrigger,
}
