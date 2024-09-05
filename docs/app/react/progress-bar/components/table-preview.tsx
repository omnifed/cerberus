'use client'

import { SortAscending, SortDescending } from '@cerberus-design/icons'
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
  Show,
} from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'
import { hstack } from '@cerberus/styled-system/patterns'
import { useCallback, useMemo, useState } from 'react'

export function SizesPreview() {
  return (
    <div className={hstack()}>
      <Table caption="Table with different cell sizes">
        <Thead>
          <Tr>
            <Th size="md">Medium</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td size="sm">Small</Td>
          </Tr>
        </Tbody>
      </Table>
      <Table caption="Table with different cell sizes">
        <Thead>
          <Tr>
            <Th size="md">Medium</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td size="md">Medium</Td>
          </Tr>
        </Tbody>
      </Table>
      <Table caption="Table with different cell sizes">
        <Thead>
          <Tr>
            <Th size="lg">Large</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td size="lg">Large</Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  )
}

export function DecorationPreview() {
  return (
    <div className={hstack()}>
      <Table caption="Table with default decorations">
        <Thead>
          <Tr>
            <Th>Default</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>one</Td>
          </Tr>
          <Tr>
            <Td>two</Td>
          </Tr>
          <Tr>
            <Td>three</Td>
          </Tr>
        </Tbody>
      </Table>
      <Table caption="Table with zebra decorations">
        <Thead>
          <Tr>
            <Th>Zebra</Th>
          </Tr>
        </Thead>
        <Tbody decoration="zebra">
          <Tr>
            <Td>one</Td>
          </Tr>
          <Tr>
            <Td>two</Td>
          </Tr>
          <Tr>
            <Td>three</Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  )
}

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
    <Table caption="Clickable table">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th
            className={css({
              w: '6rem',
            })}
            onClick={handleClick}
          >
            Age
            <Show when={order === 'asc'} fallback={<SortDescending />}>
              <SortAscending />
            </Show>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {sortedData.map((person) => (
          <Tr key={person.id}>
            <Td>{person.name}</Td>
            <Td>{person.age}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export function CustomizedPreview() {
  return (
    <Table caption="Customized table">
      <Thead>
        <Tr>
          <Th
            className={css({
              bgColor: 'black',
              color: 'yellow',
              width: '20rem',
            })}
          >
            Wu-Tang Members
          </Th>
          <Th
            className={css({
              bgColor: 'black',
              color: 'yellow',
            })}
          >
            Alias
          </Th>
        </Tr>
      </Thead>
      <Tbody
        className={css({
          '& :is(td)': {
            _darkMode: {
              borderTopColor: 'yellow',
              color: 'yellow',
            },
            _lightMode: {
              borderTopColor: 'black',
              color: 'black',
            },
          },
        })}
      >
        <Tr>
          <Td>Method Man</Td>
          <Td>Johnny Blaze</Td>
        </Tr>
        <Tr>
          <Td>Raekwon</Td>
          <Td>The Chef</Td>
        </Tr>
        <Tr>
          <Td>GZA</Td>
          <Td>The Genius</Td>
        </Tr>
        <Tr>
          <Td>Ghostface Killah</Td>
          <Td>Tony Starks</Td>
        </Tr>
        <Tr>
          <Td>Inspectah Deck</Td>
          <Td>Rebel INS</Td>
        </Tr>
        <Tr>
          <Td>U-God</Td>
          <Td>Golden Arms</Td>
        </Tr>
        <Tr>
          <Td>Masta Killa</Td>
          <Td>Noodles</Td>
        </Tr>
        <Tr>
          <Td>Ol&apos; Dirty Bastard</Td>
          <Td>Ason Unique</Td>
        </Tr>
        <Tr>
          <Td>RZA</Td>
          <Td>Bobby Digital</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}
