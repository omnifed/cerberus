import { HStack } from '@/styled-system/jsx'
import { For, Table, TableRootProps } from '@cerberus-design/react'
import recipesSpec from 'styled-system/specs/recipes.json'

const variants = (recipesSpec.data.find((r) => r.name === 'table')?.variants
  .decoration ?? []) as TableRootProps['decoration'][]

export function DecorationDemo() {
  return (
    <HStack w="1/2">
      <For each={variants}>
        {(decoration) => (
          <Table.Root
            key={decoration}
            caption={`Table using the ${decoration} decoration`}
            decoration={decoration}
          >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCol>Decoration</Table.HeaderCol>
                <Table.HeaderCol>Count</Table.HeaderCol>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <For each={[1, 2, 3]}>
                {(idx) => (
                  <Table.Row key={idx}>
                    <Table.Cell>{decoration}</Table.Cell>
                    <Table.Cell>{idx}</Table.Cell>
                  </Table.Row>
                )}
              </For>
            </Table.Body>
          </Table.Root>
        )}
      </For>
    </HStack>
  )
}
