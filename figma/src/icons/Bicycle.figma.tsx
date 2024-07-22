import figma from '@figma/code-connect'
import { Bicycle } from '@cerberus-design/icons'

// This file was generated using the create:icons script

figma.connect(
  Bicycle,
  'https://figma.com/file/ducwqOCxoxcWc3ReV3FYd8/?node-id=9455-3234',

  {
    imports: ["import { Bicycle } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <Bicycle size={props.size} />,
  },
)
