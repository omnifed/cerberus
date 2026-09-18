import { Box } from '@/styled-system/jsx'
import { For, Table } from '@cerberus-design/react'
import { items } from './items'

export function BasicDemo() {
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
