import figma from '@figma/code-connect'
import { Tag } from '@cerberus-design/react'

const SELECTION =
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=7228-19066&m=dev'

const imports = ["import { Tag } from '@cerberus/react'"]

const props = {
  palette: figma.enum('Palette', {
    neutral: 'neutral',
    info: 'info',
    success: 'success',
    warning: 'warning',
    danger: 'danger',
  }),
  shape: figma.enum('Shape', {
    pill: 'pill',
    rounded: 'rounded',
  }),
  usage: figma.enum('Usage', {
    filled: 'filled',
    outlined: 'outline',
  }),
  // Figma specific
  text: figma.textContent('label'),
  icon: figma.children('*'),
}

figma.connect(Tag, SELECTION, {
  imports,
  props,
  example: (props) => {
    return (
      <Tag palette={props.palette} shape={props.shape} usage={props.usage}>
        {props.text}
      </Tag>
    )
  },
})

figma.connect(Tag, SELECTION, {
  imports,
  variant: {
    'show icon': 'True',
  },
  props,
  example: (props) => {
    return (
      <Tag palette={props.palette} shape={props.shape} usage={props.usage}>
        {props.icon}
        {props.text}
      </Tag>
    )
  },
})
