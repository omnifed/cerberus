import figma from '@figma/code-connect'
import { FieldMessage } from '@cerberus-design/react'

const SELECTION =
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9225-4248&m=dev'

const imports = ["import { FieldMessage } from '@cerberus/react'"]

const props = {
  // Figma specific
  invalid: figma.boolean('invalid'),
  text: figma.textContent('text'),
}

figma.connect(FieldMessage, SELECTION, {
  imports,
  props,
  example: (props) => {
    return <FieldMessage id="help:ADD_INPUT_ID">{props.text}</FieldMessage>
  },
})
