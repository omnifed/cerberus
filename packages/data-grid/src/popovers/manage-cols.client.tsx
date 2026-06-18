'use client'

import {
  Button,
  Checkbox,
  Field,
  For,
  Input,
  PopoverParts,
  Show,
  useCerberusContext,
} from '@cerberus-design/react'
import { useRead, useSignal } from '@cerberus-design/signals'
import { type ChangeEvent } from 'react'
import { Divider, type DividerProps, Scrollable, Stack } from 'styled-system/jsx'
import { useDataGridContext } from '../context.client'

export function ManageColsPopover() {
  const [filter, setFilter] = useSignal<string>('')
  const store = useDataGridContext()

  const cols = useRead(store.columns)
  const filteredCols = cols.filter((col) =>
    (col.original.header as string)?.toLowerCase().includes(filter.toLowerCase()),
  )

  const ctx = useCerberusContext()
  const Icon = ctx.icons.filter

  return (
    <>
      <Show when={cols.length >= 7}>
        {() => (
          <Stack gap="sm">
            <PopoverParts.Header>
              <Field label="Search column" hideLabel>
                <Input
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFilter(e.target.value)
                  }
                  name="search"
                  size="sm"
                  startIcon={<Icon />}
                />
              </Field>
            </PopoverParts.Header>
            <ManageDivider mb="initial" />
          </Stack>
        )}
      </Show>

      <Scrollable w="full" style={{ height: '13rem' }}>
        <PopoverParts.Body>
          <Stack gap="md">
            <For each={filteredCols}>
              {(col) => (
                <Checkbox key={col.id}>{col.original.header as string}</Checkbox>
              )}
            </For>
          </Stack>
        </PopoverParts.Body>
      </Scrollable>
      <ManageDivider />

      <PopoverParts.Footer justifyContent="space-between">
        <Checkbox>Show/Hide All</Checkbox>
        <Button size="sm" usage="ghost">
          Reset
        </Button>
      </PopoverParts.Footer>
    </>
  )
}

function ManageDivider(props: DividerProps) {
  return (
    <Divider
      mb="sm"
      color="page.border.initial"
      orientation="horizontal"
      thickness="1px"
      w="full"
      {...props}
    />
  )
}
