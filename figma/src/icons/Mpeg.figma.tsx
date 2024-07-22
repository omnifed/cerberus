import figma from '@figma/code-connect'
import { Mpeg } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Mpeg,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-1158',

  {
    imports: ["import { Mpeg } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Mpeg size={props.size} />,
  },
)
