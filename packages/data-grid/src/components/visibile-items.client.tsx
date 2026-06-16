'use client'

import { MenuItem, Show, useCerberusContext } from '@cerberus-design/react'
import { HStack } from 'styled-system/jsx'
import { FEATURE_VALUES } from '../const'
import { type Accessor, useRead } from '@cerberus-design/signals'

type Props = {
  colId: string
  isVisible: Accessor<boolean>
  isLastVisibleCol: boolean
}

export function MatchVisibleItems(props: Props) {
  const visible = useRead(props.isVisible)
  return (
    <>
      <Show when={visible && !props.isLastVisibleCol}>{() => <HideItem />}</Show>
      <ManageCols />
    </>
  )
}

function HideItem() {
  const { icons } = useCerberusContext()
  const Icon = icons.viewOff

  return (
    <MenuItem value={FEATURE_VALUES.hide}>
      <HStack gap="sm" w="full">
        <Icon />
        Hide Column
      </HStack>
    </MenuItem>
  )
}

function ManageCols() {
  const { icons } = useCerberusContext()
  const Icon = icons.column

  return (
    <MenuItem value={FEATURE_VALUES.manageVisibility}>
      <HStack gap="sm" w="full">
        <Icon />
        Manage Columns
      </HStack>
    </MenuItem>
  )
}
