import {
  Field,
  Fieldset,
  FieldsetLabel,
  Legend,
  Radio,
} from '@cerberus-design/react'
import { css } from '@cerberus-design/styled-system/css'
import { hstack } from '@cerberus-design/styled-system/patterns'
import { vstack } from '@cerberus/styled-system/patterns'

export function OverviewRadioGroup() {
  return (
    <Field>
      <Fieldset
        className={hstack({
          gap: '4',
          rounded: 'xl',
        })}
        name="pet"
        role="radiogroup"
      >
        <Legend>What pets do you have?</Legend>
        <Radio id="dog" name="pet" value="dog" defaultChecked>
          <FieldsetLabel htmlFor="dog">🐶 Dog</FieldsetLabel>
        </Radio>

        <Radio id="cat" name="pet" value="cat">
          <FieldsetLabel htmlFor="cat">😸 Cat</FieldsetLabel>
        </Radio>

        <Radio id="both" name="pet" value="both">
          <FieldsetLabel htmlFor="both">🐶😸 Both</FieldsetLabel>
        </Radio>
      </Fieldset>
    </Field>
  )
}

export function DisabledRadioGroup() {
  return (
    <Field disabled>
      <Fieldset
        className={hstack({
          gap: '4',
          rounded: 'xl',
        })}
        name="pet"
        role="radiogroup"
      >
        <Legend>What pets do you have?</Legend>
        <Radio id="dog" name="pet" value="dog" defaultChecked>
          <FieldsetLabel htmlFor="dog">🐶 Dog</FieldsetLabel>
        </Radio>

        <Radio id="cat" name="pet" value="cat">
          <FieldsetLabel htmlFor="cat">😸 Cat</FieldsetLabel>
        </Radio>

        <Radio id="both" name="pet" value="both">
          <FieldsetLabel htmlFor="both">🐶😸 Both</FieldsetLabel>
        </Radio>
      </Fieldset>
    </Field>
  )
}

export function RequiredRadioGroup() {
  return (
    <Field required>
      <Fieldset
        className={hstack({
          gap: '4',
          rounded: 'xl',
        })}
        name="pet"
        role="radiogroup"
      >
        <Legend>What pets do you have?</Legend>
        <Radio id="dog" name="pet" value="dog" defaultChecked>
          <FieldsetLabel htmlFor="dog">🐶 Dog</FieldsetLabel>
        </Radio>

        <Radio id="cat" name="pet" value="cat">
          <FieldsetLabel htmlFor="cat">😸 Cat</FieldsetLabel>
        </Radio>

        <Radio id="both" name="pet" value="both">
          <FieldsetLabel htmlFor="both">🐶😸 Both</FieldsetLabel>
        </Radio>
      </Fieldset>
    </Field>
  )
}

export function CustomFieldset() {
  return (
    <Field>
      <Fieldset
        className={vstack({
          alignItems: 'flex-start',
          gap: '4',
          rounded: 'xl',
        })}
        name="pet"
        role="radiogroup"
        style={{
          border: '2px solid',
          borderColor: 'yellow',
          padding: '16px',
        }}
      >
        <Legend
          className={css({
            color: 'yellow',
            textStyle: 'h3',
          })}
        >
          What is Wu-Tang?
        </Legend>
        <Radio id="dog" name="pet" value="dog" defaultChecked>
          <FieldsetLabel htmlFor="dog">Forever</FieldsetLabel>
        </Radio>

        <Radio id="cat" name="pet" value="cat">
          <FieldsetLabel htmlFor="cat">Forever</FieldsetLabel>
        </Radio>

        <Radio id="both" name="pet" value="both">
          <FieldsetLabel htmlFor="both">Forever</FieldsetLabel>
        </Radio>
      </Fieldset>
    </Field>
  )
}
