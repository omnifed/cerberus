import figma from '@figma/code-connect'

const imports = ['']

const props = {
  position: figma.enum('Position', {
    top: 'top',
    right: 'right',
    bottom: 'bottom',
    left: 'left',
  }),
  text: figma.string('text'),
  icon: figma.children('*'),
}

figma.connect(
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=1831-88823&m=dev',
  {
    props,
    imports,

    example: (props) => {
      return (
        <span
          aria-label={props.text}
          data-tooltip
          data-position={props.position}
        >
          {props.icon}
        </span>
      )
    },
  },
)
