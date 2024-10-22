import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Field, Label, Radio, Fieldset, Legend } from '@cerberus-design/react'
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
          <Label htmlFor="yes">Yes</Label>
          <Radio id="no" name="cats" value="no" />
          <Label htmlFor="no">No</Label>
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
          <Legend>Do you like cats?</Legend>
          <Radio id="yes" name="cats" value="yes" />
          <Label htmlFor="yes">Yes</Label>
          <Radio id="no" name="cats" value="no" />
          <Label htmlFor="no">No</Label>
        </Fieldset>
      </Field>,
    )
    expect(
      screen.getByRole('group').attributes.getNamedItem('disabled'),
    ).toBeTruthy()
    expect(
      screen.getByText(/do you like cats/i).attributes.getNamedItem('disabled'),
    ).toBeTruthy()
  })
})
