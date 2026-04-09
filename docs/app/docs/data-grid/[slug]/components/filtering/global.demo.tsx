'use client'

import { Search } from '@carbon/icons-react'
import { DataGrid, OPERATORS, useDataGridContext } from '@cerberus-design/data-grid'
import { Button, cerberus, Field, Input, Show } from '@cerberus-design/react'
import { useRead } from '@cerberus-design/signals'
import { HStack, Stack } from 'styled-system/jsx'
import { createFakeQuery } from '../quick-start/data'
import { columns } from './columns'

export function GlobalDemo() {
  const data = createFakeQuery(200)
  return (
    <Stack direction="column" h="25rem" w="90%">
      <DataGrid columns={columns} data={data()} toolbar={<Toolbar />} />
    </Stack>
  )
}

function Toolbar<TData>() {
  const store = useDataGridContext<TData>()
  const currentFilter = useRead(store.globalFilter)

  function search(formData: FormData) {
    const value = formData.get('search') as string
    store.setGlobalFilter({ value, operator: OPERATORS.contains })
  }

  return (
    <HStack justify="flex-end" w="full">
      <HStack gap="md" justify="flex-end" w="1/2">
        <Show when={currentFilter.value}>
          <Button
            palette="danger"
            onClick={() =>
              store.setGlobalFilter({
                operator: OPERATORS.contains,
                value: null,
              })
            }
            size="sm"
          >
            Clear
          </Button>
        </Show>

        <cerberus.form action={search} w="3/4">
          <Field hideLabel label="Search anything">
            <Input
              placeholder="Press enter to search..."
              name="search"
              startIcon={<Search />}
              size="md"
            />
            <button type="submit" hidden>
              Search
            </button>
          </Field>
        </cerberus.form>
      </HStack>
    </HStack>
  )
}
