import { For, Table } from '@cerberus-design/react'

export function CustomDemo() {
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
      border="3px solid"
      borderColor="danger.border.initial"
      transform="skewX(-10deg)"
    >
      <Table.Header>
        <Table.Row>
          <For each={cols}>
            {(col) => (
              <Table.HeaderCol
                key={col.id}
                bgColor="page.text.initial"
                color="page.text.inverse"
                width="20rem"
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
              <Table.Cell bgColor="info.bg.initial" color="black" fontWeight="bold">
                {item.name}
              </Table.Cell>
              <Table.Cell bgColor="white" color="black">
                {item.alias}
              </Table.Cell>
            </Table.Row>
          )}
        </For>
      </Table.Body>
    </Table.Root>
  )
}
