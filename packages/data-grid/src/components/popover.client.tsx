'use client'

import {
  createSelectCollection,
  Field,
  For,
  IconButtonRoot,
  Input,
  OpenChangeDetails,
  Option,
  PopoverParts,
  PopoverRootProps,
  Portal,
  Select,
  useCerberusContext,
} from '@cerberus-design/react'
import { useRead } from '@cerberus-design/signals'
import { RefObject, type HTMLAttributes, type PropsWithChildren } from 'react'
import { HStack } from 'styled-system/jsx'
import { useDataGridContext } from '../context.client'

export function DGPopover(props: PropsWithChildren<PopoverRootProps>) {
  const store = useDataGridContext()

  const colH = useRead(store.rowSize)
  const open = useRead(store.showColFilter)

  const popH = 119
  const mainAxis = popH + colH

  return (
    <PopoverParts.Root
      {...props}
      open={open}
      onOpenChange={(details: OpenChangeDetails) =>
        store.setShowColFilter(details.open)
      }
      positioning={{
        placement: 'top-start',
        offset: {
          mainAxis: -mainAxis,
        },
      }}
    />
  )
}

export function DGPopoverAnchor(
  props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>,
) {
  return <PopoverParts.Anchor {...props} asChild />
}

interface DGPopoverContentProps {
  ref: RefObject<HTMLDivElement | null>
}

export function DGPopoverContent<TData>(props: DGPopoverContentProps) {
  const store = useDataGridContext<TData>()
  const cols = useRead(store.columns)

  const { icons } = useCerberusContext()
  const CloseIcon = icons?.close

  const colCollection = createSelectCollection(
    cols.map((col) => ({ value: col.id, label: String(col.original.header) })),
  )
  const operatorCollection = createSelectCollection([])

  return (
    <Portal container={props.ref}>
      <PopoverParts.Positioner>
        <PopoverParts.Content
          css={{
            '--popover-size': '37.5rem!',
          }}
        >
          <PopoverParts.Body>
            <PopoverParts.CloseTrigger asChild>
              <IconButtonRoot size="sm" usage="ghost">
                <CloseIcon />
              </IconButtonRoot>
            </PopoverParts.CloseTrigger>

            <PopoverParts.Title textStyle="label-md">
              Filter By Column
            </PopoverParts.Title>

            <HStack gap="sm" pt="0.62rem" w="full">
              <Field label="Select a column">
                <Select
                  collection={colCollection}
                  placeholder="Choose option"
                  size="sm"
                  defaultValue={[cols[0].id]}
                >
                  <For each={colCollection.items}>
                    {(item) => <Option key={item.value} item={item} />}
                  </For>
                </Select>
              </Field>

              <Field label="Select a operator">
                <Select
                  collection={operatorCollection}
                  placeholder="Choose option"
                  size="sm"
                >
                  <For each={operatorCollection.items}>
                    {(item) => <Option key={item.value} item={item} />}
                  </For>
                </Select>
              </Field>

              <Field label="Value">
                <Input size="sm" />
              </Field>
            </HStack>
          </PopoverParts.Body>
        </PopoverParts.Content>
      </PopoverParts.Positioner>
    </Portal>
  )
}
