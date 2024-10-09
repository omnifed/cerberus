import figma from '@figma/code-connect'
import { Tag } from '@cerberus-design/react'

const SELECTION =
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=6948-20560&m=dev'

const imports = ["import { Tag } from '@cerberus/react'"]

const props = {
  palette: figma.enum('Palette', {
    page: 'page',
    info: 'info',
    success: 'success',
    warning: 'warning',
    danger: 'danger',
  }),
  shape: figma.enum('Shape', {
    squared: 'square',
    pill: 'pill',
  }),
  usage: figma.enum('Usage', {
    filled: 'filled',
    outlined: 'outlined',
  }),
  // Figma specific
  text: figma.string('label'),
  icon: figma.children('*'),
}

figma.connect(Tag, SELECTION, {
  imports,
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

figma.connect(Tag, SELECTION, {
  imports,
  variant: {
    Gradient: 'charon-dark',
  },
  props,
  example: (props) => {
    return (
      <Tag gradient="charon-dark" shape={props.shape} usage={props.usage}>
        {props.icon}
        {props.text}
      </Tag>
    )
  },
})

figma.connect(Tag, SELECTION, {
  imports,
  variant: {
    Gradient: 'charon-light',
  },
  props,
  example: (props) => {
    return (
      <Tag gradient="charon-light" shape={props.shape} usage={props.usage}>
        {props.icon}
        {props.text}
      </Tag>
    )
  },
})

figma.connect(Tag, SELECTION, {
  imports,
  variant: {
    Gradient: 'thanatos-light',
  },
  props,
  example: (props) => {
    return (
      <Tag gradient="thanatos-light" shape={props.shape} usage={props.usage}>
        {props.icon}
        {props.text}
      </Tag>
    )
  },
})
