import { Field, Label, Radio } from '@cerberus-design/react'
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
    <fieldset
      className={hstack({
        gap: '4',
        p: '4',
        rounded: 'xl',
      })}
      name="pet"
      role="radiogroup"
    >
      <Field>
        <Radio id="dog" name="pet" value="dog" defaultChecked>
          <Label htmlFor="dog">🐶 Dog</Label>
        </Radio>
      </Field>

      <Field>
        <Radio id="cat" name="pet" value="cat">
          <Label htmlFor="cat">😸 Cat</Label>
        </Radio>
      </Field>

      <Field>
        <Radio id="both" name="pet" value="both">
          <Label htmlFor="both">🐶😸 Both</Label>
        </Radio>
      </Field>
    </fieldset>
  )
}

export function OverviewRadioSizes() {
  return (
    <fieldset
      className={hstack({
        gap: '4',
        p: '4',
        rounded: 'xl',
      })}
      name="sizes"
      role="radiogroup"
    >
      <Field>
        <Radio id="sm" name="sizes" value="sm" size="sm">
          <Label htmlFor="sm" size="sm">
            Small
          </Label>
        </Radio>
      </Field>
      <Field>
        <Radio id="md" name="sizes" value="md">
          <Label htmlFor="md">Medium (default)</Label>
        </Radio>
      </Field>
    </fieldset>
  )
}
