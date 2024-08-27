'use client'

import {
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  Toggle,
  Field,
  useToggle,
} from '@cerberus-design/react'

export function BasicTablePreview() {
  const first = useToggle()
  const second = useToggle()
  const third = useToggle()

  return (
    <Table caption="Basic table">
      <Thead>
        <Tr>
          <Th>Animal</Th>
          <Th>Wild</Th>
          <Th>Adopt</Th>
        </Tr>
      </Thead>
      <Tbody decoration="zebra">
        <Tr>
          <Td>Dog</Td>
          <Td>False</Td>
          <Td>
            <Field>
              <Toggle
                checked={Boolean(first.checked)}
                id="1"
                onChange={first.handleChange}
                size="sm"
                value="1"
              />
            </Field>
          </Td>
        </Tr>
        <Tr>
          <Td>Cat</Td>
          <Td>Maybe</Td>
          <Td>
            <Field>
              <Toggle
                checked={Boolean(second.checked)}
                id="2"
                onChange={second.handleChange}
                size="sm"
                value="2"
              />
            </Field>
          </Td>
        </Tr>
        <Tr>
          <Td>Fish</Td>
          <Td>True</Td>
          <Td>
            <Field>
              <Toggle
                checked={Boolean(third.checked)}
                id="3"
                onChange={third.handleChange}
                size="sm"
                value="3"
              />
            </Field>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  )
}
