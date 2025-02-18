import type { HTMLArkProps } from '@ark-ui/react/factory'
import type { TablePartsValue } from './parts'
import {
  Caption,
  TableEl,
  TableRoot,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from './primitives'
import type { TableVariantProps } from '@cerberus/styled-system/recipes'

interface TableRootElProps extends HTMLArkProps<'div'>, TableVariantProps {
  sticky?: boolean
}

/**
 * An abstraction over the TableRoot component that adds a sticky attribute.
 *
 * @description [Cerberus Docs](https://cerberus.digitalu.design/react/table)
 *
 * @remarks
 *
 * This component is used to create a table with an optional sticky header.
 * It is a wrapper around the TableRoot component and the TableEl primitive.
 */
function TableRootEl(props: TableRootElProps) {
  const { sticky, ...rootProps } = props
  return (
    <TableRoot {...rootProps} data-sticky={sticky}>
      <TableEl>{rootProps.children}</TableEl>
    </TableRoot>
  )
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
export const Table: Omit<TablePartsValue, 'Table'> = {
  Root: TableRootEl,
  Caption: Caption,
  Header: Thead,
  HeaderCol: Th,
  Body: Tbody,
  Row: Tr,
  Cell: Td,
  Footer: Tfoot,
}
