import { ark, type HTMLArkProps } from '@ark-ui/react/factory'
import { cx } from '@cerberus/styled-system/css'
import { table, type TableVariantProps } from '@cerberus/styled-system/recipes'

/**
 * This module contains the primitives of the Table component.
 * @module 'table/primitives'
 */

/**
 * The root element is the container of the Table.
 */
export function TableRoot(props: HTMLArkProps<'div'> & TableVariantProps) {
  const { decoration, size, ...rootProps } = props
  const styles = table({
    decoration,
    size,
  })

  return (
    <ark.div
      {...rootProps}
      className={cx(styles.root, rootProps.className)}
      data-scope="table"
      data-part="root"
    />
  )
}

/**
 * The table element is the table itself.
 */
export function TableEl(props: HTMLArkProps<'table'>) {
  const styles = table()
  return (
    <ark.table
      {...props}
      className={cx(styles.table, props.className)}
      data-scope="table"
      data-part="table"
    />
  )
}

/**
 * The table caption element is the caption of the table.
 */
export function Caption(props: HTMLArkProps<'caption'>) {
  const styles = table()
  return (
    <ark.caption
      {...props}
      className={cx(styles.caption, props.className)}
      data-scope="table"
      data-part="caption"
    />
  )
}

/**
 * The table head element is the head of the table.
 */
export function Thead(props: HTMLArkProps<'thead'>) {
  const styles = table()
  return (
    <ark.thead
      {...props}
      className={cx(styles.thead, props.className)}
      data-scope="table"
      data-part="header"
    />
  )
}

/**
 * The table header cell element is the header cell of the table.
 */
export function Th(props: HTMLArkProps<'th'>) {
  const styles = table()
  return (
    <ark.th
      {...props}
      className={cx(styles.th, props.className)}
      data-scope="table"
      data-part="header-col"
    />
  )
}

/**
 * The table body element is the body of the table.
 */
export function Tbody(props: HTMLArkProps<'tbody'>) {
  const styles = table()
  return (
    <ark.tbody
      {...props}
      className={cx(styles.tbody, props.className)}
      data-scope="table"
      data-part="body"
    />
  )
}

/**
 * The table row element is the row of the table.
 */
export function Tr(props: HTMLArkProps<'tr'>) {
  const styles = table()
  return (
    <ark.tr
      {...props}
      className={cx(styles.tr, props.className)}
      data-scope="table"
      data-part="row"
    />
  )
}

/**
 * The table cell element is the cell of the table.
 */
export function Td(props: HTMLArkProps<'td'>) {
  const styles = table()
  return (
    <ark.td
      {...props}
      className={cx(styles.td, props.className)}
      data-scope="table"
      data-part="cell"
    />
  )
}

/**
 * The table footer element is the footer of the table.
 */
export function Tfoot(props: HTMLArkProps<'tfoot'>) {
  const styles = table()
  return (
    <ark.tfoot
      {...props}
      className={cx(styles.tfoot, props.className)}
      data-scope="table"
      data-part="footer"
    />
  )
}

/**
 * The table trigger element is the trigger of an actionable th cell.
 */
export function TableTrigger(props: HTMLArkProps<'button'>) {
  const styles = table()
  return (
    <ark.button
      {...props}
      className={cx(styles.trigger, props.className)}
      data-scope="table"
      data-part="trigger"
    />
  )
}
