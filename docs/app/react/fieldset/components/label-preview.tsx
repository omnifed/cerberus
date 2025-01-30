import {
  Field,
  Fieldset,
  FieldsetLabel,
  Legend,
  Radio,
  RadioGroup,
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
        <RadioGroup defaultValue="dog">
          <Radio id="dog" value="dog">
            <FieldsetLabel htmlFor="dog">🐶 Dog</FieldsetLabel>
          </Radio>

          <Radio id="cat" value="cat">
            <FieldsetLabel htmlFor="cat">😸 Cat</FieldsetLabel>
          </Radio>

          <Radio id="both" value="both">
            <FieldsetLabel htmlFor="both">🐶😸 Both</FieldsetLabel>
          </Radio>
        </RadioGroup>
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
        <RadioGroup defaultValue="dog">
          <Radio id="dog" value="dog">
            <FieldsetLabel htmlFor="dog">🐶 Dog</FieldsetLabel>
          </Radio>

          <Radio id="cat" value="cat">
            <FieldsetLabel htmlFor="cat">😸 Cat</FieldsetLabel>
          </Radio>

          <Radio id="both" value="both">
            <FieldsetLabel htmlFor="both">🐶😸 Both</FieldsetLabel>
          </Radio>
        </RadioGroup>
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
        <RadioGroup defaultValue="dog">
          <Radio id="dog" value="dog">
            <FieldsetLabel htmlFor="dog">🐶 Dog</FieldsetLabel>
          </Radio>

          <Radio id="cat" value="cat">
            <FieldsetLabel htmlFor="cat">😸 Cat</FieldsetLabel>
          </Radio>

          <Radio id="both" value="both">
            <FieldsetLabel htmlFor="both">🐶😸 Both</FieldsetLabel>
          </Radio>
        </RadioGroup>
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
        <RadioGroup defaultValue="dog">
          <Radio id="dog" value="dog">
            <FieldsetLabel htmlFor="dog">Forever</FieldsetLabel>
          </Radio>

          <Radio id="cat" value="cat">
            <FieldsetLabel htmlFor="cat">Forever</FieldsetLabel>
          </Radio>

          <Radio id="both" value="both">
            <FieldsetLabel htmlFor="both">Forever</FieldsetLabel>
          </Radio>
        </RadioGroup>
      </Fieldset>
    </Field>
  )
}
