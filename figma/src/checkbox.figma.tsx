import figma from '@figma/code-connect'
import { Checkbox, Field } from '@cerberus-design/react'

const SELECTION =
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9638-138&node-type=FRAME&focus-id=9618-93&m=dev'

const imports = ["import { Field, Checkbox } from '@cerberus/react'"]

const props = {
  size: figma.enum('Size', {
    md: 'md',
    lg: 'lg',
  }),
  label: figma.children('Label'),
}

figma.connect(Checkbox, SELECTION, {
  imports,
  props,
  example: (props) => {
    return (
      <Field>
        <Checkbox id="ADD_UUID" size={props.size}>
          {props.label}
        </Checkbox>
      </Field>
    )
  },
})

figma.connect(Checkbox, SELECTION, {
  imports,
  variant: {
    State: 'disabled',
  },
  props,
  example: (props) => {
    return (
      <Field disabled>
        <Checkbox id="ADD_UUID" size={props.size}>
          {props.label}
        </Checkbox>
      </Field>
    )
  },
})
