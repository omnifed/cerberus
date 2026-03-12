'use client'

import { useCerberusContext } from '../../context/cerberus'
import { PropsWithChildren } from 'react'
import { IconButton, type IconButtonProps } from '../icon-button/index'
import { PaginationParts } from './parts'
import { GroupProps } from '../group'

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

export interface TriggerBaseProps {
  layout?: GroupProps['layout']
}
export type TriggerProps = TriggerBaseProps & Omit<IconButtonProps, 'clipboard'>

function PaginationTrigger(props: PropsWithChildren<TriggerProps>) {
  const { layout, ...btnProps } = props

  if (layout === 'attached') {
    return (
      <IconButton
        shape="square"
        usage="outlined-subtle"
        clipboard
        {...btnProps}
      />
    )
  }

  return <IconButton shape="square" clipboard {...btnProps} />
}
