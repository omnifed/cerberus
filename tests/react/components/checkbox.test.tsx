import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import {
  CerberusProvider,
  Checkbox,
  CheckboxGroup,
} from '@cerberus-design/react'
import { makeConfig, setupStrictMode } from '@/utils'

describe('Checkbox', () => {
  setupStrictMode()
  afterEach(cleanup)

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
    expect(screen.getByLabelText(/test label/i)).toBeTruthy()
    expect(screen.getByText(/(required)/i)).toBeTruthy()
    expect(screen.getByRole('checkbox')).toBeTruthy()
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
    expect(
      screen.getByRole('checkbox').attributes.getNamedItem('aria-invalid'),
    ).toBeTruthy()
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
    expect(
      screen.getByRole('checkbox').attributes.getNamedItem('disabled'),
    ).toBeTruthy()
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
    expect(screen.getByLabelText(/test 1/i)).toBeTruthy()
    expect(screen.getByLabelText(/test 2/i)).toBeTruthy()
  })
})
