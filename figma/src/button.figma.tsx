import figma from '@figma/code-connect'
import { Button } from '@cerberus-design/react'

const SELECTION =
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=8637-3339&m=dev'

const imports = ["import { Button } from '@cerberus/react'"]

const props = {
  palette: figma.enum('Palette', {
    action: 'action',
    danger: 'danger',
  }),
  shape: figma.enum('Shape', {
    sharp: 'sharp',
    rounded: 'rounded',
  }),
  usage: figma.enum('Usage', {
    filled: 'filled',
    outline: 'outline',
    text: 'text',
  }),
  // Figma specific
  text: figma.textContent('Action'),
  icon: figma.children('*'),
}

figma.connect(Button, SELECTION, {
  imports,
  props,
  example: (props) => {
    return (
      <Button palette={props.palette} shape={props.shape} usage={props.usage}>
        {props.text}
      </Button>
    )
  },
})

figma.connect(Button, SELECTION, {
  imports,
  variant: {
    'Show Icon': 'True',
    'Icon Position': 'start',
  },
  props,
  example: (props) => {
    return (
      <Button palette={props.palette} shape={props.shape} usage={props.usage}>
        {props.icon}
        {props.text}
      </Button>
    )
  },
})

figma.connect(Button, SELECTION, {
  imports,
  variant: {
    'Show Icon': 'True',
    'Icon Position': 'end',
  },
  props,
  example: (props) => {
    return (
      <Button palette={props.palette} shape={props.shape} usage={props.usage}>
        {props.text}
        {props.icon}
      </Button>
    )
  },
})
