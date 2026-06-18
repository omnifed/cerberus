'use client'

import {
  PopoverRootProps,
  PopoverParts,
  OpenChangeDetails,
  useCerberusContext,
  Portal,
  IconButtonRoot,
  Show,
} from '@cerberus-design/react'
import { useRead, batch } from '@cerberus-design/signals'
import { PropsWithChildren, HTMLAttributes, RefObject } from 'react'
import { useDataGridContext } from '../context.client'
import { ManageColsPopover } from '../popovers/manage-cols.client'
import { FilterForm } from '../popovers/filter.client'
import { getMainAxis, meta, type MetaKey } from '../popovers/meta'
import { css } from 'styled-system/css'

export function Popover(props: PropsWithChildren<PopoverRootProps>) {
  const store = useDataGridContext()

  const colH = useRead(store.rowSize)
  const featureOpen = useRead(store.featureOpen)

  // const popH = 119
  // const mainAxis = popH + colH
  const open = featureOpen.open
  const key = String(featureOpen.key) as MetaKey

  return (
    <PopoverParts.Root
      {...props}
      lazyMount
      open={open}
      onOpenChange={(details: OpenChangeDetails) => {
        if (!details.open) {
          batch(() => {
            store.setColFilter((prev) => ({
              ...prev,
              active: prev.active.filter((id) => prev.filters[id].value),
              editing: null,
            }))
            store.setShowManage(false)
          })
        }
      }}
      portalled
      positioning={{
        placement: 'right-start',
        offset: {
          crossAxis: colH - 8,
          mainAxis: getMainAxis(key),
        },
      }}
    />
  )
}

// Anchor

export function PopoverAnchor(
  props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>,
) {
  return <PopoverParts.Anchor {...props} asChild />
}

// Content

interface PopoverContentProps {
  ref: RefObject<HTMLDivElement | null>
}

export function PopoverContent(props: PopoverContentProps) {
  const store = useDataGridContext()
  const featureOpen = useRead(store.featureOpen)

  const { icons } = useCerberusContext()
  const CloseIcon = icons?.close

  const data = meta[featureOpen.key as keyof typeof meta]

  return (
    <Portal container={props.ref}>
      <PopoverParts.Positioner>
        <PopoverParts.Content
          bgColor="page.bg.100"
          style={{ width: data?.size || '20rem' }}
        >
          <PopoverParts.Header>
            <PopoverParts.CloseTrigger asChild>
              <IconButtonRoot size="sm" usage="ghost">
                <CloseIcon />
              </IconButtonRoot>
            </PopoverParts.CloseTrigger>

            <Show when={data?.title}>
              {() => (
                <PopoverParts.Title textStyle="label-md">
                  {data?.title}
                </PopoverParts.Title>
              )}
            </Show>
          </PopoverParts.Header>

          <Show when={featureOpen.key === 'filter'}>{() => <FilterForm />}</Show>
          <Show when={featureOpen.key === 'manage'}>{() => <ManageColsPopover />}</Show>
        </PopoverParts.Content>
      </PopoverParts.Positioner>
    </Portal>
  )
}
