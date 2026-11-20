'use client'

import {
  IconButtonRoot,
  OpenChangeDetails,
  Popover as CerberusPopover,
  PopoverRootProps,
  Portal,
  Show,
  useCerberusContext,
} from '@cerberus-design/react'
import { batch, useRead } from '@cerberus-design/signals'
import { HTMLAttributes, PropsWithChildren, RefObject } from 'react'
import { useDataGridContext } from '../context.client'
import { FilterForm } from '../popovers/filter.client'
import { ManageColsPopover } from '../popovers/manage-cols.client'
import { getMainAxis, meta, type MetaKey } from '../popovers/meta'

export function Popover(props: PropsWithChildren<PopoverRootProps>) {
  const store = useDataGridContext()

  const colH = useRead(store.rowSize)
  const featureOpen = useRead(store.featureOpen)

  const open = featureOpen.open
  const key = String(featureOpen.key) as MetaKey

  return (
    <CerberusPopover.Root
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
  return <CerberusPopover.Anchor {...props} asChild />
}

// Content

interface PopoverContentProps {
  ref: RefObject<HTMLDivElement | null>
}

export function PopoverContent(props: PopoverContentProps) {
  const { ref } = props

  const store = useDataGridContext()
  const featureOpen = useRead(store.featureOpen)

  const { icons } = useCerberusContext()
  const CloseIcon = icons?.close

  const data = meta[featureOpen.key as keyof typeof meta]

  return (
    <Portal container={ref}>
      <CerberusPopover.Positioner>
        <CerberusPopover.Content
          bgColor="page.bg.100"
          style={{ width: data?.size || '20rem' }}
        >
          <CerberusPopover.Header>
            <CerberusPopover.CloseTrigger asChild>
              <IconButtonRoot size="xs" usage="ghost">
                <CloseIcon />
              </IconButtonRoot>
            </CerberusPopover.CloseTrigger>

            <Show when={data?.title}>
              {() => (
                <CerberusPopover.Title textStyle="label-md">
                  {data?.title}
                </CerberusPopover.Title>
              )}
            </Show>
          </CerberusPopover.Header>

          <Show when={featureOpen.key === 'filter'}>
            {() => <FilterForm />}
          </Show>
          <Show when={featureOpen.key === 'manage'}>
            {() => <ManageColsPopover />}
          </Show>
        </CerberusPopover.Content>
      </CerberusPopover.Positioner>
    </Portal>
  )
}
