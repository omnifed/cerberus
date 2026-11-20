'use client'

import type { ReactNode } from 'react'
import { extractParts } from '../../internal/extract-parts'
import {
  TableCaption,
  TableRoot,
  TableTable,
  type TableRootProps,
} from './primitives'

/**
 * This module contains the Table abstraction.
 * @module
 */

const PARTS = {
  table: TableTable,
  caption: TableCaption,
}

export type TableProps = TableRootProps & {
  /**
   * An easy to understand description of the table, rendered as its
   * `<caption>`. Required for accessibility unless a `Table.Caption` child
   * is given.
   */
  caption?: ReactNode
  /**
   * If true, the table header will be sticky.
   * @default false
   */
  sticky?: boolean
}

/**
 * The Table component renders the table container (`Table.Root`) and the
 * `<table>` element (`Table.Table`) with its `caption`. Non-part children
 * (`Table.Header`, `Table.Body`, `Table.Footer`…) render inside the
 * `<table>`, after the caption. Direct `Table.Table` or `Table.Caption`
 * children override that part; a part child with children replaces its
 * default content (for `Table.Table`, everything inside the `<table>`).
 * Recipe variants (`size`, `decoration`) are set here and cascade to every
 * part.
 * @see https://cerberus.digitalu.design/docs/components/table
 * @example
 * ```tsx
 * <Table caption="Products" size="sm" decoration="zebra">
 *   <Table.Header>
 *     <Table.Row>
 *       <Table.HeaderCol scope="col">Name</Table.HeaderCol>
 *     </Table.Row>
 *   </Table.Header>
 *   <Table.Body>
 *     <Table.Row>
 *       <Table.Cell>Cerberus</Table.Cell>
 *     </Table.Row>
 *   </Table.Body>
 * </Table>
 * ```
 */
export function TableEl(props: TableProps) {
  const { caption, sticky, children, ...rootProps } = props

  const { parts, content } = extractParts(children, PARTS)

  const { children: tableChildren, ...tableOverrideProps } = parts.table ?? {}
  const { children: captionChildren, ...captionOverrideProps } =
    parts.caption ?? {}
  const captionContent = captionChildren ?? caption

  return (
    <TableRoot {...rootProps} data-sticky={sticky ?? false}>
      <TableTable {...tableOverrideProps}>
        {tableChildren ?? (
          <>
            {captionContent != null && captionContent !== '' && (
              <TableCaption {...captionOverrideProps}>
                {captionContent}
              </TableCaption>
            )}
            {content}
          </>
        )}
      </TableTable>
    </TableRoot>
  )
}
