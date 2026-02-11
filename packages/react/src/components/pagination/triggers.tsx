'use client'

import { useCerberusContext } from '../../context/cerberus'
import { PropsWithChildren } from 'react'
import { IconButton } from '../icon-button/index'
import { PaginationParts } from './parts'

export function PrevTrigger() {
  const { icons } = useCerberusContext()
  const { calendarPrev: Icon } = icons

  return (
    <PaginationParts.PrevTrigger asChild>
      <PaginationTrigger>
        <Icon />
      </PaginationTrigger>
    </PaginationParts.PrevTrigger>
  )
}

export function NextTrigger() {
  const { icons } = useCerberusContext()
  const { calendarNext: Icon } = icons

  return (
    <PaginationParts.NextTrigger asChild>
      <PaginationTrigger>
        <Icon />
      </PaginationTrigger>
    </PaginationParts.NextTrigger>
  )
}

function PaginationTrigger(props: PropsWithChildren) {
  return <IconButton shape="square" clipboard {...props} />
}
