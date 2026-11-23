'use client'

import { Box } from '@/styled-system/jsx'
import { SortAscending, SortDescending } from '@carbon/icons-react'
import { Show, Table } from '@cerberus-design/react'
import { createComputed, useRead, useSignal } from '@cerberus-design/signals'
import { useMemo } from 'react'

const data = [
  {
    id: '1',
    name: 'John Doe',
    age: 30,
  },
  {
    id: '2',
    name: 'Jane Doe',
    age: 25,
  },
]

export function ClickableDemo() {
  const [order, setOrder, getOrder] = useSignal<'asc' | 'desc'>('asc')

  // Read the `getOrder` Accessor so the computed tracks it, and return a new
  // Array: signals only notify when the value changes (`!==`).
  const sortedDataVal = useMemo(
    () =>
      createComputed(() =>
        getOrder() === 'asc'
          ? data.toSorted((a, b) => a.age - b.age)
          : data.toSorted((a, b) => b.age - a.age),
      ),
    [getOrder],
  )
  const sortedData = useRead(sortedDataVal)

  const handleClick = () => {
    setOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
  }

  return (
    <Box w="1/2">
      <Table caption="Clickable table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCol scope="col">Name</Table.HeaderCol>
            <Table.HeaderCol
              aria-sort={order === 'asc' ? 'ascending' : 'descending'}
              scope="col"
            >
              <Table.Trigger onClick={handleClick}>
                Age
                <Show when={order === 'asc'} fallback={<SortDescending />}>
                  <SortAscending />
                </Show>
              </Table.Trigger>
            </Table.HeaderCol>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sortedData.map((person) => (
            <Table.Row key={person.id}>
              <Table.Cell>{person.name}</Table.Cell>
              <Table.Cell>{person.age}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Box>
  )
}
