import figma from '@figma/code-connect'
import { IconButton } from '@cerberus-design/react'
import { css } from 'styled-system/css'

const SELECTION =
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=7705-20494&m=dev'

const imports = [
  "import { IconButton } from '@cerberus/react'",
  "import { css } from '@cerberus/styled-system/css'",
]

const props = {
  palette: figma.enum('Palette', {
    action: 'action',
    danger: 'danger',
  }),
  usage: figma.enum('Usage', {
    filled: 'filled',
    outlined: 'outlined',
    ghost: 'ghost',
  }),
  size: figma.enum('Size', {
    sm: 'sm',
    lg: 'lg',
  }),
  // Figma specific
  icon: figma.children('*'),
}

figma.connect(IconButton, SELECTION, {
  imports,
  props,
  example: (props) => {
    return (
      <IconButton
        ariaLabel="ADD DESCRIPTIVE LABEL"
        palette={props.palette}
        usage={props.usage}
        size={props.size}
      >
        {props.icon}
      </IconButton>
    )
  },
})

figma.connect(IconButton, SELECTION, {
  imports,
  variant: {
    Usage: 'text-alt',
  },
  props,
  example: (props) => {
    return (
      <IconButton
        ariaLabel="ADD DESCRIPTIVE LABEL"
        className={css({
          bgColor: 'action.bg.100.initial',
          _hover: {
            bgColor: 'action.bg.100.hover',
          },
        })}
        palette="action"
        usage={props.usage}
        size={props.size}
      >
        {props.icon}
      </IconButton>
    )
  },
})
