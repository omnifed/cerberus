import figma from '@figma/code-connect'
import { Textarea, Field } from '@cerberus-design/react'

const SELECTION =
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9349-2124&focus-id=9349-2115&m=dev'

const imports = ["import { Field, Textarea } from '@cerberus/react'"]

const props = {
  // Figma specific
  state: figma.enum('State', {
    valid: 'valid',
    invalid: 'invalid',
    warning: 'warning',
    disabled: 'disabled',
    readonly: 'readonly',
  }),
  required: figma.boolean('required'),
  label: figma.children('Label'),
  fieldMessage: figma.children('FieldMessage'),
  placeholder: figma.string('placeholder-text'),
}

figma.connect(Textarea, SELECTION, {
  imports,
  props,
  example: (props) => {
    return (
      <Field required={props.required}>
        {props.label}
        <Textarea id="ADD_UUID" placeholder={props.placeholder} />
        {props.fieldMessage}
      </Field>
    )
  },
})

figma.connect(Textarea, SELECTION, {
  imports,
  variant: {
    State: 'valid',
  },
  props,
  example: (props) => {
    return (
      <Field required={props.required}>
        {props.label}
        <Textarea id="ADD_UUID" placeholder={props.placeholder} />
        {props.fieldMessage}
      </Field>
    )
  },
})

figma.connect(Textarea, SELECTION, {
  imports,
  variant: {
    State: 'invalid',
  },
  props,
  example: (props) => {
    return (
      <Field invalid required={props.required}>
        {props.label}
        <Textarea id="ADD_UUID" placeholder={props.placeholder} />
        {props.fieldMessage}
      </Field>
    )
  },
})

figma.connect(Textarea, SELECTION, {
  imports,
  variant: {
    State: 'disabled',
  },
  props,
  example: (props) => {
    return (
      <Field disabled required={props.required}>
        {props.label}
        <Textarea id="ADD_UUID" placeholder={props.placeholder} />
        {props.fieldMessage}
      </Field>
    )
  },
})

figma.connect(Textarea, SELECTION, {
  imports,
  variant: {
    State: 'readonly',
  },
  props,
  example: (props) => {
    return (
      <Field readOnly required={props.required}>
        {props.label}
        <Textarea id="ADD_UUID" placeholder={props.placeholder} />
        {props.fieldMessage}
      </Field>
    )
  },
})
