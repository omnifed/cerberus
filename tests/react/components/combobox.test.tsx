import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import {
  Combobox,
  ComboItemGroup,
  ComboboxItemText,
  ComboboxItemWithIndicator,
  CerberusProvider,
  createSelectCollection,
  For,
  Text,
  Field,
} from '@cerberus-design/react'
import { makeConfig, setupStrictMode } from '@/utils'
import userEvent from '@testing-library/user-event'

describe('Combobox', () => {
  setupStrictMode()
  afterEach(cleanup)

  const config = makeConfig()
  const collection = createSelectCollection([
    { label: 'Hades', value: 'hades' },
    { label: 'Persephone', value: 'persephone' },
    { label: 'Zeus', value: 'zeus', disabled: true },
  ])

  test('should render a select', () => {
    render(
      <CerberusProvider config={config}>
        <Field>
          <Combobox collection={collection} label="Select Relative">
            <For each={collection.items}>
              {(item) => (
                <ComboboxItemWithIndicator key={item.value} item={item}>
                  <ComboboxItemText>{item.label}</ComboboxItemText>
                  <Text>{item.value}</Text>
                </ComboboxItemWithIndicator>
              )}
            </For>
          </Combobox>
        </Field>
      </CerberusProvider>,
    )
    expect(screen.getByRole('combobox')).toBeTruthy()
    expect(screen.getByText(/select relative/i)).toBeTruthy()
  })

  test('should render an option group with a label', async () => {
    render(
      <CerberusProvider config={config}>
        <Field>
          <Combobox collection={collection} label="Select Relative">
            <ComboItemGroup label="Group 1">
              <For each={collection.items}>
                {(item) => (
                  <ComboboxItemWithIndicator key={item.value} item={item}>
                    <ComboboxItemText>{item.label}</ComboboxItemText>
                    <Text>{item.value}</Text>
                  </ComboboxItemWithIndicator>
                )}
              </For>
            </ComboItemGroup>
          </Combobox>
        </Field>
      </CerberusProvider>,
    )
    expect(screen.getByText(/select relative/i)).toBeTruthy()
    expect(screen.getByRole('combobox')).toBeTruthy
    await userEvent.click(screen.getByRole('combobox'))
    expect(screen.getByText(/group 1/i)).toBeTruthy()
  })
})
