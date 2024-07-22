import figma from '@figma/code-connect'
import { Worship } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Worship,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-931',

  {
    imports: ["import { Worship } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Worship size={props.size} />,
  },
)
