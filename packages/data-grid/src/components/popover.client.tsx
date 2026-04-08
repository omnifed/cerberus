'use client'

import {
  cerberus,
  createSelectCollection,
  Field,
  For,
  IconButton,
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
import { type HTMLAttributes, type PropsWithChildren, type RefObject } from 'react'
import { useFormStatus } from 'react-dom'
import type { ColumnFilterState, FilterOperator } from 'src/types'
import { Box, HStack } from 'styled-system/jsx'
import { OPERATORS } from '../const'
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
      portalled
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

export function DGPopoverContent(props: DGPopoverContentProps) {
  const { icons } = useCerberusContext()
  const CloseIcon = icons?.close

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

            <Box gap="sm" pt="0.62rem" w="full">
              <FilterForm />
            </Box>
          </PopoverParts.Body>
        </PopoverParts.Content>
      </PopoverParts.Positioner>
    </Portal>
  )
}

function FilterForm<TData>() {
  const store = useDataGridContext<TData>()

  function filter(formData: FormData) {
    const payload: ColumnFilterState = {
      id: formData.get('column') as string,
      operator: formData.get('operator') as FilterOperator,
      value: formData.get('value') as string,
    }
    store.setColFilter([payload])
    store.setShowColFilter(false)
  }

  return (
    <cerberus.form action={filter} w="full">
      <FormFields />
    </cerberus.form>
  )
}

function FormFields<TData>() {
  const status = useFormStatus()

  const { icons } = useCerberusContext()
  const { arrowRight: Icon } = icons

  const store = useDataGridContext<TData>()
  const cols = useRead(store.columns)

  const colCollection = createSelectCollection(
    cols.map((col) => ({ value: col.id, label: String(col.original.header) })),
  )
  const operatorCollection = createSelectCollection(
    Object.keys(OPERATORS).map((key) => ({
      value: key,
      label: OPERATORS[key as keyof typeof OPERATORS].replaceAll('_', ' '),
    })),
  )

  return (
    <HStack gap="sm" w="full">
      <Field label="Select a column">
        <Select
          collection={colCollection}
          name="column"
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
          name="operator"
          placeholder="Choose option"
          size="sm"
          defaultValue={[Object.keys(OPERATORS)[0]]}
        >
          <For each={operatorCollection.items}>
            {(item) => <Option key={item.value} item={item} />}
          </For>
        </Select>
      </Field>

      <Field label="Value" required>
        <Input name="value" size="sm" />
      </Field>

      <Box alignSelf="flex-end" mb="0.25rem">
        <IconButton
          ariaLabel="Submit form"
          disabled={status.pending}
          type="submit"
          usage="filled"
          h="2rem!"
          w="2rem!"
        >
          <Icon />
        </IconButton>
      </Box>
    </HStack>
  )
}
