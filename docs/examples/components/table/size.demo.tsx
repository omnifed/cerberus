import { HStack } from '@/styled-system/jsx'
import { For, Table, TableRootProps } from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'

const variants = (recipesSpec.data.find((r) => r.name === 'table')?.variants.size ??
  []) as TableRootProps['size'][]

export function SizeDemo() {
  return (
    <HStack w="1/2">
      <For each={variants}>
        {(size) => (
          <Table.Root key={size} caption={`Table using the ${size} size`} size={size}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCol>{size}</Table.HeaderCol>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{size}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        )}
      </For>
    </HStack>
  )
}
