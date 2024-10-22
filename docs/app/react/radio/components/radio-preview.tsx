import {
  Field,
  Fieldset,
  FieldsetLabel,
  Label,
  Radio,
} from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'
import { hstack } from '@cerberus/styled-system/patterns'

export function DefaultRadioPreview() {
  return (
    <Field>
      <Radio id="valid" name="states" value="valid" defaultChecked>
        <Label htmlFor="valid">Default (valid)</Label>
      </Radio>
    </Field>
  )
}

export function InvalidRadioPreview() {
  return (
    <Field invalid>
      <Radio id="invalid" name="states" value="invalid" defaultChecked>
        <Label htmlFor="invalid">Invalid</Label>
      </Radio>
    </Field>
  )
}

export function DisabledRadioPreview() {
  return (
    <Field disabled>
      <Radio id="disabled" name="states" value="disabled" defaultChecked>
        <Label htmlFor="disabled">Disabled</Label>
      </Radio>
    </Field>
  )
}

export function CustomRadioPreview() {
  return (
    <Field>
      <Radio
        className={css({
          borderColor: 'yellow',
          _groupHover: {
            bgColor: 'black',
          },
          _checked: {
            bg: 'yellow',
          },
        })}
        id="custom"
        name="states"
        value="custom"
        defaultChecked
      >
        <Label htmlFor="custom">Wu-Tang</Label>
      </Radio>
    </Field>
  )
}

export function OverviewRadioGroup() {
  return (
    <Field>
      <Fieldset
        className={hstack({
          gap: '4',
          p: '4',
          rounded: 'xl',
        })}
        name="pet"
        role="radiogroup"
      >
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

export function OverviewRadioSizes() {
  return (
    <Field>
      <Fieldset
        className={hstack({
          gap: '4',
          p: '4',
          rounded: 'xl',
        })}
        name="sizes"
        role="radiogroup"
      >
        <Radio id="sm" name="sizes" value="sm" size="sm">
          <FieldsetLabel htmlFor="sm" size="sm">
            Small
          </FieldsetLabel>
        </Radio>
        <Radio id="md" name="sizes" value="md">
          <FieldsetLabel htmlFor="md">Medium (default)</FieldsetLabel>
        </Radio>
      </Fieldset>
    </Field>
  )
}
