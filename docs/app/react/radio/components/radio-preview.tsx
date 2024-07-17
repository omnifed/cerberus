import { Field, Label, Radio } from '@cerberus-design/react'
import { hstack } from '@cerberus/styled-system/patterns'

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
          <Label htmlFor="sm">Small</Label>
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
