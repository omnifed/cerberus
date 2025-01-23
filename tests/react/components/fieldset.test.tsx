import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import {
  Field,
  FieldsetLabel,
  Radio,
  Fieldset,
  Legend,
} from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Fieldset & Legend', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a fieldset with a legend', () => {
    render(
      <Field>
        <Fieldset name="cats">
          <Legend>Do you like cats?</Legend>
          <Radio id="yes" name="cats" value="yes" />
          <FieldsetLabel htmlFor="yes">Yes</FieldsetLabel>
          <Radio id="no" name="cats" value="no" />
          <FieldsetLabel htmlFor="no">No</FieldsetLabel>
        </Fieldset>
      </Field>,
    )
    expect(screen.getByText(/do you like cats/i)).toBeTruthy()
    expect(screen.getByLabelText(/yes/i)).toBeTruthy()
    expect(screen.getByLabelText(/no/i)).toBeTruthy()
  })

  test('should render a fieldset with a legend and a disabled radio', () => {
    render(
      <Field disabled>
        <Fieldset name="cats">
          <Legend>Do you like disabled cats?</Legend>
          <Radio id="yes" name="cats" value="yes" />
          <FieldsetLabel htmlFor="yes">Yes</FieldsetLabel>
          <Radio id="no" name="cats" value="no" />
          <FieldsetLabel htmlFor="no">No</FieldsetLabel>
        </Fieldset>
      </Field>,
    )
    expect(
      screen.getAllByRole('group')[1].attributes.getNamedItem('disabled'),
    ).toBeTruthy()
  })

  test('should render a fieldset with a legend and a required radio', () => {
    render(
      <Field required>
        <Fieldset name="cats">
          <Legend>Do you like cats?</Legend>
          <Radio id="yes" name="cats" value="yes" />
          <FieldsetLabel htmlFor="yes">Yes</FieldsetLabel>
          <Radio id="no" name="cats" value="no" />
          <FieldsetLabel htmlFor="no">No</FieldsetLabel>
        </Fieldset>
      </Field>,
    )
    expect(screen.getByText(/do you like cats/i)).toBeTruthy()
    expect(screen.getByText(/(required)/i)).toBeTruthy()
  })
})
