import figma from '@figma/code-connect'
import { Rotate } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Rotate,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9612-182',

  {
    imports: ["import { Rotate } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Rotate size={props.size} />,
  },
)
