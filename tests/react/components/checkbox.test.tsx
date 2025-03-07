import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import {
  CerberusProvider,
  Checkbox,
  CheckboxGroup,
  CheckboxParts,
} from '@cerberus-design/react'
import { makeConfig } from '@/utils'

describe('Checkbox', () => {
  const config = makeConfig()

  test('should render a checkbox', () => {
    render(
      <CerberusProvider config={config}>
        <Checkbox
          ids={{
            control: 'test',
          }}
          required
        >
          Test label
        </Checkbox>
      </CerberusProvider>,
    )
    expect(screen.getByLabelText(/test label/i)).toBeInTheDocument()
    expect(screen.getByText(/(required)/i)).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  test('should render a checkbox with error', () => {
    render(
      <CerberusProvider config={config}>
        <Checkbox
          ids={{
            control: 'test',
          }}
          required
          invalid
        >
          Test Label
        </Checkbox>
        ,
      </CerberusProvider>,
    )
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true')
  })

  test('should render a checkbox with disabled', () => {
    render(
      <CerberusProvider config={config}>
        <Checkbox
          ids={{
            control: 'test',
          }}
          disabled
        >
          Test Label
        </Checkbox>
      </CerberusProvider>,
    )
    expect(screen.getByRole('checkbox')).toHaveAttribute('disabled')
  })

  test('should render a group of checkboxes', () => {
    render(
      <CerberusProvider config={config}>
        <CheckboxGroup name="test">
          <Checkbox
            ids={{
              control: 'test1',
            }}
          >
            Test 1
          </Checkbox>
          <Checkbox
            ids={{
              control: 'test2',
            }}
          >
            Test 2
          </Checkbox>
        </CheckboxGroup>
      </CerberusProvider>,
    )
    expect(screen.getByLabelText(/test 1/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/test 2/i)).toBeInTheDocument()
  })

  test('should contain all the parts', () => {
    expect(CheckboxParts).toBeDefined()
    expect(CheckboxParts.Root).not.toBeNull()
    expect(CheckboxParts.Label).not.toBeNull()
    expect(CheckboxParts.Control).not.toBeNull()
    expect(CheckboxParts.Group).not.toBeNull()
    expect(CheckboxParts.Indicator).not.toBeNull()
    expect(CheckboxParts.HiddenInput).not.toBeNull()
  })
})
