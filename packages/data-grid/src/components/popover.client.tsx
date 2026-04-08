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
  SelectRootProps,
  Show,
  useCerberusContext,
} from '@cerberus-design/react'
import { useRead } from '@cerberus-design/signals'
import { type HTMLAttributes, type PropsWithChildren, type RefObject } from 'react'
import { FormStatus, useFormStatus } from 'react-dom'
import type { ColumnFilterState, FilterOperator } from 'src/types'
import { Box, HStack, Stack } from 'styled-system/jsx'
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

  const store = useDataGridContext<TData>()
  const cols = useRead(store.columns)
  const filters = useRead(store.colFilters)

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
    <Stack direction="column" gap="sm" w="full">
      <For
        each={filters}
        fallback={
          <FormSection
            colCollection={colCollection}
            operatorCollection={operatorCollection}
            defaultColValue={cols[0].id}
            status={status}
          />
        }
      >
        {(filter) => (
          <FormSection
            key={`row:${filter.id}`}
            colCollection={colCollection}
            operatorCollection={operatorCollection}
            defaultColValue={cols[0].id}
            filter={filter}
            status={status}
            multi
          />
        )}
      </For>
    </Stack>
  )
}

interface FormSectionProps {
  colCollection: SelectRootProps['collection']
  operatorCollection: SelectRootProps['collection']
  filter?: ColumnFilterState
  defaultColValue: string
  status: FormStatus
  multi?: boolean
}

function FormSection(props: FormSectionProps) {
  const { filter } = props
  return (
    <HStack gap="sm" w="full">
      <Field label="Select a column">
        <Select
          collection={props.colCollection}
          name="column"
          placeholder="Choose option"
          size="sm"
          defaultValue={[filter?.id ?? props.defaultColValue]}
        >
          <For each={props.colCollection.items}>
            {(item) => <Option key={item.value} item={item} />}
          </For>
        </Select>
      </Field>

      <Field label="Select a operator">
        <Select
          collection={props.operatorCollection}
          name="operator"
          placeholder="Choose option"
          size="sm"
          defaultValue={[filter?.operator ?? Object.keys(OPERATORS)[0]]}
        >
          <For each={props.operatorCollection.items}>
            {(item) => <Option key={item.value} item={item} />}
          </For>
        </Select>
      </Field>

      <Field label="Value" required>
        <Input name="value" size="sm" defaultValue={filter?.value} />
      </Field>

      <Show when={!props.multi}>
        <SubmitButton pending={props.status.pending} />
      </Show>
    </HStack>
  )
}

interface SubmitButtonProps {
  pending: boolean
}

function SubmitButton(props: SubmitButtonProps) {
  const { icons } = useCerberusContext()
  const { arrowRight: Icon } = icons

  return (
    <Box alignSelf="flex-end" mb="0.25rem">
      <IconButton
        ariaLabel="Submit form"
        disabled={props.pending}
        type="submit"
        usage="filled"
        h="2rem!"
        w="2rem!"
      >
        <Icon />
      </IconButton>
    </Box>
  )
}
