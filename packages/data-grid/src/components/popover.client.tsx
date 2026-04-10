'use client'

import {
  Button,
  ButtonGroup,
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
  useCerberusContext,
} from '@cerberus-design/react'
import { batch, createComputed, useRead } from '@cerberus-design/signals'
import { type HTMLAttributes, type PropsWithChildren, type RefObject } from 'react'
import { FormStatus, useFormStatus } from 'react-dom'
import { Box, HStack, Stack } from 'styled-system/jsx'
import { OPERATORS } from '../const'
import { useDataGridContext } from '../context.client'
import type { ColumnFilter, FilterOperator } from '../types'

export function DGPopover(props: PropsWithChildren<PopoverRootProps>) {
  const store = useDataGridContext()

  const colH = useRead(store.rowSize)
  const open = useRead(store.showColFilter)

  const popH = 119
  const mainAxis = popH + colH

  return (
    <PopoverParts.Root
      {...props}
      lazyMount
      open={open}
      onOpenChange={(details: OpenChangeDetails) => {
        if (!details.open) {
          store.setColFilter((prev) => ({
            ...prev,
            active: prev.active.filter((filterId) => prev.filters[filterId].value),
            editing: null,
          }))
        }
        store.setShowColFilter(details.open)
      }}
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
          <PopoverParts.Header>
            <PopoverParts.CloseTrigger asChild>
              <IconButtonRoot size="sm" usage="ghost">
                <CloseIcon />
              </IconButtonRoot>
            </PopoverParts.CloseTrigger>

            <PopoverParts.Title textStyle="label-md">
              Filter By Column
            </PopoverParts.Title>
          </PopoverParts.Header>

          <FilterForm />
        </PopoverParts.Content>
      </PopoverParts.Positioner>
    </Portal>
  )
}

function FilterForm<TData>() {
  const store = useDataGridContext<TData>()

  function filter(formData: FormData) {
    const payload: ColumnFilter = {
      id: formData.get('column') as string,
      operator: formData.get('operator') as FilterOperator,
      value: formData.get('value') as string,
    }

    batch(() => {
      store.setColFilter((prev) => ({
        ...prev,
        active: [...prev.active, payload.id],
        filters: {
          ...prev.filters,
          [payload.id]: payload,
        },
        editing: null,
      }))
      store.setShowColFilter(false)
    })
  }

  return (
    <cerberus.form action={filter} w="full">
      <PopoverParts.Body>
        <FormFields />
      </PopoverParts.Body>
    </cerberus.form>
  )
}

function FormFields<TData>() {
  const status = useFormStatus()

  const store = useDataGridContext<TData>()
  const cols = useRead(store.columns)
  const colFilters = useRead(store.colFilters)

  const filterToEdit = createComputed<ColumnFilter>(() => {
    return colFilters.filters[colFilters.editing as keyof typeof colFilters.filters]
  })

  const colCollection = createSelectCollection(
    cols.map((col) => ({ value: col.id, label: String(col.original.header) })),
  )
  const operatorCollection = createSelectCollection(
    Object.keys(OPERATORS).map((key) => ({
      value: key,
      label: OPERATORS[key as keyof typeof OPERATORS].replaceAll('_', ' '),
    })),
  )

  if (!filterToEdit()) return null

  return (
    <Stack direction="column" gap="sm" w="full">
      <FormSection
        colCollection={colCollection}
        operatorCollection={operatorCollection}
        defaultColValue={cols[0].id}
        filter={filterToEdit()}
        status={status}
      />
    </Stack>
  )
}

interface FormSectionProps {
  colCollection: SelectRootProps['collection']
  operatorCollection: SelectRootProps['collection']
  defaultColValue: string
  status: FormStatus
  filter?: ColumnFilter
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
          defaultValue={[filter?.operator ?? OPERATORS.contains]}
        >
          <For each={props.operatorCollection.items}>
            {(item) => <Option key={item.value} item={item} />}
          </For>
        </Select>
      </Field>

      <Field label="Value" required>
        <Input name="value" size="sm" defaultValue={filter?.value} />
      </Field>

      <SubmitButton pending={props.status.pending} />
    </HStack>
  )
}

function _FormFooter() {
  const store = useDataGridContext()
  return (
    <HStack justify="space-between" w="full">
      <ButtonGroup>
        <Button
          onClick={() => console.log('Add filter to list')}
          size="sm"
          type="button"
          usage="ghost"
        >
          Add Filter
        </Button>
        <Button
          onClick={() =>
            store.setColFilter((prev) => ({
              ...prev,
              active: [],
              editing: null,
            }))
          }
          size="sm"
          type="button"
          usage="ghost"
        >
          Clear All
        </Button>
      </ButtonGroup>

      <Button size="sm" type="submit">
        Apply
      </Button>
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
