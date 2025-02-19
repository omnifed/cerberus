'use client'

import { SortAscending, SortDescending } from '@carbon/icons-react'
import { Table, Show, For } from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'
import { Box, HStack, Scrollable } from '@cerberus-design/styled-system/jsx'
import { useCallback, useMemo, useState } from 'react'

const items = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99 },
  { id: 2, name: 'Coffee Maker', category: 'Home Appliances', price: 49.99 },
  { id: 3, name: 'Desk Chair', category: 'Furniture', price: 150.0 },
  { id: 4, name: 'Smartphone', category: 'Electronics', price: 799.99 },
  { id: 5, name: 'Headphones', category: 'Accessories', price: 199.99 },
]

export function ItsGettingSticky() {
  return (
    <Scrollable
      border="1px solid"
      borderColor="page.border.200"
      h="10rem"
      rounded="md"
      w="1/2"
    >
      <Table.Root caption="Better find a mop, it's getting sticky..." sticky>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCol>Product</Table.HeaderCol>
            <Table.HeaderCol>Category</Table.HeaderCol>
            <Table.HeaderCol>Price</Table.HeaderCol>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <For each={items}>
            {(item) => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.category}</Table.Cell>
                <Table.Cell>{item.price}</Table.Cell>
              </Table.Row>
            )}
          </For>
        </Table.Body>
      </Table.Root>
    </Scrollable>
  )
}

export function SizesPreview() {
  return (
    <HStack w="1/2">
      <Table.Root caption="Table with different cell sizes" size="sm">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCol>Small</Table.HeaderCol>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Small</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>

      <Table.Root caption="Table with different cell sizes" size="md">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCol>Medium</Table.HeaderCol>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Medium</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>

      <Table.Root caption="Table with different cell sizes" size="lg">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCol>Large</Table.HeaderCol>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Large</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </HStack>
  )
}

export function DecorationPreview() {
  return (
    <HStack w="1/2">
      <Table.Root caption="Table with default decorations">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCol>Default</Table.HeaderCol>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>one</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>two</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>three</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>

      <Table.Root caption="Table with zebra decorations" decoration="zebra">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCol>Zebra</Table.HeaderCol>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>one</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>two</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>three</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </HStack>
  )
}

export function BasicTablePreview() {
  return (
    <Box w="1/2">
      <Table.Root caption="Basic table example">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCol>Product</Table.HeaderCol>
            <Table.HeaderCol>Category</Table.HeaderCol>
            <Table.HeaderCol>Price</Table.HeaderCol>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <For each={items}>
            {(item) => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.category}</Table.Cell>
                <Table.Cell>{item.price}</Table.Cell>
              </Table.Row>
            )}
          </For>
        </Table.Body>
      </Table.Root>
    </Box>
  )
}

export function ClickablePreview() {
  const [order, setOrder] = useState<'asc' | 'desc'>('asc')
  const data = useMemo(
    () => [
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
    ],
    [],
  )
  const sortedData = useMemo(() => {
    return order === 'asc'
      ? data.sort((a, b) => a.age - b.age)
      : data.sort((a, b) => b.age - a.age)
  }, [data, order])

  const handleClick = useCallback(() => {
    setOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
  }, [])

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

export function CustomizedPreview() {
  const cols = [
    { id: '1', name: 'Cerberus Family' },
    { id: '2', name: 'Alias' },
  ]
  const data = [
    { id: '1', name: 'Cerberus', alias: 'The Three-Headed Dog' },
    { id: '2', name: 'Hades', alias: 'God of the Underworld' },
    { id: '3', name: 'Persephone', alias: 'Queen of the Underworld' },
    { id: '4', name: 'Charon', alias: 'The Ferryman' },
    { id: '5', name: 'Cerberus', alias: 'The Guardian of the Underworld' },
    { id: '6', name: 'Thanatos', alias: 'God of Death' },
  ]

  return (
    <Table.Root
      caption="Customized table"
      className={css({
        border: '3px solid',
        borderColor: 'danger.border.initial',
        transform: 'skewX(-10deg)',
      })}
    >
      <Table.Header>
        <Table.Row>
          <For each={cols}>
            {(col) => (
              <Table.HeaderCol
                key={col.id}
                className={css({
                  bgColor: 'black',
                  color: 'white',
                  width: '20rem',
                })}
              >
                {col.name}
              </Table.HeaderCol>
            )}
          </For>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <For each={data}>
          {(item) => (
            <Table.Row key={item.id}>
              <Table.Cell
                className={css({
                  bgColor: 'gray.200',
                  color: 'black',
                  fontWeight: 'bold',
                })}
              >
                {item.name}
              </Table.Cell>
              <Table.Cell
                className={css({
                  bgColor: 'gray.100',
                  color: 'black',
                })}
              >
                {item.alias}
              </Table.Cell>
            </Table.Row>
          )}
        </For>
      </Table.Body>
    </Table.Root>
  )
}
