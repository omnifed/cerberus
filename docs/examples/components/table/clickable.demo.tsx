'use client'

import { Box } from '@/styled-system/jsx'
import { SortAscending, SortDescending } from '@carbon/icons-react'
import { Show, Table } from '@cerberus-design/react'
import { createComputed, useRead, useSignal } from '@cerberus-design/signals'

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
  const [order, setOrder] = useSignal<'asc' | 'desc'>('asc')

  const sortedDataVal = createComputed(() =>
    order === 'asc'
      ? data.sort((a, b) => a.age - b.age)
      : data.sort((a, b) => b.age - a.age),
  )
  const sortedData = useRead(sortedDataVal)

  const handleClick = () => {
    setOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
  }

  return (
    <Box w="1/2">
      <Table.Root caption="Clickable table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCol>Name</Table.HeaderCol>
            <Table.HeaderCol>
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
      </Table.Root>
    </Box>
  )
}
