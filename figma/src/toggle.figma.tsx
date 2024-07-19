import figma from '@figma/code-connect'
import { Toggle, Field } from '@cerberus-design/react'
import { hstack } from '@cerberus-design/styled-system/patterns'

const SELECTION =
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9349-1317&m=dev'

const imports = [
  "import { Field, Toggle } from '@cerberus/react'",
  "import { hstack } from '@cerberus/styled-system/patterns'",
]

const props = {
  size: figma.enum('Size', {
    sm: 'sm',
    lg: 'lg',
  }),
  labelEl: figma.children('Label'),
  fieldMessageEl: figma.children('FieldMessage'),
}

figma.connect(Toggle, SELECTION, {
  imports,
  props,
  example: (props) => {
    return (
      <Field>
        <Toggle
          id="ADD_UUID"
          onChange={() => 'ADD_HELPER'}
          size={props.size}
          value="ADD_UUID"
        />
        {props.labelEl}
      </Field>
    )
  },
})

figma.connect(Toggle, SELECTION, {
  imports,
  variant: {
    label: 'True',
    'field-message': 'True',
  },
  props,
  example: (props) => {
    return (
      <Field>
        {props.labelEl}
        <div className={hstack()}>
          <Toggle id="ADD_UUID" size={props.size} value="ADD_UUID" />
          {props.fieldMessageEl}
        </div>
      </Field>
    )
  },
})
