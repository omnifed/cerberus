import figma from '@figma/code-connect'
import { Input, Field } from '@cerberus-design/react'

const SELECTION =
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=408-283&m=dev'

const imports = ["import { Field, Input } from '@cerberus/react'"]

const props = {
  size: figma.enum('Size', {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
  }),
  // Figma specific
  state: figma.enum('State', {
    valid: 'valid',
    invalid: 'invalid',
    warning: 'warning',
    disabled: 'disabled',
  }),
  label: figma.instance('Label'),
  fieldMessage: figma.instance('FieldMessage'),
  placeholder: figma.textContent('placeholder-text'),
}

figma.connect(Input, SELECTION, {
  imports,
  props,
  example: (props) => {
    return (
      <Field>
        {props.label}
        <Input id="ADD_UUID" placeholder={props.placeholder} />
        {props.fieldMessage}
      </Field>
    )
  },
})

figma.connect(Input, SELECTION, {
  imports,
  variant: {
    State: 'valid',
  },
  props,
  example: (props) => {
    return (
      <Field>
        {props.label}
        <Input id="ADD_UUID" placeholder={props.placeholder} />
        {props.fieldMessage}
      </Field>
    )
  },
})

figma.connect(Input, SELECTION, {
  imports,
  variant: {
    State: 'invalid',
  },
  props,
  example: (props) => {
    return (
      <Field invalid>
        {props.label}
        <Input id="ADD_UUID" placeholder={props.placeholder} />
        {props.fieldMessage}
      </Field>
    )
  },
})

figma.connect(Input, SELECTION, {
  imports,
  variant: {
    State: 'disabled',
  },
  props,
  example: (props) => {
    return (
      <Field disabled>
        {props.label}
        <Input id="ADD_UUID" placeholder={props.placeholder} />
        {props.fieldMessage}
      </Field>
    )
  },
})

figma.connect(Input, SELECTION, {
  imports,
  variant: {
    required: 'True',
  },
  props,
  example: (props) => {
    return (
      <Field required>
        {props.label}
        <Input id="ADD_UUID" placeholder={props.placeholder} />
        {props.fieldMessage}
      </Field>
    )
  },
})
