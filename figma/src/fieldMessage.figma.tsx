import figma from '@figma/code-connect'
import { FieldMessage } from '@cerberus-design/react'

const SELECTION =
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9266-1663&m=dev'

const imports = ["import { FieldMessage } from '@cerberus/react'"]

const props = {
  text: figma.textContent('Text'),
}

figma.connect(FieldMessage, SELECTION, {
  imports,
  props,
  example: (props) => {
    return <FieldMessage id="help:ADD_INPUT_ID">{props.text}</FieldMessage>
  },
})
