import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import {
  Field,
  Select,
  Option,
  CerberusProvider,
  createSelectCollection,
  OptionGroup,
  OptionGroupLabel,
} from '@cerberus-design/react'
import { makeConfig } from '@/utils'
import userEvent from '@testing-library/user-event'

describe('Select', () => {
  const config = makeConfig()
  const collection = createSelectCollection([
    { label: 'Hades', value: 'hades' },
    { label: 'Persephone', value: 'persephone' },
    { label: 'Zeus', value: 'zeus', disabled: true },
  ])

  test('should render a select', () => {
    render(
      <CerberusProvider config={config}>
        <Field label="Select Relative">
          <Select collection={collection}>
            {collection.items.map((item) => (
              <Option key={item.value} item={item} />
            ))}
          </Select>
        </Field>
      </CerberusProvider>,
    )
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByText(/select relative/i)).toBeInTheDocument()
  })

  test('should render an option group with a label', async () => {
    render(
      <CerberusProvider config={config}>
        <Field label="Select Relative">
          <Select collection={collection}>
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
    expect(screen.getByText(/select relative/i)).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    await userEvent.click(screen.getByRole('combobox'))
    expect(screen.getByText(/group 1/i)).toBeInTheDocument()
  })
})
