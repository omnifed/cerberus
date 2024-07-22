import figma from '@figma/code-connect'
import { Incomplete } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Incomplete,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9663-240',

  {
    imports: ["import { Incomplete } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Incomplete size={props.size} />,
  },
)
