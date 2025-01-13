import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import {
  Field,
  Select,
  Option,
  CerberusProvider,
  createSelectCollection,
  OptionGroup,
  OptionGroupLabel,
} from '@cerberus-design/react'
import { makeConfig, setupStrictMode } from '@/utils'
import userEvent from '@testing-library/user-event'

describe('Select', () => {
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
        <Select collection={collection} label="Select Relative">
          {collection.items.map((item) => (
            <Option key={item.value} item={item} />
          ))}
        </Select>
      </CerberusProvider>,
    )
    expect(screen.getByRole('combobox')).toBeTruthy()
    expect(screen.getByText(/select relative/i)).toBeTruthy()
  })

  test('should render an option group with a label', async () => {
    render(
      <CerberusProvider config={config}>
        <Field>
          <Select collection={collection} label="Select Relative">
            <OptionGroup>
              <OptionGroupLabel>Group 1</OptionGroupLabel>
              {collection.items.map((item) => (
                <Option key={item.value} item={item} />
              ))}
            </OptionGroup>
          </Select>
        </Field>
      </CerberusProvider>,
    )
    expect(screen.getByText(/select relative/i)).toBeTruthy()
    expect(screen.getByRole('combobox')).toBeTruthy
    await userEvent.click(screen.getByRole('combobox'))
    expect(screen.getByText(/group 1/i)).toBeTruthy()
  })
})
