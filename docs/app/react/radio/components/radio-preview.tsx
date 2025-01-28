import {
  FieldRoot,
  Fieldset,
  FieldsetLabel,
  FieldLabel,
  Radio,
} from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'
import { hstack } from '@cerberus/styled-system/patterns'

export function DefaultRadioPreview() {
  return (
    <FieldRoot ids={{ control: 'valid' }}>
      <Radio id="valid" name="states" value="valid" defaultChecked>
        <FieldLabel>Default (valid)</FieldLabel>
      </Radio>
    </FieldRoot>
  )
}

export function InvalidRadioPreview() {
  return (
    <FieldRoot ids={{ control: 'invalid' }} invalid>
      <Radio id="invalid" name="states" value="invalid" defaultChecked>
        <FieldLabel>Invalid</FieldLabel>
      </Radio>
    </FieldRoot>
  )
}

export function DisabledRadioPreview() {
  return (
    <FieldRoot ids={{ control: 'disabled' }} disabled>
      <Radio id="disabled" name="states" value="disabled" defaultChecked>
        <FieldLabel>Disabled</FieldLabel>
      </Radio>
    </FieldRoot>
  )
}

export function CustomRadioPreview() {
  return (
    <FieldRoot ids={{ control: 'custom' }}>
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
        <FieldLabel>Wu-Tang</FieldLabel>
      </Radio>
    </FieldRoot>
  )
}

export function OverviewRadioGroup() {
  return (
    <FieldRoot>
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
          <FieldsetLabel>🐶 Dog</FieldsetLabel>
        </Radio>

        <Radio id="cat" name="pet" value="cat">
          <FieldsetLabel>😸 Cat</FieldsetLabel>
        </Radio>

        <Radio id="both" name="pet" value="both">
          <FieldsetLabel>🐶😸 Both</FieldsetLabel>
        </Radio>
      </Fieldset>
    </FieldRoot>
  )
}

export function OverviewRadioSizes() {
  return (
    <FieldRoot>
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
          <FieldsetLabel size="sm">Small</FieldsetLabel>
        </Radio>
        <Radio id="md" name="sizes" value="md">
          <FieldsetLabel>Medium (default)</FieldsetLabel>
        </Radio>
      </Fieldset>
    </FieldRoot>
  )
}
