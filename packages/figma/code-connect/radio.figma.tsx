import figma from '@figma/code-connect'
import { Radio, Field } from '@cerberus-design/react'

const SELECTION =
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=408-1794&m=dev'

const imports = ["import { Field, Radio } from '@cerberus/react'"]

const props = {
  size: figma.enum('Size', {
    sm: 'sm',
    md: 'md',
  }),
  label: figma.children('Label'),
}

figma.connect(Radio, SELECTION, {
  imports,
  props,
  example: (props) => {
    return (
      <Field>
        <Radio id="ADD_UUID" size={props.size}>
          {props.label}
        </Radio>
      </Field>
    )
  },
})

figma.connect(Radio, SELECTION, {
  imports,
  variant: {
    State: 'disabled',
  },
  props,
  example: (props) => {
    return (
      <Field disabled>
        <Radio id="ADD_UUID" size={props.size}>
          {props.label}
        </Radio>
      </Field>
    )
  },
})
