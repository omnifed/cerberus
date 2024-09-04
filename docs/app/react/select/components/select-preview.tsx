import {
  Field,
  FieldMessage,
  Label,
  Select,
  Option,
} from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'

const overrideStyles = css({
  w: '1/2',
})

export function SelectBasicPreview() {
  return (
    <div className={overrideStyles}>
      <Field>
        <Label htmlFor="fruit">Select Fruit</Label>
        <Select aria-describedby="help:fruit" id="fruit">
          <Option value="">Choose option</Option>
          <Option value="one">Option 1</Option>
          <Option value="two">Option 2</Option>
          <Option value="three">Option 3</Option>
        </Select>
        <FieldMessage id="help:fruit">
          This will be your included in your smoothie.
        </FieldMessage>
      </Field>
    </div>
  )
}
