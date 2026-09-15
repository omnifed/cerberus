import { Scrollable } from '@/styled-system/jsx'
import { For, Table } from '@cerberus-design/react'
import { items } from './items'

export function StickyDemo() {
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
