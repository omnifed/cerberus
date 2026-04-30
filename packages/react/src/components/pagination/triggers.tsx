'use client'

import { PropsWithChildren } from 'react'
import { useCerberusContext } from '../../context/cerberus'
import { GroupProps } from '../group'
import { IconButton, IconButtonRootProps } from '../icon-button/index'
import { PaginationParts } from './parts'

export function PrevTrigger(props: TriggerProps) {
  const { icons } = useCerberusContext()
  const { calendarPrev: Icon } = icons

  return (
    <PaginationParts.PrevTrigger asChild>
      <PaginationTrigger {...props}>
        <Icon />
      </PaginationTrigger>
    </PaginationParts.PrevTrigger>
  )
}

export function NextTrigger(props: TriggerProps) {
  const { icons } = useCerberusContext()
  const { calendarNext: Icon } = icons

  return (
    <PaginationParts.NextTrigger asChild>
      <PaginationTrigger {...props}>
        <Icon />
      </PaginationTrigger>
    </PaginationParts.NextTrigger>
  )
}

export interface TriggerProps extends IconButtonRootProps {
  layout?: GroupProps['layout']
}

function PaginationTrigger(props: PropsWithChildren<TriggerProps>) {
  const { layout, ...btnProps } = props

  if (layout === 'attached') {
    return <IconButton shape="square" usage="outlined-subtle" clipboard {...btnProps} />
  }

  return <IconButton shape="square" clipboard {...btnProps} />
}
