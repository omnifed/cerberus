import figma from '@figma/code-connect'
import { Cube } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Cube,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9388-900',

  {
    imports: ["import { Cube } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Cube size={props.size} />,
  },
)
