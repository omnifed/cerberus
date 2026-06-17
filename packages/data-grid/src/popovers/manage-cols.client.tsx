'use client'

import { PropsWithChildren } from 'react'
import { useDataGridContext } from '../context.client'
import { useRead } from '@cerberus-design/signals'

export function ManageColsPopover(props: PropsWithChildren) {
  const store = useDataGridContext()
  const open = useRead(store.showManage)

  console.log({ open })

  return <div>{props.children}</div>
}
