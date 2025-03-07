import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import {
  Combobox,
  ComboItemGroup,
  ComboItemText,
  ComboItemWithIndicator,
  CerberusProvider,
  For,
  Text,
  useStatefulCollection,
  createSelectCollection,
} from '@cerberus-design/react'
import { makeConfig } from '@/utils'
import userEvent from '@testing-library/user-event'

describe('Combobox', () => {
  const config = makeConfig()
  const collection = createSelectCollection([
    { label: 'Hades', value: 'hades' },
    { label: 'Persephone', value: 'persephone' },
    { label: 'Zeus', value: 'zeus', disabled: true },
  ])

  test('should render a select', () => {
    render(
      <CerberusProvider config={config}>
        <Combobox collection={collection} label="Select Relative">
          <For each={collection.items}>
            {(item) => (
              <ComboItemWithIndicator key={item.value} item={item}>
                <ComboItemText>{item.label}</ComboItemText>
                <Text>{item.value}</Text>
              </ComboItemWithIndicator>
            )}
          </For>
        </Combobox>
      </CerberusProvider>,
    )
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByText(/select relative/i)).toBeInTheDocument()
  })

  test('should render an option group with a label', async () => {
    render(
      <CerberusProvider config={config}>
        <Combobox collection={collection} label="Select Relative">
          <ComboItemGroup label="Group 1">
            <For each={collection.items}>
              {(item) => (
                <ComboItemWithIndicator key={item.value} item={item}>
                  <ComboItemText>{item.label}</ComboItemText>
                  <Text>{item.value}</Text>
                </ComboItemWithIndicator>
              )}
            </For>
          </ComboItemGroup>
        </Combobox>
      </CerberusProvider>,
    )
    expect(screen.getByText(/select relative/i)).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    await userEvent.click(screen.getByRole('combobox'))
    expect(screen.getByText(/group 1/i)).toBeInTheDocument()
  })

  test('should render a start icon', () => {
    render(
      <CerberusProvider config={config}>
        <Combobox
          collection={collection}
          label="Select Relative"
          startIcon={<Text>🔥</Text>}
        >
          <For each={collection.items}>
            {(item) => (
              <ComboItemWithIndicator key={item.value} item={item}>
                <ComboItemText>{item.label}</ComboItemText>
                <Text>{item.value}</Text>
              </ComboItemWithIndicator>
            )}
          </For>
        </Combobox>
      </CerberusProvider>,
    )
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByText(/select relative/i)).toBeInTheDocument()
    expect(screen.getByText('🔥')).toBeInTheDocument()
  })

  test('should return a stateful object for the root component', () => {
    function Test() {
      const { collection, handleInputChange } = useStatefulCollection([
        { label: 'Hades', value: 'hades' },
        { label: 'Persephone', value: 'persephone' },
        { label: 'Zeus', value: 'zeus', disabled: true },
      ])
      return (
        <Combobox
          collection={collection}
          label="Select Relative"
          onInputValueChange={handleInputChange}
        >
          <For each={collection.items}>
            {(item) => (
              <ComboItemWithIndicator key={item.value} item={item}>
                <ComboItemText>{item.label}</ComboItemText>
                <Text>{item.value}</Text>
              </ComboItemWithIndicator>
            )}
          </For>
        </Combobox>
      )
    }

    render(
      <CerberusProvider config={config}>
        <Test />
      </CerberusProvider>,
    )
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByText(/select relative/i)).toBeInTheDocument()
  })
})
