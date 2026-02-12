import type { ElementType } from 'react'
import {
  PaginationRoot,
  PaginationPrevTrigger,
  PaginationNextTrigger,
  PaginationContext,
  PaginationItem,
  PaginationEllipsis,
  PaginationRootProvider,
} from './primitives'

/**
 * This module contains the parts of the Pagination component.
 * @module 'pagination/parts'
 */

interface PaginationPartsValue {
  /**
   * The context provider of the pagination family.
   */
  Root: ElementType
  /**
   * The trigger button for going backwards.
   */
  PrevTrigger: ElementType
  /**
   * The trigger button for going forwards.
   */
  NextTrigger: ElementType
  /**
   * The context provider of the pagination family.
   */
  Context: ElementType
  /**
   * The item component of the pagination family.
   */
  Item: ElementType
  /**
   * The ellipsis component of the pagination family.
   */
  Ellipsis: ElementType
  /**
   * The context provider of the pagination family.
   */
  RootProvider: ElementType
}

/**
 * An Object containing the parts of the Pagination component. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the PaginationParts object and
 * the entire family of components vs. only what you use.
 */
export const PaginationParts: PaginationPartsValue = {
  Root: PaginationRoot,
  PrevTrigger: PaginationPrevTrigger,
  NextTrigger: PaginationNextTrigger,
  Context: PaginationContext,
  Item: PaginationItem,
  Ellipsis: PaginationEllipsis,
  RootProvider: PaginationRootProvider,
}
