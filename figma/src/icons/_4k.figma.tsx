import figma from '@figma/code-connect'
import { _4k } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  _4k,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-2',

  {
    imports: ["import { _4k } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <_4k size={props.size} />,
  },
)
